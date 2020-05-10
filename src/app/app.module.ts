import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtilsLibModule } from 'projects/utils-lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalsDemoComponent } from './modals-demo/modals-demo.component';

@NgModule({
  declarations: [AppComponent, ModalsDemoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UtilsLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
