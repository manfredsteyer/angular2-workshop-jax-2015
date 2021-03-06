import {Component} from 'angular2/angular2';
import {RouteParams } from 'angular2/router';
import {FlugService} from '../services/flug-service';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import { DateControl } from '../date-control/date-control';
@Component({
	templateUrl: 'app/flug-edit/flug-edit.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, DateControl]
})
export class FlugEdit {
	
	info = "FlugEdit!";
	id;
	flug;
	flugService: FlugService;
	message;
	
	constructor(params: RouteParams, flugService: FlugService) {
		
		this.id = params.get('id');
		flugService
			.findById(this.id)
			.subscribe(
				f => {
					this.flug = f;
				}
			)
			
		this.flugService = flugService;	
	}
	
	save() {
		this
			.flugService
			.save(this.flug)
			.subscribe(r => {
				if (r.status >= 400) {
					this.message = r.text();
				}
				else {
					this.message = "Flug gespeichert!";				
				}
			},
			err => {
				this.message = err;
			})
	}
	
}