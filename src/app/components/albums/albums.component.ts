import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { Album } from 'src/app/models/album.model';
import {ApiService} from '../../services/api.service';
import {select, Store} from '@ngrx/store';
import {selectSearch} from '../../store/selectors/songs.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  sub: Subscription;
  albums: Album[];

  constructor(private apiService: ApiService, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.getAlbums();
    this.store.pipe(select(selectSearch)).subscribe(
      search => {
        const route = this.router.url;
        if (search) {
          if (this.sub) {
            this.sub.unsubscribe();
          }
          this.sub = this.getAlbums(search);
        }
      }
    );
  }

  getAlbums(term?: string): any {
    this.apiService.getAlbums(term).subscribe(
      response => {
        this.albums = response.results.map(album => new Album(album));
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) { this.sub.unsubscribe(); }
  }

}
