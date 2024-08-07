import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { provideStore, provideState } from '@ngrx/store'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { cardReducer } from './state/card.reducer'

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection( { eventCoalescing: true } ),
		provideRouter( routes ),
		provideClientHydration(),
		provideAnimationsAsync(),
		//Setting up store using NgRX
		provideStore(),
		provideState( {
			name: 'cards',
			reducer: cardReducer
		} ),
		provideStoreDevtools( {
			maxAge: 25,
			logOnly: !isDevMode()
		} )
	]
}


