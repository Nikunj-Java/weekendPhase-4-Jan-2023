import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeColorDirective } from './ChangeColorDirective';
import { DataService } from './data.service';
import { DirectiveComponent } from './directive/directive.component';
import { HighLightDirective } from './HighLightDirective';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DirectiveComponent,
    ServiceComponent,
    ChangeColorDirective,
    HighLightDirective,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DataService],//register service
  bootstrap: [AppComponent]
})
export class AppModule { }
