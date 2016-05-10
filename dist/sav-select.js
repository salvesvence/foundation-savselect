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

            var self = this,
                options = [];

            self.$elem.find('option').each( function() {
                options[$(this).val()] = $(this).text();
            });

            return options;
        },

        display: function() {

            var self = this;

            self.$elem.after(
                '<button href="#" data-dropdown="drop1" aria-controls="drop1" aria-expanded="false" class="sav-select">Dropdown Button</button><br>' +
                '<ul id="drop1" data-dropdown-content class="f-dropdown sav-dropdown" aria-hidden="true">' +
                    '<li><a href="#">This is a link</a></li>' +
                    '<li><a href="#">This is a link</a></li>' +
                    '<li><a href="#">This is a link</a></li>' +
                '</ul>'
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