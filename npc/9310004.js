function start() {
	if ((cm.getQuestStatus(4103) == 1 && cm.haveItem(4031289 ,1)) || cm.getQuestStatus(8510) == 2) {
		cm.warp(701010321);
		cm.dispose();
		} else if (cm.getBossLog('wugong') > 5){
			cm.sendOk("现在还不能挑战大王蜈蚣，你今天已挑战5次")
		} else {
		cm.sendOk("你没有完成农民的拜托任务，或者没有警察处长的证明书！");
		cm.dispose();
	}
}