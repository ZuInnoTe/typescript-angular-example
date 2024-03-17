import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
	providers: [provideAnimations(), provideRouter(routes)]
}).catch((e) => console.error(e));
