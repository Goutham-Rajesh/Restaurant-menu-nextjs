import { IsNotEmpty, IsString } from "class-validator";

export class CreateMenuDto {

    @IsNotEmpty()
    id :number;

    @IsNotEmpty()
    @IsString()
    itemName : string;

    @IsNotEmpty()
    itemCategory:string;

    @IsNotEmpty()
    itemPrice :number;
}
