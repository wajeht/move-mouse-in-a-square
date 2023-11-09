#! /usr/bin/env node

import MouseMover from './mouse-mover.js';

const mouse = new MouseMover(50, 1000);
await mouse.start();
