export interface ViewEngine {
  render(viewName: any, context: any): string;
}
