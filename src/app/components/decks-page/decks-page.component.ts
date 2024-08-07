import { Component, ChangeDetectionStrategy } from '@angular/core'

import { DeckApiService } from '../../services/deck-api.service'

@Component( {
	selector: 'app-decks-page',
	standalone: true,
	imports: [],
	templateUrl: './decks-page.component.html',
	styleUrl: './decks-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DecksPageComponent {
	constructor( private deckService: DeckApiService ) {}
}


