import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectSongs} from '../../store/selectors/songs.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchAction = new EventEmitter<string>();

  songs$ = this.store.pipe(select(selectSongs));

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onSearchAction(value: string): void {
    this.searchAction.emit(value);
  }

}
