import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SongListComponent} from './components/song-list/song-list.component';
import {AlbumsComponent} from './components/albums/albums.component';

const routes: Routes = [
  {
    path: 'songs',
    component: SongListComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: '',
    redirectTo: 'songs',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
