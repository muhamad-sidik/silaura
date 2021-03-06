import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service"; 

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login"; 
import {RegisterPage} from "../pages/register/register";    

import { BerandaPage } from "../pages/beranda/beranda";
import { DetailArticlePage} from "../pages/detail-article/detail-article";
import { DetailPelayananPage} from "../pages/detail-pelayanan/detail-pelayanan";
import { KeluhanSayaPage} from "../pages/keluhan-saya/keluhan-saya";
import { MonitoringStakeholderPage} from "../pages/monitoring-stakeholder/monitoring-stakeholder";
import { AkunSayaPage } from "../pages/akun-saya/akun-saya";
import { MonitoringDetailPage } from "../pages/monitoring-detail/monitoring-detail";
import { InboxPage } from "../pages/inbox/inbox";
import { ChangeProfilePage } from "../pages/change-profile/change-profile";
import { ChangePasswordPage } from "../pages/change-password/change-password";
import { KirimKeluhanPage } from "../pages/kirim-keluhan/kirim-keluhan";
// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage, 
    RegisterPage, 
    BerandaPage,
    DetailArticlePage,
    DetailPelayananPage,
    KeluhanSayaPage,
    MonitoringStakeholderPage,
    AkunSayaPage,
    MonitoringDetailPage,
    InboxPage,
    ChangeProfilePage,
    ChangePasswordPage,
    KirimKeluhanPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage, 
    RegisterPage, 
    BerandaPage,
    DetailArticlePage,
    DetailPelayananPage,
    KeluhanSayaPage,
    MonitoringStakeholderPage,
    AkunSayaPage,
    MonitoringDetailPage,
    InboxPage,
    ChangeProfilePage,
    ChangePasswordPage,
    KirimKeluhanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService, 
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule {
}
