/**
 * File:    fillytext.js
 * Author:  Jordan Brauer <jbrauer.inc@gmail.com>
 *
 * A plugin that generates filler text when you load your page rather than pasting it into your source code and bloating it.
 * 1. Uses the HTML5 data-attribute for options.
 * 2. main option is for which type of text you want.
 * 3. other options include trunication, leading & trailing (essentially a for loop behind the scenes),
 */

(function( $ ) {
  $.fn.fillytext = function()
  {
    // plugin vars
    var $this       = this,
        $document   = $(document),
        $lorem      = $('[data-fillytext="lorem"]'),
        $cicero     = $('[data-fillytext="cicero"]'),
        $helloworld = $('[data-fillytext="helloworld"]'),
        $options    = $('[data-fillytext-options]');

    // hello world data text
    $helloworld.each(function() {
      var $self = $(this);
      return $self.append('Hello World!');
    });

    // lorem data text
    $lorem.each(function() {
      var $self = $(this);
      return $self.append('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.');
    });

    // cicero data text
    $cicero.each(function() {
      var $self = $(this);
      return $self.append('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia');
    });

    // data options list
    $options.each(function() {
      var $self = $(this);

      var $optionlist = {
        trimTo: $self.data('fillytext-options').trimTo,
        trimFrom: $self.data('fillytext-options').trimFrom,
        repeat: $self.data('fillytext-options').repeat,
        // lead: $self.data('fillytext-options').lead,
        // trail: $self.data('fillytext-options').trail
      };

      if ($optionlist.trimTo) {
        return $self.html($self.html().substring(0, $optionlist.trimTo));
      }
      if ($optionlist.trimFrom) {
        return $self.html($self.html().substring($self.html().length, $optionlist.trimFrom));
      }
      if ($optionlist.repeat) {
        return $self.html(($self.html() + ' ').repeat(parseInt($optionlist.repeat) + 1));
      }

      // lead, trail options...

      return $self;
    });

    // console.log($this);
    return $this;
  }
}( jQuery ));

// initiate the plugin
$(document).fillytext();
