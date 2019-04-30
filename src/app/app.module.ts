// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Modal Components
import { ProjectModalComponent } from './modals/project-modal/project-modal.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

// UI
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    ProjectModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  entryComponents: [ProjectModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
