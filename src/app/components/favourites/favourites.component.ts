import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  @Input() items: any;

  constructor() { }

  ngOnInit(): void {
  }

}
