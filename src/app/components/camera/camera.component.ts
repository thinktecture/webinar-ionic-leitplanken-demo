import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

@Component({
    selector: 'app-camera',
    templateUrl: './camera.component.html',
    styleUrls: [ './camera.component.scss' ],
})
export class CameraComponent {
    @ViewChild('photoRef', { static: true }) photoInput: ElementRef;
    @Output() public readonly capture = new EventEmitter<string>();

    constructor(private readonly toasts: ToastController) {
    }

    initPictureProcess() {
        this.photoInput.nativeElement.click();
    }

    async handleInput() {
        const files: FileList = this.photoInput.nativeElement.files;
        if (!files && files.length <= 0) {
            return;
        }
        try {
            const base64Photo = await this.convertBase64(files[ 0 ]);
            this.capture.emit(base64Photo);
        } catch {
            const toast = await this.toasts.create({
                message: 'Could not take picture',
                duration: 2000,
                color: 'warning',
                translucent: true,
            });
            toast.present();
        }
    }

    convertBase64(image: File): Promise<string> {
        if (!image) {
            return;
        }

        const reader: FileReader = new FileReader();
        reader.readAsDataURL(image);
        return new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    }

    async takePictureCapacitor() {
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Base64,
            });
            const base64Image = image.base64String;
            this.capture.emit('data:image/jpeg;base64, ' + base64Image);

        } catch (e) {
            console.error(e);
        }
    }
}
