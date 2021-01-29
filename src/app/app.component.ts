import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectSongs} from './store/selectors/songs.selector';
import {Subscription} from 'rxjs';
import {ApiService} from './services/api.service';
import {retrieveSongs} from './store/actions/song.action';
import {Song} from './models/song.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private sub: Subscription;
  songs: Song[] = [];

  constructor(
    private store: Store,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
    this.getSongs();
  }

  private getSongs(artist?: string): void {
    this.sub = this.apiService.getSongs(artist).subscribe(
      response => {
        this.songs = response.results.map(song => new Song(song));
        // this.store.dispatch(retrieveSongs({songs}));
      }
    );
  }

  onSearchAction(value: string): void {
    console.info('value', value);
    this.getSongs(value);
  }
}
