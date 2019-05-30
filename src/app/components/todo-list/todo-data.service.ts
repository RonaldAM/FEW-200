import { TodoListItem } from './models';
import { Observable, BehaviorSubject } from 'rxjs';
export class TodoDataService {

  private data: TodoListItem[] = [
    { description: 'fix front door', completed: false },
    { description: 'change bathroom lightbulb', completed: false },
    { description: 'kill thisles', completed: true }
  ];
  private todoListSubject = new BehaviorSubject<TodoListItem[]>(this.data);
  getTodoList(): Observable<TodoListItem[]> {
    return this.todoListSubject.asObservable();
  }

  add(what: string) {
    this.data = [{ description: what, completed: false }, ...this.data];
    this.todoListSubject.next(this.data);
  }
}
