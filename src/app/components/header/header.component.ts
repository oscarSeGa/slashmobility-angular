import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectAlbums, selectSongs} from '../../store/selectors/songs.selector';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchAction = new EventEmitter<string>();
  route = '';
  songs = this.store.pipe(select(selectSongs));
  albums = this.store.pipe(select(selectAlbums));
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        this.route = route.url;
      }
    });
  }

  onSearchAction(value: string): void {
    this.searchAction.emit(value);
  }

}
