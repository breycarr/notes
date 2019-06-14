(function(exports) {
    function Note() {
        this._list = new Array;
    };

    Note.prototype.addNote = function(input) {
        this._list.push(input)
    };

    Note.prototype.notePosition = function() {
        return this._list.length - 1
    };

    Note.prototype.getNote = function(position){
      return this._list[position]
    };
    exports.Note = Note;
})(this);
