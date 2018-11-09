import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register'
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs'
import { MenuPage } from '../menu/menu'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertctrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message: string) {
    this.alertctrl.create({
    title: 'Info!',
    subTitle: message,
    buttons: ['Ok']
    }).present();
  }

  signInUser() {
this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)  // Sample App Slider Demo, Firebase authentication
    .then ( data => {
      console.log('got some data',this.fire.auth.currentUser.email);
      this.alert ('Welcome. You\'re logged in');
      this.navCtrl.setRoot ( 'MenuPage' );
    })
    .catch ( error => {
      console.log('got an error', error)
      this.alert(error.message);
    })

    console.log ('Would sign in with ', this.user.value, this.password.value)
  }
  push() {
    this.navCtrl.push('RegisterPage',{},{animate:true,animation:'transition',duration:500,direction:'forward'});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
