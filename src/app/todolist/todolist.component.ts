import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    
  }

  addTodo() {
      const todo = new Todo(this.newTodoInput);
      this.todos.push(todo);
  }

}
