import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import {AlertController, MenuController, NavController} from '@ionic/angular';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  MINIMUM_VALUE: string = '8';
  REQUIRED_FIELD : String = 'El campo es obligatorío';
  menuId: string = 'main-content';

  errorMessage: any;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],

    password:  ['', [Validators.required,
      Validators.minLength(parseInt(this.MINIMUM_VALUE))]]
  });

  constructor(private formBuilder: FormBuilder,
              private storageService : StorageService,
              private navController: NavController,
              private authService: AuthService,
              private alertController: AlertController) {}

  ngOnInit() {
  }


  getEmailMessage(){
    if(this.loginForm.controls.email.hasError('required')){
      return this.REQUIRED_FIELD;
    }

    if(this.loginForm.controls.email.hasError('pattern')){
      return 'El correo es invalido';
    }

    return;
  }

  getPasswordMessage(){
    if(this.loginForm.controls.password.hasError('required')){
      return this.REQUIRED_FIELD;
    }

    if(this.loginForm.controls.password.hasError('minlength')){
      return 'El campo debe tener minimo '.concat(this.MINIMUM_VALUE);
    }

    return;
  }

  login(user: any){
    this.authService.login(user).then((response:any) => {
      this.storageService.save("isUserLoggedIn", true);
      this.storageService.save("user_id", response.user.id);
      this.navController.navigateForward('/menu/info');
    }).catch(reason => {
      let messageError: string = 'Comuniquese con el administrador';
      let errorDetail : any = reason.error.errors['email or password'];
      console.log('error {}', errorDetail);
      if (errorDetail = 'is invalid'){
        messageError = 'Contraseña o Email invalido'
      }
      this.presentAlert("Opps!", "Hubo un error", messageError);
    });
  }

  login2(user: any){
    let emailEntered =  user.email;
    let passwordEntered = user.password;
    this.storageService.get(emailEntered)
      .then((response) => {
        if(emailEntered == response.email &&  btoa(passwordEntered) == response.password){
          this.navController.navigateForward('/info');
      } else {
        console.log("Error")
      }
    }).catch((error) => {
      console.error(error);
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

}
