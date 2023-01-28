importPackage(net.sf.odinms.client);
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";



	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n#e欢迎来到#r冒险岛每日任务专区.每个任务都可以完成.获取相对应的奖励，建议新人每日都做#l\r\n#b注：材料不够会被系统吞掉，也计入当天兑换次数，吞掉一律不赔，请注意#l\r\n";

		textz += cm.getBossLog('goldLeaf0') < 1 ? '#d#L0#收集#v4000008##b#z4000008##r 100 #d个可兑换#r#v4000313#10张\r\n' : '#d#L0#收集#v4000008##b#z4000008##r 100 #d个可兑换#r#v4000313#10张（已完成）\r\ && cm.canHold(4000313,19)n';
		textz += cm.getBossLog('goldLeaf1') < 1 ? "#d#L1#收集#v4000178##b#z4000178##r 100 #d个可兑换#r#v4000313#10张\r\n" : "#d#L1#收集#v4000178##b#z4000178##r 100 #d个可兑换#r#v4000313#10张（已完成）\r\n";
		textz += cm.getBossLog('goldLeaf2') < 1 ? "#d#L2#收集#v4000061##b#z4000061##r 100 #d个可兑换#r#v4000313#10张\r\n" : "#d#L2#收集#v4000061##b#z4000061##r 100 #d个可兑换#r#v4000313#10张（已完成）\r\n";
		textz += cm.getBossLog('goldLeaf3') < 1 ? "#d#L3#收集#v4000172##b#z4000172##r 100 #d个可兑换#r#v4000313#10张\r\n" : "#d#L3#收集#v4000172##b#z4000172##r 100 #d个可兑换#r#v4000313#10张（已完成）\r\n";
		textz += cm.getBossLog('goldLeaf4') < 1 ? "#d#L4#收集#v4000294##b#z4000294##r 100 #d个可兑#r#v4000313#10张\r\n" : "#d#L4#收集#v4000294##b#z4000294##r 100 #d个可兑#r#v4000313#10张（已完成）\r\n";
		textz += cm.getBossLog('goldLeaf5') < 1 ? "#d#L5#收集#v4000143##b#z4000143##r 100 #d个可兑#r#v4000313#10张\r\n" : "#d#L5#收集#v4000143##b#z4000143##r 100 #d个可兑#r#v4000313#10张（已完成）\r\n";
		textz += cm.getBossLog('goldLeaf6') < 1 ? "#d#L6#收集#v4000379##b#z4000379##r 100 #d个可兑#r#v4000313#10张\r\n" : "#d#L6#收集#v4000379##b#z4000379##r 100 #d个可兑#r#v4000313#10张（已完成）\r\n";
		textz += cm.getBossLog('goldLeaf7') < 1 ? "#d#L7#收集#v4000478##b#z4000478##r 100 #d个可兑#r#v4000313#10张\r\n" : "#d#L7#收集#v4000478##b#z4000478##r 100 #d个可兑#r#v4000313#10张(已完成)\r\n";
		textz += cm.getBossLog('goldLeaf8') < 1 ? "#d#L8#收集#v4000182##b#z4000182##r 100 #d个可兑#r#v4000313#10张\r\n" : "#d#L8#收集#v4000182##b#z4000182##r 100 #d个可兑#r#v4000313#10张（已完成）\r\n";
		textz += cm.getBossLog('goldLeaf50') < 1 ? "#d#L50#收集#v4000406##b#z4000406##r 100 #d个可兑#r#v4000313#50张\r\n" : "#d#L50#收集#v4000406##b#z4000406##r 100 #d个可兑#r#v4000313#50张（已完成）\r\n";
		textz += cm.getBossLog('goldLeaf51') < 1 ? "#d#L51#收集#v4000404##b#z4000404##r 100 #d个可兑#r#v4000313#50张\r\n" : "#d#L51#收集#v4000404##b#z4000404##r 100 #d个可兑#r#v4000313#50张（已完成）\r\n";
		textz += cm.getBossLog('goldPig101') < 1 ? "#d#L101#收集#v4000115##b#z4000115##r 100 #d个可兑换#r#v4032226#10只\r\n" : "#d#L101#收集#v4000115##b#z4000115##r 100 #d个可兑换#r#v4032226#10只（已完成）\r\n";
		textz += cm.getBossLog('goldPig102') < 1 ? "#d#L102#收集#v4000161##b#z4000161##r 100 #d个可兑换#r#v4032226#10只\r\n" : "#d#L102#收集#v4000161##b#z4000161##r 100 #d个可兑换#r#v4032226#10只（已完成）\r\n";
		textz += cm.getBossLog('goldPig103') < 1 ? "#d#L103#收集#v4000052##b#z4000052##r 100 #d个可兑换#r#v4032226#10只\r\n" : "#d#L103#收集#v4000052##b#z4000052##r 100 #d个可兑换#r#v4032226#10只（已完成）\r\n";
		textz += cm.getBossLog('goldPig104') < 1 ? "#d#L104#收集#v4000194##b#z4000194##r 100 #d个可兑换#r#v4032226#10只\r\n" : "#d#L104#收集#v4000194##b#z4000194##r 100 #d个可兑换#r#v4032226#10只（已完成）\r\n";
		textz += cm.getBossLog('goldPig105') < 1 ? "#d#L105#收集#v4000144##b#z4000144##r 100 #d个可兑换#r#v4032226#10只\r\n" : "#d#L105#收集#v4000144##b#z4000144##r 100 #d个可兑换#r#v4032226#10只（已完成）\r\n";
		textz += cm.getBossLog('goldPig106') < 1 ? "#d#L106#收集#v4000383##b#z4000383##r 100 #d个可兑换#r#v4032226#10只\r\n" : "#d#L106#收集#v4000383##b#z4000383##r 100 #d个可兑换#r#v4032226#10只（已完成）\r\n";
		textz += cm.getBossLog('goldPig107') < 1 ? "#d#L107#收集#v4000179##b#z4000179##r 100 #d个可兑换#r#v4032226#10只\r\n" : "#d#L107#收集#v4000179##b#z4000179##r 100 #d个可兑换#r#v4032226#10只（已完成）\r\n";
		textz += cm.getBossLog('goldPig108') < 1 ? "#d#L108#收集#v4000432##b#z4000432##r 100 #d个可兑换#r#v4032226#10只\r\n" : "#d#L108#收集#v4000432##b#z4000432##r 100 #d个可兑换#r#v4032226#10只（已完成）\r\n";
		//textz += "#d#L8#收集#v4001085##b#z4001085##r 1 #d个\r\n  可兑换#r1000点#d卷#l\r\n";

		//textz += "#d#L9#收集#v4001084##b#z4001084##r 1 #d个\r\n  可兑换#r1000点#d卷#l\r\n";

		//textz += "#d#L10#收集#v4001083##b#z4001083##r 1 #d个\r\n  可兑换#r2000点#d卷#l\r\n";
                cm.sendSimple (textz);  

			
	}else if (status == 1) {

		if (selection == 0) {
		if (cm.haveItem(4000008,100) && cm.getBossLog('goldLeaf0') < 1 && cm.canHold(4000313,19)) {
			cm.dispose();
			cm.sendOk("兑换成功#k");
			cm.dispose();
			cm.setBossLog('goldLeaf0');
			cm.gainItem(4000313,10);
			cm.gainExp( + 200000);
			cm.gainItem(4000008,-100);
			cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n20万经验");
			cm.dispose();
		} else 
			cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
			cm.dispose();
	}
	else if (status == 1) {

	if (selection == 1) {
	if (cm.haveItem(4000178,100) && cm.getBossLog('goldLeaf1') < 1 && cm.canHold(4000313,19)) {
		cm.dispose();
		cm.sendOk("兑换成功#k");
		cm.dispose();
		cm.setBossLog('goldLeaf1');
		cm.gainItem(4000313,10);
		cm.gainExp( + 600000);
		cm.gainItem(4000178,-100);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n60万经验");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
	    


}else if (selection == 2) {
	if (cm.haveItem(4000061,100) && cm.getBossLog('goldLeaf2') < 1 && cm.canHold(4000313,19)) {
		cm.gainItem(4000061,-100);
		cm.setBossLog('goldLeaf2');
		cm.gainItem(4000313,10);
                cm.gainExp( + 600000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n60万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
	    

}else if (selection == 3) {
	if (cm.haveItem(4000172,100) && cm.getBossLog('goldLeaf3') < 1 && cm.canHold(4000313,19)) {
		cm.gainItem(4000172,-100);
		cm.setBossLog('goldLeaf3');
		cm.gainItem(4000313,10);
                cm.gainExp( + 600000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n60万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 4){
	if (cm.haveItem(4000294,100) && cm.getBossLog('goldLeaf4') < 1 && cm.canHold(4000313,19)) {
		cm.gainItem(4000294,-100);
		cm.setBossLog('goldLeaf4');
		cm.gainItem(4000313,10);
                cm.gainExp( + 1000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n100万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
}else if (selection == 5){
	if (cm.haveItem(4000143,100) && cm.getBossLog('goldLeaf5') < 1 && cm.canHold(4000313,19)) {
		cm.gainItem(4000143,-100);
		cm.setBossLog('goldLeaf5');
		cm.gainItem(4000313,10);
                cm.gainExp( + 2000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n200万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();	
}else if (selection == 6){
	if (cm.haveItem(4000379,100) && cm.getBossLog('goldLeaf6') < 1 && cm.canHold(4000313,19)) {
		cm.gainItem(4000379,-100);
		cm.setBossLog('goldLeaf6');
		cm.gainItem(4000313,10);
                cm.gainExp( + 2000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n200万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
}else if (selection == 7){
	if (cm.haveItem(4000478,100) && cm.getBossLog('goldLeaf7') < 1 && cm.canHold(4000313,19)) {
		cm.gainItem(4000478,-100);
		cm.setBossLog('goldLeaf7');
		cm.gainItem(4000313,10);
                cm.gainExp( + 5000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n500万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();		
}else if (selection == 8){
	if (cm.haveItem(4000182,100) && cm.getBossLog('goldLeaf8') < 1 && cm.canHold(4000313,19)) {
		cm.gainItem(4000182,-100);
		cm.setBossLog('goldLeaf8');
		cm.gainItem(4000313,10);
                cm.gainExp( + 5000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n500万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();	
}else if (selection == 50){
	if (cm.haveItem(4000406,100) && cm.getBossLog('goldLeaf50') < 1 && cm.canHold(4000313,19)) {
		cm.gainItem(4000406,-100);
		cm.setBossLog('goldLeaf50');
		cm.gainItem(4000313,50);
				cm.gainExp( + 10000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n1000万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 51){
	if (cm.haveItem(4000404,100) && cm.getBossLog('goldLeaf51') < 1 && cm.canHold(4000313,19)) {
		cm.gainItem(4000404,-100);
		cm.setBossLog('goldLeaf51');
		cm.gainItem(4000313,50);
				cm.gainExp( + 10000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n1000万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
}
else if (selection == 101){
	if (cm.haveItem(4000115,100) && cm.getBossLog('goldPig101') < 1 && cm.canHold(4032226,10)) {
		cm.gainItem(4000115,-100);
		cm.setBossLog('goldPig101');
		cm.gainItem(4032226,10);
                cm.gainExp( + 300000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n30万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 102){
	if (cm.haveItem(4000161,100) && cm.getBossLog('goldPig102') < 1 && cm.canHold(4032226,10)) {
		cm.gainItem(4000161,-100);
		cm.setBossLog('goldPig102');
		cm.gainItem(4032226,10);
		cm.gainExp( + 300000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n30万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 103){
	if (cm.haveItem(4000052,100) && cm.getBossLog('goldPig103') < 1 && cm.canHold(4032226,10)) {
		cm.gainItem(4000052,-100);
		cm.setBossLog('goldPig103');
		cm.gainItem(4032226,10);
		cm.gainExp( + 1000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n100万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 104){
	if (cm.haveItem(4000194,100) && cm.getBossLog('goldPig104') < 1 && cm.canHold(4032226,10)) {
		cm.gainItem(4000194,-100);
		cm.setBossLog('goldPig104');
		cm.gainItem(4032226,10);
		cm.gainExp( + 1000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n100万经验");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
}else if (selection == 105){
	if (cm.haveItem(4000144,100) && cm.getBossLog('goldPig105') < 1 && cm.canHold(4032226,10)) {
		cm.gainItem(4000144,-100);
		cm.setBossLog('goldPig105');
		cm.gainItem(4032226,10);
		cm.gainExp( + 2000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n200万经验");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
}else if (selection == 106){
	if (cm.haveItem(4000383,100) && cm.getBossLog('goldPig106') < 1 && cm.canHold(4032226,10)) {
		cm.gainItem(4000383,-100);
		cm.setBossLog('goldPig106');
		cm.gainItem(4032226,10);
		cm.gainExp( + 2000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n200万经验");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
}else if (selection == 107){
	if (cm.haveItem(4000179,100) && cm.getBossLog('goldPig107') < 1 && cm.canHold(4032226,10)) {
		cm.gainItem(4000179,-100);
		cm.setBossLog('goldPig107');
		cm.gainItem(4032226,10);
		cm.gainExp( + 5000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n500万经验");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
}else if (selection == 108){
	if (cm.haveItem(4000432,100) && cm.getBossLog('goldPig108') < 1 && cm.canHold(4032226,10)) {
		cm.gainItem(4000432,-100);
		cm.setBossLog('goldPig108');
		cm.gainItem(4032226,10);
		cm.gainExp( + 10000000);
		cm.sendOk("任务完成,获得群主江浩额外赠送的\r\n1000万经验");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
		

}
// else if (selection == 10){
// 	if (cm.haveItem(4001085,1) && cm.getBossLog('goldLeaf10') < 1 && cm.canHold(4000313,19)) {
// 		cm.gainItem(4001085,-1);
// 		cm.setBossLog('goldLeaf10');
// 		cm.gainNX(1000);
// 		cm.sendOk("任务完成,获得以下奖励:\r\n1000点券");
// 		cm.dispose();
// 	} else 
// 		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
// 		cm.dispose();

// }else if (selection == 11){
// 	if (cm.haveItem(4001084,1) && cm.getBossLog('goldLeaf10') < 1 && cm.canHold(4000313,19)) {
// 		cm.gainItem(4001084,-1);
// 		cm.setBossLog('goldLeaf10');
// 		cm.gainNX(1000);
// 		cm.sendOk("任务完成,获得以下奖励:\r\n1000点券");
// 		cm.dispose();
// 	} else 
// 		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
// 		cm.dispose();

// }else if (selection == 12){
// 	if (cm.haveItem(4001083,1) && cm.getBossLog('goldLeaf11') < 1 && cm.canHold(4000313,19)) {
// 		cm.gainItem(4001083,-1);
// 		cm.setBossLog('goldLeaf11');
// 		cm.gainNX(2000);
// 		cm.sendOk("任务完成,获得以下奖励:\r\n2000点券");
// 		cm.dispose();
// 	} else 
// 		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
// 		cm.dispose();



// }else if (selection == 13){
// 	if (cm.haveItem(4001126,1000) && cm.getBossLog('goldLeaf14') < 1 && cm.canHold(4000313,19)) {
// 		cm.gainItem(4001126,-1000);
// 		cm.setBossLog('goldLeaf14');
// 		cm.gainNX(1000);
// 		cm.sendOk("任务完成,获得以下奖励:\r\n1000点券");
// 		cm.dispose();
// 	} else 
// 		cm.sendOk("请检查是否有足够的物品或背包有足够空间。\r\n#r(注:该任务每天只能完成一次)#k");
// 		cm.dispose();


// }
}
}
		}
	}
