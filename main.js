(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) : global.elementHeightEqualizer = factory();
}(this, function () {
    'use strict';

    function elementHeightEqualizer() {
        [].forEach.call(document.querySelectorAll('[equalizer-container]'), function(containerToEqualize) {
            var childrenToEqualize = containerToEqualize.querySelectorAll('[equalize]'),
                largestHeight = 0;

            [].forEach.call(childrenToEqualize, function(childToEqualize) {
                var thisChildsHeight = childToEqualize.offsetHeight;
                largestHeight =  thisChildsHeight > largestHeight ? thisChildsHeight : largestHeight;
            });

            [].forEach.call(childrenToEqualize, function(childToEqualize) {
                childToEqualize.style.height = largestHeight + 'px';
            });
        });
    }

    return elementHeightEqualizer;
}));
