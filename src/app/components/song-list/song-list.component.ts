import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Song} from '../../models/song.model';
import {Subscription} from 'rxjs';
import {ApiService} from '../../services/api.service';
import {select, Store} from '@ngrx/store';
import {selectSearch} from '../../store/selectors/songs.selector';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  songs = [];

  constructor(private apiService: ApiService, private store: Store) { }

  ngOnInit(): void {
    this.getSongs();
    this.store.pipe(select(selectSearch)).subscribe(
      search => {
        if (search) {
          if (this.sub) {
            this.sub.unsubscribe();
          }
          this.sub = this.getSongs(search);
        }
      }
    );
  }


  private getSongs(artist?: string): any {
    this.sub = this.apiService.getSongs(artist).subscribe(
      response => {
        this.songs = response.results.map(song => new Song(song));
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) { this.sub.unsubscribe(); }
  }

}
