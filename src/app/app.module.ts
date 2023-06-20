import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuilderModule } from '@builder.io/angular';

import { AppComponent, CustomThing, CustomThingNew } from './app.component';
import { FooComponent } from './foo.component';
import { CustomThingChildren } from './with-children';
import { HeaderComponent } from './header/header.component';
import { BenefitsComponent } from './benefits/benefits.component';
@NgModule({
  declarations: [AppComponent, FooComponent, CustomThing, CustomThingChildren,HeaderComponent,BenefitsComponent,CustomThingNew],
  entryComponents: [CustomThing, CustomThingChildren],
  imports: [
    BrowserModule,
    BuilderModule.forRoot('15524392d8804f10b9a0dc476aa8d2b8'),
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
