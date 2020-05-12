import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist.component';
import { By } from '@angular/platform-browser';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodolistComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // describe('title', () => {
  //   it('should display as a header', () => {
  //     const title = fixture.debugElement.query(By.css('h1')).nativeElement;
  //     expect(title.innerText.trim()).toEqual('My Todos');
  //   });
  // });

  // describe('todos', () => {
  //   it('should display the todo title for every todo', () => {
  //     component.todos = [
  //       { title: "First Todo" },
  //       { title: "Second Todo" }
  //     ];

  //     fixture.detectChanges();

  //     const todos = fixture.debugElement.queryAll(By.css(".todo"));
  //     expect(todos[0].nativeElement.innerText.trim()).toEqual('First Todo')
  //     expect(todos[1].nativeElement.innerText.trim()).toEqual('Second Todo')
  //   });

  //   it('should have a strikethrough when complete', () => {
  //     component.todos = [
  //       { title: "First Todo", complete: true },
  //       { title: "Second Todo", complete: false }
  //     ];
  //     fixture.detectChanges();
  //     const todos = fixture.debugElement.queryAll(By.css(".todo"));

  //     expect(todos[0].classes['strike']).toBeTruthy();
  //     expect(todos[1].classes['strike']).toBeFalsy();
  //   });

  //   it('should change complete status when clicking on title', () => {
  //     component.todos = [
  //       { title: "Second Todo", complete: false }
  //     ];
  //     fixture.detectChanges();
  //     const todos = fixture.debugElement.queryAll(By.css(".todo"));
  //     todos[0].nativeElement.click();
  //     fixture.detectChanges();
  //     expect(todos[0].classes['strike']).toBeTruthy();
  //   });
  // });

  // describe('add todos', () => {
  //   it('should have an input to add in a new todo', () => {
  //     const input = fixture.debugElement.query(By.css('.new-todo-input'));
  //     expect(input).toBeTruthy();
  //   });

  //   it('should have an add todo button', () => {
  //     const button = fixture.debugElement.query(By.css('.add-todo-button'));
  //     expect(button.nativeElement.innerText.trim()).toEqual('Add Todo');
  //   });

  //   it('should add a new todo to the list with the input value when clicking add todo button', async(() => {

  //     fixture.detectChanges();
  //     fixture.whenStable().then(() => {
  //       const input = fixture.debugElement.query(By.css('.new-todo-input'));
  //       input.nativeElement.value = "get good";
  //       input.nativeElement.dispatchEvent(new Event('input'));
  //       const button = fixture.debugElement.query(By.css('.add-todo-button')).nativeElement;
  //       button.click();
  //       expect(component.todos.length).toEqual(3);
  //     })
  //   }));
  // });

});
