import { Card } from "./card.model"

export interface Deck {
	name: string		//The name of the deck
	description: string	//The description of the deck
	creator: string		//The creator of the deck
	cards: Card[]		//The cards in the deck
}


