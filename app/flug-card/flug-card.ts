import { Input, Component, CORE_DIRECTIVES } from 'angular2/angular2';
import { Output, EventEmitter } from 'angular2/angular2';

// <flug-card [item]="f" [selected]="..." (item-selected)="$event"></flug-card>
@Component({
	selector: 'flug-card',
	directives: [CORE_DIRECTIVES],
	templateUrl: 'app/flug-card/flug-card.html'
})
export class FlugCard {
	
	@Input('item') flug;
	@Input() selected: boolean;
	@Output() itemSelected = new EventEmitter();
	
	select() {
		this.itemSelected.next(this.flug);
	}
	
	
}