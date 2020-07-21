import { Injectable } from '@angular/core';
import { CameraPhoto, CameraResultType, Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  constructor(private readonly toasts: ToastController) {}

  async takePicture(): Promise<CameraPhoto> {
    try {
      return await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });
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

  savePicture() {}

  loadPicture() {}

  convertToBase64(image: File): Promise<string> {
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
}
