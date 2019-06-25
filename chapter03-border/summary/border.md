# border

## 回顾 css3 之前

### 类型值

+ border-width 边框粗细，默认值是medium（大约等于3~4px）
+ border-color 边框颜色，默认是字体颜色
+ border-style 边框类型

### 简写形式

+ ``形式``:border: border-width border-style border-color;
+ ``说明``: 每个属性用空格分开，``没有先后顺序``，``border-style``为``必须参数``

### 不同的边定义不同的风格

+ 遵守TRBR(top, right, bottom, left)
+ 定义style

```
    1、扩展写法
    border-top-style      顶部边框类型
    border-right-style    右侧边框类型
    border-bottom-style   底部边框类型
    border-left-style     左侧边框类型

    2、简写形式

    /** -----一个值----- **/
    border-style: solid;

    /** -----两个值----- **/
    border-style: solid dotted;

    /** -----三个值----- **/
    border-style: solid dotted dashed;

    /** -----四个值----- **/
    border-style: solid dotted dashed inset;

```
+ color 和 width 具有和style一样的使用方法

### 边框取值

+ none          无边框
+ hidden        与none相同，但是用于表时除外，用来解决边框冲突
+ dotted        点状边框
+ dashed        虚线边框
+ solid         实线边框
+ double        双线，双线的宽度等于border-width

+ groove        3d凹糟边框，取决于边框的颜色
+ ridge         3d垄状边框，取决于边框的颜色
+ inset         3d inset边框，取决于边框的颜色
+ outset        3d outset边框，取决于边框的颜色

+ inherit       从父元素继承边框样式，部分浏览器不支持


## css3中的属性


### border-color（目前还没有成为规范）

可以给边框定义多个颜色，不过需要将border-color拆分成四个边框，如：

```
    border-top-colors: XX XX XX XX;
    border-right-colors: XX XX XX XX;
    border-bottom-colors: XX XX XX XX;
    border-left-colors: XX XX XX XX;

```

需要添加浏览器前缀，-moz-,-o-,-khtml-,-ms-

`` 注意：在写demo的过程中，发现浏览器中没有任何效果。一查资料发现已经废弃了，所以尽量避免使用 ``

### border-image

+ 默认取值： ``none`` 表示边框没有背景图片

+ 取值形式： border-image: border-image-source(图片地址) border-image-slice(切割规则) border-image-width(边框图片的宽度) border-image-repeat(边框背景图片的排列方式);
    - border-image-source: url(图片地址)
    - border-image-slice:  (数值|百分比){1,4}  根据取值依次按上右下左的顺序画出线条，形成一个九宫格
    - border-image-width: 设置边框背景图片的大小
    - border-image-repeat: (stretch | repeat | round ){1,2} 分别表示`` 水平``和``垂直``方向

+ 兼容写法

```
    -moz-border-image: xx;
    -o-border-image: xx;
    -ms-border-image: xx;
    border-image: xx;

```

### border-radius 

+ 默认： none 表示没有圆角
+ 取值： border-radius: (元素圆角水平方向半径){1,4}/(元素圆角垂直方向半径){0,4}; 如果没有'/'，那就水平和垂直方向上的值一样,取值依然遵守顺时针方向。
+ 注意（没有'/'的情况）：
    - 1个值： 四个角一样
    - 2个值： 第1个值=左上=右下 ； 第2个值=右上=左下
    - 3个值： 第1个值 = 左上 ； 第2个值 = 右上 = 左下 ； 第三个值 = 右下
    - 4个值： 第1个值 = 左上 ； 第2个值 = 右上 ； 第三个值 = 右下 ； 第四个值 = 左下
+ 特殊使用：当 border-radius的半径 ``<=`` 元素边框厚度 时，内部是``直角效果``
+ 部分老版本浏览器中依然需要``加浏览器前缀``
+ 派生的``子属性``(在不同浏览器中会有差异，导致需要罗列一堆代码，所以还不如使用border-radius的标准语法)： 

```
    -moz-border-radius-topleft: xx;
    -webkit-border-top-left-radius: xx;
    border-top-left-radius: xx;

    注意：
    当使用子属性的时候，水平垂直两个方向上的取值不需要加'/',加了反而会出错
    -> border-top-left-radius: 10px 25px; 10px代表水平方向，25px代表垂直方向

```

### 盒子阴影 box-shadow

+ 简介： box-shaow 属性可以使用一个或者多个投影，定义多个投影时需要使用逗号分开
+ 默认值： box-shaow: none;
+ 语法：box-shadow: inset(阴影类型) x-offset(水平偏移量) y-offset(垂直偏移量) blur-radius(模糊半径，为0时不模糊，值越大越模糊) spread-radius(阴影扩展半径,取值可正可负) color(阴影颜色);













