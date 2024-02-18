import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from "@prisma/client"
import { createTaskDto } from './dto/createTask.dto';
import { updateTaskDto } from './dto/updateTask.dto';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) { }


    async findAllTask(): Promise<Task[]> {
        return this.prisma.task.findMany()
    }

    async findOneTask(
        id: number
    ): Promise<Task | null> {
        return this.prisma.task.findUnique({ where: { id } })
    }

    async createTask(data: createTaskDto): Promise<Task> {
        return this.prisma.task.create({ data })
    }

    async updateTask(id: number, data: updateTaskDto): Promise<Task> {
        return this.prisma.task.update({ where: { id }, data })
    }

    async deleteTask(id: number): Promise<void> {
        await this.prisma.task.delete({ where: { id } })
    }
}
