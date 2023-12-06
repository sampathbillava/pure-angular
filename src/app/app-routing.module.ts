import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HideHtmlComponent } from './hide-html/hide-html.component';
import { WaitForResponseComponent } from './wait-for-response/wait-for-response.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'html-modify', component: HideHtmlComponent },
  { path: 'wait-for-response', component: WaitForResponseComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
