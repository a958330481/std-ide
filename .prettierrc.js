/*
 * @Descripttion:.prettier rule
 * @Author: kevininsight@126.com
 * @Date: 2021-01-20 20:21:31
 * @LastEditors: kevininsight@126.com
 * @LastEditTime: 2021-01-20 20:32:52
 */
module.exports = {
    printWidth: 100,
    // tab缩进大小,默认为2
    tabWidth: 4,
    // 使用tab缩进，默认false
    useTabs: false,
    // 使用分号, 默认true
    semi: true,
    // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    singleQuote: true,
    // 行尾逗号,默认none,可选 none|es5|all
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    trailingComma: 'none',
    // 对象中的空格 默认true
    // true: { foo: bar }
    // false: {foo: bar}
    bracketSpacing: true,
    // JSX标签闭合位置 默认false
    // false: <div
    //          className=""
    //          style={{}}
    //       >
    // true: <div
    //          className=""
    //          style={{}} >
    jsxBracketSameLine: false,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    arrowParens: 'always'
};
