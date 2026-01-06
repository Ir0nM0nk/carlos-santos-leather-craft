import React from "react";
import { useTranslation, type Lang } from "@/i18n";

const TranslateWidget: React.FC = () => {
  const { lang, setLang } = useTranslation();

  return (
    <div style={containerStyle} aria-hidden={false}>
      <div style={widgetStyle}>
        <div style={{ fontSize: 12, marginBottom: 6, fontWeight: 600 }}>Idioma</div>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as Lang)}
          aria-label="Selecionar idioma"
          style={selectStyle}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="es">Español</option>
        </select>
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
  background: "#000",
  color: "#b87333",
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
  border: "1px solid #b87333",
  background: "transparent",
  color: "#b87333",
};

export default TranslateWidget;
