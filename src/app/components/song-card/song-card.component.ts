import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../models/song.model';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {
  @Input() song: Song;

  constructor() { }

  ngOnInit(): void {
    console.info('song', this.song);
  }

}
