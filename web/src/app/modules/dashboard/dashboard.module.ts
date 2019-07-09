import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NotesModule } from './notes/notes.module';
import { BooksModule } from './books/books.module';
import { HeaderModule } from 'src/app/core/header/header.module';
import { FilmsModule } from './films/films.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    HeaderModule,
    BooksModule,
    NotesModule,
    FilmsModule,
    CommonModule
  ]
})
export class DashboardModule { }
