//odinms_MS ԭȫ����30װ���һ�
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
			
			cm.sendSimple("\t\t\t\t\t#e#r��������#bϵ��#n\r\n#d====================================================\r\n#dĿǰ�˻�ʣ����:"+ cm.getMeso() + "\r\n====================================================\r\n#k��~~~�����#b�ҿ���͵�ܳ����ģ�Ⱥ����������������㣡\r\n#k#r#e���й�����5��װ���������⣡#n\r\n\r\n#L1##r#e�����ҹ����������˸������Ϣ#b#n\r\n\r\n#L2#����ͷ��������5==#r5��#k#v4000313#��#b#n\r\n\r\n#L3#��ɫɣ�÷����У���������5==#r5��#k#v4000313#��#b#n\r\n\r\n#L4#��ɫɣ�÷���Ů����������5==#r5��#k#v4000313#��#b#n\r\n\r\n#L5#�ݱ˵�����������������5==#r5��#k#v4000313#��#b#n\r\n\r\n#L6#��ĸ�̶�����������5==#r5��#k#v4000313#��#b#n\r\n\r\n#L7#������ԱO��Ƥ���ף�������5==#r5��#k#v4000313#��#b#n\r\n\r\n#L8#��ƤЬ��������5==#r5��#k#v4000313#�� #b#n\r\n\r\n#L9#ľ�ܣ�������5==#r10��#k#v4000313#��#b#n\r\n\r\n#L10#��ɫ������������5==#r5��#k#v4000313#��");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b�������˴���飨�ؿ���#n#d\r\n====================================================#k\r\n�����������ż�Ʒװ���һ����ף��κ����ͨ������Ŭ�����ɻ��#r��Ʒװ��#k��#d\r\n====================================================#k\r\n�Թ���������ʦ�忪�����굹���ˣ�Ϊ�˻�ծ����ʦ��͵͵�Ľ������װ���������ˣ���һ��Ҫ�ҵ���#d\r\n====================================================#k\r\n˳��й¶���������׬ȡ�ƽ��Ҷ�ķ�������ͨ��ÿ������ǩ��������ˢ�֡�ˢBOSS����Ҷ�һ���ã���ȥ����ʦ��ɣ�#k#d\r\n====================================================#k\r\n��Ҫ��ø�����Ϣ��ѯ����������ǵĻ��ɵ���Ⱥһ�����ۣ�#r30421239130#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest1') < 1000){
                cm.sendOk("#r#e��ϲ����ù�����5������ͷ��.");
                //���� ���� ���� ���� HP MP ������ ħ���� ������ ħ�������� ������ �ر��� �ƶ��ٶ� ��Ծ��
                cm.gainItem(1002096,0,0,0,0,0,0,5,5,0,0,0,0,0,0);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest1')
                // cm.����(3,"������word�磡����ϲ������˹�����5������ͷ����");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest1') >= 3){
                  cm.sendOk("#b�����һ���̫���ˣ�������������");  
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest2') < 1000){
                cm.sendOk("#r#e��ϲ����ù�����5����ɫɣ�÷����У�.");
                cm.gainItem(1050018,0,0,0,0,0,0,5,5,0,0,0,0,0,0);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest2')
                // cm.����(3,"������word�磡����ϲ������˹�����5����ɫɣ�÷����У�����");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest2') >= 3){
                  cm.sendOk("#b�����һ���̫���ˣ�������������");  
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest3') < 1000){
                cm.sendOk("#r#e��ϲ����ù�����5�ĺ�ɫɣ�÷���Ů��.");
                cm.gainItem(1051017,0,0,0,0,0,0,5,5,0,0,0,0,0,0);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest3')
                // cm.����(3,"������word�磡����ϲ������˹�����5�ĺ�ɫɣ�÷���Ů������");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest3') >= 3){
                  cm.sendOk("#b�����һ���̫���ˣ�������������");  
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest4') < 1000){
                cm.sendOk("#r#e��ϲ����ù�����5���ݱ˵���������.");
                cm.gainItem(1122007,0,0,0,0,0,0,5,5,0,0,0,0,5,5);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest4')
                // cm.����(3,"������word�磡����ϲ������˹�����5���ݱ˵�������������");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest4') >= 3){
                  cm.sendOk("#b�����һ���̫���ˣ�������������");  
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest5') < 1000){
                cm.sendOk("#r#e��ϲ����ù�����5����ĸ�̶���.");
                cm.gainItem(1032007,0,0,0,0,0,0,5,5,0,0,0,0,5,5);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest5')
                // cm.����(3,"������word�磡����ϲ������˹�����5����ĸ�̶�������");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest5') >= 3){
                  cm.sendOk("#b�����һ���̫���ˣ�������������");  
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest6') < 1000){
                cm.sendOk("#r#e��ϲ����ù�����5�Ĺ�����ԱO��Ƥ����.");
                cm.gainItem(1082245,0,0,0,0,0,0,3,3,15,0,0,0,0,0);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest6')
                // cm.����(3,"������word�磡����ϲ������˹�����5�Ĺ�����ԱO��Ƥ���ף���");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest6') >= 3){
                  cm.sendOk("#b�����һ���̫���ˣ�������������");  
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 8){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest7') < 1000){
                cm.sendOk("#r#e��ϲ����ù�����5����ƤЬ.");
                cm.gainItem(1072056,0,0,0,0,0,0,5,5,0,0,0,0,0,0);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest7')
                // cm.����(3,"������word�磡����ϲ������˹�����5����ƤЬ����");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest7') >= 3){
                  cm.sendOk("#b�����һ���̫���ˣ�������������");  
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
	                }else if(selection == 9){ 	           
                if (cm.haveItem(4000313,10) && cm.getBossLog('PlayQuest8') < 1000){
                cm.sendOk("#r#e��ϲ����ù�����5��ľ��.");
                cm.gainItem(1092003,0,0,0,0,0,0,5,5,0,0,0,0,0,0);
                cm.gainItem(4000313,-10);
                cm.setBossLog('PlayQuest8')
                // cm.����(3,"������word�磡����ϲ������˹�����5��ľ�ܣ���");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest8') >= 3){
                  cm.sendOk("#b�����һ���̫���ˣ�������������");  
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
	                }else if(selection == 10){ 	           
                if (cm.haveItem(4000313,5) && cm.getBossLog('PlayQuest9') < 1000){
                cm.sendOk("#r#e��ϲ����ù�����5�Ļ�ɫ����.");
                cm.gainItem(1132001,0,0,0,0,0,0,5,5,0,0,0,0,5,5);
                cm.gainItem(4000313,-5);
                cm.setBossLog('PlayQuest9')
                // cm.����(3,"������word�磡����ϲ������˹�����5�Ļ�ɫ��������");
                cm.dispose();		
                }else if(cm.getBossLog('PlayQuest9') >= 3){
                  cm.sendOk("#b�����һ���̫���ˣ�������������");  
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
	                }
                }
    }
}
