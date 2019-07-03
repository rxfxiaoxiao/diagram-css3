## 文本功能主要分为三类
+ 字体
+ 颜色
+ 文本

## 回顾文本功能

### 字体类型

+ font-family
+ font-style : normal/italic/oblique
+ font-weight : bormal/bold/bolder/lighter/纯数字（100-900）

底下这几个兼容性极不好，碰到再细看吧：

+ font-size-adjust 是否强制对文本使用同一尺寸,只有``火狐浏览器``中实现了
+ font-stretch ： 是否横向拉伸变形字体
+ font-variant 定义字体大小写

### 文本类型

+ text-align        文本水平对齐方式
+ line-height       文本行高
+ word-spacing      定义词与词之间的间距。（主要是定义``英文单词``之间的间距，中文里面貌似不生效）
+ letter-spacing    定义字符之间的间距。（英文中``字母的间距``，``中文一个字一个字``之间的间距）
+ vertical-align    定义文本垂直对齐方式
+ text-decoration   文本的修饰线
+ text-indent       文本首行缩进
+ text-transform    文本大小写 none/uppercase/lowercase/capitalize(首字母大写)
+ text-shaodow      文本阴影效果 
+ white-space       定义文字之间和文本之间的空白符间距 
+ direction         控制文本流入的方向 ltr/rtl/inherit

### 颜色属性 

+ color 


## text-shadow

1、格式：text-shadow:color x-offset y-offset blur-radius

2、参数说明：  
+ color: 阴影颜色
+ x-offset x轴位移
+ y-offset y轴位移
+ blur-radius 阴影模糊半径

3、可以设置多个阴影，并且每个阴影可以设置不同颜色，使用``逗号``将多个阴影进行分隔。

## 溢出文本属性

语法格式：``text-overflow: clip|ellipsis``

属性说明：
+ clip 不显示省略标记，只是简单裁剪
+ ellipsis 文本溢出时显示省略标记（...）

文本溢出时显示省略号，且超出的部分隐藏掉，方式如下：

```
    // 容器需要制定宽度

    white-space: nowrap;
    overflow: hidden;

    text-overflow: ellipsis

```

## word-wrap

语法格式： word-wrap: normal | break-word

属性值：
+ normal
+ break-word 将内容在边界内换行（不截断英文单词换行）

## word-break

属性值：
+ normal    默认
+ break-all 可以强行截断英文单词
+ keep-all  不允许(CJK)文字断开