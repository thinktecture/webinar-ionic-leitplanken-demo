import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
// import the correct camera from capacitor
import { CameraResultType } from '@capacitor/core';

// A good example how to build an app and use the camera 
// https://ionicframework.com/docs/angular/your-first-app
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
        // fake click on photo input to open the dialog
        this.photoInput.nativeElement.click();
    }

    async handleInput() {
        // get selected files
        const files: FileList = this.photoInput.nativeElement.files;
        if (!files && files.length <= 0) {
            return;
        }
        try {
            // only convert the first selected photo to base64 and emit
            const base64Photo = await this.convertBase64(files[ 0 ]);
            this.capture.emit(base64Photo);
        } catch {

            // notify user on error
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
        // 1. try erros, e.g. the user denied a permission
        try {

            // 2. get pohoto with quality and specific result type
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Base64,
            });

            // 3. make the base64 encoded date as url accessibile and emit the new photo
            const base64Image = image.base64String;
            this.capture.emit('data:image/jpeg;base64, ' + base64Image);

        } catch (e) {
            // notify user on error
            console.error(e);
            const toast = await this.toasts.create({
                message: 'Could not take picture',
                duration: 2000,
                color: 'warning',
                translucent: true,
            });
            toast.present();
        }
    }
}
