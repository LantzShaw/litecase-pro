/**
 * 此文件好像不能换成.ts后缀的文件
 */

const CracoAntDesignPlugin = require('craco-antd')

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
  ],
}
