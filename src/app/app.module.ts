import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
