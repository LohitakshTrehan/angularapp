import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component'
import { UserComponent } from './components/user/user.component'
import { DataService } from './services/data.services'

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],          // Add services to Providers
  bootstrap: [AppComponent]
})
export class AppModule { }
