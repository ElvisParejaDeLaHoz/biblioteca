import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "Title 1",
      desc: "sdasdfsd",
      subtitle: "subtitle 1",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg",
      description: "Lorem Ipsum  and typesetting industry."
    },
    {
      title: "Title 2",
      desc: "",
      subtitle: "subtitle 2",
      img: "assets/logo.png",
      description: "Lorem Ipsum is simply dummy text of the printing ."
    },
    {
      title: "Title 3",
      desc: null,
      subtitle: "subtitle 3",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg",
      description: "simply dummy text of the printing and typesetting industry."
    }
  ]

  constructor(private router: Router, private storage: StorageService) {
  }

  finish() {
    this.storage.save("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {
  }

}
