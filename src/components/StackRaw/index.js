import clsx from "clsx";

import * as styles from "./styles.module.css";

export function StackRaw({
  direction = { xs: "vertical", md: "horizontal", xl: "vertical" },
  gap = { xs: "4px", md: "32px", xl: "64px" },
  children,
  breakpoints,
}) {
  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.parent)}
        style={{
          // Direction
          "--xs-direction":
            direction.xs === "vertical"
              ? "column"
              : direction.xs === "horizontal"
              ? "row"
              : null,
          "--sm-direction":
            direction.sm === "vertical"
              ? "column"
              : direction.sm === "horizontal"
              ? "row"
              : null,
          "--md-direction":
            direction.md === "vertical"
              ? "column"
              : direction.md === "horizontal"
              ? "row"
              : null,
          "--lg-direction":
            direction.lg === "vertical"
              ? "column"
              : direction.lg === "horizontal"
              ? "row"
              : null,
          "--xl-direction":
            direction.xl === "vertical"
              ? "column"
              : direction.xl === "horizontal"
              ? "row"
              : null,
          "--2xl-direction":
            direction["2xl"] === "vertical"
              ? "column"
              : direction["2xl"] === "horizontal"
              ? "row"
              : null,
          // Gap
          "--xs-gap": gap.xs || null,
          "--sm-gap": gap.sm || null,
          "--md-gap": gap.md || null,
          "--lg-gap": gap.lg || null,
          "--xl-gap": gap["xl"] || null,
          "--2xl-gap": gap["2xl"] || null,
        }}
      >
        {children.map((child, i) => (
          <div className={clsx(styles.child)} key={`child-${i}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
