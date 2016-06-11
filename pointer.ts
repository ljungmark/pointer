interface CursorInterface {
    move(x: number, y: number): void;
    toggle(): void;
}

class Cursor implements CursorInterface {
    private cursor: HTMLDivElement;
    private x: number;
    private y: number;

    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.classList.add('cursor', '_hidden');
        document.body.appendChild(this.cursor);
    }

    public move(x: number, y: number): void {
        this.x = x;
        this.y = y;

        (<any>Object).assign(this.cursor.style, { left: `${this.x}px`, top: `${this.y}px` });

        if (this.cursor.classList.contains("_hidden")) this.toggle();

        return;
    }

    public toggle(): void {
        this.cursor.classList.toggle("_hidden");

        return;
    }

    public active() {
        this.cursor.classList.toggle("_active");

        return;
    }
}

export { Cursor };
