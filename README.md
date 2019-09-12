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


