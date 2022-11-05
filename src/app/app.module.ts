import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFeaturesComponent } from './test/test-features/test-features.component';
import { HideHtmlComponent } from './hide-html/hide-html.component';
import { FormInputDirective } from './directives/form-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestFeaturesComponent,
    HideHtmlComponent,
    FormInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
