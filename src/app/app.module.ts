import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './Componentss/table/table.component';
import { ExpandableTableComponent } from './Componentss/expandable-table/expandable-table.component';
import {MatIconModule} from '@angular/material/icon';
import { InfoTabComponent } from './Componentss/info-tab/info-tab.component';
import { HeaderComponent } from './Componentss/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ExpandableTableComponent,
    InfoTabComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatRippleModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
