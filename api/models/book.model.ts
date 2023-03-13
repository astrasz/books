import { Optional } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript/dist/sequelize/data-type/data-type';


interface BookAttributes {
    id: string,
    title: string,
    author: string
}

type BookCreationAttributes = Optional<BookAttributes, 'id'>

@Table({
    timestamps: true,
    paranoid: true,
    tableName: 'books'
})
export class Book extends Model<BookAttributes, BookCreationAttributes> {

    @Column({
        type: DataType.UUIDV4,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare author: string;
}
