import { Page } from './Page';
type T = /*unresolved*/ any;

export const PagesIterable = (superclass: T) =>
    class extends superclass {
        private counter = 0;
        public [Symbol.iterator]() {
            return {
                next: () => {
                    const pagesLength = this.pages.pages.length;
                    const firstPartOfText = this.toString();
                    const secondPartOfText = this.pages.pages[this.counter].toString();

                    this.counter++;

                    return {
                        done: this.counter === pagesLength,
                        value: firstPartOfText + ' ' + secondPartOfText,
                    };
                },
            };
        }
    };
