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
var OrtPipe = (function () {
    function OrtPipe() {
    }
    // {{ f.abflugort | ort:'long' }}
    OrtPipe.prototype.transform = function (value, args) {
        var fmt = args[0];
        var long, short;
        switch (value) {
            case "Graz":
                short = "GRZ";
                long = "Graz Thalerhof";
                break;
            case "München":
                short = "MUC";
                long = "München Franz-Josef-Strauss";
                break;
            case "Hamburg":
                short = "HAM";
                long = "Hamburg Fuhlsbüttel";
                break;
            default:
                short = "ROM";
                long = "ROM";
        }
        if (fmt == 'long')
            return long;
        return short;
    };
    OrtPipe = __decorate([
        angular2_1.Pipe({
            name: 'ort'
        }), 
        __metadata('design:paramtypes', [])
    ], OrtPipe);
    return OrtPipe;
})();
exports.OrtPipe = OrtPipe;
//# sourceMappingURL=ort-pipe.js.map