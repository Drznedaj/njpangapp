import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ReceptComponent } from './recept/recept.component';
import { ProizvodComponent } from './proizvod/proizvod.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptComponent,
    ProizvodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
