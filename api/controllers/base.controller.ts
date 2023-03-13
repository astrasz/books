import { Response } from "express";

abstract class BaseController {
    protected readonly defaultSuccessCode: number = 200;
    protected readonly defaultFailureCode: number = 500;

    success<T>(res: Response, data: T, code: number | void,): Response<string> {
        return res.status(code ?? this.defaultSuccessCode).json(data);
    }

    fail(res: Response, error: string | Error, code: number | void,): Response<string> {
        return res.status(code ?? this.defaultFailureCode).json({
            error: error instanceof Error ? error.message : error
        })
    }

}


export default BaseController;