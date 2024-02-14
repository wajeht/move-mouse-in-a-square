export class MouseMover {
	constructor(size, delay, mouseController, keyboardController, directions) {
			this.size = size;
			this.delay = delay;
			this.mouse = mouseController;
			this.keyboard = keyboardController;
			this.directions = directions;
	}

	async moveMouse(direction, distance) {
			try {
					await this.mouse.move(this.directions[direction](distance));
			} catch (e) {
					console.error(`Error moving the mouse: ${e}`);
			}
	}

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

	async delayOperation(delay) {
			return new Promise((resolve) => setTimeout(resolve, delay));
	}

	async start() {
			console.log('Moving the mouse in a square..., (press Ctrl + C to stop)');
			while (true) {
					await this.pressSomeKey();
					await this.moveInSquare();
			}
	}
}
