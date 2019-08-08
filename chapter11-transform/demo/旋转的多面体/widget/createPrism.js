
 ;(function(global){

    "use strict";


    function prism(options) {
        if(!options || !options.id) return;
        var _self = this;
        this.wrapper = document.getElementById(options.id);
        this.width = options.width || '100px';
        this.height = options.height || '150px';
        this.count = options.count || 4;  // 正n菱柱中的n
        this.perspective = options.perspective || '400px';
        this.backgroundImgPrefix = options.backgroundImgPrefix || '';
        this.cube = null;
        this.angle = 360/this.count;
        this.halfAngle = this.angle/2;
        
        this.translateZ = parseInt(parseFloat(_self.width)/2/Math.tan(_self.halfAngle*Math.PI/180)); 

    };
 
 
    prism.prototype = {
       init: function() {
            this.initcube();
       },
       initcube: function() {

            this.wrapper.style.perspective = this.perspective;

            var cube = document.createElement('div');
            cube.setAttribute('class', 'cube');
            cube.style.width = this.width;
            cube.style.height = this.height;
            // cube.style.transform = 'roateX(45deg) rotateY(35deg)';
            cube.style.transformStyle = 'preserve-3d';
            cube.style.backfaceVisibility = false;
            cube.style.transition = 'transform .5s ease-in-out';
            this.cube = cube;
            this.wrapper.append(cube);
            this.createprism();
        },
        createprism: function() {
            for(var i = 0 ; i < this.count; i++) {
                var prismFace = document.createElement('div');
                prismFace.style.width = this.width;
                prismFace.style.height = this.height;
                var r = Math.random()*255;
                var g = Math.random()*255;
                var b = Math.random()*255;
                prismFace.style.backgroundColor = 'rgba('+r+','+g+','+b+', .8)';

                prismFace.style.transform = 'rotateY('+ this.angle*(i+1) +'deg)'+' translateZ('+this.translateZ +'px)';

                this.cube.append(prismFace);
            }
            this.animateRotate();
        },
        animateRotate: function() {
            var _self = this;
            var count = 0;
            var tmpArr = [];
            tmpArr[count] = setInterval(function() {
                _self.cube.style.transform = 'rotateY('+ parseFloat(_self.angle)*count+ 'deg)';
                count++;
            }, 2000);
        }
      
    };

    //兼容CommonJs规范 
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = prism;
    };
    //兼容AMD/CMD规范
    if (typeof define === 'function') define(function() { 
        return prism; 
    });
    //注册全局变量，兼容直接使用script标签引入插件
    global.prism = prism;

})(this);
