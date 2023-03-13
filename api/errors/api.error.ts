class ApiError extends Error {

    protected statusCode = 500;

    constructor(message: string, statusCode: number | null = null) {
        super(message);
        this.name = 'AppError';
        if (statusCode !== null) {
            this.statusCode = statusCode;
        }
    }
}

export default ApiError;