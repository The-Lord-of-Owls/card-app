import { Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardComponent } from '../card/card.component';

@Component({
	selector: 'app-scroll-box',
	standalone: true,
	imports: [
		CardComponent
	],
	templateUrl: './scroll-box.component.html',
	styleUrl: './scroll-box.component.scss'
})
export class ScrollBoxComponent {
	@Input() cards: Card[] = [];	//Array of cards to display
}


