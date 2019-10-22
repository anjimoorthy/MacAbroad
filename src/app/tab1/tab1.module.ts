import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
// import { Tab2Page } from '../tab2/tab2.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
  constructor(public navCtrl: NavController){

  }

  goToTab2() {
    const animationOptions = {
      animation: 'ios-transition',
      duration: 1000
    }

    // this.navCtrl.navigateForward(Tab2Page, {}, animationOptions);
  }

}
