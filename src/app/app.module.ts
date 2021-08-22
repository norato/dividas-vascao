import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DividaPorPessoaTableComponent } from './divida/divida-por-pessoa-table/divida-por-pessoa-table.component';

@NgModule({
  declarations: [AppComponent, DividaPorPessoaTableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
