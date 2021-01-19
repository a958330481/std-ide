/*
 * @Descripttion: 获取远程仓库模板
 * @Author: zhangkai14@corp.netease.com
 * @Date: 2021-01-19 16:29:06
 * @LastEditors: zhangkai14@corp.netease.com
 * @LastEditTime: 2021-01-19 20:06:15
 */

const download = require('download-git-repo');
const ora = require('ora');
const { oraFactory } = require('./utils');

/**
 * 获取远程仓库模板
 * @param {*} repository 远程仓库地址
 */
const downloadTemplate = ({ repository, name }) => {
    const spinner = oraFactory('正在从远程仓库获取模板...');

    return new Promise((resolve, reject) => {
        download(`direct:${repository}`, name, { clone: true }, function (err) {
            if (!err) {
                // 模板获取成功
                spinner.succeed('模板获取成功');
                resolve();
            } else {
                // 模板获取失败
                spinner.fail(`模板获取失败:${JSON.stringify(err)}`);
                reject();
            }
        });
    });
};

module.exports = downloadTemplate;
