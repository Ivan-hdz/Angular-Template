// Singleton
export class PaginatorSettings {
  private static defaultPageOptions = [5, 10, 25, 50, 100];
  private static defaultPageSize = 10;
  private constructor() {
    this.pageSize = PaginatorSettings.defaultPageSize;
    this.pageOptions = PaginatorSettings.defaultPageOptions;
  }
  private static paginatorSettings: PaginatorSettings;
  private pageSize: number;
  private pageOptions: number[];
  static getPaginatorSettings() {
    if (this.paginatorSettings == null) {
      this.paginatorSettings = new PaginatorSettings();
    }
    return this.paginatorSettings;
  }
  static setPaginatorSettings(ps: PaginatorSettings) {
    this.paginatorSettings = ps || new PaginatorSettings();
  }
  static saveToLocalStorage() {
    localStorage.setItem('paginatorSettings', JSON.stringify(this.getPaginatorSettings()));
  }
  static loadFromLocalStorage() {
    const buff = JSON.parse(localStorage.getItem('paginatorSettings')) ;
    if (buff != null) {
      const obj = new PaginatorSettings();
      obj.setPageSize(buff.pageSize);
      obj.setPageOptions(buff.pageOptions);
      this.setPaginatorSettings(obj);
    }
  }
  // Setters & Getters
  setPageSize(size: number) { this.pageSize = size; }
  getPageSize() { return this.pageSize; }
  setPageOptions(opts: number[]) { this.pageOptions = opts; }
  getPageOptions() { return this.pageOptions; }
}
