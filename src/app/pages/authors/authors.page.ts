import { Component, OnInit } from '@angular/core';
import {LibraryService} from "../../services/library.service";
import {ModalController} from "@ionic/angular";
import {AuthorDetailModelPage} from "../author-detail-model/author-detail-model.page";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

  authors: any;

  constructor(private libraryService: LibraryService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.libraryService.getAuthors()
      .then( response => {
        this.authors = response;
      });
  }

  async showAuthor(author: any) {
    const modal = await this.modalController.create({
      component: AuthorDetailModelPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }

}
