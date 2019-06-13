(function(exports) {
    function Note() {
        this._list = new Array;
    };

    Note.prototype.addNote = function(input) {
        this._list.push(input)
    };

    Note.prototype.showFullNote = function() {
        // this.list.forEach(note => {
        //     return note;
        // });

        // var index
        return this._list
        // for (index = 0; index < array.length -1 ; index++) {
        //     array[index]
        // };
    };

    exports.Note = Note;
})(this);
