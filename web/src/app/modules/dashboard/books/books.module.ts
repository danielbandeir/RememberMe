import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookExcludeComponent } from './components/book-exclude/book-exclude.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookListComponent } from './components/book-list/book-list.component';



@NgModule({
  declarations: [BooksComponent, BookAddComponent, BookExcludeComponent, BookEditComponent, BookListComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
