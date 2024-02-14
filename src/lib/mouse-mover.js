/**
 * Class responsible for moving the mouse and pressing keys.
 */
export class MouseMover {
	/**
	 * Creates an instance of MouseMover.
	 * @param {number} size The movement size for the mouse.
	 * @param {number} delay The delay between movements in milliseconds.
	 * @param {Object} mouseController The controller for mouse actions.
	 * @param {Object} keyboardController The controller for keyboard actions.
	 * @param {Object} directions An object containing methods to calculate movement directions.
	 */
	constructor(size, delay, mouseController, keyboardController, directions) {
			this.size = size;
			this.delay = delay;
			this.mouse = mouseController;
			this.keyboard = keyboardController;
			this.directions = directions; // Expected to be an object with methods like { left, right, up, down }
	}

	/**
	 * Moves the mouse in the specified direction by a certain distance.
	 * @param {string} direction The direction to move the mouse ('left', 'right', 'up', 'down').
	 * @param {number} distance The distance to move the mouse in the specified direction.
	 */
	async moveMouse(direction, distance) {
			try {
					await this.mouse.move(this.directions[direction](distance));
			} catch (e) {
					console.error(`Error moving the mouse: ${e}`);
			}
	}

	/**
	 * Presses a random key from a predefined list of keys.
	 */
	async pressSomeKey() {
			try {
					const keys = [
							'Escape',
							'Tab',
							'Shift',
							'Alt',
							'CapsLock',
							'ArrowUp',
							'ArrowDown',
							'ArrowLeft',
							'ArrowRight',
					];
					const key = keys[Math.floor(Math.random() * keys.length)];
					await this.keyboard.releaseKey(key);
			} catch (e) {
					console.error(`Error pressing the key: ${e}`);
			}
	}

	/**
	 * Moves the mouse in a square pattern based on the configured size and delay.
	 */
	async moveInSquare() {
			await this.moveMouse('left', this.size);
			await this.delayOperation(this.delay);
			await this.moveMouse('up', this.size);
			await this.delayOperation(this.delay);
			await this.moveMouse('right', this.size);
			await this.delayOperation(this.delay);
			await this.moveMouse('down', this.size);
			await this.delayOperation(this.delay);
	}

	/**
	 * Delays the operation by a specified amount of time.
	 * @param {number} delay The amount of time to delay in milliseconds.
	 * @returns {Promise<void>} A promise that resolves after the specified delay.
	 */
	async delayOperation(delay) {
			return new Promise((resolve) => setTimeout(resolve, delay));
	}

	/**
	 * Starts the mouse moving process, continuously moving in a square and pressing keys.
	 * Continues indefinitely until the process is manually stopped.
	 */
	async start() {
			console.log('Moving the mouse in a square..., (press Ctrl + C to stop)');
			while (true) {
					await this.pressSomeKey();
					await this.moveInSquare();
			}
	}
}
