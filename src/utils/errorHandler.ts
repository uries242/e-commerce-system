export class AppError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
  }
}

function handleNetworkError(): void {
  throw new AppError("Network error: unable to reach the server", 503);
}

function handleNotFoundError() {
  throw new AppError(
    "Unable to locate product, please try reentering the product",
    404,
  );
}

try {
  handleNetworkError();
} catch (error) {
  if (error instanceof AppError) {
    console.log("App Error:", error.message, error.statusCode);
  } else {
    console.log("Unknown Error:", error);
  }
}
