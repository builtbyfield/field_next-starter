import { useState } from "react";

export function DevTools() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="dev-tools">
      <button
        className="dev-tools-toggle"
        onClick={() => setIsVisible(!isVisible)}
      />
      <div className="dev-tools-grid" hidden={isVisible} />
    </div>
  );
}
