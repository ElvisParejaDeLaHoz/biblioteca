import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {AlertController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  MINIMUM_VALUE: string = '8';
  REQUIRED_FIELD : String = 'El campo es obligatorío';

  messageError: any;

  registerForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    document_type:  ['', [Validators.required]],
    document_number: [],
    career:  ['', [Validators.required]],
    email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    password:  ['', [Validators.required,
      Validators.minLength(parseInt(this.MINIMUM_VALUE))]]
  })

  constructor(private formBuilder: FormBuilder,
              private authService :AuthService,
              private alertController :AlertController,
              private navController : NavController) { }

  ngOnInit() {
  }

  register(user: any){
    console.log(user);
    this.authService.register(user).then( response => {
      this.navController.navigateForward("/login");
    }).catch(reason => {
      let messageError: string = 'Comuníquese con el administrador'
      const statusCode : number = reason.status;

      if (statusCode != 500){
        messageError = reason.error.errors;
      }

      this.presentAlert("Opps!", "Hubo un error", messageError);
    })
  }

  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
  }

  getMessageName(){
    if(this.registerForm.controls.name.hasError('required')){
      return this.REQUIRED_FIELD;
    }

    return;
  }

  getMessageLastName(){
    if(this.registerForm.controls.last_name.hasError('required')){
      return this.REQUIRED_FIELD;
    }

    return;
  }

  getMessageDocumentNumber(){
    if(this.registerForm.controls.document_number.hasError('required')){
      return this.REQUIRED_FIELD;
    }

    return;
  }

  getMessageCareer(){
    if(this.registerForm.controls.career.hasError('required')){
      return this.REQUIRED_FIELD;
    }

    return;
  }


  getMessageEmail(){
    if(this.registerForm.controls.email.hasError('required')){
      return this.REQUIRED_FIELD;
    }

    if(this.registerForm.controls.email.hasError('pattern')){
      return 'El correo es invalido';
    }

    return;
  }

  getMessagePassword(){
    if(this.registerForm.controls.password.hasError('required')){
      return this.REQUIRED_FIELD;
    }

    if(this.registerForm.controls.password.hasError('minlength')){
      return 'El campo debe tener minimo '.concat(this.MINIMUM_VALUE);
    }

    return;
  }

}
