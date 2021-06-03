import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverLetterModule } from './components/cover-letter/cover-letter.module';
import { CvModule } from './components/cv/cv.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoverLetterModule,
    CvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
