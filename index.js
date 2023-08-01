import { mouse, left, right, up, down } from "@nut-tree/nut-js";

export default class MouseMover {
  constructor(size, delay) {
    this.size = size;
    this.delay = delay;
  }

  async moveMouse(direction, distance) {
    try {
      await mouse.move(direction(distance));
    } catch (e) {
      console.error(`Error moving the mouse: ${e}`);
    }
  }

  async moveInSquare() {
    await this.moveMouse(left, this.size);
    await this.delayOperation(this.delay);
    await this.moveMouse(up, this.size);
    await this.delayOperation(this.delay);
    await this.moveMouse(right, this.size);
    await this.delayOperation(this.delay);
    await this.moveMouse(down, this.size);
    await this.delayOperation(this.delay);
  }

  async delayOperation(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  async start() {
    console.log("Moving the mouse in a square..., (press Ctrl-C to stop)");
    while (true) {
      await this.moveInSquare();
    }
  }
}
