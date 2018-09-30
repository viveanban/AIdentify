export class Image {
 private Url: string;

  constructor(Url: string) {
    this.Url = Url;
  }

  getUrl(): string {
    return this.Url;
  }

  setUrl(value: string) {
    this.Url = value;
  }
}
