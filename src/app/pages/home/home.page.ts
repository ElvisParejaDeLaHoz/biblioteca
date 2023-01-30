import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  menuId: string = 'main-content';

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    console.log("LLEGO HOME", await this.menuController.isEnabled(this.menuId))
    await this.menuController.enable(false, this.menuId);
  }

}
