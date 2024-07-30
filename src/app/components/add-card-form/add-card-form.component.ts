import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Card } from '../../models/card.model';
import { addCard } from '../../state/card.actions';

@Component({
	selector: 'app-add-card-form',
	standalone: true,
	imports: [
		FormsModule
	],
	templateUrl: './add-card-form.component.html',
	styleUrl: './add-card-form.component.scss'
})
export class AddCardFormComponent {
	name: string = '';
	description: string = '';
	hp: number = 0;
	mp: number = 0;

	constructor(private store: Store) { }

	addCard() {	//Add a new card to the store
		const newCard: Card = {
			name: this.name,
			description: this.description,
			hp: this.hp,
			mp: this.mp
		};
		this.store.dispatch(addCard({ card: newCard }));
		this.name = '';
		this.description = '';
		this.hp = 0;
		this.mp = 0;
	}
}
