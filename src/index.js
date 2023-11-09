#! /usr/bin/env node

import MouseMover from './lib/mouse-mover.js';

const mouse = new MouseMover(50, 1000);
await mouse.start();
