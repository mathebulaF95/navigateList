import { Component } from '@angular/core';
import { PEOPLE } from  '../../mocks/person.mocks';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {

  lastname;
  peopleList =  PEOPLE;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lastname= this.navParams.get("variable")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavPage');
  }

}
