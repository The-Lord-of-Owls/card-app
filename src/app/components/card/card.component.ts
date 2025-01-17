import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Card } from '../../models/card.model'

@Component( {
	selector: 'app-card',
	standalone: true,
	imports: [],
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CardComponent {
	@Input() card!: Card	//Specific card to display info on
}


