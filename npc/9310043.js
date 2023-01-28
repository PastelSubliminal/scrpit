//odinms_MS
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
			
			cm.1sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#你是猴子请来的救兵（豆比）吗？\r\n#k#r#e所有极品戒指都在我这！#n\r\n\r\n#L1##r#e告诉我更多关于流浪商人的事#b#n\r\n\r\n#L2#老公老婆戒指（全属性80==#r300张#k#v4000313#）#b#n\r\n\r\n#L3#全能戒指（全属性80==#r300张#k#v4000313#）#b#n\r\n\r\n#L4#利琳的灵气戒指（全属性80==#r300张#k#v4000313#）#b#n\r\n\r\n#L5#冒险家的格拉泰斯戒指（全属性80==#r300张#k#v4000313#）#b#n\r\n\r\n#L6#传说枫叶银戒指（全属性80==#r300张#k#v4000313#）");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b和肤子小哥的闲聊#n#d\r\n====================================================#k\r\n曾经的事就让他过去吧，记得给群主点赞哦，他可是个货真价实的大好人！#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性80的老公老婆戒指LV50.");
                cm.gainItem(1112495,80,80,80,80,80,80,2,2,80,80,50,50,5,5);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性80的老公老婆戒指LV50！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性80的全能戒指.");
                cm.gainItem(1112593,80,80,80,80,80,80,2,2,80,80,50,50,5,5);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性80的全能戒指！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性80的利琳的灵气戒指.");
                cm.gainItem(1112592,80,80,80,80,30,30,2,2,30,30,0,0,5,5);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性80的利琳的灵气戒指！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性80的冒险家的格拉泰斯戒指.");
                cm.gainItem(1112659,80,80,80,80,30,30,2,2,30,30,0,0,5,5);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性80的冒险家的格拉泰斯戒指！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性80的传说枫叶银戒指.");
                cm.gainItem(1112670,80,80,80,80,30,30,2,2,30,30,0,0,5,5);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性80的传说枫叶银戒指！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性80的至尊不速之客飞侠盾.");
                cm.gainItem(1092084,80,80,80,80,80,80,0,0,80,80,0,0,20,20);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性80的至尊不速之客飞侠盾！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  
             }
	}
    }
}
