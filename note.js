(function(exports) {
    function Note() {
        this.list = []; 
    };

    this.new = function(input) {
        this.list.push(input) 
    }; 

    this.show = function() { 
        this.list.forEach(function(note) {
            console.log(note); 
        });
    };

    exports.Note = Note; 
})(this); 

