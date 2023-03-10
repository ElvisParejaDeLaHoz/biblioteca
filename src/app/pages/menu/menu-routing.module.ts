import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [{
      path: "info",
      loadChildren: () => import('../info/info.module').then(m => m.InfoPageModule)
    },
      {
        path: 'authors',
        loadChildren: () => import('../authors/authors.module').then( m => m.AuthorsPageModule)
      },
      {
        path: 'books',
        loadChildren: () => import('../books/books.module').then( m => m.BooksPageModule)
      },
      {
        path: 'favorite-books',
        loadChildren: () => import('../favorite-books/favorite-books.module').then( m => m.FavoriteBooksPageModule)
      },
      {
        path: 'top',
        loadChildren: () => import('../top/top.module').then( m => m.TopPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
