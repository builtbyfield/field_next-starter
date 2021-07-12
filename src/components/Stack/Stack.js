import clsx from "clsx";

export function Stack({ direction, gap, children }) {
  return (
    <div
      className={clsx([
        {
          "": direction === "horizontal",
          "": direction === "vertical",
        },
        {
          "": gap,
        },
      ])}
    >
      {children.map((child, i) => (
        <div key={`child-${i}`}>{child}</div>
      ))}
    </div>
  );
}
