## 背景的基本属性

+ background-color  背景颜色
+ background-image  背景图片
+ background-repeat 背景图片展示方式
+ background-attachment 背景图片是固定还是滚动 取值：scroll || fixed
+ background-position   背景图片位置

## css3 新增加的属性

###  1、background-origin: 指定绘制背景图片的起点位置

取值：
+ padding-box: 默认；决定background-position 起始位置从padding的外边缘开始显示背景图片
+ border-box: 从border的外边缘显示背景图片
+ content-box： 从content外边缘显示背景图片




### 2、background-clip: 指定背景图片的显示范围(裁切区域)

取值：
+ border-box 默认 
+ padding-box: 背景图片只能在padding的外边缘以内绘制
+ content-box: 背景图片只能在内容区域内绘制

注意事项：
+ ``低版本Gecko``（firefox 3.6及之前版本）``不支持content-box``，并且``用border、padding 来代替``标准语法中的``border-box、padding-box``



### 3、background-size: 指定背景图片的大小

### 4、background-break: 指定内联元素的背景图片进行平铺时的循环方式

