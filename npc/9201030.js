var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.sendNext("噢噢~ 你还想待在这里的话，我随时都在哦 >_^");
        cm.safeDispose();
    }

    if (status == 0) {
        cm.sendYesNo("我可以送你去 #b圣诞组队室#k? 你想要现在去吗？");
    } else if (status == 1) {
        cm.warp(209080100);
        cm.dispose();
    }
}
