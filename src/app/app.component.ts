import { Component, ViewChild } from "@angular/core";
import { Platform, Nav  } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home"; 
import { BerandaPage } from "../pages/beranda/beranda"; 
import { AkunSayaPage } from "../pages/akun-saya/akun-saya"; 
import { LoginPage } from "../pages/login/login"; 

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard 
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: BerandaPage, icon: 'home'}, 
      {title: 'Akun Saya', component: AkunSayaPage, icon: 'person'}, 
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   // this.nav.setRoot(page.component);
   this.nav.setRoot(page.component);
  // this.nav.push(page);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
