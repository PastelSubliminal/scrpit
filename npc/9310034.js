//odinms_MS 原全属性30装备兑换
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#k嘘~~~轻点声#b我可是偷跑出来的，群主江浩让我在这等你！\r\n#k#r#e所有攻击力5的装备都在我这！#n\r\n\r\n#L1##r#e告诉我关于流浪商人更多的信息#b#n\r\n\r\n#L2#蓝星头巾（攻击力5==#r5张#k#v4000313#）#b#n\r\n\r\n#L3#蓝色桑拿服（男）（攻击力5==#r5张#k#v4000313#）#b#n\r\n\r\n#L4#红色桑拿服（女）（攻击力5==#r5张#k#v4000313#）#b#n\r\n\r\n#L5#休彼德蔓的项链（攻击力5==#r5张#k#v4000313#）#b#n\r\n\r\n#L6#祖母绿耳环（攻击力5==#r5张#k#v4000313#）#b#n\r\n\r\n#L7#工作人员O的皮手套（攻击力5==#r5张#k#v4000313#）#b#n\r\n\r\n#L8#蓝皮鞋（攻击力5==#r5张#k#v4000313#） #b#n\r\n\r\n#L9#木盾（攻击力5==#r10张#k#v4000313#）#b#n\r\n\r\n#L10#黄色腰带（攻击力5==#r5张#k#v4000313#）");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b流浪商人大调查（必看）#n#d\r\n====================================================#k\r\n本服务器开放极品装备兑换交易，任何玩家通过自身努力均可获得#r极品装备#k！#d\r\n====================================================#k\r\n言归正传，我师叔开的理发店倒闭了，为了还债背着师傅偷偷的将寺里的装备藏起来了，你一定要找到他#d\r\n====================================================#k\r\n顺便泄露下下天机，赚取黄金枫叶的方法可以通过每日任务、签到福利、刷怪、刷BOSS、枫叶兑换获得，快去找我师叔吧！#k#d\r\n====================================================#k\r\n想要获得更多信息咨询，请加入我们的怀旧单机群一起讨论：#r30421239130#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest1') < 1000){
                cm.sendOk("#r#e恭喜您获得攻击力5的蓝星头巾.");
                //力量 敏捷 智力 运气 HP MP 攻击力 魔法力 防御力 魔法防御力 命中率 回避率 移动速度 跳跃力
                cm.gainItem(1002096,0,0,0,0,0,0,5,5,0,0,0,0,0,0);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest1')
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力5的蓝星头巾！！");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest1') >= 3){
                  cm.sendOk("#b你今天兑换的太多了，请明天再来吧");  
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest2') < 1000){
                cm.sendOk("#r#e恭喜您获得攻击力5的蓝色桑拿服（男）.");
                cm.gainItem(1050018,0,0,0,0,0,0,5,5,0,0,0,0,0,0);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest2')
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力5的蓝色桑拿服（男）！！");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest2') >= 3){
                  cm.sendOk("#b你今天兑换的太多了，请明天再来吧");  
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest3') < 1000){
                cm.sendOk("#r#e恭喜您获得攻击力5的红色桑拿服（女）.");
                cm.gainItem(1051017,0,0,0,0,0,0,5,5,0,0,0,0,0,0);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest3')
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力5的红色桑拿服（女）！！");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest3') >= 3){
                  cm.sendOk("#b你今天兑换的太多了，请明天再来吧");  
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest4') < 1000){
                cm.sendOk("#r#e恭喜您获得攻击力5的休彼德蔓的项链.");
                cm.gainItem(1122007,0,0,0,0,0,0,5,5,0,0,0,0,5,5);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest4')
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力5的休彼德蔓的项链！！");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest4') >= 3){
                  cm.sendOk("#b你今天兑换的太多了，请明天再来吧");  
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest5') < 1000){
                cm.sendOk("#r#e恭喜您获得攻击力5的祖母绿耳环.");
                cm.gainItem(1032007,0,0,0,0,0,0,5,5,0,0,0,0,5,5);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest5')
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力5的祖母绿耳环！！");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest5') >= 3){
                  cm.sendOk("#b你今天兑换的太多了，请明天再来吧");  
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest6') < 1000){
                cm.sendOk("#r#e恭喜您获得攻击力5的工作人员O的皮手套.");
                cm.gainItem(1082245,0,0,0,0,0,0,3,3,15,0,0,0,0,0);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest6')
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力5的工作人员O的皮手套！！");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest6') >= 3){
                  cm.sendOk("#b你今天兑换的太多了，请明天再来吧");  
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 8){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest7') < 1000){
                cm.sendOk("#r#e恭喜您获得攻击力5的蓝皮鞋.");
                cm.gainItem(1072056,0,0,0,0,0,0,5,5,0,0,0,0,0,0);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest7')
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力5的蓝皮鞋！！");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest7') >= 3){
                  cm.sendOk("#b你今天兑换的太多了，请明天再来吧");  
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
	                }else if(selection == 9){ 	           
                if (cm.haveItem(4000313,10) && cm.getBossLog('PlayQuest8') < 1000){
                cm.sendOk("#r#e恭喜您获得攻击力5的木盾.");
                cm.gainItem(1092003,0,0,0,0,0,0,5,5,0,0,0,0,0,0);
                cm.gainItem(4000313,-10);
                cm.setBossLog('PlayQuest8')
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力5的木盾！！");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest8') >= 3){
                  cm.sendOk("#b你今天兑换的太多了，请明天再来吧");  
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
	                }else if(selection == 10){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest9') < 1000){
                cm.sendOk("#r#e恭喜您获得攻击力5的黄色腰带.");
                cm.gainItem(1132001,0,0,0,0,0,0,5,5,0,0,0,0,5,5);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest9')
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力5的黄色腰带！！");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest9') >= 3){
                  cm.sendOk("#b你今天兑换的太多了，请明天再来吧");  
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
	                }
                }
    }
}
