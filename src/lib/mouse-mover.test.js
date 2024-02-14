import { describe, it, expect, vi, beforeEach } from 'vitest';
import {MouseMover} from './mouse-mover.js';

describe('MouseMover', () => {
    let mouseMover;
    const size = 100;
    const delay = 50;
    const mockMouse = {
        move: vi.fn(),
    };
    const mockKeyboard = {
        releaseKey: vi.fn(),
    };
    const mockDirections = {
        left: vi.fn().mockImplementation(distance => ({ x: -distance, y: 0 })),
        right: vi.fn().mockImplementation(distance => ({ x: distance, y: 0 })),
        up: vi.fn().mockImplementation(distance => ({ x: 0, y: -distance })),
        down: vi.fn().mockImplementation(distance => ({ x: 0, y: distance })),
    };

    beforeEach(() => {
        vi.resetAllMocks();
        mouseMover = new MouseMover(size, delay, mockMouse, mockKeyboard, mockDirections);
    });

    it.skip('should move the mouse in the specified direction and distance', async () => {
        const direction = 'left';
        await mouseMover.moveMouse(direction, size);
        expect(mockDirections[direction]).toHaveBeenCalledWith(size);
        expect(mockMouse.move).toHaveBeenCalledWith({ x: -size, y: 0 });
    });

    it('should press a random key', async () => {
        await mouseMover.pressSomeKey();
        expect(mockKeyboard.releaseKey).toHaveBeenCalled();
    });

    it('should move in a square pattern', async () => {
        await mouseMover.moveInSquare();
        ['left', 'up', 'right', 'down'].forEach(direction => {
            expect(mockDirections[direction]).toHaveBeenCalledWith(size);
        });
        expect(mockMouse.move).toHaveBeenCalledTimes(4);
    });

    it('should handle delay operations', async () => {
        const start = performance.now();
        await mouseMover.delayOperation(delay);
        const end = performance.now();
        expect(end - start).toBeGreaterThanOrEqual(delay);
    });
});
