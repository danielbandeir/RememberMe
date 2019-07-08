import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NotesModule } from './notes/notes.module';
import { BooksModule } from './books/books.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BooksModule,
    NotesModule,
    CommonModule
  ]
})
export class DashboardModule { }
