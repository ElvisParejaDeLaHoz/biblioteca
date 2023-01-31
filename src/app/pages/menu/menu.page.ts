import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from "@ionic/angular";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController,
              private navController: NavController,
              private storage: StorageService) {
  }

  ngOnInit() {
  }

  closeMenu() {
    this.menu.close();
  }

  logout() {
    this.storage.remove("user_id").then(value => {
        this.storage.save("isUserLoggedIn", false).then(responseSave => {
          this.navController.navigateRoot("/home");
        })
      }
    );
  }

  goToAuthors() {
    this.navController.navigateRoot("/menu/authors");
    this.menu.close();
  }

  goToHome() {
    this.navController.navigateRoot("/menu/info");
    this.menu.close();
  }

  goToBooks() {
    this.navController.navigateRoot("/menu/books");
    this.menu.close();
  }

  goToMyFavorites() {
    this.navController.navigateRoot("/menu/favorite-books");
    this.menu.close();
  }

  goToTopBooks() {
    this.navController.navigateRoot("/menu/top");
    this.menu.close();
  }

}
