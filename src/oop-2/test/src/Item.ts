import { Pages } from './pages';
import { PagesIterable } from './PagesIterable';

export abstract class Item extends PagesIterable(Object) {
    private pages: Pages;

    abstract toString(): string;

    public getCounter(): number {
        return this.pages.getPages().length;
    }

    constructor(pages: Pages) {
        super();
        this.pages = pages;
    }
}
