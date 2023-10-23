import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/api/user.service';
import { NavController, InfiniteScrollCustomEvent, LoadingController, IonNav } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-musiques',
  templateUrl: 'musiques.page.html',
  styleUrls: ['musiques.page.scss']
})
export class MusiquesPage {

  public songs: any = [];
  

  constructor(
    private userService: UserService,
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private router: Router) {}
  
  ngOnInit() {
    this.getSongs();
  }

  async getSongs () {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.userService.getSongs((data)=>{
      this.songs = data;
      loading.dismiss();
    },(err) => {
      loading.dismiss();
    });
  }

  showThisSong(song:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: song.id,
      }
    };
    this.navCtrl.navigateForward(['tabs/musiques/musique-details'], navigationExtras);
  }

  handleChange(event:any) {
    const query = event.target.value.toLowerCase();
    this.songs = this.songs.filter((d:any) => d.toLowerCase().indexOf(query) > -1);
  }

}