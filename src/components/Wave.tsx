import { FC, useEffect } from 'react';

import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';

// Utility to create random numbers within a range
const randomInRange = (min, max) => Math.random() * (max - min) + min;

// Flower object with position, velocity, and rendering logic
class Flower {
  constructor(x, y, size, speedX, speedY, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
  }

  update(width, height) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around screen edges
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }
}

const FlyingFlowers: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;

  const flowerCount = 50;
  const flowers = [];

  useEffect(() => {
    if (!context) return;

    // Initialize flowers
    for (let i = 0; i < flowerCount; i++) {
      flowers.push(
        new Flower(
          randomInRange(0, width),
          randomInRange(0, height),
          randomInRange(5, 15), // size
          randomInRange(-1, 1), // speedX
          randomInRange(-0.5, 0.5), // speedY
          `hsl(${randomInRange(0, 360)}, 70%, 70%)` // random pastel color
        )
      );
    }

    const render = () => {
      context.clearRect(0, 0, width, height);

      flowers.forEach((flower) => {
        flower.update(width, height);
        flower.draw(context);
      });

      requestAnimationFrame(render);
    };

    render();
  }, [context, width]);

  return null;
};

export default FlyingFlowers;
