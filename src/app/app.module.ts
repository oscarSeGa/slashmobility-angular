import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SongListComponent} from './components/song-list/song-list.component';
import {StoreModule} from '@ngrx/store';
import {albumReducer, searchReducer, songReducer} from './store/reducers/song.reducer';
import {HttpClientModule} from '@angular/common/http';
import {IonSearchbarComponent} from './components/ion-searchbar/ion-searchbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SongCardComponent} from './components/song-card/song-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FavouritesComponent} from './components/favourites/favourites.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SongListComponent,
    IonSearchbarComponent,
    SongCardComponent,
    FavouritesComponent,
    AlbumsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({songs: songReducer, searchInput: searchReducer, albums: albumReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
