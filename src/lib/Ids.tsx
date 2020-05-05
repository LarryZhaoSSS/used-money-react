let id = 0;
class Id {
  private value: number;
  constructor() {
    id += 1;
    this.value = id;
  }
}
export { Id };
