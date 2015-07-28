(function(){if(
  typeof(FontFaceObserver) === 'function' &&
  typeof(JSON) === 'object'
){
  if(typeof(Array.prototype.forEach) !== 'function'){
    Array.prototype.forEach = function(fn){
      for(var i=0|0;i<this.length;i++){
        fn(this[i], i);
      }
    };
  }
  (function(fn){
    if(document.readyState !== 'loading'){
      fn();
    }else if(document.addEventListener){
      document.addEventListener('DOMContentLoaded', fn);
    }else{
      document.attachEvent('onreadystatechange', function(){
        if(document.readyState !== 'loading'){
          fn();
        }
      });
    }
  })(function(){
    var
      wantFonts = [
        'Noto Sans',
        'Noto Serif',
        'Roboto Mono',
        'Roboto Condensed',
        'FontAwesome',
      ],
      checkFontSymbol = {
        FontAwesome: '\uf09b',
      },
      hasFonts = JSON.parse(localStorage.getItem('hasFonts')) || [],
      queueWriteHasFonts = function(fontFamily, add){
        add = typeof(add) === 'undefined' ? true : !!add;
        if(add && hasFonts.indexOf(hasFonts) < 0){
          hasFonts.push(fontFamily);
        }else if(!add){
          while(hasFonts.indexOf(fontFamily) >= 0){
            hasFonts.splice(hasFonts.indexOf(fontFamily), 1);
          }
        }
        cancelAnimationFrame(hasFontsPending);
        hasFontsPending = requestAnimationFrame(function(){
          localStorage.setItem('hasFonts', JSON.stringify(hasFonts));
        });
      },
      done = function(fontFamily, addPrefix, delPrefix){
        var
          fontClass = fontFamily.toLowerCase().replace(/[^a-z]+/, '-'),
          addClass = addPrefix + fontClass,
          delClass = delPrefix + fontClass
        ;
        if(typeof(document.documentElement.classList) === 'undefined'){
          document.documentElement.className += addClass;
          document.documentElement.className = (
            document.documentElement.className.replace(new RegExp(
              '\\s*' +
              delClass.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
              '\\s*'
            ), ' ')
          );
        }else{
          document.documentElement.classList.add(addClass);
          document.documentElement.classList.remove(delClass);
        }
      },
      hasFontsPending
    ;
    hasFonts.forEach(function(fontFamily){
        done(fontFamily, 'has-font-', 'no-font-');
    });
    wantFonts.forEach(function(fontFamily){
      if(typeof(fontFamily) !== 'string'){
        return;
      }
      var
        checkWith
      ;
      if(fontFamily in checkFontSymbol){
        checkWith = checkFontSymbol[fontFamily];
      }
      (new FontFaceObserver(fontFamily)).check(checkWith).then(
        function(){
          queueWriteHasFonts(fontFamily);
        },
        function(){
          queueWriteHasFonts(fontFamily, false);
          done(fontFamily, 'no-font-', 'has-font-');
        }
      );
    });
  });
}})();
