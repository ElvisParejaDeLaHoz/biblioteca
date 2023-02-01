import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {LibraryService} from "../../services/library.service";

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  author: any;
  authorId: any;
  bookAuthor: any;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private libraryService : LibraryService) {
  }

  async ngOnInit() {
    this.authorId = this.navParams.get("author");
    const id = this.authorId.id;
    this.libraryService.getBooksAuthor(id).then(bookAuthor => {
      this.bookAuthor = bookAuthor;
    });
  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author");
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
