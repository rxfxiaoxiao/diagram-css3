## 线性渐变

#### 语法规则

background-image: linear-gradient(渐变方向(方位名词|角度), 起始颜色1 位置百分比1(可选), ....终点颜色N 位置百分比N(可选))

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

