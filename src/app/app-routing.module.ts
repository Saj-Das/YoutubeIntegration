import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideodetailComponent } from './videodetail/videodetail.component';
import { VideolistComponent } from './videolist/videolist.component';

const routes: Routes = [{ path: "details/:id", component: VideodetailComponent },
{ path: "list", component: VideolistComponent },
{ path: "", redirectTo: "list" ,pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
