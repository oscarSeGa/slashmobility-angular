import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../models/album.model';
import {dislikeAlbum, likeAlbum} from '../../store/actions/song.action';
import {select, Store} from '@ngrx/store';
import {selectAlbums, selectSongs} from '../../store/selectors/songs.selector';

@Component({
  selector: 'app-album-card',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() album: Album;
  albums = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(select(selectAlbums)).subscribe(
      res => {
        this.albums = res;
      }
    );
  }

  likeAlbum(): void {
    console.info('album', this.album);
    this.store.dispatch(likeAlbum({
      albumId: this.album.trackId
    }));
  }

  dislikeAlbum(): void {
    this.store.dispatch(dislikeAlbum({
      albumId: this.album.trackId
    }));
  }

  albumLiked(): boolean {
    return this.albums.includes(this.album.trackId);
  }

}
