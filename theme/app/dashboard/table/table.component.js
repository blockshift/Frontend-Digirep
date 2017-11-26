"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var table_1 = require('./table');
var core_1 = require('@angular/core');
;
var TableComponent = (function () {
    function TableComponent() {
        this.table = [
            new table_1.Hash(13, '27ac8006c683714109fb606e30f3ee3c3b0cf64b9ef989874a85cbafbad9ed91', '36738', 'geNir'),
            new table_1.Hash(13, '436af8c47eaebc1ec0947d60380b46a813fd2a4e930354b7ede71d57e13b6608', '646165C', 'naskjcnk'),
            new table_1.Hash(15, '4b9d687ac625690fd026ed4b236dad1cac90ef69e7ad256cc42766a065b50026', '5646544', 'JBXLKxnlkxA'),
            new table_1.Hash(9, '7b1550711f46b3b66402d6846eb410c32dbccbcfd4bc1051a64bb5f4b985ee99z', '465465', '5466514654')
        ];
    }
    ;
    TableComponent = __decorate([
        core_1.Component({
            selector: 'table-cmp',
            moduleId: module.id,
            templateUrl: 'table.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map