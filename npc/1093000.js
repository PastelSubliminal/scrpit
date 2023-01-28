//odinms_MS 原神级盾牌兑换
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
			
			cm.sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#别老盯着人家看，会害羞的啦。。。\r\n#k#r#e所有冒险岛宝石装备都在我这！#n\r\n\r\n#L1##r#e告诉我更多关于流浪商人的事#b#n\r\n\r\n#L2#冒险岛宝石贝雷帽（攻击力10/魔力15==#r20张#k#v4000313#）#b#n\r\n\r\n#L3#冒险岛宝石外套（攻击力10/魔力15==#r20张#k#v4000313#）#b#n\r\n\r\n#L4#冒险岛宝石手套（攻击力10/魔力15==#r20张#k#v4000313#）#b#n\r\n\r\n#L5#冒险岛宝石靴（攻击力10/魔力15==#r20张#k#v4000313#）#b#n\r\n\r\n#L6#冒险岛宝石披风（攻击力10/魔力15==#r20张#k#v4000313#）#b#n\r\n\r\n#L7#9周年枫叶（攻击力10/魔力15==#r20张#k#v4000313#）#b#n\r\n\r\n#L8#龙眼镜（攻击力10/魔力15==#r20张#k#v4000313#）");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b和布巴美眉的闲聊#n#d\r\n====================================================#k\r\n曾经对爱情充满幻想的我和一位小哥邂逅，发生了一段美好的故事，然而这个负心汉竟然嫌我胖，我要减肥减肥，瘦了去找他算账，他在#r中国#k的某个地图中，你能找到他吗？#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,20)){
                cm.sendOk("#r#e恭喜您获得攻击力10/魔力15的冒险岛宝石贝雷帽.");
                cm.gainItem(1003242,0,0,0,0,0,0,10,15,0,0,0,0,0,0);
                cm.gainItem(4000313,-20);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力10/魔力15的冒险岛宝石贝雷帽！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,20)){
                cm.sendOk("#r#e恭喜您获得攻击力10/魔力15的冒险岛宝石外套.");
                cm.gainItem(1052357,0,0,0,0,0,0,10,15,0,0,0,0,0,0);
                cm.gainItem(4000313,-20);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力10/魔力15的冒险岛宝石外套！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,20)){
                cm.sendOk("#r#e恭喜您获得攻击力10/魔力15的冒险岛宝石手套.");
                cm.gainItem(1082314,0,0,0,0,0,0,10,15,0,0,0,0,0,0);
                cm.gainItem(4000313,-20);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力10/魔力15的冒险岛宝石手套！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,20)){
                cm.sendOk("#r#e恭喜您获得攻击力10/魔力15的冒险岛宝石靴.");
                cm.gainItem(1072521,3,3,3,3,0,0,10,15,0,0,0,0,0,0);
                cm.gainItem(4000313,-20);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力10/魔力15的冒险岛宝石靴！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,20)){
                cm.sendOk("#r#e恭喜您获得攻击力10/魔力15的冒险岛宝石披风.");
                cm.gainItem(1102294,0,0,0,0,0,0,10,15,0,0,0,0,10,10);
                cm.gainItem(4000313,-20);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力10/魔力15的冒险岛宝石披风！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,20)){
                cm.sendOk("#r#e恭喜您获得攻击力10/魔力15的9周年枫叶.");
                cm.gainItem(1012318,0,0,0,0,0,0,10,15,0,0,0,0,10,10);
                cm.gainItem(4000313,-20);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力10/魔力15的9周年枫叶！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 8){ 	           
                if (cm.haveItem(4000313,20)){
                cm.sendOk("#r#e恭喜您获得攻击力10/魔力15的龙眼镜.");
                cm.gainItem(1022097,0,0,0,0,0,0,10,15,0,0,0,0,10,10);
                cm.gainItem(4000313,-20);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力10/魔力15的龙眼镜！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                }
	              }
              }
    }
}
