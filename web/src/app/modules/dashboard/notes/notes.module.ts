import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { NotesAddComponent } from './components/notes-add/notes-add.component';
import { NotesExcludeComponent } from './components/notes-exclude/notes-exclude.component';
import { NotesEditComponent } from './components/notes-edit/notes-edit.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';



@NgModule({
  declarations: [NotesComponent, NotesAddComponent, NotesExcludeComponent, NotesEditComponent, NotesListComponent],
  imports: [
    CommonModule
  ]
})
export class NotesModule { }
