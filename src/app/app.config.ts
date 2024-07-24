import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { rootReducer } from './store/root-reducer';
import { StateUtils } from './state-utils';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore(reducers, { metaReducers }),
    importProvidersFrom(StoreModule.forRoot(rootReducer),StateUtils),
    
  ],
};
