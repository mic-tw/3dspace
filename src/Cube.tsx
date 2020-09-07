import * as React from "react";
import "./styles.css";

function Cube() {
  // transform: rotate3d(0.5, 1, 0.3, 120deg);

  return (
    <div className="cube">
      <div className="block face">FACE</div>
      <div className="block back">BACK</div>
      <div className="block left">L</div>
      <div className="block right">R</div>
      <div className="block top">TOP</div>
      <div className="block bottom">BOT</div>
    </div>
  );
}
export default Cube;
