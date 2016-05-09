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
        init: function( config, elem ) {
            var self = this;

            self.elem = elem;
            self.$elem = $(elem);

            if( typeof config === 'string' ) {
                self.theme = config;
            } else {
                // object was passed
                self.theme = config.theme;
                self.config = $.extend( {}, $.fn.SavSelect.config, config );
            }

            self.options();
        },

        options: function() {
            var self = this;
            var options = [];

            self.$elem.find('option').each( function() {
                options[$(this).val()] = $(this).text();
            });

            return options;
        }
    };

    $.fn.SavSelect = function( config ) {
        return this.each( function() {
            var select = Object.create( Select );
            select.init( config, this );
        });
    };

    $.fn.SavSelect.config = {
        theme: 'bootstrap'
    };

})(jQuery, window, document);