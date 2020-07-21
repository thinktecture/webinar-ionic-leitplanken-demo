import { NgModule } from '@angular/core';
import { ItemListingComponent } from './item-listing/item-listing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImmoStoreDexieService, ImmoStoreService } from '../services/immo-store-web.service';
import { ItemGridComponent } from './item-grid/item-grid.component';
import { CameraComponent } from './camera/camera.component';
import { GalleryComponent } from './gallery/gallery.component';

const ALL_COMPONENTS = [
  ItemListingComponent,
  NavigationComponent,
  ItemGridComponent,
  CameraComponent,
  GalleryComponent,
];

@NgModule({
  declarations: ALL_COMPONENTS,
  exports: ALL_COMPONENTS,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class ShareModule {}
