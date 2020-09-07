import React from "react";
import Cube from "./Cube";

function rotateMatrix(x: number, y: number, z: number): Array<number> {
  const sinX = Math.sin(x),
    cosX = Math.sin(x),
    sinY = Math.sin(y),
    cosY = Math.cos(y),
    sinZ = Math.sin(z),
    cosZ = Math.cos(z);
  return [
    cosY * cosZ - sinX * sinY * sinZ,
    cosX * sinZ,
    sinY * cosZ + sinX * cosY * sinZ,
    -cosY * sinZ - sinX * sinY * cosZ,
    cosX * cosZ,
    -sinY * sinZ + sinX * cosY * cosZ,
    -cosX * sinY,
    -sinX,
    cosX * cosY
  ];
}

function Space(props: any) {
  let boxes = [],
    { rotateX, rotateY, rotateZ } = props;
  for (let i = 0; i < props.count; i++) {
    boxes.push(<Cube key={`cube_${i}`} />);
  }
  console.log("Space re-render");
  const x = (Math.PI * rotateX) / 180,
    y = (Math.PI * rotateY) / 180,
    z = (Math.PI * rotateZ) / 180;
  console.log("Space rotate: (", x, y, x, ")");
  const matrix: Array<number> = rotateMatrix(x, y, z);

  console.log("Space matrix", matrix);
  const [a1, a2, a3, b1, b2, b3, c1, c2, c3] = matrix;
  const styles = {
    transform: `matrix3d(${a1}, ${a2}, ${a3}, 0, ${b1}, ${b2}, ${b3}, 0, ${c1}, ${c2}, ${c3}, 0, 0, 0, 0, 1)`
  };
  console.log("Styles:", styles);
  return (
    <div className="space" style={styles}>
      {boxes}
    </div>
  );
}
export default Space;
