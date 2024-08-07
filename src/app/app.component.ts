import { Component, ChangeDetectionStrategy } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { FormsModule } from '@angular/forms'

import { NavbarComponent } from './components/navbar/navbar.component'

@Component( {
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		NavbarComponent,
		FormsModule
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AppComponent {
	title = 'card-app'
}


