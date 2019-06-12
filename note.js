(function(exports) {
    function Note() {
        this.list = new Array;
    };

    Note.prototype.addNote = function(input) {
        this.list.push(input)
    };

    Note.prototype.showShortNote = function() {
        // this.list.forEach(function(note) {
        //     return note.substring(0,20) + "...";
        // });
        var index
        var array = this.list
        for (index = 0; index < array.length; ++index) {
            return array[index].substring(0,20) + "...";
        };
    };

    Note.prototype.showFullNote = function() {
        // this.list.forEach(note => {
        //     return note;
        // });

        var index
        var array = this.list
        for (index = 0; index < array.length; ++index) {
            return array[index]
        };
    };

    exports.Note = Note;
})(this);
