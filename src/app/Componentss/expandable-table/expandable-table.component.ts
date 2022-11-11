import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Element } from 'src/app/models/elements';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-expandable-table',
  styleUrls: ['expandable-table.component.scss'],
  templateUrl: 'expandable-table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpandableTableComponent implements OnInit {
  @Input('data') data: Element[];
  
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Element;

  ngOnInit(): void {
  }
}