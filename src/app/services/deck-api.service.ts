import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable( {
	providedIn: 'root'
} )
export class DeckApiService {
	private apiUrl = 'http://localhost:4000'

	constructor( private http: HttpClient ) { }

	// Create a deck
	createDeck( userId: string, name: string, description: string ): Observable<any> {
		const body = { userId, name, description }
		return this.http.post<any>( `${ this.apiUrl }/decks/create`, body )
	}

	// Delete a deck
	deleteDeck( userId: string, deckName: string ): Observable<any> {
		const body = { userId, deckName }
		return this.http.post<any>( `${ this.apiUrl }/decks/delete`, body )
	}

	// Add a card to a deck
	addCard( userId: string, deckName: string, cardId: number, count: number ): Observable<any> {
		const body = { userId, deckName, cardId, count }
		return this.http.post<any>( `${ this.apiUrl }/decks/addcard`, body )
	}

	// Remove a card from a deck
	removeCard( userId: string, deckName: string, cardId: number ): Observable<any> {
		const body = { userId, deckName, cardId }
		return this.http.post<any>(`${ this.apiUrl }/decks/removecard`, body )
	}

	// Get information about a specific deck
	getDeckInfo( userId: string, deckName: string ): Observable<any> {
		return this.http.get<any>(`${ this.apiUrl }/decks/getinfo?userid=${ userId }&deckname=${ deckName }` )
	}

	// Set name and/or description of a deck
	setDeckInfo( userId: string, deckName: string, newName?: string, newDescription?: string ): Observable<any> {
		const body: any = { userId, deckName }
		if ( newName ) body.newName = newName
		if ( newDescription ) body.newDescription = newDescription
		return this.http.post<any>( `${ this.apiUrl }/decks/setinfo`, body )
	}

	// Get a list of all decks belonging to the user
	getAllDecks( userId: string ): Observable<any> {
		return this.http.get<any>( `${ this.apiUrl }/decks/getall?userid=${ userId }` )
	}

	// Get the image of a specific card
	getCardImage( cardId: number ): Observable<any> {
		return this.http.get<any>(`${ this.apiUrl }/cards/getimage?cardid=${ cardId }` )
	}
	
	// Get information about a specific card
	getCardInfo( cardId: number, cardIndex: number ): Observable<any> {
		return this.http.get<any>( `${ this.apiUrl }/cards/getinfo?cardid=${ cardId }&cardindex=${ cardIndex }` )
	}
	
	// Get a list of cards between a start and end value
	getCardList( startIndex: number = 0, endIndex: number = 100 ): Observable<any> {
		return this.http.get<any>( `${ this.apiUrl }/cards/getlist?start=${ startIndex }&end=${ endIndex }` )
	}
}


