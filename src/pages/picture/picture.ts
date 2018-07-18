import { Component } from '@angular/core';
import { ViewController, NavController, ModalController } from 'ionic-angular';
import { SendPicturePage } from '../send-picture/send-picture';

@Component({
    selector: 'page-picture',
    templateUrl: 'picture.html'
})
export class PicturePage {

    constructor(
        private viewCtrl: ViewController,
        private modalCtrl: ModalController) {

    }

    ionViewDidLoad() {
        var video = <any>document.getElementById('video');

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            });
        }
    }

    takePicture() {
        var video = <any>document.getElementById('video');
        var canvas = <any>document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, 320, 240);

        video.classList.add('animated');
        video.classList.add('flash');
        setTimeout(() => {
            let modal = this.modalCtrl.create(SendPicturePage, { photo: canvas.toDataURL() });
            modal.present();
        }, 800);
    }
}