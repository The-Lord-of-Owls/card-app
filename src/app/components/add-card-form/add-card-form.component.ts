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
	private audio: HTMLAudioElement | undefined;

	name: string = '';
	description: string = '';
	atk: number = 0;
	def: number = 0;

	constructor(private store: Store) {
		if ( typeof window !== 'undefined' && typeof Audio !== 'undefined' ) {
			this.audio = new Audio();
			this.audio.src = 'lifepoints.mp3';
			this.audio.load();
			this.audio.onerror = () => {
				console.error( 'Audio source error:', this.audio?.src );
			};
		}
	}

	addCard() {	//Add a new card to the store
		const newCard: Card = {
			name: this.name,
			description: this.description,
			atk: this.atk,
			def: this.def
		};
		this.store.dispatch( addCard( { card: newCard } ) );
		this.name = '';
		this.description = '';
		this.atk = 0;
		this.def = 0;

		this.audio?.play().catch( error => {
			console.error( 'Error playing audio:', error );
		} );
	}
}


