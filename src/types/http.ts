export type HttpPlugin = {
  get(url: string): Promise<Response>
  patch(url: string, payload: any): Promise<Response>
  post(url: string, headers?: Record<string, string>): Promise<Response>
  delete(url: string): Promise<Response>
}
