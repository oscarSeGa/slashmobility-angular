import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ion-searchbar',
  templateUrl: './ion-searchbar.component.html',
  styleUrls: ['./ion-searchbar.component.scss']
})
export class IonSearchbarComponent implements OnInit {
  @Output() searchAction = new EventEmitter<string>();

  searchForm = this.formBuilder.group({
    searchInput: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  search(): void {
    if (this.searchForm.valid) {
      this.searchAction.emit(this.searchForm.value.searchInput);
    }
  }

}
