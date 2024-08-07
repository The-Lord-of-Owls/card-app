import { Component, ChangeDetectionStrategy } from '@angular/core'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router'


@Component( {
	selector: 'app-navbar',
	standalone: true,
	imports: [
		MatToolbarModule, 
		MatButtonModule, 
		MatIconModule
	],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class NavbarComponent {
	constructor( private router: Router ) {}

	// Method to navigate to a specific route
	goToPage( route: string ) {
		this.router.navigate( [ route ] )
	}
}


