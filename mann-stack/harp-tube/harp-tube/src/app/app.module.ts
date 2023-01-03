import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { ResultSectionComponent } from './components/result-section/result-section.component';
import { YtCardComponent } from './components/yt-card/yt-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSectionComponent,
    ResultSectionComponent,
    YtCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
