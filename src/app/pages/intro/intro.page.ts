import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  title: string;
  arraySlides: { titulo: string, descripcion: string, imagen: string }[];

  slideOpt = {
    initialSlide: 1,
    slidesPerView: 1,
    centerSlides: true,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000
    }
  };

  constructor(private router: Router, private storage: StorageService) {
    this.title = "Mi Biblioteca";
    this.arraySlides = [
      {
        "titulo": "Crea un rincón lector",
        "descripcion": "Leer es un acto que necesita de concentración y tranquilidad, pero también de comodidad y de bienestar.",
        "imagen": "../../assets/imagen/lugar_para_leer.jpg"
      },
      {
        "titulo": "Predicar con el ejemplo.",
        "descripcion": "Es evidente que si tú no lees, el niño que ve en ti ese ejemplo a seguir, no lo hará.",
        "imagen": "../../assets/imagen/1.jpg"
      },
      {
        "titulo": "Crea una tradición lectora.",
        "descripcion": "Buscar un lugar ideal para la lectura es tan importante como buscar el momento",
        "imagen": "../../assets/imagen/4.jpg"
      },
      {
        "titulo": "Hacer del libro un regalo especial.",
        "descripcion": "Regálales libros. Si eres padre, en sus cumpleaños y fiestas, siempre libros.",
        "imagen": "../../assets/imagen/5.jpg"
      },
      {
        "titulo": "Visitar actividades que fomenten la lectura.",
        "descripcion": "Conciertos, cuenta cuentos, obras de teatro, títeres, cine, etc.",
        "imagen": "../../assets/imagen/3.jpg"
      }
    ]
  }

  ionViewDidEnter() {
    this.storage.get("isIntroShowed").then(value => {
      if (value) {
        this.router.navigateByUrl("/home");
      }
    });
  }

  finish() {
    this.storage.save("isIntroShowed", true);
  }

  ngOnInit() {
  }

}
