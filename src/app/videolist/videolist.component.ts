import { Component, OnInit } from '@angular/core';
import { CoreserviceService } from '../service/coreservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  providers: [CoreserviceService]
})
export class VideolistComponent implements OnInit {

  constructor(private coreserviceService: CoreserviceService, private router: Router) { }
  playlist = []
  ngOnInit() {
    this.fetchPlaylist()

  }
  fetchPlaylist() {
    this.coreserviceService.fetchPlaylist();
    this.playlist=this.coreserviceService.playlist;
  }
  selectplaylist(data) {
    this.selectplaylist = data.id
    debugger
    this.router.navigate(["details", this.selectplaylist])
  }
}
