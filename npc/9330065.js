// var weapon = [1302081, 1312037, 1322060, 1332073, 1332074, 1372044, 1382057, 1402046, 1412033,
//  1422037,1052155,1052156,1052157,1052158,1052159,1072355,1072356,1072357,1072358,1072359,1082234,1082235,1082236,1082237,1082238,1102172,1002776,1002777,1002778,1002779,1002780,1032031,1122012,1092057,1092058,1092059];
var weapon = [1052155,1052156,1052157,1052158,1052159,1072355,1072356,1072357,1072358,1072359,1082234,1082235,1082236,1082237,1082238,1102172,1002776,1002777,1002778,1002779,1002780,1032031,1122012];
var req = [
    [4000313, 150],
    [4000448, 50],
    [4000453, 50],
    [4000458, 50],
    [4000443, 50],
    [4032226, 50]
];
var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg += "\r\n#d需要:#b ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##t" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#d哈哈，所有的#r永恒装备#k都在我这里，属性为#r攻击力50，魔力80#k，看你够不够材料兑换了！\r\n\r\n必须亲自找到我才能兑换装备哦，我在#r童话村#k！\r\n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b你身上没有#r足够的材料#k，继续收集材料去吧！");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b是否要兑换武器#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        // if (sels <= 10) {
        //     cm.gainItem(weapon[sels]);
        // } else {
        //     cm.gainItem(weapon[sels], 0,0,0,0,0,0,50,80,0,0,0,0,0,0);
        // }
        cm.gainItem(weapon[sels], 0,0,0,0,0,0,50,80,0,0,0,0,0,0);
        // weapon[sels] == (1092058 || 1092059) ? cm.gainItem(weapon[seles]) : cm.gainItem(weapon[sels], 0,0,0,0,0,0,50,80,0,0,0,0,0,0)
        // if (weapon[sels] == 1092058 || 1092059) {
        //     cm.gainItem(weapon[sels], 1)
        //     cm.gainItem(4000443, 1)
        // } else {
        //     cm.gainItem(weapon[sels], 0,0,0,0,0,0,50,80,0,0,0,0,0,0)
        //     cm.gainItem(4000443, 2)
        // }
        // 问题：这里的逻辑似乎并没有按预料的来，无论选择盾牌还是其他装备，给的都是普通属性的装备，而且并没有给作为测试用的4000443道具1个或2个
        cm.sendNext("#b已经兑换了装备 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}