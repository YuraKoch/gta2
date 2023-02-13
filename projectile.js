import { cosBetweenTwoPoints, sinBetweenTwoPoints } from "./utilities.js";

export class Projectile {
  constructor(x, y, targetX, targetY, context) {
    this.x = x;
    this.y = y;
    this.context = context;
    this.radius = 3;
    this.color = "#810000";
    this.velocity = {
      x: cosBetweenTwoPoints(targetX, targetY, x, y) * 15,
      y: sinBetweenTwoPoints(targetX, targetY, x, y) * 15,
    };;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.fillStyle = this.color;
    this.context.fill();
  }

  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}