var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
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

            cm.sendOk("��л��Ĺ��٣�");
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
			text += "\t\t\t  #e#d��ӭ��ȡ#b���õ꿨 \r\n\r\n ���߽�������Ϊ.����ҩˮ50��-����ҩˮ50��-����6��-��Ҷ100��-�ƽ��Ҷ15��-��ȯ=2000�㡢��ȯ=3000��.\r\n\r\n"
			text += "#L1##r��ȡ���ù�Ӷ���ˣ�#v5030001#x1#l\r\n\r\n\r\n\r\n"//3
			
			if(cm.getPlayer().getGamePoints() >= 40 && cm.getPlayer().getGamePointsPD() == 0){
					text += "#L2##r"+��ɺ�+"����ʱ�䳬��40���ӣ�"+���+"#v2000004#x50��\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 40 && cm.getPlayer().getGamePointsPD() > 0){
					text += ""+��ɺ�+"#r����ʱ�䳬��40���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��40���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 80 && cm.getPlayer().getGamePointsPD() == 1){
					text += "#L3##r"+��ɺ�+"����ʱ�䳬��80���ӣ�"+���+"#v2000005#x50��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 80 && cm.getPlayer().getGamePointsPD() > 1){
					text += ""+��ɺ�+"#r����ʱ�䳬��80���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��80���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() == 2){
					text += "#L4##r"+��ɺ�+"����ʱ�䳬��120���ӣ�"+���+"#v5076000#x6��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() > 2){
					text += ""+��ɺ�+"#r����ʱ�䳬��120���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��120���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 160 && cm.getPlayer().getGamePointsPD() == 3){
					text += "#L5##r"+��ɺ�+"����ʱ�䳬��160���ӣ�"+���+"#v4001126#x100��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 160 && cm.getPlayer().getGamePointsPD() > 3){
					text += ""+��ɺ�+"#r����ʱ�䳬��160���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��160���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 200 && cm.getPlayer().getGamePointsPD() == 4){
					text += "#L6##r"+��ɺ�+"����ʱ�䳬��200���ӣ�"+���+"#v4000313#x15.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 200 && cm.getPlayer().getGamePointsPD() > 4){
					text += ""+��ɺ�+"#r����ʱ�䳬��200���ӣ�#l"+���+"\r\n\r\n"//3 
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��200���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() == 5){
					text += "#L7##r"+��ɺ�+"����ʱ�䳬��240���ӣ�"+���+"��ȯ=2000��#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() > 5){
					text += ""+��ɺ�+"#r����ʱ�䳬��240���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��240���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 280 && cm.getPlayer().getGamePointsPD() == 6){
					text += "#L8##r"+��ɺ�+"����ʱ�䳬��280���ӣ�"+���+"��ȯ=3000��#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 280 && cm.getPlayer().getGamePointsPD() > 6){
					text += ""+��ɺ�+"#r����ʱ�䳬��280���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��280���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){//��������1��Ȩ
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ���ù�Ӷ���ˣ�");
            cm.dispose();
			}
        } else if (selection == 2) {
			cm.gainItem(2000004, 50);//����ҩˮ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��40�������߽���������ҩˮ50��.");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainItem(2000005, 50);//����ҩˮ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��80�������߽���������ҩˮ50��.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainItem(5076000, 3);//��������
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��120�������߽�������������*3��.");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainItem(4001126, 100);//��Ҷ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��160�������߽�������Ҷ*100.");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainItem(4000313, 15);//�ƽ��Ҷ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��200�������߽������ƽ��Ҷ*15.");
            cm.dispose();
        } else if (selection == 7) {
                cm.gainNX(+2000);
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��240�������߽�������ȯ*2000��.");
            cm.dispose();
        } else if (selection == 8) {
                cm.gainNX(+3000);
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��280�������߽�������ȯ*3000��.");
            cm.dispose();
		}
    }
}


