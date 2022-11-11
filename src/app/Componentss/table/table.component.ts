import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Element } from 'src/app/models/elements';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input('data') data: Element[];
  @Output() dataEmitter = new EventEmitter<Element>();
  canHover= true;

  // colorMap = {
  //   "Gas": "#FFBC42",
  //   "Solid": "#EC674E",
  //   "diatomic nonmetal": "#D81159",
  //   "alkali metal": "#8F2D56",
  //   "transition metal": "#58586B",
  //   "post-transition metal": "#218380",
  //   lanthanide: "#4AABAF",
  //   metalloid: "#73D2DE",
  // };

  constructor() {}

  ngOnInit(): void {
  }

  onMouseEnter(element: Element) {
    this.dataEmitter.emit(element);
  }

  selectElement(el: HTMLElement, element: Element) {
    el.classList.toggle('hovered');
    
    this.canHover = !this.canHover;
    this.dataEmitter.emit(element);
  }
}
