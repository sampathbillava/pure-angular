import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFeaturesComponent } from './test/test-features/test-features.component';
import { HideHtmlComponent } from './hide-html/hide-html.component';
import { FormInputDirective } from './directives/form-input.directive';
import { WaitForResponseComponent } from './wait-for-response/wait-for-response.component';
import { WaitForResponseService } from './wait-for-response/service/wait-for-response.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestFeaturesComponent,
    HideHtmlComponent,
    FormInputDirective,
    WaitForResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WaitForResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
