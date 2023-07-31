#!/usr/bin/env node

import { mouse, left, right, up, down } from "@nut-tree/nut-js";

const moveMouse = async (direction, distance) => {
  try {
    await mouse.move(direction(distance));
  } catch (e) {
    console.error(`Error moving the mouse: ${e}`);
  }
};

const moveInSquare = async (size, delay) => {
  await moveMouse(left, size);
  await new Promise((resolve) => setTimeout(resolve, delay));
  await moveMouse(up, size);
  await new Promise((resolve) => setTimeout(resolve, delay));
  await moveMouse(right, size);
  await new Promise((resolve) => setTimeout(resolve, delay));
  await moveMouse(down, size);
  await new Promise((resolve) => setTimeout(resolve, delay));
};

const main = async () => {
  const size = 50;
  const delay = 1000; // milliseconds

  console.log("Moving the mouse in a square...");
  while (true) {
    await moveInSquare(size, delay);
  }
};

main().catch((e) => console.error(`Error in main: ${e}`));
