import { Request, Response } from "express";
import { BooksService } from "../services/books.service";
import BaseController from "./base.controller";

export class BooksController extends BaseController {

    private readonly booksService: BooksService = new BooksService();

    constructor() {
        super();
    }

    async getAll(req: Request, res: Response): Promise<Response<string>> {
        try {
            const books = await this.booksService.getAll(req.query);
            return this.success(res, books);
        } catch (err: any) {
            return this.fail(res, err.message, err.status)
        }
    }

    async create(req: Request, res: Response): Promise<Response<string>> {
        try {
            const book = await this.booksService.create(req.body);
            return this.success(res, book, 201);
        } catch (err: any) {
            return this.fail(res, err.message, 400)
        }
    }

    async remove(req: Request, res: Response): Promise<Response<string>> {
        try {
            const deletedBookTitle = await this.booksService.remove(req.body.id)
            return this.success(res, `Book ${deletedBookTitle} removed successfully`);
        } catch (err: any) {
            return this.fail(res, err.message, err.status)
        }
    }
}