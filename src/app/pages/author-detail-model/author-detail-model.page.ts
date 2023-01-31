import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";

@Component({
  selector: 'app-author-detail-model',
  templateUrl: './author-detail-model.page.html',
  styleUrls: ['./author-detail-model.page.scss'],
})
export class AuthorDetailModelPage implements OnInit {

  author: any;

  constructor(private navParams: NavParams,
              private modalController: ModalController) { }

  ngOnInit() {
    this.author = this.navParams.get("author");
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
