import { Component, OnInit } from '@angular/core';
import { CoreserviceService } from '../service/coreservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { Route, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css'],
  providers: [CoreserviceService]
})
export class VideodetailComponent implements OnInit {
  youtubeList = []
  playlist = []
  selectedVideo: any
  selectplaylist: any;
  selectedChannel: any
  constructor(private coreserviceService: CoreserviceService,
    public sanitizer: DomSanitizer,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.selectplaylist = this.router.snapshot.params['id']
    this.fetchPlaylist()
    this.coreserviceService.fetchPlaylistContent(this.selectplaylist).subscribe(x => this.afterFetch(x))
  }

  fetchPlaylist() {
    this.coreserviceService.fetchPlaylist();
    this.playlist = this.coreserviceService.playlist;
  }
  afterFetch(x) {
    if (x) {
      x.items.forEach(element => {
        this.youtubeList.push(element.snippet)
      });
    }
    this.selectedVideo = this.youtubeList[0].resourceId.videoId
    console.log("this.youtubeList")
    console.log(this.youtubeList)
  }
  get getselectedChanhhelData() {
    if (this.playlist && this.selectplaylist) {
      var a: any = this.playlist
      return a.filter(x => x.id == this.selectplaylist)[0];
    }
  }
  onsubmit(data) {
    if (data.resourceId.videoId != this.selectedVideo) {
      this.selectedVideo = data.resourceId.videoId
    }
  }
  get videourl() {
    var url = 'https://www.youtube.com/embed/' + this.selectedVideo
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
