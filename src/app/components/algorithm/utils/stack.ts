export class Stack<T = any> {
    items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): void {
        this.items.pop();
    }

    top(): T {
        return this.items[this.items.length - 1];
    }

    clear(): void {
        this.items.length = 0;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}
