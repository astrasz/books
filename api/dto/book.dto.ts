import { IsNotEmpty, IsString, NotEquals } from "class-validator"


export interface BookDTOAttributes {
    title: string,
    author: string
}

export class BookDTO implements BookDTOAttributes {
    @IsNotEmpty({
        message: 'Title cannot be empty'
    })
    @IsString({
        message: 'Title must be a string'
    })
    @NotEquals(null, {
        message: 'Title cannot be null'
    })
    public title!: string

    @IsNotEmpty({
        message: 'Author cannot be empty'
    })
    @IsString({
        message: 'Author must be a string'
    })
    @NotEquals(null, {
        message: 'Author cannot be null'
    })
    public author!: string
}




