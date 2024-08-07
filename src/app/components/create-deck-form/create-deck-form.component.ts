import { Component, ChangeDetectionStrategy } from '@angular/core'

import { DeckApiService } from '../../services/deck-api.service'

@Component( {
	selector: 'app-create-deck-form',
	standalone: true,
	imports: [],
	templateUrl: './create-deck-form.component.html',
	styleUrl: './create-deck-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CreateDeckFormComponent {
	constructor( private deckService: DeckApiService ) {}
}


