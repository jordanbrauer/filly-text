/*
 * # Filly Text Plugin
 *
 * Author: Jordan Brauer
 * Contact: j.brauer@hotmail.com
 *
 * Description:
 * Useful to help take away the bloaty filler text when building and testing projects.
 */
(function($){
  $.fn.fillyText = function(arg) {
    var $this = this,
    $document = $(document),
    $filler_text = 'js/fillytext/json/fillytext.json';

    $this.fill = function(){
      $.getJSON($filler_text, function(ft) {
        // console.log(ft);
        $this.append(ft[arg]);
      });
    }

    $document.ready(function() {
      $this.fill();
    });

    return $this;
  }
}(jQuery));
