// var status = -1;

// function action(mode, type, selection) {
//     if (mode == 1) {
//         status++;
//     } else {
//         cm.sendNext("噢噢~ 你还想待在这里的话，我随时都在哦 >_^");
//         cm.safeDispose();
//     }

//     if (status == 0) {
//         cm.sendYesNo("嗨~~你在这里没事做了吗? 你想要现在回去 #b自由市场#k? 我随时都能送你回去。你想要现在回去吗？");
//     } else if (status == 1) {
//         cm.warp(910000000);
//         cm.dispose();
//     }
// }
function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.sendNext("噢噢~ 你还想待在这里的话，我随时都在哦 >_^");
        cm.safeDispose();
    }
    if (status == 0) {
        cm.sendSimple ("嗨~~你在这里没事做了吗? 你想要现在回去 #b圣诞组队室#k 或 #b射手村#k? 我随时都能送你回去。你想要现在回去吗？\r\n#L0##b返回：射手村 #k#l\r\n#L1##b圣诞组队室#k#l");
    } else if ( selection == 0) {
        cm.warp(100000000,0)
        cm.dispose()
    } else if (selection == 1) {
        cm.warp(209080100)
        cm.dispose();
        }
}
