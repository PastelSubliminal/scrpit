var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.sendNext("����~ �㻹���������Ļ�������ʱ����Ŷ >_^");
        cm.safeDispose();
    }

    if (status == 0) {
        cm.sendYesNo("�ҿ�������ȥ #bʥ�������#k? ����Ҫ����ȥ��");
    } else if (status == 1) {
        cm.warp(209080100);
        cm.dispose();
    }
}
