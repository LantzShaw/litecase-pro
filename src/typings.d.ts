/**
 * TS 无法识别非代码文件(js可以)
 * .d.ts是typescript declaration file的简称
 */

// declare module '*.svg' {
//     interface Svg {
//       content: string;
//       id: string;
//       viewBox: string;
//       node: any;
//     }
//     const svg: Svg;
//     export default svg;
//   }

//   declare module '*.png' {
//     const png: string;
//     export default png;
//   }

//   declare module '*.mp3' {
//     const mp3: string;
//     export default mp3;
//   }

//   declare module '*.gif' {
//     const png: string;
//     export default png;
//   }

// ****************************** 简写方式 ****************************** //
declare module 'slash2'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module 'omit.js'
declare module 'numeral'
declare module '@antv/data-set'
declare module 'mockjs'
declare module 'react-fittext'
declare module 'bizcharts-plugin-slider'
declare type Recordable<T = any> = Record<string, T>

interface Window {
  less: any
}

// declare module '*.less' {
//   const classes: { [key: string]: string }
//   export default classes
// }
