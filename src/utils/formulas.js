export const pathFromBezierCurve = (cubicBezierCurve) => {
  const { initialAxis, initialControlPoint, endingControlPoint, endingAxis } =
    cubicBezierCurve;
  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};

export const radiansToDegrees = (radians) => (radians * 180) / Math.PI;

// https://math.stackexchange.com/questions/714378/find-the-angle-that-creating-with-y-axis-in-degrees
export const calculateAngle = (x1, y1, x2, y2) => {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  // Use Math.atan2 for accurate angle calculation
  const radians = Math.atan2(deltaY, deltaX);
  console.log("radians:", radians);
  return radiansToDegrees(radians);
};

export const getCanvasPosition = (event) => {
  // mouse position on auto-scaling canvas
  // https://stackoverflow.com/a/10298843/1232793

  const svg = document.getElementById("aliens-go-home-canvas");
  const point = svg.createSVGPoint();

  point.x = event.clientX;
  point.y = event.clientY;
  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return { x, y };
};
