import { StudentManagementModule } from './student-management/student-management.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './pages/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { EventsScreenComponent } from './pages/events-screen/events-screen.component'; 



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    LoginComponent,
    EventsScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CoreModule,
    StudentManagementModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
