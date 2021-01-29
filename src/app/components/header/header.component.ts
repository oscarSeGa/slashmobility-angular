import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchAction = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearchAction(value: string): void {
    console.info('header', value);
    this.searchAction.emit(value);
  }

}
