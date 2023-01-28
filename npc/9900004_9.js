var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t  #e#d欢迎领取#b永久店卡 \r\n\r\n 在线奖励依次为.特殊药水50个-超级药水50个-喇叭6个-枫叶100个-黄金枫叶15张-点券=2000点、点券=3000点.\r\n\r\n"
			text += "#L1##r领取永久雇佣商人！#v5030001#x1#l\r\n\r\n\r\n\r\n"//3
			
			if(cm.getPlayer().getGamePoints() >= 40 && cm.getPlayer().getGamePointsPD() == 0){
					text += "#L2##r"+完成红+"在线时间超过40分钟！"+完成+"#v2000004#x50个\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 40 && cm.getPlayer().getGamePointsPD() > 0){
					text += ""+完成红+"#r在线时间超过40分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过40分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 80 && cm.getPlayer().getGamePointsPD() == 1){
					text += "#L3##r"+完成红+"在线时间超过80分钟！"+完成+"#v2000005#x50个.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 80 && cm.getPlayer().getGamePointsPD() > 1){
					text += ""+完成红+"#r在线时间超过80分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过80分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() == 2){
					text += "#L4##r"+完成红+"在线时间超过120分钟！"+完成+"#v5076000#x6个.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() > 2){
					text += ""+完成红+"#r在线时间超过120分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过120分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 160 && cm.getPlayer().getGamePointsPD() == 3){
					text += "#L5##r"+完成红+"在线时间超过160分钟！"+完成+"#v4001126#x100个.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 160 && cm.getPlayer().getGamePointsPD() > 3){
					text += ""+完成红+"#r在线时间超过160分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过160分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 200 && cm.getPlayer().getGamePointsPD() == 4){
					text += "#L6##r"+完成红+"在线时间超过200分钟！"+完成+"#v4000313#x15.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 200 && cm.getPlayer().getGamePointsPD() > 4){
					text += ""+完成红+"#r在线时间超过200分钟！#l"+完成+"\r\n\r\n"//3 
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过200分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() == 5){
					text += "#L7##r"+完成红+"在线时间超过240分钟！"+完成+"点券=2000点#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() > 5){
					text += ""+完成红+"#r在线时间超过240分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过240分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 280 && cm.getPlayer().getGamePointsPD() == 6){
					text += "#L8##r"+完成红+"在线时间超过280分钟！"+完成+"点券=3000点#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 280 && cm.getPlayer().getGamePointsPD() > 6){
					text += ""+完成红+"#r在线时间超过280分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过280分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){//精灵商人1日权
            cm.sendOk("你已经领取过了。无法重新领取！");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("你已经领取过了。无法重新领取！");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取永久雇佣商人！");
            cm.dispose();
			}
        } else if (selection == 2) {
			cm.gainItem(2000004, 50);//特殊药水
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了40分钟在线奖励！特殊药水50个.");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainItem(2000005, 50);//超级药水
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了80分钟在线奖励！超级药水50个.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainItem(5076000, 3);//道具喇叭
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了120分钟在线奖励！道具喇叭*3个.");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainItem(4001126, 100);//枫叶
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了160分钟在线奖励！枫叶*100.");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainItem(4000313, 15);//黄金枫叶
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了200分钟在线奖励！黄金枫叶*15.");
            cm.dispose();
        } else if (selection == 7) {
                cm.gainNX(+2000);
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了240分钟在线奖励！点券*2000点.");
            cm.dispose();
        } else if (selection == 8) {
                cm.gainNX(+3000);
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了280分钟在线奖励！点券*3000点.");
            cm.dispose();
		}
    }
}


