import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todos: any[] = [
    {title: "First Todo", complete: true},
    {title: "Second Todo", complete: false}
  ];

  newTodoInput = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.todos.push({
      title: this.newTodoInput,
      complete: false
    })
  }

}
