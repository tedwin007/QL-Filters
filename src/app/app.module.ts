import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CapabilitiesModule } from './shared/capabilities/capabilities.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        CapabilitiesModule,
        HttpClientModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
