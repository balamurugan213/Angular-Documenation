import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES_PROVIDER } from './app.route';
import { HamletsComponent } from './hamlets/hamlets.component';
import { NavComponent } from './nav/nav.component';
import { HamletDetailComponent } from './hamlet-detail/hamlet-detail.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HamletsComponent,
    NavComponent,
    HamletDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES_PROVIDER)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
