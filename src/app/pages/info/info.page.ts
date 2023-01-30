import { Component, OnInit } from '@angular/core';
import {MenuController, ModalController, NavController} from "@ionic/angular";
import {LibraryService} from "../../services/library.service";
import { BooksModalPage } from '../books-modal/books-modal.page';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage  {

  authors: any;
  booksOff: any;

  slideOps = {
    slidesPerView: 1,
    centerSlides: true,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000
    }
  }
  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private menu: MenuController
  ) {}

  ionViewDidEnter(){
    this.libraryService.getAuthors().then( (response: any) => {
      this.authors = response;
    })

    this.booksOff = this.libraryService.getBooksOffline();
  }

  async showBooks(author:any) {
    const modal = await this.modalController.create({
      component: BooksModalPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }

  goToAuthors(){
    this.navCtrl.navigateForward("/menu/authors");
    this.menu.close();
  }

  goToBooks(){
    this.navCtrl.navigateForward("/menu/books");
    this.menu.close();
  }

  goToMyFavorites(){
    this.navCtrl.navigateForward("/menu/favorite-books");
    this.menu.close();
  }

}
