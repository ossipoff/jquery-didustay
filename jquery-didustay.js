(function(window, $) {
  var window = this,
  ua = window.navigator.userAgent,
  windowsMatch = /windows nt (\d+.\d+)/i.exec(ua),
  windowsVersion = !!windowsMatch ? windowsMatch[1] : null,
  isFireFox = /.*firefox\/\d/i.test(ua),
  isIE = /.*msie|trident\/\d/i.test(ua),
  isEdge = /.*edge\/\d/i.test(ua),
  isOpera = /.*opr\/\d/i.test(ua),
  isChrome = !isEdge && !isOpera && /.*chrome\/\d/i.test(ua),
  isIEMetro = isIE && windowsVersion > 6.1 && windowsVersion < 6.4 && window.screenY === 0 && (window.innerHeight+1) !== window.outerHeight,
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  
  if (isMobile) {
    console.warn('didustay doesn\'t work on mobile platforms!');
  } else if (!windowsVersion) {
    console.warn('didustay only works on Windows platform!');
  } else {
    $.fn.didustay = function(f) {
      this.each(function() {
        if (this === window) {
          $(this).on('beforeunload', function(e) {
            setTimeout(function() {
              $(window.document).one('mousemove', function(e) {
                var xOffset, yOffset;
                
                if (isEdge) {
                    xOffset = 0;
                  } else if (isOpera) {
                    xOffset = 155;
                  } else if (isChrome) {
                    xOffset = 120;
                  } else if (isFireFox) {
                    xOffset = 200;
                  } else if (isIEMetro) {
                    xOffset = 245;
                  } else if (isIE) {
                    yOffset = -35;
                }
                
                if (xOffset !== undefined) {
                  if (e.pageX > ($(window).width() / 2) + xOffset) {
                    f(e);
                  }
                } else if (yOffset !== undefined) {
                  if (e.pageY > ($(window).height() / 2) + yOffset) {
                    f(e);
                  }
                } else {
                  f(e);
                }
              });
            }, 1);
          });
        } else {
          throw new Error('didustay only works for window object!');
        }
      });
    };
  }
})(window, jQuery);
