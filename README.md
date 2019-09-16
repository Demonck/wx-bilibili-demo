# 微信小程序-bilibili-demo
## 创建项目，配置github
https://www.cnblogs.com/zeo-to-one/p/8367801.html
1. github创建项目仓库，获取仓库shh地址
2. 初始化git `git init`
3. 在项目中创建`README.md`文件
4. 链接远程仓库 `git remote add origin 地址`
5. 查看工作目录的状态 `git status`
6. 将所以文件添加到暂存区 `git add ./`
7. `git commit -m "提交操作信息"`提交更改,添加备注信息(此时将暂存区的信息提交到本地仓库)
8. `git push origin master`将本地仓库的文件push到远程仓库(若 push 不成功，可加 -f 进行强推操作)

## 创建顶部组件 [参考](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
1. 创建自定义组件文件夹
2. 创建自定义组件
3. 使用自定义组件

```
{
  "usingComponents": {
    "component-tag-name": "path/to/the/custom/component"
  }
}
```
```
<view>
  <!-- 以下是对一个自定义组件的引用 -->
  <component-tag-name inner-text="Some text"></component-tag-name>
</view>
```


## 创建导航滚动视频类别
### 使用easy-mock构建数据源
#### 接口地址

公共路径：https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili

https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili

https://www.easy-mock.com/mock/5d590978d3185331448bb542/bilibili

| 接口名称   | 接口路径         | 备注             |
| ---------- | ---------------- | ---------------- |
| 首页导航   | /navList         |                  |
| 首页轮播图 | /swiperList      |                  |
| 视频列表   | /videosList      |                  |
| 视频详情   | /videoDetail?id  | 需要带上视频的id |
| 推荐视频   | /othersList?id   | 需要带上视频的id |
| 评论列表   | /commentsList?id | 需要带上视频的id |
### 使用Postman测试api接口
### 获取导航视频类别api数据
1. 使用wx.request发起 HTTPS 网络请求
    https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
2. 使用scroll-view创建可滚动视图区域
    https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html
3. 设置基本样式
4. 绑定点击事件，通过data传值，使点击的添加点击样式
    https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html

## 创建轮播图
### 使用Postman测试api接口
### 通过api获取轮播图数据
### 创建轮播图样式
