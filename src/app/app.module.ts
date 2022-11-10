import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridlistComponent } from './Componentss/gridlist/gridlist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import { MaterialTabComponent } from './Componentss/materialTable/material-tab/material-tab.component';
import {MatTableModule} from '@angular/material/table';
import { TesttComponent } from './Componentss/testt/testt.component';
import { TettComponent } from './Componentss/tett/tett.component';
@NgModule({
  declarations: [
    AppComponent,
    GridlistComponent,
    MaterialTabComponent,
    TesttComponent,
    TettComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatRippleModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
