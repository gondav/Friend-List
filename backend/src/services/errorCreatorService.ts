import { IApiError } from '../models/errorModels/IApiError';

const generalError =
  (status: number) =>
  (message: string): IApiError => {
    return {
      status,
      message
    };
  };

export const serverError = generalError(500);
export const notFoundError = generalError(404);
export const badRequestError = generalError(400);
