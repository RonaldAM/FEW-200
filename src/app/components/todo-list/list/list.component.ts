import { Component, OnInit, Input, Output } from '@angular/core';
import { TodoListItem } from '../models';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: TodoListItem[];
  @Output() clearList = new EventEmitter();
  @Output() completedItem = new EventEmitter<TodoListItem>();
  constructor() { }

  ngOnInit() {
  }

  markComplete(item: TodoListItem) {
    this.completedItem.emit(item);
  }
  removeCompleted() {
    this.clearList.emit();
  }
}
