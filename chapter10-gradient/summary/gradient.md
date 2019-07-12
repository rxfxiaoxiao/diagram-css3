## 线性渐变

#### 语法规则

background-image: linear-gradient(渐变方向(方位名词|角度), 起始颜色1 该颜色起始位置对应的百分比1(可选), ....终点颜色N 该颜色起始位置对应的百分比N(可选))


#### 取值解释

+ to top            下 -- > 上
+ to right          左 -- > 右
+ to bottom         上 -- > 下
+ to left           右 -- > 左
+ to top left       右下 -- > 左上
+ to top right      左下 -- > 右上
+ to bottom left    右上 -- > 左下
+ to bottom right   左上 -- > 右下
+ 0deg
+ 90deg
+ 180deg
+ ....

#### 示例

```css
.box1 {
    width: 300px;
    height: 40px;
    background-image: linear-gradient(to left , orange 0%, red 25%, purple 60%, green 100%);
}
.box2 {
    width: 300px;
    height: 40px;
    background-image: linear-gradient(45deg , orange 0%, red 25%, purple 60%, green 100%);
}
```

#### 兼容写法

```

```


## 径向渐变

简介： 径向渐变是圆形或椭圆形渐变

### 基本语法

radial-gradient(shape size at position, color1 百分比,....,colorN 百分比);

### 参数说明

+ position 渐变的圆心位置(坐标点的长度|百分比|方位名词)
    - length        用长度值指定径向圆心的横坐标和纵坐标，可以为负值
    - percentage
    - left
    - center
    - right
    - top
    - bottom
+ shape 渐变形状（可选参数）
    - circle    圆
    - ellipse   椭圆
+ size
    - closest-side      最近边
    - closest-corner    最近角
    - farthest-side     最远边
    - farthest-corner   最远角
    - length （横向和纵向的直径值，如果shape是circle，那么只需要定义一个直径值，定义两个值会出错）
+ color-stop 结束颜色 

### 示例：

```
.box {
    width: 300px;
    height: 100px;
    border: 1px solid #ccc;
    background-image: -webkit-radial-gradient(circle 50px 50px at top left, hsla(270, 20%, 20%,.7) 0%, hsla(60, 40%, 80%,.7) 50%, hsla(120, 40%, 80%,.7) 100%);
    background-image: radial-gradient(ellipse 50px 20px at top left, hsla(270, 20%, 20%,.7) 0%, red 50%, hsla(120, 40%, 80%,.7) 100%);
}
```

## 重复渐变

+ repeating-linear-gradient 重复线性渐变
+ repeating-radial-gradient 重复径向渐变