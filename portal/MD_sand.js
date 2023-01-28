var baseid = 260020600;// 沙哈地带4
var dungeonid = 260020630;// 沙尘暴山丘
var dungeons = 30;

function enter(pi) {
    if (pi.getMapId() == baseid) {
        if (pi.getPlayer().getFame() < 10) {
            pi.playerMessage(5, "进入需要10人气度.");
            return;
        }
        if (pi.getParty() != null) {
            if (pi.isLeader()) {
                for (var i = 0; i < dungeons; i++) {
                    if (pi.getPlayerCount(dungeonid + i) == 0) {
                        pi.warpParty(dungeonid + i);
                        return;
                    }
                }
            } else {
                pi.playerMessage(5, "You are not the leader of the party.");
            }
        } else {
            for (var i = 0; i < dungeons; i++) {
                if (pi.getPlayerCount(dungeonid + i) == 0) {
                    pi.warp(dungeonid + i);
                    return;
                }
            }
        }
        pi.playerMessage(5, "All of the Mini-Dungeons are in use right now, please try again later.");
    } else {
        pi.playPortalSE();
        pi.warp(baseid, "MD00");
    }
}