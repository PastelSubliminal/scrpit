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
                
   cm.sendOk("��лʹ��.");
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
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "�������Ҿ��Ǳ����ľ�������������������ľ��ѷ������԰������#v1142007##r�ﰵ������ɱ��ѫ�¡�#k���һ��#b�������ѣ�ȫ����10��������10��ħ��10��#k\r\n��Ҫ������Ʒ����ȷ��ʱ����װ�������������ճ�һ���Ѿ���ɹ��������ѵ�װ����Ч����\r\n#v1142007# * 1��\r\n#v4000166##d#z4000166# * 50��\r\n#v4000007##d#z4000007# * 50��\r\n#v4000008##d#z4000008# * 50��\r\n#v4000313##d#z4000313# * 100��\r\n#v4032226##d#z4032226# * 100ֻ\r\n#v2140002##d��� * 500W\r\n~\r\n"
	text += "\r\n#L1##b���ռ���������Ʒ��ȷ����ʼ����װ��";
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
            if(cm.haveItem(4000313, 100) && cm.haveItem(4000166,50) && cm.haveItem(4000007,50) && cm.haveItem(4000008,50)  && cm.haveItem(4032226,100) && cm.haveItem(1142007,1) && cm.canHold(1142007, 1) && cm.canHold(4032185, 1)){
				cm.gainItem(4000313, -100);
				cm.gainItem(4000166, -50);
				cm.gainItem(4000007, -50);
				cm.gainItem(4000008, -50);
				cm.gainItem(4032226, -100);
                cm.gainMeso(-5000000);
				cm.gainItem(1142007, -1);
                cm.gainItem(4032185,1);
                cm.gainItem(1142007,10,10,10,10,0,0,10,10,0,0,0,0,0,0);
            cm.sendOk("���ѳɹ�������С����������");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�ﰵ������ɱ��ѫ�¡�������ѳɹ�������С����������ϲ����");
			}else{
            cm.sendOk("�޷�������������Ĳ��ϲ��㣬��˶Բ��Ϻ����ԣ�\r\n");
            cm.dispose();
			}
		}
    }
}




