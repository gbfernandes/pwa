import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PhotosPage } from '../photos/photos';
import { PicturePage } from '../picture/picture'; 
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public photosTab: any;
  public profileTab: any;
  public pictureTab: any;
  public user: string;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController) {
    this.photosTab = PhotosPage;
    this.profileTab = ProfilePage;
    this.pictureTab = PicturePage;
  }

  showSendPhoto() {
    let modal = this.modalCtrl.create(PicturePage);
    modal.present();
  }
}