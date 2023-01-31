import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorDetailModelPage } from './author-detail-model.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorDetailModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorDetailModelPageRoutingModule {}
