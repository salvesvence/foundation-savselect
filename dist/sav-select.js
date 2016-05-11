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

            self.display()
                .options();
        },

        options: function() {

            var self = this,
                options = {};

            self.$elem.find('option').each( function() {

                var $this = $(this);

                options[$this.val()] = {
                    'text': $this.text(),
                    'is_selected': $this.attr('selected') ? true : false
                };
            });

            return options;
        },

        display: function() {

            var self = this,
                $elem = self.$elem;

            $elem.after(
                '<button href="#" data-dropdown="drop1" aria-controls="drop1" aria-expanded="false" class="sav-select">' +
                    self.config.default_option +
                '</button><br>' +
                '<ul id="drop1" data-dropdown-content class="f-dropdown sav-dropdown" aria-hidden="true">' +
                    '<li><a href="#">' + self.config.default_option + '</a></li>' +
                '</ul>'
            );

            $elem.hide();

            return self.setOptions()
                       .onChangeOption();
        },

        setOptions: function() {

            var self = this,
                options = self.options(),
                $elem = self.$elem;

            $.each(options, function(key, value) {

                if(value.is_selected) $elem.siblings('.sav-select').text(value.text);

                $elem.siblings('.sav-dropdown').append(
                    '<li><a href="#" data-elem="' + key +'">' + value.text + '</a></li>'
                );
            });

            return self;
        },

        onChangeOption: function() {

            var self = this,
                $elem = self.$elem;

            $elem.siblings('.sav-dropdown').find('a').on('click', function() {

                var $this = $(this),
                    option = $this.data('elem');

                self.$elem.siblings('.sav-select').empty().text($this.text());

                $elem.find('option').each(function(i, elem) {
                    $(this).attr("selected", elem.value === option);
                });
            });

            return self;
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