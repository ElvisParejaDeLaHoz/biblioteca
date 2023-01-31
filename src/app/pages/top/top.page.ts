import { Component, OnInit } from '@angular/core';
import {LibraryService} from "../../services/library.service";
import {ModalController} from "@ionic/angular";
import {BookDetailModalPage} from "../book-detail-modal/book-detail-modal.page";

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {

  books: any;

  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController) {
  }

  ngOnInit() {
    this.libraryService.getTopBooks().then(books => {
      this.books = books;
    })
  }

  async showBook(book: any) {
    const modal = await this.modalController.create({
      component: BookDetailModalPage,
      componentProps: {
        book: book
      }
    });
    return await modal.present();
  }


}
