import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuilderModule } from '@builder.io/angular';

import { AppComponent, CustomThing } from './app.component';
import { FooComponent } from './foo.component';
import { CustomThingChildren } from './with-children';
import { HeaderComponent } from './header/header.component';
import { BenefitsComponent } from './benefits/benefits.component';
@NgModule({
  declarations: [AppComponent, FooComponent, CustomThing, CustomThingChildren,HeaderComponent,BenefitsComponent],
  entryComponents: [CustomThing, CustomThingChildren],
  imports: [
    BrowserModule,
    BuilderModule.forRoot('a54c9ecf97f8469b9d9611d82580d299'),
    RouterModule.forRoot([
      {
        path: '**',
        component: FooComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
