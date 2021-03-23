import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';
import { FriendsComponent } from './friends/friends.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MarketItemComponent } from './marketplace/market-item/market-item.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ProfileComponent } from './profile/profile.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { PurchaseItemComponent } from './purchase/purchase-item/purchase-item.component



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PictureUploadComponent,
    FooterComponent,
    FriendsComponent,
    MarketplaceComponent,
    PurchaseComponent,
    ProfileComponent,
    MarketItemComponent,
    PurchaseItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'picture-upload', component: PictureUploadComponent },
      { path: 'friends', component: FriendsComponent },
      { path: 'marketplace', component: MarketplaceComponent },
      { path: 'purchase', component: PurchaseComponent },
      { path: 'profile', component: ProfileComponent}
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
