import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DonutComponent } from './components/donut/donut.component';
import { BoxOfDonutsComponent } from './components/box-of-donuts/box-of-donuts.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';
import { DonutWallComponent } from './components/donut-wall/donut-wall.component';
import { DonutShopComponent } from './containers/donut-shop/donut-shop.component';
import { KitchenComponent } from './containers/kitchen/kitchen.component';

// todo: add donut-shop route
// todo: redirect to /donut-shop route when the path is empty
// todo: add /donut/:id
const routes: Route[] = [
  { path: 'donut-shop', component: DonutShopComponent },
  {
    path: '',
    redirectTo: '/donut-shop',
    pathMatch: 'full',
  },
  {
    path: 'kitchen/:id',
    component: KitchenComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BoxOfDonutsComponent,
    DonutComponent,
    DonutFormComponent,
    DonutShopComponent,
    DonutWallComponent,
    KitchenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
