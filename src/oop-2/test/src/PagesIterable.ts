type Class = new (...args: any[]) => any;

export function PagesIterable<SuperClass extends Class>(superclass: SuperClass) {
    return class extends superclass {
        private counter = 0;
        public [Symbol.iterator]() {
            return {
                next: () => {
                    const pages = this.pages.getPages();
                    const pagesLength = pages.length;
                    const firstPartOfText = this.toString();
                    const secondPartOfText = pages[this.counter].toString();

                    this.counter++;

                    return {
                        done: this.counter === pagesLength,
                        value: firstPartOfText + ' ' + secondPartOfText,
                    };
                },
            };
        }
    };
}
