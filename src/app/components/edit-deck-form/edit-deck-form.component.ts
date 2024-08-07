import { Component, ChangeDetectionStrategy } from '@angular/core'

import { DeckApiService } from '../../services/deck-api.service'

@Component( {
	selector: 'app-edit-deck-form',
	standalone: true,
	imports: [],
	templateUrl: './edit-deck-form.component.html',
	styleUrl: './edit-deck-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class EditDeckFormComponent {
	constructor( private deckService: DeckApiService ) {}
}


