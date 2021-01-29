import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../models/song.model';
import {select, Store} from '@ngrx/store';
import {dislikeSong, likeSong} from '../../store/actions/song.action';
import {selectSongs} from '../../store/selectors/songs.selector';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {
  @Input() song: Song;
  songs = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(select(selectSongs)).subscribe(
      res => {
        this.songs = res;
      }
    );
  }

  likeSong(): void {
    this.store.dispatch(likeSong({
      trackId: this.song.trackId
    }));
  }

  dislikeSong(): void {
    this.store.dispatch(dislikeSong({
      trackId: this.song.trackId
    }));
  }


  songLiked(): boolean {
    return this.songs.includes(this.song.trackId);
  }

}
