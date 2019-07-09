import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmsAddComponent } from './components/films-add/films-add.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmsExcludeComponent } from './components/films-exclude/films-exclude.component';
import { FilmsExcleditComponent } from './components/films-excledit/films-excledit.component';



@NgModule({
  declarations: [FilmsComponent, FilmsAddComponent, FilmsListComponent, FilmsExcludeComponent, FilmsExcleditComponent],
  imports: [
    CommonModule
  ]
})
export class FilmsModule { }
