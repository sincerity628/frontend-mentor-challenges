### frontend-mentor-challenges

The real-life workflow challenges from: [Frontend Mentor Challenges](https://www.frontendmentor.io/challenges)

---
online preview: [link here](https://frontend-mentor-challenges-seven.now.sh/)

一些问题：
1. 关于首页图片```img```下部的间隙问题解决方案：[CSS 解决img底部空白间隙](https://www.jianshu.com/p/e7373c2bbef1)

2. 当输入框具有特殊样式，需要清空placeholder内的值（#3）：

scss:
```scss
input {
  border-color: red;

  &::placeholder {
    color: transparent;
  }
}
```
