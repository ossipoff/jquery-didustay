(function(window, $) {
  $.fn.didustay = function(options) {
    options = $.extend({
      stayed: function() {},
      left: function() {}
    }, options);

    this.each(function() {
      if (this === window) {
        var isBeforeunload = false;
        var isUnload = false;
        var $iframe = $('<iframe style="width:0;height:0;border:none;position:absolute;top:-1px;left:-1px;" />');

        $iframe.on('load', function() {
          $($iframe[0].contentWindow).on('beforeunload', function() {
            if (isBeforeunload) {
              isUnload = true;
            }
          });
        });

        $(this.document).find('body').append($iframe);

        $(this).on('beforeunload', function() {
          isBeforeunload = true;
          $(this).one('click', function() {
            if (!isUnload) {
              options.stayed();
            } else {
              options.left();
            }
            isBeforeunload = false;
          });
          setTimeout(function() {
            $(this).click();
          });
        });
      } else {
        throw new Error('didustay only works for window object!');
      }
    });
  };
})(window, jQuery);
