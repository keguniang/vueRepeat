# mall

# 创建项目
1. 鼠标新建 online mall 文件夹
2. 切换到online mall终端，`npm i -g @vue/cli`,之后可以使用vue 命令
3. 创建项目  `vue create mall`
4. 安装 vuex 和 vue-router,项目中会多出两个文件夹，router.js 和 store.js
5. 把app.vue 中的内容清一下，只写一个123,切换到mall文件夹下，`npm run serve` 运行项目，浏览器输出123，至此，项目搭建成功。

#开始项目
1. 要用到基于vue.js 的移动端组件库 mint-ui，所以先安装 `npm i mint-ui -S` -S == --save
2. 在 main.js 中按需引入mint-ui中的组件，再在vue中进行注册 
```
import {Header} from 'mint-ui'
Vue.component(Header.name,Header);
```
3. 在App.vue 中引用mint-ui的组件
`<mt-header fixed title='固定在顶部'></mt-header>`
4. 上述是vue引入mint-ui的写法，但是vue-cli3 引入mint-ui略有不同

# vue-cli3.x之mint-ui按需引入
[vue-cli3.x之mint-ui按需引入](https://www.jianshu.com/p/3e68f828a135)
1. 按需引入需要借助插件 **babel-plugin-component**
2. 安装babel-plugin-component  `npm i babel-plugin-component -D`
3. 修改babel.config.js
```
module.exports = {
  presets: ["@vue/app"],
  plugins:[
      [
        "component",
        {
          "libraryName": "mint-ui",
          "style": true
        }
      ]
  ]
};
```
4. 此时发现文字被覆盖，检查元素发现，标题的样式中有 `position:fixed`，所以是标题脱离文档流造成的,所以在最外层加一个`paddingTop:40px`。这里为什么是40px? 是用检查看出来的。

# 导入MUI
1. 目的：制作tab bar
2. 直接复制mui 的相关代码，但是效果没有出来
3. 是因为还没有在main.js 中导入mui 的样式
4. 在main.js 中   ` import './lib/mui/css/mui.css'`就可看到效果

# 把代码托管到git仓储上
具体操作看 onenote

