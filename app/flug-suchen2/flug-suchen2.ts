import { Component, NgIf, NgFor, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';
import { OrtPipe } from '../pipes/ort-pipe';
//import { MY_DIRECTIVES } from '../registry';
import { FlugService } from '../services/flug-service';
import { Inject, ControlGroup, FormBuilder, Validators} from 'angular2/angular2';
import { OrtValidator } from '../validators/ort-validator';

@Component({
	selector: 'flug-suchen',
	templateUrl: 'app/flug-suchen2/flug-suchen2.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, OrtValidator],
	pipes: [OrtPipe]
})
export class FlugSuchen2 {
	
	fluege = [];
	selectedFlug;
	flugService: FlugService;
	filter: ControlGroup;
	
	constructor(flugService: FlugService, fb: FormBuilder) {
		this.flugService = flugService;
		
		this.filter = fb.group({
			von: [
				'Graz', 
				Validators.compose([
					Validators.required,
					OrtValidator.validate,
					Validators.minLength(2)
				])
			],
			nach: ['Hamburg', Validators.required]
		});
		
	}
	
	suchen() {
		
		var filterData = this.filter.value;
		
		this.flugService
			.find(filterData.von, filterData.nach)
			.subscribe((r) => {
				this.fluege = r;
			});
	}
	
	selectFlug(flug) {
		this.selectedFlug = flug;
	}
	
}