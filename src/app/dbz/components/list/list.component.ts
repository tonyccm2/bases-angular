import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-bdz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public idDelete: EventEmitter<string> = new EventEmitter();

  onDelete(id?: string): void {
    if (!id) return;
    this.idDelete.emit(id);
  }

  constructor() {}
}
