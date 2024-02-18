import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { createTaskDto } from './dto/createTask.dto';
import { updateTaskDto } from './dto/updateTask.dto';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get()
    findAllTask() {
        try {
            return this.taskService.findAllTask()
        } catch (e) {
            throw new HttpException('Facing an Error', 501)
        }

    }

    @Get(":id")
    findOneTask(
        @Param("id", ParseIntPipe)
        id: number
    ) {
        return this.taskService.findOneTask(id);
    }

    @Post()
    createTask(
        @Body()
        data: createTaskDto) {
        return this.taskService.createTask(data)
    }

    @Put(":id")
    updateTask(
        @Param("id", ParseIntPipe)
        id: number,
        @Body()
        data: updateTaskDto
    ) {
        return this.taskService.updateTask(id, data)
    }

    @Delete(":id")
    deleteTask(
        @Param("id", ParseIntPipe)
        id: number
    ) {
        return this.taskService.deleteTask(id)
    }

}
