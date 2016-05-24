if( typeof Object.create !== 'function' ) {

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

            self.multiple = typeof( self.$elem.attr('multiple') ) != 'undefined';

            self.config = $.extend( {}, $.fn.SavSelect.config, config );

            self.default_option = self.$elem.data('text') || self.config.default_option;

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
                    'is_selected': $this.attr('selected') || false,
                    'thumbnail': $this.data('thumb') || false
                };
            });

            return options;
        },

        display: function() {

            var self = this,
                $elem = self.$elem,
                id = $elem.attr('id');

            $elem.after(
                '<button href="#" data-dropdown="sav-' + id + '" aria-controls="sav-' + id + '" aria-expanded="sav-' + id + '" class="sav-button">' +
                    self.default_option +
                '</button><br>' +
                '<ul id="sav-' + id + '" data-dropdown-content class="f-dropdown sav-dropdown" aria-hidden="true">' +
                    '<li><a href="#">' + self.default_option + '</a></li>' +
                '</ul>'
            ).hide();

            if( self.multiple ) $elem.siblings('ul').attr('aria-autoclose', false);

            return self.setOptions()
                       .onChangeOption();
        },

        setOptions: function() {

            var self = this,
                options = self.options(),
                $elem = self.$elem,
                html;

            $.each(options, function(key, value) {

                if(value.is_selected) $elem.siblings('.sav-button').text(value.text);

                html = value.thumbnail
                        ? '<div class="sav-thumbnail" style="background-image: url(' + value.thumbnail + ');"></div>'
                        : '';

                $elem.siblings('.sav-dropdown').append(
                    '<li>' +
                        '<a href="#" data-elem="' + key +'">' +
                            html +
                            value.text +
                        '</a>' +
                    '</li>'
                );
            });

            return self;
        },

        onChangeOption: function() {

            var self = this,
                $elem = self.$elem,
                dropdown = $elem.siblings('.sav-dropdown'),
                texts;

            dropdown.find('a').on('click', function() {

                var $this = $(this),
                    option = $this.data('elem');

                if( self.multiple ) {

                    $this.toggleClass('sav-selected');

                    $elem.find('option[value=' + option + ']')
                         .attr('selected', $this.hasClass('sav-selected'));
                }
                else {

                    $elem.find('option').each(function(i, elem) {
                        $(this).attr("selected", elem.value === option);
                    });
                }

                texts = [];

                $elem.find('option').each(function(i, elem) {
                    if( $(this).is("[selected]") ) texts[i] = $(this).text();
                });

                $elem.siblings('.sav-button')
                    .empty()
                    .text( texts.filter(Boolean).join(', ') || self.default_option );
            });

            return self;
        }
    },

    sav = $('select.sav-select');

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

    if(sav.length) sav.SavSelect();

    $(document).foundation();

})(jQuery, window, document);