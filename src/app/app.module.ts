import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TechnologyDetailComponent } from './components/technology-detail/technology-detail.component';
import { SvgViewerComponent } from './components/svg-viewer/svg-viewer.component';
import { environment } from '../environments/environment';
import { TechnologyService } from './services/technology.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './components/loader/loader.component';
import { MatCheckboxModule, MatProgressSpinnerModule } from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TechnologyDetailComponent,
    SvgViewerComponent,
    LoaderComponent,
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'leonardo-web'),
    AngularFireDatabaseModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [TechnologyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
