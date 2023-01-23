import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  MINIMO_VALOR: string = '8';
  CAMPO_REQUERIDO : String = 'El campo es obligatorío';

  mensajeError: any;

  iniciarSesionFormu = this.formBuilder.group({
    email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
  
    contrasena:  ['', [Validators.required, 
      Validators.minLength(parseInt(this.MINIMO_VALOR))]]
  });

  constructor(private formBuilder: FormBuilder, 
    private storageService : StorageService,  private navControler: NavController) { }

  ngOnInit() {
  }

  obtenerMensajeEmail(){
    if(this.iniciarSesionFormu.controls.email.hasError('required')){
      return this.CAMPO_REQUERIDO;
    }

    if(this.iniciarSesionFormu.controls.email.hasError('pattern')){
      return 'El correo es invalido'; 
    }

    return;
  }

  
  obtenerMensajeContrasena(){
    if(this.iniciarSesionFormu.controls.contrasena.hasError('required')){
      return this.CAMPO_REQUERIDO;
    }

    if(this.iniciarSesionFormu.controls.contrasena.hasError('minlength')){
      return 'El campo debe tener minimo '.concat(this.MINIMO_VALOR);
    }

    return;
  }

  iniciarSesion(usuario: any){
    var correo =  usuario.email;
    var contrasena = usuario.contrasena;
    var usuario : any = this.storageService.obtener(correo)
    .then((respuesta) => {
      console.log(atob(respuesta.contrasena));
      if(correo == respuesta.email &&  btoa(contrasena) == respuesta.contrasena){
        this.navControler.navigateForward('/info');
      } else {
        console.log("Error")
      }
      
    }).catch((error) => {
      console.error(error);
    })
  }

}
