import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController,
                      private navController: NavController) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

  logout(){
    this.navController.navigateRoot("/login");
  }

  goToAuthors(){
    this.navController.navigateRoot("/menu/authors");
    this.menu.close();
  }

  goToHome(){
    this.navController.navigateRoot("/menu/info");
    this.menu.close();
  }

  goToBooks(){
    this.navController.navigateRoot("/menu/books");
    this.menu.close();
  }

  goToMyFavorites(){
    this.navController.navigateRoot("/menu/favorite-books");
    this.menu.close();
  }

}
