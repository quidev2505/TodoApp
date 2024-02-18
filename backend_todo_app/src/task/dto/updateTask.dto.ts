import { IsNotEmpty } from "class-validator";

export class updateTaskDto {
    @IsNotEmpty()
    text: string
}