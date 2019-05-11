import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreserviceService {
  key = "AIzaSyBUloMMQ-aVjxqW170k60R-P-UJI4BY2Ws";
  playlist: any;
  constructor(private http: HttpClient) { }

  fetchPlaylistContent(selectplaylist) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=' + selectplaylist + '&key=' + this.key)
  }
  fetchPlaylist() {
    if (localStorage.getItem('playlist')) {    
      this.playlist =   JSON.parse(localStorage.getItem('playlist'))
    } else {
      this.http.get('https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCWRAFgXZ0c_jdjAaUITCVkA&key=' + this.key)
        .subscribe(x => {
          var y: any = x
          if (x) {
            this.playlist = y.items 
            // y.items.forEach(element => {
            //   this.playlist.push(element.snippet)
            // });
          }
          console.log("this.playlist")
          console.log(this.playlist)
          localStorage.setItem('playlist', JSON.stringify(this.playlist))
        })
    }

  }

}
