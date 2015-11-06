var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
// <flug-card [item]="f" [selected]="..." (item-selected)="$event"></flug-card>
var FlugCard = (function () {
    function FlugCard() {
        this.itemSelected = new angular2_2.EventEmitter();
    }
    FlugCard.prototype.select = function () {
        this.itemSelected.next(this.flug);
    };
    __decorate([
        angular2_1.Input('item'), 
        __metadata('design:type', Object)
    ], FlugCard.prototype, "flug");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Boolean)
    ], FlugCard.prototype, "selected");
    __decorate([
        angular2_2.Output(), 
        __metadata('design:type', Object)
    ], FlugCard.prototype, "itemSelected");
    FlugCard = __decorate([
        angular2_1.Component({
            selector: 'flug-card',
            directives: [angular2_1.CORE_DIRECTIVES],
            templateUrl: 'app/flug-card/flug-card.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FlugCard);
    return FlugCard;
})();
exports.FlugCard = FlugCard;
//# sourceMappingURL=flug-card.js.map