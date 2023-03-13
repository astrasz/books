import { Router } from "express";
import { BooksController } from "../controllers/books.controller";

export const router = (router: Router, booksController: BooksController) => {
    router.get('/books', booksController.getAll.bind(booksController))
    router.post('/books/add', booksController.create.bind(booksController))
    router.delete('/books/delete', booksController.remove.bind(booksController))
}
