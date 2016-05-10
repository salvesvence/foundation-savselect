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
            self.display();
        },

        options: function() {
            var self = this;
            var options = [];

            self.$elem.find('option').each( function() {
                options[$(this).val()] = $(this).text();
            });

            return options;
        },

        display: function() {
            var self = this;

            self.$elem.after(
                '<div class="dropdown">' +
                    '<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '<span class="caret"></span>' +
                    '</button>' +
                    '<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">' +
                        '<li><a href="#">Action</a></li>' +
                        '<li><a href="#">Another action</a></li>' +
                        '<li><a href="#">Something else here</a></li>' +
                    '</ul>' +
                '</div>'
            );
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