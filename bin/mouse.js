#! /usr/bin/env node

import MouseMover from '../index.js';

const mouse = new MouseMover(50, 1000);
await mouse.start();
