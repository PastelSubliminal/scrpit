//odinms_MS
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);
// 攻击力20/魔力35 江户村 飞天猪
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
			cm.sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#k噗~~噗噗~~会飞的猪是说我吗？我吃的太饱飞不动了。。。\r\n#k#r#e所有冒险岛铂金装备都在我这，不过都很贵哦！#n\r\n\r\n#L1##r#e为什么你会有翅膀?#b#n\r\n\r\n#L2#冒险岛铂金贝雷帽（攻击力20/魔力35==#r80张#k#v4000313#）#b#n\r\n\r\n#L3#冒险岛铂金外套（攻击力20/魔力35==#r80张#k#v4000313#）#b#n\r\n\r\n#L4#冒险岛铂金手套（攻击力20/魔力35==#r80张#k#v4000313#）#b#n\r\n\r\n#L5#冒险岛铂金靴（攻击力20/魔力35==#r80张#k#v4000313#）#b#n\r\n\r\n#L6#冒险岛铂金披风（攻击力20/魔力35==#r80张#k#v4000313#）#b#n\r\n\r\n#L7#传说枫叶耳环（攻击力20/魔力35==#r80张#k#v4000313#）#b#n\r\n\r\n#L8#传说枫叶围巾（攻击力20/魔力35==#r80张#k#v4000313#）#b#n\r\n\r\n#L9#枫叶（攻击力20/魔力35==#r80张#k#v4000313#）#b#n\r\n\r\n#L10#冒险岛铂金腰带（攻击力20/魔力35==#r80张#k#v4000313#");			                
    } else if (status == 1) {
      if (selection == 1) {
		  cm.sendOk("\t\t\t       #e#b飞天小猪的来历#n#d\r\n====================================================#k\r\n你是说我的翅膀是怎么来的吗？当然不是自己长出来的啦，你看冒险大陆上哪有会飞的猪猪啊。。。#d\r\n====================================================#k\r\n话说回来，我都不记得自己啥时候长的翅膀了，你有见过别的飞天猪猪吗？#d\r\n====================================================#k\r\n哦，我想起来了，在我很小的时候，有一次出去玩遇到了一位#r老和尚#k，点了下下我的额头，念了几句听不懂的话语就走了，好像是在#r射手村里面#k，你找找。。。#d\r\n====================================================#k\r\n好啦不说了，我要睡觉觉了，安啦zzzZ#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,80)){
                cm.sendOk("#r#e恭喜您获得攻击力20/魔力35的冒险岛铂金贝雷帽.");
                cm.gainItem(1003243,0,0,0,0,0,0,20,35,0,0,0,0,0,0);
                cm.gainItem(4000313,-80);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力20/魔力35的冒险岛铂金贝雷帽！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,80)){
                cm.sendOk("#r#e恭喜您获得攻击力20/魔力35的冒险岛铂金外套.");
                cm.gainItem(1052358,0,0,0,0,0,0,20,35,0,0,0,0,0,0);
                cm.gainItem(4000313,-80);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力20/魔力35的冒险岛铂金外套！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,80)){
                cm.sendOk("#r#e恭喜您获得攻击力20/魔力35的冒险岛铂金手套.");
                cm.gainItem(1082315,0,0,0,0,0,0,20,35,0,0,0,0,0,0);
                cm.gainItem(4000313,-80);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力20/魔力35的冒险岛铂金手套！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,80)){
                cm.sendOk("#r#e恭喜您获得攻击力20/魔力35的冒险岛铂金靴.");
                cm.gainItem(1072522,0,0,0,0,0,0,20,35,0,0,0,0,0,0);
                cm.gainItem(4000313,-80);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力20/魔力35的冒险岛铂金靴！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,80)){
                cm.sendOk("#r#e恭喜您获得攻击力20/魔力35的冒险岛铂金披风.");
                cm.gainItem(1102295,0,0,0,0,0,0,20,35,0,0,0,0,8,8);
                cm.gainItem(4000313,-80);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力20/魔力35的冒险岛铂金披风！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,80)){
                cm.sendOk("#r#e恭喜您获得攻击力20/魔力35的传说枫叶耳环.");
                cm.gainItem(1032113,0,0,0,0,0,0,20,35,0,0,0,0,8,8);
                cm.gainItem(4000313,-80);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力20/魔力35的传说枫叶耳环！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }
                  else if(selection == 8){ 	           
                if (cm.haveItem(4000313,80)){
                cm.sendOk("#r#e恭喜您获得攻击力20/魔力35的传说枫叶围巾.");
                cm.gainItem(1122154,0,0,0,0,0,0,20,35,0,0,0,0,8,8);
                cm.gainItem(4000313,-80);
                // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力20/魔力35的传说枫叶围巾！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                }
                }else if(selection == 9){ 	           
                  if (cm.haveItem(4000313,80)){
                  cm.sendOk("#r#e恭喜您获得攻击力20/魔力35的枫叶.");
                  cm.gainItem(1012327,0,0,0,0,0,0,20,35,0,0,0,0,8,8);
                  cm.gainItem(4000313,-80);
                  // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力20/魔力35的枫叶！！");
                  cm.dispose();		
                  }else{ 
                  cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                  cm.dispose();	 
                  }
                  }
                  else if(selection == 10){ 	           
                  if (cm.haveItem(4000313,80)){
                  cm.sendOk("#r#e恭喜您获得攻击力20/魔力35的冒险岛铂金腰带.");
                  cm.gainItem(1132093,0,0,0,0,0,0,20,35,0,0,0,0,0,0);
                  cm.gainItem(4000313,-80);
                  // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力20/魔力35的冒险岛铂金腰带！！");
                  cm.dispose();		
                  }else{ 
                  cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                  cm.dispose();	 
                  }
                  }
                  // else if(selection == 11){ 	           
                  // if (cm.haveItem(4000313,80)){
                  // cm.sendOk("#r#e恭喜您获得攻击力20/魔力35的枫叶吊坠.");
                  // cm.gainItem(1122074,0,0,0,0,0,0,20,35,0,0,0,0,0,0);
                  // cm.gainItem(4000313,-80);
                  // // cm.喇叭(3,"厉害了word哥！！恭喜您获得了攻击力20/魔力35的枫叶吊坠！！");
                  // cm.dispose();		
                  // }else{ 
                  // cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                  // cm.dispose();	 
                  // }
                  // }
	}
    }
}
