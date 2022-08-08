import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentComponent } from 'src/student/student.component';
import { StudentDirective } from 'src/studentDirective/studentDirective.component';
import { TeacherDirective } from 'src/teacherDirective/teacherDirective.component';
import { TeachersComponent } from 'src/teachers/teachers.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,StudentComponent,StudentDirective,TeachersComponent,TeacherDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
