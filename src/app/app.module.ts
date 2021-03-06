import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideComponent } from './animations/slide/slide.component';
import { IndexComponent } from './animations/index/index.component';
import { RotateComponent } from './animations/rotate/rotate.component';
import { DisappearComponent } from './disappear/disappear.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    IndexComponent,
    RotateComponent,
    DisappearComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
