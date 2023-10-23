import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/api/user.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-musique-details',
  templateUrl: './musique-details.page.html',
  styleUrls: ['./musique-details.page.scss'],
})
export class MusiqueDetailsPage implements OnInit {
  public songID:number = 0;
  public song:any = [];


  constructor(
    private userService: UserService,
    public activatedRoute : ActivatedRoute,
    private loadingCtrl: LoadingController) {
      this.activatedRoute.queryParams.subscribe(params => {
        this.songID = params["id"];
      });
    }

  ngOnInit() {
    console.log(this.songID);
    this.getSongById(this.songID);
  }

  async getSongById(songID:number){
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.userService.getSongById(songID, (data)=>{
      this.song = data;
      loading.dismiss();
    },(err) => {
      loading.dismiss();
    });
  }

}
