import { StackRaw } from "@/components";

export default function HomePage() {
  return (
    <div className="container">
      <StackRaw direction={{ xs: "vertical" }} gap={{ xs: "32px" }}>
        <StackRaw
          direction={{
            xs: "vertical",
            md: "horizontal",
          }}
          gap={{
            xs: "4px",
            sm: "8px",
            md: "16px",
            lg: "32px",
            xl: "48px",
            "2xl": "64px",
          }}
        >
          <div style={{ width: 64, height: 64, background: "red" }} />
          <div style={{ width: 64, height: 64, background: "blue" }} />
        </StackRaw>
        <div style={{ height: 1, background: "#ccc" }} />
        <StackRaw
          direction={{ xs: "vertical" }}
          gap={{
            xs: "4px",
            sm: "8px",
            md: "16px",
            lg: "32px",
            xl: "48px",
            "2xl": "64px",
          }}
        >
          <div style={{ width: 64, height: 64, background: "green" }} />
          <div style={{ width: 64, height: 64, background: "orange" }} />
        </StackRaw>
        <div style={{ height: 1, background: "#ccc" }} />
        <StackRaw
          direction={{
            xs: "vertical",
            sm: "horizontal",
            md: "vertical",
            lg: "horizontal",
            xl: "vertical",
            "2xl": "horizontal",
          }}
          gap={{
            xs: "8px",
          }}
        >
          <div style={{ width: 32, height: 32, background: "pink" }} />
          <div style={{ width: 32, height: 32, background: "yellow" }} />
        </StackRaw>
      </StackRaw>
    </div>
  );
}
