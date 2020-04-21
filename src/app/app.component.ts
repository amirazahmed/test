import { Component } from "@angular/core";

import { Platform, ActionSheetController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  test = [{ name: "amiarraaaa" }, { name: "aya" }];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public actionSheetController: ActionSheetController
  ) {
    this.initializeApp();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Sort by",
      buttons: [
        {
          text: "delete aya",
          handler: () => {
            console.log("test1");

            this.sort();
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sort() {
    this.test = [{ name: "amiarraaaa" }];
  }
}
