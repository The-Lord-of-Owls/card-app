import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core'
import { Subscription } from 'rxjs'

import { Deck } from '../../models/deck.model'

import { DeckApiService } from '../../services/deck-api.service'

@Component( {
	selector: 'app-decks-page',
	standalone: true,
	imports: [],
	templateUrl: './decks-page.component.html',
	styleUrl: './decks-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DecksPageComponent implements OnDestroy {
	decks: Deck[] = []
	private subscriptions: Subscription = new Subscription()

	constructor( private deckService: DeckApiService ) {}

	getAllDecks( userId: string ) {
		const sub = this.deckService.getAllDecks( userId ).subscribe( response => {
			console.log( 'All decks:', response )
		} )
		this.subscriptions.add( sub )
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe()
	}
}


