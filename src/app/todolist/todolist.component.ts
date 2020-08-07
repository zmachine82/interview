import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todos: Todo[] = [];

  // or

  todos$: Observable<Todo[]>;

  newTodoInput = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(dataFromBackend => {
      this.todos = dataFromBackend;
    });

    // or

    this.todos$ = this.todoService.getAllTodos();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(data => {
      this.todos.push(data);
    })
  }

}
