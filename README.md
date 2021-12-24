## Records

1. antd换肤[https://www.cnblogs.com/jkr666666/p/12885445.html]

antd-theme-generator
webpack-antd-theme-generator-plugin 

2. typescript使用 react-loadable，需要引入`yarn add @types/react-loadable -S`


**模块化**
**组件化**
**工程化**

[![NPM version](https://img.shields.io/npm/v/litecase-design.svg?style=flat)](https://www.npmjs.com/package/litecase-design)

<img src="https://img.shields.io/badge/litecase--pro-1.1.0-brightgreen" />

## Questions

1. React.StrictMode是什么

2. 如何在项目中使用immutable-js 或者 immerjs(mobx作者开发的一个库), 以及应用了这几个库之后，还有必要用loadsh 后者 underscore

```sh
    # immutable 持久化数据接口的实现 immutable-js与immerjs
```

3. 函数柯里化

4. graphQL

5. 如何模块化引入less，并通过访问对象属性的方式使用类名, 如何配置less-loader, style-loader, css-loader?

```jsx
    import styles from './index.less'

    console.log('styles', styles.login)
```
6. get search update reset create

7. URL中不应该出现动词

8. 接口请求
```sh
    # 驼峰命名法(serverAddress)，蛇形命名法(server_address)，脊柱命名法(server-address)

    # /orgz/members

    http(s): //server.com /app-name /{version} /{domain} /{rest-convention}

    GET /api/users?keyword=libinm&sort=classId

    GET /api/users?gender=1

    GET /api/libraries/123/books?keyword=game&sort=price&limit=10&offset=0

    DELETE /api/users/123


    # 规则1：URI结尾不应包含（/）
    # 规则2：正斜杠分隔符（/）必须用来指示层级关系
    # 规则3：应使用连字符（ - ）来提高URI的可读性
    # 规则4：不得在URI中使用下划线（_）
    # 规则5：URI路径中全都使用小写字母


    参考文章: 
    https://blog.csdn.net/qq_35075909/article/details/91522242?spm=1001.2101.3001.6650.5&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-5.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-5.no_search_link

    https://blog.csdn.net/belalds/article/details/80060296?spm=1001.2101.3001.6650.9&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-9.fixedcolumn&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-9.fixedcolumn
    
```

9. 不使用useRoutes()
```jsx
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'

import { Home, NotFound, SignIn, SignUp } from './views'

<Router>
    <Routes>
    <Route path="home" element={<App />} />
    <Route path="member" element={<UserLayout />}>
        <Route path="login" element={<SignIn />} />
        <Route path="reg" element={<SignUp />} />
    </Route>
    </Routes>
</Router>
```
