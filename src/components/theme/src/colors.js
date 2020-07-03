import { rgba } from "polished";

export default {
  fixed: {
    black: "#000000",
    white: "#FFFFFF",
  },
  tint: {
    red: "#FF3B30",
    orange: "#FF9500",
    yellow: "#FFCC00",
    green: "#34C759",
    teal: "#5AC8FA",
    blue: "#007AFF",
    indigo: "#5856D6",
    purple: "#AF52DE",
    pink: "#FF2D55",
  },
  background: ["#f5f6f8", "#FFFFFF", "#FFFFFF"],
  fill: [
    rgba("#747480", 0.04),
    rgba("#767680", 0.08),
    rgba("#787880", 0.12),
    rgba("#787880", 0.16),
  ],
  border: [rgba("#25282c", 0.08), rgba("#25282c", 0.12), rgba("#25282c", 0.2)],
  text: [
    "#25282c",
    rgba("#25282c", 0.7),
    rgba("#25282c", 0.35),
    rgba("#25282c", 0.18),
  ],
  modes: {
    dark: {
      fixed: {
        black: "#000000",
        white: "#FFFFFF",
      },
      tint: {
        red: "#FF453A",
        orange: "#FF9F0A",
        yellow: "#FFD60A",
        green: "#32D74B",
        teal: "#64D2FF",
        blue: "#0A84FF",
        indigo: "#5E5CE6",
        purple: "#BF5AF2",
        pink: "#FF375F",
      },
      background: ["#1c1f22", "#212427", "#2d3033"],
      fill: [
        rgba("#5c5e60", 0.18),
        rgba("#5c5e60", 0.24),
        rgba("#5c5e60", 0.32),
        rgba("#5c5e60", 0.36),
      ],
      border: [
        rgba("#000", 0.36),
        rgba("#e1e1e1", 0.18),
        rgba("#e1e1e1", 0.36),
      ],
      text: [
        "#e1e1e1",
        rgba("#e1e1e1", 0.7),
        rgba("#e1e1e1", 0.35),
        rgba("#e1e1e1", 0.18),
      ],
    },
  },
};
