import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  public location: string = '';

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {
    this.location = this.navParams.get('location');

  }

  ionViewDidLoad() {
    var html = '<iframe style="height: 90vh;" width="100%" height="99%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBiAI1oPF2pcxlcy2Xu2r0Qt-OYpv2Z2Ao&q=' + this.location + '" allowfullscreen></iframe>';
    document.getElementById('map').innerHTML = html;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}