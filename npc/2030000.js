/**
	Jeff - El Nath : El Nath : Ice Valley II (211040200)
**/

var status = 0;

function start() {
    if (cm.haveItem(4031450)) {
	cm.warp(921100100, 0);
	cm.dispose();
    } else {
	status = -1;
	action(1, 0, 0);
    }
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0 && cm.getPlayerStat("LVL") >= 40) {
	cm.sendNext("即使你的等级很高，也很难真正去那里，但是如果你改变主意，请找我。毕竟我的工作就是保护这个地方。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("你好像要继续往深处走嘛...你可要考虑清楚哦。据说深处有很多很可怕的怪物，曾经有数十位勇士闯了进去，但没有一个人回来......从此再也没有人敢进去了。不管你准备多么充分，千万不要贸然行动啊。");
    } else if (status == 1) {
	if (cm.getPlayerStat("LVL") >= 50) {
	    cm.sendYesNo("劝你还是打消这个念头吧，我不想再看到有人...你执意要进去？好吧，让我看看你的资质。嗯~似乎还不错，你确定要进入吗？");
	} else {
	    cm.sendPrev("你的等级好像不够。");
	}
    } else if (status == 2) {
	if (cm.getPlayerStat("LVL") >= 40) {
	    cm.warp(211040300, 5);
	}
	cm.dispose();
    }
}