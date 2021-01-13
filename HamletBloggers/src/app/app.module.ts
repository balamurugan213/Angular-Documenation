import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HamletsComponent } from './hamlets/hamlets.component';
import { NavComponent } from './nav/nav.component';
import { HamletDetailComponent } from './hamlet-detail/hamlet-detail.component';
import { MessageComponent } from './message/message.component';
import { RoutsModule } from './routs.module';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule,
    RoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
