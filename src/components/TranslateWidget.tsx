import React, { useState, useRef } from "react";

type Lang = "off" | "pt" | "en" | "fr" | "de";

const LANG_LABEL: Record<Lang, string> = {
  off: "Off",
  pt: "Português",
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

// Minimal client-side translator that uses a public LibreTranslate instance.
// It concatenates text nodes with a delimiter, sends a single request,
// then splits and applies the translated chunks back. Falls back to no-op
// if the translation API fails.
const TranslateWidget: React.FC = () => {
  const [lang, setLang] = useState<Lang>("pt");
  const [loading, setLoading] = useState(false);
  const originalRef = useRef<Map<Node, string> | null>(null);

  const host = "/api/translate";

  const shouldTranslateNode = (n: Node) => {
    if (!n || n.nodeType !== Node.TEXT_NODE) return false;
    const text = n.textContent?.trim();
    if (!text) return false;
    if (text.length < 2) return false;
    const parent = n.parentElement;
    if (!parent) return false;
    const tag = parent.tagName.toLowerCase();
    const skip = [
      "script",
      "style",
      "textarea",
      "input",
      "code",
      "pre",
      "svg",
      "noscript",
    ];
    if (skip.includes(tag)) return false;
    return true;
  };

  const collectTextNodes = (): Node[] => {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          return shouldTranslateNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        },
      },
      false
    );

    const nodes: Node[] = [];
    let n = walker.nextNode();
    while (n) {
      nodes.push(n);
      n = walker.nextNode();
    }
    return nodes;
  };

  const translateTo = async (target: string) => {
    try {
      setLoading(true);
      const nodes = collectTextNodes();
      if (nodes.length === 0) return;

      // Save originals on first translation
      if (!originalRef.current) {
        originalRef.current = new Map(nodes.map((nd) => [nd, nd.textContent || ""]));
      }

      const texts = nodes.map((nd) => nd.textContent?.trim() || "");
      const delimiter = "|||__GT_DELIM__|||";
      const payloadText = texts.join(delimiter);

      const res = await fetch(host, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: payloadText, source: "pt", target, format: "text" }),
      });

      if (!res.ok) {
        const t = await res.text().catch(() => "");
        console.error("TranslateWidget: non-OK response", res.status, t);
        throw new Error("translation failed");
      }

      const data = await res.json().catch((e) => {
        console.error("TranslateWidget: failed parsing JSON", e);
        return null;
      });

      let translatedFull = "";
      // Handle multiple possible response shapes
      if (!data) {
        translatedFull = "";
      } else if (typeof data.translatedText === "string") {
        translatedFull = data.translatedText;
      } else if (Array.isArray(data) && data.length > 0) {
        // e.g. array of translations or array of objects
        if (typeof data[0] === "string") {
          translatedFull = data.join(delimiter);
        } else if (data[0] && typeof data[0].translatedText === "string") {
          translatedFull = data.map((d: any) => d.translatedText).join(delimiter);
        }
      } else if (typeof data === "string") {
        translatedFull = data;
      }

      const translated = translatedFull.split(delimiter);

      // If split length mismatches, fallback to whole-text replace
      if (translated.length === texts.length) {
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].textContent = translated[i];
        }
      } else {
        // Fallback: try replacing big chunk where possible
        document.body.innerText = translatedFull || document.body.innerText;
      }
    } catch (e) {
      // Silently fail; keep original text.
      console.error("TranslateWidget error:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = async (next: Lang) => {
    if (next === "off" || next === "pt") {
      // restore originals
      const map = originalRef.current;
      if (map) {
        map.forEach((text, node) => {
          node.textContent = text;
        });
      }
      setLang(next);
      return;
    }

    setLang(next);
    await translateTo(next);
  };

  return (
    <div style={containerStyle} aria-hidden={false}>
      <div style={widgetStyle}>
        <div style={{ fontSize: 12, marginBottom: 6, fontWeight: 600 }}>Translate</div>
        <select
          value={lang}
          onChange={(e) => handleChange(e.target.value as Lang)}
          aria-label="Translate website"
          style={selectStyle}
        >
          <option value="off">Widget Off</option>
          <option value="pt">Português (original)</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
        <div style={{ marginTop: 8, fontSize: 12 }}>
          <button
            onClick={() => handleChange("pt")}
            style={btnStyle}
            disabled={loading}
          >
            Reset
          </button>
          <div style={{ marginTop: 6, fontSize: 11, color: "#666" }}>
            {loading ? "Translating…" : LANG_LABEL[lang]}
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  position: "fixed",
  left: 16,
  bottom: 16,
  zIndex: 9999,
};

const widgetStyle: React.CSSProperties = {
  background: "white",
  borderRadius: 8,
  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
  padding: 12,
  width: 170,
  fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
};

const selectStyle: React.CSSProperties = {
  width: "100%",
  padding: "6px 8px",
  borderRadius: 6,
  border: "1px solid #e5e7eb",
};

const btnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: 6,
  border: "none",
  background: "#111827",
  color: "white",
  cursor: "pointer",
};

export default TranslateWidget;
