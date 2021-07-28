export const mockResolve = <T>(response?: T, delay = 1000): Promise<any> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(response), delay);
  });

export const mockReject = (error: any, delay = 1000) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(error), delay);
  });
