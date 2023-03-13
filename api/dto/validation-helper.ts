import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import ApiError from '../errors/api.error';

export const checkIfValid = async (schema: new () => object, requestObject: object) => {
    const transformed: any = plainToInstance(schema, requestObject);

    const errors = await validate(transformed);
    if (errors.length > 0) {
        let message = 'Something went wrong';
        let code = 500;
        if (errors[0].constraints !== undefined) {
            const constraints = errors[0].constraints
            const constraintsNumber = Object.keys(constraints).length;
            message = '';
            code = 400;
            let counter = 1;
            for (const key in constraints) {
                if (counter === constraintsNumber) {
                    message += constraints[key]
                } else {
                    message += constraints[key] + ', '
                    counter++;
                }

            }
        }
        throw new ApiError(message, code);

    }
    return true;
};