import { Routes } from '@angular/router'

//Each route component is lazy loaded as needed
export const routes: Routes = [
	{
		path: "",
		loadComponent: () => import( './components/home-page/home-page.component' ).then( c => c.HomePageComponent )
	},
	{
		path: "cards",
		loadComponent: () => import( './components/cards-page/cards-page.component' ).then( c => c.CardsPageComponent )
	},
	{
		path: "decks",
		loadComponent: () => import( './components/decks-page/decks-page.component' ).then( c => c.DecksPageComponent )
	}
]


