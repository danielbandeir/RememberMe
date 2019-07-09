import { BooksComponent } from './modules/dashboard/books/books.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './modules/dashboard/notes/notes.component';
import { FilmsComponent } from './modules/dashboard/films/films.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: LoginComponent, outlet: "login"},
  {path: 'dashboard', component: DashboardComponent, outlet: "dashboard"},
  {path: 'books', component: BooksComponent, outlet: "dashboard"},
  {path: 'notes', component: NotesComponent, outlet: "dashboard"},
  {path: 'shows', component: FilmsComponent, outlet: "dashboard"},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
