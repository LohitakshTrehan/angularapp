import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox.component'
import { UserComponent } from './components/user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
