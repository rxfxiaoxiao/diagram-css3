## 2D变形

### 2D变形函数

+ translate() 平移元素，接受css的标准度量单位
+ scale()     放大缩小元素，接受0~1之间的十进制
+ rotate()    旋转元素，接受角度值
+ skew()      让元素倾斜，接受角度值
+ matrix3d()函数 定义矩形变形

## 3D

### 3D变形函数

+ translateX() 指定3D位移在X轴的位移量
+ translateY() 指定3D位移在Y轴的位移量
+ translateZ() 指定3D位移在Z轴的位移量
+ translate3d() 移动元素，用来指定一个3D变形移动位移量

+ rotateX()
+ rotateY()
+ rotateZ()
+ rotate3d()

+ scaleX()
+ scaleY()
+ scaleZ()
+ scale3d()

+ perspective() 指定一个透视投影矩阵
+ matrix3d()    定义矩阵变形


## transform-origin 设置元素变形原点位置

### 取值

+ 下方的 ``x-offset|y-offset`` 表示的是百分比或者具体的长度值
+  带offset-keyword 表示的是 top|right|bottom|left|center

#### 只设置一个值的语法

+ x-offset
+ offset-keyword

注意： top = top center 

#### 设置两个值的语法

+ x-offset y-offset
+ y-offset x-offset-keyword
+ x-offset-keyword y-offset
+ x-offset-keyword y-offset-keyword
+ y-offset-keyword x-offset-keyword

#### 设置三个值的语法

+ x-offset y-offset z-offset
+ y-offset x-offset-keyword z-offset
+ x-offset-keyword y-offset z-offset
+ x-offset-keyword y-offset-keyword z-offset
+ y-offset-keyword x-offset-keyword z-offset

## transform-style 

+ 描述：3d空间的一个重要属性，指定嵌套元素如何在3D空间呈现
+ 取值：
    - flat          所有子元素在2D平面呈现
    - preserve-3d   所有子元素在3D空间呈现

## perspective 

+ 
+ 取值：
    - none或者不设置，没有3d空间
    - 取值越小3D效果越明显
    - 无穷大，或者值为0时与取值为none效果一样

## perspective-origin

+ 描述：用来决定perspective属性的源点角度
+ 取值形式： X轴的位置(百分比|长度|left|center|right） Y轴的位置(length|top|center|bottom)  

## backface-visibility
 
+ 描述： 决定元素旋转背面是否可见
+ 取值： 
    - visible 默认，反面可见
    - hidden 反面不可见
    