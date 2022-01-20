/**
 * 此文件好像不能换成.ts后缀的文件
 */

const path = require('path')
const CracoAntDesignPlugin = require('craco-antd')
// const CracoLessPlugin = require('craco-less')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        // less loader optoins
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#6877FF',
              '@border-radius-base': '4px',
            },
            javascriptEnabled: true,
            sourceMap: false,
          },
        },
        // 支持 css-modules
        cssLoaderOptions: {
          modules: {
            getLocalIdent: (context, localIdentName, localName, options) => {
              if (context.resourcePath.includes('node_modules')) {
                return localName
              }
              return getCSSModuleLocalIdent(context, localIdentName, localName, options)
            },
          },
        },
        // 这个是按需导入
        babelPluginImportOptions: {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        },
      },
    },

    // {
    //   plugin: CracoAntDesignPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         javascriptEnabled: true,
    //         sourceMap: false,
    //       },
    //     },

    //     cssLoaderOptions: {
    //       modules: {
    //         // 通过这个生成的 classname 结构如：ComponentName_className_hash:5
    //         getLocalIdent: (context, localIdentName, localName, options) => {
    //           if (context.resourcePath.includes('node_modules')) {
    //             return localName
    //           }
    //           return getCSSModuleLocalIdent(context, localIdentName, localName, options)
    //         },
    //       },
    //     },

    //     modifyLessRule: (lessRule, context) => {
    //       lessRule.test = lessModuleRegex
    //       lessRule.exclude = /node_modules|antd\.css/
    //       return lessRule
    //     },

    //     babelPluginImportOptions: {
    //       libraryName: 'antd',
    //       libraryDirectory: 'es',
    //       style: true,
    //     },
    //   },
    // },

    // {
    //   plugin: CracoAntDesignPlugin,
    //   options: {
    //     customizeTheme: {
    //       '@primary-color': '#6877FF',
    //       '@border-radius-base': '4px',
    //     },
    //   },
    // },
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     modifyLessRule: function (lessRule, _context) {
    //       lessRule.test = /\.(module)\.(less)$/
    //       lessRule.exclude = /node_modules/
    //       return lessRule
    //     },
    //     cssLoaderOptions: {
    //       modules: {
    //         localIdentName: '[name]__[local]--[hash:base64:5]',
    //       },
    //     },
    //     // lessLoaderOptions: {
    //     //   modules: {
    //     //     localIdentName: '[name]__[local]--[hash:base64:5]',
    //     //   },
    //     //   // lessOptions: {
    //     //   //   modifyVars: { '@primary-color': '#1DA57A' },
    //     //   //   javascriptEnabled: true,
    //     //   // },
    //     // },
    //   },
    // },

    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     // cssLoaderOptions: {
    //     //   modules: { localIdentName: '[local]_[hash:base64:5]' },
    //     // },
    //     // customizeTheme: {
    //     //   '@primary-color': '#6877FF',
    //     //   '@border-radius-base': '4px',
    //     // },
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         modifyVars: { '@primary-color': '#1DA57A' },
    //         javascriptEnabled: true,
    //       },
    //     },
    //   },

    //   modifyLessRule: (lessRule, context) => {
    //     lessRule.test = lessModuleRegex
    //     lessRule.exclude = /node_modules|antd\.css/
    //     // lessRule.modules = true

    //     return lessRule
    //   },

    //   // Passing an options object to configure the css-loaders
    //   cssLoaderOptions: {
    //     modules: { localIdentName: '[local]_[hash:base64:5]' },
    //   },
    // },

    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     // less loader options
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         modifyVars: { '@primary-color': '#1DA57A' },
    //         modules: { localIdentName: '[local]_[hash:base64:5]' },
    //         javascriptEnabled: true,
    //       },
    //     },

    //     // A callback function that receives two arguments: the webpack rule,
    //     // and the context. You must return an updated rule object.
    //     modifyLessRule: (lessRule, context) => {
    //       lessRule.test = lessModuleRegex
    //       lessRule.exclude = /node_modules|antd\.css/
    //       return lessRule
    //     },

    //     // Passing an options object to configure the css-loaders
    //     cssLoaderOptions: {
    //       modules: { localIdentName: '[local]_[hash:base64:5]' },
    //     },
    //   },
    // },

    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       module: true,
    //     },
    //   },
    // },
  ],
}

// 707EFF
// 1DA57A
// 6877FF
//  CSS Modules 模块化方案
// 可以使用插件配置css moudle less-loader sass-loader style-loader
// eg: craco-less  craco-sass-resources-loader
// https://github.com/gsoft-inc/craco

// react-css-modules已废弃 babel-plugin-react-css-modules

// CSS Modules 模块化方案 文章参考 由于craco的版本问题 无法使用css moudles
// https://blog.csdn.net/Loonger29/article/details/119346714
