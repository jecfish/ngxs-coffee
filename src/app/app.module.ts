import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListPageComponent, CartPageComponent } from './containers';
import { HeaderComponent, PayComponent } from './components';
import { SharedModule } from './modules/shared';

import { AppState } from './state/app.state';
import { HttpClientModule } from '@angular/common/http';

const CONTAINERS = [ListPageComponent, CartPageComponent];
const COMPONENTS = [HeaderComponent, PayComponent];


@NgModule({
  declarations: [
    AppComponent,
    ...CONTAINERS,
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxsModule.forRoot([
      AppState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
