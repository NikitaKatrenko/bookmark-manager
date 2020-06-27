import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from './features/bookmarks/bookmarks.component';
import { TableComponent } from './features/table/table.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, children: [
    { path: ':group', component: TableComponent },
  ]},
  { path: '', redirectTo: '/bookmarks/all', pathMatch: 'full' },
  { path: '**', redirectTo: '/bookmarks/all' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
