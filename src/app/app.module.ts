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
import { BrowseScreenComponent } from './pages/browse-screen/browse-screen.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { ExploreScreenComponent } from './pages/explore-screen/explore-screen.component';
import { ContentBlocComponent } from './components/content-bloc/content-bloc.component';
import { WordLimitPipe } from './word-limit.pipe';
import { VlogsScreenComponent } from './pages/vlogs-screen/vlogs-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    LoginComponent,
    EventsScreenComponent,
    BrowseScreenComponent,
    ExploreScreenComponent,
    ContentBlocComponent,
    WordLimitPipe,
    VlogsScreenComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CoreModule,
    StudentManagementModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
