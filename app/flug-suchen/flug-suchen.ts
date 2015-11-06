import { Component, NgIf, NgFor, CORE_DIRECTIVES } from 'angular2/angular2';
import { OrtPipe } from '../pipes/ort-pipe';
//import { MY_DIRECTIVES } from '../registry';
declare function fetch(url:string): any;

@Component({
	selector: 'flug-suchen',
	templateUrl: 'app/flug-suchen/flug-suchen.html',
	directives: [CORE_DIRECTIVES],
	pipes: [OrtPipe]
})
export class FlugSuchen {
	
	von: string = "Graz";
	nach: string = "Hamburg";
	fluege = [];
	selectedFlug;
	
	constructor() {
		
	}
	
	suchen() {
		
		var url = "http://www.angular.at/api/flug"
				+ "?abflugOrt=" 
				+ encodeURIComponent(this.von) 
				+ "&zielOrt=" 
				+ encodeURIComponent(this.nach);

		
		fetch(url)
			.then((r) => r.json())
			.then((r) => {
				this.fluege = r;
			});
			
	}
	
	selectFlug(flug) {
		this.selectedFlug = flug;
	}
	
}