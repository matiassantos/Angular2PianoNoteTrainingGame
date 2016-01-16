System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NoteFactory;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NoteFactory = (function () {
                function NoteFactory() {
                    var crotchetUp = "crotchet_up.png";
                    var crotchetDown = "crotchet_down.png";
                    this.notePositions = [
                        { key: 'g5', yPos: 86, keyNumber: 49, imageName: crotchetDown },
                        { key: 'f5', yPos: 100, keyNumber: 57, imageName: crotchetDown },
                        { key: 'e5', yPos: 112, keyNumber: 56, imageName: crotchetDown },
                        { key: 'd5', yPos: 126, keyNumber: 54, imageName: crotchetDown },
                        { key: 'c5', yPos: 138, keyNumber: 52, imageName: crotchetDown },
                        { key: 'b4', yPos: 70, keyNumber: 51, imageName: crotchetUp },
                        { key: 'a4', yPos: 83, keyNumber: 49, imageName: crotchetUp },
                        { key: 'g4', yPos: 95, keyNumber: 47, imageName: crotchetUp },
                        { key: 'f4', yPos: 109, keyNumber: 45, imageName: crotchetUp },
                        { key: 'e4', yPos: 121, keyNumber: 44, imageName: crotchetUp },
                        { key: 'd4', yPos: 135, keyNumber: 42, imageName: crotchetUp },
                        { key: 'c4', yPos: 163, keyNumber: 40, imageName: crotchetUp },
                        { key: 'b4', yPos: 163, keyNumber: 30, imageName: crotchetUp },
                    ];
                }
                NoteFactory.prototype.generate = function (keyPosition) {
                    var note;
                    for (var i = 0; i <= this.notePositions.length; i++) {
                        if (this.notePositions[i].key === keyPosition) {
                            return this.notePositions[i];
                        }
                    }
                    return {};
                };
                NoteFactory = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], NoteFactory);
                return NoteFactory;
            })();
            exports_1("NoteFactory", NoteFactory);
        }
    }
});
//# sourceMappingURL=NoteFactory.js.map