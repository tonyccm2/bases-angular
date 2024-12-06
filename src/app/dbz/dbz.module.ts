import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DbzMainComponent, ListComponent, CharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [DbzMainComponent],
})
export class DbzModule {}
