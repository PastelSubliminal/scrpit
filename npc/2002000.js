// var status = -1;

// function action(mode, type, selection) {
//     if (mode == 1) {
//         status++;
//     } else {
//         cm.sendNext("����~ �㻹���������Ļ�������ʱ����Ŷ >_^");
//         cm.safeDispose();
//     }

//     if (status == 0) {
//         cm.sendYesNo("��~~��������û��������? ����Ҫ���ڻ�ȥ #b�����г�#k? ����ʱ���������ȥ������Ҫ���ڻ�ȥ��");
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
        cm.sendNext("����~ �㻹���������Ļ�������ʱ����Ŷ >_^");
        cm.safeDispose();
    }
    if (status == 0) {
        cm.sendSimple ("��~~��������û��������? ����Ҫ���ڻ�ȥ #bʥ�������#k �� #b���ִ�#k? ����ʱ���������ȥ������Ҫ���ڻ�ȥ��\r\n#L0##b���أ����ִ� #k#l\r\n#L1##bʥ�������#k#l");
    } else if ( selection == 0) {
        cm.warp(100000000,0)
        cm.dispose()
    } else if (selection == 1) {
        cm.warp(209080100)
        cm.dispose();
        }
}
