import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorDetailModelPageRoutingModule } from './author-detail-model-routing.module';

import { AuthorDetailModelPage } from './author-detail-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorDetailModelPageRoutingModule
  ],
  declarations: [AuthorDetailModelPage]
})
export class AuthorDetailModelPageModule {}
