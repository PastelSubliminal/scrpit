function start() {
	if ((cm.getQuestStatus(4103) == 1 && cm.haveItem(4031289 ,1)) || cm.getQuestStatus(8510) == 2) {
		cm.warp(701010321);
		cm.dispose();
		} else if (cm.getBossLog('wugong') > 5){
			cm.sendOk("���ڻ�������ս������򼣬���������ս5��")
		} else {
		cm.sendOk("��û�����ũ��İ������񣬻���û�о��촦����֤���飡");
		cm.dispose();
	}
}