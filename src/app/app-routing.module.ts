import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './features/table/table.component';

const routes: Routes = [
  { path: 'bookmarks/:group', component: TableComponent },
  { path: '', redirectTo: '/bookmarks/all', pathMatch: 'full' },
  { path: '**', redirectTo: '/bookmarks/all' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
