import { BookDTO, BookDTOAttributes } from "../dto/book.dto";
import { Book } from '../models/book.model';
import { checkIfValid } from "../dto/validation-helper";
import ApiError from "../errors/api.error";

interface QueryParams {
    offset?: number,
    limit?: number
}

export class BooksService {

    async getAll(params: QueryParams): Promise<Book[] | []> {
        return await Book.findAll({
            limit: params.limit ?? 10,
            offset: params.offset ?? 0
        })
    }

    async create(body: BookDTOAttributes): Promise<Book> {

        await checkIfValid(BookDTO, body);


        const book = await Book.create({
            ...body
        })
        if (!(book instanceof Book)) {
            throw new ApiError('Book has not been saved')
        }
        return book;
    }

    async remove(bookId: number): Promise<string> {
        if (bookId === null) {
            throw new ApiError('Book id cannot be null', 400);
        }
        const book = await Book.findByPk(bookId);

        if (!(book instanceof Book)) {
            throw new ApiError('Book cannot be found', 400);
        }
        const { title } = book;
        await book.destroy()

        return title;
    }
}