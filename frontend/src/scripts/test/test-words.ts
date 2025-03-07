class Words {
  public list: string[];
  public length: number;
  public currentIndex: number;
  constructor() {
    this.list = [];
    this.length = 0;
    this.currentIndex = 0;
  }
  get(i?: undefined, raw?: boolean): string[];
  get(i: number, raw?: boolean): string;
  get(i?: number | undefined, raw = false): string | string[] {
    if (i === undefined) {
      return this.list;
    } else {
      if (raw) {
        return this.list[i]?.replace(/[.?!":\-,]/g, "")?.toLowerCase();
      } else {
        return this.list[i];
      }
    }
  }
  getCurrent(): string {
    return this.list[this.currentIndex];
  }
  getLast(): string {
    return this.list[this.list.length - 1];
  }
  push(word: string): void {
    this.list.push(word);
    this.length = this.list.length;
  }
  reset(): void {
    this.list = [];
    this.currentIndex = 0;
    this.length = this.list.length;
  }
  resetCurrentIndex(): void {
    this.currentIndex = 0;
  }
  decreaseCurrentIndex(): void {
    this.currentIndex--;
  }
  increaseCurrentIndex(): void {
    this.currentIndex++;
  }
  clean(): void {
    for (const s of this.list) {
      if (/ +/.test(s)) {
        const id = this.list.indexOf(s);
        const tempList = s.split(" ");
        this.list.splice(id, 1);
        for (let i = 0; i < tempList.length; i++) {
          this.list.splice(id + i, 0, tempList[i]);
        }
      }
    }
  }
}
export const words = new Words();
export let hasTab = false;
export let randomQuote = null as unknown as MonkeyTypes.Quote;

export function setRandomQuote(rq: MonkeyTypes.Quote): void {
  randomQuote = rq;
}

export function setHasTab(tf: boolean): void {
  hasTab = tf;
}
