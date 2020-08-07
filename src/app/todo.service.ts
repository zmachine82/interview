import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  backendUrl = "http://localhost:3000/"

  constructor(private httpClient: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.backendUrl + 'todos');
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.backendUrl + "todos", todo);
  }
}
