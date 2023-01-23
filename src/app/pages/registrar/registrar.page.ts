import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  MINIMO_VALOR: string = '8';
  CAMPO_REQUERIDO : String = 'El campo es obligatorío';

  mensajeError: any;

  registrarFormu = this.formBuilder.group({
    email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    
    nombres: ['', [Validators.required]],
    
    apellidos:  ['', [Validators.required]],

    contrasena:  ['', [Validators.required, 
      Validators.minLength(parseInt(this.MINIMO_VALOR))]]
  });

  constructor(private formBuilder: FormBuilder, 
    private storageService : StorageService,  private navControler: NavController ) {

  }

  ngOnInit() {
  }

  obtenerMensajeNombres(){
    if(this.registrarFormu.controls.nombres.hasError('required')){
      return this.CAMPO_REQUERIDO;
    }

    return;
  }

  
  obtenerMensajeApellidos(){
    if(this.registrarFormu.controls.apellidos.hasError('required')){
      return this.CAMPO_REQUERIDO;
    }

    return;
  }

  
  obtenerMensajeEmail(){
    if(this.registrarFormu.controls.email.hasError('required')){
      return this.CAMPO_REQUERIDO;
    }

    if(this.registrarFormu.controls.email.hasError('pattern')){
      return 'El correo es invalido'; 
    }

    return;
  }

  
  obtenerMensajeContrasena(){
    if(this.registrarFormu.controls.contrasena.hasError('required')){
      return this.CAMPO_REQUERIDO;
    }

    if(this.registrarFormu.controls.contrasena.hasError('minlength')){
      return 'El campo debe tener minimo '.concat(this.MINIMO_VALOR);
    }

    return;
  }

  registar(usuario: any) {
    console.log(usuario);
    var key = usuario.email; 
    var contrasenaCifrada = btoa(usuario.contrasena);
    usuario.contrasena = contrasenaCifrada
    this.storageService.guardar(key, usuario).
    then((respuesta) => {
      console.log(usuario);
      this.mensajeError = '';
      this.navControler.navigateForward('/info');
    }).catch((error) => {
      this.mensajeError = error;      
    });
  }

}
