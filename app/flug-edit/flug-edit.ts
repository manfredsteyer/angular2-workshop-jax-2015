import {Component} from 'angular2/angular2';
import {RouteParams } from 'angular2/router';

@Component({
	templateUrl: 'app/flug-edit/flug-edit.html'
})
export class FlugEdit {
	
	info = "FlugEdit!";
	id;
	
	constructor(params: RouteParams) {
		
		this.id = params.get('id');
		
	}
	
}