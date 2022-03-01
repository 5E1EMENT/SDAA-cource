import { Page } from './page';

export class Pages {
    private pages: Page[];
    constructor(pages: Page[]) {
        this.pages = pages;
    }

    public getPages(): Page[] {
        return this.pages;
    }
}
