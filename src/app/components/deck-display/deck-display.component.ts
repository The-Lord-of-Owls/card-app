import { Component, ChangeDetectionStrategy } from '@angular/core'

import { DeckApiService } from '../../services/deck-api.service'

@Component( {
	selector: 'app-deck-display',
	standalone: true,
	imports: [],
	templateUrl: './deck-display.component.html',
	styleUrl: './deck-display.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DeckDisplayComponent {
	constructor( private deckService: DeckApiService ) {}
}


