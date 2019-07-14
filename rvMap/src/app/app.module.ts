import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { UsersComponent } from './users/users.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RigComponent } from './rig/rig.component';
import { ParkComponent } from './park/park.component';
import { ParkAmenitiesComponent } from './park-amenities/park-amenities.component';
import { ParkSpotsComponent } from './park-spots/park-spots.component';
import { ParkSpotComponent } from './park-spot/park-spot.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserRegisterComponent,
    UserLoginComponent,
    RigComponent,
    ParkComponent,
    ParkAmenitiesComponent,
    ParkSpotsComponent,
    ParkSpotComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MapComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
