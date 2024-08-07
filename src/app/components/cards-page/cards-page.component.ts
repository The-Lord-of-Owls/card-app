import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CardComponent } from '../card/card.component'
import { AddCardFormComponent } from '../add-card-form/add-card-form.component'
import { ScrollBoxComponent } from '../scroll-box/scroll-box.component'

import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { Card } from '../../models/card.model'
import { selectAllCards } from '../../state/card.selectors'


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
export class CardsPageComponent {
	cards: Card[] = []
	private cardsSubscription: Subscription

	constructor( private store: Store<{ cards: Card[] }> ) {
		this.cardsSubscription = this.store.select( selectAllCards ).subscribe( cards => {
			this.cards = cards ?? [] // Fallback to an empty array if cards is null
		} )
	}

	ngOnDestroy() {	//Handles unsubscribing on destruction of the page
		if ( this.cardsSubscription ) {
			this.cardsSubscription.unsubscribe()
		}
	}
}


