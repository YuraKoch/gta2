export class Particle {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.context = context;
    this.radius = Math.random() + 2;
    this.color = "#920101";
    this.velocity = {
      x: (Math.random() - 0.5) * Math.random() * 5,
      y: (Math.random() - 0.5) * Math.random() * 5,
    };
    this.alpha = 1;
    this.friction = 0.99;
  }

  draw() {
    this.context.save()
    this.context.globalAlpha = this.alpha;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.restore()
  }

  update() {
    this.draw();
    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.alpha -= 0.04;
  }
}