import { ELEMENTS, ROLES, ElemType, Role } from './../../../types/dataTypes';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

export class MonsterForm {
  monsterName?: string = null;
  elements?: Array<ElemType> = new Array<ElemType>();
  hpMin?: number = 0;
  hpMax?: number = 20;
  roles?: Array<Role> = new Array<Role>();
  attackMin?: number = 0;
  attackMax?: number = 10;
  speedMin?: number = 0;
  speedMax?: number = 9;
  attackElements?: Array<ElemType> = new Array<ElemType>();
  buffMin?: number = 0;
  buffMax?: number = 5;
  discardMin?: number = 0;
  discardMax?: number = 5;
  drawMin?: number = 0;
  drawMax?: number = 5;
  auraMin?: number = 0;
  auraMax?: number = 10;
  statusFlg?: boolean = false;
  reactionFlg: boolean = false;
}

@Component({
  selector: 'view-all-filters',
  templateUrl: './view-all-filters.component.html',
  styleUrls: ['./view-all-filters.component.scss']
})
export class ViewAllFiltersComponent implements SelectionChange<any>, OnInit {
  source: import('@angular/cdk/collections').SelectionModel<any>;
  added: any[];
  removed: any[];

  @Output() filtersChanged: EventEmitter<any> = new EventEmitter<any>();

  elementList = ELEMENTS;
  roleList = ROLES;
  form: MonsterForm = new MonsterForm();
  checked: boolean = false;
  faMinus = faMinus;

  constructor() {
  }

  ngOnInit() {
    this.filtersChanged.emit(this.form);
  }

  applyFilters() {
    console.log(this.form);
    this.filtersChanged.emit(this.form);
  }

  clearFilters() {
    // TODO: why isn't this changing the model value in the selects?
    this.form = new MonsterForm();
    this.filtersChanged.emit(this.form);
  }


}
