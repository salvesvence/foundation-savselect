// Utility
if( typeof  Object.create !== 'function' ) {
    Object.create = function( obj ) {
        function F(){};
        F.prototype = obj;
        return new F();
    }
}

(function($, window, document, undefined) {

    var Select = {
        init: function( options, elem ) {
            var self = this;

            self.elem = elem;
            self.$elem = $(elem);

            if( typeof options === 'string' ) {
                self.search = options;
            } else {
                // object was passed
                self.search = options.search;
                self.options = $.extend( {}, $.fn.SavSelect.options, options );
            }

            self.options();
        },

        options: function() {
            var self = this;
            var options = [];

            self.$elem.find('option').each( function() {
                options.push( $(this).val() );
            });

            return options;
        }
    };

    $.fn.SavSelect = function( options ) {
        return this.each( function() {
            var select = Object.create( Select );
            select.init( options, this );
        });
    };

    $.fn.SavSelect.options = {
        search: 'sav'
    };

})(jQuery, window, document);