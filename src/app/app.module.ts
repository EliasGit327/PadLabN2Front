import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { RaftComponent } from './components/raft/raft.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RaftComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
