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

            self.theme = ( typeof config === 'string' )
                ? config
                : config.theme;

            self.config = $.extend( {}, $.fn.SavSelect.config, config );

            self.options();
            self.display();
        },

        options: function() {

            var self = this,
                options = {};

            self.$elem.find('option').each( function() {

                options[$(this).val()] = {
                    'text': $(this).text(),
                    'is_selected': $(this).attr('selected') ? true : false
                };
            });

            return options;
        },

        display: function() {

            var self = this;

            self.$elem.after(
                '<button href="#" data-dropdown="drop1" aria-controls="drop1" aria-expanded="false" class="sav-select">' +
                    self.config.default_option +
                '</button><br>' +
                '<ul id="drop1" data-dropdown-content class="f-dropdown sav-dropdown" aria-hidden="true">' +
                    '<li><a href="#">' + self.config.default_option + '</a></li>' +
                '</ul>'
            );

            self.setOptions();
            self.$elem.hide();
        },

        setOptions: function() {

            var self = this,
                options = self.options();

            $.each(options, function(key, value) {

                if(value.is_selected) self.$elem.siblings('.sav-select').text(value.text);

                self.$elem.siblings('.sav-dropdown').append(
                    '<li><a href="#" data-elem="' + key +'">' + value.text + '</a></li>'
                );
            });
        }
    };

    $.fn.SavSelect = function( config ) {

        return this.each( function() {

            var select = Object.create( Select );
            select.init( config || 'foundation', this );
        });
    };

    $.fn.SavSelect.config = {
        theme: 'foundation',
        default_option: 'Select Option'
    };

})(jQuery, window, document);