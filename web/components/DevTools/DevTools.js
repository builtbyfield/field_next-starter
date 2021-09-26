import { useState } from "react";

export function DevTools() {
  const [hideGrid, setHideGrid] = useState(true);

  return (
    <div className="dev-tools">
      <button
        className="dev-tools-toggle"
        onClick={() => setHideGrid(!hideGrid)}
      />
      <div className="dev-tools-grid" hidden={hideGrid} />
    </div>
  );
}
