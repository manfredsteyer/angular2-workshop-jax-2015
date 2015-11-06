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
var angular2_3 = require('angular2/angular2');
// <data-control 
//		[date]="flug.datum" 
//      (date-change)="flug.datum = $event">
var DateControl = (function () {
    function DateControl() {
        this.dateChange = new angular2_3.EventEmitter();
    }
    DateControl.prototype.onChanges = function () {
        var date = new Date(this.date);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    };
    DateControl.prototype.apply = function () {
        var date = new Date();
        date.setDate(this.day);
        date.setMonth(this.month - 1);
        date.setFullYear(this.year);
        date.setHours(this.hour);
        date.setMinutes(this.minute);
        date.setSeconds(0);
        date.setMilliseconds(0);
        this.dateChange.next(date.toISOString());
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], DateControl.prototype, "date");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', Object)
    ], DateControl.prototype, "dateChange");
    DateControl = __decorate([
        angular2_1.Component({
            selector: 'date-control',
            templateUrl: 'app/date-control/date-control.html',
            directives: [angular2_2.CORE_DIRECTIVES, angular2_2.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], DateControl);
    return DateControl;
})();
exports.DateControl = DateControl;
//# sourceMappingURL=date-control.js.map