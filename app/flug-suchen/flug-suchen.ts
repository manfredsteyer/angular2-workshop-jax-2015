import { Component, NgIf, NgFor, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';
import { OrtPipe } from '../pipes/ort-pipe';
//import { MY_DIRECTIVES } from '../registry';
import { FlugService } from '../services/flug-service';
import { Inject} from 'angular2/angular2';
import { OrtValidator } from '../validators/ort-validator';
import { ShowError } from '../validators/show-error';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { FlugCard } from '../flug-card/flug-card';

@Component({
	selector: 'flug-suchen',
	templateUrl: 'app/flug-suchen/flug-suchen.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, OrtValidator, ShowError, ROUTER_DIRECTIVES, FlugCard],
	pipes: [OrtPipe]
})
export class FlugSuchen {
	
	von: string = "Graz";
	nach: string = "Hamburg";
	fluege = [];
	selectedFlug;
	flugService: FlugService;
	
	constructor(flugService: FlugService) {
		this.flugService = flugService;
	}
	
	suchen(f) {
		
		console.debug(f);
		
		this.flugService
			.find(this.von, this.nach)
			.subscribe((r) => {
				this.fluege = r;
			});
	}
	
	selectFlug(flug) {
		this.selectedFlug = flug;
	}
	
}