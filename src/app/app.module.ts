
import { HttpClientModule } from '@angular/common/http';
import  localePt  from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { AppRoutingModule } from './app-routing.module';


registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-br' },
    {
      provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
