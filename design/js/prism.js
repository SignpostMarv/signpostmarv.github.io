(function(){
  'use strict';
  var
    codeElements = document.querySelectorAll('code:not([class*="language-"])'),
    codeElementsArray = [],
    codeLines = [],
    i = 0|0,
    makePrism = function(lines, element){
      return function(){
        element.classList.add('language-' + lines.shift());
        element.textContent = lines.join("\n");
        Prism.highlightElement(element, true);
      };
    }
  ;
  for(i=0;i<codeElements.length;++i){
    if(
      codeElements[i].textContent.indexOf("\n") > 0 &&
      (codeLines = codeElements[i].textContent.split("\n")).length > 0 &&
      !/\s+/.test(!codeLines[0])
    ){
      codeElementsArray.push(makePrism(codeLines, codeElements[i]));
    }
  }

  codeElementsArray.forEach(function(e){
    e();
  });
})();
