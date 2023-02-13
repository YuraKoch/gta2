export function cosBetweenTwoPoints(x1, y1, x2, y2) {
  const xDiff = x1 - x2;
  return xDiff / distanceBetweenTwoPoints(x1, y1, x2, y2);
}

export function sinBetweenTwoPoints(x1, y1, x2, y2) {
  const yDiff = y1 - y2;
  return yDiff / distanceBetweenTwoPoints(x1, y1, x2, y2);
}

export function distanceBetweenTwoPoints(x1, y1, x2, y2) {
  const xDiff = x1 - x2;
  const yDiff = y1 - y2;
  return Math.hypot(xDiff, yDiff);
}