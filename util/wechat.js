const { MagicJS } = require('./magicJs.js');
const scriptName = '什么值得买签到'
let magicJS = MagicJS(scriptName, "INFO");

function getTime() {
    const now = new Date();
    return '签到时间：' + now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日' + now.getHours() + '时' + now.getMinutes() + '分';
}

function getPushBody(title, subTile, content, params) {
    desc = '<div class=\"gray\">' + getTime() + '</div><div class=\"normal\">' + subTile == '' ? '' : (subTile + '\n') + '</div><div class=\"highlight\">' + content + '</div>';
    return JSON.stringify({
        "chatid": "CHATID",
        "msgtype": "textcard",
        "touser": params.toUser,
        "agentid": params.agentId,
        "textcard": {
            "title": title,
            "description": desc,
            "url": "https://www.smzdm.com/",
            "btntxt": "更多"
        },
        "safe": 0
    })
}

function sendMsg(title, subTile, content, params) {
    console.log('params: ' + params.corpid + params.corpsecret)
    let accesTokenOption = {
        url: `https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${params.corpid}&corpsecret=${params.corpsecret}`,
    }
    magicJS.get(accesTokenOption, (err, resp, data) => {
        try {
            if (JSON.parse(data).errcode !== 0) {
                errmsg = JSON.parse(data).errmsg
                magicJS.logWarning('获取企业微信推送access_token异常' + errmsg);
                magicJS.notify(errmsg);
            }
            push(JSON.parse(data).access_token, getPushBody(title, subTile, content, params))
        } catch (err) {
            magicJS.logError(`请求access_token出现异常：${err}`);
        }
    })
}

function push(access_token, b) {
    let pushOption = {
        url: `https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=${access_token}`,
        header: {
            'Content-Type': 'application/json'
        },
        body: b
    }
    magicJS.post(pushOption, (err, resp, data) => {
        if (JSON.parse(data).errcode == 0) {
            magicJS.notify('发送消息成功！', '', data)
        }
    })
}
module.exports = { sendMsg }