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
	cm.sendNext("��ʹ��ĵȼ��ܸߣ�Ҳ��������ȥ������������ı����⣬�����ҡ��Ͼ��ҵĹ������Ǳ�������ط���");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("�����Ҫ�����������...���Ҫ�������Ŷ����˵��кܶ�ܿ��µĹ����������ʮλ��ʿ���˽�ȥ����û��һ���˻���......�Ӵ���Ҳû���˸ҽ�ȥ�ˡ�������׼����ô��֣�ǧ��ҪóȻ�ж�����");
    } else if (status == 1) {
	if (cm.getPlayerStat("LVL") >= 50) {
	    cm.sendYesNo("Ȱ�㻹�Ǵ��������ͷ�ɣ��Ҳ����ٿ�������...��ִ��Ҫ��ȥ���ðɣ����ҿ���������ʡ���~�ƺ���������ȷ��Ҫ������");
	} else {
	    cm.sendPrev("��ĵȼ����񲻹���");
	}
    } else if (status == 2) {
	if (cm.getPlayerStat("LVL") >= 40) {
	    cm.warp(211040300, 5);
	}
	cm.dispose();
    }
}