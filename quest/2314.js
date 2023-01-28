/*
			Resonance
	NPC Name: 	Minister of Home Affairs
	Map(s): 	Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  ̽��Ģ��ɭ��(1)
*/

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendNext("不要辜负蘑菇王国的信任");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendYesNo("为了营救公主，你必须先进入蘑菇森林。企鹅国王设置了一道强大的屏障，禁止任何人进入城堡。请为我们调查此事。");
    } else if (status == 1) {
        qm.sendNext("你会在蘑菇森林里遇到阻碍，朝你现在的东边走。请小心。我听说这个地区到处都是可怕的的怪物。");
    } else if (status == 2) {
        //qm.forceStartQuest();
        //qm.forceStartQuest(2314,"1");
        qm.gainExp(8300);
        qm.sendOk("我明白了，所以这确实不是一个一般的任务。干得好，如果没有你的帮助，我们根本不知道该怎么办");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendOk("I see that you have thoroughly investigated the barrier at the Mushroom Forest. What was it like?");
    } else if (status == 1) {
        qm.gainExp(8300);
        qm.sendOk("I see, so it was indeed not a regular barrier by any means. Great work there. If not for you help, we wouldn't have had a clue as to what that was all about.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}