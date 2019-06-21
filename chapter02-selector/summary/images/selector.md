## css3选择器的分类

+ 基本选择器
+ 层次选择器 
+ 伪类选择器
    - 动态伪类选择器
    - 目标伪类选择器
    - 语言伪类选择器
    - UI元素状态伪类选择器
    - 结构伪类选择器
    - 否定伪类选择器
+ 伪元素
+ 属性选择器


## 基本选择器(兼容程度良好)

+ 通配符选择器（*）
+ 元素选择器（E）
+ id选择器 （#id）
+ 类选择器 （.class）
+ 群组选择器 (.slector1,.selectorN)

## 层次选择器(兼容程度良好，后面三个需要在IE7及以上版本支持)

+ 后代选择器（E F）
+ 子选择器（E>F）
+ 相邻兄弟选择器(E+F) E和F是同辈元素，并且相邻，F元素在E元素后面
+ 通用兄弟选择器(E~F) ``css3 新增属性`` E和F是同辈元素并且F元素在E元素后面，E~F将选中E元素后面的所有F元素

## 伪类选择器

### 动态伪类选择器

遵守"爱恨原则" LoVe/HAte --> ``link-visited-hover-active``

+ E:link    超链未被访问过
+ E:visited 超链已被访问过
+ E:active  匹配元素被激活
+ E:hover   鼠标停留在元素E上
+ E:focus   匹配元素获得焦点

### 目标伪类选择器

+ :target 用来定义网页中点击锚点页面滚动到目标元素的样式，类似于"//www.xx.com/index.html#news" ，定义的就是点击锚点，页面滚动到news模块时的样式，``IE9及以上版本支持``

例子：

```
    html:
    <div class="content">
        <a href="#news">新闻要点</a>
        <p>白日依山尽，黄河入海流</p>
        <p>欲穷千里目，更上一层楼</p>
        <div id="news" class="news">
            <ul>
                <li>某小区惊现大蟒蛇。。。。。</li>
                <li>城市化建设</li>
                <li>某三好青年</li>
                <li>连续降雨</li>
            </ul>
        </div>
    </div>

    css:
    .news ul li{
        color: orange;
    }
    .content :target ul li{
        color: red;
    }

    运行结果为：原本li元素中的文字为橘黄色，当点击了新闻要点之后（页面链接带上了#news）,文字变成了红色

```

### 语言伪类选择器

+ :lang(语言) 适用于``多语言``网站中针对不同的语言设置不同的页面风格

+ 为文档指定语言的两种方式：
    - html5中，可以直接设置，<html lang="en-US">
    - 手工指定lang属性。如 <body lang="fr">

### UI元素状态伪类选择器，IE9及以上才支持

+ E:checked 表单元素选中状态
+ E:enabled 表单元素启用状态
+ E:disabled 表单元素禁用状态

### 结构伪类选择器（除了第一个，其他都是css3属性，所有的都是IE9及以上支持）

#### 分类

+ E:first-child           作为父元素的第一个子元素E
+ E:last-child            作为父元素的最后一个子元素E
+ E:root                  E元素所在文档的更元素，在html中根元素始终是html
+ E F:nth-child(n)        选择父元素E的第n个子元素F，n起始值为1
+ E F:nth-last-child(n)   选择元素E的倒数第n个子元素F
+ E F:nth-of-type(n)      父元素内指定类型(``类型为E``)的第n个E元素
+ E:nth-last-of-type(n)   父元素内指定类型(``类型为E``)的倒数第n个E元素
+ E:first-of-type         父元素内指定类型(``类型为E``)第一个E元素
+ E:last-of-type          父元素内指定类型(``类型为E``)的最后一个E元素
+ E:only-child            父元素内只包含一个子元素，且该子元素匹配E
+ E:only-of-type          父元素内只包含一个同类型的子元素，且该子元素匹配E元素
+ E:empty                 选择没有子元素的元素，且该元素也不包含任何文本节点

#### 注意参数：

+ 括号内是单个``n``，则n是``大于0的正整数``，
+ 括号内如果是``表达式``，则n从``0``开始计算
+ 括号内如果是``odd``，选中的是``奇数``
+ 括号内如果是``even``，选中的则是``偶数``


#### ``E F:nth-child(n)`` 和  ``E F:nth-last-child(n)`` 区别

+ E F:nth-child(n) 从第一个元素开始计算
+ E F:nth-last-child(n) 从最后一个元素开始计算
+ E F:nth-child(odd) 等用于 E F:nth-last-child(even)
+ E F:nth-child(even) 等同于 E F:nth-last-child(odd)


#### E F:nth-child(n)和E F:nth-of-type(n) 的区别

+ E F:nth-child(n) 查找的是E元素下的第n个子元素，刚好第n个子元素是F
+ E F:nth-of-type(n) 查找的是E元素下的第n个F元素
+ 举例:

``
html:
    <div class="wrap">
        <ul class="wrap-ul">
            <li>list1</li>
            <li>list2</li>
            <li>list3</li>
            <p>我是来破坏队形的，啊哈哈哈</p>
            <li>list4</li> <!--颜色为red-->
            <li>list5</li>
            <li>list6</li>
        </ul>
    </div> 

css:

 <style>
     /* 由于.wrap-ul的第四个元素为不是li，而是p元素，所以不起作用 */
    .wrap-ul li:nth-child(4) { 
        color: rebeccapurple;
    }
    .wrap-ul li:nth-of-type(4) {
        color: red;
    }
</style>    

```













