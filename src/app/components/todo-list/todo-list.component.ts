import { Component } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.components.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  items: TodoListItem[] = [
    { description: 'fix front door', completed: false },
    { description: 'change bathroom lightbulb', completed: false },
    { description: 'kill thisles', completed: true }
  ];

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

  add(what: string) {
    this.items.unshift({ description: what, completed: false });
  }

  removeCompleted() {
    this.items = this.items.filter(item => item.completed === false);
  }
}
