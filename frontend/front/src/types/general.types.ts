export interface AxiosCustomError<T> {
  response: {
    status: number;
    statusText: string;
    data: T;
  }
}

export type TSignupError = {
  message: string
}