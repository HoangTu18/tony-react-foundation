import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState({
    red: "#ff0000",
    gold: "#ffd700",
    cyan: "#00ffff",
    magenta: "#ff00ff"
  });
  const [checked, setChecked] = useState("");

  const onChange = (e, color) => {
    setChecked(color);
    if (
      e.target.checked &&
      (color === "red" ||
        color === "gold" ||
        color === "cyan" ||
        color === "magenta")
    ) {
      setColor({
        red: color,
        gold: color,
        cyan: color,
        magenta: color
      });
    } else {
      setChecked("");
      setColor({
        red: "#ff0000",
        gold: "#ffd700",
        cyan: "#00ffff",
        magenta: "#ff00ff"
      });
    }
  };

  return (
    <div className="App">
      <div style={{ background: color["red"] }}>
        <input
          type="checkbox"
          name="color"
          checked={checked === "red"}
          onChange={(e) => onChange(e, "red")}
        />
        Red
      </div>
      <div style={{ background: color["gold"] }}>
        <input
          type="checkbox"
          name="color"
          checked={checked === "gold"}
          onChange={(e) => onChange(e, "gold")}
        />
        Gold
      </div>
      <div style={{ background: color["cyan"] }}>
        <input
          type="checkbox"
          name="color"
          checked={checked === "cyan"}
          onChange={(e) => onChange(e, "cyan")}
        />
        Aqua
      </div>
      <div style={{ background: color["magenta"] }}>
        <input
          type="checkbox"
          name="color"
          checked={checked === "magenta"}
          onChange={(e) => onChange(e, "magenta")}
        />
        Purple
      </div>
    </div>
  );
}
