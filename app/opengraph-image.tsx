import { ImageResponse } from "next/og";

export const alt =
  "Pranav Hole — Freelance AI Engineer & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#FFF9E9",
        color: "#111111",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "64px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          background: "#F7C3C5",
          border: "6px solid #111111",
          borderRadius: "34px 28px 38px 30px",
          boxShadow: "14px 16px 0 #7653D8",
          display: "flex",
          gap: "48px",
          height: "100%",
          padding: "58px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#FFE58F",
            border: "6px solid #111111",
            borderRadius: "44% 56% 49% 51%",
            display: "flex",
            fontSize: 104,
            fontWeight: 900,
            flexShrink: 0,
            height: 220,
            justifyContent: "center",
            width: 220,
          }}
        >
          PH
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "18px",
            minWidth: 0,
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 900 }}>Pranav Hole</div>
          <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.08 }}>
            Freelance AI Engineer & Full-Stack Developer
          </div>
          <div style={{ fontSize: 27 }}>AI Agents • SaaS • APIs • Cloud</div>
        </div>
      </div>
    </div>,
    size,
  );
}
