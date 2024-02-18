import { IsNotEmpty } from "class-validator";

export class createTaskDto {
    @IsNotEmpty()
    text: string
}