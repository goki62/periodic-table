import { Component, OnInit } from '@angular/core';
import { DataTestService } from '../Services/data-test.service';
import { Elements } from 'src/app/elements';
@Component({
  selector: 'app-gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.scss'],
})
export class GridlistComponent implements OnInit {
  public elementsInfo: any[] = [];

  constructor(private _data: DataTestService) { }

  ngOnInit(): void {
    this._data.getData().subscribe((data) => (this.elementsInfo = data));
    this._data.showDataSer().subscribe((eventt) => {
      console.log(eventt);
    });
  }

  showData() {
    this._data.showDataSer().subscribe((eventt) => {
      console.log(eventt);
    });
  }
  hoverInfo() { }
}
