import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Card } from '../../models/card.model'
import { DeckComponent } from '../deck/deck.component'

@Component( {
	selector: 'app-deck-scroll-box',
	standalone: true,
	imports: [
		DeckComponent
	],
	templateUrl: './deck-scroll-box.component.html',
	styleUrl: './deck-scroll-box.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DeckScrollBoxComponent {
	@Input() decks: Card[] = []
}


