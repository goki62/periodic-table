import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DataService } from './Componentss/Services/data.service';
import { Element } from './models/elements';
import data from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './assets/fonts/fonts.scss'],
})
export class AppComponent implements OnInit {
  title = 'Periodic Table';

  data: Element[] = [];
  selectedElement: Element;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = data as Element[];
    this.selectedElement = this.data.find(el => el.symbol === 'H');

    // this.dataService.getData().subscribe((res: Element[]) => {
    //   this.data = res;
    //   this.selectedElement = this.data.find(el => el.symbol === 'H');
    // });
  }

  onEmit(element: Element) {
    this.selectedElement = element;
  }
}
