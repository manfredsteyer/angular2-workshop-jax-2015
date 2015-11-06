import { Control, Directive, Provider, NG_VALIDATORS } from 'angular2/angular2';

@Directive({
	selector: '[ort]',  // <input ort
	bindings: [new Provider(NG_VALIDATORS, {useValue: OrtValidator.validate, multi: true})]
}) 
export class OrtValidator {
	
	static validate(ctrl: Control): any {
		
		var orte = ["Graz", "München", "Wien", "Hamburg", "Berlin"];

		if (!ctrl.value) return { };

		if (orte.find(o => o == ctrl.value)) {
			return { }
		}
		
		return {
			ort: true
		};
		
	}
	
}