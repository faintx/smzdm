# SMZDM Web端和App端签到脚本

---
<p style="text-align: center">
    <img src="https://img.shields.io/badge/create-2021.04.20-brightgreen" alt="2021.06.23"/>
    <img src="https://img.shields.io/badge/nodejs-15.4.0-red" alt="nodejs-15.4.0"/>
    <img src="https://img.shields.io/badge/github%20-workflow-orange" alt="github action"/>
    <img src="https://img.shields.io/badge/License-GPL-yellow" alt="GPL"/>
</p>


## 特别声明
<b>此脚本只用于学习、测试使用，请勿将此项目的任何内容用于商业或非法目的！本人概不负责！</b>

## 特别感谢
- <b>@blackmatrix7</b>
- <b>@wangfei021325</b>
- <b>@chavyleung</b>

### 推送参数配置

Fork [此项目](https://github.com/xiaokexiang/smzdm) ，并添加如下`Secret`到<b>`Settings -> Secrets`</b>中：

|    参数     |                             作用                             |
| :---------: | :----------------------------------------------------------: |
|   CORP_ID   | <a href='https://work.weixin.qq.com/wework_admin/frame#profile'>我的企业ID</a> |
| CORP_SECRET |                  上步创建的应用详情界面可查                  |
|   TO_USER   |         通讯录界面可查（可为`@all`全部用户都会收到）         |
|  AGENT_ID   |                  上步创建的应用详情界面可查                  |
|  COOKIE   |                  访问<a href="https://www.smzdm.com/">SMZDM</a>复制cookie                  |
