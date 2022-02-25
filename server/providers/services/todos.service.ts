import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'server/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todosRepository.find();
  }

  create(todo: Todo): Promise<Todo> {
    return this.todosRepository.save(todo);
  }

  async updateIsComplete(id: number): Promise<Todo> {
    const todo = await this.todosRepository.findOne(id);
    todo.isComplete = !todo.isComplete;
    return this.todosRepository.save(todo);
  }
}
