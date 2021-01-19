/*
 * @Descripttion: 指令逻辑实现
 * @Author: zhangkai14@corp.netease.com
 * @Date: 2021-01-19 11:04:48
 * @LastEditors: zhangkai14@corp.netease.com
 * @LastEditTime: 2021-01-19 14:52:24
 */
const path = require('path');
const chalk = require('chalk');
const memFs = require('mem-fs');
const memFsEditor = require('mem-fs-editor');
const fse = require('fs-extra');
const shelljs = require('shelljs');

const initCommand = require('./command');
const initSetting = require('./setting');

class Creator {
    constructor() {
        const store = memFs.create();
        this._mfs = memFsEditor.create(store);
        this._setting = {
            projectName: '',
            version: '1.0.0',
            description: '',
            authorName: '',
            authorEmail: '',
            license: '',
            repositoryType: '',
            repositoryUrl: ''
        };
    }
    create() {
        console.log(
            chalk.green.bold(`${chalk.blue('♫ ♫♬♪♫ ')}std-ide-cli${chalk.blue(' ♫ ♫♬♪♫ ')}`)
        );
        // 初始化指令
        initCommand();
        console.log(chalk.yellow(`Follow the prompts to complete the project configuration.`));
        // 初始化配置参数
        initSetting().then((setting) => {
            this._setting = {
                ...this._setting,
                ...setting
            };
            console.log(chalk.green('$$$$$$$$$$ project setting $$$$$$$$$$$$'));
            console.log(this._setting);
            console.log(chalk.green('$$$$$$$$$$ project setting $$$$$$$$$$$$'));
        });
    }
}

module.exports = Creator;
