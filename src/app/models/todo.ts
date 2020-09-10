export class Todo {
    title: string;
    complete: boolean;
    
    constructor(title: string) {
        this.complete = false;
        this.title = title;
    }
}