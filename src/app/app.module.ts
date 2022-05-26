import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { UserHomeComponent } from './userHome/userHome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ConfirmDialogueComponent } from './confirm-dialog/confirm-dialogue.component';
import { MatDialogRef, MAT_DIALOG_DATA , MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent,
    HomeComponent,
    UserHomeComponent,
    ViewComponent,
    ForgotPasswordComponent,
    ConfirmDialogueComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    NgxDropzoneModule,
    MatDialogModule
  ],
  entryComponents: [ConfirmDialogueComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
