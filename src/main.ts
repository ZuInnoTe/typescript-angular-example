import { provideZonelessChangeDetection } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
	providers: [provideZonelessChangeDetection(), provideRouter(routes)]
}).catch((e) => console.error(e));
