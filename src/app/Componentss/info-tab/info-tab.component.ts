import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Element } from 'src/app/models/elements';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.scss'],
})
export class InfoTabComponent {
  hasError = true;
  _element: Element;
  elementKeys: { value: string; label: string }[];

  @Input()
  get element(): Element {
    return this._element;
  }
  set element(value: Element) {
    this._element = value;
    if (value) {
      this.elementKeys = Object.keys(value).map((key) => ({
        value: key,
        label: this.toTitleCase(key),
      }));
    }
  }

  constructor() {}

  toTitleCase(key: string): string {
    const result = key.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}
