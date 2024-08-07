import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CardComponent } from '../card/card.component'
import { AddCardFormComponent } from '../add-card-form/add-card-form.component'
import { ScrollBoxComponent } from '../scroll-box/scroll-box.component'

import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { Card } from '../../models/card.model'
import { selectAllCards } from '../../state/card.selectors'
import { addCard } from '../../state/card.actions'

import { DeckApiService } from '../../services/deck-api.service'

@Component( {
	selector: 'app-cards-page',
	standalone: true,
	imports: [
		CommonModule,
		CardComponent,
		AddCardFormComponent,
		ScrollBoxComponent
	],
	templateUrl: './cards-page.component.html',
	styleUrl: './cards-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CardsPageComponent implements OnDestroy {
	cards: Card[] = []
	private subscriptions: Subscription = new Subscription()

	constructor( private store: Store<{ cards: Card[] }>, private deckService: DeckApiService ) {
		const apiSub = this.deckService.getCardList( 0, 13293 ).subscribe( response => {
			response.cards.forEach( ( card: any ) => {
				const newCard: Card = {
					name: card.name,
					description: card.desc,
					atk: card.atk,
					def: card.def
				}
				this.store.dispatch( addCard( { card: newCard } ) )
			} )
		} )
		this.subscriptions.add( apiSub )

		const storeSub = this.store.select( selectAllCards ).subscribe( cards => {
			this.cards = cards ?? [] // Fallback to an empty array if cards is null
		} )
		this.subscriptions.add( storeSub )
	}

	ngOnDestroy() {	//Handles unsubscribing on destruction of the page
		if ( this.subscriptions ) this.subscriptions.unsubscribe()
	}
}


