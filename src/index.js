#! /usr/bin/env node

import { mouse, left, right, up, down, keyboard } from '@nut-tree/nut-js';
import { MouseMover } from './lib/mouse-mover.js';

await new MouseMover(50, 1000, mouse, keyboard, { left, right, up, down }).start();
