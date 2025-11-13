!function(E, x) {
    x.un,
    x.uns;
    var O = x.static
      , t = x.class
      , e = x.getset
      , F = x.__newvec
      , w = laya.utils.Browser
      , H = laya.net.URL
      , r = laya.renders.Render
      , b = laya.utils.Handler
      , i = laya.events.Event
      , G = laya.net.HttpRequest
      , a = laya.net.LocalStorage
      , U = laya.ui.Button
      , V = laya.events.EventDispatcher
      , z = laya.display.Sprite
      , X = x.Set
      , W = laya.webgl.WebGL
      , j = (laya.display.Stage,
    laya.ui.View)
      , Y = laya.html.dom.HTMLDivElement
      , $ = laya.net.Loader
      , q = laya.display.Node
      , K = laya.resource.Texture
      , Q = (laya.resource.Bitmap,
    laya.media.SoundManager)
      , Z = laya.webgl.atlas.AtlasResourceManager
      , J = laya.ui.Image
      , tt = laya.webgl.resource.WebGLCharImage
      , m = (laya.webgl.resource.WebGLImage,
    laya.utils.Tween)
      , et = laya.events.MouseManager
      , it = laya.utils.HitArea
      , st = laya.maths.Rectangle
      , nt = laya.resource.ResourceManager
      , ot = (laya.resource.Resource,
    laya.ui.ComboBox)
      , at = laya.ui.Box
      , rt = laya.ui.Label
      , lt = laya.display.css.Style
      , ht = laya.net.Socket
      , ct = (laya.media.SoundChannel,
    laya.events.TouchManager)
      , pt = laya.maths.Point
      , ut = laya.utils.Dictionary
      , dt = (laya.net.LoaderManager,
    laya.utils.Pool)
      , gt = (laya.ui.TextInput,
    laya.display.Input)
      , mt = laya.mini.MiniCacheMgr
      , _t = x.Config
      , ft = laya.mini.IMiniAdapter
      , yt = laya.mini.IMiniFileMgr
      , vt = laya.utils.ClassUtils
      , s = laya.utils.Byte
      , xt = (laya.events.Keyboard,
    laya.debug.DebugPanel)
      , wt = laya.ks.mini.KSMiniAdapter
      , bt = laya.vv.mini.VVMiniAdapter
      , St = laya.wx.mini.MiniAdpter
      , It = laya.ani.bone.Templet
      , Ct = laya.ani.bone.Skeleton
      , kt = laya.ani.swf.MovieClip
      , Pt = laya.display.Animation
      , Tt = laya.display.Text
      , Lt = laya.filters.ColorFilter
      , At = laya.ui.Component
      , n = laya.ui.List
      , Rt = laya.utils.Ease
      , Bt = laya.ui.Panel
      , c = (laya.ui.CheckBox,
    laya.ui.HBox,
    laya.device.motion.AccelerationInfo,
    x.interface("app.multiZone.IZoneCfg"),
    x.interface("app.fateGame.mission.AppIFieldBoxCustom"),
    x.interface("app.fateGame.mission.AppIFieldBoxFieldCustom"),
    x.interface("app.fateGame.role.AppIAction"),
    x.interface("app.fateGame.f1.manager.AppIResUser"),
    t(h, "app.App"),
    e(1, h, "clickUrl", function() {
        return ki.ins.Zone.clickUrl
    }, function(t) {
        ki.ins.Zone.clickUrl = t
    }),
    e(1, h, "loginDetailData", function() {
        return h._loginDetailData
    }, function(t) {
        h._loginDetailData = t
    }),
    e(1, h, "importListUrl", function() {
        return ki.ins.Zone.importListUrl
    }),
    e(1, h, "noticeCheckUrl", function() {
        return ki.ins.Zone.noticeCheckUrl
    }),
    e(1, h, "loginUrl", function() {
        return ki.ins.Zone.loginUrl
    }),
    e(1, h, "noticeUrl", function() {
        return ki.ins.Zone.noticeUrl
    }),
    e(1, h, "conchLoginCheckUrl", function() {
        return ki.ins.Zone.conchLoginCheckUrl
    }),
    e(1, h, "roleRepeatUrl", function() {
        return ki.ins.Zone.roleRepeatUrl
    }),
    e(1, h, "errorUrl", function() {
        return ki.ins.Zone.errorUrl
    }),
    e(1, h, "roleInfoUrl", function() {
        return ki.ins.Zone.roleInfoUrl
    }),
    e(1, h, "bsdclickUrl", function() {
        return g.gamePlat == g.plat_tw || g.gamePlat == g.plat_global ? h.clickUrl : "http://xxh5click.996a.com/click"
    }),
    e(1, h, "postInfoUrl", function() {
        return ki.ins.Zone.postInfoUrl
    }),
    e(1, h, "mainCdn", function() {
        return h._mainCdn || (h._mainCdn = w.window.location.href.replace(/^(.*[\\\/])[^\\\/]*$/, "$1"),
        h.useHttps && (h._mainCdn = h._mainCdn.replace(/^http\:\/\//i, "https://"))),
        h._mainCdn
    }),
    e(1, h, "isImportServerNewUser", function() {
        return h.importServerData && h.importServerData.serverId == h.selectedServer.serverId && 0 == h.importServerData.isolduser
    }),
    e(1, h, "isNewUser", function() {
        return !g.isDebugMode && (h.importServerData && h.importServerData.serverId == h.selectedServer.serverId ? h.isNewRole = 0 == h.importServerData.isolduser : !(!h.serverData || !h.serverData.loginedServerList) && (h.isNewRole = -1 == h.serverData.loginedServerList.indexOf(h.selectedServer.serverId)))
    }),
    e(1, h, "isMiniGameNewUser", function() {
        return !!(w.antiMiniGame && h.isImportServerNewUser || h.IsFate)
    }),
    h.isKuaishowServer = function(t) {
        for (var e = 0; e < h.wxOrKuaiShous.length; e++) {
            var i = h.wxOrKuaiShous[e].split("-");
            if (parseInt(i[0]) <= t && parseInt(i[1]) >= t)
                return !0
        }
        return !1
    }
    ,
    h.startLogin = function() {
        h.USE_LOGIN = w.now(),
        h.USE_ALL = w.now(),
        "zh" == g.Language && (h.useHttps = !0);
        var t = w.antiMiniGame ? H.basePath : w.window.location.href
          , t = (w.onDebugMiniGame = w.window.isZipWx,
        h.islocal = -1 != t.indexOf("8066") || w.window.debugWx,
        h.send("3710001"),
        r.isConchApp && !Ot.published && (h.useHttps = !1),
        w.window.loginDataFromJG = [],
        h.openCmd(),
        new Ut);
        if (t.setFinishHandle(b.create(null, h.finishLogin)),
        g.isDebugMode)
            t.add(b.create(Bi.ins, Bi.ins.queueSdkInit));
        else if (r.isConchApp)
            t.add(b.create(Li.ins, Li.ins.queueSdkInit));
        else if (w.isMiniBase)
            t.add(b.create(Di.inst, Di.inst.queueSdkInit));
        else {
            if (!w.onMiniGame)
                throw new Error(d.getI18(20003));
            t.add(b.create(Bs.ins, Bs.ins.queueSdkInit))
        }
        if (g.isDebugMode)
            t.add(b.create(Bi.ins, Bi.ins.queueSdkLogin));
        else if (r.isConchApp)
            t.add(b.create(Li.ins, Li.ins.queueSdkLogin));
        else if (w.isMiniBase)
            t.add(b.create(Di.inst, Di.inst.queueSdkLogin));
        else {
            if (!w.onMiniGame)
                throw new Error(d.getI18(20004));
            t.add(b.create(Bs.ins, Bs.ins.queueSdkLogin))
        }
        g.isDebugMode ? t.add(b.create(Bi.ins, Bi.ins.queueImportServer)) : t.add(b.create(null, h.importServer)),
        w.antiMiniGame && 0 == h.fate && t.add(b.create(null, h.loadJsAndCfg)),
        t.begin()
    }
    ,
    h.loadJsAndCfg = function(t) {
        var e;
        h.IsFate ? t.run() : (p.ins.openWxPreLoadingPanel(),
        (e = new Ut).setFinishHandle(b.create(null, h.finishloadJsAndCfg, [t])),
        w.antiMiniGame && !h.isNewUser && (Ot.verUrls = null,
        e.add(b.create(null, h.getMiniVer)),
        e.add(b.create(null, h.getFilesXmlWx)),
        e.add(b.create(null, h.getSubpackJs)),
        e.add(b.create(null, h.getCfgPreWx))),
        e.begin())
    }
    ,
    h.finishloadJsAndCfg = function(t) {
        p.ins.closeWxPreLoadingPanel(),
        t && t.run()
    }
    ,
    h.getCfgPreWx = function(t) {
        p.ins.loadCfgPreWx(t)
    }
    ,
    h.getFilesXmlWx = function(t) {
        p.ins.loadFilesXmlWx(t)
    }
    ,
    h.getMiniVer = function(t) {
        w.onMiniGame ? Bs.ins.preLoadMiniVer(t) : w.isMiniBase ? Di.inst.preLoadMiniVer(t) : t.run()
    }
    ,
    h.getSubpackJs = function(t) {
        w.onMiniGame ? Bs.ins.loadSubpack2(!0, t) : w.onVVMiniGame ? Ls.ins.loadSubpack2(!0, t) : w.onKSMiniGame ? ks.ins.loadSubpack2(!0, t) : t.run()
    }
    ,
    h.finishLogin = function() {
        g.isAuditing ? !g.isSelectPrivacy && w.onMiniGame ? p.ins.m_loginPanel.addToGeneral(d.getI18(40014)) : h.startEnterGame(1) : (w.antiMiniGame || h.islocal) && (h.isNewRole = h.isNewUser,
        g.isSelectPrivacy ? h.IsFate && h.startEnterGame(1) : p.ins.m_loginPanel.addToGeneral(d.getI18(40014)))
    }
    ,
    h.startEnterGame = function(t) {
        void 0 === t && (t = 0),
        h.USE_ENTER = w.now(),
        1 == h.fate ? h.IsFate = !0 : w.antiMiniGame && (h.IsFate = h.isNewUser),
        w.antiMiniGame && h.isNewUser && h.sendAppOreo(),
        h.logtime1 = (new Date).getTime();
        var e = new Ut;
        e.setFinishHandle(b.create(null, h.finishEnterGame)),
        h.send("3710006"),
        h.isNewUser && h.send("3701"),
        g.isDebugMode ? e.add(b.create(Bi.ins, Bi.ins.queueServerData)) : (r.isConchApp && e.add(b.create(Li.ins, Li.ins.queueGetTimeAndSign)),
        e.add(b.create(null, h.getServerData))),
        (w.antiMiniGame && 0 == t || h.IsFate) && (Ot.verUrls = null,
        e.add(b.create(null, h.getMiniVer)),
        h.islocal && !w.onDebugMiniGame || e.add(b.create(null, h.getFilesXmlWx))),
        ((h.isNewRole = h.isNewUser) || h.IsFate) && (g.isAuditing || g.isWxOrKuaishou() || h.IsFate ? (h.sex = .5 < Math.random() ? 1 : 2,
        h.roleName = g.getRandomName(1 == h.sex),
        w.onMiniGame && ("484" == g.PID ? h.send("40041") : "442" == g.PID ? h.send("40042") : h.send("4004"))) : e.add(b.create(p.ins, p.ins.showCreateRole))),
        h.IsFate && e.add(b.create(p.ins, p.ins.PlayLoginMovie)),
        w.antiMiniGame || e.add(b.create(null, h.startLoadScript)),
        e.begin()
    }
    ,
    h.finishEnterGame = function() {
        var t;
        h.USE_GAMEINIT = w.now(),
        w.window.filesXML && w.window.com && w.window.com.Game && w.window.Zlib ? ((t = h.loginDetailData).username && (g.userAccount = t.username),
        t.ip && (g.IP = t.ip),
        t.port && (g.PORT = t.port),
        t.op && (g.OP = t.op),
        t.server && (g.SERVER = Number(t.server)),
        t.referer && (g.REFERER = t.referer),
        t.time && (g.TIME = t.time),
        t.sign && (g.SIGN = t.sign),
        t.clickurl && (h.clickUrl = t.clickurl),
        t.clickStream && (g.clickStream = parseInt(t.clickStream)),
        t.channelqueryurl && (g.channelqueryurl = t.channelqueryurl),
        g.CDN = t.cdn,
        g.serverName = h.selectedServer.name,
        g.isNewLogin = h.isNewRole,
        h.roleName && h.sex && (g.createRoleName = h.roleName,
        g.createRoleSex = h.sex),
        (new com.Game).init(),
        h.USE_GAMEINIT = w.now() - h.USE_GAMEINIT) : h.alert2(d.getI18(20025), h.refresh)
    }
    ,
    h.openCmd = function() {
        var e = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0]
          , i = 0
          , s = 0;
        x.stage.on("click", null, function(t) {
            !(0 != i && s + 1e3 < w.now()) && (t = t.stageX < x.stage.width / 2 ? 0 : 1,
            e[i] == t) ? (s = w.now(),
            i++,
            e.length <= i && (p.ins.m_loginRoot ? p.ins.showInput("", "", b.create(null, h.doCmd)) : h.doCmd("log"),
            i = 0)) : i = 0
        })
    }
    ,
    h.doCmd = function(t, e) {
        if (void 0 === e && (e = ""),
        "log" == t) {
            for (var i = "", s = 0, n = w.window.loginDataFromJG.length; s < n; s++)
                i += w.window.loginDataFromJG[s] + "\n\n";
            i = (i += "\n\n" + Ht.lastError) + ("\n huawei:" + w.onOhos + "\n"),
            h.debugTime = !0,
            p.ins.printLoadingTime(),
            h.debugTime = !1,
            alert(i + "----" + w.window.build_time + "---imei:" + h.IMEI + "----userAgent:" + w.userAgent)
        } else
            "closeetcpvr" == t ? (alert(d.getI18(20005)),
            Ot.isSupportEtc = !1,
            Ot.isSupportPvr = !1,
            Ot.isSupportAtlasMix = !1) : "closemix" == t ? (alert(d.getI18(20006)),
            Ot.isSupportAtlasMix = !1) : "cache1" == t ? (alert(d.getI18(20007)),
            h.s_testMaskCache = !0) : "perfshow" == t ? (alert("PerfShow"),
            PerfShow(1)) : "testpc" == t ? h.sendPostCodeInfo(e) : "openlog" == t && (h.s_testOpenLog = !0)
    }
    ,
    h.sendError = function(t) {
        if (!g.isDebugMode) {
            var e, i, s = new XMLHttpRequest, n = h.errorUrl, o = w.antiMiniGame ? H.basePath : w.window.location.href;
            for (i in h.s_needReplaces)
                if (e = h.s_needReplaces[i],
                -1 != o.indexOf(e)) {
                    n = w.window.isHwWai ? n.replace("error.xxh5.z7xz.com", "errorhw." + e) : n.replace("error.xxh5.z7xz.com", "error." + e);
                    break
                }
            g.SERVER && g.userAccount && (t = (t += "--" + g.userAccount) + "--" + g.SERVER),
            h.useHttps && (n = n.replace(/^http\:\/\//i, "https://")),
            s.open("post", n, !0),
            s.responseType = "text",
            s.send("error=" + t)
        }
    }
    ,
    h.send = function(t) {
        if (0 != g.clickStream && !g.isDebugMode) {
            h._httpRequest && !w.onVVMiniGame || (h._httpRequest = new G);
            var e, i, s = "", s = h.bsdclickUrl + "?", n = (s = (s = (s = (s = (s = (s += "time=" + w.now()) + ("&plat=" + g.REFERER)) + ("&sid=" + g.SERVER)) + ("&pid=" + g.PID)) + ("&gid=" + g.gid)) + ("&account=" + g.userAccount) + ("&type=" + t),
            w.onKSMiniGame ? ((t = a.getItem("IMEI")) && "" != t || (t = g.userAccount,
            a.setItem("IMEI", t)),
            s += "&traceId=" + t) : s += h.IMEI ? "&traceId=" + h.IMEI : "&traceId=" + h.uid,
            w.antiMiniGame ? H.basePath : w.window.location.href);
            for (i in h.s_needReplaces)
                if (e = h.s_needReplaces[i],
                -1 != n.indexOf(e)) {
                    s = w.window.isHwWai ? s.replace("xxh5click.996a.com", "clickhw." + e) : s.replace("xxh5click.996a.com", "click." + e);
                    break
                }
            h.useHttps && (s = s.replace(/^http\:\/\//i, "https://")),
            h._httpRequest.send(s)
        }
    }
    ,
    h.sendAppOreo = function() {
        var t = "https://imei.996a.com?game=xxh5&plat=37wan&gid=$1&pid=$2&imei=$3&time=$4"
          , e = (t = (t = (t = (t = t.replace(/\$1/g, g.gid)).replace(/\$2/g, g.PID)).replace(/\$3/g, h.uid)).replace(/\$4/g, w.now()),
        new G);
        h.useHttps && (t = t.replace(/^http\:\/\//i, "https://")),
        e.send(t),
        e.on("complete", {}, function() {
            console.log("============yjw===发送成功了!"),
            Dt.sendedAppOreo()
        }),
        e.on("error", {}, function() {
            console.log("============yjw===发送失败了!" + h.sendAppOreoCount),
            3 <= h.sendAppOreoCount || (h.sendAppOreoCount++,
            e.send(t))
        })
    }
    ,
    h.refresh = function(t) {
        var e;
        w.isMiniBase ? Di.inst.refresh(null, t) : w.onMiniGame ? Bs.ins.refresh(null, t) : (r.isConchApp && (t = w.window.conch) && t.closeExternalLink(),
        t = w.document.location.href,
        e = -1 != (e = w.window.location.href).indexOf("file:") || -1 != e.indexOf("10.11"),
        -1 != t.indexOf("relogin=true") || e ? w.document.location.reload() : (e = (e = w.window.build_time) && "" != e ? e : Math.random() + "",
        t = t.replace(/\?.*/, "") + "?relogin=true&r=" + e,
        console.log(t),
        w.document.location.href = t))
    }
    ,
    h.importServer = function(s) {
        h.USE_LOGIN2 = w.now();
        var n = h.importListUrl.replace(/\$1/g, h.platCode)
          , t = (n = (n = (n = (n = (n = (n = (n = n.replace(/\$2/g, g.PID)).replace(/\$3/g, h.appVer)).replace(/\$4/g, h.token)).replace(/\$5/g, g.gid)).replace(/\$6/g, h.time)).replace(/\$7/g, h.sign)).replace(/\$8/g, w.onIOS ? "IOS" : "ANDROID"),
        h.uid && (n = n.replace(/\$9/g, h.uid)),
        n += "&v=" + (new Date).getTime(),
        {});
        t.pid = g.PID,
        t.gid = g.gid,
        t.event_name = "choose_server_load",
        Bs.dataReport(t),
        w.antiMiniGame && console.error("ImportServer:" + n),
        Ht.lastError += "|importServer",
        h.send("3710004"),
        h.load(n, b.create(null, function(t) {
            var e, i;
            !t || 1 != (e = JSON.parse(t)).state ? (h.sendError(d.getI18(20009) + n + ":" + t),
            console.info("err  " + n + ":" + t),
            h.alert2(d.getI18(20010), h.refresh)) : (h.send("3710005"),
            h.USE_LOGIN2 = w.now() - h.USE_LOGIN2,
            w.antiMiniGame && console.error("ImportServer Return:" + t),
            (i = {}).pid = g.PID,
            i.gid = g.gid,
            i.event_name = "choose_server_arrive",
            Bs.dataReport(i),
            Ht.lastError += "|importServerBack",
            w.window.loginDataFromJG.push(n + "\n" + t),
            !e || !e.server || e.state < 0 ? (w.antiMiniGame && console.error("ImportServer Return No Server:" + t),
            h.setSelectServerAndShowEnter(null),
            s.run()) : (h.uid = e.server[0].uid,
            h.serverid = e.server[0].serverId,
            h.importServerData = e.server[0],
            h.setSelectServerAndShowEnter(e.server[0]),
            s.run(),
            i.event_name = "choose_server_complete",
            i.dsanme = h.selectedServer.name,
            i.dsid = h.serverid,
            x.timer.once(500, Bs, Bs.dataReport, [i]),
            h.getRoleInfo()))
        }))
    }
    ,
    h.tryDirectEnter = function() {
        h.isImportServerNewUser && h.startEnterGame()
    }
    ,
    h.setSelectServer = function(t) {
        h.selectedServer = t,
        h.islocal || w.antiMiniGame && h.selectedServer && (0 == h.selectedServer.isolduser || !h.selectedServer.isolduser) ? h.IsFate = !0 : h.IsFate = !1,
        p.ins.m_loginPanel && p.ins.m_loginPanel.isLoadAltas && p.ins.m_loginPanel.refreshSelectServer()
    }
    ,
    h.setSelectServerAndShowEnter = function(t) {
        var i;
        h.setSelectServer(t),
        p.ins.userProIsOpened() || h.noticeData || g.isDebugMode || h.isMiniGameNewUser || (i = h.noticeCheckUrl.replace(/\$1/g, h.platCode).replace(/\$2/g, g.PID).replace(/\$3/g, g.gid),
        i += "&v=" + (new Date).getTime(),
        h.load(i, b.create(null, function(t) {
            var e;
            p.ins.m_loginRoot && (t ? (w.window.loginDataFromJG.push(i + "\n" + t),
            h.noticeData = JSON.parse(t),
            e = (e = a.getItem("noticeData")) ? JSON.parse(e) : {
                id: 0,
                count: 0
            },
            1 == h.noticeData.state ? e.id == h.noticeData.id ? (e.count < h.noticeData.opencount || -1 == h.noticeData.opencount) && (e.count++,
            a.setItem("noticeData", JSON.stringify(e)),
            p.ins.showNotice()) : (e.id = h.noticeData.id,
            e.count = 1,
            a.setItem("noticeData", JSON.stringify(e)),
            p.ins.showNotice()) : e && e.id && (e.id = 0,
            e.count = 0,
            a.setItem("noticeData", JSON.stringify(e)))) : (h.sendError(d.getI18(20009) + i + ":" + t),
            h.alert2(d.getI18(20012), h.refresh)))
        }))),
        p.ins.m_loginPanel || p.ins.openLoginPanel(),
        p.ins.m_loginPanel.setState("State_enter")
    }
    ,
    h.getServerData = function(o) {
        g.SERVER = h.selectedServer.serverId,
        g.serverName = h.selectedServer.name;
        var a = h.conchLoginCheckUrl.replace(/\$10/, h.selectedServer.serverId)
          , a = (a = (a = (a = (a = (a = (a = (a = (a = h.uid ? a.replace(/\$11/, h.uid) : a).replace(/\$1/, h.token)).replace(/\$2/, w.onIOS ? "IOS" : "ANDROID")).replace(/\$3/, g.PID)).replace(/\$4/, g.gid)).replace(/\$5/, h.appVer)).replace(/\$6/, h.platCode)).replace(/\$7/, h.IMEI)).replace(/\$8/, h.time);
        w.onKSMiniGame && !h.sign && (h.sign = "1"),
        a = a.replace(/\$9/, h.sign),
        h.load(a, b.create(h, function(t) {
            if (t) {
                h.USE_ENTER = w.now() - h.USE_ENTER,
                w.window.loginDataFromJG.push(a + "\n" + t);
                var e = h.loginDetailData = JSON.parse(t);
                if (5 == e.stat)
                    h.alert2(d.getI18(20014), h.refresh);
                else if (1 != e.state)
                    p.ins.showSelectServer();
                else {
                    (e = h.loginDetailData = e.msg).username && (g.userAccount = e.username),
                    e.referer && (g.REFERER = e.referer),
                    h.send("3009"),
                    w.onMiniGame && ("484" == g.PID ? h.send("40111") : "442" == g.PID ? h.send("40112") : h.send("4011"));
                    for (var i = 0, s = (h.cdnList = e.cdn.split(";")).length; i < s; i++) {
                        var n = h.cdnList[i];
                        "/" != n.substr(n.length - 1, 1) && (h.cdnList[i] = n + "/"),
                        h.useHttps && (h.cdnList[i] = h.cdnList[i].replace(/^http\:\/\//i, "https://"))
                    }
                    e.cdn = h.cdnList.join(";"),
                    w.antiMiniGame && h.cdnList && 0 < h.cdnList.length && (H.basePath = h.cdnList[0]),
                    h.loadList[0].src = e.verjs || "ver.js",
                    Ot.published || (h.loadList[0].src = "ver.js",
                    h.cdnList = [""],
                    e.cdn = ""),
                    p.ins.m_loginPanel.setState("State_loading"),
                    w.antiMiniGame && p.ins.m_loginPanel.setVer && p.ins.m_loginPanel.setVer(h.loadList[0].src.split(".js").join("")),
                    o.run(),
                    Dt.checkIpv(e.ip, function(t, e) {
                        e && (h.ipv4Ip = e.ip,
                        h.isIpv6 = !!e.isIpv6,
                        console.log("---sdk checkIpv--" + e.isIpv6 + "," + e.ip)),
                        console.log("sdk checkIpv*******")
                    })
                }
            } else
                console.info("err  " + a + ":" + t),
                h.alert2(d.getI18(20013), h.refresh)
        }))
    }
    ,
    h.getRoleInfo = function() {
        var t, e;
        w.onMiniGame || (w.window.hex_md5 ? (t = h.roleInfoUrl,
        h.uid && (t = t.replace(/\$5/, h.uid)),
        h.time = h.time || w.now() + "",
        e = w.onMiniGame ? MD5.md5(h.time.toString() + g.PID + g.gid + h.uid + "CR.wdPyFoanb6Thv8sJ5rjNDMEeI3@X1") : w.window.hex_md5(h.time.toString() + g.PID + g.gid + h.uid + "CR.wdPyFoanb6Thv8sJ5rjNDMEeI3@X1"),
        t = (t = (t = (t = t.replace(/\$1/, g.gid)).replace(/\$2/, g.PID)).replace(/\$3/, e)).replace(/\$4/, h.time),
        h.load(t, b.create(h, function(t) {
            if (t) {
                var e = JSON.parse(t).data;
                if (h.ServerRoleInfo = {},
                e)
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        h.ServerRoleInfo[s.dsid] = h.ServerRoleInfo[s.dsid] || {},
                        !h.ServerRoleInfo[s.dsid].drname && s.drname && 0 < s.drname.length && (h.ServerRoleInfo[s.dsid].drname = s.drname),
                        !h.ServerRoleInfo[s.dsid].dsname && s.dsname && 0 < s.dsname.length && (h.ServerRoleInfo[s.dsid].dsname = s.dsname),
                        h.ServerRoleInfo[s.dsid].drlevel = h.ServerRoleInfo[s.dsid].drlevel || 0,
                        s.drlevel && (h.ServerRoleInfo[s.dsid].drlevel += s.drlevel),
                        h.ServerRoleInfo[s.dsid].count = h.ServerRoleInfo[s.dsid].count || 0,
                        h.ServerRoleInfo[s.dsid].count++
                    }
            }
        }))) : h.loadScript("md5.js", b.create(h, function() {
            w.window.hex_md5 ? h.getRoleInfo() : console.error("sendPostCodeInfo loadmd5js fail???")
        }), "", 0))
    }
    ,
    h.getRoleName = function(t) {
        return !w.antiMiniGame && (t = h.ServerRoleInfo[t]) && t.drname ? t.drname : ""
    }
    ,
    h.getRoleLevel = function(t) {
        return !w.antiMiniGame && (t = h.ServerRoleInfo[t]) && t.drlevel ? Math.floor(t.drlevel / t.count) : 0
    }
    ,
    h.getRoleServerName = function(t) {
        return !w.antiMiniGame && (t = h.ServerRoleInfo[t]) && t.dsname ? t.dsname : ""
    }
    ,
    h.startLoadScript = function(t) {
        h.s_onScriptComplete = t,
        h.USE_LOADMAIN = w.now(),
        p.ins && p.ins.m_loginPanel ? !Ot.published && r.isConchApp ? h.finishLoadScript() : h.loadNext() : (console.error(d.getI18(20015)),
        h.alert2("开始加载文件失败,尝试刷新游戏", h.refresh))
    }
    ,
    h.finishLoadScript = function() {
        h.USE_LOADMAIN = w.now() - h.USE_LOADMAIN,
        h.s_onScriptComplete && h.s_onScriptComplete.run()
    }
    ,
    h.getParam = function(t) {
        var e = "&" + w.window.location.search.substr(1)
          , t = new RegExp("\\&" + t + "\\=([^\\&]*)")
          , e = e.match(t);
        return e && e[0] ? e[1] : null
    }
    ,
    h.load = function(t, e, i, s, n) {
        if (void 0 === i && (i = 3),
        void 0 === n && (n = !0),
        w.window.conch && 0 == w.window.conch.config.getNetworkType())
            alert(d.getI18(20016));
        else {
            var o, a, r = null, r = w.window.XMLHttpRequest ? new w.window.XMLHttpRequest : new w.window.ActionXObject("Microsoft.XMLHTTP"), l = (h.loadingList.push(r),
            w.antiMiniGame ? H.basePath : w.window.location.href);
            for (a in h.s_needReplaces)
                if (o = h.s_needReplaces[a],
                -1 != l.indexOf(o)) {
                    t = w.window.isHwWai ? t.replace("app.xxh5.z7xz.com", "apphw." + o) : t.replace("app.xxh5.z7xz.com", "app." + o);
                    break
                }
            h.useHttps && (t = t.replace(/^http\:\/\//i, "https://")),
            r.open(s ? "POST" : "GET", t, !0),
            s ? r.setRequestHeader("Content-type", "application/json") : r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            r.responseType = "text",
            r.param = [t, e, i],
            n && (r.onabort = r.onerror = h.onLoadError),
            r.onload = h.onLoadComplete,
            s ? r.send(s) : r.send()
        }
    }
    ,
    h.onLoadComplete = function(t) {
        var t = t && t.code ? t.currentTarget || t.target : this
          , e = t.param[0]
          , i = t.param[1]
          , s = t.param[2]
          , n = h.loadingList.indexOf(t)
          , n = (0 <= n && h.loadingList.splice(n, 1),
        200 === t.status || 0 === t.status);
        (n = t.responseText || -1 != e.indexOf("gameNotice?platCode") ? n : !1) ? i && i.runWith(t.responseText) : -1 != e.indexOf(h.clickUrl.replace(/^http\:\/\//i, "https://")) ? i && i.runWith(null) : (n = "[" + t.status + "]" + t.statusText + ":" + t.responseURL,
        console.log(n),
        0 < s ? (p.ins && p.ins.setLoading(d.getI18(20017) + (2 - s + 1) + d.getI18(20018)),
        w.onIOS ? h.load(e, i, s - 1) : setTimeout(function() {
            h.load(e, i, s - 1)
        }, 1e3 * (3 - s))) : (h.sendError(n + d.getI18(20016) + "---" + e),
        h.alert2(d.getI18(20016), h.refresh)))
    }
    ,
    h.alert2 = function(t, e) {
        h.IsFate && Vi.ins.EndGame(),
        e = e || function() {}
        ,
        r.isConchApp && w.window.g_showAlert ? w.window.g_showAlert(d.getI18(20019), t, d.getI18(20020), e) : w.onMiniGame ? Bs.ins.showModal(t, d.getI18(20019), e) : w.onVVMiniGame ? w.window.qg.showDialog({
            title: d.getI18(20019),
            message: t,
            buttons: [{
                text: "确定",
                color: "#ffffff"
            }]
        }) : w.onKSMiniGame ? ks.ins.showModal(t, d.getI18(20019), e) : (alert(t),
        e())
    }
    ,
    h.onLoadError = function(t) {
        var t = t && "string" != typeof t ? t.currentTarget || t.target : this
          , e = t.param[0]
          , i = t.param[1]
          , s = t.param[2]
          , n = h.loadingList.indexOf(t);
        0 <= n && h.loadingList.splice(n, 1),
        -1 != e.indexOf(h.clickUrl.replace(/^http\:\/\//i, "https://")) ? i && i.runWith(null) : (n = "[" + t.status + "]" + t.statusText + ":" + t.responseURL + " url:" + e + " ",
        console.log(n),
        0 < s ? w.onIOS ? h.load(e, i, s - 1) : setTimeout(function() {
            h.load(e, i, s - 1)
        }, 1e3 * (3 - s)) : (h.sendError(n + d.getI18(20016) + "--onLoadError--" + e),
        h.alert2(d.getI18(20021), h.refresh)))
    }
    ,
    h.loadNext = function() {
        var t, e;
        h.loadIndex >= h.loadList.length || ((t = h.loadList[h.loadIndex++]) ? t.src ? (e = t.src,
        t.useRandom && (e += "?v=" + Math.random()),
        t.clickType && h.send(t.clickType),
        h.cdnIndex = 0,
        h.loadScript(e, b.create(h, function() {
            t.endType && h.send(t.endType),
            null != t.callback && t.callback(),
            t.next && h.loadIndex < h.loadList.length && h.loadNext()
        }), t.label, t.total)) : (t.callback && t.callback(),
        t.next && h.loadIndex < h.loadList.length && h.loadNext()) : h.loadNext())
    }
    ,
    h.loadScript = function(t, e, i, s, n) {
        void 0 === n && (n = 3);
        var o = x.timer.currTimer
          , a = 0 <= t.indexOf("http://") || 0 <= t.indexOf("https://")
          , r = w.document.createElement("script");
        r.type = "text/javascript",
        r.onload = function() {
            console.log(d.getI18(20022) + i + d.getI18(20023) + (x.timer.currTimer - o)),
            e && x.timer.frameOnce(2, null, function() {
                e.run()
            })
        }
        ,
        r.onerror = function() {
            h.cdnIndex++,
            r.parentNode.removeChild(r),
            h.cdnIndex < h.cdnList.length ? h.loadScript(t, e, i, s, n) : (h.cdnIndex = 0) < n ? h.loadScript(t, e, i, s, n - 1) : (h.sendError(d.getI18(20024) + t),
            h.alert2(d.getI18(20025), h.refresh))
        }
        ,
        r.src = a ? t : h.getUrl(t, h.cdnIndex),
        p.ins.copymsg += "加载" + (a ? t : h.getUrl(t, h.cdnIndex)) + w.now() + "\n",
        p.ins.setLoading(i),
        w.document.getElementsByTagName("head")[0].appendChild(r)
    }
    ,
    h.getUrl = function(t, e) {
        return t = Ot.published && (t = h.cdnList[e] + t,
        h.useHttps) ? t.replace(/^http\:\/\//i, "https://") : t
    }
    ,
    h.initVer = function() {
        w.window.h5jsUrl ? (h.loadList[h.loadList.length - 1].src = h5jsUrl,
        r.isConchApp ? Li.ins.downDccFile(b.create(null, h.loadNext)) : h.loadNext()) : (h.sendError(d.getI18(20026)),
        h.alert2(d.getI18(20027), h.refresh))
    }
    ,
    h.step = function(t, e) {
        p.ins && p.ins.m_loginRoot ? (h._stepBtn || ((h._stepBtn = new U).skin = "x5_login/gamebutton_green.png",
        h._stepBtn.x = 384,
        h._stepBtn.y = 200,
        h._stepBtn.on("click", null, function() {
            var t;
            h._onStep && (t = h._onStep,
            h._onStep = null,
            t.run())
        }),
        p.ins.m_loginRoot.addChild(h._stepBtn)),
        h._stepBtn.label = t,
        h._stepBtn.parent.setChildIndex(h._stepBtn, h._stepBtn.parent.numChildren - 1),
        h._onStep = e) : e.run()
    }
    ,
    h.sendPostCodeInfo = function(t) {
        if (w.onMiniGame)
            var e = require("md5.js");
        else if (!w.window.hex_md5)
            return void h.loadScript("md5.js", b.create(h, function() {
                w.window.hex_md5 ? h.sendPostCodeInfo(t) : console.error("sendPostCodeInfo loadmd5js fail???")
            }), "", 0);
        var i = new G
          , s = h.postInfoUrl
          , n = (h.useHttps && (s = s.replace(/^http\:\/\//i, "https://")),
        JSON.stringify({
            gid: g.gid,
            pid: g.PID,
            token: encodeURI(h.token),
            time: h.time,
            sign: h.sign,
            appVer: h.appVer,
            platCode: h.platCode,
            IMEI: h.IMEI
        }))
          , o = w.now()
          , a = (a = "id=" + t) + ("&data=" + n) + ("&time=" + o);
        w.onMiniGame ? a += "&sign=" + e.md5(t + o.toString() + "pcjgv587!?") : a += "&sign=" + w.window.hex_md5(t + o.toString() + "pcjgv587!?"),
        console.log("post:" + a),
        i.send(s, a, "post")
    }
    ,
    h.token = null,
    h.uid = null,
    h.serverid = 0,
    h.refer = null,
    h.IMEI = null,
    h.IDFV = null,
    h.platCode = "37wan",
    h.time = null,
    h.sign = null,
    h.appVer = null,
    h.hw_time = null,
    h.sdkLogined = !1,
    h.isSdkClosed = !1,
    h.isIpv6 = !0,
    h.ipv4Ip = "",
    h.androidRealHeight = 0,
    h.appOreoMyImei = "",
    h.importServerData = null,
    h.selectedServer = null,
    h.isNewRole = !1,
    h.wxVerSucc = !1,
    h.firstMainJsSucc = !1,
    h.allMainJsSucc = !1,
    h.isloadSub = !0,
    h.noticeData = null,
    h.noticeInfoData = null,
    h.userProData = null,
    h.userProInfoData = null,
    h.rightAgeUrl = null,
    h.showOhosUnBind = !1,
    h.privacyPolicyData = null,
    h.battleSoulChooseData = null,
    h.ageData = null,
    h.debugTime = !1,
    h.USE_ALL = NaN,
    h.USE_LOGIN = NaN,
    h.USE_SDK_LOGIN = NaN,
    h.USE_LOGIN3 = NaN,
    h.USE_LOGIN2 = NaN,
    h.USE_ENTER = NaN,
    h.USE_GAMEINIT = NaN,
    h.USE_FILEXML = NaN,
    h.USE_CFG = NaN,
    h.USE_PRELOADRES = NaN,
    h.USE_SOCKET = NaN,
    h.USE_PROTOCO = NaN,
    h.USE_LOADMAIN = NaN,
    h.USE_INITGAME = NaN,
    h.USE_ENDLOADING = NaN,
    h.USE_SUBMODULE = NaN,
    h.serverData = null,
    h._loginDetailData = null,
    h.cdnIndex = 0,
    h.loadIndex = 0,
    h.roleName = null,
    h.sex = 0,
    h.soul = 0,
    h.loadingList = [],
    h._mainCdn = null,
    h.winspace = 50,
    h.s_printNetMsg = !1,
    h.logtime1 = 0,
    h.testwx = !1,
    h.IsFate = !1,
    h.fate = 0,
    h.s_testMaskCache = !1,
    h.s_testOpenLog = !1,
    h._httpRequest = null,
    h.sendAppOreoCount = 0,
    h.islocal = !1,
    h.ServerRoleInfo = {},
    h.s_onScriptComplete = null,
    h._stepBtn = null,
    h._onStep = null,
    h.WarningTime = 0,
    O(h, ["useHttps", function() {
        return this.useHttps = 0 <= w.window.location.href.indexOf("https:")
    }
    , "androidNotchStatus", function() {
        return this.androidNotchStatus = -1
    }
    , "wxServerId", function() {
        return this.wxServerId = [99995, 99998, 99907, 99908, 99909]
    }
    , "cdnList", function() {
        return this.cdnList = [""]
    }
    , "loadList", function() {
        return this.loadList = [{
            src: "ver.js",
            clickType: 3015,
            endType: 3016,
            label: d.getI18(2e4),
            callback: h.initVer,
            next: !1,
            useRandom: !1
        }, {
            src: "zlib.min.js",
            clickType: 3011,
            endType: 3018,
            label: d.getI18(20001),
            callback: null,
            next: !0,
            useRandom: !1
        }, {
            src: "js/main.js",
            clickType: 3012,
            endType: 3019,
            label: d.getI18(20002),
            callback: h.finishLoadScript,
            next: !0,
            useRandom: !1
        }]
    }
    , "wxOrKuaiShous", function() {
        return this.wxOrKuaiShous = ["145001-145999", "166001-166999"]
    }
    , "s_needReplaces", function() {
        return this.s_needReplaces = ["6ib5h.com", "094j35.com", "44hier.com", "xvin7vbp.com", "b2fyzdw2.com", "wzmcevlx.com", "a5g90til.com", "osqwsf25.com", "vwk2ngk7.com", "8bnpztdi.com", "00w1jpcg.com", "fp6gwefi.com"]
    }
    ]),
    h);
    function h() {}
    t(Nt, "app.AppDispatcher"),
    O(Nt, ["dispatcher", function() {
        return this.dispatcher = new V
    }
    ]);
    var Mt = Nt;
    function Nt() {}
    t(o, "app.ConchSDK"),
    o.sdkcall = function(t, e, i, s) {
        if (void 0 === s && (s = !1),
        w.onOhos)
            return w.window.conch.setGameJsOnMessage && w.window.conch.postMessage ? (o.callbacks || (o.callbacks = {},
            w.window.conch.setGameJsOnMessage(function(t, e) {
                o.callbacks[t] && o.callbacks[t](t, JSON.parse(e))
            })),
            o.callbacks[t] = i,
            void (s || w.window.conch.postMessage(t, JSON.stringify(e)))) : void alert("ohos初始化失败");
        var n;
        w.window.PlatformClass && (s = !!w.window.navigator.userAgent.match(/\((Macintosh|iPhone|iPad)\;/),
        null == o.bridge && (n = w.window.g_replaceGid || "SdkMgr",
        o.bridge = w.window.PlatformClass.createClass(s ? n : "com.jiguang.h5." + n)),
        null == o.callbacks && (o.callbacks = {}),
        (n = {}).cmd = t,
        n.cxt = e,
        e = JSON.stringify(n),
        o.callbacks[t] = i,
        o.bridge.callWithBack(function(t) {
            t = JSON.parse(t);
            t.cmd && null != o.callbacks[t.cmd] && o.callbacks[t.cmd](t.cmd, null == t.cxt ? {} : t.cxt)
        }, s ? w.window.isNewConchSdk ? "NativeInvoce:" : "OnCall:" : "OnCall", e))
    }
    ,
    o.listen = function(t, e) {
        o.sdkcall(t, {}, e, !0)
    }
    ,
    o.pushSwitchAccount = function(t) {
        o.listen("pushSwitchAccount", t)
    }
    ,
    o.pushBackToGameLogin = function(t) {
        o.listen("pushBackToGameLogin", t)
    }
    ,
    o.pushShowExitDailog = function(t) {
        o.listen("pushShowExitDailog", t)
    }
    ,
    o.pushGetuiClientId = function(t) {
        o.listen("pushGetuiClientId", t)
    }
    ,
    o.pushPause = function(t) {
        o.listen("pushPause", t)
    }
    ,
    o.pushResume = function(t) {
        o.listen("pushResume", t)
    }
    ,
    o.login = function(t) {
        o.sdkcall("login", {}, t)
    }
    ,
    o.changeAccount = function(t) {
        o.sdkcall("changeAccount", {}, t)
    }
    ,
    o.pay = function(t) {
        o.sdkcall("pay", t, null)
    }
    ,
    o.creatRoleInfo = function(t) {
        o.sdkcall("creatRoleInfo", t, null)
    }
    ,
    o.submitRoleInfo = function(t) {
        o.sdkcall("submitRoleInfo", t, null)
    }
    ,
    o.upgradeRoleInfo = function(t) {
        o.sdkcall("upgradeRoleInfo", t, null)
    }
    ,
    o.getAppConfig = function(t) {
        o.sdkcall("getAppConfig", {}, t)
    }
    ,
    o.getSign = function(t) {
        var e = "zh" != g.Language ? c.hw_time : Math.floor((new Date).getTime() / 1e3) + ""
          , i = !!w.window.navigator.userAgent.match(/\((iPhone|iPad)\;/);
        return o.sdkcall("getSign", {
            os: i ? "Ios" : "Android",
            time: e
        }, t),
        e
    }
    ,
    o.getIMEI = function(t) {
        o.sdkcall("getIMEI", {}, t)
    }
    ,
    o.showSQPersonal = function() {
        o.sdkcall("showSQPersonal", {}, null)
    }
    ,
    o.showWebView = function(t) {
        o.sdkcall("showWebView", {
            url: t
        }, null)
    }
    ,
    o.showUAgreement = function() {
        o.sdkcall("showUAgreement", {}, null)
    }
    ,
    o.setShare = function(t) {
        o.sdkcall("setShare", {
            shareId: t
        }, null)
    }
    ,
    o.showCommonUrl = function(t, e) {
        o.sdkcall("showCommonUrl", {
            url: t,
            isBrowser: e = void 0 === e ? "n" : e
        }, null)
    }
    ,
    o.gameOffline = function(t) {
        o.listen("gameOffline", t)
    }
    ,
    o.checkIpv = function(t, e) {
        o.sdkcall("checkIpv", {
            url: t
        }, e)
    }
    ,
    o.rightAgeImgUrl = function(t) {
        o.listen("rightAgeImgUrl", t)
    }
    ,
    o.showRightAge = function() {
        o.sdkcall("showRightAge", {}, null)
    }
    ,
    o.ohosIsBind = function(t) {
        o.sdkcall("ohosIsBind", {}, t)
    }
    ,
    o.ohosUnBind = function() {
        o.sdkcall("ohosUnBind", {}, null)
    }
    ,
    o.sdkLoginClose = function(t) {
        o.listen("sdkLoginClose", t)
    }
    ,
    o.sdkOpenLink = function(t) {
        o.sdkcall("sdkOpenLink", {
            url: t
        }, null)
    }
    ,
    o.openUrl = function(t) {
        o.sdkcall("openUrl", {
            url: t
        }, null)
    }
    ,
    o.setClip = function(t) {
        o.sdkcall("setClip", {
            content: t
        }, null)
    }
    ,
    o.getClip = function(t) {
        o.sdkcall("getClip", {}, t)
    }
    ,
    o.getSignalInfo = function(t) {
        o.sdkcall("getSignalInfo", {}, t)
    }
    ,
    o.performFeatureBBS = function() {
        o.sdkcall("performFeatureBBS", {}, null)
    }
    ,
    o.performFeatureVPlayer = function() {
        o.sdkcall("performFeatureVPlayer", {}, null)
    }
    ,
    o.captureScreenListen = function(t) {
        o.listen("captureScreenListen", t)
    }
    ,
    o.captureScreenFinish = function(t) {
        var e = {};
        e.svpath = t,
        o.sdkcall("captureScreenFinish", e, null)
    }
    ,
    o.userCenter = function() {
        o.sdkcall("userCenter", {}, null)
    }
    ,
    o.fbShare = function(t) {
        o.sdkcall("fbShare", t, null)
    }
    ,
    o.onlineChat = function() {
        o.sdkcall("onlineChat", {}, null)
    }
    ,
    o.onShowFAQ = function() {
        o.sdkcall("onShowFAQ", {}, null)
    }
    ,
    o.trackEvent = function(t, e, i) {
        var s = {};
        s.eventType = t,
        s[e] = i,
        o.sdkcall("trackEvent", s, null)
    }
    ,
    o.getProductDetail = function(t, e) {
        o.sdkcall("getProductDetail", {
            productIds: t
        }, e)
    }
    ,
    o.scanCode = function(t) {
        o.sdkcall("scanCode", {}, t)
    }
    ,
    o.androidRealHeight = function(t) {
        o.sdkcall("androidRealHeight", {}, t)
    }
    ,
    o.sendAppOreo = function(t) {
        o.sdkcall("sendAppOreo", {}, t)
    }
    ,
    o.sendedAppOreo = function() {
        o.sdkcall("sendedAppOreo", {}, null)
    }
    ,
    o.traceGameInitSucc = function() {
        o.sdkcall("traceGameInitSucc", {}, null)
    }
    ,
    o.traceRoleCreation = function(t) {
        o.sdkcall("traceRoleCreation", t, null)
    }
    ,
    o.bridge = null,
    o.callbacks = null;
    var Dt = o;
    function o() {}
    t(Et, "app.Debuger"),
    Et.Log = function(t) {
        1e3 < (Et.str = t + "\r\n" + Et.str).length && (Et.str = Et.str.slice(0, 1e3))
    }
    ,
    Et.show = function() {
        w.window.com && (com.utils.GameLog.clearScreen(),
        com.utils.GameLog.traceToScreen(Et.str))
    }
    ,
    Et.str = "";
    function Et() {}
    t(l, "app.GameLogin"),
    (v = l.prototype).init = function() {
        X.init(),
        r.isConchApp && Li.ins.init(),
        w.window.navigator && w.window.navigator.userAgent && -1 < w.window.navigator.userAgent.indexOf("VVGame") && w.window.hasOwnProperty("qg") ? Ls.ins.init() : 0 <= w.window.navigator.userAgent.indexOf("Kwai") && w.window.hasOwnProperty("ks") ? ks.ins.init() : w.window.navigator && w.window.navigator.userAgent && -1 != w.window.navigator.userAgent.indexOf("MiniGame") && Bs.ins.init();
        var t = w.width
          , e = w.height
          , i = t / e;
        i < l.s_minWidth / l.s_height ? (t = l.s_minWidth,
        e = Math.round(t / i)) : (e = l.s_height,
        t = Math.round(e * i)),
        x.init(t, e, W),
        x.stage.scaleMode = "fixedheight",
        this.deviceInfo2Set(),
        j.regComponent("HTMLDivElement", Y),
        Ht.init(),
        this.initLoginRoot(),
        null == a.getItem("language_key") || "" == a.getItem("language_key") ? (g.initLangType = g.defaultLang,
        a.setItem("language_key", g.Language)) : g.initLangType = a.getItem("language_key"),
        Ht.lastError += "|GameLogin.init",
        c.startLogin()
    }
    ,
    v.loadFilesXmlWx = function(n) {
        var o = filesXML;
        if (Ot.isSupportAtlasMix)
            if (Ot.isSupportPvr)
                o = o.replace(/^(.*)\.(.*)$/, "$1_mix_pvr.$2");
            else {
                if (!Ot.isSupportEtc)
                    throw new Error("loadFilesXml ver 严重逻辑错误.图集mix功能的使用必须依赖etc/pvr");
                o = o.replace(/^(.*)\.(.*)$/, "$1_mix_etc.$2")
            }
        else
            Ot.isSupportPvr ? o = o.replace(/^(.*)\.(.*)$/, "$1_pvr.$2") : Ot.isSupportEtc && (o = o.replace(/^(.*)\.(.*)$/, "$1_etc.$2"));
        c.USE_FILEXML = w.now(),
        x.loader.load(o, b.create(this, function(t) {
            if (t) {
                for (var e = new Oi, i = (e.writeArrayBuffer(t),
                e.endian = "littleEndian",
                e.position = 0,
                e.uncompress(),
                []), s = ee.readInt(e); s--; )
                    i.push(ee.readUTF(e));
                function r(t, e, i, s) {
                    for (var n = 0; n < e; ++n) {
                        var o = i[ee.readInt(s)]
                          , a = ee.readInt(s);
                        -1 == a ? t[o] = i[ee.readInt(s)] : (t[o] = o = {},
                        r(o, a, i, s))
                    }
                }
                Ot.verUrls = {},
                r(Ot.verUrls, ee.readInt(e), i, e),
                e.clear(),
                x.loader.clearRes(o, !0),
                e = null,
                H.customFormat = Ot.getRealLoadUrl,
                c.USE_FILEXML = w.now() - c.USE_FILEXML,
                n && n.run()
            } else
                Ht.sendError("下载版本文件失败:" + o),
                c.alert2("加载版本文件失败1,尝试刷新游戏", c.refresh)
        }), null, "arraybuffer")
    }
    ,
    v.loadCfgPreWx = function(t) {
        (new com.Game).loadCfgPreWx(t)
    }
    ,
    v.deviceInfo2Set = function() {
        var t = {};
        (t = w.window.conch && w.window.conch.config.getDeviceInfo ? JSON.parse(w.window.conch.config.getDeviceInfo()) : t) && t.phonemodel && console.log("---phonemodel: " + t.phonemodel),
        t && t.phonemodel && ("PEUM00" == t.phonemodel || "PGU110" == t.phonemodel) && .83 < w.clientWidth / w.clientHeight && w.window.conchConfig && w.window.conchConfig.setScreenOrientation(0)
    }
    ,
    v.initLoginRoot = function() {
        var t = this;
        this.m_loginRoot = new z,
        this.m_loginRoot.width = 768,
        this.m_loginRoot.height = 1024,
        x.stage.addChild(this.m_loginRoot),
        r.isConchApp ? w.window.addEventListener("resize", function() {
            x.timer.frameOnce(8, l.ins, t.resizeCompleteHandler)
        }) : w.window.onresize = function() {
            x.timer.frameOnce(8, l.ins, t.resizeCompleteHandler)
        }
        ,
        w.window.refresh = function() {
            w.window.location.reload()
        }
        ,
        this.resizeCompleteHandler()
    }
    ,
    v.openLoginPanel = function() {
        this.m_loginRoot ? (this.m_loginPanel = new Ao,
        this.m_loginRoot.addChild(this.m_loginPanel),
        this.m_loginPanel.open(),
        this.m_loginPanel.setState("State_none")) : (console.error("外网这里报空，不知道原因"),
        c.alert2("打开登录界面失败,尝试刷新游戏", c.refresh))
    }
    ,
    v.resizeCompleteHandler = function() {
        if (this.m_loginRoot) {
            var t, e = l.s_width, i = l.s_height;
            "noscale" != x.stage.scaleMode ? (t = x.stage.height / i,
            this.m_loginRoot.scale(t, t),
            this.m_loginRoot.x = (x.stage.width - e * t) / 2,
            this.m_loginRoot.height = i,
            this.m_loginRoot.width = Math.min(x.stage.width * i / x.stage.height, e)) : (t = w.height / i,
            this.m_loginRoot.scale(t, t),
            this.m_loginRoot.x = (w.width - e * t) / 2,
            this.m_loginRoot.height = i,
            this.m_loginRoot.width = Math.min(w.width * i / w.height, e));
            for (var s = 0; s < this.m_loginRoot.numChildren; ++s) {
                var n = this.m_loginRoot.getChildAt(s);
                x.__typeof(n, Gn) && n.resize()
            }
        }
    }
    ,
    v.showInput = function(t, e, i) {
        this.m_inputNamePanel || (this.m_inputNamePanel = new yo,
        this.m_loginRoot.addChild(this.m_inputNamePanel)),
        this.m_inputNamePanel.strUsername = t,
        this.m_inputNamePanel.strPassword = e,
        this.m_inputNamePanel.onOk = i,
        this.m_inputNamePanel.open()
    }
    ,
    v.showPcCodePanel = function() {
        this.m_loginPcCodePanel || (this.m_loginPcCodePanel = new Mo,
        this.m_loginRoot.addChild(this.m_loginPcCodePanel)),
        this.m_loginPcCodePanel.open()
    }
    ,
    v.showLoginTalk = function(t) {
        var e = this;
        t ? Ho.preLoad(b.create(this, function() {
            e.m_loginTalkPanel || (e.m_loginTalkPanel = new Ho,
            e.m_loginRoot.addChild(e.m_loginTalkPanel)),
            e.m_loginTalkPanel.open()
        })) : this.m_loginTalkPanel && this.m_loginTalkPanel.close()
    }
    ,
    v.showMessageBox = function(t, e, i, s, n, o, a, r) {
        void 0 === a && (a = !0),
        void 0 === r && (r = !1),
        this.m_messageBoxPanel || (this.m_messageBoxPanel = new Io,
        this.m_loginRoot.addChild(this.m_messageBoxPanel)),
        this.m_messageBoxPanel.showMessageBox(t, e, i, s, n, o, a, r)
    }
    ,
    v.forceCloseMessageBox = function() {
        this.m_messageBoxPanel && this.m_messageBoxPanel.close()
    }
    ,
    v.showSelectServer = function() {
        function e() {
            t.m_selectServerPanel || (t.m_selectServerPanel = new Eo,
            t.m_loginRoot.addChild(t.m_selectServerPanel)),
            c.getRoleInfo(),
            t.m_selectServerPanel.open()
        }
        var i, t = this;
        g.isDebugMode ? (c.serverData = tempServer,
        e()) : (i = c.loginUrl.replace(/\$1/g, g.PID).replace(/\$2/g, c.uid).replace(/\$3/g, c.appVer).replace(/\$4/g, "").replace(/\$5/g, c.platCode).replace(/\$6/g, g.gid),
        i += "&v=" + (new Date).getTime(),
        c.load(i, b.create(null, function(t) {
            l.ins.m_loginRoot && (t ? (w.window.loginDataFromJG.push(i + "\n" + t),
            c.serverData = JSON.parse(t),
            e()) : (console.info("err  " + i + ":" + t),
            c.sendError("加载错误:" + i + ":" + t),
            alert("选服加载错误")))
        })))
    }
    ,
    v.closeNoticePanel = function() {
        this.m_noticePanel && this.m_noticePanel.close()
    }
    ,
    v.showNotice = function() {
        var e, t = this, i = a.getItem("privacyStatu_" + g.PID + "_" + g.account);
        w.window.qq && !i && "0" != i || (e = function() {
            t.m_noticePanel || (t.m_noticePanel = new Po,
            t.m_loginRoot.addChild(t.m_noticePanel)),
            t.m_noticePanel.setIsNotice(1),
            t.m_noticePanel.open()
        }
        ,
        c.noticeInfoData ? e() : g.isDebugMode ? (c.noticeInfoData = {
            desc: "暂无公告<br>"
        },
        e()) : (i = c.noticeUrl.replace(/\$1/g, c.platCode).replace(/\$2/g, g.PID).replace(/\$3/g, g.gid),
        i += "&v=" + (new Date).getTime(),
        c.load(i, b.create(this, function(t) {
            l.ins.m_loginRoot && (t = t || '{"desc":"暂无公告"}',
            c.noticeInfoData = JSON.parse(t),
            e())
        }))))
    }
    ,
    v.showBackActPanel = function() {
        this.m_x5BackActPanel || (this.m_x5BackActPanel = new lo,
        this.m_loginRoot.addChild(this.m_x5BackActPanel)),
        this.m_x5BackActPanel.open()
    }
    ,
    v.showBackReservationPanel = function() {
        var s, t, e, i, n = this;
        "true" == a.getItem("brtips9") || w.onVVMiniGame || w.onKSMiniGame || (w.antiMiniGame || w.window.hex_md5 ? (s = 0,
        a.getItem("isbrtips9") && (s = parseInt(a.getItem("isbrtips9"))),
        g.isDebugMode ? this.showBackReservationPanel2(s, 0 < s) : (t = w.now(),
        e = w.antiMiniGame ? require("md5.js").md5(c.uid + t.toString() + "adqFD1wmf7wFbkTu") : w.window.hex_md5(c.uid + t.toString() + "adqFD1wmf7wFbkTu"),
        i = (i = (i = (i = "http://xxh5outer.996a.com/api/subscribe?&uid=$1&time=$2&sign=$3").replace(/\$1/g, c.uid)).replace(/\$2/g, t)).replace(/\$3/g, e),
        i += "&v=" + (new Date).getTime(),
        c.load(i, b.create(this, function(t) {
            var e, i = JSON.parse(t);
            1 == i.state && i.data ? (e = s == i.data.cnt + 1 ? s : i.data.cnt,
            n.showBackReservationPanel2(e, i.data.is_sub)) : console.error("showBackReservationPanel error", t)
        }), 1, null, !1))) : c.loadScript("md5.js", b.create(this, function() {
            w.window.hex_md5 ? n.showBackReservationPanel() : console.error("登录失败，原因：加载md5.js失败")
        }), "", 0))
    }
    ,
    v.showBackReservationPanel2 = function(t, e) {
        this.m_x5BackReservationPanel || (this.m_x5BackReservationPanel = new po,
        this.m_loginRoot.addChild(this.m_x5BackReservationPanel)),
        this.m_x5BackReservationPanel.reserNum = t,
        this.m_x5BackReservationPanel.isReserSucc = e,
        this.m_x5BackReservationPanel.open()
    }
    ,
    v.showItemTips = function(t) {
        this.m_AppItemTipsPanel || (this.m_AppItemTipsPanel = new oo,
        this.m_loginRoot.addChild(this.m_AppItemTipsPanel)),
        this.m_AppItemTipsPanel.itemId = t,
        this.m_AppItemTipsPanel.open(),
        this.m_AppItemTipsPanel.updateView()
    }
    ,
    v.isTime = function(t, e) {
        var t = new Date(t).getTime()
          , e = new Date(e).getTime()
          , i = (new Date).getTime();
        return t <= i && i <= e
    }
    ,
    v.userProIsOpened = function() {
        return !(!this.m_noticePanel || !this.m_noticePanel.parent || this.m_noticePanel.getIsNotice())
    }
    ,
    v.clearMiniGameFile = function() {
        w.onMiniGame ? Bs.ins.clearAllFile() : w.isMiniBase && Di.inst.clearAllFile()
    }
    ,
    v.showUserPro = function() {
        var t = this;
        c.userProInfoData ? (t.m_noticePanel || (t.m_noticePanel = new Po,
        t.m_loginRoot.addChild(t.m_noticePanel)),
        t.m_noticePanel.setIsNotice(2),
        t.m_noticePanel.open()) : (t = 0 <= Ao.userProGIdArr_ad.indexOf(g.gid + "") && 0 <= Ao.userProPidArr_ad.indexOf(g.PID + "") ? "img/userProtocol_ad.json" : 0 <= Ao.userProGIdArr_hjy.indexOf(g.gid + "") && 0 <= Ao.userProPidArr_hjy.indexOf(g.PID + "") ? "img/userProtocol_hjy.json" : 0 <= Ao.userProPidArr_hjy2.indexOf(g.PID + "") ? "img/userProtocol_hjy2.json" : 0 <= Ao.userProPidArr_yl.indexOf(g.PID + "") ? "img/userProtocol_yl.json" : 0 <= Ao.userProPidArr_xy.indexOf(g.PID + "") ? "img/userProtocol_xy.json" : w.onMiniGame ? "484" == g.PID || "442" == g.PID ? "img/userProtocol_wx.json" : "img/userProtocol_qq.json" : w.onVVMiniGame ? "img/userProtocol_oppo.json" : w.onKSMiniGame ? "img/userProtocol_ks.json" : "img/userProtocol.json",
        t = d.getImgPath(t),
        w.antiMiniGame && (t = H.formatURL(t)),
        this.getUserPro(t))
    }
    ,
    v.showPrivacyPolicy = function() {
        var t = this;
        c.privacyPolicyData ? (t.m_noticePanel || (t.m_noticePanel = new Po,
        t.m_loginRoot.addChild(t.m_noticePanel)),
        t.m_noticePanel.setIsNotice(3),
        t.m_noticePanel.open()) : (t = 0 <= Ao.userProGIdArr_hjy.indexOf(g.gid + "") && 0 <= Ao.userProPidArr_hjy.indexOf(g.PID + "") ? "img/privacyPolicy_hjy.json" : 0 <= Ao.userProPidArr_hjy2.indexOf(g.PID + "") ? "img/privacyPolicy_hjy2.json" : 0 <= Ao.userProPidArr_yl.indexOf(g.PID + "") ? "img/privacyPolicy_yl.json" : 0 <= Ao.userProPidArr_xy.indexOf(g.PID + "") ? "img/privacyPolicy_xy.json" : w.onMiniGame ? "484" == g.PID || "442" == g.PID ? "img/privacyPolicy_wx.json" : "img/privacyPolicy_qq.json" : w.onVVMiniGame ? "img/privacyPolicy_oppo.json" : w.onKSMiniGame ? "img/privacyPolicy_ks.json" : "img/privacyPolicy.json",
        t = d.getImgPath(t),
        w.antiMiniGame && (t = H.miniLoginPath ? H.miniLoginPath + t : H.formatURL(t)),
        this.getPrivacyPolicy(t))
    }
    ,
    v.showAgeHandler = function() {
        var t = this;
        c.ageData ? (t.m_noticePanel || (t.m_noticePanel = new Po,
        t.m_loginRoot.addChild(t.m_noticePanel)),
        t.m_noticePanel.setIsNotice(4),
        t.m_noticePanel.open()) : (t = w.onIOS ? "img/ageTip_ios.json" : "img/ageTip.json",
        t = d.getImgPath(t),
        w.antiMiniGame && (t = H.formatURL(t)),
        this.getAgeData(t))
    }
    ,
    v.getUserPro = function(t) {
        (l._httpRequest = l._httpRequest ? l._httpRequest : new G).on("complete", this, this.userProOnLoad),
        l._httpRequest.on("error", this, this.userProOnError),
        l.useHttps && (t = t.replace(/^http\:\/\//i, "https://")),
        l._httpRequest.send(t)
    }
    ,
    v.userProOnLoad = function(t) {
        c.userProInfoData = {
            desc: t
        },
        this.showUserPro()
    }
    ,
    v.userProOnError = function(t) {
        c.userProInfoData = {
            desc: " "
        },
        this.showUserPro()
    }
    ,
    v.getPrivacyPolicy = function(t) {
        (l._httpRequest2 = l._httpRequest2 ? l._httpRequest2 : new G).on("complete", this, this.privacyPolicyOnLoad),
        l._httpRequest2.on("error", this, this.privacyPolicyOnError),
        l.useHttps && (t = t.replace(/^http\:\/\//i, "https://")),
        l._httpRequest2.send(t)
    }
    ,
    v.privacyPolicyOnLoad = function(t) {
        c.privacyPolicyData = {
            desc: t
        },
        this.showPrivacyPolicy()
    }
    ,
    v.privacyPolicyOnError = function(t) {
        c.privacyPolicyData = {
            desc: " "
        },
        this.showPrivacyPolicy()
    }
    ,
    v.getAgeData = function(t) {
        (l._httpRequest3 = l._httpRequest3 ? l._httpRequest3 : new G).on("complete", this, this.ageDataOnLoad),
        l._httpRequest3.on("error", this, this.ageDataOnError),
        l.useHttps && (t = t.replace(/^http\:\/\//i, "https://")),
        l._httpRequest3.send(t)
    }
    ,
    v.ageDataOnLoad = function(t) {
        c.ageData = {
            desc: t
        },
        this.showAgeHandler()
    }
    ,
    v.ageDataOnError = function(t) {
        c.ageData = {
            desc: " "
        },
        this.showAgeHandler()
    }
    ,
    v.showCreateRole = function(e) {
        var t, i = this;
        this.m_isCreateRolePanelOpen || (this.m_loginRoot ? (this.m_isCreateRolePanelOpen = !0,
        w.window.SQSDK && w.window.SQSDK.preCreateRole && ((t = {}).dsid = g.SERVER,
        t.dsname = g.serverName,
        t.acttime = Math.floor(w.now() / 1e3),
        w.antiMiniGame && (t.gid = g.gid,
        t.pid = g.PID),
        SQSDK.preCreateRole(t, function() {})),
        w.onMiniGame && ("484" == g.PID ? c.send("40011") : "442" == g.PID ? c.send("40012") : c.send("4001")),
        mo.preLoad(b.create(this, function() {
            var t;
            g.isReplace && r.isConchApp && w.onIOS && ((t = {}).serverId = g.SERVER,
            t.serverName = g.serverName,
            t.roleId = "1",
            t.roleName = "unknown",
            t.roleLevel = "1",
            t.balance = "0",
            t.partyName = "",
            t.vipLevel = "0",
            t.roleCTime = "0",
            t.type = "create",
            t.openTime = "0",
            Dt.submitRoleInfo(t)),
            i.m_createRolePanel || (i.m_createRolePanel = new mo,
            i.m_loginRoot.addChild(i.m_createRolePanel)),
            i.m_createRolePanel.m_onClose = function() {
                e.run(),
                w.onMiniGame && ("484" == g.PID ? c.send("40031") : "442" == g.PID ? c.send("40032") : c.send("4003"))
            }
            ,
            c.send("31"),
            i.m_createRolePanel.open(),
            w.onMiniGame && ("484" == g.PID ? c.send("40021") : "442" == g.PID ? c.send("40022") : c.send("4002"))
        }))) : c.alert2("创角界面打开失败,尝试刷新游戏", c.refresh))
    }
    ,
    v.PlayLoginMovie = function(t) {
        c.send("3702"),
        Vi.ins.StartGame(t)
    }
    ,
    v.WxCreateRole = function(t, e, i) {
        this.m_x5WuhunSelectPanel = new Wo,
        this.wuhunSelectPlayerId = e,
        (t || l.ins.m_loginRoot).addChild(this.m_x5WuhunSelectPanel),
        this.m_x5WuhunSelectPanel.open(),
        this.m_x5WuhunSelectPanel.completeHandler = i
    }
    ,
    v.focusToItem = function(t) {
        this.m_x5WuhunSelectPanel.focusToItem(t)
    }
    ,
    v.openWxPreLoadingPanel = function() {
        c.send("37011"),
        this.m_x5LoginLoadingPanel = new wo,
        this.m_x5LoginLoadingPanel.open(),
        l.ins.m_loginRoot.addChild(this.m_x5LoginLoadingPanel)
    }
    ,
    v.closeWxPreLoadingPanel = function() {
        this.m_x5LoginLoadingPanel && this.m_x5LoginLoadingPanel.close()
    }
    ,
    v.setLoading = function(t) {
        this.m_loginPanel && this.m_loginPanel.setLoading(t)
    }
    ,
    v.setTop = function() {
        this.m_loginRoot && this.m_loginRoot.parent.setChildIndex(this.m_loginRoot, this.m_loginRoot.parent.numChildren - 1)
    }
    ,
    v.endLoading = function() {
        var t = this;
        this.m_loginPanel && (c.USE_ENDLOADING = w.now(),
        this.m_loginPanel.endLoading(function() {
            c.IsFate || t.clearLoginThings(),
            w.onOhos && (w.ohosNoChange = !1),
            c.USE_ENDLOADING = w.now() - c.USE_ENDLOADING,
            c.USE_ALL = w.now() - c.USE_ALL,
            c.USE_LOGIN3 = w.now() - c.USE_LOGIN3
        }))
    }
    ,
    v.clearLoginThings = function() {
        if (this.m_loginTalkPanel && this.m_loginTalkPanel.close(),
        this.m_loginRoot) {
            for (var t = 0; t < this.m_loginRoot.numChildren; ++t) {
                var e = this.m_loginRoot.getChildAt(t);
                x.__typeof(e, Gn) && e.close()
            }
            this.m_loginRoot.destroy(),
            this.m_loginRoot = null
        }
        this.m_loginTalkPanel = null,
        this.m_loginPanel = null,
        this.m_inputNamePanel = null,
        this.m_messageBoxPanel = null,
        this.m_selectServerPanel = null,
        this.m_noticePanel = null,
        this.m_createRolePanel = null,
        this.m_loginPcCodePanel = null,
        this.m_x5BackActPanel = null,
        this.m_x5LoginLoadingPanel = null,
        this.m_x5WuhunSelectPanel = null;
        var i, s, n = [], o = /^img\//;
        for (i in $.loadedMap) {
            var a = $.loadedMap[i];
            x.__typeof(a, K) && a.bitmap && a.width == a.bitmap.width && a.height == a.bitmap.height && o.test(i) && -1 == i.indexOf("createrole") && -1 == i.indexOf("female_spine") && -1 == i.indexOf("male_spine") && n.push(i)
        }
        for (s in n)
            i = n[s],
            console.log("回收了:" + i),
            x.loader.clearRes(i, !0),
            x.loader.cancelLoadByUrl(i);
        x.loader.clearRes("img/x5_login.json", !0),
        x.loader.clearRes("img/x5_wuhunWx.json", !0)
    }
    ,
    v.consoleinfo = function(t, e) {
        e = e + ":" + t + "毫秒";
        console.info(e),
        this.copymsg = this.copymsg + e + "\n"
    }
    ,
    v.printLoadingTime = function() {
        c.debugTime && (this.consoleinfo(c.USE_LOGIN, "SDK加载初始化耗时"),
        this.consoleinfo(c.USE_SDK_LOGIN, "37SDKlogin耗时"),
        this.consoleinfo(c.USE_LOGIN3, "点击进入游戏到总endLoading"),
        this.consoleinfo(c.USE_LOGIN2, "导量服请求耗时"),
        this.consoleinfo(c.USE_ENTER, "服务器登录验证耗时"),
        this.consoleinfo(c.USE_GAMEINIT, "startEnterGame ->game.init"),
        this.consoleinfo(c.USE_LOADMAIN, "加载subpack.js耗时"),
        this.consoleinfo(c.USE_FILEXML, "文件列表加载耗时"),
        this.consoleinfo(c.USE_CFG, "配置表加载耗时"),
        this.consoleinfo(c.USE_PRELOADRES, "预加载加载耗时"),
        this.consoleinfo(c.USE_SOCKET, "socket链接耗时"),
        this.consoleinfo(c.USE_PROTOCO, "登录协议总共耗时"),
        this.consoleinfo(c.USE_SUBMODULE, "加载submodulejs耗时"),
        this.consoleinfo(c.USE_INITGAME, "initGame耗时"),
        this.consoleinfo(c.USE_ENDLOADING, "endLoading耗时"),
        this.consoleinfo(c.USE_ALL, "总登录耗时"),
        w.antiMiniGame ? Di.inst.setClipboardData(this.copymsg) : r.isConchApp && Dt.setClip(this.copymsg))
    }
    ,
    v.openLoginWaitPanel = function(t) {
        l.ins.m_loginRoot && (this.m_x5LoginWaitPanel || (this.m_x5LoginWaitPanel = new Vo,
        l.ins.m_loginRoot.addChild(this.m_x5LoginWaitPanel)),
        this.m_x5LoginWaitPanel.showTime(t),
        this.m_x5LoginWaitPanel.open())
    }
    ,
    v.closeLoginWaitPanel = function() {
        this.m_x5LoginWaitPanel && this.m_x5LoginWaitPanel.close()
    }
    ,
    e(0, v, "wuhunSelectPlayerId", function() {
        return l._wuhunSelectPlayerId
    }, function(t) {
        l._wuhunSelectPlayerId = t
    }),
    e(0, v, "wuhunSelectTargetIndex", function() {
        return l._wuhunSelectTargetIndex
    }, function(t) {
        l._wuhunSelectTargetIndex = t
    }),
    e(0, v, "wuhunSelectTargetType", function() {
        return l._wuhunSelectTargetType
    }, function(t) {
        l._wuhunSelectTargetType = t,
        x.stage.event("update_head")
    }),
    e(1, l, "ins", function() {
        return l._ins = l._ins || new l
    }),
    l.s_width = 768,
    l.s_minWidth = 576,
    l.s_height = 1024,
    l._ins = null,
    l._httpRequest = null,
    l._httpRequest2 = null,
    l._httpRequest3 = null,
    l._wuhunSelectPlayerId = null,
    l._wuhunSelectTargetIndex = 0,
    l._wuhunSelectTargetType = 0,
    O(l, ["useHttps", function() {
        return this.useHttps = 0 <= w.window.location.href.indexOf("https:")
    }
    ]);
    var p = l;
    function l() {
        this.m_loginRoot = null,
        this.m_loginPanel = null,
        this.m_inputNamePanel = null,
        this.m_messageBoxPanel = null,
        this.m_selectServerPanel = null,
        this.m_noticePanel = null,
        this.m_createRolePanel = null,
        this.m_loginTalkPanel = null,
        this.m_loginPcCodePanel = null,
        this.m_x5WuhunSelectPanel = null,
        this.m_x5BackActPanel = null,
        this.m_x5BackReservationPanel = null,
        this.m_AppItemTipsPanel = null,
        this.m_x5LoginLoadingPanel = null,
        this.m_x5LoginWaitPanel = null,
        this.m_isCreateRolePanelOpen = !1,
        this.copymsg = ""
    }
    t(u, "app.Global"),
    u.checkInFileList = function(t) {
        return !!t && (g.isDebugMode && -1 != t.indexOf("/.") && -1 == t.indexOf(".txt") ? (console.error("资源为空:" + t),
        !1) : !u.verUrls || 0 == t.indexOf("img/") || 0 == t.indexOf("skins/") || 0 < t.indexOf(":") || -1 != t.search(/\_\d{4,}\.[a-z]*$/i) || null != u.getVersion(t) || (console.error("不在版本号列表,不能加载;" + t),
        !1))
    }
    ,
    u.getRealLoadUrl = function(t, e) {
        var i, s;
        return !t || -1 != t.indexOf("?") || 0 == t.indexOf("img/") || 0 == t.indexOf("skins/") || !u.verUrls || null == (i = u.getVersion(t)) ? t : (s = t.lastIndexOf("."),
        t.substr(0, s) + "_" + i + t.substring(s))
    }
    ,
    u.formatUrlToUrl = function(t) {
        if (0 == t.indexOf(H.basePath))
            t = t.substr(H.basePath.length);
        else
            for (var e = g.CDN_LIST || [], i = 0, s = e.length; i < s; i++)
                if (t.substr(0, e[i].length) == e[i]) {
                    t = t.replace(e[i], "");
                    break
                }
        return t.replace(/^(.*)\_\d{6}\.([^\.]*)$/, "$1.$2")
    }
    ,
    u.getAtlasTextureUrl = function(t) {
        if (!u.isSupportAtlasMix)
            throw new Error("严重逻辑错误，不支持或者关闭了图片meta信息读取,仍然调用getMixTextureUrl." + t);
        var e = (t = u.checkHasNewPath(t) ? u.getRealLangPath(t) : t).lastIndexOf(".json");
        if (-1 == (e = -1 == e ? t.lastIndexOf(".atlas") : e))
            throw new Error("严重逻辑错误，getMixTextureUrl只支持.json.altas。" + t);
        var e = t.substring(0, e)
          , i = e + "_mix.png";
        if (!u.verUrls)
            return i;
        if (null != u.getVersion(i))
            return i;
        if (u.isSupportEtc) {
            if (null != u.getVersion(i = e + ".etc"))
                return i
        } else if (u.isSupportPvr && null != u.getVersion(i = e + ".pvr"))
            return i;
        return console.log("getMixTextureUrl error cannot find in files.xml." + t),
        t
    }
    ,
    u.getTextureUrl = function(t) {
        var e;
        if (-1 != t.indexOf("http"))
            console.log("使用了外部图片:" + t);
        else if (u.checkHasNewPath(t) && (t = u.getRealLangPath(t)),
        u.verUrls && (u.isSupportPvr || u.isSupportEtc) && t.match(/\.(png|jpg|jpeg)\b/i))
            if (u.isSupportPvr) {
                if (e = t.replace(/\.(png|jpg)\b/i, ".pvr"),
                null != u.getVersion(e))
                    return e
            } else if (u.isSupportEtc && (e = t.replace(/\.(png|jpg)\b/i, ".etc"),
            null != u.getVersion(e)))
                return e;
        return t
    }
    ,
    u.checkHasNewPath = function(t) {
        return !(!u.artFontResPacks || !u.artFontResPacks.hasOwnProperty(t)) || !(!u.artResPacks || !u.artResPacks.hasOwnProperty(t))
    }
    ,
    u.getRealLangPath = function(t) {
        return u.artFontResPacks && u.artFontResPacks.hasOwnProperty(t) ? u.artFontResPacks.curKey + t : u.artResPacks && u.artResPacks.hasOwnProperty(t) ? u.artResPacks.curKey + t : t
    }
    ,
    u.getVersion = function(t) {
        if (u.verUrls) {
            for (var e = (t = t.toLowerCase()).toLowerCase().split("/"), i = u.verUrls, s = void 0, n = 0; n < e.length; n++) {
                if (n == e.length - 1) {
                    var o = e[n];
                    if (null != (s = i[o]))
                        break;
                    if (o.match(/\.(json)\b/i)) {
                        if (u.isSupportAtlasMix) {
                            if (null != (s = i[o.replace(/^(.*)\.(.*)$/, "$1_mix.png")]))
                                break;
                            if (u.isSupportEtc) {
                                if (null != (s = i[o.replace(/^(.*)\.(.*)$/, "$1.etc")]))
                                    break
                            } else if (u.isSupportPvr && null != (s = i[o.replace(/^(.*)\.(.*)$/, "$1.pvr")]))
                                break
                        }
                    } else if (o.match(/\.(png|jpg|jpeg)\b/i)) {
                        if (u.isSupportAtlasMix && null != (s = i[o.replace(/^(.*)\.(.*)$/, "$1_mix.png")]))
                            break;
                        if (u.isSupportEtc) {
                            if (null != (s = i[o.replace(/^(.*)\.(.*)$/, "$1.etc")]))
                                break
                        } else if (u.isSupportPvr && null != (s = i[o.replace(/^(.*)\.(.*)$/, "$1.pvr")]))
                            break
                    }
                    break
                }
                if (null == (i = i[e[n]])) {
                    var o = !1
                      , a = u.verUrls.art
                      , a = a ? a.res : null
                      , a = a ? a.hwresource : null
                      , a = a ? a[g.Language] : null;
                    if (!(o = a && (i = a.artfont[e[n]]) && null != i ? !0 : o))
                        return
                }
            }
            return s
        }
    }
    ,
    u.hashCode = function(t) {
        for (var e = 0, i = 0; i < t.length; i++)
            (2147483647 < (e = 31 * e + t.charCodeAt(i)) || e < 2147483648) && (e &= 4294967295);
        return e
    }
    ,
    u.roleScale = 1,
    u.globalScale = 1,
    u.viewWidth = 0,
    u.RIGHT_WIDTH2 = 960,
    u.RIGHT_HEIGHT = 1280,
    u.viewHeight = 0,
    u.gameSceneSc = 1,
    u.w = 0,
    u.h = 0,
    u.published = !0,
    u.debugName = {},
    u.isSupportPvr = !1,
    u.isSupportEtc = !1,
    u.isSupportAtlasMix = !1,
    u.verUrls = null,
    u.artResPacks = null,
    u.artFontResPacks = null;
    var Ot = u;
    function u() {}
    t(Ft, "app.LangControl"),
    e(1, Ft, "firstNames", function() {
        return (Ft[g.Language + "_Names"] || Ft.zh_Names).firstNames
    }),
    e(1, Ft, "boyNames", function() {
        return (Ft[g.Language + "_Names"] || Ft.zh_Names).boyNames
    }),
    e(1, Ft, "girlNames", function() {
        return (Ft[g.Language + "_Names"] || Ft.zh_Names).girlNames
    }),
    Ft.filterColor = function(t) {
        if (-1 != t.indexOf("[-]")) {
            t = t.replace("[-]", "</font>");
            for (var e = 0, e = 0; e < 1; ++e)
                0 < t.indexOf("[-]") && (t = t.replace("[-]", "</font>"),
                e--);
            for (var i = /\[.*?\]/; null != (s = t.match(i)); ) {
                var s = s[0].slice(1, s[0].length - 1);
                t = t.replace(i, "<font color='#" + s + "'>")
            }
        }
        return t
    }
    ,
    Ft.replaceInfos = function(t, e) {
        var i = /([a-zA-Z]+)/g
          , s = /([\d])+/g
          , n = t.match(/\$\{.*?\}/g);
        if (null != n)
            for (var o = 0; o < n.length; o++) {
                var a = n[o]
                  , r = a.match(i)
                  , l = (r && r[0],
                o);
                if ((r = a.match(s)) && (l = r[0]),
                !e || !e.hasOwnProperty(l + ""))
                    break;
                r = e[l];
                t = Ft.formatInfo(t, r, a)
            }
        return t
    }
    ,
    Ft.formatInfo = function(t, e, i) {
        return "number" == typeof e && Math.floor(e) == e ? t = t.replace(i, e + "") : "string" == typeof e && (t = t.replace(i, e)),
        t
    }
    ,
    Ft.getImgPath = function(t) {
        var e = g.Language;
        return t = "zh" != e && Ft.res_Cfg[t] ? t.replace("img", "img/hwResource/" + e) : t
    }
    ,
    Ft.getI18 = function(t, e) {
        var i = (i = Ft[g.Language + "_i18_Cfg"]) || Ft.zh_i18_Cfg
          , i = Ft.filterColor(i[t]);
        return i = i && Ft.replaceInfos(i, e)
    }
    ,
    O(Ft, ["zh_i18_Cfg", function() {
        return this.zh_i18_Cfg = {
            1e4: "选择区服",
            10001: "黑体",
            10003: "公测4001服",
            10004: "最近登陆",
            10002: "公测4001-2000服",
            10065: "日 ",
            10062: "</font>&nbsp;&nbsp;<font color='#C99A0A'>选服</font>",
            10024: "不同武魂有不同的限定魂环",
            10050: "道",
            10047: "寂",
            10057: "正在进入游戏...",
            10007: "首次加载会比较慢，请耐心等待",
            10029: "齐心协力勇闯海神岛，收获丰厚魂石奖励",
            10043: "破",
            10056: "正在初始化游戏",
            10016: "杀戮之都通过关数越多，经验越多",
            10020: "星级魂环可进行强化、升星",
            10013: "佩戴飞龙宝宝可立即提升经验效率",
            10032: "加入宗门可参与宗门宴会、宗门传功等系列活动",
            10031: "达到指定等级后，需进行魂师进阶才能继续升级",
            10011: "为了您的健康，请合理控制游戏时间 本游戏适合16周岁以上的用户使用",
            10048: "寞",
            10005: "<font color='#FFF2C7'>绝密内测九9999服</font>  <font color='#32F3C3'>选服></font>",
            10040: " 开服",
            10063: "年",
            10036: "#help 加载中... [#3%]",
            10028: "组队参加海神九考，快速提升魂环亲和度",
            10038: "维护中",
            10017: "斗魂场是获得荣誉的主要途径",
            10044: "苍",
            10064: "月",
            10027: "世界首领有几率掉落珍贵的魂环升星材料",
            10034: "黑市可购买副本消耗材料和各种强化材料",
            10049: "大",
            10014: "经验池达到上限后，经验不再增加",
            10023: "斗罗之路打不过？试试不同的魂环搭配",
            10039: "即将在 ",
            10058: "登录页刷新登录按钮",
            10006: "加载中...1%",
            10061: "</font>&nbsp;&nbsp;<font color='#32F3C3'>即将开服</font>",
            10045: "穹",
            10042: "斗",
            10021: "挑战斗罗之路，获得武魂进阶材料",
            10052: "浮",
            10026: "每日两次宗门御敌，赢取大量宗门建设资金",
            10010: "适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活",
            10008: "游戏主程序 加载中...(60%)",
            10012: "推荐打开声音获得完整游戏体验",
            10059: "<font color='#C99A0A'>点击选服</font>",
            10100: "点击选服",
            10101: "选服",
            10055: "歌",
            10015: "通关学院试炼，收获丰厚奖励",
            10022: "进行武魂进阶，可解锁新的魂环孔位",
            10051: "沉",
            10046: "掩",
            10018: "击杀各类BOSS，可获得稀有魂环、装备",
            10033: "完成历练任务，可解锁更多角色一起战斗",
            10025: "周日准时参加宗门联赛，争夺冠军专属魂环",
            10041: "即将开服",
            10009: "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当",
            10060: "</font>&nbsp;&nbsp;<font color='#32F3C3'>维护中</font>",
            10035: "魂骨附带特殊属性和强力技能",
            10030: "击杀VIP专属首领，海量材料拿到手软",
            10053: "剑",
            10019: "魂环年份越高，属性越好",
            10037: "请选择要登陆的服",
            10054: "如",
            10067: "尊敬的勇士：<br>   <a href='http://www.gm99.com/'>《斗罗大陆H5》</a>将于11月15日对抢先服进行重启维护，具体维护时间将视情况提前或延后，因此对各位勇士造成的不便，我们致以万分的歉意！<br>【维护时间】：<br> <font color='#00DB00' >抢先服</font>：11月15日  14:30-16:30<br>   更新内容：<br>   1.新增：大师系统<br>   2.新增：图鉴系统<br>   3.其他优化",
            10066: "公 告",
            10068: "抢先服",
            10073: "提示",
            10070: "恭喜您已经解锁9级所有的仙石合成cxvcxcvxcvcxcxvfdgfdg ",
            10069: "提 示",
            10071: "确 定",
            10072: "取 消",
            10074: "登  录",
            10078: "密码",
            10077: "密码：",
            10075: "账号：",
            10076: "账号",
            10079: "创建角色后，可觉醒<span style='color:#a7892c'>罗三炮</span>、<span style='color:#a7892c'>昊天锤</span>、<span style='color:#a7892c'>火凤凰</span><br>武魂中的一种",
            10088: "您的角色名包含敏感词",
            10090: "与服务端通讯出错",
            10087: "您的角色名包含特殊字符",
            10084: "外网这里报错了,看看怎么处理",
            10081: "创建角色后，可觉醒<span style='color:#a7892c'>七宝琉璃塔</span>、<span style='color:#a7892c'>蓝银草</span><br>等<span style='color:#3da42c'>七种</span>武魂中的一种",
            10083: "角色名五字",
            10080: "创建角色后，可觉醒<span style='color:#a7892c'>白虎</span>、<span style='color:#a7892c'>大力金刚熊</span><br>武魂中的一种",
            10082: "创建角色后，可觉醒<span style='color:#a7892c'>罗三炮</span>、<span style='color:#a7892c'>柔骨兔</span>、<span style='color:#a7892c'>火凤凰</span><br>武魂中的一种",
            10085: "角色名过长",
            10089: "至少输入两个汉字或者四个字母",
            10086: "角色名已存在",
            10091: "角色名异常",
            20023: "耗时:",
            20014: "您的登录已过期，请刷新游戏再重新登录",
            20027: "加载文件失败,尝试刷新游戏3",
            20015: "app startLoadScript  外网这里报错了",
            20011: "没有可登陆的区服",
            20022: "加载",
            20010: "网络异常1",
            20001: "加载解压工具",
            20018: "次重连",
            20021: "网络异常，请退出游戏并检查您的网络设置后再次打开游戏2",
            20002: "加载主程序",
            20006: "已经关闭AtlasMix支持",
            20017: "网络异常，第",
            20007: "测试maskcache",
            20004: "未知平台，sdk登录怎么处理？？？？",
            20005: "已经关闭etc、pvr支持",
            20026: "initVer的时候发现没有h5jsUrl",
            20008: "send：点击流-> ",
            20020: "确定",
            20016: "网络异常，请退出游戏并检查您的网络设置后再次打开游戏",
            20003: "未知平台，sdk初始化怎么处理？？？？",
            20012: "网络异常2",
            20009: "加载错误:",
            20019: "提示:",
            2e4: "加载版本号文件",
            20024: "加载脚本错误:",
            20013: "网络异常3",
            20025: "加载文件失败,尝试刷新游戏",
            20037: "外门弟子唐三，偷学内门绝学为唐门不容，跳崖明志后重生穿越至斗罗大陆。",
            20038: "在斗罗大陆的世界观里，没有魔法，没有斗气，没有武术，却有神奇的武魂。",
            20028: "每个人在自己六岁时，都会前往武魂殿觉醒武魂，接受命运女神馈赠的力量。",
            20029: "觉醒的武魂可能是动物、植物或器物，人们早已习惯使用武魂辅助日常劳作。",
            20030: "其中有一些幸运儿，会觉醒特别出色的武魂，甚至可以用来修炼并进行战斗。",
            20031: "他们被称为“魂师”，是斗罗大陆上实力最为强大，身份也最尊贵的一群人。",
            20032: "机智聪慧的唐三发现了前世玄天功，与斗罗大陆魂力的联系，日夜刻苦修炼。",
            20033: "六岁测试魂力时达到先天满魂力，但觉醒武魂却是蓝银草，公认废武魂之一。",
            20034: "唐三没有灰心丧气，身负双生武魂的他坚信，自己能成为大陆最强大的魂师！",
            20035: "小小的唐三，在圣魂村开始了他的魂师修炼之路，并萌生了振兴唐门的梦想。",
            20036: "当唐门暗器来到斗罗大陆，当唐三武魂觉醒，斗罗大陆能否再铸唐门的辉煌？",
            20039: "大师",
            20040: "用户协议",
            30001: "审批文号：新广出审[2017]6979号",
            30002: "网络游戏出版物号：ISBN?978-7-498-00060-6",
            30003: "出版单位：天津电子出版社有限公司",
            30004: "运营单位：深圳蚁巢网络科技有限公司",
            30005: "著作权人：深圳市伴悦科技有限公司",
            30006: "软著登记号：2017SR017597",
            30011: "审批文号：新广出审[2018]1689号",
            30012: "网络游戏出版物号：ISBN?978-7-498-05026-7",
            30013: "出版单位：成都盈众九州网络科技有限公司",
            30014: "运营单位：深圳市火煌圣火网络有限公司",
            30015: "著作权人：深圳市心游网络科技有限公司",
            30016: "软著登记号：2017SR0706246",
            30021: "审批文号：新广出审[2017]10604号",
            30022: "网络游戏出版物号：ISBN?978-7-498-03393-2",
            30023: "出版单位：上海同济大学电子音像出版社有限公司",
            30024: "运营单位：上海玄霆娱乐信息科技有限公司",
            30025: "著作权人：上海玄霆娱乐信息科技有限公司",
            30026: "软著登记号：2017SR274800",
            30031: "审批文号：新广出审[2017]10604号",
            30032: "出版物号：ISBN 978-7-498-03393-2",
            30033: "出版服务单位：上海同济大学电子音像出版社有限公司",
            30034: "文化部备案号：文网游备字〔2017〕Ｍ-RPG 1129 号",
            30035: "著作权人：上海玄霆娱乐信息科技有限公司",
            30036: "软著登记号：2017SR274800",
            30037: "通行证登录",
            30038: "通行证",
            30039: "请输入通行证",
            30040: "确 认",
            20041: "暂无公告",
            20042: "退出提示",
            20043: "魂师大人确定要离开斗罗大陆吗？",
            20044: "${str0} ${str1} 开服",
            20045: "加载文件失败,尝试刷新游戏2",
            20046: "确认离开当前游戏吗？",
            20047: "语言选择",
            20048: "<a><font color='#067800'>切换地区</font></a>",
            20049: "地区选择",
            20050: "区服人数已满，请魂师前往最新区服征战大陆哦！",
            20051: "请在区服列表选择区服",
            30051: "审批文号：新广出审[2018]1689号",
            30052: "网络游戏出版物号：ISBN978-7-498-05026-7",
            30053: "出版单位：成都盈众九州网络科技有限公司",
            30054: "运营单位：江苏嘉趣网络科技有限公司",
            30055: "著作权人：深圳市心游网络科技有限公司",
            30056: "软著登记号：2017SR696804",
            30061: "",
            30062: "审批文号：新广出审[2017]10604号",
            30063: "ISBN：978-7-498-03393-2",
            30064: "软著登记号：2017SR274800",
            30065: "",
            30066: "隐私政策",
            30067: "未成年人进行付费行为需征求监护人同意",
            30068: "出版单位名称：上海同济大学电子音像出版社有限公司",
            30069: "游戏名称：斗罗大陆",
            30070: "审批文号：新广出审[2017]10604 号",
            30071: "加载主场景[#3%]",
            30072: "与服务器通讯中",
            40001: "一",
            40002: "二",
            40003: "三",
            40004: "四",
            40005: "五",
            40006: "还差${str0}历练点，可解锁第${str1}角色",
            40007: "曲线的参考点太少了",
            40008: "为第${str}角色觉醒武魂",
            40009: "(男性)",
            40010: "(女性)",
            40011: "可选<br>",
            40012: "第${str0}角色${str1}",
            40013: "第${str}角色",
            40014: "请仔细阅读并同意隐私政策",
            40015: "1.回归服限时开启，<font color='#067800'>新老玩家均可进入回归服</font>，享回归服专属福利；<br/>2.活动开启时，未登录天数达<font color='#067800'>七日</font>的角色会被判定为回归角色，玩家可以登录该角色，获得专属<font color='#067800'>回归码</font>，前往回归服创角并使用回归码，可以获得回归老玩家专属福利升级。<br/>3.回归码仅限同一账号的角色使用，玩家不能使用其他账号的回归码。",
            40016: "欢迎下载本游戏，我们非常重视个人信息和隐私保护。请在使用我们的服务前，详细阅读并同意《用户协议》和《隐私政策》<br>为了提供完整的游戏体验，我们会向您申请必要的权限和信息。您可选择同意或拒绝权限申请，如果拒绝可能会导致部分游戏体验异常。权限和信息包括:<br>存储权限:目的为了实现账号、图片的缓存和使用，图片保存与分享<br>电话权限:目的为验证用户身份、实现手机号码登录功能<br>设备信息:读取Android-ID 硬件序列号、 IMEI、手机号、OAID、Mac地址信息目的为保护账号安全",
            40017: "拒 绝",
            40018: "同 意",
            40019: "个人信息保护指引",
            40020: "同意《服务协议》和《隐私政策》后才能正常进入游戏，确定要退出游戏吗",
            40021: "重新选择",
            40022: "退出游戏",
            40023: "温馨提示",
            40024: "适龄提示",
            40025: "审批文号：新广出审[2017]9483号",
            40026: "著作权人：广州火山湖信息技术公司",
            40027: "出版物号：ISBN 978-7-498-02388-9",
            40028: "运营单位：上海硬通网络科技有限公司",
            40029: "出版单位：三七互娱（上海）科技有限公司",
            40030: "审批文号：新广出审[2017]6694号",
            40031: "著作权人：深圳奈斯互动科技有限公司",
            40032: "出版物号：ISBN 978-7-7979-9849-9",
            40033: "运营单位：深圳智品天成科技有限公司",
            40034: "出版单位：方圆电子音像出版社有限责任公司",
            40035: "欢迎下载本游戏，我们非常重视个人信息和隐私保护。请在使用我们的服务前，详细阅读并同意《用户协议》和《隐私政策》<br>为了提供完整的游戏体验，我们会向您申请必要的权限和信息。您可选择同意或拒绝权限申请，如果拒绝可能会导致部分游戏体验异常。权限和信息包括:<br>存储权限:目的为了实现账号、图片的缓存和使用，图片保存与分享<br>电话权限:目的为验证用户身份、实现手机号码登录功能<br>",
            40036: "1.回归服限时开启，<font color='#067800'>新老玩家均可进入回归服</font>，享回归服专属福利；<br/>2.回归预热活动开启时，未登录天数达<font color='#067800'>七日</font>的角色会被判定为回归角色，账号上拥有回归角色的玩家，登录回归服创角，即可获得回归老玩家专属福利升级。<br/>3.回归资格仅限同一账号的角色使用，玩家不能使用其他账号的回归码。",
            40037: "ICP备案号：皖B2-20170001-32A",
            40038: "ICP备案号：粤ICP备13049733号-14A",
            40039: "ICP备案号：蜀ICP备17024131号-13A",
            40040: "ICP备案号：皖B2-20170001-127A",
            40041: "ICP备案号：皖B2-20170001-139A",
            40042: "ICP备案号：皖B2-20170001-151A",
            40043: "ICP备案号：皖B2-20170001-156A",
            40044: "ICP备案号：皖B2-20170001-178A",
            40045: "ICP备案号：苏ICP备2020071003号-22A",
            40046: "ICP备案号：蜀ICP备17024131号-19A",
            40047: "发行单位：广州艾斯科巴信息网络有限公司",
            40048: "ICP备案号：琼ICP备19004250号-263A",
            40049: "软著登记号：2017SR274800",
            40050: "预计等待时间:${str}秒"
        }
    }
    , "zh_tw_i18_Cfg", function() {
        return this.zh_tw_i18_Cfg = {
            1e4: "選擇區服",
            10001: "黑體",
            10003: "公測4001服",
            10004: "最近登入",
            10002: "公測4001-2000服",
            10065: "日 ",
            10062: "</font>&nbsp;&nbsp;<font color='#C99A0A'>選服</font>",
            10024: "不同武魂有不同的限定魂環",
            10050: "道",
            10047: "寂",
            10057: "正在進入遊戲...",
            10007: "首次載入會比較慢，請耐心等待",
            10029: "齊心協力勇闖海神島，收穫豐厚魂石獎勵",
            10043: "破",
            10056: "正在初始化遊戲",
            10016: "殺戮之都通過關數越多，經驗越多",
            10020: "星級魂環可進行強化、升星",
            10013: "佩戴飛龍寶寶可立即提升經驗效率",
            10032: "加入宗門可參與宗門宴會、宗門傳功等系列活動",
            10031: "達到指定等級後，需進行魂師進階才能繼續升級",
            10011: "為了您的健康，請合理控制遊戲時間 本遊戲適合12周歲以上的用戶使用",
            10048: "寞",
            10005: "<font color='#FFF2C7'>絕密內測九9999服</font>  <font color='#32F3C3'>選服></font>",
            10040: " 開服",
            10063: "年",
            10036: "#help 載入中... [#3%]",
            10028: "組隊參加海神九考，快速提升魂環親和度",
            10038: "維護中",
            10017: "鬥魂場是獲得榮譽的主要途徑",
            10044: "蒼",
            10064: "月",
            10027: "世界首領有機率掉落珍貴的魂環升星材料",
            10034: "黑市可购买副本消耗材料和各种强化材料",
            10049: "大",
            10014: "經驗池達到上限後，經驗不再增加",
            10023: "斗羅之路打不過？試試不同的魂環搭配",
            10039: "即將在 ",
            10058: "登錄頁刷新登錄按鈕",
            10006: "載入中...1%",
            10061: "</font>&nbsp;&nbsp;<font color='#32F3C3'>即將開服</font>",
            10045: "穹",
            10042: "斗",
            10021: "挑戰斗羅之路，獲得武魂進階材料",
            10052: "浮",
            10026: "每日兩次宗門禦敵，贏取大量宗門建設資金",
            10010: "適度遊戲益腦，沉迷遊戲傷身。合理安排時間，享受健康生活",
            10008: "遊戲主程序 載入中...(60%)",
            10012: "推薦打開聲音獲得完整遊戲體驗",
            10059: "<font color='#C99A0A'>點擊選服</font>",
            10055: "歌",
            10015: "通關學院試煉，收穫豐厚獎勵",
            10022: "進行武魂進階，可解鎖新的魂環孔位",
            10051: "沉",
            10046: "掩",
            10018: "擊殺各類BOSS，可獲得稀有魂環、裝備",
            10033: "完成歷練任務，可解鎖更多角色一起戰鬥",
            10025: "周日準時參加宗門聯賽，爭奪冠軍專屬魂環",
            10041: "即將開服",
            10009: "抵制不良遊戲，拒絕盜版遊戲。注意自我保護，謹防上當受騙",
            10060: "</font>&nbsp;&nbsp;<font color='#32F3C3'>維護中</font>",
            10035: "魂骨附帶特殊屬性和強力技能",
            10030: "擊殺VIP專屬首領，海量材料拿到手軟",
            10053: "劍",
            10019: "魂環年份越高，屬性越好",
            10037: "請選擇要登入的服",
            10054: "如",
            10067: "親愛的勇士：<br>   <a href='http://www.gm99.com/'>《鬥羅大陸H5》</a>將於11月15日對搶先服進行重啟維護，具體維護時間將視情況提前或延後，因此對各位勇士造成的不便，我們致以萬分的歉意！<br>【维护时间】：<br> <font color='#00DB00' >抢先服</font>：11月15日  14:30-16:30<br>   更新内容：<br>   1.新增：大師系統<br>   2.新增：圖鑒系統<br>   3.其他優化",
            10066: "公 告",
            10068: "搶先服",
            10073: "提示",
            10070: "恭喜您已經解鎖9級所有的仙石合成cxvcxcvxcvcxcxvfdgfdg ",
            10069: "提 示",
            10071: "確 定",
            10072: "取 消",
            10074: "登  錄",
            10078: "密碼",
            10077: "密碼：",
            10075: "帳號：",
            10076: "帳號",
            10079: "創建角色後，可覺醒<span style='color:#a7892c'>羅三炮</span>、<span style='color:#a7892c'>昊天錘</span>、<span style='color:#a7892c'>火鳳凰</span><br>武魂中的一種",
            10088: "您的角色名包含敏感詞",
            10090: "與服務器通許出錯",
            10091: "角色名異常",
            10087: "您的角色名包含特殊字符",
            10084: "外网这里报错了,看看怎么处理",
            10081: "創建角色後，可覺醒<span style='color:#a7892c'>七寶琉璃塔</span>、<span style='color:#a7892c'>藍銀草</span><br>等<span style='color:#3da42c'>七種</span>武魂中的一種",
            10083: "角色名五字",
            10080: "創建角色後，可覺醒<span style='color:#a7892c'>白虎</span>、<span style='color:#a7892c'>大力金剛熊</span><br>武魂中的一種",
            10082: "創建角色後，可覺醒<span style='color:#a7892c'>羅三炮</span>、<span style='color:#a7892c'>柔骨兔</span>、<span style='color:#a7892c'>火鳳凰</span><br>武魂中的一種",
            10085: "角色名過長",
            10089: "至少輸入兩個漢字或者四個字母",
            10086: "角色名已存在",
            20023: "耗時:",
            20014: "您的登錄已過期，請刷新遊戲再重新登錄",
            20027: "載入文件失敗，嘗試刷新遊戲3",
            20015: "app startLoadScript  外网这里报错了",
            20011: "沒有可登錄的區服",
            20022: "載入",
            20010: "網絡異常1",
            20001: "載入解壓工具",
            20018: "次重連",
            20021: "請退出遊戲并檢查您的網絡設置后再次打開遊戲2",
            20002: "載入主程序",
            20006: "已經關閉AtlasMix支持",
            20017: "網絡異常，第",
            20007: "測試maskcache",
            20004: "未知平台，sdk登录怎么处理？？？？",
            20005: "已經關閉etc、pvr支持",
            20026: "initVer的时候发现没有h5jsUrl",
            20008: "send：点击流-> ",
            20020: "確定",
            20016: "網絡異常，請退出遊戲并檢查您的網絡設置后再次打開遊戲",
            20003: "未知平台，sdk初始化怎么处理？？？？",
            20012: "網絡異常2",
            20009: "載入錯誤:",
            20019: "提示:",
            2e4: "載入版本號文件",
            20024: "載入腳本錯誤:",
            20013: "網絡異常3",
            20025: "載入文件失敗，嘗試刷新遊戲",
            20037: "外門弟子唐三，偷學內門絕學為唐門不容，跳崖明志後重生穿越至斗羅大陸。",
            20038: "在斗羅大陸的世界觀裡，沒有魔法，沒有斗氣，沒有武術，卻有神奇的武魂。",
            20028: "每個人在自己六歲時，都會前往武魂殿覺醒武魂，接受命運女神饋贈的力量。",
            20029: "覺醒的武魂可能是動物、植物或器物，人們早已習慣使用武魂輔助日常勞作。",
            20030: "其中有一些幸運兒，會覺醒特別出色的武魂，甚至可以用來修煉並進行戰鬥。",
            20031: "他們被稱為“魂師”，是斗羅大陸上實力最為強大，身份也最尊貴的一群人。",
            20032: "機智聰慧的唐三發現了前世玄天功，與斗羅大陸魂力的聯繫，日夜刻苦修煉。",
            20033: "六歲測試魂力時達到先天滿魂力，但覺醒武魂卻是藍銀草，公認廢武魂之一。",
            20034: "唐三沒有灰心喪氣，身負雙生武魂的他堅信，自己能成為大陸最強大的魂師！",
            20035: "小小的唐三，在聖魂村開始了他的魂師修煉之路，並萌生了振興唐門的夢想。",
            20036: "當唐門暗器來到斗羅大陸，當唐三武魂覺醒，斗羅大陸能否再鑄唐門的輝煌？",
            20039: "大師",
            20040: "用戶協議",
            30001: "审批文号：新广出审[2017]6979号",
            30002: "网络游戏出版物号：ISBN?978-7-498-00060-6",
            30003: "出版单位：天津电子出版社有限公司",
            30004: "运营单位：深圳蚁巢网络科技有限公司",
            30005: "著作权人：深圳市伴悦科技有限公司",
            30006: "软著登记号：2017SR017597",
            30011: "审批文号：新广出审[2018]1689号",
            30012: "网络游戏出版物号：ISBN?978-7-498-05026-7",
            30013: "出版单位：成都盈众九州网络科技有限公司",
            30014: "运营单位：深圳市火煌圣火网络有限公司",
            30015: "著作权人：深圳市心游网络科技有限公司",
            30016: "软著登记号：2017SR0706246",
            30021: "审批文号：新广出审[2017]10604号",
            30022: "网络游戏出版物号：ISBN?978-7-498-03393-2",
            30023: "出版单位：上海同济大学电子音像出版社有限公司",
            30024: "运营单位：上海玄霆娱乐信息科技有限公司",
            30025: "著作权人：上海玄霆娱乐信息科技有限公司",
            30026: "软著登记号：2017SR274800",
            30031: "审批文号：新广出审[2017]10604号",
            30032: "出版物号：ISBN 978-7-498-03393-2",
            30033: "出版服务单位：上海同济大学电子音像出版社有限公司",
            30034: "文化部备案号：文网游备字〔2017〕Ｍ-RPG 1129 号",
            30035: "著作权人：上海玄霆娱乐信息科技有限公司",
            30036: "软著登记号：2017SR274800",
            30037: "通行证登录",
            30038: "通行证",
            30039: "请输入通行证",
            30040: "确 认",
            20041: "暫無公告",
            20042: "登出提示",
            20043: "魂師大人確定要離開斗羅大陸嗎？",
            20044: "${str0} ${str1} 開服",
            20045: "載入文件失敗，嘗試刷新遊戲2",
            20046: "確認離開當前遊戲嗎？",
            20047: "語言選擇",
            20048: "<font color='#00ff00'><u>選擇地區</u></font>",
            20049: "地區選擇",
            20050: "區服人數已滿",
            20051: "请在区服列表选择区服",
            30051: "審批文號：新廣出審[2018]2090號",
            30052: "網路遊戲出版物號：ISBN?978-7-498-05406-7",
            30053: "出版單位：成都盈眾九州網路科技有限公司",
            30054: "運營單位：江蘇嘉趣網路科技有限公司",
            30055: "著作權人：江蘇嘉趣網路科技有限公司",
            30056: "軟著登記號：2017SR696804",
            30061: "",
            30062: "審批文號：新廣出審[2017]10604號",
            30063: "ISBN：978-7-498-03393-2",
            30064: "軟著登記號：2017SR274800",
            30065: "",
            30066: "隱私政策",
            30067: "未成年人進行付費行為需徵求監護人同意",
            30068: "出版單位名稱：上海同濟大學電子音像出版社有限公司",
            30069: "遊戲名稱：斗羅大陸",
            30070: "審批文號：新廣出審[2017]10604 號"
        }
    }
    , "res_Cfg", function() {
        return this.res_Cfg = {
            "img/denglu_img_logo.png": !0,
            "img/first_login_gift.png": !0,
            "img/share_1.jpg": !0,
            "img/share_2.jpg": !0,
            "img/share_3.jpg": !0,
            "img/share_4.jpg": !0,
            "img/share_5.jpg": !0,
            "img/share_6.jpg": !0,
            "img/share_7.jpg": !0,
            "img/x5_createrole.json": !0,
            "img/x5_login.json": !0,
            "img/bg.jpg": !0,
            "img/userProtocol.json": !0
        }
    }
    , "zh_Names", function() {
        return this.zh_Names = {
            firstNames: ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳", "邓", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪", "汤", "藤", "殷", "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "付", "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "肖", "尹", "姚", "邵", "湛", "汪", "祁", "毛", "禹", "狄", "米", "贝", "明", "藏", "计", "伏", "成", "戴", "谈", "宋", "茅", "庞", "熊", "纪", "舒", "屈", "项", "祝", "董", "梁", "杜", "阮", "蓝", "闵", "席", "季", "麻", "强", "贾", "路", "娄", "危", "江", "童", "颜", "郭", "梅", "盛", "林", "刁", "钟", "徐", "邱", "骆", "高", "夏", "蔡", "田", "樊", "胡", "凌", "霍", "虞", "万", "支", "柯", "昝", "管", "卢", "莫", "经", "房", "裘", "缪", "滑", "曲", "芮", "羿", "储", "靳", "汲", "邴", "糜", "松", "井", "富", "乌", "焦", "巴", "弓", "隗", "山", "谷", "蓬", "全", "郗", "班", "仰", "伊", "栾", "暴", "甘", "钭", "厉", "戎", "束", "龙", "幸", "司", "蓟", "薄", "印", "宿", "怀", "蒲", "邰", "从", "索", "咸", "籍", "赖", "屠", "蒙", "池", "阴", "胥", "能", "苍", "双", "闻", "莘", "党", "谭", "贡", "劳", "逄", "姬", "申", "扶", "堵", "冉", "宰", "雍", "隙", "桑", "桂", "濮", "牛", "寿", "通", "边", "扈", "冀", "郏", "浦", "尚", "农", "别", "庄", "晏", "柴", "瞿", "充", "茹", "习", "宦", "艾", "鱼", "容", "古", "易", "慎", "戈", "廖", "庾", "终", "暨", "居", "衡", "步", "都", "耿", "满", "弘", "匡", "文", "寇", "广", "禄", "阙", "东", "欧", "殳", "沃", "利", "蔚", "越", "夔", "隆", "师", "巩", "厍", "晁", "勾", "敖", "融", "冷", "辛", "阚", "那", "简", "饶", "空", "曾", "毋", "沙", "乜", "养", "鞠", "须", "丰", "巢", "关", "蒯", "相", "查", "后", "荆", "红", "游", "竺", "权", "逯", "盖", "益", "桓", "公", "俟", "夏候", "闻人", "宗政", "申屠", "公孙", "仲孙", "公羊", "澹台", "钟离", "司寇", "端木", "漆雕", "壤驷", "公良", "拓拔", "夹谷", "宰父", "谷梁", "楚", "晋", "闫", "法", "汝", "鄢", "涂", "钦", "南门", "羊舌", "微生", "岳", "帅", "缑", "亢", "况", "有", "琴", "梁丘", "东门", "商", "牟", "佘", "耳", "伯", "赏", "墨", "哈", "谯笪", "年", "爱", "阳", "佟", "第五", "言", "贲", "慕", "巫", "萧", "乔", "单", "燕", "杭", "牧", "洪", "侯", "包", "秋", "堪", "诸", "仲", "左", "叶", "宫", "石", "宁", "崔", "郦", "仇", "吉", "祖", "钮", "武", "龚", "白", "粱", "程", "韶", "荣", "郜", "荀", "蔺", "阎", "羊", "於", "惠", "黎", "甄", "鄂", "温", "家", "卓", "滕", "封", "聂", "宓", "翟", "符", "刘", "景", "咎", "詹", "宗", "宣", "郁", "嵇", "邢", "傅", "向", "赫", "裴", "连", "解", "陆", "应", "翁", "丁", "车", "段", "公冶", "伯赏", "轩辕", "长孙", "司马", "鲜于", "欧阳", "单于", "夏侯", "上官", "皇甫", "南宫", "诸葛", "巫马", "阳佟", "太叔", "东方", "尉迟", "呼延", "慕容", "宇文", "淳于", "子车", "闾丘", "东郭", "归海", "赫连", "司空", "乐正", "濮阳", "西门", "百里", "司徒", "令狐", "左丘", "公西", "谷粱", "拓跋"],
            boyNames: ["永恒", "越泽", "之痕", "修杰", "玄烨", "无极", "立辉", "致远", "天思", "楚律", "元冲", "炼心", "访琴", "初杨", "谷雪", "平灵", "源智", "烨华", "振家", "越彬", "子轩", "伟宸", "晋鹏", "皓然", "海亦", "鹤玄", "浩宇", "嘉熙", "志泽", "苑博", "念波", "峻熙", "俊驰", "羽泽", "南松", "问旋", "黎昕", "谷波", "凝海", "靖易", "子涵", "渊思", "煜祺", "无邪", "风华", "睿渊", "博超", "天磊", "夜白", "无情", "瑾瑜", "鹏飞", "弘文", "伟泽", "迎松", "雨泽", "鹏笑", "诗云", "白易", "远航", "笑白", "映波", "莫笑", "晓啸", "智宸", "晓博", "靖琪", "十八", "君浩", "绍辉", "冷安", "盼旋", "秋白", "天德", "心驰", "擎天", "半邪", "飞言", "一江", "冰安", "皓轩", "子默", "熠彤", "青寒", "烨磊", "半山", "飞风", "问筠", "风眠", "文昊", "平文", "冷之", "尔阳", "天宇", "正豪", "文博", "明辉", "旭尧", "哲瀚", "子骞", "泽洋", "灵竹", "天云", "天机", "不斜", "擎汉", "千万", "流域", "流川", "不正", "天心", "天邪", "天明", "天晚", "天翼", "天涯", "天佑", "天川", "一德", "复天", "天庆", "天青", "天楚", "灿灿", "云潇", "潇洒", "定军", "定远", "人杰", "无声", "一心", "炎青", "老四", "不可", "元音", "白石", "白露", "延恶", "百川", "世倌", "连壁", "岱山", "擎苍", "思远", "嘉懿", "鸿煊", "笑天", "晟睿", "强炫", "飞虹", "听白", "鸿涛", "孤风", "青文", "云秋", "浩然", "明杰", "昊焱", "伟诚", "剑通", "鹏涛", "心磊", "天斜", "尔蓝", "靖仇", "成风", "豪英", "若风", "追风", "冷血", "无施", "夺命", "少侠", "长安", "安澜", "安宁", "安平", "安然", "安顺", "安晏", "安宜", "九歌", "九天", "九月", "昂然", "昂雄", "宾白", "宾鸿", "宾实", "彬彬", "彬炳", "彬郁", "斌斌", "剑魂", "波涛", "博达", "博简", "博明", "博容", "博赡", "博涉", "博实", "博文", "博学", "博雅", "博延", "博艺", "博易", "博裕", "博远", "才捷", "才良", "才艺", "才英", "才哲", "才俊", "成和", "成弘", "成化", "成济", "成礼", "成龙", "成双", "成天", "成文", "逍遥", "成荫", "成周", "承安", "承弼", "承德", "承恩", "承福", "承基", "承教", "承平", "承嗣", "承天", "承望", "承宣", "承颜", "承业", "承悦", "承允", "承运", "承载", "承泽", "承志", "德本", "德海", "德厚", "德华", "德辉", "德惠", "德容", "德润", "德寿", "德水", "德馨", "德曜", "德业", "德义", "德庸", "德佑", "德宇", "德元", "德运", "德泽", "飞昂", "飞白", "飞飙", "飞掣", "飞尘", "飞沉", "飞驰", "飞光", "飞翰", "飞航", "飞鸿", "飞虎", "飞捷", "飞龙", "飞鸾", "飞鸣", "飞鹏", "飞文", "飞翔", "飞星", "飞翼", "飞英", "飞宇", "飞羽", "飞雨", "飞语", "飞跃", "飞章", "飞舟", "丰茂", "丰羽", "刚豪", "千林", "千霖", "千易", "向天", "高岑", "高畅", "高超", "高驰", "高达", "高澹", "高飞", "天霸", "高峯", "高峰", "高歌", "高格", "高寒", "高翰", "高杰", "高洁", "高峻", "高朗", "高丽", "高邈", "高旻", "高明", "高爽", "高兴", "高轩", "高雅", "高扬", "高阳", "高义", "高谊", "高逸", "高懿", "高原", "高远", "高韵", "高卓", "光赫", "光华", "光辉", "光济", "光霁", "星宸", "宸澋", "光明", "光启", "光熙", "光耀", "光誉", "光远", "冠宇", "无缺", "晗昱", "涵畅", "涵涤", "涵亮", "涵忍", "涵容", "心涵", "涵涵", "涵煦", "涵蓄", "涵衍", "涵意", "涵映", "涵育", "翰采", "翰池", "翰飞", "翰海", "翰林", "翰墨", "翰学", "翰音", "瀚玥", "翰藻", "瀚海", "瀚漠", "昊苍", "昊昊", "昊空", "昊乾", "昊穹", "昊然", "昊天", "昊英", "浩波", "浩博", "浩初", "浩大", "浩宕", "浩荡", "浩歌", "浩广", "浩涆", "浩瀚", "浩浩", "浩慨", "浩旷", "浩阔", "浩漫", "浩淼", "浩渺", "浩邈", "浩气", "浩穰", "浩壤", "浩思", "浩言", "和蔼", "和安", "和璧", "和昶", "和畅", "和风", "和歌", "和光", "和平", "和洽", "和惬", "和顺", "和硕", "和颂", "和泰", "和悌", "和通", "和同", "和煦", "和雅", "和宜", "和怡", "和玉", "和裕", "和豫", "和悦", "和韵", "和泽", "和正", "和志", "弘博", "弘大", "天音", "弘光", "弘和", "弘厚", "弘化", "弘济", "弘阔", "弘亮", "弘量", "弘深", "弘盛", "弘图", "弘伟", "弘新", "弘雅", "弘扬", "弘业", "弘义", "弘益", "弘毅", "弘懿", "弘致", "弘壮", "宏伯", "宏博", "宏才", "宏畅", "宏达", "宏大", "宏放", "宏富", "宏峻", "宏浚", "宏恺", "宏旷", "宏阔", "宏朗", "宏茂", "宏邈", "宏儒", "宏深", "宏胜", "宏盛", "飞天", "宏硕", "宏伟", "宏扬", "宏义", "宏逸", "宏毅", "宏远", "宏壮", "鸿宝", "鸿波", "鸿博"],
            girlNames: ["易安", "紫萱", "紫霜", "紫南", "紫菱", "芷兮", "紫衣", "芷天", "芷容", "芷巧", "芷卉", "芷荷", "元绿", "元槐", "元枫", "语雪", "语山", "语海", "语芙", "语儿", "语蝶", "雨雪", "雨文", "轻舞", "雨莲", "轻红", "幼思", "轻枫", "又菡", "友梅", "友儿", "映萱", "映安", "迎梦", "迎波", "易巧", "亦思", "亦巧", "忆雪", "忆文", "忆梅", "忆枫", "以丹", "依思", "夜玉", "夜梦", "夜春", "雁荷", "雁风", "雅彤", "雅琴", "寻梅", "寻冬", "雪珍", "雪瑶", "雪旋", "雪卉", "笑旋", "笑蓝", "笑翠", "晓夏", "向梦", "香萱", "香岚", "夏真", "夏山", "夏兰", "惜雪", "惜蕊", "惜灵", "问夏", "问蕊", "问梅", "听筠", "听枫", "天曼", "思松", "思菱", "水瑶", "水彤", "书竹", "书易", "诗桃", "诗双", "诗珊", "诗蕊", "山菡", "山蝶", "若雁", "若菱", "如风", "如冬", "如波", "秋柔", "青雪", "青曼", "巧蕊", "千亦", "千柔", "千柳", "绮琴", "绮梅", "平萱", "平露", "沛儿", "盼烟", "凝雁", "凝安", "念之", "念柏", "妙之", "妙梦", "妙柏", "梦之", "林夕", "梦露", "梦凡", "曼容", "曼荷", "曼寒", "曼安", "绿真", "凌文", "凌青", "凌波", "怜阳", "怜珊", "冷雪", "冷荷", "乐萱", "乐天", "乐松", "乐枫", "静芙", "靖柏", "寄真", "寄文", "寄琴", "幻天", "幻珊", "寒天", "寒凝", "寒梦", "寒荷", "涵易", "涵菱", "含玉", "含烟", "含灵", "含蕾", "谷蕊", "谷兰", "飞珍", "飞槐", "访云", "访烟", "访天", "访风", "凡阳", "凡旋", "凡梅", "凡灵", "凡蕾", "尔思", "尔柳", "尔芙", "尔白", "孤菱", "沛萍", "梦柏", "从阳", "绿海", "白梅", "秋烟", "访旋", "元珊", "凌旋", "依珊", "寻凝", "幻柏", "寒安", "怀绿", "书琴", "水香", "向彤", "曼冬", "安珊", "映阳", "思天", "初珍", "冷珍", "灵珊", "夏彤", "映菡", "青筠", "易真", "幼荷", "冷霜", "凝旋", "夜柳", "紫文", "凡桃", "醉蝶", "从云", "冰萍", "小萱", "白筠", "依云", "元柏", "丹烟", "念云", "易蓉", "青易", "友卉", "若山", "涵柳", "映菱", "依凝", "怜南", "水儿", "从筠", "千秋", "代芙", "之卉", "幻思", "书瑶", "含之", "雪珊", "海之", "寄云", "盼海", "谷梦", "雁兰", "晓灵", "宛筠", "笑南", "梦容", "寄柔", "静枫", "尔容", "沛蓝", "宛海", "迎彤", "梦易", "惜海", "灵阳", "念寒", "采梦", "夜绿", "又亦", "梦山", "醉波", "慕晴", "安彤", "半烟", "翠桃", "书蝶", "寻云", "冰绿", "山雁", "夜梅", "翠阳", "芷文", "南露", "向真", "又晴", "又蓝", "雅旋", "千儿", "听安", "凌蝶", "向露", "从凝", "雨双", "依白", "以筠", "含巧", "晓瑶", "忆山", "以莲", "冰海", "盼芙", "冰珍", "水心", "以冬", "千凝", "笑阳", "香菱", "友蕊", "若云", "天晴", "笑珊", "凡霜", "南珍", "晓霜", "芷云", "谷芹", "芷蝶", "之云", "靖巧", "寄翠", "涵菡", "雁卉", "涵山", "念薇", "绮兰", "迎蕾", "秋荷", "代天", "采波", "诗兰", "谷思", "凝琴", "凝芙", "尔风", "觅双", "忆灵", "水蓝", "书蕾", "访枫", "涵双", "初阳", "秋灵", "笑槐", "灵凡", "冰夏", "听露", "翠容", "绮晴", "静柏", "天亦", "冷玉", "以亦", "盼曼", "乐蕊", "凡柔", "曼凝", "沛柔", "迎蓉", "映真", "采文", "新筠", "碧玉", "秋柳", "白莲", "亦玉", "幻波", "忆之", "孤思", "妙竹", "怀蕊", "映之", "小玉", "尔槐", "听荷", "夏之", "飞薇", "如松", "白安", "凌瑶", "初曼", "夜安", "安荷", "青柏", "向松", "绿旋", "芷珍", "凌晴", "新儿", "亦绿", "雁思", "惜霜", "紫青", "冰双", "代萱", "紫萍", "冰真", "幻翠", "向秋", "海蓝", "凌兰", "半凡", "雁芙", "梦寒", "小蕊", "绿蝶", "凌翠", "夜蕾", "含双", "碧琴", "夏旋", "冷雁", "乐双", "念梦", "静丹", "之柔", "新瑶", "亦旋", "雪巧", "凝莲", "雪莲", "依琴", "友灵", "醉柳", "秋双", "绮波", "寄瑶", "冰蝶", "孤丹", "半梅", "友菱", "飞双", "醉冬", "沛容", "南晴", "紫易", "从蓉", "友易", "尔竹", "巧荷", "寻双", "芷雪", "又夏", "梦玉", "安梦", "凝荷", "忆曼", "凝蝶", "以寒", "思山", "若翠", "曼青", "小珍", "代容", "孤云", "寄凡", "元容", "丹琴", "寒珊", "飞雪", "妙芙", "碧凡", "思柔", "雁桃", "丹南", "雁菡", "翠思", "幻梅", "海莲", "宛秋", "问枫", "靖雁", "梦安", "碧曼", "代珊", "惜珊", "元冬", "青梦", "书南", "绮山", "白桃", "从波", "访冬", "含卉", "平蝶", "海秋", "飞兰", "凝云", "亦竹", "梦岚", "寒凡", "傲柔", "凌思", "觅风", "平彤", "念露", "翠彤", "秋玲", "安蕾", "若蕊", "灵萱", "含雁", "思真", "盼山", "香薇", "碧萱", "夏柳", "白风", "安双", "凌萱", "盼夏", "幻巧", "怜寒", "傲儿", "冰枫", "元芹", "涵阳", "涵蕾", "以旋", "小凝", "妙晴", "冰薇", "小蕾", "觅海", "静竹"]
        }
    }
    ]);
    var d = Ft;
    function Ft() {}
    t(Gt, "app.LayaManager"),
    Gt.sendError = function(t) {
        if (Ot.published && !Gt.isNei) {
            t = "erro=" + t,
            g.SERVER && g.userAccount && (t = (t = (t += "&account=" + g.userAccount) + "&gid=" + g.SERVER) + "&server=" + g.SERVER),
            Gt._httpRequest || (Gt._httpRequest = new G);
            var e, i, s = c.errorUrl, n = w.antiMiniGame ? H.basePath : w.window.location.href;
            for (i in c.s_needReplaces)
                if (e = c.s_needReplaces[i],
                -1 != n.indexOf(e)) {
                    s = w.window.isHwWai ? s.replace("error.xxh5.z7xz.com", "errorhw." + e) : s.replace("error.xxh5.z7xz.com", "error." + e);
                    break
                }
            c.useHttps && (s = s.replace(/^http\:\/\//i, "https://")),
            Gt._httpRequest.send(s, t, "post", "text")
        }
    }
    ,
    Gt.init = function() {
        var t = w.window.location.href
          , a = (Gt.isNei = -1 != t.indexOf("10.11"),
        Gt.isTrunk = -1 != t.indexOf("xxh5test"),
        x.loader.retryNum = 2,
        x.loader.retryDelay = 1e3,
        "tencent" == g.CHANNEL_SING ? (x.loader.maxLoader = 3,
        "wanba_ts.105" != g.tencent_pf && ($.s_dontClear = !0),
        console.log("qq空间，改小同步加载数")) : r.isConchApp ? x.loader.maxLoader = 6 : x.loader.maxLoader = 5,
        Q.autoReleaseSound = !w.webAudioEnabled,
        Gt.isNei && (g.serverName = g.IP + ":" + g.PORT),
        Z.maxTextureCount = 1,
        J.s_skinFilter = g.getReplaceUrl,
        w.window.onbeforeunload = null,
        [])
          , e = (w.window.onerror = function(t, e, i, s, n) {
            var o = 0;
            if (t)
                if (o = a[t]) {
                    if ((a[t] = ++o) % 200 != 0)
                        return !1
                } else
                    o = a[t] = 1;
            return t = n && n.stack ? "error=" + t + " line:" + i + "col" + s + "\n" + n.stack : "error=" + t + " line:" + i + "col" + s,
            Gt.lastError = t,
            Gt.isNei || Gt.sendError(t + "&aerr=" + o),
            (Gt.isTrunk || Gt.isNei) && (n && n.stack ? alert("出错啦，请把此信息截图给研发商\n" + t) : alert("出错啦，但因为您的浏览器不支持跨域显示出错信息，所以无法显示出错位置。error:" + t)),
            !1
        }
        ,
        r.prototype._onVisibilitychange = function() {
            x.stage.isVisibility ? 0 != this._timeId && w.window.clearInterval(this._timeId) : this._timeId = w.window.setInterval(this._enterFrame, 1e3 / 60)
        }
        ,
        r.optimizeTextureMemory = function(t, e) {
            return !!(e && e.bitmap && x.__typeof(e.bitmap, tt))
        }
        ,
        m.prototype._remove = function() {
            var t = m.tweenMap[this._target.$_GID];
            if (t)
                for (var e = 0, i = t.length; e < i; e++)
                    if (t[e] === this) {
                        t.splice(e, 1);
                        break
                    }
            delete m.tweenMap[this._target.$_GID]
        }
        ,
        et.prototype.hitTest = function(t, e, i) {
            var s = !1;
            if (t.scrollRect && (e -= t.scrollRect.x,
            i -= t.scrollRect.y),
            x.__typeof(t.hitArea, it))
                return t.hitArea.isHit(e, i);
            if (0 < t.width && 0 < t.height || t.mouseThrough || t.hitArea)
                if (t.mouseThrough)
                    s = t.getGraphicBounds().contains(e, i);
                else {
                    var n = this._rect;
                    if (t.hitArea) {
                        if (x.__typeof(t.hitArea, st))
                            n = t.hitArea;
                        else
                            for (var o in t.hitArea)
                                if (s = (n = t.hitArea[o]).contains(e, i))
                                    break
                    } else
                        n.setTo(0, 0, t.width, t.height);
                    s = n.contains(e, i)
                }
            return s
        }
        ,
        nt.prototype.addResource = function(t) {
            return t._resourceManager = this,
            !1
        }
        ,
        U.prototype.changeClips)
          , o = (U.prototype.changeClips = function() {
            $.getRes(this._skin) ? e.call(this) : this._skin && x.loader.load(this._skin, b.create(this, this.loadSkin), null, "image")
        }
        ,
        U.prototype.loadSkin = function() {
            $.getRes(this._skin) && (e.call(this),
            U.prototype.changeState.call(this))
        }
        ,
        ot.prototype.onlistItemMouse = function(t, e) {
            var i, t = t.type;
            "mouseover" === t || "mouseout" === t ? this._isCustomList || (i = this._list.getCell(e)) && (i = i.getChildByName("label")) && ("mouseover" === t ? (i.bgColor = this._itemColors[0],
            i.color = this._itemColors[1]) : (i.bgColor = null,
            i.color = this._itemColors[2])) : "click" === t && (this._selectedIndex = -1,
            this.selectedIndex = e,
            this.isOpen = !1)
        }
        ,
        z.prototype.getStyle = function() {
            return this._style !== lt.EMPTY && null != this._style || (this._style = new lt),
            this._style
        }
        ,
        H.formatURL = function(t, e) {
            if (!t)
                return console.error("null path"),
                "null path";
            var i = E.app && E.app.Global && E.app.Global.getRealLangPath
              , i = (t = i ? i(t) : t,
            x.loader.turnCDNUrl[t] ? parseInt(x.loader.turnCDNUrl[t]) : 0)
              , s = g.CDN_LIST && g.CDN_LIST[i] ? g.CDN_LIST[i] : H.basePath
              , i = g.CDN_LIST && g.CDN_LIST[i] ? g.CDN_LIST[i] : H.rootPath;
            if (0 <= t.indexOf(":") || t.match(/^.*\..*\..*$/))
                return t;
            !r.isConchApp && 0 == t.indexOf("img/") && w.window.pageVer && -1 == t.indexOf("?") && (t += "?" + w.window.pageVer);
            var n = (t = null != H.customFormat ? H.customFormat(t, e) : t).charAt(0);
            if ("." === n)
                return H.formatRelativePath((e || s) + t);
            if ("~" === n)
                return i + t.substring(1);
            if ("d" === n) {
                if (0 === t.indexOf("data:image"))
                    return t
            } else if ("/" === n)
                return t;
            return (e || s) + t
        }
        ,
        ht.prototype.connect = function(t, e) {
            var i = 0 <= w.window.location.href.indexOf("https:");
            !c.isIpv6 && c.ipv4Ip && (t = c.ipv4Ip),
            i = i && !r.isConchApp || w.antiMiniGame ? "wss://" + t + ":" + (parseInt(e + "") + 100) : "ws://" + t + ":" + e,
            this.connectByUrl(i)
        }
        ,
        Q.playSound)
          , s = (laya.media.SoundManager.playSound = function(t, e, i, s, n) {
            return void 0 === e && (e = 1),
            void 0 === n && (n = 0),
            Ot.checkInFileList(t) ? o(t, e, i, s, n) : null
        }
        ,
        Gt.s_globalTouchEvent = new V,
        ct.prototype.sendEvents);
        ct.prototype.sendEvents = function(t, e, i) {
            if (void 0 === i && (i = 0),
            t && 0 < t.length) {
                if (Gt.s_globalTouchVote && Gt.s_globalTouchVote.runWith([e, t[0]]))
                    return;
                if (Gt.s_globalTouchVote2 && Gt.s_globalTouchVote2.runWith([e, t[0]]))
                    return;
                Gt.s_globalTouchEvent.event(e, t[0])
            }
            s.call(this, t, e, i)
        }
        ,
        $.prototype.clearLangArtFontRes = function() {
            var t = [];
            for (e in $.loadedMap)
                Ot.artFontResPacks && Ot.artFontResPacks.hasOwnProperty(e) && t.push(e);
            for (; 0 < t.length; ) {
                var e = t.pop()
                  , i = $.loadedMap[e];
                i && (delete $.loadedMap[e],
                x.__typeof(i, K)) && i.bitmap && i.destroy()
            }
        }
    }
    ,
    Gt._httpRequest = null,
    Gt.s_globalTouchEvent = null,
    Gt.s_globalTouchVote = null,
    Gt.s_globalTouchVote2 = null,
    Gt.lastError = "",
    Gt.isNei = !1,
    Gt.isTrunk = !1;
    var Ht = Gt;
    function Gt() {}
    t(_, "app.Params"),
    e(1, _, "serverName", function() {
        return _._serverName
    }, function(t) {
        _._serverName = t
    }),
    e(1, _, "m_paySwitch", function() {
        return _._m_paySwitch
    }, function(t) {
        _._m_paySwitch != t && (_._m_paySwitch = t,
        x.stage.event("PAY_SWITCH_CHANGE"))
    }),
    e(1, _, "LiuHai_ADD_HEIGHT", function() {
        return _.isLiuHai ? _._LiuHai_ADD_HEIGHT : 0
    }, function(t) {
        _._LiuHai_ADD_HEIGHT = t
    }),
    e(1, _, "CDN", function() {
        return _._CDN
    }, function(t) {
        "zh" == _.Language && (c.useHttps = !0);
        t = c.useHttps && t ? t.replace(/http:\/\//gi, "https://") : t;
        t && (_.CDN_LIST = t.split(";"),
        _._CDN = _.CDN_LIST[0],
        c.cdnList = _.CDN_LIST)
    }),
    e(1, _, "initLangType", null, function(t) {
        _._language = t
    }),
    e(1, _, "isOneStorePackage", function() {
        return _.appPackageName == _.oneStorePackage
    }),
    e(1, _, "ext", function() {
        return _.isHavePl(_.subscribe_switch) ? "wxsubscribe:" + _.wx_is_subscribe : ""
    }),
    e(1, _, "isAppleStore", function() {
        return r.isConchApp && w.onIOS && "46" == _.PID
    }),
    e(1, _, "isDebugMode", function() {
        return null != w.window.tempServer
    }),
    e(1, _, "isWanba", function() {
        return "tencent" == _.CHANNEL_SING
    }),
    e(1, _, "isConnerForbid", function() {
        return !(!w.onMiniGame && "wanba_ts.105" != _.tencent_pf)
    }),
    e(1, _, "isLiuHai", function() {
        var t = _.deviceInfo.phonemodel;
        if (t && ("PEUM00" == t || "PGU110" == t) && .83 < w.clientWidth / w.clientHeight)
            return !1;
        var e, i, s;
        if (t && "iPhone" == t && _.deviceInfo.devicename && (0 <= _.deviceInfo.devicename.indexOf("iPhone15") || 0 <= ["iPhone14,7", "iPhone14,8", "iPhone15,2", "iPhone15,3"].indexOf(_.deviceInfo.devicename)))
            return _.LiuHai_ADD_HEIGHT = 70,
            !0;
        if (w.onOhos && 0 < c.androidRealHeight)
            return _.LiuHai_ADD_HEIGHT = 60,
            !0;
        if (w.onMiniGame || w.onKSMiniGame || w.onAndroid && (0 == c.androidNotchStatus || 2 == c.androidNotchStatus && Math.abs(c.androidRealHeight - w.clientHeight) <= 10))
            return _.LiuHai_ADD_HEIGHT = w.onKSMiniGame ? 115 : 56,
            n = w.window.qq,
            o = w.window.wx,
            e = w.window.qg,
            i = w.window.ks,
            s = {},
            n && n.getSystemInfoSync ? s = n.getSystemInfoSync() : o && o.getSystemInfoSync ? s = o.getSystemInfoSync() : e && e.getSystemInfoSync ? s = e.getSystemInfoSync() : i && i.getSystemInfoSync && (s = i.getSystemInfoSync()),
            s && s.model && 0 <= s.model.indexOf("iPhone15") && (_.LiuHai_ADD_HEIGHT = 70),
            !0;
        var n = w.clientHeight
          , o = w.clientWidth;
        if ("tencent" == _.CHANNEL_SING) {
            if (-1 != w.userAgent.indexOf("LYA-AL10") && 360 == o && 755 == n)
                return !1;
            if ("wanba_ts.105" == _.tencent_pf || "wanba_ts.113" == _.tencent_pf || "weixin.114" == _.tencent_pf)
                return !0;
            if (Math.abs(n - 812) <= 10 && Math.abs(o - 375) <= 10)
                return !0;
            if (1.95 < n / o)
                return !0
        }
        return "602" == _.PID || "46" == _.PID && 2.159 < w.clientHeight / w.clientWidth || !!_.isIphoneX || !!r.isConchApp && !w.onIOS && !(!t || n <= 0 || o <= 0) && (("PACM00" == t || "PACT00" == t) && 2270 / 1080 < n / o || "PBCM10" == t && 2330 / 1080 < n / o || "PBCM30" == t && 2330 / 1080 < n / o || -1 != t.indexOf("PCHM") && 2330 / 1080 < n / o || -1 != t.indexOf("vivo X2") && 2270 / 1080 < n / o || ("COL-AL10" == t || "COL-AL00" == t || "COL-TL10" == t || "COL-TL00" == t) && 2140 / 1080 < n / o || ("EML-AL00" == t || "EML-TL00" == t) && 1.95 < n / o)
    }),
    e(1, _, "deviceInfo", function() {
        return _.s_deviceInfo = _.s_deviceInfo || (_.s_deviceInfo = w.window.conch && w.window.conch.config.getDeviceInfo ? JSON.parse(w.window.conch.config.getDeviceInfo()) : _.s_deviceInfo) ? _.s_deviceInfo : {}
    }),
    e(1, _, "phoneModel", function() {
        return r.isConchApp && _.deviceInfo.hasOwnProperty("phonemodel") ? _.deviceInfo.phonemodel : ""
    }),
    e(1, _, "phoneOs", function() {
        return r.isConchApp ? (_.deviceInfo.hasOwnProperty("os") ? _.deviceInfo.os : "") + (_.deviceInfo.hasOwnProperty("osversion") ? _.deviceInfo.osversion : "") : ""
    }),
    e(1, _, "isOppoFindN", function() {
        var t = _.deviceInfo.phonemodel;
        return t && ("PEUM00" == t || "PGU110" == t) && .83 < w.clientWidth / w.clientHeight && 2 == c.androidNotchStatus && Math.abs(c.androidRealHeight - w.clientHeight) <= 10
    }),
    e(1, _, "oppoFindNLiuhai", function() {
        return _.isOppoFindN ? 70 : _.LiuHai_ADD_HEIGHT
    }),
    e(1, _, "isHuaweiLargeCam", function() {
        var t = w.clientHeight
          , e = w.clientWidth;
        return w.onOhos ? .88 < e / t : (e = .88 < e / t && e / t < 2200 / 2300,
        (w.onMiniGame || !!_.isHuaweiLargeCamModel) && e)
    }),
    e(1, _, "isOppoLargeCam", function() {
        var t = w.clientHeight
          , e = !1;
        return 1 < w.clientWidth / t && _.deviceInfo && _.deviceInfo.phonemodel && ("PEUM00" == _.deviceInfo.phonemodel || "PGU110" == _.deviceInfo.phonemodel) && (e = !0),
        (w.onMiniGame || !!_.isHuaweiLargeCamModel) && e
    }),
    e(1, _, "isHuaweiLargeCamModel", function() {
        var t;
        return !w.onMiniGame && !!r.isConchApp && !(w.onIOS || !(t = _.deviceInfo.phonemodel) || "RLI-AN00" != t && "RLI_N29" != t && "TAH-AN00" != t && "TAH-N29" != t && "TAH-AN00m" != t && "RHA-AN00m" != t && "PEUM00" != t && "PGU110" != t)
    }),
    e(1, _, "isIphoneX", function() {
        return !!w.onIOS && 2.159 < w.clientHeight / w.clientWidth
    }),
    e(1, _, "isSubscribe", function() {
        return !!_.shareGm || !_.tencent_app && _.isHavePl(_.subscribe_switch)
    }),
    e(1, _, "isShared", function() {
        return !!_.shareGm || !(!E.isQQBrowser || !E.isQQBrowser()) || !_.tencent_app && _.isHavePl(_.shared_switch)
    }),
    e(1, _, "isAuditing", function() {
        return _.debugAuditing <= 0 ? 99950 <= _.SERVER && _.SERVER <= 99990 : 1 == _.debugAuditing
    }),
    e(1, _, "isMainAuditing", function() {
        return 99981 == _.SERVER
    }),
    e(1, _, "account", function() {
        return _.SERVER + "_" + _.userAccount
    }),
    e(1, _, "Language", function() {
        return _._language = null != _._language && "" != _._language && null != _._language ? _._language : _.defaultLang
    }),
    e(1, _, "isVNRegion", function() {
        return _._isVNRegion
    }),
    e(1, _, "isTDRegion", function() {
        return _._isTDRegion
    }),
    e(1, _, "isVNTDPackage", function() {
        return _._isVNTDPackage
    }),
    e(1, _, "isVNTDServer", function() {
        return _._isVNTDServer
    }),
    e(1, _, "isTHAIServer", function() {
        return _._isTHAIServer
    }),
    e(1, _, "isGoldServer", function() {
        for (var t = 0; t < _.goldServerPidAndGidArr.length; t++) {
            var e = _.goldServerPidAndGidArr[t];
            if (0 < e.indexOf(_.gid) && _.PID == e[0])
                return !0
        }
        return !1
    }),
    _.isHavePl = function(t) {
        for (var e = t.split(","), i = 0; i < e.length; i++)
            if (_.subscribeList[e[i]])
                return !0;
        return !1
    }
    ,
    _.getNoVerPath = function(t) {
        return !r.isConchApp && w.window.pageVer && "" != w.window.pageVer ? t + "?" + w.window.pageVer : t
    }
    ,
    _.checkIsAuditing = function(t) {
        return _.debugAuditing <= 0 ? 99950 <= t && t <= 99990 : 1 == _.debugAuditing
    }
    ,
    _.initColor = function() {
        r.isConchApp ? _.Name_Font_Stroke = .3 : w.onPC ? _.Name_Font_Stroke = 1.5 : _.Name_Font_Stroke = 2
    }
    ,
    _.initReplace = function(t) {
        if (!_.isReplace && w.window.skins) {
            var e, i = w.window.skins;
            for (e in i) {
                for (var s, n = i[e], o = 0, a = n.gids ? n.gids.length : 0; o < a; o++)
                    if (n.gids[o] == t) {
                        _.isReplace = !0;
                        break
                    }
                if (_.isReplace) {
                    for (s in _.replaceUrls = {},
                    n.pics) {
                        var r, l = (l = (r = n.pics[s]).replace("skins/" + e + "/", "")).replace(/^(.*)\_\d{6,}\.(jpg|jpeg|png|json)$/i, "$1.$2");
                        _.replaceUrls[l] = r
                    }
                    break
                }
            }
            w.window.skins = null
        }
    }
    ,
    _.getReplaceUrl = function(t) {
        var e;
        return t && _.isReplace && _.replaceUrls && (e = t.replace(/^(.*)\_\d{6,}\.(jpg|jpeg|png|json)$/i, "$1.$2"),
        w.window.isHwWai && (e = "wai/" + e),
        _.replaceUrls[e]) || t
    }
    ,
    _.isHuaWei = function() {
        return "1002997" == _.gid && "17" == _.PID
    }
    ,
    _.isYingYongBao = function() {
        return "1002997" == _.gid && "41" == _.PID
    }
    ,
    _.getRandomName = function(t, e) {
        void 0 === e && (e = !0);
        var i = d.firstNames[Math.floor(Math.random() * d.firstNames.length)]
          , t = t ? d.boyNames : d.girlNames
          , t = t[Math.floor(Math.random() * t.length)];
        return e ? i + t : t
    }
    ,
    _.isWx = function() {
        var t = w.window.wx;
        return !w.window.qq && t
    }
    ,
    _.isWxOrKuaishou = function() {
        return w.onVVMiniGame || w.onKSMiniGame || w.onMiniGame && ("484" == _.PID || "442" == _.PID || "648" == _.PID || "644" == _.PID) || "1" == _.PID && c.isKuaishowServer(_.SERVER)
    }
    ,
    _.isGoldServerByZone = function(t) {
        console.log("Select ServerZone:" + t);
        for (var e = 0; e < _.goldServerZoneArr.length; e++)
            if (t == _.goldServerZoneArr[e])
                return !0;
        return !1
    }
    ,
    _.isGoldServerByServerId = function(t) {
        console.log("Select ServerId:" + t);
        for (var e, i, s = 0; s < _.goldServerServerArr.length; s++)
            if (e = _.goldServerServerArr[s][0],
            i = _.goldServerServerArr[s][1],
            e <= t && t <= i)
                return !0;
        return !1
    }
    ,
    _.userAccount = "",
    _.CHANNEL_SING = "",
    _.IP = "10.11.2.7",
    _.PORT = 22222,
    _.OP = "37wan",
    _.SERVER = 1,
    _.REFERER = "37wan",
    _.TIME = 0,
    _.SIGN = "",
    _.PID = "test",
    _.CDN_LIST = [],
    _._serverName = "",
    _.gid = "",
    _.isNewLogin = !1,
    _.canSendClientid = !1,
    _.clientid = "",
    _.appPackageName = null,
    _.appName = "",
    _.platform = 0,
    _._language = null,
    _.defaultLang = "zh",
    _._m_paySwitch = 1,
    _.isCanScanCode = !1,
    _.isPcLaunch = !1,
    _._country = null,
    _.plat_tw = "gm99",
    _.plat_global = "global",
    _.plat_zh = "37wan",
    _.oneStorePackage = "com.global.sl.onestore",
    _._isVNRegion = !1,
    _._isTDRegion = !1,
    _._isVNTDPackage = !1,
    _._isVNTDServer = !1,
    _._isTHAIServer = !1,
    _.isCfgInited = !1,
    _.tencent_gid = null,
    _.tencent_platform = 0,
    _.tencent_openid = null,
    _.tencent_openkey = null,
    _.tencent_pf = null,
    _.tencent_gift = null,
    _.tencent_app = null,
    _.tencent_qua = null,
    _.tencent_via = null,
    _.QQDTPfkey = null,
    _.QQDTExt = null,
    _.QQBSOpenId = null,
    _.QQBSToken = null,
    _.QQBSRefreshToken = null,
    _.QQBSTokenEndTime = null,
    _.QQBSRspsig = null,
    _.QQBSAppID = null,
    _._LiuHai_ADD_HEIGHT = 46,
    _.s_deviceInfo = null,
    _.createRoleSex = 0,
    _.createRoleName = null,
    _._CDN = "",
    _.subscribe_switch = "",
    _.shared_switch = "other",
    _.wx_is_subscribe = "",
    _.shareGm = !1,
    _.debugAuditing = 0,
    _.clickStream = 1,
    _.channelqueryurl = "",
    _.zoneid = 1,
    _.rechargeAddress = "http://apipayh5.37.com/index.php?c=order&a=create_order",
    _.nickname = null,
    _.userNickName = null,
    _.PLATFORM = 0,
    _.PUBLIC_CD_MIN = 200,
    _.MONSTER_RUN_ACT_DEFAULT_TIME = 200,
    _.PLAYER_RUN_ACT_DEFAULT_TIME = 280,
    _.DROP_PICK_SMALL_RANGE = 125,
    _.DROP_PICK_BIG_RANGE = 800,
    _.CUTE_PET_WALK_MAX_RANGE = 900,
    _.CUTE_PET_NORMAL = 1,
    _.CUTE_PET_FOLLOW = 2,
    _.CUTE_PET_MOVE_TO_DROP = 3,
    _.DROP_CUTE_PET_PICK_LIMIT = 5,
    _.Name_Font_Stroke = 2,
    _.isReplace = !1,
    _.replaceUrls = null,
    _.isWXNew = !1,
    _.isInZhanwuji = !1,
    _.isFinishOne = !1,
    _.isSelectPrivacy = !1,
    O(_, ["s_actionWuhunTable", function() {
        return this.s_actionWuhunTable = [null, ["act01", "act03", "act05", "act15", "act16"], ["act101", "act103", "act105", "act115", "act116"], ["act201", "act203", "act205", "act215", "act216"]]
    }
    , "gamePlat", function() {
        return this.gamePlat = _.plat_zh
    }
    , "vnPids", function() {
        return this.vnPids = ["649041", "649042", "649043", "649044", "650041", "650042", "650043", "650044"]
    }
    , "tdPids", function() {
        return this.tdPids = ["648041", "648042", "648043", "648044"]
    }
    , "subscribeList", function() {
        return this.subscribeList = {
            wx: w.onWeiXin,
            qq: w.onMQQBrowser,
            other: !0
        }
    }
    , "PICK_LIST_WITH_BAG_FULL", function() {
        return this.PICK_LIST_WITH_BAG_FULL = [700034, 700035, 700036, 1e6]
    }
    , "goldServerPidAndGidArr", function() {
        return this.goldServerPidAndGidArr = [["787", "1023116", "1023117", "1023118", "1023119", "1023120", "1023121", "1023325", "1023326", "1023327", "1023328", "1023329"], ["476", "1023306", "1023307", "1023308", "1023309", "1023310"], ["797", "1023301", "1023302", "1023303", "1023304", "1023305"], ["805", "1023393"], ["806", "1023393"]]
    }
    , "goldServerZoneArr", function() {
        return this.goldServerZoneArr = [1]
    }
    , "goldServerServerArr", function() {
        return this.goldServerServerArr = [[1270001, 1279999], [1280001, 1289999], [1290001, 1299999], [1300001, 1309999], [1310001, 1319999]]
    }
    ]);
    var g = _;
    function _() {}
    t(Vt, "app.QueueLoader"),
    (v = Vt.prototype).add = function(t) {
        this.m_state != this.State_None ? console.error("严重错误，只能在未执行前往队列里加处理") : this.m_queue.push(t)
    }
    ,
    v.begin = function() {
        this.m_state != this.State_None ? console.error("严重错误，批量加载器的begin只能调用一次") : 0 == this.m_queue.length ? console.error("队列为空") : (Vt.s_loadings.push(this),
        this.m_state = this.State_Loading,
        this.loadNext(-1))
    }
    ,
    v.setFinishHandle = function(t) {
        this.m_state != this.State_None ? console.error("严重错误，批量加载器的setFinishHandle只能在未加载前掉用,否则无效") : this.m_onFinish ? console.error("严重错误，只能设置一次") : this.m_onFinish = t
    }
    ,
    v.loadNext = function(t) {
        this.m_state == this.State_Loading && this.m_loadingIdx == t && (++this.m_loadingIdx,
        this.m_loadingIdx == this.m_queue.length ? (this.m_state = this.State_Over,
        Vt.s_loadings.splice(Vt.s_loadings.indexOf(this), 1),
        this.m_onFinish && (this.m_onFinish.run(),
        this.m_onFinish = null)) : this.m_queue[this.m_loadingIdx].runWith(b.create(this, this.loadNext, [this.m_loadingIdx])))
    }
    ,
    O(Vt, ["s_loadings", function() {
        return this.s_loadings = []
    }
    ]);
    var Ut = Vt;
    function Vt() {
        this.State_None = "State_None",
        this.State_Loading = "State_Loading",
        this.State_Over = "State_Over",
        this.m_state = this.State_None,
        this.m_onFinish = null,
        this.m_queue = [],
        this.m_loadingIdx = -1
    }
    t(Xt, "app.WuhunScrollList"),
    (v = Xt.prototype).init = function(t, e, i, s, n, o) {
        this.m_scrollArea = t,
        this.m_ptsParent = e,
        this.m_back = i,
        this.m_front = s,
        this.m_render = n,
        this.m_mouseEvent = o;
        for (var a = 0; a < e.numChildren; ++a) {
            var r = e.getChildAt(a);
            r.visible = !1,
            this.m_pts.push(new pt(r.x,r.y))
        }
        this.m_visibleCount = e.numChildren - 1,
        this.m_pts = Wt.calcBeginAndEnd(this.m_pts),
        o && this.m_scrollArea.on("mousedown", this, this.onMouseDown),
        this.m_scrollArea.on("display", this, this.onDisplay),
        this.m_scrollArea.on("undisplay", this, this.onUnDisplay),
        x.timer.frameLoop(1, this, this.onUpdate)
    }
    ,
    v.onMoseEvent = function(t) {
        this.m_mouseEvent = t,
        this.m_mouseEvent ? this.m_scrollArea.on("mousedown", this, this.onMouseDown) : this.m_scrollArea.off("mousedown", this, this.onMouseDown)
    }
    ,
    v.select = function(t) {
        this.setPos(t, 0)
    }
    ,
    v.getCurPos = function() {
        return [this._curSetIndex, this._curSetPos]
    }
    ,
    v.getUseIngItemArr = function() {
        return this.m_using.concat()
    }
    ,
    v.clear = function() {
        for (var t = [], e = this.m_using.length - 1; 0 <= e; --e) {
            var i = this.m_using[e];
            i.removeSelf(),
            i._splineIdx = -1,
            i.hasOwnProperty("clear") && i.clear(),
            this.m_using.splice(e, 1),
            t.push(i)
        }
        for (e = t.length - 1; 0 <= e; e--)
            this.m_pool.push(t[e]);
        t = [],
        this._smoothCxtX.currentVelocity = 0,
        this.m_curPos = 0
    }
    ,
    v.setPosSmooth = function(t, e, i) {
        var s = 1 / this.m_visibleCount;
        this._smoothPos = e - t * s,
        this._smoothCxtX.currentVelocity = this._smoothPos - this.m_curPos,
        this._completeHandler = i
    }
    ,
    v.setPos = function(t, e) {
        if (0 != this.m_visibleCount) {
            this._curSetIndex = t,
            this._curSetPos = e;
            for (var i = 1 / this.m_visibleCount, s = (this.m_curPos = e - t * i,
            Math.ceil((0 - this.m_curPos) / i + 1e-5)), n = Math.floor((1 - this.m_curPos) / i + 1e-5), o = {}, a = 0, a = this.m_using.length - 1; 0 <= a; --a) {
                var r, l = (r = this.m_using[a])._splineIdx;
                l < s || n < l ? (r._splineIdx = -1,
                r.removeSelf(),
                this.m_using.splice(a, 1),
                this.m_pool.push(r)) : o[l] = r
            }
            for (a = s; a <= n; ++a) {
                (r = o[a]) || (c = (r = 0 < this.m_pool.length ? this.m_pool.shift() : new this.m_render)._splineIdx = a,
                (c %= this._array.length) < 0 && (c += this._array.length),
                r.dataSource = this._array[c],
                this.m_using.push(r),
                r.on("mousedown", this, this.onMouseDown));
                var h = (c = this.m_curPos + a * i) < .5 ? .5 - c : c - .5
                  , h = Number(h.toFixed(4))
                  , c = (x.__typeof(r, jn) ? (p = .25 <= c && c <= .75 ? (r.alpha = 1) - Math.abs(c - .5) / .25 * .25 : (r.alpha = 1 - 8 * (Math.abs(c - .5) - .25),
                .75 - (Math.abs(c - .5) - .25) / .25 * .75),
                r.scale(p, p)) : .3 <= h ? r.scale(1, 1) : r.scale(1.2 - 2 * h, 1.2 - 2 * h),
                "0.5" == c.toFixed(1) && (this.centerItem = r),
                r.hasOwnProperty("tweenIndex") && (r.tweenIndex = h),
                h < .25 ? r.parent != this.m_front && this.m_front.addChild(r) : r.parent != this.m_back && this.m_back.addChild(r),
                +c)
                  , p = Wt.sample(this.m_pts, c);
                r.x = p.x,
                r.y = p.y
            }
            this.m_scrollArea.event("EVENT_MOVE_COMPLETE")
        }
    }
    ,
    v.onMouseDown = function(t) {
        this.m_mouseEvent && (this._isDraging = !0,
        this._globalScaleX = this.m_scrollArea.globalScaleX,
        this._tx = x.stage.mouseX,
        this._downX = x.stage.mouseX,
        this._smoothCxtX.currentVelocity = 0,
        this._lastDragPos = this.m_curPos,
        x.stage.on("mousemove", this, this.onMouseMove),
        x.stage.once("mouseup", this, this.onMouseUp),
        x.stage.once("mouseout", this, this.onMouseUp))
    }
    ,
    v.onMouseMove = function(t) {
        var e;
        this._isDraging && (Math.abs(x.stage.mouseX - this._downX) <= this.SCROLL_THRESHOLD || (e = (x.stage.mouseX - this._tx) / this._globalScaleX,
        this.setPos(0, this.m_curPos + (e /= 1e3))),
        this._tx = x.stage.mouseX)
    }
    ,
    v.onMouseUp = function(t) {
        this._isDraging = !1,
        x.stage.off("mousemove", this, this.onMouseMove),
        x.stage.off("mouseup", this, this.onMouseUp),
        x.stage.off("mouseout", this, this.onMouseUp)
    }
    ,
    v.onDisplay = function(t) {
        x.timer.frameLoop(1, this, this.onUpdate)
    }
    ,
    v.onUnDisplay = function(t) {
        x.timer.clear(this, this.onUpdate)
    }
    ,
    v.OutOfEndsPercent = function() {
        var t = this._array.length < this.m_visibleCount
          , e = 1 / this.m_visibleCount;
        if (t) {
            if (this.m_curPos < 0)
                return 0 - this.m_curPos;
            t = 1 - this._array.length * e;
            if (this.m_curPos > t)
                return t - this.m_curPos
        }
        t = -this._array.length * e + 1;
        return this.m_curPos < t ? t - this.m_curPos : 0 < this.m_curPos ? 0 - this.m_curPos : 0
    }
    ,
    v.onUpdate = function() {
        var t, e, i;
        this._array && 0 != this._array.length && (t = x.timer.delta / 1e3,
        i = 1 / this.m_visibleCount,
        this._isDraging || (e = this._smoothPos == this.Invaild_Pos ? (e = this.OutOfEndsPercent(),
        e = this.m_curPos < 0 ? this.m_curPos % i == 0 ? 0 : i + this.m_curPos % i : this.m_curPos % i,
        Math.abs(this._smoothCxtX.currentVelocity) < .001 ? (this._smoothCxtX.currentVelocity = 1,
        e / i < .5 ? -e : i - e) : this._smoothCxtX.currentVelocity < 0 ? -e : 0 == e ? 0 : i - e) : this._smoothPos - this.m_curPos,
        .001 < Math.abs(e) ? (this._smoothCxtX.current = this.m_curPos,
        this._smoothCxtX.target = this.m_curPos + e,
        this._smoothCxtX.smoothTime = .1,
        this._smoothCxtX.deltaTime = t,
        Xt.SmoothDamp(this._smoothCxtX),
        this.setPos(0, this._smoothCxtX.current),
        this.m_scrollArea.event("EVENT_MOVE_COMPLETE")) : (this._smoothCxtX.currentVelocity = 0,
        1e-5 < Math.abs(e) && (this.setPos(0, this.m_curPos + e),
        this._smoothPos = this.Invaild_Pos,
        this.m_scrollArea.event("EVENT_MOVE_COMPLETE"),
        this.m_scrollArea.event("EVENT_MOVE_COMPLETE1"),
        this._completeHandler && this._completeHandler.run(),
        this._completeHandler = null))),
        this._isDraging) && (i = (this.m_curPos - this._lastDragPos) / t,
        this._smoothCxtX.currentVelocity = Xt.lerp(this._smoothCxtX.currentVelocity, i, 10 * t),
        this._lastDragPos = this.m_curPos)
    }
    ,
    e(0, v, "array", function() {
        return this._array
    }, function(t) {
        this._array = t,
        this.clear(),
        this.setPos(0, this.m_curPos)
    }),
    Xt.lerp = function(t, e, i) {
        return t + (e - t) * (i = 1 < (i = i < 0 ? 0 : i) ? 1 : i)
    }
    ,
    Xt.SmoothDamp = function(t) {
        var e = t.current
          , i = t.target
          , s = t.currentVelocity || 0
          , n = t.smoothTime || .3
          , o = t.maxSpeed || 99999999
          , a = t.deltaTime
          , r = 2 / (n = Math.max(1e-4, n))
          , l = r * a
          , l = 1 / (1 + l + .48 * l * l + .235 * l * l * l)
          , h = e - i
          , o = o * n
          , n = (s + r * (h = o < (h = h < -o ? -o : h) ? o : h)) * a
          , s = (s - r * n) * l
          , o = e - h + (h + n) * l;
        0 < i - e == i < o && (s = ((o = i) - i) / a),
        t.currentVelocity = s,
        t.current = o
    }
    ;
    var zt = Xt;
    function Xt() {
        this.m_visibleCount = 0,
        this.m_scrollArea = null,
        this.m_ptsParent = null,
        this.m_back = null,
        this.m_front = null,
        this.m_render = null,
        this.m_mouseEvent = !1,
        this.m_pool = [],
        this.m_using = [],
        this._array = null,
        this._curSetIndex = 0,
        this._curSetPos = 0,
        this.m_curPos = 0,
        this.m_pts = [],
        this.centerItem = null,
        this.SCROLL_THRESHOLD = 15,
        this.Invaild_Pos = -99999,
        this._smoothPos = this.Invaild_Pos,
        this._completeHandler = null,
        this._isDraging = !1,
        this._globalScaleX = 0,
        this._lastDragPos = 0,
        this._tx = NaN,
        this._downX = NaN,
        this._smoothCxtX = {}
    }
    t(jt, "app.WuhunSpline"),
    jt.calcBeginAndEnd = function(t) {
        var e = new pt(t[0].x + (t[0].x - t[1].x),t[0].y + (t[0].y - t[1].y))
          , i = new pt(t[t.length - 1].x + (t[t.length - 1].x - t[t.length - 2].x),t[t.length - 1].y + (t[t.length - 1].y - t[t.length - 2].y));
        return t.unshift(e),
        t.push(i),
        t
    }
    ,
    jt.sample = function(t, e) {
        if (t.length < 3)
            throw new Error(d.getI18(40007));
        1 < (e = e < 0 ? 0 : e) && (e = 1);
        var i = t.length - 3
          , s = Math.min(Math.floor(e * i), i - 1)
          , e = e * i - s
          , i = t[s]
          , n = t[s + 1]
          , o = t[s + 2]
          , t = t[s + 3]
          , s = .5 * ((-i.x + 3 * n.x - 3 * o.x + t.x) * (e * e * e) + (2 * i.x - 5 * n.x + 4 * o.x - t.x) * (e * e) + (-i.x + o.x) * e + 2 * n.x)
          , t = .5 * ((-i.y + 3 * n.y - 3 * o.y + t.y) * (e * e * e) + (2 * i.y - 5 * n.y + 4 * o.y - t.y) * (e * e) + (-i.y + o.y) * e + 2 * n.y);
        return new pt(s,t)
    }
    ,
    jt.createSplinePoints = function(t, e) {
        for (var i = [], s = 1; s < e - 1; s++) {
            var n = jt.sample(t, s / (e - 1));
            i.push(n)
        }
        return i
    }
    ;
    var Wt = jt;
    function jt() {}
    t(f, "app.ccTween.CCTween"),
    (v = f.prototype).to = function(t) {
        for (var e, i = t instanceof Array ? t : [t], s = qt.create(), n = i.length, o = 0; o < n; o++)
            for (var a in e = i[o].ease || Qt.ease,
            i[o])
                i[o].hasOwnProperty(a) && "ease" != f.keyData[a] && (f.keyData[a] ? s[a] = i[o][a] : (s.props.push(a),
                s.ends.push(i[o][a]),
                s.ease.push(e)));
        return (this.tweenDataList || (this.tweenDataList = [])).push(s),
        f.addTween(this),
        this
    }
    ,
    v.wait = function(t) {
        var e = (e = this.tweenDataList) || (this.tweenDataList = [])
          , i = qt.create();
        return i.duration = t,
        e.push(i),
        f.addTween(this),
        this
    }
    ,
    v.call = function(t, e, i) {
        var s = this.tweenDataList
          , n = 0 < (s = s || (this.tweenDataList = [])).length ? s[s.length - 1] : null;
        return (n = n && null == n.call ? n : qt.create()).call = t,
        n.thisObj = e,
        n.args = i,
        s.indexOf(n) < 0 && s.push(n),
        this
    }
    ,
    v.end = function() {
        f.removeTween(this);
        for (var t = this.tweenDataList, e = t ? t.length : 0, i = 0; i < e; i++) {
            for (var s = t[i], n = s.props.length, o = 0; o < n; o++)
                this.target[s.props[o]] = s.ends[o];
            s.isCalled || null == s.call || (s.isCalled = !0,
            s.call.call(s.thisObj, this.target, s.args))
        }
        return this
    }
    ,
    v.pause = function() {
        return f.removeTween(this),
        this
    }
    ,
    v.resume = function() {
        return f.addTween(this),
        this
    }
    ,
    v.destroy = function() {
        this.target = null,
        this.autoRemove = !1;
        var t, e = this.tweenDataList;
        if (e) {
            for (t in e)
                e[t].destroy();
            this.tweenDataList = null
        }
        (f.cemetery = f.cemetery ? f.cemetery : []).push(this)
    }
    ,
    f.get = function(t, e) {
        void 0 === e && (e = !1);
        var i = f.create();
        return i.target = t,
        i.autoRemove = e && x.__typeof(t, q),
        i
    }
    ,
    f.removeTweens = function(t, e) {
        void 0 === e && (e = !1);
        var i = f.tweenList;
        if (i)
            for (var s = i.length, n = 0; n < s; n++) {
                var o, a = i[n];
                if (a.target == t)
                    return 0 <= (o = i.indexOf(a)) && i.splice(o, 1),
                    e ? (a.destroy(),
                    null) : a
            }
        return null
    }
    ,
    f.create = function() {
        return f.cemetery && f.cemetery.length ? f.cemetery.pop() : new f
    }
    ,
    f.addTween = function(t) {
        var e = (e = f.tweenList) || (f.tweenList = []);
        if (!(0 <= e.indexOf(t))) {
            for (var i = e ? e.length : 0, s = 0; s < i; s++) {
                var n = e[s];
                if (n.target == t.target) {
                    var o = e.indexOf(n);
                    0 <= o && e.splice(o, 1),
                    n.end(),
                    n.destroy();
                    break
                }
            }
            e.push(t),
            0 == f.lastTime && (f.lastTime = x.timer.currTimer,
            x.timer.frameLoop(1, f, f.enterFrameHandler))
        }
    }
    ,
    f.removeTween = function(t) {
        var e = f.tweenList;
        e && 0 < (t = e.indexOf(t)) && e.splice(t, 1)
    }
    ,
    f.enterFrameHandler = function() {
        var t = f.tweenList;
        if (t && 0 != t.length) {
            for (var e = x.timer.currTimer, i = e - f.lastTime, s = (f.lastTime = e,
            t.length,
            t.length - 1); 0 <= s; s--) {
                var n = t[s];
                if (!n || n.autoRemove && null == n.target.parent || null == n.tweenDataList || null == n.target)
                    0 <= (o = t.indexOf(n)) && t.splice(o, 1),
                    n && n.destroy();
                else if (x.__typeof(n.target, q) && n.target.destroyed)
                    0 <= (o = t.indexOf(n)) && t.splice(o, 1),
                    n.destroy();
                else {
                    var o, a = n.tweenDataList[0];
                    if (0 == a.time)
                        for (r = a.props.length,
                        l = 0; l < r; l++)
                            a.begins.push(n.target[a.props[l]]);
                    if (a.time += i,
                    a.time < a.duration)
                        for (var r = a.props.length, l = 0; l < r; l++)
                            n.target[a.props[l]] = a.ease[l](a.time, a.begins[l], a.ends[l] - a.begins[l], a.duration);
                    else {
                        for (r = a.props.length,
                        l = 0; l < r; l++)
                            n.target[a.props[l]] = a.ends[l];
                        a.isCalled || null == a.call || (a.isCalled = !0,
                        a.call.call(a.thisObj, n.target, a.args)),
                        n.tweenDataList && (n.tweenDataList.shift(),
                        a.destroy(),
                        0 == n.tweenDataList.length) && (0 <= (o = t.indexOf(n)) && t.splice(o, 1),
                        n.destroy())
                    }
                }
            }
            0 == t.length && (x.timer.clear(f, f.enterFrameHandler),
            f.lastTime = 0)
        } else
            x.timer.clear(f, f.enterFrameHandler),
            f.lastTime = 0
    }
    ,
    f.__init$ = function() {
        f.keyData.duration = !0,
        f.keyData.call = !0,
        f.keyData.thisObj = !0,
        f.keyData.args = !0,
        f.keyData.isCall = !0,
        f.keyData.ease = "ease"
    }
    ,
    f.cemetery = null,
    f.lastTime = 0,
    f.tweenList = null,
    f.keyData = {};
    var Yt = f;
    function f() {
        this.target = null,
        this.autoRemove = !1,
        this.tweenDataList = null
    }
    t(y, "app.ccTween.CCTween1"),
    (v = y.prototype).to = function(t) {
        for (var e, i = t instanceof Array ? t : [t], s = qt.create(), n = i.length, o = 0; o < n; o++)
            for (var a in e = i[o].ease || Qt.ease,
            i[o])
                i[o].hasOwnProperty(a) && "ease" != y.keyData[a] && (y.keyData[a] ? s[a] = i[o][a] : (s.props.push(a),
                s.ends.push(i[o][a]),
                s.ease.push(e)));
        return (this.tweenDataList || (this.tweenDataList = [])).push(s),
        y.addTween(this),
        this
    }
    ,
    v.wait = function(t) {
        var e = (e = this.tweenDataList) || (this.tweenDataList = [])
          , i = qt.create();
        return i.duration = t,
        e.push(i),
        y.addTween(this),
        this
    }
    ,
    v.call = function(t, e, i) {
        var s = this.tweenDataList
          , n = 0 < (s = s || (this.tweenDataList = [])).length ? s[s.length - 1] : null;
        return (n = n && null == n.call ? n : qt.create()).call = t,
        n.thisObj = e,
        n.args = i,
        s.indexOf(n) < 0 && s.push(n),
        this
    }
    ,
    v.end = function() {
        y.removeTween(this);
        for (var t = this.tweenDataList, e = t ? t.length : 0, i = 0; i < e; i++) {
            for (var s = t[i], n = s.props.length, o = 0; o < n; o++)
                this.target[s.props[o]] = s.ends[o];
            s.isCalled || null == s.call || (s.isCalled = !0,
            s.call.call(s.thisObj, this.target, s.args))
        }
        return this
    }
    ,
    v.pause = function() {
        return y.removeTween(this),
        this
    }
    ,
    v.resume = function() {
        return y.addTween(this),
        this
    }
    ,
    v.destroy = function() {
        this.target = null,
        this.autoRemove = !1;
        var t, e = this.tweenDataList;
        if (e) {
            for (t in e)
                e[t].destroy();
            this.tweenDataList = null
        }
        (y.cemetery = y.cemetery ? y.cemetery : []).push(this)
    }
    ,
    y.get = function(t, e) {
        void 0 === e && (e = !1);
        var i = y.create();
        return i.target = t,
        i.autoRemove = e && x.__typeof(t, q),
        i
    }
    ,
    y.removeTweens = function(t, e) {
        void 0 === e && (e = !1);
        var i = y.tweenList;
        if (i)
            for (var s = i.length, n = 0; n < s; n++) {
                var o, a = i[n];
                if (a.target == t)
                    return 0 <= (o = i.indexOf(a)) && i.splice(o, 1),
                    e ? (a.destroy(),
                    null) : a
            }
        return null
    }
    ,
    y.create = function() {
        return y.cemetery && y.cemetery.length ? y.cemetery.pop() : new y
    }
    ,
    y.addTween = function(t) {
        var e = (e = y.tweenList) || (y.tweenList = []);
        if (!(0 <= e.indexOf(t))) {
            for (var i = e ? e.length : 0, s = 0; s < i; s++) {
                var n = e[s];
                if (n.target == t.target) {
                    var o = e.indexOf(n);
                    0 <= o && e.splice(o, 1),
                    n.end(),
                    n.destroy();
                    break
                }
            }
            e.push(t),
            0 == y.lastTime && (y.lastTime = w.now(),
            x.timer.frameLoop(1, y, y.enterFrameHandler, null, !0, !0))
        }
    }
    ,
    y.removeTween = function(t) {
        var e = y.tweenList;
        e && 0 < (t = e.indexOf(t)) && e.splice(t, 1)
    }
    ,
    y.enterFrameHandler = function() {
        var t = y.tweenList;
        if (t && 0 != t.length) {
            for (var e = w.now(), i = e - y.lastTime, s = (y.lastTime = e,
            t.length,
            t.length - 1); 0 <= s; s--) {
                var n = t[s];
                if (!n || n.autoRemove && null == n.target.parent || null == n.tweenDataList || null == n.target)
                    0 <= (o = t.indexOf(n)) && t.splice(o, 1),
                    n && n.destroy();
                else if (x.__typeof(n.target, q) && n.target.destroyed)
                    0 <= (o = t.indexOf(n)) && t.splice(o, 1),
                    n.destroy();
                else {
                    var o, a = n.tweenDataList[0];
                    if (0 == a.time)
                        for (r = a.props.length,
                        l = 0; l < r; l++)
                            a.begins.push(n.target[a.props[l]]);
                    if (a.time += i,
                    a.time < a.duration)
                        for (var r = a.props.length, l = 0; l < r; l++)
                            n.target[a.props[l]] = a.ease[l](a.time, a.begins[l], a.ends[l] - a.begins[l], a.duration);
                    else {
                        for (r = a.props.length,
                        l = 0; l < r; l++)
                            n.target[a.props[l]] = a.ends[l];
                        a.isCalled || null == a.call || (a.isCalled = !0,
                        a.call.call(a.thisObj, n.target, a.args)),
                        n.tweenDataList && (n.tweenDataList.shift(),
                        a.destroy(),
                        0 == n.tweenDataList.length) && (0 <= (o = t.indexOf(n)) && t.splice(o, 1),
                        n.destroy())
                    }
                }
            }
            0 == t.length && (x.timer.clear(y, y.enterFrameHandler),
            y.lastTime = 0)
        } else
            x.timer.clear(y, y.enterFrameHandler),
            y.lastTime = 0
    }
    ,
    y.__init$ = function() {
        y.keyData.duration = !0,
        y.keyData.call = !0,
        y.keyData.thisObj = !0,
        y.keyData.args = !0,
        y.keyData.isCall = !0,
        y.keyData.ease = "ease"
    }
    ,
    y.cemetery = null,
    y.lastTime = 0,
    y.tweenList = null,
    y.keyData = {};
    var $t = y;
    function y() {
        this.target = null,
        this.autoRemove = !1,
        this.tweenDataList = null
    }
    t(Kt, "app.ccTween.CCTweenData"),
    Kt.prototype.destroy = function() {
        this.time = 0,
        this.duration = 0,
        this.call = null,
        this.thisObj = null,
        this.args = null,
        this.isCalled = !1,
        this.props = [],
        this.begins = [],
        this.ends = [],
        this.ease = [],
        (Kt.cemetery = Kt.cemetery ? Kt.cemetery : []).push(this)
    }
    ,
    Kt.create = function() {
        return Kt.cemetery && Kt.cemetery.length ? Kt.cemetery.pop() : new Kt
    }
    ,
    Kt.cemetery = null;
    var qt = Kt;
    function Kt() {
        this.time = 0,
        this.duration = 0,
        this.call = null,
        this.thisObj = null,
        this.args = null,
        this.isCalled = !1,
        this.props = [],
        this.begins = [],
        this.ends = [],
        this.ease = []
    }
    t(Zt, "app.ccTween.Linear"),
    Zt.linear = function(t, e, i, s) {
        return i * t / s + e
    }
    ,
    O(Zt, ["ease", function() {
        return this.ease = Zt.linear
    }
    ]);
    var Qt = Zt;
    function Zt() {}
    t(te, "app.fateGame.AppBinary64"),
    (v = te.prototype).div = function(t) {
        var e = this.internalHigh % t
          , i = (this.low % t + 6 * e) % t
          , e = (this.internalHigh /= t,
        (4294967296 * e + this.low) / t);
        return this.internalHigh += Math.floor(e / 4294967296),
        this.low = e,
        i
    }
    ,
    v.mul = function(t) {
        var e = Number(this.low) * t;
        this.internalHigh *= t,
        this.internalHigh += Math.floor(e / 4294967296),
        this.low *= t
    }
    ,
    v.add = function(t) {
        t = Number(this.low) + t;
        this.internalHigh += Math.floor(t / 4294967296),
        this.low = t
    }
    ,
    v.bitwiseNot = function() {
        this.low = ~this.low,
        this.internalHigh = ~this.internalHigh
    }
    ,
    O(te, ["CHAR_CODE_0", function() {
        return this.CHAR_CODE_0 = "0".charCodeAt()
    }
    , "CHAR_CODE_9", function() {
        return this.CHAR_CODE_9 = "9".charCodeAt()
    }
    , "CHAR_CODE_A", function() {
        return this.CHAR_CODE_A = "a".charCodeAt()
    }
    , "CHAR_CODE_Z", function() {
        return this.CHAR_CODE_Z = "z".charCodeAt()
    }
    ]);
    var Jt = te;
    function te(t, e) {
        void 0 === t && (t = 0),
        void 0 === e && (e = 0),
        this.low = null,
        this.internalHigh = null,
        this.low = t,
        this.internalHigh = e
    }
    t(ie, "app.fateGame.AppByteArrayUtil"),
    ie.directWriteInt = function(t, e) {
        t.writeInt(e)
    }
    ,
    ie.directReadInt = function(t) {
        return t.readInt()
    }
    ,
    ie.readInt = function(t) {
        return ie.compress ? ie.decodeZigZag32(ie.readRawVarint32(t)) : t.readInt()
    }
    ,
    ie.writeInt = function(t, e) {
        ie.compress ? ie.writeRawVarint32(t, ie.encodeZigZag32(e)) : t.writeInt(e)
    }
    ,
    ie.readLong = function(t) {
        var e;
        return ie.compress ? ie.decodeZigZag64(ie.readRawVarint64(t)) : (e = t.readUnsignedInt(),
        t = t.readUnsignedInt(),
        Gi.create(t, e))
    }
    ,
    ie.writeLong = function(t, e) {
        ie.compress ? ie.writeRawVarint64(t, ie.encodeZigZag64(e)) : (t.writeInt(e.high),
        t.writeUnsignedInt(e.low))
    }
    ,
    ie.readUTF = function(t) {
        return t.readUTFBytes(ie.readInt(t))
    }
    ,
    ie.writeUTF = function(t, e) {
        ie.writeInt(t, t._getUTFBytesCount(e)),
        t.writeUTFBytes(e)
    }
    ,
    ie.readRawVarint32 = function(t) {
        var e = t.readByte();
        if (0 <= e)
            return e;
        var i = 127 & e;
        if (0 <= (e = t.readByte()))
            i |= e << 7;
        else if (i |= (127 & e) << 7,
        0 <= (e = t.readByte()))
            i |= e << 14;
        else if (i |= (127 & e) << 14,
        0 <= (e = t.readByte()))
            i |= e << 21;
        else if (i = (i |= (127 & e) << 21) | (e = t.readByte()) << 28,
        e < 0)
            for (var s = 0; s < 5; s++)
                if (0 <= t.readByte())
                    return i;
        return i
    }
    ,
    ie.writeRawVarint32 = function(t, e) {
        for (; ; ) {
            if (0 == (-128 & e))
                return void ie.writeRawByte(t, e);
            ie.writeRawByte(t, 127 & e | 128),
            e >>>= 7
        }
    }
    ,
    ie.readRawVarint64 = function(t) {
        for (var e = 0, i = Gi.create(); e < 64; ) {
            var s = t.readByte()
              , n = (n = Gi.create(127 & s, 0)).shiftLeft(e)
              , i = i.or(n);
            if (0 == (128 & s))
                return i;
            e += 7
        }
        return i
    }
    ,
    ie.writeRawVarint64 = function(t, e) {
        for (; ; ) {
            var i = e.byteValue();
            if (e.and(Gi.MARK).equal(Gi.ZERO))
                return void ie.writeRawByte(t, i);
            ie.writeRawByte(t, 127 & i | 128),
            e = e.shiftRightNo(7)
        }
    }
    ,
    ie.writeRawByte = function(t, e) {
        t.writeByte(e)
    }
    ,
    ie.encodeZigZag32 = function(t) {
        return t << 1 ^ t >> 31
    }
    ,
    ie.decodeZigZag32 = function(t) {
        return t >>> 1 ^ -(1 & t)
    }
    ,
    ie.decodeZigZag64 = function(t) {
        var e = t.shiftRightNo(1)
          , t = 0 == (1 & t.low) ? Gi.ZERO : Gi.SIGN;
        return e.xor(t)
    }
    ,
    ie.encodeZigZag64 = function(t) {
        var e = t.shiftLeft(1)
          , t = t.shiftRight(63);
        return e.xor(t)
    }
    ,
    ie.compress = !0;
    var ee = ie;
    function ie() {}
    t(ne, "app.fateGame.AppDuLinkList"),
    (v = ne.prototype).addItem = function(t, e) {
        var i;
        t && e && ((i = this.dic1.get(t)) || this.dic1.set(t, i = []),
        i.indexOf(e) < 0 && i.push(e),
        (i = this.dic2.get(e)) || this.dic2.set(e, i = []),
        i.indexOf(t) < 0) && i.push(t)
    }
    ,
    v.addItem1 = function(t, e) {
        var i = this.dic1.get(t);
        i || this.dic1.set(t, i = []);
        for (var s = 0, n = e.length; s < n; s++) {
            i.indexOf(e[s]) < 0 && i.push(e[s]);
            var o = this.dic2.get(e[s]);
            o || this.dic2.set(e[s], o = []),
            o.indexOf(t) < 0 && o.push(t)
        }
    }
    ,
    v.addItem2 = function(t, e) {
        var i = this.dic2.get(e);
        i || this.dic2.set(e, i = []);
        for (var s = 0, n = t.length; s < n; s++) {
            i.indexOf(t[s]) < 0 && i.push(t[s]);
            var o = this.dic1.get(t[s]);
            o || this.dic1.set(t[s], o = []),
            o.indexOf(e) < 0 && o.push(e)
        }
    }
    ,
    v.getItem1 = function(t) {
        return this.dic1.get(t)
    }
    ,
    v.getItem2 = function(t) {
        return this.dic2.get(t)
    }
    ,
    v.hasLinked = function(t, e) {
        var i;
        return this.dic1.keys.length <= this.dic2.keys.length ? (i = this.dic1.get(t)) && 0 <= i.indexOf(e) : (i = this.dic2.get(e)) && 0 <= i.indexOf(t)
    }
    ,
    v.removeItem = function(t, e) {
        var i = !1
          , s = this.dic1.get(t)
          , n = s ? s.indexOf(e) : -1;
        return 0 <= n && (s.splice(n, 1),
        0 == s.length && this.dic1.remove(t),
        i = !0),
        0 <= (n = (s = this.dic2.get(e)) ? s.indexOf(t) : -1) && (s.splice(n, 1),
        0 == s.length && this.dic2.remove(e),
        i = !0),
        i
    }
    ,
    v.removeItem1 = function(t) {
        var e = this.dic1.get(t);
        if (!e)
            return !1;
        for (var i = !1, s = 0, n = e.length; s < n; s++) {
            var o = this.dic2.get(e[s])
              , a = o ? o.indexOf(t) : -1;
            0 <= a && (i = !0,
            o.splice(a, 1),
            0 == o.length) && this.dic2.remove(e[s])
        }
        return this.dic1.remove(t),
        i
    }
    ,
    v.removeItem2 = function(t) {
        var e = this.dic2.get(t);
        if (!e)
            return !1;
        for (var i = !1, s = 0, n = e.length; s < n; s++) {
            var o = this.dic1.get(e[s])
              , a = o ? o.indexOf(t) : -1;
            0 <= a && (i = !0,
            o.splice(a, 1),
            0 == o.length) && this.dic1.remove(e[s])
        }
        return this.dic2.remove(t),
        i
    }
    ,
    e(0, v, "item1", function() {
        return this.dic1.keys.concat()
    }),
    e(0, v, "item2", function() {
        return this.dic2.keys.concat()
    });
    var se = ne;
    function ne() {
        this.dic1 = null,
        this.dic2 = null,
        this.dic1 = new ut,
        this.dic2 = new ut
    }
    t(oe, "app.fateGame.ai.utils.path.AppAStarH"),
    (v = oe.prototype).find = function(t, e, i, s, n) {
        if (void 0 === n && (n = 0),
        this.canPass(i, s)) {
            var o, a, r, l, h, c = new he(function(t, e) {
                return t.f - e.f
            }
            ), t = (0 == n && (n = this.m_maxTry),
            this.nodeMap = [],
            this.getOrCreateNode(t, e)), p = this.getOrCreateNode(i, s), u = oe.manhattan, d = Math.abs, g = 0, m = 0;
            for (t.g = 0,
            t.f = 0,
            c.push(t),
            t.isOpen = !0; !c.empty(); ) {
                if (++m > n)
                    return null;
                if ((o = c.pop()).isClose = !0,
                oe.isEnd(o, p))
                    return oe.backtrace(o);
                for (g = 0,
                a = (l = this.getArounds(o)).length; g < a; g++) {
                    if (h = l[g],
                    oe.isEnd(h, p))
                        return h.fatherNode = o,
                        oe.backtrace(h);
                    r = o.g + (h.x - o.x == 0 || h.y - o.y == 0 ? 1 : Math.SQRT2),
                    (!h.isOpen || r < h.g) && (h.g = r,
                    h.h = u(d(h.x - p.x), d(h.y - p.y)),
                    h.f = h.g + h.h,
                    h.fatherNode = o,
                    h.isOpen ? c.updateItem(h) : (c.push(h),
                    h.isOpen = !0))
                }
            }
        }
        return null
    }
    ,
    v.getOrCreateNode = function(t, e) {
        var i;
        return this.nodeMap[t] && null != this.nodeMap[t][e] ? this.nodeMap[t][e] : (i = new ae(t,e),
        this.nodeMap[t] || (this.nodeMap[t] = []),
        this.nodeMap[t][e] = i)
    }
    ,
    v.getArounds = function(t) {
        var e, i = [];
        for (e in oe.aroundArr) {
            var s = oe.aroundArr[e]
              , n = t.x + s[0]
              , s = t.y + s[1];
            !this.canPass(n, s) || (n = this.getOrCreateNode(n, s)).isClose || i.push(n)
        }
        return i
    }
    ,
    v.canPass = function(t, e) {
        if (!(t < 0 || t > this._tw || e < 0 || e > this._th) && this._tiles) {
            var i = this._tw * e + t + 8;
            if (this._tiles.length > i)
                return this._tiles.position = i,
                i = this._tiles.readByte(),
                !(!k.ins.checkDynamicCanPass(t, e) && 8 == (8 & i)) && 0 == (1 & i)
        }
        return !1
    }
    ,
    v.checkCopyBloodSafeCanpass = function(t, e) {
        return !0
    }
    ,
    v.checkDynamicCanPass = function() {
        return !1
    }
    ,
    e(0, v, "tiles", function() {
        return this._tiles
    }, function(t) {
        (this._tiles = t).position = 0,
        this._tw = this._tiles.readUnsignedInt(),
        this._th = this._tiles.readUnsignedInt()
    }),
    oe.manhattan = function(t, e) {
        return t + e
    }
    ,
    oe.isEnd = function(t, e) {
        return t.x == e.x && t.y == e.y
    }
    ,
    oe.backtrace = function(t) {
        var e = [];
        for (e.push([t.x, t.y]); t.fatherNode; )
            t = t.fatherNode,
            e.push([t.x, t.y]);
        return e.reverse()
    }
    ,
    O(oe, ["aroundArr", function() {
        return this.aroundArr = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, 1], [-1, -1], [1, -1]]
    }
    ]);
    var v = oe;
    function oe() {
        this.m_maxTry = 4e3,
        this.nodeMap = null,
        this._tiles = null,
        this._tw = 0,
        this._th = 0
    }
    t(re, "app.fateGame.ai.utils.path.AppAStarHNode");
    var ae = re;
    function re(t, e) {
        this.x = null,
        this.y = null,
        this.f = 0,
        this.g = 0,
        this.h = 0,
        this.fatherNode = null,
        this.isOpen = !1,
        this.isClose = !1,
        this.x = t,
        this.y = e
    }
    t(le, "app.fateGame.ai.utils.path.AppAppMapUtils"),
    e(1, le, "aPath", function() {
        return le._aPath = le._aPath ? le._aPath : new Wi
    }),
    le.roleDir2MapDirect = function(t) {
        var e;
        switch (t = le.getFormatDir(t, !0)) {
        case 0:
            e = 0;
            break;
        case 45:
            e = 1;
            break;
        case 90:
            e = 2;
            break;
        case 135:
            e = 3;
            break;
        case 180:
            e = 4;
            break;
        case -135:
            e = 5;
            break;
        case -90:
            e = 6;
            break;
        case -45:
            e = 7;
        case -180:
            e = 4
        }
        return e
    }
    ,
    le.getFormatDir = function(t, e) {
        void 0 === e && (e = !1);
        var i = t < 0
          , s = (t = Math.abs(t),
        0)
          , s = e ? t < 22.5 ? 0 : t < 67.5 ? 45 : t < 112.5 ? 90 : t < 157.5 ? 135 : 180 : t < 90 ? 45 : 135;
        return i && (s *= -1),
        s
    }
    ,
    le.mapDirect2RoleDir = function(t) {
        var e;
        switch (t) {
        case 0:
            e = 0;
            break;
        case 1:
            e = 45;
            break;
        case 2:
            e = 90;
            break;
        case 3:
            e = 135;
            break;
        case 4:
            e = 180;
            break;
        case 5:
            e = -135;
            break;
        case 6:
            e = -90;
            break;
        case 7:
            e = -45
        }
        return e
    }
    ,
    le.mapDirect3RoleDir = function(t) {
        var e;
        switch (t) {
        case 0:
        case 1:
            e = 45;
            break;
        case 2:
        case 3:
            e = 135;
            break;
        case 4:
        case 5:
            e = -135;
            break;
        case 6:
        case 7:
            e = -45
        }
        return e
    }
    ,
    le.coo2Tile = function(t) {
        return Math.floor(t / le.GRID_BORDER)
    }
    ,
    le.tile2Coo = function(t) {
        return Math.floor(t * le.GRID_BORDER + le.GRID_BORDER / 2)
    }
    ,
    le.tile2CooXY = function(t) {
        return [le.tile2Coo(t[0]), le.tile2Coo(t[1])]
    }
    ,
    le.findPath = function(t, e, i, s, n, o, a) {
        return void 0 === o && (o = 0),
        void 0 === a && (a = 0),
        t ? (le.aPath.tiles = t,
        le.aPath.findPath(e, i, s, n, o, a)) : null
    }
    ,
    le.canPath = function(t, e, i) {
        return t ? (le.aPath.tiles = t,
        le.aPath.canPath(e, i)) : null
    }
    ,
    le.countTileDirection = function(t, e) {
        return t[1] == e[1] && t[0] == e[0] ? 4 : t[1] == e[1] ? t[0] < e[0] ? 2 : 6 : t[0] == e[0] ? t[1] < e[1] ? 4 : 0 : t[0] < e[0] ? t[1] < e[1] ? 3 : 1 : t[1] < e[1] ? 5 : 7
    }
    ,
    le.GRID_BORDER = 50,
    le._aPath = null,
    le.openPointSeek = !0;
    var S = le;
    function le() {}
    t(ce, "app.fateGame.ai.utils.path.libs.AppHeap"),
    (P = ce.prototype).push = function(t) {
        return this.heapFunction.heappush(this.nodes, t, this.cmp)
    }
    ,
    P.pop = function() {
        return this.heapFunction.heappop(this.nodes, this.cmp)
    }
    ,
    P.peek = function() {
        return this.nodes[0]
    }
    ,
    P.contains = function(t) {
        return -1 !== this.nodes.indexOf(t)
    }
    ,
    P.replace = function(t) {
        return this.heapFunction.heapreplace(this.nodes, t, this.cmp)
    }
    ,
    P.pushpop = function(t) {
        return this.heapFunction.heappushpop(this.nodes, t, this.cmp)
    }
    ,
    P.heapify = function() {
        return this.heapFunction.heapify(this.nodes, this.cmp)
    }
    ,
    P.updateItem = function(t) {
        return this.heapFunction.updateItem(this.nodes, t, this.cmp)
    }
    ,
    P.clear = function() {
        return this.nodes = []
    }
    ,
    P.empty = function() {
        return 0 === this.nodes.length
    }
    ,
    P.size = function() {
        return this.nodes.length
    }
    ,
    P.clone = function() {
        var t = new ce;
        return t.nodes = this.nodes.slice(0),
        t
    }
    ,
    P.toArray = function() {
        return this.nodes.slice(0)
    }
    ;
    var he = ce;
    function ce(t) {
        this.heapFunction = new pe,
        this.cmp = null,
        this.nodes = null,
        this.cmp = null != t ? t : this.heapFunction.defaultCmp,
        this.nodes = []
    }
    t(ue, "app.fateGame.ai.utils.path.libs.AppHeapFunction"),
    (P = ue.prototype).insort = function(t, e, i, s, n) {
        var o;
        if (null == n && (n = this.defaultCmp),
        (i = null == i ? 0 : i) < 0)
            throw new Error("lo must be non-negative");
        for (null == s && (s = t.length); i < s; )
            n(e, t[o = Math.floor((i + s) / 2)]) < 0 ? s = o : i = o + 1;
        return [].splice.apply(t, [i, i - i].concat(e)),
        e
    }
    ,
    P.heappush = function(t, e, i) {
        return null == i && (i = this.defaultCmp),
        t.push(e),
        this._siftdown(t, 0, t.length - 1, i)
    }
    ,
    P.heappop = function(t, e) {
        var i, s;
        return null == e && (e = this.defaultCmp),
        i = t.pop(),
        t.length ? (s = t[0],
        t[0] = i,
        this._siftup(t, 0, e)) : s = i,
        s
    }
    ,
    P.heapreplace = function(t, e, i) {
        var s;
        return null == i && (i = this.defaultCmp),
        s = t[0],
        t[0] = e,
        this._siftup(t, 0, i),
        s
    }
    ,
    P.heappushpop = function(t, e, i) {
        var s;
        return null == i && (i = this.defaultCmp),
        t.length && i(t[0], e) < 0 && (e = (s = [t[0], e])[0],
        t[0] = s[1],
        this._siftup(t, 0, i)),
        e
    }
    ,
    P.heapify = function(t, e) {
        var i, s, n, o, a, r, l = 0, h = 0;
        for (null == e && (e = this.defaultCmp),
        a = [],
        l = 0,
        s = (o = function() {
            for (r = [],
            h = 0,
            n = Math.floor(t.length / 2); 0 <= n ? h < n : n < h; 0 <= n ? h++ : h--)
                r.push(h);
            return r
        }
        .apply(this).reverse()).length; l < s; l++)
            i = o[l],
            a.push(this._siftup(t, i, e));
        return a
    }
    ,
    P.updateItem = function(t, e, i) {
        return null == i && (i = this.defaultCmp),
        -1 === (e = t.indexOf(e)) ? null : (this._siftdown(t, 0, e, i),
        this._siftup(t, e, i))
    }
    ,
    P.nlargest = function(t, e, i) {
        var s, n, o, a, r = 0;
        if (null == i && (i = this.defaultCmp),
        !(n = t.slice(0, e)).length)
            return n;
        for (this.heapify(n, i),
        r = 0,
        o = (a = t.slice(e)).length; r < o; r++)
            s = a[r],
            this.heappushpop(n, s, i);
        return n.sort(i).reverse()
    }
    ,
    P.nsmallest = function(t, e, i) {
        var s, n, o, a, r, l, h, c = 0, p = 0;
        if (null == i && (i = this.defaultCmp),
        10 * e <= t.length) {
            if ((o = t.slice(0, e).sort(i)).length)
                for (n = o[o.length - 1],
                c = 0,
                a = (r = t.slice(e)).length; c < a; c++)
                    i(s = r[c], n) < 0 && (this.insort(o, s, 0, null, i),
                    o.pop(),
                    n = o[o.length - 1]);
            return o
        }
        for (this.heapify(t, i),
        h = [],
        p = 0,
        l = Math.min(e, t.length); 0 <= l ? p < l : l < p; 0 <= l ? ++p : --p)
            h.push(this.heappop(t, i));
        return h
    }
    ,
    P._siftdown = function(t, e, i, s) {
        var n, o, a;
        for (null == s && (s = this.defaultCmp),
        n = t[i]; e < i && s(n, o = t[a = i - 1 >> 1]) < 0; )
            t[i] = o,
            i = a;
        return t[i] = n
    }
    ,
    P._siftup = function(t, e, i) {
        var s, n, o, a, r = 0;
        for (null == i && (i = this.defaultCmp),
        s = t.length,
        n = t[a = e],
        r = 2 * e + 1; r < s; )
            (o = r + 1) < s && !(i(t[r], t[o]) < 0) && (r = o),
            t[e] = t[r],
            r = 2 * (e = r) + 1;
        return t[e] = n,
        this._siftdown(t, a, e, i)
    }
    ;
    var pe = ue;
    function ue() {
        this.defaultCmp = function(t, e) {
            return t < e ? -1 : e < t ? 1 : 0
        }
    }
    t(de, "app.fateGame.city.bean.AppEquipInfo");
    function de() {
        this.playerId = null,
        this.playerName = null,
        this.job = 0,
        this.sex = 0,
        this.fightPower = NaN,
        this.position = null,
        this.allianceName = null,
        this.alliancePosition = 0,
        this.titleId = 0,
        this.time = 0,
        this.honourId = 0,
        this.jobType = 0,
        this.changeJob = 0,
        this.level = 0,
        this.horseId = 0,
        this.skinId = 0,
        this.hunheLevel = 0
    }
    t(ge, "app.fateGame.city.bean.AppPosition");
    function ge() {
        this.x = 0,
        this.y = 0
    }
    t(C, "app.fateGame.f1.AppFrameworkGlobal"),
    e(1, C, "effectPngQuality", function() {
        return "100" == C._skillPngQuality ? "" : g.isDebugMode ? "60" : C._effectPngQuality
    }, function(t) {
        C._effectPngQuality = t
    }),
    e(1, C, "skillPngQuality", function() {
        return "100" == C._skillPngQuality ? "" : g.isDebugMode ? "60" : C._skillPngQuality
    }, function(t) {
        C._skillPngQuality = t
    }),
    e(1, C, "wuhunEffectPngQuality", function() {
        return "100" == C._skillPngQuality ? "" : g.isDebugMode ? "60" : C._wuhunEffectPngQuality
    }, function(t) {
        C._wuhunEffectPngQuality = t
    }),
    e(1, C, "stage", function() {
        return C._stage
    }),
    e(1, C, "stageW", function() {
        return C._stage ? C._stage.width : 0
    }),
    e(1, C, "stageH", function() {
        return C._stage ? C._stage.height : 0
    }),
    e(1, C, "isLowEndMachine", function() {
        return C.isIphoneMemLesThanOneG || C._isTestLow
    }),
    C.changeSkillPath = function(t) {
        return "" != C.skillPngQuality && -1 != t.indexOf(C.searchPaht) ? t.replace("/x5/", "/x5_low" + C.skillPngQuality + "/") : t
    }
    ,
    C.changeWuhunEffectPath = function(t) {
        return "" != C.wuhunEffectPngQuality && -1 != t.indexOf("/wuhun/effect/") ? t.replace("/effect/", "/effect_low" + C.wuhunEffectPngQuality + "/") : t
    }
    ,
    C.isIphoneMemLesThanOneG = !1,
    C._isTestLow = !1,
    C._effectPngQuality = "",
    C._skillPngQuality = "",
    C._wuhunEffectPngQuality = "",
    C.w = 0,
    C.h = 0,
    C.globalScale = 1,
    C.roleScale = 1,
    C.gameSceneSc = 1,
    C.globalViewScaleX = 1,
    C.globalViewScaleY = 1,
    C.viewWidth = 0,
    C.viewHeight = 0,
    C.ROLE_SCENE_SCALE = .12,
    C.ROLE_HEIGHT = 95,
    C.RIGHT_HEIGHT = 1024,
    C.RIGHT_WIDTH = 576,
    C.RIGHT_WIDTH2 = 768,
    C.MAX_HEIGHT = 1024,
    C.DIRECT_0 = 0,
    C.DIRECT_45 = 45,
    C.DIRECT_90 = 90,
    C.DIRECT_135 = 135,
    C.DIRECT_180 = 180,
    C.showHighLevelShadow = !1,
    C.showLightLevel = 10,
    C.isShowGameEffect = !0,
    C.FPS = 0,
    C.reduceRender = !1,
    C.memoryOut = !1,
    C.language = "",
    C.serverId = 1,
    C._isFightOverLogin = !1,
    C.AUTO = !0,
    C.isFightOverLoginDataIniting = !1,
    C.needTips = !0,
    C.vmcLoadType = 2,
    C._stage = null,
    C.DEFAULT_FRAMERATE = 51,
    C._frameRate = null,
    C.main_scene = null,
    C.ui_scene = null,
    C.debug = !1,
    O(C, ["searchPaht", function() {
        return this.searchPaht = "art/res/skill/x5/"
    }
    , "DIRECT_LIST", function() {
        return this.DIRECT_LIST = [0, 45, 90, 135, 180]
    }
    , "mat", function() {
        return this.mat = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0]
    }
    ]);
    var I = C;
    function C() {}
    t(_e, "app.fateGame.f1.AppObjectPool"),
    _e.CheckOut = function(t) {
        _e.classinsances[t] || (_e.classinsances[t] = []);
        var e = _e.classinsances[t];
        return 0 == e.length && e.push(new t),
        e.pop()
    }
    ,
    _e.clearAll = function() {
        _e.classinsances = new ut
    }
    ,
    _e.CheckIn = function(t) {}
    ,
    _e.removes = function(t, e) {
        if (void 0 === e && (e = !1),
        t)
            _e.classinsances[t] = null;
        else
            for (var i in _e.classinsances)
                _e.classinsances[i] = null;
        e && _e.garbageCollect()
    }
    ,
    _e.garbageCollect = function() {}
    ,
    O(_e, ["classinsances", function() {
        return this.classinsances = new ut
    }
    ]);
    var me = _e;
    function _e() {}
    t(ye, "app.fateGame.f1.ColorFilterEx.AppDynamicMatrix"),
    (P = ye.prototype).Create = function(t, e) {
        if (0 < t && 0 < e) {
            this.m_width = t,
            this.m_height = e,
            this.m_matrix = [];
            for (var i = 0; i < e; i++) {
                this.m_matrix[i] = [];
                for (var s = 0; s < e; s++)
                    this.m_matrix[i][s] = 0
            }
        }
    }
    ,
    P.Destroy = function() {
        this.m_matrix = null
    }
    ,
    P.GetWidth = function() {
        return this.m_width
    }
    ,
    P.GetHeight = function() {
        return this.m_height
    }
    ,
    P.GetValue = function(t, e) {
        var i = 0;
        return i = 0 <= t && t < this.m_height && 0 <= e && e <= this.m_width ? this.m_matrix[t][e] : i
    }
    ,
    P.SetValue = function(t, e, i) {
        0 <= t && t < this.m_height && 0 <= e && e <= this.m_width && (this.m_matrix[t][e] = i)
    }
    ,
    P.LoadIdentity = function() {
        if (this.m_matrix)
            for (var t = 0; t < this.m_height; t++)
                for (var e = 0; e < this.m_width; e++)
                    this.m_matrix[t][e] = t == e ? 1 : 0
    }
    ,
    P.MultiplyNumber = function(t) {
        if (!this.m_matrix)
            return !1;
        for (var e = 0; e < this.m_height; e++)
            for (var i = 0; i < this.m_width; i++) {
                var s = this.m_matrix[e][i] * t;
                this.m_matrix[e][i] = s
            }
        return !0
    }
    ,
    P.Add = function(t) {
        if (!this.m_matrix || !t)
            return !1;
        var e = t.GetHeight()
          , i = t.GetWidth();
        if (this.m_width != i || this.m_height != e)
            return !1;
        for (var s = 0; s < this.m_height; s++)
            for (var n = 0; n < this.m_width; n++) {
                var o = this.m_matrix[s][n] + t.GetValue(s, n);
                this.m_matrix[s][n] = o
            }
        return !0
    }
    ;
    var fe = ye;
    function ye(t, e) {
        this.m_width = 0,
        this.m_height = 0,
        this.m_matrix = null,
        this.Create(t, e)
    }
    t(xe, "app.fateGame.f1.layer.AppLayerManager"),
    (P = xe.prototype).resizeHandler = function(t) {
        this.mainScreen.w = I.viewWidth,
        this.mainScreen.h = I.viewHeight,
        this.mainScreen.scale(I.globalScale * I.globalViewScaleX, I.globalScale * I.globalViewScaleY),
        this._baseLayer.setWH(this.mainScreen.w, this.mainScreen.h),
        this._uiLayer.setWH(this.mainScreen.w, this.mainScreen.h),
        this._popMaskLayer.setWH(this.mainScreen.w, this.mainScreen.h),
        this._popLayer.setWH(this.mainScreen.w, this.mainScreen.h),
        this._tipsLayer.setWH(this.mainScreen.w, this.mainScreen.h),
        this._loadingLayer.setWH(this.mainScreen.w, this.mainScreen.h),
        this._effectLayer.setWH(this.mainScreen.w, this.mainScreen.h),
        this._cueMaskLayer.setWH(this.mainScreen.w, this.mainScreen.h),
        this._cueLayer.setWH(this.mainScreen.w, this.mainScreen.h),
        this._forceLayer.setWH(this.mainScreen.w, this.mainScreen.h),
        this._uiLayer.width = this._popMaskLayer.width = this._popLayer.width = this._tipsLayer.width = this._loadingLayer.width = this._effectLayer.width = this._cueMaskLayer.width = this._cueLayer.width = this.mainScreen.w,
        this._uiLayer.height = this._popMaskLayer.height = this._popLayer.height = this._tipsLayer.height = this._loadingLayer.height = this._effectLayer.height = this._cueMaskLayer.height = this._cueLayer.height = this.mainScreen.h,
        this._uiLayer.x = this._popMaskLayer.x = this._popLayer.x = this._tipsLayer.x = this._loadingLayer.x = this._effectLayer.x = this._cueMaskLayer.x = this._cueLayer.x = 0,
        this._uiLayer.y = this._popMaskLayer.y = this._popLayer.y = this._tipsLayer.y = this._loadingLayer.y = this._effectLayer.y = this._cueMaskLayer.y = this._cueLayer.y = 0
    }
    ,
    P.addToEffect = function(t) {
        this._effectLayer.addChild(t)
    }
    ,
    P.removeAllScene = function() {
        this.gameScene && this.gameScene.parent && x.stage.removeChild(this.gameScene),
        this.cityScene && this.cityScene.parent && x.stage.removeChild(this.cityScene),
        this.mainScreen && this.mainScreen.parent && x.stage.removeChild(this.mainScreen)
    }
    ,
    P.initAddScene = function() {
        this.gameScene && x.stage.addChild(this.gameScene),
        this.mainScreen && x.stage.addChild(this.mainScreen)
    }
    ,
    P.switchCityScene = function(t) {
        var e, i, s, n;
        this.gameScene.parent ? (e = x.stage.getChildIndex(this.gameScene),
        x.stage.removeChild(this.gameScene),
        n = De.ins.getMapById("30001"),
        this.cityScene.parent || (x.stage.addChildAt(this.cityScene, e),
        i = null,
        i = M.ins.getRealRes(n.qMapresid),
        this.cityScene.updateMap(i.mapRes, b.create(this, function() {
            t.run(),
            M.ins.event("Change_CityScene")
        }), n.layer),
        M.ins.clearUpdataSceneSkin(),
        M.ins.checkUpdateSceneSkin(i))) : (e = x.stage.getChildIndex(this.cityScene),
        (i = oi.ins.isPlayerExist()) && k.getCityinsance().data && k.getCityinsance().data.tileByteArrays && (s = i.x,
        i = i.y,
        k.getCityinsance().canWalkByCoo(s, i)) && Ji.ins.setPlayerPos(s, i),
        x.stage.removeChild(this.cityScene),
        x.stage.addChildAt(this.gameScene, e),
        s = A.ins.playerInfo ? A.ins.playerInfo.mapId : 0,
        (n = De.ins.getMapById("" + s)) && n.music,
        t.run(),
        M.ins.event("Change_CityScene"))
    }
    ,
    P.hideScene = function() {
        this._curHideScene && this._curHideScene.resumeScene(),
        this._curHideScene = null,
        this.cityScene.parent ? this._curHideScene = this.cityScene : this._curHideScene = this._gameScene,
        this._curHideScene && this._curHideScene.hideScene()
    }
    ,
    P.resumeScene = function() {
        this._curHideScene && this._curHideScene.resumeScene(),
        this._curHideScene = null
    }
    ,
    e(0, P, "baseLayer", function() {
        return this._baseLayer
    }, function(t) {
        this._baseLayer = t
    }),
    e(0, P, "effectLayer", function() {
        return this._effectLayer
    }, function(t) {
        this._effectLayer = t
    }),
    e(0, P, "tipsLayer", function() {
        return this._tipsLayer
    }, function(t) {
        this._tipsLayer = t
    }),
    e(0, P, "gameScene", function() {
        return this._gameScene
    }, function(t) {
        this._gameScene = t
    }),
    e(0, P, "loadingLayer", function() {
        return this._loadingLayer
    }),
    e(0, P, "forceLayer", function() {
        return this._forceLayer
    }),
    e(0, P, "mainScene", function() {
        return this.mainScreen
    }),
    e(0, P, "uiLayer", function() {
        return this._uiLayer
    }),
    e(0, P, "cueMaskLayer", function() {
        return this._cueMaskLayer
    }),
    e(0, P, "popMaskLayer", function() {
        return this._popMaskLayer
    }),
    e(0, P, "cueLayer", function() {
        return this._cueLayer
    }),
    e(0, P, "popLayer", function() {
        return this._popLayer
    }),
    e(0, P, "cityScene", function() {
        return null == this._cityScene && (this._cityScene = new ia,
        this._cityScene.width = this.mainScreen.width / this._cityScene.scaleX,
        this._cityScene.height = this.mainScreen.height / this._cityScene.scaleY),
        this._cityScene
    }),
    e(1, xe, "ins", function() {
        return xe._inst || (xe._inst = new xe)
    }),
    xe._inst = null;
    var ve = xe;
    function xe() {
        this.mainScreen = null,
        this._baseLayer = null,
        this._popLayer = null,
        this._cueLayer = null,
        this._popMaskLayer = null,
        this._cueMaskLayer = null,
        this._tipsLayer = null,
        this._loadingLayer = null,
        this._effectLayer = null,
        this._forceLayer = null,
        this._gameScene = null,
        this._cityScene = null,
        this._curHideScene = null,
        this._uiLayer = null,
        this._gameScene = new qn,
        x.stage.addChildAt(this._gameScene, 0),
        this.mainScreen = new Rn,
        this.mainScreen.mouseEnabled = !0,
        this.mainScreen.mouseThrough = !0,
        this.mainScreen.w = I.viewWidth,
        this.mainScreen.h = I.viewHeight,
        this.mainScreen.scale(I.globalScale * I.globalViewScaleX, I.globalScale * I.globalViewScaleY),
        x.stage.addChildAt(this.mainScreen, 1),
        I.main_scene = this.mainScreen,
        this._baseLayer = this.mainScreen.createLayer("baseLayer"),
        this._uiLayer = this.mainScreen.createLayer("uiLayer"),
        this._popMaskLayer = this.mainScreen.createLayer("popMaskLayer"),
        this._popLayer = this.mainScreen.createLayer("popLayer"),
        this._effectLayer = this.mainScreen.createLayer("effectLayer"),
        this._cueMaskLayer = this.mainScreen.createLayer("cueMaskLayer"),
        this._cueLayer = this.mainScreen.createLayer("cueLayer"),
        this._tipsLayer = this.mainScreen.createLayer("tipsLayer"),
        this._forceLayer = this.mainScreen.createLayer("forceLayer"),
        this._loadingLayer = this.mainScreen.createLayer("loadingLayer"),
        x.stage.on("resizeComplete", this, this.resizeHandler)
    }
    t(be, "app.fateGame.f1.manager.AppResClearManager"),
    (P = be.prototype).useRes = function(t, e) {
        if (!(t.resClearTime < 0)) {
            e = e || t.resUrl;
            var i = this.m_relation.getItem1(t);
            if (i) {
                if (i[0] == e)
                    return;
                this.unuseRes(t, i[0])
            }
            this.m_relation.addItem(t, e),
            this.m_waitToClear[e] && delete this.m_waitToClear[e]
        }
    }
    ,
    P.unuseRes = function(t, e) {
        var i, s, n = this.m_relation.getItem1(t);
        n && n[0] == e && (this.m_relation.removeItem(t, e),
        this.m_relation.getItem2(e) || (n = !1,
        x.__typeof(t, Xs) && (n = !0),
        s = t = w.now() + t.resClearTime,
        this.m_waitToClear[e] ? (i = this.m_waitToClear[e].resClearTime,
        s = Math.max(i, t),
        this.m_waitToClear[e].resClearTime = s) : this.m_waitToClear[e] = {
            resClearTime: s,
            isAnimation: n,
            url: e
        }))
    }
    ,
    P.loop = function() {
        var t, e, i = w.now(), s = [], n = 0, o = 0;
        for (e in this.m_waitToClear)
            t = this.m_waitToClear[e],
            o < 8 && t.resClearTime <= i ? (s.push(t),
            o++) : n = n ? Math.min(n, t.resClearTime) : t.resClearTime;
        for (var a = x.loader, r = 0, l = s.length; r < l; r++)
            this.isDontClear((t = s[r]).url) || (a.clearRes(t.url, !0),
            t.isAnimation && Xs.clearCacheBykey(t.url)),
            delete this.m_waitToClear[s[r].url]
    }
    ,
    P.dontClear = function(t, e) {
        var i, s = this.m_dontClear[t];
        s != e && (s || e) && (i = 0,
        s && ((i = this.m_dontClearUrls[s] || 0) <= 1 ? delete this.m_dontClearUrls[s] : this.m_dontClearUrls[s] = i - 1),
        this.m_dontClear[t] = e) && (i = this.m_dontClearUrls[e] || 0,
        this.m_dontClearUrls[e] = i + 1)
    }
    ,
    P.isDontClear = function(t) {
        for (var e in this.m_dontClearUrls)
            if (-1 != t.indexOf(e))
                return !0;
        return !1
    }
    ,
    P.clearAll = function() {
        for (var t, e, i = x.loader, s = this.m_relation.item2, n = 0, o = s ? s.length : 0; n < o; n++)
            t = s[n],
            this.isDontClear(t) || i.clearRes(t, !0);
        for (e in this.m_waitToClear)
            this.isDontClear(e) || (this.m_waitToClear[e].isAnimation && Xs.clearCacheBykey(e),
            i.clearRes(e, !0),
            x.loader.cancelLoadByUrl(e));
        this.m_relation = new se,
        this.m_waitToClear = {},
        this.m_dontClearUrls = {},
        w.onIOS && r.isConchApp && (gc(),
        gc(),
        gc())
    }
    ,
    e(1, be, "ins", function() {
        return be._ins || (be._ins = new be)
    }),
    be.SKILL = 3e4,
    be.MAX_DELETE_ONECE = 8,
    be._ins = null,
    O(be, ["NONE", function() {
        return this.NONE = -1
    }
    ]);
    var we = be;
    function be() {
        this.m_relation = null,
        this.m_waitToClear = {},
        this.m_dontClear = {},
        this.m_dontClearUrls = {},
        this.m_relation = new se,
        I.isIphoneMemLesThanOneG && (be.SKILL = 5e3),
        x.timer.loop(1e4, this, this.loop)
    }
    t(Ie, "app.fateGame.f1.view.mapeditor.AppGameBgViewBlock"),
    Ie.prototype.recover = function() {
        this.block && (this.block.removeSelf(),
        bn.clearAdptTexture(this.block.texture),
        this.block.texture = null,
        dt.recover("Block:Map", this.block)),
        this.block = null,
        this.px = -999,
        this.py = -999,
        this.idx = -999,
        this.url = null,
        this.updateMark = 0,
        dt.recover("app.fateGame.f1.view.mapeditor.AppGameBgViewBlock", this)
    }
    ,
    Ie.create = function() {
        return dt.getItemByClass("app.fateGame.f1.view.mapeditor.AppGameBgViewBlock", Ie)
    }
    ;
    var Se = Ie;
    function Ie() {
        this.block = null,
        this.px = 0,
        this.py = 0,
        this.idx = 0,
        this.url = null,
        this.updateMark = 0
    }
    t(ke, "app.fateGame.map.AppMAPRESOURCE"),
    e(0, P = ke.prototype, "qMapresid", function() {
        return this._qMapresid
    }, function(t) {
        this._qMapresid = t
    }),
    e(0, P, "Born", function() {
        return this._Born
    }, function(t) {
        this._Born = t
    }),
    e(0, P, "name", function() {
        return this._name
    }),
    e(0, P, "floor", function() {
        return this._floor
    }),
    e(0, P, "iceFireIcon", function() {
        return this._iceFireIcon
    }),
    e(0, P, "iceFireColor", function() {
        return this._iceFireColor
    }),
    e(0, P, "scale", function() {
        return this._scale
    }),
    e(0, P, "background", function() {
        return this._background
    }),
    e(0, P, "listName", function() {
        return this._listName
    }),
    e(0, P, "lvl", function() {
        return this._lvl
    }),
    e(0, P, "oldlvl", function() {
        return this._oldlvl
    }),
    e(0, P, "areaName", function() {
        return this._areaName
    }),
    e(0, P, "year", function() {
        return this._year
    }),
    e(0, P, "isProfitTips", function() {
        return this._isProfitTips
    }),
    e(0, P, "enterConditionDefs", function() {
        return this._enterConditionDefs
    }),
    e(0, P, "lvlmax", function() {
        return this._lvlmax
    }),
    e(0, P, "enterConsumeDefs", function() {
        return this._enterConsumeDefs
    }),
    e(0, P, "reward", function() {
        return this._reward
    }),
    e(0, P, "cameraPos", function() {
        return this._cameraPos
    }),
    e(0, P, "Born2", function() {
        return this._Born2
    }),
    e(0, P, "Born3", function() {
        return this._Born3
    }),
    e(0, P, "Born4", function() {
        return this._Born4
    }),
    e(0, P, "attackerStance", function() {
        return this._attackerStance
    }),
    e(0, P, "defancerStance", function() {
        return this._defancerStance
    }),
    e(0, P, "exp", function() {
        return this._exp
    }),
    e(0, P, "equip", function() {
        return this._equip
    }),
    e(0, P, "ruleDefs", function() {
        return this._ruleDefs
    }),
    e(0, P, "extraReward", function() {
        return this._extraReward
    }),
    e(0, P, "soulDeblocking", function() {
        return this._soulDeblocking
    }),
    e(0, P, "bigReward", function() {
        return this._bigReward
    }),
    e(0, P, "activityReward", function() {
        return this._activityReward
    }),
    e(0, P, "i18nId", function() {
        return this._i18nId
    }),
    e(0, P, "hunhuan1", function() {
        return this._hunhuan1
    }),
    e(0, P, "hunhuan2", function() {
        return this._hunhuan2
    }),
    e(0, P, "showHunhe", function() {
        return this._showHunhe
    }),
    e(0, P, "showRune", function() {
        return this._showRune
    }),
    e(0, P, "centerdrops", function() {
        return this._centerdrops
    });
    var Ce = ke;
    function ke() {
        this.id = 0,
        this._idx_name = 0,
        this._name = null,
        this._idx_floor = 0,
        this._floor = null,
        this.mapType = 0,
        this.iceFire = 0,
        this.iceFireSort = 0,
        this._idx_iceFireIcon = 0,
        this._iceFireIcon = null,
        this._idx_iceFireColor = 0,
        this._iceFireColor = null,
        this.fighttype = 0,
        this._idx_scale = 0,
        this._scale = null,
        this.loadingType = 0,
        this._idx_background = 0,
        this._background = null,
        this._idx_listName = 0,
        this._listName = null,
        this._idx_qMapresid = 0,
        this._qMapresid = null,
        this.qMapWidth = 0,
        this.qMapHeight = 0,
        this.qBornX = 0,
        this.qBornY = 0,
        this.objectId = 0,
        this.area = 0,
        this._idx_lvl = 0,
        this._lvl = null,
        this._idx_oldlvl = 0,
        this._oldlvl = null,
        this.personNum = 0,
        this._idx_areaName = 0,
        this._areaName = null,
        this._idx_year = 0,
        this._year = null,
        this._idx_isProfitTips = 0,
        this._isProfitTips = null,
        this._idx_enterConditionDefs = 0,
        this._enterConditionDefs = null,
        this._idx_lvlmax = 0,
        this._lvlmax = null,
        this.winglvl = 0,
        this._idx_enterConsumeDefs = 0,
        this._enterConsumeDefs = null,
        this.group = 0,
        this._idx_reward = 0,
        this._reward = null,
        this._idx_cameraPos = 0,
        this._cameraPos = null,
        this._idx_Born = 0,
        this._Born = null,
        this._idx_Born2 = 0,
        this._Born2 = null,
        this._idx_Born3 = 0,
        this._Born3 = null,
        this._idx_Born4 = 0,
        this._Born4 = null,
        this._idx_attackerStance = 0,
        this._attackerStance = null,
        this._idx_defancerStance = 0,
        this._defancerStance = null,
        this._idx_exp = 0,
        this._exp = NaN,
        this.coin = 0,
        this._idx_equip = 0,
        this._equip = null,
        this.music = 0,
        this.index = 0,
        this.duration = 0,
        this.waitTime = 0,
        this.endTime = 0,
        this._idx_ruleDefs = 0,
        this._ruleDefs = null,
        this._idx_extraReward = 0,
        this._extraReward = null,
        this._idx_soulDeblocking = 0,
        this._soulDeblocking = null,
        this.bossSize = 0,
        this._idx_bigReward = 0,
        this._bigReward = null,
        this._idx_activityReward = 0,
        this._activityReward = null,
        this.chapterid = 0,
        this.checkpoint = 0,
        this.nextCheckpoint = 0,
        this._idx_i18nId = 0,
        this._i18nId = null,
        this.vipLevel = 0,
        this.chapterReward = 0,
        this.transitMap = 0,
        this.layer = 0,
        this.canRide = 0,
        this._idx_hunhuan1 = 0,
        this._hunhuan1 = null,
        this._idx_hunhuan2 = 0,
        this._hunhuan2 = null,
        this.hunhuanYear = 0,
        this.showWing = 0,
        this.cutePet = 0,
        this.showIcon = 0,
        this.quickBattleBUFF = 0,
        this.click = 0,
        this.isCrossServer = 0,
        this._idx_showHunhe = 0,
        this._showHunhe = null,
        this._idx_showRune = 0,
        this._showRune = null,
        this.skip = 0,
        this._idx_centerdrops = 0,
        this._centerdrops = null,
        this.bornTime = 0
    }
    t(Te, "app.fateGame.map.AppNPCRESOURCE"),
    e(0, P = Te.prototype, "bornPos", function() {
        return this._bornPos
    }, function(t) {
        this._bornPos = t
    }),
    e(0, P, "npcresid", function() {
        return this._npcresid
    }, function(t) {
        this._npcresid = t
    }),
    e(0, P, "name", function() {
        return this._name
    }, function(t) {
        this._name = t
    }),
    e(0, P, "sketch", function() {
        return this._sketch
    }),
    e(0, P, "npchead", function() {
        return this._npchead
    }),
    e(0, P, "chat", function() {
        return this._chat
    }),
    e(0, P, "desc", function() {
        return this._desc
    }),
    e(0, P, "icon", function() {
        return this._icon
    }),
    e(0, P, "npcresid2", function() {
        return this._npcresid2
    });
    var Pe = Te;
    function Te() {
        this.id = 0,
        this._idx_name = 0,
        this._name = null,
        this._idx_npcresid = 0,
        this._npcresid = null,
        this.modelZoom = 0,
        this._idx_sketch = 0,
        this._sketch = null,
        this._idx_npchead = 0,
        this._npchead = null,
        this.direct = 0,
        this.px = 0,
        this.py = 0,
        this._idx_chat = 0,
        this._chat = null,
        this.func = 0,
        this.funclist = 0,
        this.notice = 0,
        this._idx_desc = 0,
        this._desc = null,
        this._idx_icon = 0,
        this._icon = null,
        this.iconHigh = 0,
        this.mapType = 0,
        this.mapId = 0,
        this.isMission = 0,
        this.npcSoundId = 0,
        this.bubbleId = 0,
        this._idx_bornPos = 0,
        this._bornPos = null,
        this.nameHigh = 0,
        this.click = 0,
        this.activityId = 0,
        this._idx_npcresid2 = 0,
        this._npcresid2 = null,
        this.isFloat = 0,
        this.canClick = 0
    }
    t(Ae, "app.fateGame.map.AppPathMapControl"),
    (P = Ae.prototype).pathToNpc = function(t, e, i, s, n, o, a) {
        void 0 === n && (n = !1),
        void 0 === o && (o = !0),
        void 0 === a && (a = !0);
        var r = ri.ins.getNpcById(t)
          , n = r.bornPos && 2 <= r.bornPos.length ? [S.tile2Coo(r.bornPos[0]), S.tile2Coo(r.bornPos[1])] : null;
        return this.path(r.mapId, n, r.px, r.py, 2, b.create(this, function() {
            0 < r.npcSoundId && (!o || 1 == r.mapType && Ji.ins.isInCity || (M.ins.curMapCfg.mapType,
            r.mapType)),
            e && e.run() || r.func
        }), s, a)
    }
    ,
    P.path = function(t, e, i, s, n, o, a, r) {
        return void 0 === r && (r = !0),
        this.pathByCoo(t, e, S.tile2Coo(i), S.tile2Coo(s), n * S.GRID_BORDER, o, a, r)
    }
    ,
    P.pathByCoo = function(t, e, i, s, n, o, a, r) {
        void 0 === r && (r = !0);
        r = De.ins.getMapById("" + (t = t || 30001));
        if (!r)
            return console.error("地图不存在不能寻路过去。id:" + t),
            !1;
        if (2 == r.mapType)
            return console.error("野外地图不支持寻路过去。id:" + t),
            !1;
        if (17 == r.mapType)
            return console.error("野外地图不支持寻路过去。id:" + t),
            !1;
        if (this.m_curPathing) {
            if (this.m_curPathing.m_mapId == t && this.m_curPathing.m_cooX == i && this.m_curPathing.m_cooY == s)
                return !0;
            this.stop(this.m_curPathing, !1)
        }
        return this.m_onComplete = o,
        this.m_onCancel = a,
        this.m_curPathing = new Re,
        this.m_curPathing.onPlay(t, e, i, s, n),
        !0
    }
    ,
    P.stop = function(t, e) {
        this.m_curPathing == t && (e ? this.m_onComplete && this.m_onComplete.run() : this.m_onCancel && this.m_onCancel.run(),
        this.m_curPathing) && (this.m_curPathing.onStop(),
        this.m_curPathing = null)
    }
    ,
    P.stop2 = function() {
        this.m_curPathing && this.stop(this.m_curPathing, !1)
    }
    ,
    e(0, P, "curPathing", function() {
        return this.m_curPathing
    }),
    e(1, Ae, "ins", function() {
        return Ae._ins || (Ae._ins = new Ae)
    }),
    Ae._ins = null;
    var Le = Ae;
    function Ae() {
        this.m_curPathing = null,
        this.m_onComplete = null,
        this.m_onCancel = null
    }
    t(Be, "app.fateGame.map.AppPathMapOne"),
    (P = Be.prototype).onPlay = function(t, e, i, s, n) {
        this.m_mapId = t,
        this.m_cooX = i,
        this.m_cooY = s,
        this.m_dis = n,
        1 == De.ins.getMapById("" + t).mapType ? Ji.ins.isInCity ? this.beginPlay() : ($i.ins.npcCopyPos = e,
        $i.ins.once("Event_Over", this, this.beginPlay),
        $i.ins.switchCityScene(!0)) : M.ins.curMapCfg.id != t && (M.ins.onceMapPos = e,
        M.ins.once("Event_Change_Map_Finish", this, this.beginPlay)),
        this.beginPlay()
    }
    ,
    P.onStop = function() {
        this.m_player && (this.m_player.off("Path_Stop", this, this.playerArriveHandler),
        this.m_player.off("Path_Finish", this, this.playerArriveHandler))
    }
    ,
    P.beginPlay = function() {
        De.ins.getMapById("" + this.m_mapId);
        this.m_player = M.ins.curPlayer;
        var t = M.ins.curScene
          , t = (this.m_player.once("Path_Stop", this, this.playerArriveHandler),
        this.m_player.once("Path_Finish", this, this.playerArriveHandler),
        t.getAroundPoint(this.m_player.x, this.m_player.y, this.m_cooX, this.m_cooY, Math.ceil(this.m_dis / S.GRID_BORDER)));
        (null != t ? (this.m_cooX = t.x,
        this.m_cooY = t.y,
        this.m_player.pathByCoo(this.m_cooX, this.m_cooY, 0)) : this.m_player.pathByCoo(this.m_cooX, this.m_cooY, this.m_dis)) || Le.ins.stop(this, !0)
    }
    ,
    P.playerArriveHandler = function() {
        this.m_player && (this.m_player.off("Path_Stop", this, this.playerArriveHandler),
        this.m_player.off("Path_Finish", this, this.playerArriveHandler),
        this.distance(this.m_player.x, this.m_player.y, this.m_cooX, this.m_cooY) > 1.5 * this.m_dis + 10 ? Le.ins.stop(this, !1) : Le.ins.stop(this, !0))
    }
    ,
    P.distance = function(t, e, i, s) {
        return Math.sqrt(this.distanceSQ(t, e, i, s))
    }
    ,
    P.distanceSQ = function(t, e, i, s) {
        t -= i,
        i = e - s;
        return t * t + i * i
    }
    ;
    var Re = Be;
    function Be() {
        this.m_mapId = 0,
        this.m_cooX = 0,
        this.m_cooY = 0,
        this.m_dis = 0,
        this.m_player = null
    }
    t(Ne, "app.fateGame.map.AppResourceNames"),
    Ne.getEffectUrl = function(t) {
        return "art/res/other/x5/" + t + ".json"
    }
    ,
    Ne.getLayaFxUrl = function(t) {
        return "art/res/layaFx/" + t + ".ani"
    }
    ;
    var Me = Ne;
    function Ne() {}
    t(Ee, "app.fateGame.map.AppSmallMapCfgObj"),
    Ee.prototype.getMapById = function(t) {
        return parseInt(t) <= 0 ? null : (null != this.tempMap[t] ? this.tempMap : (this.tempMap[t] = this.map[t],
        this.map))[t]
    }
    ,
    e(1, Ee, "ins", function() {
        return Ee._ins = null == Ee._ins ? new Ee : Ee._ins
    }),
    Ee._ins = null;
    var De = Ee;
    function Ee() {
        this.map = null,
        this.tempMap = {},
        this.map = {};
        var t = new Ce;
        t.id = 30001,
        t._Born = [60, 56],
        t.qMapHeight = 3072,
        t.qMapWidth = 4608,
        t.qMapresid = "dl_xszc_small_fw",
        this.map[30001] = t
    }
    t(Oe, "app.fateGame.map.model.AppMapConsts");
    function Oe() {}
    t(Fe, "app.fateGame.map.model.AppMapObj"),
    (P = Fe.prototype).hasGrid = function(t, e) {
        return this.data && 0 <= t && t < this.data.gridW && 0 <= e && e < this.data.gridH && t < this.data.gridWMax && e < this.data.gridHMax
    }
    ,
    P.getStat = function(t, e, i) {
        return (i = void 0 === i ? !0 : i) && !this.hasGrid(t, e) ? (console.error("访问了不存在的点"),
        1) : (i = this.data.gridW * e + t + 8,
        this.data.tileByteArrays.length > i ? (this.data.tileByteArrays.position = i,
        this.data.tileByteArrays.readByte()) : 1)
    }
    ,
    P.isSafe = function(t, e) {
        return !!this.hasGrid(t, e) && 0 != (16 & this.getStat(t, e, !1))
    }
    ,
    P.isSafeByCoo = function(t, e) {
        return this.isSafe(S.coo2Tile(t), S.coo2Tile(e))
    }
    ,
    P.isAlpha = function(t, e) {
        return !!this.hasGrid(t, e) && 0 != (2 & this.getStat(t, e, !1))
    }
    ,
    P.isAlphaByCoo = function(t, e) {
        return this.isAlpha(S.coo2Tile(t), S.coo2Tile(e))
    }
    ,
    P.isObstacle = function(t, e) {
        var i;
        return !this.hasGrid(t, e) || (i = this.getStat(t, e, !1),
        !this.checkCopyBloodSafeCanpass(t, e)) || !this.checkDynamicCanPass(t, e) && 8 == (8 & i) || 0 != (1 & i)
    }
    ,
    P.isSimpleObstacle = function(t, e) {
        return !this.hasGrid(t, e) || 0 != (1 & this.getStat(t, e, !1))
    }
    ,
    P.isDynamicObstacle = function(t, e) {
        return !this.hasGrid(t, e) || 8 == (8 & this.getStat(t, e, !1))
    }
    ,
    P.canWalkByCoo = function(t, e) {
        t = S.coo2Tile(t),
        e = S.coo2Tile(e);
        return this.canPass(t, e)
    }
    ,
    P.canPass = function(t, e) {
        var i;
        return !!this.hasGrid(t, e) && !(!this.checkCopyBloodSafeCanpass(t, e) || (i = this.getStat(t, e, !1),
        !this.checkDynamicCanPass(t, e) && 8 == (8 & i)) || 0 != (1 & i))
    }
    ,
    P.checkCopyBloodSafeCanpass = function(t, e) {
        return !0
    }
    ,
    P.getNearestWalkPointByCoo = function(t, e, i, s) {
        for (var n = Math.atan2(s - e, i - t), o = Math.sqrt((s - e) * (s - e) + (i - t) * (i - t)); 0 < o; o--) {
            var a = t + Math.cos(n) * o
              , r = e + Math.sin(n) * o;
            if (this.canWalkByCoo(a, r))
                return new pt(a,r)
        }
        return new pt(t,e)
    }
    ,
    P.getRandomPosAround = function(t, e, i, s) {
        void 0 === i && (i = 1),
        void 0 === s && (s = 2);
        for (var n = new pt, o = 0; o < 100; ) {
            o++;
            var a = t
              , r = e
              , l = Math.floor(20 * Math.random()) % 2 == 0
              , h = Math.floor(100 * Math.random()) % s
              , l = (a = l ? a + i + h : a - i - h,
            Math.floor(20 * Math.random()) % 2 == 0);
            if (h = Math.floor(100 * Math.random()) % s,
            this.canPass(a, r = l ? r + i + h : r - i - h))
                return n.x = a,
                n.y = r,
                n
        }
        return null
    }
    ,
    P.checkDynamicCanPass = function(t, e) {
        return !1
    }
    ,
    e(1, Fe, "ins", function() {
        return Fe._ins = null == Fe._ins ? new Fe : Fe._ins
    }),
    Fe.getCityinsance = function() {
        return Fe.ins2 = null == Fe.ins2 ? new Fe : Fe.ins2
    }
    ,
    Fe._ins = null,
    Fe.ins2 = null;
    var k = Fe;
    function Fe() {
        this.data = null
    }
    t(Ge, "app.fateGame.mission.AppFieldBoxField"),
    Ge.desc = function(t) {
        return null
    }
    ;
    var He = Ge;
    function Ge(t, e, i, s, n, o, a, r) {
        void 0 === i && (i = !1),
        this.fieldName = null,
        this.showName = null,
        this.readOnly = !1,
        this.onDraw = null,
        this.onBtn1 = null,
        this.btn1Name = null,
        this.onBtn2 = null,
        this.btn2Name = null,
        this.fieldName = t,
        this.showName = e,
        this.onDraw = s,
        this.readOnly = i,
        this.onBtn1 = o,
        this.btn1Name = n,
        this.onBtn2 = r,
        this.btn2Name = a
    }
    t(Ve, "app.fateGame.mission.AppLoopArray"),
    (P = Ve.prototype).push = function(t) {
        this._dataLst.length < this._maxLen ? this._dataLst.push(t) : (this._dataLst[this._startIdx % this._maxLen] = t,
        this._startIdx++)
    }
    ,
    P.popShift = function() {
        return this._dataLst.shift()
    }
    ,
    P.shift = function(t) {
        this._dataLst.unshift(t),
        this._dataLst.length > this._maxLen && this._dataLst.pop()
    }
    ,
    P.append = function(t) {
        this._dataLst.push(t),
        this._dataLst.length > this._maxLen && this._dataLst.shift()
    }
    ,
    P.getObj = function(t) {
        t = this._startIdx + t;
        return t %= this._maxLen,
        this._dataLst[t]
    }
    ,
    P.clear = function() {
        this._dataLst.length = 0
    }
    ,
    e(0, P, "dataLst", function() {
        return this._dataLst
    }),
    e(0, P, "length", function() {
        return this._dataLst.length
    });
    var Ue = Ve;
    function Ve(t) {
        this._dataLst = null,
        this._maxLen = 0,
        this._startIdx = 0,
        this._maxLen = t,
        this._dataLst = []
    }
    t(Xe, "app.fateGame.mission.AppMOVIESCREENTALKRESOURCE"),
    e(0, P = Xe.prototype, "name", function() {
        return this._name
    }, function(t) {
        this._name = t
    }),
    e(0, P, "icon", function() {
        return this._icon
    }, function(t) {
        this._icon = t
    }),
    e(0, P, "content", function() {
        return this._content
    }, function(t) {
        this._content = t
    }),
    e(0, P, "sound", function() {
        return this._sound
    }, function(t) {
        this._sound = t
    });
    var ze = Xe;
    function Xe() {
        this.id = 0,
        this._idx_name = 0,
        this._name = null,
        this.type = 0,
        this.index = 0,
        this.position = 0,
        this._idx_icon = 0,
        this._icon = null,
        this.chooseTalk = 0,
        this.isWriter = 0,
        this._idx_content = 0,
        this._content = null,
        this._idx_sound = 0,
        this._sound = null
    }
    t(je, "app.fateGame.mission.AppMovieTalkCfgObj"),
    (P = je.prototype).getItemsByType = function(t) {
        var e, i, s = [];
        for (i in this.screenMap)
            (e = this.screenMap[i]).type == t && s.push(e);
        return s.sort(this.sortTask)
    }
    ,
    P.sortTask = function(t, e) {
        return t.index - e.index
    }
    ,
    e(1, je, "ins", function() {
        return je._ins = null == je._ins ? new je : je._ins
    }),
    je._ins = null;
    var We = je;
    function je() {
        this.map = null,
        this.screenMap = null,
        this.screenMap = {};
        var t = new ze;
        t.id = 5,
        t.name = "大师",
        t.type = 10003,
        t.index = 1,
        t.position = 0,
        t.icon = "sr_ds.png",
        t.chooseTalk = 1,
        t.content = [{
            0: "竟然是这么强大的武魂！看来这次圣魂村之旅能有所收获了。"
        }, {
            12: "竟然是白虎武魂！这可是星罗皇室特有，攻守兼备，兽武魂中的王者！"
        }, {
            13: "竟然是昊天锤！昊天宗的专属武魂，当世最强大的强攻系武魂之一！（这孩子跟昊天宗有何渊源？）"
        }, {
            22: "竟然是柔骨兔武魂！强大的柔技令人防不胜防！"
        }, {
            33: "火凤凰！斗罗大陆最卓越的武魂之一！持续输出能力极强，克制植物系武魂！"
        }, {
            25: "罗三炮……变异的蓝电霸王龙武魂，人宠一体所向披靡！"
        }],
        t.sound = "25:41003|13:41004|22:41005|33:41006",
        this.screenMap[t.id] = t,
        (t = new ze).id = 7,
        t.name = "大师",
        t.type = 10004,
        t.index = 1,
        t.position = 0,
        t.icon = "sr_ds.png",
        t.chooseTalk = 0,
        t.content = ["接下来我们进行魂力测试，别紧张，按住水晶球不要松开。"],
        this.screenMap[t.id] = t
    }
    t($e, "app.fateGame.mission.AppParticleShowCxt"),
    P = $e.prototype,
    x.imps(P, {
        "app.fateGame.mission.AppIFieldBoxCustom": !0
    }),
    P.getFields = function() {
        return $e._fieldInfos || (($e._fieldInfos = []).push(new He("url","")),
        $e._fieldInfos.push(new He("rangX","")),
        $e._fieldInfos.push(new He("rangY","")),
        $e._fieldInfos.push(new He("firstRoundCount","")),
        $e._fieldInfos.push(new He("distanceOfRound","")),
        $e._fieldInfos.push(new He("intervalOfRound","")),
        $e._fieldInfos.push(new He("numOfRound","")),
        $e._fieldInfos.push(new He("maxRound","")),
        $e._fieldInfos.push(new He("maxParticles","")),
        $e._fieldInfos.push(new He("lifeTime","")),
        $e._fieldInfos.push(new He("sizeX","")),
        $e._fieldInfos.push(new He("sizeXRange","")),
        $e._fieldInfos.push(new He("sizeXRate","")),
        $e._fieldInfos.push(new He("sizeY","")),
        $e._fieldInfos.push(new He("sizeYRange","")),
        $e._fieldInfos.push(new He("sizeYRate","")),
        $e._fieldInfos.push(new He("moveDir","")),
        $e._fieldInfos.push(new He("moveDirRange","")),
        $e._fieldInfos.push(new He("moveDirRate","")),
        $e._fieldInfos.push(new He("moveSpeed","")),
        $e._fieldInfos.push(new He("moveSpeedRange","")),
        $e._fieldInfos.push(new He("moveSpeedRate","")),
        $e._fieldInfos.push(new He("gravityDir","")),
        $e._fieldInfos.push(new He("gravityDirRange","")),
        $e._fieldInfos.push(new He("gravityDirRate","")),
        $e._fieldInfos.push(new He("gravityForce","")),
        $e._fieldInfos.push(new He("rotation","")),
        $e._fieldInfos.push(new He("rotationRange","")),
        $e._fieldInfos.push(new He("rotationRate","")),
        $e._fieldInfos.push(new He("alpha","")),
        $e._fieldInfos.push(new He("alphaRange","")),
        $e._fieldInfos.push(new He("alphaRate",""))),
        $e._fieldInfos
    }
    ,
    $e._fieldInfos = null;
    var Ye = $e;
    function $e() {
        this.url = null,
        this.rangX = 0,
        this.rangY = 0,
        this.maxRound = -1,
        this.firstRoundCount = 0,
        this.distanceOfRound = -1,
        this.intervalOfRound = 100,
        this.numOfRound = new qe,
        this.maxParticles = 1e3,
        this.lifeTime = new qe,
        this.sizeX = new Qe,
        this.sizeXRange = 0,
        this.sizeXRate = 0,
        this.sizeY = new Qe,
        this.sizeYRange = 0,
        this.sizeYRate = 0,
        this.moveDir = new Qe,
        this.moveDirRange = 0,
        this.moveDirRate = 0,
        this.moveSpeed = new Qe,
        this.moveSpeedRange = 0,
        this.moveSpeedRate = 0,
        this.gravityDir = new Qe,
        this.gravityDirRange = 0,
        this.gravityDirRate = 0,
        this.gravityForce = 0,
        this.rotation = new Qe,
        this.rotationRange = 0,
        this.rotationRate = 0,
        this.alpha = new Qe,
        this.alphaRange = 0,
        this.alphaRate = 0
    }
    t(Ke, "app.fateGame.mission.AppRangeValueNumber"),
    P = Ke.prototype,
    x.imps(P, {
        "app.fateGame.mission.AppIFieldBoxFieldCustom": !0
    }),
    P.getRangeValue = function(t, e, i) {
        return this.begin + (this.end - this.begin) * t + Math.sin(2 * Math.PI * i * t) * e
    }
    ,
    P.parseByString = function(t) {
        null != t && 0 != t.length || (this.begin = 0,
        this.end = 0);
        var e = t.split(",");
        2 == e.length ? (this.begin = Number(e[0]),
        this.end = Number(e[1])) : console.error("解析失败:" + t)
    }
    ,
    P.toString = function() {
        return this.begin + "," + this.end
    }
    ,
    P.onDraw = function(e, i, t, s) {
        function n(t) {
            o.parseByString(t.text),
            s.event("Event_Field_Change", [[e, i]])
        }
        var o = this
          , a = (e[i.fieldName],
        t.getChildAt(0))
          , r = a.getChildAt(1).getChildAt(0)
          , l = t.getChildAt(1)
          , t = t.getChildAt(2);
        l.visible = !1,
        t.visible = !1,
        a.text = i.showName,
        r.text = this.toString(),
        r.editable = !0,
        r.dataSource = [e, i];
        r.offAll("blur"),
        r.offAll("enter"),
        r.on("blur", this, n),
        r.on("enter", this, n)
    }
    ,
    e(0, P, "randomValue", function() {
        return this.end >= this.begin ? this.begin + Math.random() * (this.end - this.begin) : this.end
    });
    var qe = Ke;
    function Ke() {
        this.begin = 0,
        this.end = 0,
        this.regExp = new RegExp(/^(([0-9]{1,})|([0-9]{1,}[.][0-9]{1,}))[\,](([0-9]{1,})|([0-9]{1,}[.][0-9]{1,}))$/)
    }
    t(Ze, "app.fateGame.mission.AppTimelifeValue"),
    P = Ze.prototype,
    x.imps(P, {
        "app.fateGame.mission.AppIFieldBoxFieldCustom": !0
    }),
    P.parseByString = function(t) {
        null != t && 0 != t.length || (this.start.begin = 0,
        this.start.end = 0,
        this.timelife.begin = 0,
        this.timelife.end = 0);
        var e = t.split("|");
        2 == e.length ? (this.start.parseByString(e[0]),
        this.timelife.parseByString(e[1])) : console.error("解析失败:" + t)
    }
    ,
    P.toString = function() {
        return this.start + "|" + this.timelife
    }
    ,
    P.onDraw = function(t, e, i, s) {
        function n(t) {
            o.parseByString(t.text)
        }
        var o = this
          , a = (t[e.fieldName],
        i.getChildAt(0))
          , r = a.getChildAt(1).getChildAt(0)
          , l = i.getChildAt(1)
          , i = i.getChildAt(2);
        l.visible = !1,
        i.visible = !1,
        a.text = e.showName,
        r.text = this.toString(),
        r.editable = !0,
        r.dataSource = [t, e];
        r.offAll("blur"),
        r.offAll("enter"),
        r.on("blur", this, n),
        r.on("enter", this, n)
    }
    ;
    var Qe = Ze;
    function Ze() {
        this.start = new qe,
        this.timelife = new qe
    }
    t(Je, "app.fateGame.notice.AppCommonEventType");
    function Je() {}
    t(ei, "app.fateGame.notice.AppGeneralNoticeShowControl"),
    (P = ei.prototype).handleAdd = function(t) {
        var e;
        t && (this._items = this._items || new F(3),
        (e = this._items[this._curIndex]) || (e = new ln,
        (this._items[this._curIndex] = e).on("GENERAL_NOTICE_COMPLETE", this, this.completeHandler)),
        this._con.addChild(e),
        e.setData(t),
        e.x = (I.viewWidth - e.width) / 2,
        this._count++,
        3 < this._count && (this._count = 3),
        this.resetPosY(this._curIndex),
        this._curIndex = this.addIndex(this._curIndex),
        3 <= this._count) && (this._count = 3,
        m.to(this._con, {
            y: this.POS_CON - 42
        }, 150, null, null, 0, !0))
    }
    ,
    P.resetPosY = function(t) {
        this._con.y = this.POS_CON;
        for (var e = this._count - 1; 0 <= e; e--) {
            var i = this._items[t];
            i && (i.y = this.POS[e]),
            --t < 0 && (t = 2)
        }
    }
    ,
    P.addIndex = function(t) {
        return t = 3 == ++t ? 0 : t
    }
    ,
    P.completeHandler = function() {
        this._count--,
        this._count < 0 && (this._count = 0)
    }
    ,
    e(1, ei, "ins", function() {
        return ei._inst || (ei._inst = new ei)
    }),
    ei._inst = null;
    var ti = ei;
    function ei() {
        this.POS = [0, 42, 84],
        this._items = null,
        this._curIndex = 0,
        this._count = 0,
        this._con = null,
        this.POS_CON = 208,
        this.POS_CON = (I.viewHeight - 42) / 2,
        this._con = new z,
        this._con.mouseEnabled = !1,
        this._con.mouseThrough = !0,
        this._con.y = this.POS_CON,
        ve.ins.tipsLayer.addChild(this._con)
    }
    t(si, "app.fateGame.notice.AppHtmlTextParam");
    var ii = si;
    function si() {
        this.fontSize = 24,
        this.stroke = 0,
        this.color = "#ffffff",
        this.strokeColor = "#000000",
        this.align = "left",
        this.wordWrap = !1,
        this.font = "黑体"
    }
    t(ni, "app.fateGame.role.AppBaseAIManager"),
    (P = ni.prototype).setAuto = function(t, e) {
        void 0 === e && (e = 4),
        (this._isAuto = t) ? x.timer.frameLoop(e, this, this.mainLoop) : x.timer.clear(this, this.mainLoop)
    }
    ,
    P.setPlayer = function(t) {
        for (var e in this.player = t,
        this.actionList)
            this.actionList[e].setPlayer(t)
    }
    ,
    P.getPlayer = function() {
        return this.player
    }
    ,
    P.callLoop = function() {
        this.mainLoop()
    }
    ,
    P.mainLoop = function() {
        ni.s_stopAI ? this.setAuto(!1) : this.loop()
    }
    ,
    P.loop = function() {}
    ,
    P.pushAction = function(t) {
        this.actionList.push(t)
    }
    ,
    P.destroy = function() {
        this.recover()
    }
    ,
    P.reset = function() {}
    ,
    P.recover = function(t) {
        for (var e in void 0 === t && (t = !0),
        this.player = null,
        this.actionList)
            this.actionList[e].recover();
        this.actionList.length = 0,
        this.setAuto(!1),
        t && dt.recover("app.fateGame.role.AppBaseAIManager", this)
    }
    ,
    P.clearCurAction = function() {}
    ,
    e(0, P, "isAuto", function() {
        return this._isAuto
    }),
    ni.s_stopAI = !1;
    var P = ni;
    function ni() {
        this.player = null,
        this.actionList = null,
        this._isAuto = !1,
        this.checkRate = 1,
        this.actionList = []
    }
    t(ai, "app.fateGame.role.AppCityRoleList"),
    (T = ai.prototype).isPlayerExist = function() {
        return this._player
    }
    ,
    T.reset = function() {
        this._roles = {},
        this._player.setAct("act01"),
        this._player.recover(),
        this._player = null
    }
    ,
    T.addRole = function(t) {
        t && t.info && (this._roles[t.info.personId + ""] = t)
    }
    ,
    T.removeRole = function(t) {
        t.info && (t = t.info.personId + "",
        this._roles[t]) && (this._roles[t] = null,
        delete this._roles[t])
    }
    ,
    T.getRole = function(t) {
        return this._roles && t ? this._roles[t + ""] : null
    }
    ,
    T.getRoleByStr = function(t) {
        return this._roles && t ? this._roles[t] : null
    }
    ,
    T.updateRoleDisplay = function() {}
    ,
    e(0, T, "roles", function() {
        return this._roles
    }),
    e(0, T, "player", function() {
        var t, e;
        return this._player || (this._player = dt.getItemByClass("app.fateGame.role.AppCityPlayer", pa),
        t = De.ins.getMapById("30001"),
        e = A.ins.getShowPersonInfo(),
        t = S.tile2CooXY([t.qBornX, t.qBornY]),
        e.x = t[0],
        e.y = t[1],
        this._player.info = e,
        this._player.direct = 135,
        this._player.pos(t[0], t[1]),
        this._player.setAct("act01", !0, !1, !0),
        e = dt.getItemByClass("app.fateGame.role.AppCityPlayerAIManager", ys),
        this._player.setAI(e)),
        this._player
    }),
    e(1, ai, "ins", function() {
        return ai._ins = null == ai._ins ? new ai : ai._ins
    }),
    ai._ins = null;
    var oi = ai;
    function ai() {
        this._player = null,
        this._roles = {}
    }
    t(li, "app.fateGame.role.AppNpcCfgObj"),
    (T = li.prototype).getNpcs = function() {
        return this.map
    }
    ,
    T.getNpcsByType = function(t) {
        var e, i, s = [];
        for (i in this.map)
            e = this.map[i],
            s.push(e);
        return s
    }
    ,
    T.getNpcById = function(t) {
        return this.map[t]
    }
    ,
    e(1, li, "ins", function() {
        return li._ins = null == li._ins ? new li : li._ins
    }),
    li._ins = null;
    var ri = li;
    function li() {
        this.map = null,
        this.map = {};
        var t = new Pe;
        t.id = 10003,
        t.name = "老杰克",
        t.bornPos = [78, 50],
        t.npcresid = "x5/npc006",
        t.px = 80,
        t.py = 46,
        t.direct = 3,
        t.mapType = 1,
        this.map[t.id] = t,
        (t = new Pe).id = 10034,
        t.name = "大师",
        t.bornPos = [84, 44],
        t.npcresid = "x5/npc_1004",
        t.px = 86,
        t.py = 40,
        t.direct = 5,
        t.mapType = 1,
        this.map[t.id] = t,
        (t = new Pe).id = 30017,
        t.name = "朱竹清",
        t.bornPos = [78, 50],
        t.npcresid = "x5/npc_1006",
        t.px = 84,
        t.py = 48,
        t.direct = 5,
        t.mapType = 1,
        this.map[t.id] = t
    }
    t(hi, "app.fateGame.role.AppPlayerControlRoleStatus");
    function hi() {}
    t(ci, "app.fateGame.role.AppPlayerDetailBean");
    var T = ci;
    function ci() {
        this.personId = null,
        this.ownPlayerId = null,
        this.playerName = null,
        this.job = 0,
        this.sex = 0,
        this.level = 0,
        this.exp = null,
        this.transferJob = 0,
        this.rebirthLv = 0,
        this.fruitObj = null,
        this.jobType = 0,
        this.expiredTime = 0,
        this.battleScore = NaN,
        this.starLv = 0,
        this.createTime = 0,
        this.souNum = 0,
        this.skinId = 0
    }
    t(ui, "app.fateGame.role.AppRoleList"),
    (N = ui.prototype).setTempPlayer = function(t, e) {
        void 0 === e && (e = !0),
        this._tempPlayer != t && (this._tempPlayer = t,
        this._tempPlayer ? e && M.ins.setFocusPlayer(this._tempPlayer) : this._player && (M.ins.addRole(this._player),
        e) && M.ins.setFocusPlayer())
    }
    ,
    N.updateRoleDisplay = function() {}
    ,
    N.hideAll = function() {
        var t, e;
        for (e in this._roles)
            (t = this._roles[e]) && t.info && t.sceneHideRole(!0)
    }
    ,
    N.getFocusPlayer = function() {
        if (!this.player || !this.player.info)
            return null;
        if (this.player.info.personId.equal(A.ins.playerInfo.showPlayerId))
            return this.player;
        for (var t, e = 0; e < this._teammate.length; e++)
            if ((t = this._teammate[e]) && t.info && t.info.personId.equal(A.ins.playerInfo.showPlayerId))
                return t;
        return !this.player.isAlive() && 1 != this.player.curStatus && this.getMaxPowerPlayer() || this.player
    }
    ,
    N.getNowPlayerInfo = function() {
        if (!this._player || !this._player.info)
            return null;
        var t;
        if (!(t = this._player.info.personId.equal(A.ins.playerInfo.showPlayerId) ? this._player.info : t))
            for (var e = 0; e < this._teammate.length; e++)
                if (this._teammate[e].info.personId.equal(A.ins.playerInfo.showPlayerId)) {
                    t = this._teammate[e].info;
                    break
                }
        return t = t || A.ins.playerInfo
    }
    ,
    N.getMaxLevel = function() {
        for (var t = -1, e = 0, i = this._teammate.length; e < i; e++)
            this._teammate[e] && this._teammate[e].info && this._teammate[e].info.level > t && (t = this._teammate[e].info.level);
        return t = A.ins.playerInfo.level > t ? A.ins.playerInfo.level : t
    }
    ,
    N.getMaxPowerPlayer = function() {
        return this._teammate[0]
    }
    ,
    N.addTeammate = function(t) {
        if (t) {
            for (var e = t.info.personId, i = this._teammate.length - 1; 0 <= i; i--)
                if (null == this._teammate[i].info)
                    this._teammate.splice(i, 1);
                else if (e && e.equal(this._teammate[i].info.personId))
                    return this._teammate[i] = t,
                    void this.addRole(t);
            this._teammate.push(t),
            this.addRole(t)
        }
    }
    ,
    N.removeAllTeammate = function() {
        this._teammate = []
    }
    ,
    N.reset = function() {
        this._roles = {},
        this._lastStaticNpc = null,
        _i.ins.onReset()
    }
    ,
    N.addRole = function(t) {
        t && t.info && (this._roles[t.info.personId + ""] = t,
        _i.ins.addRole(t))
    }
    ,
    N.removeRole = function(t) {
        var e;
        _i.ins.removeRole(t),
        t.removeSet(),
        t.info && (e = t.info.personId + "",
        this._roles[e] && (this._roles[e] = null,
        delete this._roles[e]),
        t.ignoreSceneHide = !1)
    }
    ,
    N.getRole = function(t) {
        return this._roles && t ? this._roles[t + ""] : null
    }
    ,
    N.getRoleByStr = function(t) {
        return this._roles && t ? this._roles[t] : null
    }
    ,
    e(0, N, "player", function() {
        return this._tempPlayer || this._player
    }, function(t) {
        this._player = t,
        this.addRole(this._player)
    }),
    e(0, N, "roles", function() {
        return this._roles
    }),
    e(0, N, "teammate", function() {
        return this._teammate
    }),
    e(1, ui, "ins", function() {
        return ui._ins = null == ui._ins ? new ui : ui._ins
    }),
    ui._ins = null;
    var pi = ui;
    function ui() {
        this._player = null,
        this._teammate = null,
        this._tempPlayer = null,
        this._roles = null,
        this._lastStaticNpc = null,
        this._teammate = []
    }
    t(gi, "app.fateGame.role.AppRoleStatus"),
    gi.checkCanWalk = function(t) {
        return !(!t.info || 0 != t.curStatus)
    }
    ,
    gi.checkCanshock = function(t) {
        return 0 == t
    }
    ,
    gi.checkBeHitFloat = function(t) {
        return 0 == t.curStatus && !t.isPlayer()
    }
    ,
    gi.checkBeHitBack = function(t) {
        return !M.ins.isChangingMap && 3 != t.curStatus && 0 == t.curStatus && !t.isPlayer()
    }
    ,
    gi.checkCanDizzy = function(t) {
        return 1 != t.curStatus && 6 != t.curStatus && 7 != t.curStatus && 8 != t.curStatus && 9 != t.curStatus && 10 != t.curStatus && 12 != t.curStatus
    }
    ,
    gi.checkCanTeleport = function(t, e) {
        return !M.ins.isChangingMap && 0 == t
    }
    ,
    gi.checkCanChongfeng = function(t) {
        return !M.ins.isChangingMap && 0 == t
    }
    ,
    gi.checkCanForward = function(t) {
        return !M.ins.isChangingMap && 0 == t
    }
    ,
    gi.checkCanBump = function(t) {
        return !M.ins.isChangingMap && 0 == t
    }
    ,
    gi.checkCanBeBump = function(t) {
        return !M.ins.isChangingMap && 0 == t
    }
    ,
    gi.checkCanBeBumpMove = function(t) {
        return !M.ins.isChangingMap
    }
    ,
    gi.checkCanTransfer = function(t, e) {
        return !M.ins.isChangingMap && 0 == t
    }
    ;
    var di = gi;
    function gi() {}
    t(mi, "app.fateGame.role.AppRoleType");
    function mi() {}
    t(L, "app.fateGame.role.AppRolesObstacle"),
    (N = L.prototype).setGrid = function(t) {
        L.Grid_Size_Min = (L.Grid_Size_Max = 1.5 * (L.Grid_Size = t)) / 2
    }
    ,
    N.onReset = function() {
        this.m_posToRole = {},
        this.m_roleToPos = {},
        this.m_debugGrid && (this.m_debugGrid.destroy(),
        this.m_debugGrid = null),
        this.m_debugObstacles && (this.m_debugObstacles.destroy(),
        this.m_debugObstacles = null),
        this.setGrid(L.Def_Grid_Size)
    }
    ,
    N.freshDebug = function() {
        if (this.m_debug) {
            if (!this.m_debugGrid) {
                for (var t = ve.ins.gameScene, e = Math.floor(t.bgView._w / L.Grid_Size), i = Math.floor(t.bgView._h / L.Grid_Size), s = (this.m_debugGrid = new z,
                this.m_debugGrid.alpha = .5,
                t.shadowLayer.addChildAt(this.m_debugGrid, 0),
                0), s = 0; s < i; ++s)
                    this.m_debugGrid.graphics.drawLine(0, s * L.Grid_Size, t.bgView._w, s * L.Grid_Size, "#ff0000");
                for (s = 0; s < e; ++s)
                    this.m_debugGrid.graphics.drawLine(s * L.Grid_Size, 0, s * L.Grid_Size, t.bgView._h, "#ff0000")
            }
            for (var n in this.m_debugObstacles || (this.m_debugObstacles = new z,
            this.m_debugObstacles.alpha = .3,
            t.shadowLayer.addChildAt(this.m_debugObstacles, 1)),
            this.m_debugObstacles.graphics.clear(),
            this.m_roleToPos) {
                n = this.m_roleToPos[n];
                this.m_debugObstacles.graphics.drawRect(n.x * L.Grid_Size, n.y * L.Grid_Size, L.Grid_Size, L.Grid_Size, "#ff0000")
            }
        } else
            this.m_debugGrid && (this.m_debugGrid.destroy(),
            this.m_debugGrid = null),
            this.m_debugObstacles && (this.m_debugObstacles.destroy(),
            this.m_debugObstacles = null)
    }
    ,
    N.notNeedObs = function(t) {
        return !(!x.__typeof(t, pa) && !x.__typeof(t, ga) && t.info && x.__typeof(t.info, Ds))
    }
    ,
    N.addRole = function(t) {
        var e, i, s, n;
        t && t.info && (this.notNeedObs(t) || (e = t.info.personId + "",
        i = L.coo2Tile(t.x),
        s = L.coo2Tile(t.y),
        this.m_roleToPos[e] ? x.__typeof(t.info, Ds) || console.error("动态占位重复添加了角色:" + e) : (s = (i = new pt(i,s)).x + "_" + i.y,
        (n = this.m_posToRole[s]) ? n.push(t) : this.m_posToRole[s] = n = [t],
        this.m_roleToPos[e] = i,
        this.freshDebug())))
    }
    ,
    N.removeRole = function(t) {
        var e, i, s;
        t && t.info && !this.notNeedObs(t) && (e = t.info.personId + "",
        i = this.m_roleToPos[e]) && (delete this.m_roleToPos[e],
        i = i.x + "_" + i.y,
        -1 == (t = (s = this.m_posToRole[i]).indexOf(t)) ? console.error("动态占位尝试删掉一个不存在的角色:" + e) : (1 == s.length ? delete this.m_posToRole[i] : s.splice(t, 1),
        this.freshDebug()))
    }
    ,
    N.setRoleCooPos = function(t, e, i) {
        if (t && t.info && t.info.personId && !this.notNeedObs(t)) {
            var e = L.coo2Tile(e)
              , i = L.coo2Tile(i)
              , s = t.info.personId + ""
              , n = this.m_roleToPos[s];
            if (this.m_roleToPos[s] && (n.x != e || n.y != i)) {
                var o = n.x + "_" + n.y
                  , a = (l = this.m_posToRole[o]).indexOf(t);
                if (-1 == a) {
                    for (var r in console.error("动态占位尝试设置一个不存在的角色的位置:" + s + "$_GID==" + t.$_GID),
                    this.m_posToRole)
                        0 <= this.m_posToRole[r].indexOf(t) && console.error("角色" + s + "在m_posToRole中的key ===" + r);
                    console.error("角色" + s + "在m_roleToPos中的key ===" + o)
                } else {
                    1 == l.length ? delete this.m_posToRole[o] : l.splice(a, 1),
                    n.x = e,
                    n.y = i;
                    var l, o = n.x + "_" + n.y;
                    (l = this.m_posToRole[o]) ? l.push(t) : this.m_posToRole[o] = l = [t],
                    this.freshDebug()
                }
            }
        }
    }
    ,
    N.getRolePos = function(t) {
        return !t || !t.info || this.notNeedObs(t) ? null : (t = t.info.personId + "",
        this.m_roleToPos[t])
    }
    ,
    N.getPosRoles = function(t, e) {
        return this.m_posToRole[t + "_" + e]
    }
    ,
    N.isGoodCooPos = function(t, e, i) {
        var s = (s = pi.ins.getRole(A.ins.playerInfo.showPlayerId)) || pi.ins.player;
        if (t != s) {
            if (!this.getRolePos(t))
                return !1;
            if (!ve.ins.gameScene.xInVisibleRange(e + 2 * S.GRID_BORDER) || !ve.ins.gameScene.xInVisibleRange(e - 2 * S.GRID_BORDER))
                return !1;
            if (!ve.ins.gameScene.yInVisibleRange(i + 2 * S.GRID_BORDER) || !ve.ins.gameScene.yInVisibleRange(i - 2 * S.GRID_BORDER))
                return !1;
            for (var n = L.coo2Tile(e), o = L.coo2Tile(i), a = 0; a < L.s_near.length; ++a) {
                var r, l, h = n + L.s_near[a][0], c = o + L.s_near[a][1], p = this.getPosRoles(h, c);
                if (null != p)
                    if (t.info && t.info.isPlayer()) {
                        for (l in p)
                            if ((r = p[l]) != t && r.info && r.info.isPlayer())
                                return !1
                    } else if (null != p && (2 <= p.length || 1 == p.length && p[0] != t))
                        return !1
            }
        }
        return !0
    }
    ,
    N.isGoodCooPos1 = function(t, e, i, s) {
        if (void 0 === s && (s = !0),
        !this.getRolePos(t))
            return !1;
        var n = (n = pi.ins.getRole(A.ins.playerInfo.showPlayerId)) || pi.ins.player;
        if (s) {
            var s = n.info && n.isAlive() ? n.x : n.deadX
              , o = n.info && n.isAlive() ? n.y : n.deadY;
            if (n != t && fi.distanceSQ(s, o, e, i) > this.moveRange * this.moveRange)
                return !1
        }
        if (!ve.ins.gameScene.xInVisibleRange(e + 2 * S.GRID_BORDER) || !ve.ins.gameScene.xInVisibleRange(e - 2 * S.GRID_BORDER))
            return !1;
        if (!ve.ins.gameScene.yInVisibleRange(i + 2 * S.GRID_BORDER) || !ve.ins.gameScene.yInVisibleRange(i - 2 * S.GRID_BORDER))
            return !1;
        for (var a = L.coo2Tile(e), r = L.coo2Tile(i), l = 0; l < L.s_near.length; ++l) {
            var h = this.getPosRoles(a + L.s_near[l][0], r + L.s_near[l][1]);
            if (null != h && (2 <= h.length || 1 == h.length && h[0] != t))
                return !1
        }
        return !0
    }
    ,
    e(1, L, "ins", function() {
        return L._ins = L._ins ? L._ins : new L
    }),
    L.coo2Tile = function(t) {
        return Math.floor(t / L.Grid_Size)
    }
    ,
    L.tile2Coo = function(t) {
        return Math.floor(t * L.Grid_Size + L.Grid_Size / 2)
    }
    ,
    L.Def_Grid_Size = 30,
    L.Grid_Size = 30,
    L._ins = null,
    O(L, ["Grid_Size_Max", function() {
        return this.Grid_Size_Max = 1.5 * L.Grid_Size
    }
    , "Grid_Size_Min", function() {
        return this.Grid_Size_Min = L.Grid_Size_Max / 2
    }
    , "s_near", function() {
        return this.s_near = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]]
    }
    ]);
    var _i = L;
    function L() {
        this.moveRange = 250,
        this.normalMoveRange = 250,
        this.otherMoveRange = 250,
        this.m_posToRole = {},
        this.m_roleToPos = {},
        this.m_debug = !1,
        this.m_debugGrid = null,
        this.m_debugObstacles = null,
        this.m_debugAddMsg = !1
    }
    t(yi, "app.fateGame.role.AppToolKit"),
    yi.distance = function(t, e, i, s) {
        return Math.sqrt(yi.distanceSQ(t, e, i, s))
    }
    ,
    yi.copyTo = function(t, e) {
        for (var i in t) {
            var s = t[i];
            "string" != typeof s && s instanceof Object ? e[i] && yi.copyTo(s, e[i]) : e[i] = s
        }
    }
    ,
    yi.distanceSQ = function(t, e, i, s) {
        t -= i,
        i = e - s;
        return t * t + i * i
    }
    ,
    yi.parseSmallFace = function(t) {
        if (!t)
            return "";
        var e = t.replace(/\#([0-9a-f]{6})/gi, "#FF$1")
          , i = e.match(/\#([0-9]{2})/gi);
        if (i && 0 < i.length)
            for (var s = 0; s < i.length; s++) {
                var n = i[s].substring(1);
                parseInt(n) <= 28 && (e = e.replace(i[s], '<clip clipYOffset="5" isClip="1" skin="art/res/face2/' + n + '.png" width="40" height="40" clipY="' + yi.FACE_FRAME_CONFIG[parseInt(n)] + '" autoPlay="true"/>'))
            }
        return e = e.replace(/\#FF([0-9a-f]{6})/gi, "#$1")
    }
    ,
    yi.filterColor = function(t) {
        t = t.replace("[-]", "</font>");
        for (var e = 0, e = 0; e < 1; ++e)
            0 < t.indexOf("[-]") && (t = t.replace("[-]", "</font>"),
            e--);
        for (var i = /\[.*?\]/; null != (s = t.match(i)); ) {
            var s = s[0].slice(1, s[0].length - 1);
            t = t.replace(i, "<font color='#" + s + "'>")
        }
        return t
    }
    ,
    yi.replaceInfos = function(t, e, i) {
        var s = t.match(/\$\{.*?\}/g);
        if (null != s)
            for (var n = 0; n < s.length; n++) {
                var o = s[n].slice(2, s[n].length - 1);
                if (!e || !e.hasOwnProperty(n + ""))
                    break;
                var a = yi.getNumber(o)
                  , r = null
                  , r = -1 == a ? e[n] : e[a];
                e || (r = e[n]),
                t = yi.formatInfo(t, r, o, i)
            }
        return t
    }
    ,
    yi.formatInfo = function(t, e, i, s) {
        var n = /\$\{.*?\}/;
        return "number" == typeof e ? t = t.replace(n, e.toString()) : "string" == typeof e && (t = t.replace(n, e)),
        t
    }
    ,
    yi.getNumber = function(t) {
        for (var e = "", i = 0; i < t.length; i++)
            48 <= t.charCodeAt(i) && t.charCodeAt(i) <= 57 && (e += t.charAt(i) + "");
        return "" == e ? -1 : parseInt(e)
    }
    ,
    yi.trySetHtml = function(t, e) {
        try {
            t.innerHTML = e
        } catch (t) {
            return !1
        }
        return !0
    }
    ,
    yi.playSimpleVmc = function(t, e, i, s, n, o, a, r, l, h) {
        var c;
        void 0 === i && (i = 0),
        void 0 === s && (s = 0),
        void 0 === n && (n = 1),
        void 0 === o && (o = !1),
        void 0 === l && (l = !0),
        void 0 === h && (h = "90");
        for (var p = t.numChildren - 1; 0 <= p; p--)
            c = t.getChildAt(p),
            x.__typeof(c, qs) && (c.isMarkSimple() || console.error("playSimpleVmc不能和普通的vmcview混用，不然可能会回收到使用中的vmcview"),
            (d = d || []).push(c));
        if (d && 1 == d.length && d[0].url == e)
            return d[0];
        for (; d && 0 < d.length; )
            c = d.pop(),
            x.__typeof(c, qs) && c.recover();
        var u, d = null;
        return e && "" != e ? ((u = qs.createVMC()).markSimple(),
        u.setUndisplayRecover(!0, null),
        u.roleScale = n,
        u.move(i, s),
        u.actCompleteCallBack = a,
        u.updatePose(e, 90, r, o, l, l, h),
        u.play(),
        t.addChild(u),
        u) : null
    }
    ,
    yi.getFormatDir = function(t, e, i, s) {
        void 0 === s && (s = !1);
        var n = t < 0
          , o = (t = Math.abs(t),
        0)
          , a = !1
          , a = !(i <= 0) && (4 <= i || 0 <= yi.fivePath[0].indexOf(e))
          , o = (a = s ? !1 : a) ? t < 22.5 ? 0 : t < 67.5 ? 45 : t < 112.5 ? 90 : t < 157.5 ? 135 : 180 : t < 90 ? 45 : 135;
        return n && (o *= -1),
        o
    }
    ,
    yi.resetSprite = function(t) {
        for (var e = t.numChildren - 1; 0 <= e; e--) {
            var i = t.removeChildAt(0);
            x.__typeof(i, qs) ? (i.stop(),
            i.removeSelf()) : x.__typeof(i, Xs) && i.recover()
        }
        t._childs = q.ARRAY_EMPTY,
        t.name = "",
        t.timer = x.timer,
        t._displayedInStage = !1,
        t._parent = null,
        t._$P = q.PROP_EMPTY,
        t.conchModel = r.isConchNode ? t.createConchModel() : null,
        t.mouseThrough = !1,
        t._transform = null,
        t._tfChanged = !1,
        t._x = 0,
        t._y = 0,
        t._width = 0,
        t._height = 0,
        t._repaint = 1,
        t._changeType = 0,
        t._mouseEnableState = 0,
        t._zOrder = 0,
        t._style = lt.EMPTY,
        t._graphics = null,
        t._renderType = 0,
        t.autoSize = !1,
        t.hitTestPrior = !1,
        t.viewport = null,
        t._optimizeScrollRect = !1,
        t._texture = null
    }
    ,
    yi.getTargetAnglt = function(t) {
        return isNaN(t) || 180 <= (t = ((t = t % 360) + 360) % 360) && (t -= 360),
        t
    }
    ,
    yi.getAngle = function(t, e, i, s) {
        i -= t,
        t = s - e,
        s = Math.sqrt(i * i + t * t);
        return 0 == s ? 0 : (e = Math.floor(Math.floor(180 * Math.acos(i / s) / Math.PI)),
        t < 0 ? 360 - e : e)
    }
    ,
    yi.disappear = function(t) {
        t && t.parent && t.parent.removeChild(t)
    }
    ,
    yi.getIsFivePath = function(t, e, i) {
        return !(i = void 0 !== i && i) && !(!e || !e.isPlayer() || -1 == yi.fivePath[0].indexOf(t))
    }
    ,
    yi.getAngleDir = function(t, e, i, s) {
        s = 180 * (s = Math.atan2(s - e, i - t)) / Math.PI;
        return 180 <= (s += 90) && (s -= 360),
        parseInt(s + "")
    }
    ,
    O(yi, ["FACE_FRAME_CONFIG", function() {
        return this.FACE_FRAME_CONFIG = [8, 2, 12, 2, 4, 5, 2, 2, 4, 2, 4, 2, 8, 4, 13, 3, 10, 12, 8, 6, 9, 4, 10, 4, 11, 6, 5, 8, 2, 8, 2, 12, 2, 2, 2, 4, 2, 4, 2, 3, 4]
    }
    , "fivePath", function() {
        return this.fivePath = [["act03", "act04", "act103", "act203"]]
    }
    ]);
    var fi = yi;
    function yi() {}
    t(vi, "app.fateGame.role.AppUserObj"),
    (N = vi.prototype).addTeammate = function(t) {
        var e = t.personId;
        vi.ins.playerIds.indexOf(e) < 0 && vi.ins.playerIds.push(e);
        for (var i = 0, s = this._teammate.length; i < s; i++)
            if (e && e.equal(this._teammate[i].personId))
                return;
        t = Ds.createByDetailInfo(t);
        this._teammate.push(t)
    }
    ,
    N.getTeammates = function() {
        return this._teammate
    }
    ,
    N.getTeammatesByPersonId = function(t) {
        if (null != t) {
            if (this.playerInfo && t.equal(this.playerInfo.personId))
                return this.playerInfo;
            for (var e = 0, i = this._teammate.length; e < i; e++)
                if (this._teammate[e] && t.equal(this._teammate[e].personId))
                    return this._teammate[e]
        }
        return null
    }
    ,
    N.getAllPlayerInfo = function() {
        var t = [];
        return t.push(vi.ins.playerInfo),
        t = t.concat(this.getTeammates())
    }
    ,
    N.getIndexById = function(t) {
        var e, i = vi.ins.getAllPlayerInfo(), s = 0;
        for (e in i) {
            if (i[e].personId.equal(t))
                return s;
            s++
        }
        return s
    }
    ,
    N.resetTeammate = function() {
        this._teammate.length = 0
    }
    ,
    N.getPlayerList = function() {
        var t = this.getTeammates();
        return t ? (t = t.concat()).splice(0, 0, this.playerInfo) : t = [this.playerInfo],
        t
    }
    ,
    N.getAllPlayerNum = function() {
        var t = this._teammate ? this._teammate.length : 0;
        return t += 1
    }
    ,
    N.checkIsMyPlayer = function(t) {
        if (t)
            for (var e = this.getPlayerList(), i = 0; i < e.length; i++) {
                var s = e[i];
                if (t.equal(s.personId))
                    return !0
            }
        return !1
    }
    ,
    N.getPlayerIndex = function(t) {
        for (var e = this.getPlayerList(), i = 0; i < e.length; i++)
            if (e[i].personId.equal(t))
                return i;
        return -1
    }
    ,
    N.getPlayerByRoleId = function(t) {
        for (var e = this.getPlayerList(), i = 0; i < e.length; i++) {
            var s = e[i];
            if (s.personId.equal(t))
                return s
        }
        return vi.ins.playerInfo
    }
    ,
    N.getLastPlayer = function() {
        for (var t = this.getPlayerList(), e = 0; e < t.length; e++)
            t[e];
        return null
    }
    ,
    N.getFirstCreateRole = function() {
        for (var t, e, i = vi.ins.getAllPlayerInfo(), s = 0, s = 0; s < i.length; s++)
            (t = i[s]).createTime && (null == e || e && e.createTime > t.createTime) && (e = t);
        return e
    }
    ,
    N.getShowNameById = function(t) {
        var e = this.getPlayerByRoleId(t);
        return 0 == this.getIndexById(t) && (e.nickName,
        _n.DefaultPlayerName),
        e.nickName
    }
    ,
    N.getShowPersonInfo = function() {
        for (var t = this.getTeammates(), e = 0; e < t.length; e++)
            if (t[e].personId.equal(this.playerInfo.showPlayerId))
                return t[e];
        return this._playerInfo
    }
    ,
    N.getRoleByIndex = function(t) {
        var e = vi.ins.getAllPlayerInfo();
        return t <= 0 && t > e.length ? null : e[t - 1]
    }
    ,
    e(0, N, "topPlayerInfo", function() {
        return this._topRoleInfo
    }, function(t) {
        this._topRoleInfo = t
    }),
    e(0, N, "createAccountTime", null, function(t) {
        this._createAccountTime = t
    }),
    e(0, N, "playerInfo", function() {
        return this._playerInfo
    }),
    e(0, N, "isAllRoleMaxLevel", function() {
        return !1
    }),
    e(0, N, "createAccountTimeNum", function() {
        return this._createAccountTime ? this._createAccountTime.toNumber() : 0
    }),
    e(0, N, "createAccountTimeStr", function() {
        return this._createAccountTime + ""
    }),
    e(0, N, "createAccountSecondStr", function() {
        return this._createAccountTime ? Math.floor(this._createAccountTime.toNumber() / 1e3) + "" : "0"
    }),
    e(1, vi, "ins", function() {
        return vi._ins = vi._ins || new vi
    }),
    vi.clear = function() {
        vi._ins = null
    }
    ,
    vi._ins = null;
    var A = vi;
    function vi() {
        this._playerInfo = null,
        this._teammate = null,
        this.playerIds = null,
        this._countId = null,
        this._topRoleInfo = null,
        this._createAccountTime = null,
        this._playerInfo = new Ds,
        this._playerInfo.sex = c.sex,
        this._playerInfo.type = 1,
        this._playerInfo.personId = new Gi(10086),
        this._playerInfo.nickName = c.roleName,
        this._teammate = [],
        this._teammate.push(this._playerInfo),
        this.playerIds = [],
        this.playerIds.indexOf(this._playerInfo.personId) < 0 && this.playerIds.push(this._playerInfo.personId)
    }
    t(wi, "app.multiZone.BackPressedController"),
    (N = wi.prototype).registerKeyBoard = function() {
        w.window.iswxLoginMark || com.game.controller.gm.DebugKeyDownManager.ins.registerKeyDown(this, [laya.events.Keyboard.B], b.create(this, this.onBackPressed, null, !1), !0)
    }
    ,
    N.registerCloseFunction = function(t, e, i) {
        var s, n;
        this.BackPressedSwitch && (s = this.getCloseKey(t, i),
        null == (n = this._closeUnitMap[s]) ? n = this.getCloseUnit(t, e, s, i) : (n.caller = t,
        n.callerKey = i,
        n.closeFun = e,
        n.closeKey = s),
        this.addToCloseFunStack(n))
    }
    ,
    N.removeCloseFunction = function(t, e) {
        this.BackPressedSwitch && (t = this.getCloseKey(t, e),
        this.doRemoveCloseFunction(t))
    }
    ,
    N.doRemoveCloseFunction = function(t) {
        var e = this._closeUnitMap[t];
        delete this._closeUnitMap[t],
        null != e && (this.removeFromCloseFunStack(e),
        e.recover(),
        this._closePool.push(e))
    }
    ,
    N.onBackPressed = function() {
        var t;
        console.group("onBackPressed"),
        this.BackPressedSwitch && (0 == this._closeFunStack.length ? (console.warn("准备触发退出游戏事件"),
        this.exitGame()) : (t = this._closeFunStack.pop()).isCleared() || t.closeFun.apply(t.caller))
    }
    ,
    N.addToCloseFunStack = function(t) {
        for (var e = 0; e < this._closeFunStack.length; e++)
            if (this._closeFunStack[e].caller == t.caller) {
                this._closeFunStack.splice(e, 1);
                break
            }
        this._closeFunStack.push(t)
    }
    ,
    N.removeFromCloseFunStack = function(t) {
        for (var e = 0; e < this._closeFunStack.length; e++)
            if (this._closeFunStack[e].caller == t.caller) {
                this._closeFunStack.splice(e, 1);
                break
            }
    }
    ,
    N.getCloseUnit = function(t, e, i, s) {
        var n = 0 < this._closePool.length ? this._closePool.pop() : new Ii;
        return n.caller = t,
        n.callerKey = s,
        n.closeFun = e,
        n.closeKey = i,
        this._closeUnitMap[i] = n
    }
    ,
    N.getCloseKey = function(t, e) {
        var i = e;
        return i = null == e ? t.__className : i
    }
    ,
    N.exitGame = function() {
        this._isExiting ? (g.isCfgInited && com.game.f1.FrameworkGlobal.popmanager || p.ins.forceCloseMessageBox(),
        this.resetIsExiting()) : (this._isExiting = !0,
        g.isCfgInited && com.game.f1.FrameworkGlobal.popmanager ? (titlestr = com.game.notice.control.NoticeControl.ins.getNoticeConfig(5016001),
        msgstr = com.game.notice.control.NoticeControl.ins.getNoticeConfig(5016002),
        com.utils.X5Util.showMsgBox(msgstr, b.create(this, this.doExitGame), b.create(this, this.resetIsExiting), null, -1, titlestr)) : p.ins.showMessageBox("魂師大人確定要離開斗羅大陸嗎？", "登出提示", b.create(this, this.doExitGame), null, b.create(this, this.resetIsExiting)))
    }
    ,
    N.doExitGame = function() {
        w.window && w.window.conch && w.window.conch.exit()
    }
    ,
    N.resetIsExiting = function() {
        this._isExiting = !1
    }
    ,
    e(1, wi, "instance", function() {
        return wi._instance = null == wi._instance ? new wi : wi._instance
    }),
    wi._instance = null;
    var xi = wi;
    function wi() {
        this.BackPressedSwitch = !1,
        this._closeUnitMap = {},
        this._closeFunStack = [],
        this._closePool = [],
        this._isExiting = !1,
        this.BackPressedSwitch = !0,
        Mt.dispatcher.on("app_back_pressed_event", this, this.onBackPressed)
    }
    t(Si, "app.multiZone.ChinaCfg"),
    N = Si.prototype,
    x.imps(N, {
        "app.multiZone.IZoneCfg": !0
    }),
    N.onBackPressedFunction = function() {
        Dt.sdkcall("showExitDailog", {}, null)
    }
    ,
    e(0, N, "clickUrl", function() {
        return this._clickUrl
    }, function(t) {
        t && (this._clickUrl = t)
    }),
    e(0, N, "importListUrl", function() {
        return "http://app.xxh5.z7xz.com/importServer?platCode=$1&pid=$2&version=$3&token=$4&gid=$5&time=$6&sign=$7&os=$8"
    }),
    e(0, N, "noticeCheckUrl", function() {
        return "http://app.xxh5.z7xz.com/gameNotice/showtimes?platCode=$1&pid=$2&gid=$3"
    }),
    e(0, N, "loginUrl", function() {
        return "http://app.xxh5.z7xz.com/serverselect/loginserverdata/?pid=$1&account=$2&version=$3&IMEI=$4&platCode=$5&gid=$6"
    }),
    e(0, N, "noticeUrl", function() {
        return "http://app.xxh5.z7xz.com/gameNotice?platCode=$1&pid=$2&gid=$3"
    }),
    e(0, N, "conchLoginCheckUrl", function() {
        return "http://app.xxh5.z7xz.com/serverMobile?token=$1&os=$2&pid=$3&gid=$4&version=$5&platCode=$6&IMEI=$7&time=$8&sign=$9&sid=$10"
    }),
    e(0, N, "roleRepeatUrl", function() {
        return "http://app.xxh5.z7xz.com/rolerepeat/check?rolename=$1&sid=$2"
    }),
    e(0, N, "errorUrl", function() {
        return "http://error.xxh5.z7xz.com/error"
    }),
    e(0, N, "faceBookUrl", function() {
        return ""
    }),
    e(0, N, "language", function() {
        return "zh"
    }),
    e(0, N, "curLanguage", function() {
        var t = a.getItem(this.language + "_curLanguage");
        return t = null != t && "" != t ? t : "zh"
    }),
    e(0, N, "postInfoUrl", function() {
        return "http://app.xxh5.z7xz.com/pc/postCodeInfo"
    }),
    e(0, N, "roleInfoUrl", function() {
        return "https://app.xxh5.z7xz.com/query/serverByUid?gid=$1&pid=$2&sign=$3&time=$4&uid=$5"
    });
    var bi = Si;
    function Si() {
        this._clickUrl = "http://xxh5click.996a.com/outer/dataStat/click"
    }
    t(Ci, "app.multiZone.CloseUnit"),
    (N = Ci.prototype).recover = function() {
        this.caller = null,
        this.callerKey = null,
        this.closeKey = null,
        this.closeFun = null
    }
    ,
    N.isCleared = function() {
        return null == this.caller && null == this.callerKey && null == this.closeKey && null == this.closeFun
    }
    ;
    var Ii = Ci;
    function Ci() {
        this.caller = null,
        this.callerKey = null,
        this.closeKey = null,
        this.closeFun = null
    }
    t(Pi, "app.multiZone.ZoneMgr"),
    (N = Pi.prototype).init = function(t) {
        "37wan" == t && (this.zone = new bi)
    }
    ,
    e(0, N, "Zone", function() {
        return null == this.zone && (console.log("=== 没有获取到地区配置 默认国服配置 ==="),
        this.zone = new bi),
        this.zone
    }),
    e(1, Pi, "ins", function() {
        return Pi.zoneFacade = Pi.zoneFacade ? Pi.zoneFacade : new Pi
    }),
    Pi.zoneFacade = null;
    var ki = Pi;
    function Pi() {
        this.zone = null
    }
    t(Ai, "app.PlatformConch", Ti = V),
    (N = Ai.prototype).init = function() {
        var t, e;
        Ot.published && ((t = w.window.appcache) && t.transUrlToCachedUrl && t.transUrlToCachedUrl(Ai.transUrl),
        t = w.window.conch) && t.config && (e = t.config.glCaps,
        Ot.isSupportPvr = 2 & e,
        Ot.isSupportPvr = !1,
        Ot.isSupportPvr || (Ot.isSupportEtc = 8 & e),
        t.config.supportTextureCustomData && (Ot.isSupportPvr || Ot.isSupportEtc) ? Ot.isSupportAtlasMix = !0 : Ot.isSupportAtlasMix = !1)
    }
    ,
    N.queueSdkInit = function(i) {
        a.setItem("layaInitErrorCounter", "0"),
        c.s_printNetMsg = !!w.window.printNetMsg;
        var s = w.window.conch;
        Ht.lastError += "|queueSdkInit",
        c.send("3710002"),
        Dt.captureScreenListen(function() {
            w.window.conch && w.window.conch.captureScreen(function(t, e, i) {
                var s = w.window.conch.getCachePath() + "/jiguangTemp.jpg";
                w.window.conch.saveAsJpeg(t, e, i, s),
                Dt.captureScreenFinish(s)
            })
        }),
        Dt.pushSwitchAccount(function(t, e) {
            c.refresh()
        }),
        Dt.rightAgeImgUrl(function(t, e) {
            e && e.url && (c.rightAgeUrl = e.url,
            p.ins.m_loginPanel) && p.ins.m_loginPanel.isLoadAltas && p.ins.m_loginPanel.updateRightAge()
        }),
        Dt.androidRealHeight(function(t, e) {
            e && e.realHeightSize && (c.androidNotchStatus = e.notchStatus,
            c.androidRealHeight = e.realHeightSize,
            console.log("sdk androidRealHeight*******" + e.realHeightSize))
        }),
        Dt.sdkLoginClose(function(t, e) {
            e && (c.isSdkClosed = !!e.isClose,
            console.log("sdk sdkLoginClose*******" + e.isClose + "," + c.isSdkClosed))
        }),
        Dt.pushBackToGameLogin(function(t, e) {
            c.refresh(),
            console.log("sdk pushBackToGameLogin*******")
        }),
        Dt.pushShowExitDailog(function(t, e) {
            Dt.sdkcall("showExitDailog", {}, null)
        }),
        Dt.pushPause(function(t, e) {
            x.stage.isVisibility = !1,
            w.onMobile && gt.isInputting && (gt.inputElement.target.focus = !1),
            console.log("sdk pushPause*******" + x.stage.isVisibility),
            x.stage.event("visibilitychange")
        }),
        Dt.pushResume(function(t, e) {
            x.stage.isVisibility = !0,
            console.log("sdk pushResume*******" + x.stage.isVisibility),
            x.stage.event("visibilitychange")
        }),
        Dt.getAppConfig(function(t, e) {
            e ? (g.REFERER = c.refer = e.refer,
            g.gid = e.gid,
            g.PID = e.pid,
            g.appPackageName = e.packageName,
            g.isCanScanCode = !!e.canScanCode,
            e.platCode && (c.platCode = e.platCode),
            ki.ins.init(c.platCode),
            s && s.setOnBackPressedFunction && s.setOnBackPressedFunction(function() {
                ki.ins.Zone.onBackPressedFunction()
            }),
            Dt.pushGetuiClientId(function(t, e) {
                e ? (g.clientid = e.clientid,
                g.canSendClientid && (new com.game.login.protocol.LoginProtocol).sendClientIdToServer(g.clientid, g.appPackageName)) : alert("ConchSDK.pushGetuiClientId 通讯错误")
            }),
            Dt.sendAppOreo(function(t, e) {
                e && (c.appOreoMyImei = e.myImei)
            }),
            w.onIOS && r.isConchApp && !e.iosInitReplace || (!!e.isReplace || !w.onIOS ? g.initReplace("" + g.gid) : w.window.skins && (w.window.skins = null),
            p.ins.openLoginPanel()),
            Dt.gameOffline(function(t, e) {
                c.refresh(),
                console.log("sdk gameOffline*******")
            }),
            c.USE_LOGIN = w.now() - c.USE_LOGIN,
            i.run()) : alert("ConchSDK.getAppConfig 通讯错误")
        })
    }
    ,
    N.queueSdkLogin = function(t) {
        var i = this;
        this.sdkLoginHandler = t,
        c.USE_SDK_LOGIN = w.now(),
        Ht.lastError += "|sdkLogin2",
        c.send("3710003"),
        (c.getParam("relogin") ? Dt.changeAccount : Dt.login)(function(t, e) {
            e ? e.ret ? (c.USE_SDK_LOGIN = w.now() - c.USE_SDK_LOGIN,
            c.sdkLogined = !0,
            g.PID = e.pid,
            "zh" == g.Language ? c.token = encodeURI(e.token) : c.token = w.onIOS ? e.token : decodeURIComponent(e.token),
            g.gid = e.gid,
            c.appVer = e.appVer || "0",
            "zh" != g.Language && (c.hw_time = e.timestamp),
            e.uid && (c.uid = e.uid),
            p.ins.m_loginPanel || (!!e.isReplace || !w.onIOS ? g.initReplace("" + g.gid) : w.window.skins && (w.window.skins = null),
            p.ins.openLoginPanel()),
            Dt.getIMEI(function(t, e) {
                e ? (c.IMEI = e.IMEI,
                w.onIOS && (c.IDFV = e.IDFV),
                c.time = Dt.getSign(function(t, e) {
                    e && e.ret ? (c.sign = e.sign,
                    i.sdkLoginHandler.run()) : alert("ConchSDK.getSign 通讯错误")
                })) : alert("ConchSDK.getIMEI 通讯错误")
            }),
            Ai.sendAppOreo()) : (console.error("登录失败"),
            g.isHuaWei() || g.isYingYongBao() ? console.log("华为渠道包，取消SDK弹登录框") : r.isConchApp && w.onAndroid ? console.log("安卓，取消SDK弹登录框") : i.queueSdkLogin(i.sdkLoginHandler)) : alert("ConchSDK.login 通讯错误")
        })
    }
    ,
    N.downDccFile = function(e) {
        if (Ot.published) {
            var i = w.window.appcache;
            if (i) {
                var s = filetable;
                if (Ot.isSupportAtlasMix)
                    if (Ot.isSupportPvr)
                        s = s.replace(/^(.*)\.(.*)$/, "$1_mix_pvr.$2");
                    else {
                        if (!Ot.isSupportEtc)
                            throw new Error("initVer filetableUrl 严重逻辑错误.图集mix功能的使用必须依赖etc/pvr");
                        s = s.replace(/^(.*)\.(.*)$/, "$1_mix_etc.$2")
                    }
                else
                    Ot.isSupportPvr ? s = s.replace(/^(.*)\.(.*)$/, "$1_pvr.$2") : Ot.isSupportEtc && (s = s.replace(/^(.*)\.(.*)$/, "$1_etc.$2"));
                if (i.getResourceID("gamedccver") === s) {
                    var t = readFileSync(i.getCachePath() + "/filetable_game", "utf8");
                    if (t)
                        return console.log("use cache dcc：" + s),
                        i.setFileTable(t),
                        void e.run()
                }
                Ai.loadFileTable(s, function(t) {
                    t ? (console.log("load dcc：" + s),
                    t = Ai.bindcc2string(t),
                    i.setFileTable(t),
                    writeStrFileSync(i.getCachePath() + "/filetable_game", t),
                    i.setResourceID("gamedccver", s),
                    e.run()) : (c.sendError("下载dcc文件失败"),
                    c.alert2("加载文件失败,尝试刷新游戏2", c.refresh))
                })
            } else
                e.run()
        } else
            e.run()
    }
    ,
    N.queueGetTimeAndSign = function(i) {
        c.time = Dt.getSign(function(t, e) {
            e && e.ret ? (c.sign = e.sign,
            i.run()) : alert("ConchSDK.getSign 通讯错误")
        })
    }
    ,
    e(1, Ai, "ins", function() {
        return Ai._ins = Ai._ins || new Ai
    }, Ti.prototype._$set_ins),
    Ai.transUrl = function(t) {
        if (t && (t = (t = t.replace(/^(.*[\\\/]files)_(.*?)(_mix_pvr\.bin|_mix_etc\.bin|_etc\.bin|_pvr\.bin|\.bin)$/i, "$1$3")).replace(/^(.*)\_\d{6}\.([^\.]*)$/, "$1.$2")).substr(0, c.mainCdn.length) != c.mainCdn && c.cdnList)
            for (var e = 0, i = c.cdnList.length; e < i; e++) {
                var s = c.cdnList[e]
                  , n = s.length;
                if (0 != n && t.substr(0, n) == s)
                    return c.mainCdn + t.substr(n)
            }
        return t
    }
    ,
    Ai.loadFileTable = function(t, e, i) {
        void 0 === i && (i = 0),
        (Ai.xhr = new XMLHttpRequest).open("GET", c.getUrl(t, 0), !0),
        Ai.xhr.responseType = "arraybuffer",
        Ai.xhr.onload = function() {
            e(Ai.xhr.response),
            Ai.xhr = null
        }
        ,
        Ai.xhr.onerror = function() {
            i < 3 ? Ai.loadFileTable(t, e, i + 1) : e(Ai.xhr = null)
        }
        ,
        Ai.xhr.send()
    }
    ,
    Ai.bindcc2string = function(t, e, i) {
        var s = "";
        if (e = e || 1,
        !(t && t instanceof ArrayBuffer))
            return null;
        if (t.byteLength % 8 != 0)
            console.log("下载的的filetable.bin的长度不对。是不是错了。");
        else {
            var n = new Uint32Array(t);
            if (4293844428 != n[0] || n[1] != e)
                console.log("dcc.bin file err!");
            else if (16777215 == n[2]) {
                t = n.slice(4, 12),
                e = new Uint8Array(t.buffer),
                t = String.fromCharCode.apply(null, e);
                if (console.log("so=" + t),
                i && t != i)
                    console.log("dcc chk error");
                else
                    for (var o = 6, a = n.length / 2; o < a; o++)
                        s += n[2 * o].toString(16) + " " + n[2 * o + 1].toString(16) + "\n"
            } else
                for (o = 1,
                a = n.length / 2; o < a; o++)
                    s += n[2 * o].toString(16) + " " + n[2 * o + 1].toString(16) + "\n"
        }
        return s
    }
    ,
    Ai.sendAppOreo = function() {
        var t, e;
        c.appOreoMyImei && 0 != c.appOreoMyImei.length && (t = (t = (t = (t = (t = "https://imei.996a.com?game=xxh5&plat=37wan&gid=$1&pid=$2&imei=$3&time=$4").replace(/\$1/g, g.gid)).replace(/\$2/g, g.PID)).replace(/\$3/g, c.appOreoMyImei)).replace(/\$4/g, w.now()),
        e = new G,
        c.useHttps && (t = t.replace(/^http\:\/\//i, "https://")),
        e.send(t),
        e.on("complete", {}, function() {
            console.log("============ljq===发送成功了!"),
            Dt.sendedAppOreo()
        }),
        e.on("error", {}, function() {
            console.log("============ljq===发送失败了!" + Ai.sendAppOreoCount),
            3 <= Ai.sendAppOreoCount || (Ai.sendAppOreoCount++,
            e.send(t))
        }))
    }
    ,
    Ai._ins = null,
    Ai.xhr = null,
    Ai.sendAppOreoCount = 0;
    var Ti, Li = Ai;
    function Ai() {
        this.sdkLoginHandler = null,
        Ti.call(this)
    }
    t(Mi, "app.PlatformDebug", Ri = V),
    (N = Mi.prototype).queueSdkInit = function(t) {
        p.ins.openLoginPanel(),
        t.run()
    }
    ,
    N.queueSdkLogin = function(i) {
        if (!(e = a.getItem("X5LoginInputName_username")))
            for (var t = "abcdefghijklmnopqrstuvwxyz1234567890", e = "", s = 0; s < 4; ++s)
                e += t.charAt(Math.floor(Math.random() * t.length));
        var n = a.getItem("X5LoginInputName_password");
        p.ins.showInput(e, n, b.create(null, function(t, e) {
            a.setItem("X5LoginInputName_username", t),
            a.setItem("X5LoginInputName_password", e),
            c.token = "",
            c.sign = "",
            g.gid = "",
            g.PID = "",
            i.run()
        }))
    }
    ,
    N.queueImportServer = function(t) {
        c.setSelectServerAndShowEnter(tempServer.servers[0]),
        t.run()
    }
    ,
    N.queueServerData = function(i) {
        var t = a.getItem("X5LoginInputName_username") || ""
          , e = a.getItem("X5LoginInputName_password") || ""
          , s = c.loginDetailData = {
            cdn: "",
            verjs: "ver.js"
        };
        s.username = t,
        s.ip = c.selectedServer.domain,
        s.port = c.selectedServer.port,
        s.op = "37wan",
        s.server = c.selectedServer.serverId,
        s.referer = "37wan";
        HtmlGameLoader.getSign(s.username, s.op, s.server, e, function(t, e) {
            s.time = t,
            s.sign = e,
            r.isConchApp || (c.loadList[0].useRandom = !0),
            p.ins.m_loginPanel.setState("State_loading"),
            i.run()
        })
    }
    ,
    e(1, Mi, "ins", function() {
        return Mi._ins = Mi._ins || new Mi
    }, Ri.prototype._$set_ins),
    Mi._ins = null;
    var Ri, Bi = Mi;
    function Mi() {
        Ri.call(this)
    }
    t(R, "app.PlatformMiniBase", Ni = V),
    (N = R.prototype).baseInit = function() {
        var e = this
          , t = (c.useHttps = !0,
        mt.cacheFileList = R.cacheFileList,
        mt.getVersion = Ot.getVersion,
        mt.setLogFun(Ht.sendError),
        _t.preserveDrawingBuffer = !0,
        w.window.alert = function(t) {
            e.showModal(t)
        }
        ,
        this.setKeepScreenOn(),
        20)
          , t = (24 < (R.deviceInfo = this.mini.getSystemInfoSync()).statusBarHeight && (t = 70),
        "LIO-AL00" != R.deviceInfo.model && "LIO-AN00" != R.deviceInfo.model || (t = 100),
        g.LiuHai_ADD_HEIGHT = t,
        this.mini && this.mini.onMemoryWarning && this.mini.onMemoryWarning(function() {
            c.WarningTime++
        }),
        this.mini.getNetworkType({
            success: function(t) {
                switch (t.networkType) {
                case "none":
                    R.networkType = 0;
                    break;
                case "wifi":
                    R.networkType = 1;
                    break;
                case "2g":
                    R.networkType = 2;
                    break;
                case "3g":
                    R.networkType = 3;
                    break;
                case "4g":
                    R.networkType = 4;
                    break;
                case "unknown":
                    R.networkType = 5
                }
            }
        }),
        this.mini.onNetworkStatusChange(function(t) {
            if (t.isConnected)
                R.networkType = 0;
            else
                switch (t.networkType) {
                case "none":
                    R.networkType = 0;
                    break;
                case "wifi":
                    R.networkType = 1;
                    break;
                case "2g":
                    R.networkType = 2;
                    break;
                case "3g":
                    R.networkType = 3;
                    break;
                case "4g":
                    R.networkType = 4;
                    break;
                case "unknown":
                    R.networkType = 5
                }
        }),
        w.window.SQSDK)
          , n = (t && t.setShare && t.setShare({
            title: R.getShareTitle(),
            imageUrl: R.getShareImgs()
        }, function() {}),
        []);
        this.mini && this.mini.onError && this.mini.onError(function(t) {
            var e = 0
              , i = t.message;
            if (i)
                if (e = n[i]) {
                    if ((n[i] = ++e) % 200 != 0)
                        return
                } else
                    e = n[i] = 1;
            var s = ""
              , s = t.stack ? "error=" + i + "\n" + t.stack : "error=" + i;
            console.info(s + "&aerr=" + e),
            Ht.sendError(s + "&aerr=" + e)
        })
    }
    ,
    N.setKeepScreenOn = function() {
        this.mini && this.mini.setKeepScreenOn && this.mini.setKeepScreenOn({
            keepScreenOn: !0
        })
    }
    ,
    N.checkFileMorethan = function(t, e) {
        0 == c.isNewRole && ft.readDir(b.create(this, this.readComplete, [t, e]))
    }
    ,
    N.readComplete = function(t, e, i, s) {
        if (i)
            e && e.runWith(0);
        else {
            for (var n = ft.getFileList(), o = s.files, a = [], r = 0; r < o.length; r++) {
                var l = o[r];
                if (l != yt.fileListName) {
                    var h, c = !1;
                    for (h in n)
                        if ("fileUsedSize" != h)
                            if (n[h].md5 == l) {
                                c = !0;
                                break
                            }
                    c || a.push(l)
                }
            }
            if (0 < a.length) {
                for (var p = "error=  moreListname =", u = 0; u < a.length; u++)
                    p += a[u] + "  _   ";
                console.info(p),
                this.deleteCount = 0;
                var d = t ? a.length : Math.ceil(a.length / 2);
                this.totalDelCount = d;
                for (var g = 0; g < d; g++)
                    yt.deleteMd5File(yt.fileNativeDir + "/" + a[g], new b(this,this.deleteComplete,[d, e],!0))
            } else
                e && e.runWith(0)
        }
    }
    ,
    N.deleteComplete = function(t, e, i) {
        this.deleteCount++,
        this.totalDelCount == this.deleteCount && e && e.runWith(this.deleteCount)
    }
    ,
    N.queueLoadScript = function(n) {
        console.info("未提前加表"),
        this.loadWxScriptTime = (new Date).getTime();
        var t = c.loadList[0]
          , o = t.src;
        t.useRandom && (o += "?v=" + Math.random()),
        w.onMiniGame && c.isNewRole && ("484" == g.PID ? c.send("40071") : "442" == g.PID ? c.send("40072") : c.send("4007")),
        x.loader.load(o, b.create(this, function(t) {
            if (t) {
                x.loader.clearRes(o, !0),
                w.onMiniGame && c.isNewRole && ("484" == g.PID ? c.send("40081") : "442" == g.PID ? c.send("40082") : c.send("4008")),
                console.info("成功加载ver.js：");
                for (var e = t.split("\n"), i = 0; i < e.length; ++i) {
                    var s = e[i].match(/var\s(.+)\s=\s"(.+)"/);
                    s && 3 == s.length && (w.window[s[1]] = s[2])
                }
                n.run()
            } else
                console.info("失败加载ver.js："),
                c.alert2("加载版本文件失败2", c.refresh)
        }), null, "text")
    }
    ,
    N.loadSubModule = function(t) {
        var e = this.mini;
        g.isWXNew ? (c.isloadSub = !0,
        t && t.run()) : w.window.wxzip && e.loadSubpackage({
            name: "submodule",
            success: function() {
                console.info("加载分包4成功"),
                e.loadSubpackage({
                    name: "module1",
                    success: function() {
                        console.info("加载分包5成功"),
                        e.loadSubpackage({
                            name: "module2",
                            success: function() {
                                console.info("加载分包6成功"),
                                c.isloadSub = !0,
                                t && t.run()
                            },
                            fail: function() {
                                console.info("加载分包6失败"),
                                c.alert2("加载分包6失败", c.refresh)
                            }
                        })
                    },
                    fail: function() {
                        console.info("加载分包5失败"),
                        c.alert2("加载分包5失败", c.refresh)
                    }
                })
            },
            fail: function() {
                console.info("加载分包4失败"),
                c.alert2("加载分包4失败", c.refresh)
            }
        })
    }
    ,
    N.loadSubpack2 = function(t, e) {
        var i;
        c.allMainJsSucc ? e && e.run() : (i = this.mini).loadSubpackage({
            name: "subpack",
            success: function() {
                console.info("加载分包1成功"),
                i.loadSubpackage({
                    name: "main0",
                    success: function() {
                        console.info("加载分包2成功"),
                        i.loadSubpackage({
                            name: "main1",
                            success: function() {
                                console.info("加载分包3成功"),
                                c.allMainJsSucc = !0,
                                w.window.wxzip && i.loadSubpackage({
                                    name: "submodule",
                                    success: function() {
                                        console.info("加载分包4成功"),
                                        i.loadSubpackage({
                                            name: "module1",
                                            success: function() {
                                                console.info("加载分包5成功"),
                                                i.loadSubpackage({
                                                    name: "module2",
                                                    success: function() {
                                                        console.info("加载分包6成功"),
                                                        c.allMainJsSucc = !0,
                                                        e && e.run()
                                                    },
                                                    fail: function() {
                                                        console.info("加载分包6失败"),
                                                        c.alert2("加载分包6失败", c.refresh)
                                                    }
                                                })
                                            },
                                            fail: function() {
                                                console.info("加载分包5失败"),
                                                c.alert2("加载分包5失败", c.refresh)
                                            }
                                        })
                                    },
                                    fail: function() {
                                        console.info("加载分包4失败"),
                                        c.alert2("加载分包4失败", c.refresh)
                                    }
                                })
                            },
                            fail: function() {
                                console.info("加载分包3失败"),
                                c.alert2("加载分包3失败", c.refresh)
                            }
                        })
                    },
                    fail: function() {
                        console.info("加载分包2失败"),
                        c.alert2("加载分包2失败", c.refresh)
                    }
                })
            },
            fail: function() {
                console.info("加载分包1失败"),
                c.alert2("加载分包1失败", c.refresh)
            }
        })
    }
    ,
    N.preLoadMiniVer = function(r) {
        var t = c.conchLoginCheckUrl.replace(/\$10/, c.selectedServer.serverId)
          , t = (t = (t = (t = (t = (t = (t = (t = (t = c.uid ? t.replace(/\$11/, c.uid) : t).replace(/\$1/, c.token)).replace(/\$2/, w.onIOS ? "IOS" : "ANDROID")).replace(/\$3/, g.PID)).replace(/\$4/, g.gid)).replace(/\$5/, c.appVer)).replace(/\$6/, c.platCode)).replace(/\$7/, c.IMEI)).replace(/\$8/, c.time);
        w.onKSMiniGame && !c.sign && (c.sign = "1"),
        t = t.replace(/\$9/, c.sign),
        c.load(t, b.create(c, function(t) {
            if (t)
                if (1 != (e = JSON.parse(t)).state)
                    c.alert2(d.getI18(20013), c.refresh),
                    console.info("err  " + a + ":" + t);
                else {
                    for (var e, i = (e = e.msg).cdn.split(";"), s = 0, n = i.length; s < n; s++) {
                        var o = i[s];
                        "/" != o.substr(o.length - 1, 1) && (i[s] = o + "/"),
                        c.useHttps && (i[s] = i[s].replace(/^http\:\/\//i, "https://"))
                    }
                    e.cdn = i.join(";"),
                    w.antiMiniGame && i && 0 < i.length && (H.miniLoginPath = H.basePath,
                    H.basePath = i[0]);
                    var a = e.verjs || "ver.js";
                    x.loader.load(a, b.create(this, function(t) {
                        if (t) {
                            console.info("成功加载ver.js：");
                            for (var e = t.split("\n"), i = 0; i < e.length; ++i) {
                                var s = e[i].match(/var\s(.+)\s=\s"(.+)"/);
                                s && 3 == s.length && (w.window[s[1]] = s[2])
                            }
                            r.run()
                        } else
                            console.info("loadAgainVerJs失败加载ver.js："),
                            c.alert2("加载版本文件失败3", c.refresh)
                    }), null, "text")
                }
            else
                console.info("err  " + a + ":" + t),
                c.alert2(d.getI18(20013), c.refresh)
        }))
    }
    ,
    N.queueSdkLogin = function(e) {
        var i = this;
        w.window.g_skinUrl ? x.loader.load(w.window.g_skinUrl, b.create(this, function(t) {
            if (t) {
                x.loader.clearRes(w.window.g_skinUrl, !0),
                console.info("成功加载skin：");
                t = t.match(/\bskins\b\s*\=\s*(.*)$/);
                try {
                    w.window.skins = JSON.parse(t[1])
                } catch (t) {
                    console.info("解析skin失败" + t)
                }
                i.sdkLogin(e)
            } else
                console.info("失败加载skin："),
                c.alert2("load skin err", c.refresh)
        }), null, "text") : this.sdkLogin(e)
    }
    ,
    N.queueSdkInit = function(t) {}
    ,
    N.sdkLogin = function(e) {
        var i = this;
        Ht.lastError += "|sdkLogin",
        p.ins.m_loginPanel || (g.initReplace("" + g.gid),
        p.ins.openLoginPanel()),
        Ht.lastError += "|sdkLogin2",
        c.send("3710003"),
        w.window.SQSDK.login({
            pid: g.PID,
            gid: g.gid
        }, function(t) {
            i.wxToken = t.token,
            c.token = encodeURI(t.token),
            c.time = t.time,
            c.sign = t.sign,
            Ht.lastError += "|sdkLogin2Back",
            console.info("小游戏暂时不支持版本更新"),
            e.run()
        })
    }
    ,
    N.getIsTishenSer = function() {
        return -1 != [99995, 99993, 99994, 99907, 99909].indexOf(g.SERVER)
    }
    ,
    N.initPayType = function(t, e, i) {}
    ,
    N.updatePayType = function(t, e, i) {}
    ,
    N.pay = function(t) {}
    ,
    N.refresh = function(t, e) {
        e && Ht.sendError("error= refresh    " + e),
        this.mini.restartMiniProgram ? this.mini.restartMiniProgram() : this.mini.exitMiniProgram()
    }
    ,
    N.getSignalInfo = function(e) {
        var t = this;
        x.timer.once(100, this, function() {
            t.mini.getBatteryInfo && t.mini.getBatteryInfo({
                success: function(t) {
                    t = {
                        battery: t.level,
                        signal: 4,
                        network: R.networkType
                    };
                    e("getSignalInfo", t)
                }
            })
        })
    }
    ,
    N.share = function(t, e) {
        var i = w.window.SQSDK;
        i && i.share && (t.title = R.getShareTitle(),
        t.imageUrl = R.getShareImgs(),
        t.pid = t.pid || g.PID,
        t.gid = t.gid || g.gid,
        i.share(t, function() {}),
        x.timer.once(1e3, this, function() {
            e.run()
        }))
    }
    ,
    N.loadTxts = function(n) {
        var o = this
          , a = (console.info("开始加载txts"),
        "true" == w.window.iswxpack ? "pack_" : "");
        x.loader.load(w.window[a + "charTableVer3"], b.create(null, function(s) {
            x.loader.load(w.window[a + "charTableVer4"], b.create(null, function(i) {
                x.loader.load(w.window[a + "uiAndCfgTableVer"], b.create(null, function(t) {
                    var e;
                    s && i && t ? (console.info("txts 加载成功"),
                    w.window.$constTabel3 = s.split("\n"),
                    w.window.$constTabel4 = i.split("\n"),
                    R.initUiAndCfgTable(t),
                    x.loader.clearRes(w.window[a + "charTableVer3"]),
                    x.loader.clearRes(w.window[a + "charTableVer4"]),
                    x.loader.clearRes(w.window[a + "uiAndCfgTableVer"]),
                    t = i = s = null,
                    n && n.run()) : (e = "",
                    s || (e += "loadTxts chartable3 null"),
                    i || (e += "loadTxts chartable4 null"),
                    t || (e += "loadTxts uiAndCfgTable null"),
                    o.refresh(null, e))
                }), null, "text")
            }), null, "text")
        }), null, "text")
    }
    ,
    N.onClearCacheRes = function() {
        this.checkFileMorethan(!0),
        yt.onClearCacheRes()
    }
    ,
    N.clearAllFile = function() {
        x.timer.once(6e4, this, this.clearFileTimeout),
        this._deleteHandler = b.create(this, this.deleteAllComplete),
        w.onMiniGame && yt.deleteAll(this._deleteHandler),
        p.ins.m_loginPanel.showLoadingRound(!0, "清理缓存中")
    }
    ,
    N.clearFileTimeout = function() {
        this.clearAllFileComplete(-1, -1)
    }
    ,
    N.deleteAllComplete = function(t) {
        x.timer.clear(this, this.clearFileTimeout),
        x.timer.once(6e4, this, this.clearFileTimeout),
        this._deleteHandler.recover(),
        this._deleteHandler = null,
        this._deleteHandler = b.create(this, this.clearAllFileComplete, [t]),
        this.checkFileMorethan(!0, this._deleteHandler)
    }
    ,
    N.clearAllFileComplete = function(t, e) {
        this._deleteHandler.recover(),
        this._deleteHandler = null,
        x.timer.clear(this, this.clearFileTimeout),
        p.ins.m_loginPanel.showLoadingRound(!1, "");
        var i = "清理缓存完毕，请点击进入游戏。";
        0 == t && 0 == e ? i = "无缓存可清理！" : -1 == t && -1 == e && (i = "清理缓存完毕。"),
        this.showModal(i)
    }
    ,
    N.showModal = function(t, e, i) {}
    ,
    N.setClipboardData = function(t) {}
    ,
    e(0, N, "mini", function() {}, Ni.prototype._$set_mini),
    R.getWxStr = function(t) {
        return c.testwx && 0 <= t.indexOf(".") && console.info("getWxStr---" + t),
        R.keyMap && R.keyMap.hasOwnProperty(t) ? R.keyMap[t] : t
    }
    ,
    R.getValue = function(t) {
        return R.mapKey && R.mapKey[t] || t
    }
    ,
    R.initConstTable = function(t) {
        w.window.$constTabel1 = t.split("\n"),
        w.window.iswxLoginMark || (w.window.$constTabel1 = null)
    }
    ,
    R.initUiAndCfgTable = function(t) {
        vt.kmap = R.getWxStr;
        var e, i = {}, s = {}, n = t.split("\n");
        for (e in n) {
            var o, a, r = (a = n[e]).indexOf("=");
            -1 != r && (o = a.substring(0, r),
            a = a.substring(r + 1),
            s[i[o] = a] = o)
        }
        R.keyMap = i,
        R.mapKey = s,
        w.window.iswxLoginMark || (R.keyMap = null,
        R.mapKey = null)
    }
    ,
    R.getGid = function() {
        return "local" == g.gid ? "1005708" : g.gid
    }
    ,
    R.getShareTile = function(t) {
        return "1005708" == t || "1005793" == t ? ["上线送唐三小舞，组建你的史莱克天团称霸斗罗", "无需下载，点击即玩！能到魂王的都是人才！", "正版授权，真实还原斗罗世界，体验全新斗罗之旅", "体验主角开挂人生！《斗罗大陆》授权限时送vip", "斗罗正版授权，策略冒险巨作！无限魂环魂骨掉落", "沉浸体验才是真斗罗，立即觉醒武魂，送八蛛矛！", "不用下载的斗罗大陆手游，开局送唐三，直追封号斗罗！", "史莱克学院限时招生，马上加入！", "点击可玩！不用下载的斗罗大陆，自由选择，10分钟觉醒昊天锤！", "一晚就把唐三升到封号斗罗！", "世上魂师千千万，史莱克学院占一半！", "谁说兔子不吃窝边草，我的妹妹不是人！", "经典斗罗大陆小游戏，开局一个小时，你能获取几个魂环？", "进入斗罗大陆，觉醒输入你的武魂！"] : "1006291" == t ? ["半小时武魂融合技，一晚进阶封号斗罗", "开局选唐三，10级梨花针，30级蚁皇斩，60称霸武魂界", "史莱克学院限时招生，马上加入！", "开局选小舞送唐三，首充还送千年魂环", "谁说兔子不吃窝边草，我的妹妹不是人"] : "1006294" == t ? ["开局送千年魂环，直冲封号斗罗！", "真实还原斗罗世界，直奔超级斗罗！", "先天满魂力，3天霸服，战力爆表！", "自由捕捉千年魂兽，战力+999", "猎杀升阶觉醒，争霸斗罗世界！"] : "1009124" == t ? ["开局送千年魂环，直冲封号斗罗！", "全球魂师精英赛，热血开战！", "先天满魂力，3天霸服，战力爆表！", "自由捕捉千年魂兽，战力+999", "猎杀升阶觉醒，争霸斗罗世界！"] : []
    }
    ,
    R.getShareTitle = function() {
        var t = R.getGid()
          , t = R.getShareTile(t);
        return t[Math.floor(Math.random() * t.length)]
    }
    ,
    R.getShareImgs = function() {
        var t = R.getGid()
          , e = ""
          , i = 0;
        return "1005708" == t || "1005793" == t ? (e = "img/share_",
        i = 14) : "1006291" == t ? (e = "img/share_" + t + "_",
        i = 4) : "1006294" != t && "1009124" != t || (e = "img/share_" + t + "_",
        i = 5),
        H.basePath + e + (1 + Math.floor(Math.random() * i)) + ".jpg"
    }
    ,
    R.inst = null,
    R.deviceInfo = null,
    R.networkType = 0,
    R.keyMap = null,
    R.mapKey = null,
    R.keyMapUrl = null,
    O(R, ["cacheFileList", function() {
        return this.cacheFileList = ["bin/config/bytes/newCSV.bytes", "res/x5_comp", "res/x5_mainview", "res/x5_few", "res/x5_common", "res/x5_firstPayTop", "res/x5_chat", "res/x5_hunhuan", "res/x5_wuHun", "res/x5_loading", "res/x5_hunhuan", "res/x5_worldboss3x", "res/x5_neutral", "res/x5_tip", "res/x5_role", "res/x5_soulroad", "res/x5_mall", "res/x5_unpack/unpack_mapnamebg.png", "res/x5_unpack/unpack_llbg.png", "res/x5_unpack/mapnormal.png", "res/x5_unpack/img_headBg3.png", "res/x5_unpack/hunhuan_new_bubble_bg.png", "res/x5_unpack/hint_bg_2.png", "res/x5_unpack/few_shadow.png", "res/x5_unpack/bg_task_2.png", "res/x5_unpack/bg_hint_bg.png", "res/x5_unpack/bg_areaUnopen.png", "res/x5_unpack/bgLoading.jpg", "res/x5_unpack/fx_loading.png", "res/x5_unpack/few_shadow.png", "res/x5_unpack/loading_side.png", "res/x5_unpack/icon_wuhun_", "res/other/uncomp", "dl_ldzc_small_fw", "dl_jjc5_small_fw", "dl_slzd_small_fw", "dl_xxysl_small_fw", "dl_yht_small_fw", "zc_small_fw", "dl_ntxl_small_fw3", "dl_bosslrsl_small_fw", "dl_sjzl1_small_fw", "battlefail_shine", "battlefail_shine", "battlesucc_step_01", "battlesucc_step_02", "battlefail_step", "x5/nv_01/", "x5/nan_01/"]
    }
    ]);
    var Ni, Di = R;
    function R() {
        this.deleteCount = 0,
        this.totalDelCount = 0,
        this.wxToken = "",
        this.loadWxScriptTime = NaN,
        this._deleteHandler = null,
        Ni.call(this)
    }
    t(Fi, "app.fateGame.AppByteArray", Ei = s),
    (N = Fi.prototype).clear = function() {
        this._strTable = [],
        this._objTable = [],
        this._traitsTable = [],
        this._position_ = 0,
        this.length = 0
    }
    ,
    N.ensureWrite = function(t) {
        this._len < t && (this.length = t)
    }
    ,
    N.readBoolean = function() {
        return 0 != this.readByte()
    }
    ,
    N.readByte = function() {
        return this._data_.getInt8(this._position_++)
    }
    ,
    N.readBytes = function(t, e, i) {
        if (void 0 === i && (i = 0),
        (e = void 0 === e ? 0 : e) < 0 || i < 0)
            throw "Read error - Out of bounds";
        0 == i && (i = this._len - this._position_),
        t.ensureWrite(e + i),
        t._byteView_.set(this._byteView_.subarray(this._position_, this._position_ + i), e),
        t.position = e,
        this._position_ += i,
        t.position + i > t.length && (t.length = t.position + i)
    }
    ,
    N.readDouble = function() {
        var t = this._data_.getFloat64(this._position_, this._littleEndian_);
        return this._position_ += 8,
        t
    }
    ,
    N.readFloat = function() {
        var t = this._data_.getFloat32(this._position_, this._littleEndian_);
        return this._position_ += 4,
        t
    }
    ,
    N.readFullBytes = function(t, e, i) {
        this.ensureWrite(i);
        for (var s = e; s < e + i; s++)
            this._data_.setInt8(this._position_++, t.get(s))
    }
    ,
    N.readInt = function() {
        var t = this._data_.getInt32(this._position_, this._littleEndian_);
        return this._position_ += 4,
        t
    }
    ,
    N.readShort = function() {
        var t = this._data_.getInt16(this._position_, this._littleEndian_);
        return this._position_ += 2,
        t
    }
    ,
    N.readUnsignedByte = function() {
        return this._data_.getUint8(this._position_++)
    }
    ,
    N.readUnsignedInt = function() {
        var t = this._data_.getUint32(this._position_, this._littleEndian_);
        return this._position_ += 4,
        Math.floor(t)
    }
    ,
    N.readUnsignedShort = function() {
        var t = this._data_.getUint16(this._position_, this._littleEndian_);
        return this._position_ += 2,
        t
    }
    ,
    N.readUTF = function() {
        return this.readUTFBytes(this.readUnsignedShort())
    }
    ,
    N.readUnicode = function(t) {
        for (var e, i, s = "", n = this._position_ + t; this._position_ < n; )
            i = this._byteView_[this._position_++],
            e = this._byteView_[this._position_++],
            s += String.fromCharCode(e << 8 | i);
        return s
    }
    ,
    N.readMultiByte = function(t, e) {
        return "UNICODE" == e || "unicode" == e ? this.readUnicode(t) : this.readUTFBytes(t)
    }
    ,
    N.readUTFBytes = function(t) {
        for (var e, i, s = this._position_ + (t = void 0 === t ? -1 : t), n = 0, o = String.fromCharCode, a = []; this._position_ < s; )
            (e = this._data_.getUint8(this._position_++)) < 128 ? 0 != e && a.push(o(e)) : e < 224 ? a.push(o((63 & e) << 6 | 127 & this._data_.getUint8(this._position_++))) : e < 240 ? (n = this._data_.getUint8(this._position_++),
            a.push(o((31 & e) << 12 | (127 & n) << 6 | 127 & this._data_.getUint8(this._position_++)))) : (n = this._data_.getUint8(this._position_++),
            i = this._data_.getUint8(this._position_++),
            a.push(o((15 & e) << 18 | (127 & n) << 12 | i << 6 & 127 | 127 & this._data_.getUint8(this._position_++))));
        return a.join("")
    }
    ,
    N.toString = function() {
        var t = this._position_
          , e = (this._position_ = 0,
        this.readUTFBytes(this.length));
        return this._position_ = t,
        e
    }
    ,
    N.writeBoolean = function(t) {
        this.writeByte(t ? 1 : 0)
    }
    ,
    N.writeByte = function(t) {
        this.ensureWrite(this._position_ + 1),
        this._data_.setInt8(this._position_, t),
        this._position_ += 1
    }
    ,
    N.writeBytes = function(t, e, i) {
        if (void 0 === i && (i = 0),
        (e = void 0 === e ? 0 : e) < 0 || i < 0)
            throw "writeBytes error - Out of bounds";
        0 == i && (i = t.length - e),
        this.ensureWrite(this._position_ + i),
        this._byteView_.set(t._byteView_.subarray(e, e + i), this._position_),
        this._position_ += i
    }
    ,
    N.writeArrayBuffer = function(t, e, i) {
        if (void 0 === i && (i = 0),
        (e = void 0 === e ? 0 : e) < 0 || i < 0)
            throw "writeArrayBuffer error - Out of bounds";
        0 == i && (i = t.byteLength - e),
        this.ensureWrite(this._position_ + i);
        t = new Uint8Array(t);
        this._byteView_.set(t.subarray(e, e + i), this._position_),
        this._position_ += i
    }
    ,
    N.writeDouble = function(t) {
        this.ensureWrite(this._position_ + 8),
        this._data_.setFloat64(this._position_, t, this._littleEndian_),
        this._position_ += 8
    }
    ,
    N.writeFloat = function(t) {
        this.ensureWrite(this._position_ + 4),
        this._data_.setFloat32(this._position_, t, this._littleEndian_),
        this._position_ += 4
    }
    ,
    N.writeInt = function(t) {
        this.ensureWrite(this._position_ + 4),
        this._data_.setInt32(this._position_, t, this._littleEndian_),
        this._position_ += 4
    }
    ,
    N.writeShort = function(t) {
        this.ensureWrite(this._position_ + 2),
        this._data_.setInt16(this._position_, t, this._littleEndian_),
        this._position_ += 2
    }
    ,
    N.writeUnsignedInt = function(t) {
        this.ensureWrite(this._position_ + 4),
        this._data_.setUint32(this._position_, t, this._littleEndian_),
        this._position_ += 4
    }
    ,
    N.writeUnsignedShort = function(t) {
        this.ensureWrite(this._position_ + 2),
        this._data_.setUint16(this._position_, t, this._littleEndian_),
        this._position_ += 2
    }
    ,
    N.writeUTF = function(t) {
        this.writeUnsignedShort(this._getUTFBytesCount(t += "")),
        this.writeUTFBytes(t)
    }
    ,
    N.writeUnicode = function(t) {
        this.ensureWrite(this._position_ + 2 * (t += "").length);
        for (var e, i = 0, s = t.length; i < s; i++)
            e = t.charCodeAt(i),
            this._byteView_[this._position_++] = 255 & e,
            this._byteView_[this._position_++] = e >> 8
    }
    ,
    N.writeMultiByte = function(t, e) {
        if (t += "",
        "UNICODE" == e || "unicode" == e)
            return this.writeUnicode(t);
        this.writeUTFBytes(t)
    }
    ,
    N.writeUTFBytes = function(t) {
        this.ensureWrite(this._position_ + 4 * (t += "").length);
        for (var e = 0, i = t.length; e < i; e++) {
            var s = t.charCodeAt(e);
            s <= 127 ? this.writeByte(s) : (s <= 2047 ? this.writeByte(192 | s >> 6) : (s <= 65535 ? this.writeByte(224 | s >> 12) : (this.writeByte(240 | s >> 18),
            this.writeByte(128 | s >> 12 & 63)),
            this.writeByte(128 | s >> 6 & 63)),
            this.writeByte(128 | 63 & s))
        }
        this.length = this._position_
    }
    ,
    N.__fromBytes = function(t) {
        this._byteView_ = new Uint8Array(t.getData()),
        this.length = this._byteView_.length,
        this._$1__allocated_ = this.length
    }
    ,
    N.__get = function(t) {
        return this._data_.getUint8(t)
    }
    ,
    N._getUTFBytesCount = function(t) {
        for (var e = 0, i = 0, s = (t += "").length; i < s; i++) {
            var n = t.charCodeAt(i);
            e += n <= 127 ? 1 : n <= 2047 ? 2 : n <= 65535 ? 3 : 4
        }
        return e
    }
    ,
    N._byteAt_ = function(t) {
        return this._byteView_[t]
    }
    ,
    N._byteSet_ = function(t, e) {
        this.ensureWrite(t + 1),
        this._byteView_[t] = e
    }
    ,
    N.uncompress = function(t) {
        void 0 === t && (t = "zlib");
        t = new Zlib.Inflate(this._byteView_);
        this._byteView_ = t.decompress(),
        this._data_ = new DataView(this._byteView_.buffer),
        this._$1__allocated_ = this._len = this._byteView_.byteLength,
        this._position_ = 0
    }
    ,
    N.compress = function(t) {
        void 0 === t && (t = "zlib");
        t = new Zlib.Deflate(this._byteView_);
        this._byteView_ = t.compress(),
        this._data_ = new DataView(this._byteView_.buffer),
        this._position_ = this._$1__allocated_ = this._len = this._byteView_.byteLength
    }
    ,
    N.___resizeBuffers = function(e) {
        try {
            var t = new Uint8Array(e);
            null != this._byteView_ && (this._byteView_.length <= e ? t.set(this._byteView_) : t.set(this._byteView_.subarray(0, e))),
            this._byteView_ = t,
            this._data_ = new DataView(t.buffer)
        } catch (t) {
            throw "___resizeBuffer err:" + e
        }
    }
    ,
    N.__getBuffer = function() {
        return this._data_.buffer.byteLength = this.length,
        this._data_.buffer
    }
    ,
    N.__set = function(t, e) {
        this._data_.setUint8(t, e)
    }
    ,
    N.setUint8Array = function(t) {
        this._byteView_ = t,
        this._data_ = new DataView(t.buffer),
        this._len = t.byteLength,
        this._position_ = 0
    }
    ,
    N.readObject = function() {
        return this._strTable = [],
        this._objTable = [],
        this._traitsTable = [],
        this.readObject2()
    }
    ,
    N.readObject2 = function() {
        var t = this.readByte();
        return this.readObjectValue(t)
    }
    ,
    N.readObjectValue = function(t) {
        var e;
        switch (t) {
        case 1:
            break;
        case 6:
            e = this.__readString();
            break;
        case 4:
            e = this.readInterger();
            break;
        case 2:
            e = !1;
            break;
        case 3:
            e = !0;
            break;
        case 10:
            e = this.readScriptObject();
            break;
        case 9:
            e = this.readArray();
            break;
        case 5:
            e = this.readDouble();
            break;
        case 12:
            e = this.readByteArray();
            break;
        default:
            console.log("Unknown object type tag!!!" + t)
        }
        return e
    }
    ,
    N.readByteArray = function() {
        var t, e = this.readUInt29();
        return 0 == (1 & e) ? this.getObjRef(e >> 1) : (e = e >> 1,
        t = new Fi,
        this._objTable.push(t),
        this.readBytes(t, 0, e),
        t)
    }
    ,
    N.readInterger = function() {
        var t = this.readUInt29() << 3 >> 3;
        return parseInt(t + "")
    }
    ,
    N.getStrRef = function(t) {
        return this._strTable[t]
    }
    ,
    N.getObjRef = function(t) {
        return this._objTable[t]
    }
    ,
    N.__readString = function() {
        var t = this.readUInt29();
        return 0 == (1 & t) ? this.getStrRef(t >> 1) : 0 == (t = t >> 1) ? "" : (t = this.readUTFBytes(t),
        this._strTable.push(t),
        t)
    }
    ,
    N.readTraits = function(t) {
        if (1 == (3 & t))
            return (e = this.getTraitReference(t >> 2)).propoties ? e : {
                obj: {}
            };
        var e, i = 4 == (4 & t), s = 8 == (8 & t), n = t >> 4, t = this.__readString();
        if ((e = {}).className = t,
        e.propoties = [],
        e.dynamic = s,
        e.externalizable = i,
        0 < n)
            for (var o = 0; o < n; o++) {
                var a = this.__readString();
                e.propoties.push(a)
            }
        return this._traitsTable.push(e),
        e
    }
    ,
    N.readScriptObject = function() {
        var t = this.readUInt29();
        if (0 == (1 & t))
            return this.getObjRef(t >> 1);
        var e, i, t = this.readTraits(t), s = t.className, n = (t.externalizable,
        t.propoties);
        if (i = s && "" != s && (s = vt.getRegClass(s)) ? new s : {},
        this._objTable.push(i),
        n)
            for (var o = 0; o < n.length; o++)
                i[n[o]] = this.readObject2();
        if (t.dynamic)
            for (; null != (e = this.__readString()) && 0 != e.length; )
                i[e] = this.readObject2();
        return i
    }
    ,
    N.readArray = function() {
        var t = this.readUInt29();
        if (0 == (1 & t))
            return this.getObjRef(t >> 1);
        for (var e, i = null, s = t >> 1; null != (e = this.__readString()) && 0 != e.length; )
            null == i && this._objTable.push(i = {}),
            i[e] = this.readObject2();
        if (null == i) {
            this._objTable.push(i = []);
            for (var n = 0, n = 0; n < s; n++)
                i.push(this.readObject2())
        } else
            for (n = 0; n < s; n++)
                i[n + ""] = this.readObject2();
        return i
    }
    ,
    N.readUInt29 = function() {
        var t = 0
          , e = 255 & this.readByte();
        return e < 128 ? e : (t = (127 & e) << 7,
        (e = 255 & this.readByte()) < 128 || (t = (t | 127 & e) << 7,
        (e = 255 & this.readByte()) < 128) || (t = (t | 127 & e) << 8,
        e = 255 & this.readByte()),
        t | e)
    }
    ,
    N.writeObject = function(t) {
        this._strTable = [],
        this._objTable = [],
        this._traitsTable = [],
        this.writeObject2(t)
    }
    ,
    N.writeObject2 = function(t) {
        var e;
        null == t ? this.writeAMFNull() : "string" == (e = typeof t) ? this.writeAMFString(t) : "boolean" == e ? this.writeAMFBoolean(t) : "number" == e ? -1 != String(t).indexOf(".") ? this.writeAMFDouble(t) : this.writeAMFInt(t) : "object" == e && (t instanceof Array ? this.writeArray(t) : x.__typeof(t, Fi) && this.writeAMFByteArray(t))
    }
    ,
    N.writeAMFNull = function() {
        this.writeByte(1)
    }
    ,
    N.writeAMFString = function(t) {
        this.writeByte(6),
        this.writeStringWithoutType(t)
    }
    ,
    N.writeStringWithoutType = function(t) {
        var e;
        0 == t.length ? this.writeUInt29(1) : 0 <= (e = this._strTable.indexOf(t)) ? this.writeUInt29(e << 1) : (e = this._getUTFBytesCount(t),
        this.writeUInt29(e << 1 | 1),
        this.writeUTFBytes(t),
        this._strTable.push(t))
    }
    ,
    N.writeAMFInt = function(t) {
        Fi.INT28_MIN_VALUE <= t && t <= 268435455 ? (t &= 536870911,
        this.writeByte(4),
        this.writeUInt29(t)) : this.writeAMFDouble(t)
    }
    ,
    N.writeAMFDouble = function(t) {
        this.writeByte(5),
        this.writeDouble(t)
    }
    ,
    N.writeAMFBoolean = function(t) {
        t ? this.writeByte(3) : this.writeByte(2)
    }
    ,
    N.writeArray = function(t) {
        this.writeByte(9);
        var e = t.length;
        if (-1 < this._objTable.indexOf(t))
            this.writeUInt29(e << 1);
        else {
            this.writeUInt29(e << 1 | 1),
            this.writeStringWithoutType("");
            for (var i = 0; i < e; i++)
                this.writeObject2(t[i]);
            this._objTable.push(t)
        }
    }
    ,
    N.writeAMFByteArray = function(t) {
        this.writeByte(12);
        var e = this._objTable.indexOf(t);
        0 <= e ? this.writeUInt29(e << 1) : (e = t.length,
        this.writeUInt29(e << 1 | 1),
        this.writeBytes(t, 0, e))
    }
    ,
    N.writeMapAsECMAArray = function(t) {
        this.writeByte(9),
        this.writeUInt29(1);
        for (var e in t)
            this.writeStringWithoutType(e),
            this.writeObject2(t[e]);
        this.writeStringWithoutType("")
    }
    ,
    N.writeUInt29 = function(t) {
        t < 128 ? this.writeByte(t) : t < 16384 ? (this.writeByte(t >> 7 & 127 | 128),
        this.writeByte(127 & t)) : t < 2097152 ? (this.writeByte(t >> 14 & 127 | 128),
        this.writeByte(t >> 7 & 127 | 128),
        this.writeByte(127 & t)) : t < 1073741824 ? (this.writeByte(t >> 22 & 127 | 128),
        this.writeByte(t >> 15 & 127 | 128),
        this.writeByte(t >> 8 & 127 | 128),
        this.writeByte(255 & t)) : console.log("Integer out of range: " + t)
    }
    ,
    N.getTraitReference = function(t) {
        return this._traitsTable[t]
    }
    ,
    e(0, N, "endian", function() {
        return this._littleEndian_ ? "littleEndian" : "bigEndian"
    }, function(t) {
        this._littleEndian_ = "littleEndian" == t
    }),
    e(0, N, "length", function() {
        return this._len
    }, function(t) {
        this.___resizeBuffers(this._$1__allocated_ = t),
        this._len = t
    }),
    e(0, N, "position", function() {
        return this._position_
    }, function(t) {
        t < this._len ? this._position_ = t < 0 ? 0 : t : (this._position_ = t,
        this.length = t)
    }),
    e(0, N, "bytesAvailable", function() {
        return this.length - this._position_
    }, Ei.prototype._$set_bytesAvailable),
    Fi.__ofBuffer = function(t) {
        var e = new Fi;
        return e.length = e.allocated = t.byteLength,
        e.data = new DataView(t),
        e.byteView = new Uint8Array(t),
        e
    }
    ,
    Fi.getTraitsInfoRef = function(t, e) {
        for (var i = 0, s = t.length, i = 0; i < s; i++)
            if (Fi.equalsTraitsInfo(e, t[i]))
                return i;
        return -1
    }
    ,
    Fi.equalsTraitsInfo = function(t, e) {
        if (t != e) {
            if (!t.className === e.className)
                return !1;
            if (t.properties.length != e.properties.length)
                return !1;
            var i = t.properties.length;
            t.properties.sort(),
            e.properties.sort();
            for (var s = 0; s < i; s++)
                if (t.properties[s] != e.properties[s])
                    return !1
        }
        return !0
    }
    ,
    O(Fi, ["INT28_MIN_VALUE", function() {
        return this.INT28_MIN_VALUE = -268435456
    }
    ]);
    var Ei, Oi = Fi;
    function Fi() {
        this._len = 0,
        this._objectEncoding_ = 0,
        this._position_ = 0,
        this._$1__allocated_ = 8,
        this._data_ = null,
        this._littleEndian_ = !1,
        this._byteView_ = null,
        this._strTable = null,
        this._objTable = null,
        this._traitsTable = null,
        Ei.call(this),
        this.___resizeBuffers(this._allocated_)
    }
    t(B, "app.fateGame.Applong", Hi = Jt),
    (s = B.prototype).equal = function(t) {
        return this === t || !(this && null == t || !t || t.high != this.high || t.low != this.low)
    }
    ,
    s.equalStr = function(t) {
        return this === t || (!this || null != t) && this.toString() == t.toString()
    }
    ,
    s.isEmpty = function() {
        return 0 == this.high && 0 == this.low
    }
    ,
    s.toNumber = function() {
        return 4294967296 * this.high + this.low
    }
    ,
    s.toString = function(t) {
        if ((t = void 0 === t ? 10 : t) < 2 || 36 < t)
            throw new Error("指定要用于数字到字符串的转换的基数不在从 2 到 36 的范围内。");
        var e, i;
        return 0 == this.high ? this.low.toString(t) : ((e = B.dic[this.high]) || (B.dic[this.high] = e = {}),
        (i = e[this.low]) && 10 == t || (i = this.getStr(t),
        10 == t && (e[this.low] = i)),
        i)
    }
    ,
    s.getStr = function(t) {
        void 0 === t && (t = 10);
        for (var e = "00000000000000000000000000000000" + this.low.toString(2), i = [], s = [1], n = (e = this.high.toString(2) + e.substr(e.length - 32)).length - 1; 0 <= n; n--)
            "1" == e.substr(n, 1) && this.addBit(i, s, t),
            this.addBit(s, s, t);
        for (var o = "", n = i.length - 1; 0 <= n; n--)
            o += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(i[n], 1);
        return o
    }
    ,
    s.addBit = function(t, e, i) {
        for (var s = !1, n = 0, o = Math.max(t.length, e.length), n = 0; n < o; n++)
            n >= t.length && (t[n] = 0),
            n >= e.length && (e[n] = 0),
            t[n] += e[n],
            s && t[n]++,
            s = !1,
            t[n] >= i && (t[n] -= i,
            s = !0);
        return s && t.push(1),
        t
    }
    ,
    s.and = function(t) {
        var e = this.internalHigh & t.internalHigh
          , t = this.low & t.low;
        return B.create(t, e)
    }
    ,
    s.or = function(t) {
        var e = this.internalHigh | t.internalHigh
          , e = this.uintBitFix(e)
          , t = this.low | t.low
          , t = this.uintBitFix(t);
        return B.create(t, e)
    }
    ,
    s.xor = function(t) {
        var e = this.internalHigh ^ t.internalHigh
          , e = this.uintBitFix(e)
          , t = this.low ^ t.low
          , t = this.uintBitFix(t);
        return B.create(t, e)
    }
    ,
    s.byteValue = function() {
        return 255 & this.low
    }
    ,
    s.shiftRight = function(t) {
        if (0 == t)
            return this;
        if (63 < t)
            return this;
        for (var e = this.internalHigh, i = this.low, s = 0, n = (0 < Math.floor(t / 32) && (e = 0 <= (i = e) ? 0 : -1),
        t %= 32,
        0), s = 0; s < t; s++)
            n = this.uintBitFix(n |= 1 << s);
        return i = this.uintBitFix(i = i >>> t | (e & n) << 32 - t),
        B.create(i, e >>= t)
    }
    ,
    s.shiftRightNo = function(t) {
        if (0 == t)
            return this;
        if (63 < t)
            return this;
        for (var e = this.internalHigh, i = this.low, s = 0, n = (0 < Math.floor(t / 32) && (i = e,
        e = 0),
        t %= 32,
        0), s = 0; s < t; s++)
            n = this.uintBitFix(n |= 1 << s);
        return i = this.uintBitFix(i = i >>> t | (e & n) << 32 - t),
        B.create(i, e >>>= t)
    }
    ,
    s.shiftLeft = function(t) {
        if (0 == t)
            return this;
        if (63 < t)
            return B.create(0, 0);
        if (32 == t)
            return B.create(0, this.low);
        for (var e = this.internalHigh, i = this.low, s = 0, n = (0 < Math.floor(t / 32) && (e = i,
        i = 0),
        t %= 32,
        0), s = 1; s <= t; s++)
            n = this.uintBitFix(n |= 1 << 32 - s);
        return e = this.uintBitFix(e = e << t | (i & n) >>> 32 - t),
        B.create(i <<= t, e)
    }
    ,
    s.uintBitFix = function(t) {
        return t = t < 0 ? 4294967296 + t : t
    }
    ,
    e(0, s, "high", function() {
        return this.internalHigh
    }, Hi.prototype._$set_high),
    B.create = function(t, e) {
        return void 0 === e && (e = 0),
        (t = void 0 === t ? 0 : t) == B.ZERO.low && e == B.ZERO.high ? B.ZERO : t == B.ONE.low && e == B.ONE.high ? B.ONE : t == B.SIGN.low && e == B.SIGN.high ? B.SIGN : t == B.MARK.low && e == B.MARK.high ? B.MARK : new B(t,e)
    }
    ,
    B.fromNumber = function(t) {
        return B.create(t % 4294967296, Math.floor(t / 4294967296))
    }
    ,
    B.fromString = function(t) {
        if (!t)
            return B.ZERO;
        for (var e = (t = t.split(".")[0]).match(/\d/g), i = 0, s = 0, n = e.length, s = 0; s < n; s++)
            e[s] = parseInt(e[s]);
        for (var o, a = ""; 0 == e[0] && e.shift(),
        0 != e.length; ) {
            for (s = 0; s < e.length; s++)
                i && (e[s] += 10 * i,
                i = 0),
                i = e[s] % 16,
                e[s] = e[s] >> 4;
            a = "0123456789ABCDEF".substr(i, 1) + a,
            i = 0
        }
        return t = 8 < (a = a || "0").length ? (o = parseInt("0x" + a.substr(0, a.length - 8)),
        parseInt("0x" + a.substr(a.length - 8, 8))) : (o = 0,
        parseInt("0x" + a)),
        B.create(t, o)
    }
    ,
    B.indexOf = function(t, e) {
        if (e)
            for (var i = 0, s = t ? t.length : 0; i < s; i++)
                if (e == t[i] || e.equal(t[i]))
                    return i;
        return -1
    }
    ,
    B.compare = function(t, e) {
        return t && e ? t.high > e.high ? 1 : t.high < e.high ? -1 : t.low > e.low ? 1 : t.low < e.low ? -1 : 0 : -1
    }
    ,
    B.parselong = function(t, e) {
        for (var i = 0, s = (0 == (e = void 0 === e ? 0 : e) && (0 == t.indexOf("0x") ? (e = 16,
        i = 2) : e = 10),
        t = t.toLowerCase(),
        new B); i < t.length; i++) {
            var n = t.charCodeAt(i);
            Jt.CHAR_CODE_0 <= n && n <= Jt.CHAR_CODE_9 ? n -= Jt.CHAR_CODE_0 : Jt.CHAR_CODE_A <= n && n <= Jt.CHAR_CODE_Z && (n = n - Jt.CHAR_CODE_A + 10),
            s.mul(e),
            s.add(n)
        }
        return B.create(s.low, s.high)
    }
    ,
    B.dic = {},
    O(B, ["ZERO", function() {
        return this.ZERO = new B
    }
    , "ONE", function() {
        return this.ONE = new B(1,0)
    }
    , "SIGN", function() {
        return this.SIGN = new B(4294967295,4294967295)
    }
    , "MARK", function() {
        return this.MARK = new B(4294967168,4294967295)
    }
    ]);
    var Hi, Gi = B;
    function B(t, e) {
        Hi.call(this, t = void 0 === t ? 0 : t, e = void 0 === e ? 0 : e)
    }
    t(zi, "app.fateGame.FateGameControl", Ui = i),
    (N = zi.prototype).onKeyUp = function(t) {
        45 == t.keyCode && xt.init()
    }
    ,
    N.StartGame = function(t) {
        this.completeHandler = t,
        this.preloadRes()
    }
    ,
    N.preloadRes = function() {
        var t = ["art/res/other/x5/hlcsl_cnq1.json", "art/res/other/x5/hlcsl_cnq2.json", "art/res/other/x5/hlcsl_cnq3.json", "art/res/other/x5/hlcsl_cnq4.json", "art/res/layaFx/fx_ztxhbj.json", "art/res/other/x5/xtmhl.json", 3];
        0 < t.length && x.loader.load(t, b.create(this, function() {
            x.loader.load("res/x5_unpack/soul_power_bgWx.jpg", b.create(this, function() {}, null), null, "image")
        }, null), null, "atlas", 3),
        this.preloadResComplete()
    }
    ,
    N.preloadResComplete = function() {
        var t = this;
        this.initViewPort(w.width, w.height),
        ve.ins,
        p.ins.m_loginRoot.visible = !1,
        c.islocal ? c.loadScript("zlib.min.js", b.create(c, function() {
            t.enterInitGame(),
            t.openMainTop(),
            t.openMainBottom(),
            x.timer.once(1e3, zi.ins, t.openSelectWunhun)
        }), "", 0) : (this.enterInitGame(),
        this.openMainTop(),
        this.openMainBottom(),
        x.timer.once(1e3, zi.ins, this.openSelectWunhun))
    }
    ,
    N.StartLoadGame = function() {
        x.timer.loop(1e3, this, this.loopFun)
    }
    ,
    N.loopFun = function() {
        this.count++,
        w.antiMiniGame ? this.count == this.stepCount && (1 == this.step ? (this.tip = "开始加载主代码分包1",
        w.onMiniGame ? Bs.ins.loadSubpack2(!1, b.create(this, this.loadStep1)) : w.onVVMiniGame ? Ls.ins.loadSubpack2(!0, b.create(this, this.loadStep2)) : w.onKSMiniGame && ks.ins.loadSubpack2(!0, b.create(this, this.loadStep2))) : 2 == this.step ? (this.tip = "开始加载主代码分包2",
        w.onMiniGame && Bs.ins.loadSubpack3(b.create(this, this.loadStep2))) : 3 == this.step && (this.tip = "开始加载cfg配置",
        this.loadCfg())) : (c.islocal && 4 != this.step && this.loadCfg(),
        c.islocal && (this.loadJsComplete = !0))
    }
    ,
    N.loadStep1 = function() {
        this.tip = "完成加载主代码分包",
        this.stepCount = this.count + 2,
        this.step = 2
    }
    ,
    N.loadStep2 = function() {
        this.tip = "完成加载主代码分包1",
        this.stepCount = this.count + 2,
        this.step = 3,
        this.loadJsComplete = !0
    }
    ,
    N.loadCfg = function() {
        var e = this
          , t = (this.step = 4,
        this.needtime = (new Date).getTime() - this.nowtime,
        this.stepCount = this.count + 2,
        x.loader.load("bin/config/bytes/newCSV.bytes", b.create(this, function(t) {
            e.tip = "完成加载cfg配置",
            e.loadCfgComplete = !0,
            e.loadAtlasComplete && x.stage.event("loadJsComplete")
        }), null, "arraybuffer", 4),
        ["res/x5_comp.json", "res/x5_few.json", "res/x5_wuHun.json", "res/x5_movie.json", "res/x5_firstPayTop.json"]);
        0 < t.length ? x.loader.load(t, b.create(this, function() {
            e.loadAtlasComplete = !0,
            e.loadCfgComplete && x.stage.event("loadJsComplete")
        }, null), null, "atlas", 4) : (this.loadAtlasComplete = !0,
        this.loadCfgComplete && x.stage.event("loadJsComplete"))
    }
    ,
    N.openSelectWunhun = function() {
        var t = b.create(zi.ins, this.openMovieTalkComplete1);
        p.ins.WxCreateRole(ve.ins.popLayer, A.ins.playerInfo.personId, b.create(zi.ins, this.openMovieTalkPanel, [10003, t]))
    }
    ,
    N.openMovieTalkComplete1 = function() {
        c.send("3706"),
        this.showAll(!0),
        this.FindNPC(10003)
    }
    ,
    N.openMovieTalkPanel = function(t, e) {
        10003 == t ? c.send("3705") : 10004 == t && c.send("3707"),
        this.showAll(!1),
        this.movieTalkPanel = oa.createPanel(),
        this.movieTalkPanel.updateCfgEx(t, !1),
        this.movieTalkPanel.completeFun = e,
        ve.ins.popLayer.addChild(this.movieTalkPanel),
        this.movieTalkPanel.open()
    }
    ,
    N.FindNPC = function(t) {
        Le.ins.pathToNpc(t, b.create(this, this.playerArrivePointHandler, [!0]), null, null)
    }
    ,
    N.playerArrivePointHandler = function(t) {
        void 0 === t && (t = !1);
        t = b.create(zi.ins, this.showPower);
        zi.ins.openMovieTalkPanel(10004, t)
    }
    ,
    N.showAll = function(t) {
        this._bottom.visible = t,
        this._top.visible = t
    }
    ,
    N.showPower = function() {
        var t = this;
        c.send("3708"),
        this.showAll(!0),
        this.soulPower = la.createSoulPowerTestPanel(),
        this.soulPower.completeFun = b.create(null, function() {
            t.showLoading()
        }),
        ve.ins.popLayer.addChild(this.soulPower),
        this.soulPower.open()
    }
    ,
    N.showLoading = function() {
        this.showAll(!0),
        this.maploading = Jo.createPanel(),
        x.stage.once("loadgameed", this, this.loadGameEd),
        ve.ins.popLayer.addChild(this.maploading),
        this.maploading.open(),
        c.send("3711")
    }
    ,
    N.loadGameEd = function() {
        this.closeMapLoading()
    }
    ,
    N.initViewPort = function(t, e) {
        t / e > I.RIGHT_WIDTH2 / I.RIGHT_HEIGHT ? (i = I.MAX_HEIGHT ? Math.min(I.MAX_HEIGHT, e) : e,
        I.globalScale = i / I.RIGHT_HEIGHT,
        I.viewWidth = I.RIGHT_WIDTH2,
        I.viewHeight = I.RIGHT_HEIGHT) : t / e < I.RIGHT_WIDTH / I.RIGHT_HEIGHT ? (i = t * I.RIGHT_HEIGHT / I.RIGHT_WIDTH,
        i = I.MAX_HEIGHT ? Math.min(I.MAX_HEIGHT, i) : i,
        I.globalScale = i / I.RIGHT_HEIGHT,
        I.viewWidth = I.RIGHT_WIDTH,
        I.viewHeight = I.viewWidth * e / t) : (i = I.MAX_HEIGHT ? Math.min(I.MAX_HEIGHT, e) : e,
        I.globalScale = i / I.RIGHT_HEIGHT,
        I.viewWidth = I.RIGHT_HEIGHT * t / e,
        I.viewHeight = I.RIGHT_HEIGHT),
        I.gameSceneSc = I.RIGHT_HEIGHT * I.ROLE_SCENE_SCALE / I.ROLE_HEIGHT,
        I.w = I.viewWidth / I.gameSceneSc,
        I.h = I.viewHeight / I.gameSceneSc;
        var i = new pt;
        return i.x = Math.round(I.viewWidth * I.globalScale),
        i.y = Math.round(I.viewHeight * I.globalScale),
        x._isinit && (x.stage.width = i.x,
        x.stage.height = i.y),
        x.stage.scaleMode = "game",
        x.stage.alignH = "center",
        x.stage.alignV = "middle",
        i
    }
    ,
    N.enterInitGame = function() {
        qs.hasRoleData = !0,
        this.inCity()
    }
    ,
    N.inCity = function() {
        var t;
        30001 != A.ins.playerInfo.mapId || Ji.ins.isInCity || ($i.ins.cityCopyPos = [S.tile2Coo((t = [70, 56])[0]), S.tile2Coo(t[1])],
        $i.ins.switchCityScene(!1))
    }
    ,
    N.openMainBottom = function() {
        this._bottom = new Yo,
        ve.ins.popLayer.addChild(this._bottom),
        this._bottom.open()
    }
    ,
    N.openMainTop = function() {
        this._top = new Ko,
        ve.ins.popLayer.addChild(this._top),
        this._top.open()
    }
    ,
    N.EndGame = function() {
        c.IsFate && (x.timer.clearAll(this),
        this._top && (this._top.close(),
        this._top = null),
        this._bottom && (this._bottom.close(),
        this._bottom = null),
        this.closeMapLoading(),
        this.movieTalkPanel && (this.movieTalkPanel = null),
        this.soulPower && (this.soulPower = null),
        ve.ins.removeAllScene(),
        p.ins.clearLoginThings(),
        c.IsFate = !1,
        c.send("3712"))
    }
    ,
    N.closeMapLoading = function() {
        this.maploading && this.maploading.visible && (x.stage.off("loadgameed", this, this.loadGameEd),
        this.maploading.close(),
        this._top = null)
    }
    ,
    N.LoadEnd = function() {
        this.completeHandler && (this.completeHandler.run(),
        this.completeHandler = null)
    }
    ,
    e(1, zi, "ins", function() {
        return zi._ins = null == zi._ins ? new zi : zi._ins
    }, Ui.prototype._$set_ins),
    zi._ins = null;
    var Ui, Vi = zi;
    function zi() {
        this.completeHandler = null,
        this._bottom = null,
        this._top = null,
        this.loadJsComplete = !1,
        this.loadCfgComplete = !1,
        this.loadAtlasComplete = !1,
        this.nowtime = 0,
        this.needtime = 0,
        this.count = 0,
        this.tip = "",
        this.stepCount = 1,
        this.step = 1,
        this.movieTalkPanel = null,
        this.soulPower = null,
        this.maploading = null,
        Ui.call(this),
        c.islocal && x.stage.on("keyup", this, this.onKeyUp)
    }
    t(ji, "app.fateGame.ai.utils.path.AppAPath", Xi = v),
    (s = ji.prototype).canPath = function(t, e) {
        return !!this.canPass(t, e)
    }
    ,
    s.findPath = function(t, e, i, s, n, o) {
        if (void 0 === n && (n = 0),
        void 0 === o && (o = 0),
        isNaN(i) || isNaN(s))
            return console.error("上层逻辑错误，传进来的目标点为nan"),
            null;
        if (t == i && e == s)
            return null;
        for (var a, r = Math.abs(i - t), l = Math.abs(s - e), h = r ? (i - t) / r : 0, c = l ? (s - e) / l : 0, p = t, u = e, d = (s - e) / (i - t), g = !0; ; ) {
            if (!this.canPass(p, u)) {
                g = !1;
                break
            }
            if (p == i && u == s)
                break;
            var m = (p - t + .5 * h) * d;
            if (Math.abs(m) < Math.abs(u - e + .5 * c))
                p += h;
            else {
                if (!(Math.abs(m) > Math.abs(u - e + .5 * c))) {
                    if (!this.canPass(p + h, u) && !this.canPass(p, u + c)) {
                        g = !1;
                        break
                    }
                    p += h
                }
                u += c
            }
        }
        return g ? (r = Math.atan2(s - e, i - t),
        [[t, e], [i - Math.round(n * Math.cos(r)), s - Math.round(n * Math.sin(r))]]) : ((l = this.find(t, e, i, s, o)) && (r = Math.max(1, l.length - n),
        a = (a = l.slice(0, r)) && ji.combineAndSplitStraight(a)),
        a)
    }
    ,
    ji.combineAndSplitStraight = function(t) {
        for (var e, i = [], s = -1, n = t.length - 1, o = 0, a = 0; a < n; a++)
            (e = S.countTileDirection(t[a], t[a + 1])) != s ? i.push(t[a]) : 6 <= o && (i.push(t[a]),
            o = 0),
            o++,
            s = e;
        return i.push(t[a]),
        i
    }
    ,
    ji.SPLIT_GRID_LENGTH = 6;
    var Xi, Wi = ji;
    function ji() {
        Xi.call(this)
    }
    t(qi, "app.fateGame.city.control.AppCityControl", Yi = V),
    (N = qi.prototype).switchCityScene = function(t) {
        var e, i, s;
        void 0 === t && (t = !1),
        M.ins.curMapLogic || (M.ins.curMap = new os,
        M.ins.curMap.isCheckCity = !1),
        M.ins.curMapCfg = De.ins.getMapById("30001"),
        1 != M.ins.curMapLogic.isCheckCity && ((e = oi.ins.player) && (e.stopAllAct(),
        e.setAIAuto(!1)),
        t ? this.ifSwitching || (this.ifSwitching = !0,
        x.timer.once(1e3, this, this.resetSwitch),
        t = !(e = !0),
        Ji.ins.isInCity ? e = !1 : (i = De.ins.getMapById("" + A.ins.playerInfo.mapId),
        s = De.ins.getMapById("30001"),
        i.qMapresid == s.qMapresid ? t = us.ins.isSameMap = !0 : us.ins.isSameMap = !1),
        this.doSwitch(t, e, !0)) : this.doSwitch(!0, !1, !1))
    }
    ,
    N.resetSwitch = function() {
        qi.ins.ifSwitching = !1
    }
    ,
    N.doSwitch = function(t, e, i) {
        t && this.doSwitch2(t, e, i)
    }
    ,
    N.finishOpenView = function(t, e, i) {
        var s = this;
        x.timer.once(500, this, function() {
            s.doSwitch2(t, e, i)
        })
    }
    ,
    N.doSwitch2 = function(t, e, i) {
        var s = this;
        ve.ins.switchCityScene(b.create(this, function() {
            s.finishSwitch(i)
        }))
    }
    ,
    N.finishSwitch = function(t) {
        this.event("Event_Over")
    }
    ,
    e(1, qi, "ins", function() {
        return qi._ins || (qi._ins = new qi)
    }, Yi.prototype._$set_ins),
    qi._ins = null;
    var Yi, $i = qi;
    function qi() {
        this.addPlayerName = null,
        this.ifSwitching = !1,
        this.cityCopyPos = null,
        this.npcCopyPos = null,
        Yi.call(this)
    }
    var Ki;
    t(Qi, "app.fateGame.city.events.AppCityEvent", Ki = i);
    function Qi() {
        Ki.call(this)
    }
    t(ts, "app.fateGame.city.model.AppCityModel", Zi = V),
    (v = ts.prototype).setPlayerPos = function(t, e) {
        this._playerX = Math.max(0, t),
        this._playerY = Math.max(0, e)
    }
    ,
    v.getEquipInfo = function(t) {
        if (this.otherPlayers)
            for (var e = 0, i = this.otherPlayers.length; e < i; e++)
                if (t && t.equal(this.otherPlayers[e].playerId))
                    return this.otherPlayers[e];
        return null
    }
    ,
    v.getHideEquipInfo = function() {
        return this.otherPlayers
    }
    ,
    v.updatePlayers = function(t) {
        this.otherPlayers = t,
        this.event("cityUpdate")
    }
    ,
    v.addPlayer = function(t) {
        if (t && t.playerId && !t.playerId.equal(A.ins.playerInfo.personId)) {
            this.otherPlayers || (this.otherPlayers = []);
            for (var e = 0, i = this.otherPlayers.length; e < i; e++)
                if (t.playerId.equal(this.otherPlayers[e].playerId))
                    return this.otherPlayers[e] = t,
                    void this.event("cityUpdate", t.playerId);
            this.otherPlayers.push(t),
            this.event("cityUpdate", t.playerId)
        }
    }
    ,
    v.removePlayer = function(t) {
        if (this.otherPlayers)
            for (var e = this.otherPlayers.length - 1; 0 <= e; e--)
                this.otherPlayers[e] ? t && t.equal(this.otherPlayers[e].playerId) && (this.otherPlayers.splice(e, 1),
                this.event("cityUpdate", t)) : this.otherPlayers.splice(e, 1)
    }
    ,
    v.movePlayer = function(t, e, i) {
        if ((!t || !t.equal(oi.ins.player.info.personId)) && !g.isWXNew && this.otherPlayers)
            for (var s = 0, n = this.otherPlayers.length; s < n; s++)
                t && t.equal(this.otherPlayers[s].playerId) && (this.otherPlayers[s].position.x = e,
                this.otherPlayers[s].position.y = i,
                this.event("cityMove", t))
    }
    ,
    v.updateNpcs = function() {
        this.event("cityUpdateNpc")
    }
    ,
    e(0, v, "playerX", function() {
        return this._playerX
    }, Zi.prototype._$set_playerX),
    e(0, v, "playerY", function() {
        return this._playerY
    }, Zi.prototype._$set_playerY),
    e(0, v, "isInCity", function() {
        var t = ve.ins.cityScene;
        return null != t && null != t.parent
    }, Zi.prototype._$set_isInCity),
    e(1, ts, "ins", function() {
        return ts._ins || (ts._ins = new ts)
    }, Zi.prototype._$set_ins),
    ts._ins = null;
    var Zi, Ji = ts;
    function ts() {
        this.isInit = !1,
        this.isNeedRandomPos = !0,
        this.otherPlayers = null,
        this._playerX = 0,
        this._playerY = 0,
        Zi.call(this)
    }
    t(ss, "app.fateGame.f1.ColorFilterEx.AppColorMatrix", es = fe),
    (s = ss.prototype).SetBrightnessMatrix = function(t) {
        this.m_matrix && (this.m_matrix[0][4] = t,
        this.m_matrix[1][4] = t,
        this.m_matrix[2][4] = t)
    }
    ,
    s.SetContrastMatrix = function(t) {
        var e;
        this.m_matrix && (e = .5 * (127 - t),
        this.m_matrix[0][0] = t /= 127,
        this.m_matrix[1][1] = t,
        this.m_matrix[2][2] = t,
        this.m_matrix[0][4] = e,
        this.m_matrix[1][4] = e,
        this.m_matrix[2][4] = e)
    }
    ,
    s.SetSaturationMatrix = function(t) {
        var e, i;
        this.m_matrix && (this.m_matrix[0][0] = (i = .3086 * (e = 1 - t)) + t,
        this.m_matrix[1][0] = i,
        this.m_matrix[2][0] = i,
        this.m_matrix[0][1] = i = .6094 * e,
        this.m_matrix[1][1] = i + t,
        this.m_matrix[2][1] = i,
        this.m_matrix[0][2] = i = .082 * e,
        this.m_matrix[1][2] = i,
        this.m_matrix[2][2] = i + t)
    }
    ,
    s.SetHueMatrix = function(t) {
        if (this.m_matrix) {
            this.LoadIdentity();
            var e = new fe(3,3)
              , i = new fe(3,3)
              , s = new fe(3,3)
              , t = t * Math.PI / 180
              , n = Math.cos(t)
              , t = Math.sin(t)
              , o = .213
              , a = .715
              , r = .072;
            e.SetValue(0, 0, o),
            e.SetValue(1, 0, o),
            e.SetValue(2, 0, o),
            e.SetValue(0, 1, a),
            e.SetValue(1, 1, a),
            e.SetValue(2, 1, a),
            e.SetValue(0, 2, r),
            e.SetValue(1, 2, r),
            e.SetValue(2, 2, r),
            i.SetValue(0, 0, .787),
            i.SetValue(1, 0, -o),
            i.SetValue(2, 0, -o),
            i.SetValue(0, 1, -a),
            i.SetValue(1, 1, 1 - a),
            i.SetValue(2, 1, -a),
            i.SetValue(0, 2, -r),
            i.SetValue(1, 2, -r),
            i.SetValue(2, 2, .928),
            i.MultiplyNumber(n),
            s.SetValue(0, 0, -o),
            s.SetValue(1, 0, .143),
            s.SetValue(2, 0, -.787),
            s.SetValue(0, 1, -a),
            s.SetValue(1, 1, .14),
            s.SetValue(2, 1, a),
            s.SetValue(0, 2, .928),
            s.SetValue(1, 2, -.283),
            s.SetValue(2, 2, r),
            s.MultiplyNumber(t),
            e.Add(i),
            e.Add(s);
            for (var l = 0; l < 3; l++)
                for (var h = 0; h < 3; h++)
                    this.m_matrix[l][h] = e.GetValue(l, h)
        }
    }
    ,
    s.GetFlatArray = function() {
        if (!this.m_matrix)
            return null;
        for (var t = [], e = 0, i = 0; i < 4; i++)
            for (var s = 0; s < 5; s++)
                t[e] = this.m_matrix[i][s],
                e++;
        return t
    }
    ;
    var es, is = ss;
    function ss() {
        es.call(this, 5, 5),
        this.LoadIdentity()
    }
    t(as, "app.fateGame.map.AppMapBase", ns = V),
    (N = as.prototype).init = function(t) {
        this._curMapCfg = t
    }
    ,
    N.begin = function() {
        this.onBegin()
    }
    ,
    N.end = function(t) {
        x.timer.clearAll(this),
        this.onEnd(t)
    }
    ,
    N.beginStep1 = function() {
        this.onBeginStep1()
    }
    ,
    N.beginStep2 = function() {
        this.onBeginStep2()
    }
    ,
    N.reconnect = function() {
        this.onReconnect()
    }
    ,
    N.isPlayerControl = function() {
        return !1
    }
    ,
    N.needTeammate = function() {
        return !0
    }
    ,
    N.needUser = function() {
        return !0
    }
    ,
    N.canBeBack = function() {
        return !0
    }
    ,
    N.doNotLogout = function() {
        return !1
    }
    ,
    N.onBegin = function() {}
    ,
    N.onBeginStep1 = function() {}
    ,
    N.loadMapFinishLatter = function() {
        return !1
    }
    ,
    N.loadMapFinishLatterHandler = function() {}
    ,
    N.loadMapFinishLatterBeforeHandler = function() {}
    ,
    N.onBeginStep2 = function() {}
    ,
    N.onEnd = function(t) {}
    ,
    N.addMonsterListAfterDo = function(t) {}
    ,
    N.onReconnect = function() {}
    ,
    N.pathFinish = function() {}
    ,
    e(0, N, "cfg", function() {
        return this._curMapCfg
    }, ns.prototype._$set_cfg),
    e(0, N, "enterTime", function() {
        return this._enterTime
    }, ns.prototype._$set_enterTime),
    e(0, N, "needRoleIsShow", function() {
        return !1
    }, ns.prototype._$set_needRoleIsShow);
    var ns, os = as;
    function as() {
        this._curMapCfg = null,
        this._enterTime = NaN,
        this.isCalcByRole = !1,
        this.isPlaySoulToBody = !0,
        this.latterCount = 0,
        this.isCheckCity = !0,
        ns.call(this)
    }
    t(ls, "app.fateGame.map.AppMapControl", rs = V),
    (v = ls.prototype).isPlayerControlMap = function(t) {
        return void 0 === t && (t = -1),
        !0
    }
    ,
    v.getAllRoleCenterPos = function() {
        var t, e, i = pi.ins.roles, s = 0, n = 0;
        for (e in i)
            (t = i[e]) && t.info && t.isAlive();
        return [s, n]
    }
    ,
    v.removeRole = function(t, e) {
        this.currentScene.removeRole(t, e = void 0 === e ? !0 : e)
    }
    ,
    v.setFocusPlayer = function(t, e, i) {
        this.currentScene.setFocusPlayer(t, e = void 0 === e ? !1 : e, !0, !1, i = void 0 === i ? !0 : i)
    }
    ,
    v.addRole = function(t) {
        this.currentScene.addRole(t)
    }
    ,
    v.onMapChanged = function() {
        Ji.ins.isInCity
    }
    ,
    v.checkShowRealShadow = function() {
        return !0
    }
    ,
    v.clientChangeMap = function(t) {
        this.isLoginChangeMap = !1,
        ve.ins.gameScene && ve.ins.gameScene.reset(),
        this.clearTween(),
        this.leaveMap(this._preMapId, t),
        this.currentScene = ve.ins.gameScene,
        this.curMapCfg = De.ins.getMapById("" + t),
        this.curMap.end(t),
        this.curMap && (this.curMap = new os,
        this.curMap.init(this.curMapCfg)),
        this.curMap.begin(),
        this.curMapCfg.mapType,
        this.isChangingMap = !0,
        this.changeMapLoadScene()
    }
    ,
    v.clearTween = function() {
        x.timer.clearAll(this)
    }
    ,
    v.changeMap = function(t, e, i, s) {
        var n;
        void 0 === e && (e = !1),
        void 0 === i && (i = 0),
        void 0 === s && (s = 1e3),
        this.isChangingMap || (De.ins.getMapById("" + t) ? (n = !1,
        0 < i ? this.finishOpenLoadingView(t, e, i, s, n = !0) : this.finishOpenLoadingView(t, e, i, s, n)) : console.error("未知的地图id:" + t))
    }
    ,
    v.finishOpenLoadingView = function(t, e, i, s, n) {
        void 0 === e && (e = !1),
        void 0 === i && (i = 0),
        void 0 === s && (s = 1e3),
        void 0 === n && (n = !1);
        i = De.ins.getMapById("" + t);
        if (i) {
            if (n && g.isWXNew && 20801 == t && !g.isInZhanwuji && (g.isInZhanwuji = !0,
            (s = {}).pid = g.PID,
            s.gid = g.gid,
            s.dsanme = g.serverName,
            s.dsid = g.SERVER,
            n = A.ins.playerInfo,
            s.drid = n.personId + "",
            s.drname = n.nickName,
            s.drlevel = n.level,
            s.drctime = A.ins.createAccountSecondStr,
            n = w.window.SQSDK) && n.overGuideScene && w.onMiniGame && g.isWx() && n.overGuideScene(s, function() {}),
            this.isChangingMap = !0,
            this.event("Event_Change_Map_Begin", t),
            this.curMapCfg && this.curMap && this.curMap.canBeBack() && (this._lastCanBackMapId = this.curMapCfg.id),
            this.curMap && this.curMap.end(t),
            ve.ins.gameScene && ve.ins.gameScene.reset(),
            us.ins.s_scene_centerY = 0,
            this.clearTween(),
            this.leaveMap(this._preMapId, t),
            ve.ins.gameScene.bgView.isLoadingSmall = !0,
            this.needCheckRoleCenter = !1,
            !e) {
                var o, a, r = pi.ins.player;
                for (a in r.stopAllAct(),
                r.setAIAuto(!1),
                A.ins.getTeammates())
                    (o = A.ins.getTeammates()[a]).personId && o.personId.equal(A.ins.playerInfo.personId) || r && (r.stopAllAct(),
                    r.setAIAuto(!1))
            }
            x.timer.clear(this, this.changeMapLoadScene),
            we.ins.clearAll(),
            A.ins.playerInfo.mapId = t,
            Ji.ins.isInCity && 2 != i.mapType && 17 != i.mapType && $i.ins.switchCityScene(),
            this.isLoginChangeMap = e,
            this.curMapCfg = i,
            this.hasBossDrop = !1,
            this.monsterWave = 0,
            this.bornIndex = 0,
            this.currentScene = ve.ins.gameScene,
            this.curMap = new os,
            this.curMap.init(this.curMapCfg),
            this.curMap.begin(),
            this.changeMapLoadScene()
        } else
            console.error("未知的地图id:" + t)
    }
    ,
    v.leaveMap = function(t, e) {
        if (void 0 === e && (e = -1),
        !(t <= 0 || t == e)) {
            var i = De.ins.getMapById("" + t);
            if (0 < t && 0 < e) {
                t = De.ins.getMapById("" + e);
                if (i.qMapresid == t.qMapresid)
                    return
            }
            var s = []
              , n = this.currentScene.bgView.fragmentH * this.currentScene.bgView.fragmentW
              , o = ".jpg"
              , a = this.currentScene.bgView.bgSrc;
            0 < i.layer && (o = ".png",
            a = this.currentScene.bgView.bgSrc + "/pngs");
            for (var r = 0; r < n; r++) {
                var l = a + "/bgfm" + r + o;
                x.loader.getRes(l) && s.push(l)
            }
            if (l = this.currentScene.bgView.bgSrc + "/small.jpg",
            x.loader.getRes(l) && s.push(l),
            this.usingRess) {
                for (var l in this.usingRess)
                    s.push(l);
                this.usingRess = null
            }
            for (r = 0,
            n = s.length; r < n; r++)
                x.loader.clearRes(s[r], !0),
                x.loader.cancelLoadByUrl(s[r])
        }
    }
    ,
    v.changeMapLoadScene = function() {
        var t = this.getRealRes(this.curMapCfg.qMapresid);
        this.currentScene.updateMap(t.mapRes, b.create(this, this.changeMapLoadSceneFinish), this.curMapCfg.layer),
        this.checkUpdateZcRes(t, this.currentScene, this.curMapCfg.qMapresid),
        this.clearUpdataSceneSkin(),
        this.checkUpdateSceneSkin(t)
    }
    ,
    v.changeMapLoadSceneFinish = function() {
        this.event("Event_Load_Map_Finish")
    }
    ,
    v.checkUpdateZcRes = function(t, e, i) {
        t.isZc ? (null == this.oldZCRes && (this.oldZCRes = t.mapRes),
        x.timer.loop(6e4, this, this.updateZcRes, [e, i])) : (this.oldZCRes = null,
        x.timer.clear(this, this.updateZcRes))
    }
    ,
    v.clearUpdateZcRes = function() {
        this.oldZCRes = null,
        x.timer.clear(this, this.updateZcRes)
    }
    ,
    v.updateZcRes = function(t, e) {
        e = this.getRealRes(e);
        e.mapRes != this.oldZCRes && (this.oldZCRes = e.mapRes,
        this.zcChangeScene(this.oldZCRes, t))
    }
    ,
    v.zcChangeScene = function(t, e) {
        console.log("======zcChangeScene");
        var i, s = Ji.ins.isNeedRandomPos;
        Ji.ins.isNeedRandomPos = !1,
        i = De.ins.getMapById("30001"),
        e.updateMap(t, b.create(this, function() {
            Ji.ins.isNeedRandomPos = s
        }), i.layer)
    }
    ,
    v.checkUpdateSceneSkin = function(t) {
        t.isScenSkin ? (null == this.m_oldSceneRes && (this.m_oldSceneRes = t.mapRes),
        x.timer.loop(6e4, this, this.updateSceneZcRes)) : this.clearUpdataSceneSkin()
    }
    ,
    v.clearUpdataSceneSkin = function() {
        this.m_oldSceneRes = null,
        x.timer.clear(this, this.updateSceneZcRes)
    }
    ,
    v.updateSceneZcRes = function() {
        Ji.ins.isInCity
    }
    ,
    v.getRealRes = function(t) {
        De.ins.getMapById("30001");
        return {
            mapRes: t,
            isZc: !1
        }
    }
    ,
    e(0, v, "isCanMoveCollectIng", function() {
        return this._isCanMoveCollectIng
    }, function(t) {
        this._isCanMoveCollectIng = t
    }),
    e(0, v, "backToCity", function() {
        return this._backToCity
    }, function(t) {
        this._backToCity = t
    }),
    e(0, v, "curMapCfg", function() {
        return this._curMapCfg
    }, function(t) {
        this._curMapCfg = t
    }),
    e(0, v, "isChangingMap", function() {
        return this._isChangingMap
    }, function(t) {
        this._isChangingMap != t && (this._isChangingMap = t,
        this.event("Event_Change_Map", t))
    }),
    e(0, v, "needCheckRoleCenter", function() {
        return this._needCheckRoleCenter
    }, function(t) {
        this._needCheckRoleCenter = t
    }),
    e(0, v, "lastCanBackMapId", function() {
        return this._lastCanBackMapId
    }, rs.prototype._$set_lastCanBackMapId),
    e(0, v, "curMapLogic", function() {
        return this.curMap
    }, rs.prototype._$set_curMapLogic),
    e(0, v, "preMapId", function() {
        return this._preMapId
    }, rs.prototype._$set_preMapId),
    e(0, v, "curScene", function() {
        return ve.ins.cityScene
    }, rs.prototype._$set_curScene),
    e(0, v, "curPlayer", function() {
        return oi.ins.player
    }, rs.prototype._$set_curPlayer),
    e(1, ls, "ins", function() {
        return ls._ins = null == ls._ins ? new ls : ls._ins
    }, rs.prototype._$set_ins),
    ls.showKillMsg = !1,
    ls._ins = null,
    ls.SCENE_MOVE_TIME = .3,
    O(ls, ["DEBUG_SHOW_REAL_SHADOW", function() {
        return this.DEBUG_SHOW_REAL_SHADOW = -1
    }
    , "WUHUNTYPEOBJ", function() {
        return this.WUHUNTYPEOBJ = {
            11: 1.5,
            12: 1.5
        }
    }
    ]);
    var rs, M = ls;
    function ls() {
        this.isCollectIng = !1,
        this._isCanMoveCollectIng = !1,
        this._changeMapHandler = null,
        this.currentScene = null,
        this.isLoginChangeMap = !1,
        this._preMapId = 0,
        this._countDown = -1,
        this._pauseCountDown = 0,
        this._lastCanBackMapId = 0,
        this.usingRess = null,
        this.bornIndex = 0,
        this.hasBossDrop = !1,
        this._isChangingMap = !1,
        this.monsterWave = 0,
        this.currentWave = 0,
        this._curMapCfg = null,
        this.forbidMove = !1,
        this.onceMapPos = null,
        this._backToCity = !1,
        this.curMap = null,
        this.isAskChangeingMap = !1,
        this._needCheckRoleCenter = !1,
        this.oldZCRes = null,
        this.m_oldSceneRes = null,
        rs.call(this),
        this.on("Event_Change_Map_Finish", this, this.onMapChanged),
        this.on("Change_CityScene", this, this.onMapChanged)
    }
    var hs;
    t(cs, "app.fateGame.map.AppRoleEvent", hs = i);
    function cs() {
        hs.call(this)
    }
    t(ds, "app.fateGame.map.model.AppMapModel", ps = V),
    (s = ds.prototype).getNpcRes = function(t) {
        var e;
        return t && t.npcresid ? -1 != t.npcresid.indexOf("|") ? (e = t.npcresid.split("|"),
        this.getIsDay() ? e[0] : e[1]) : t.npcresid : ""
    }
    ,
    s.getIsDay = function() {
        return !0
    }
    ,
    s.getCityRoleMaxNum = function() {
        return I.isIphoneMemLesThanOneG ? 5 : 50
    }
    ,
    e(0, s, "s_moveSceneSmoothTime", function() {
        return this._s_moveSceneSmoothTime
    }, function(t) {
        this._s_moveSceneSmoothTime = t
    }),
    e(0, s, "isSameMap", function() {
        return this._isSameMap
    }, function(t) {
        this._isSameMap = t
    }),
    e(0, s, "s_scene_centerY", function() {
        return this._s_scene_centerY
    }, function(t) {
        this._s_scene_centerY = t
    }),
    e(0, s, "isServerFighting", function() {
        return this._isServerFighting
    }, function(t) {
        this._isServerFighting = t
    }),
    e(1, ds, "ins", function() {
        return ds._ins = null == ds._ins ? new ds : ds._ins
    }, ps.prototype._$set_ins),
    ds.getSceneIsDay = function() {
        return !0
    }
    ,
    ds._ins = null;
    var ps, us = ds;
    function ds() {
        this._s_moveSceneSmoothTime = .3,
        this._s_scene_centerY = 0,
        this._isServerFighting = !1,
        this._isSameMap = !1,
        this.focusX = 0,
        this.focusY = 0,
        ps.call(this)
    }
    t(_s, "app.fateGame.notice.AppNoticeModel", gs = V),
    (N = _s.prototype).addToGeneral = function(t, e) {
        _s.addMsgHandler && (!_s.showMsgIdx || _s.showMsgIdx.length <= 0 || 0 <= _s.showMsgIdx.indexOf(e)) ? (_s.addMsgHandler.runWith([t]),
        _s.addMsgHandler.once && (_s.addMsgHandler = null)) : _s.delayAddMsgs ? x.timer.once(_s.delayAddMsgs, this, function() {
            ti.ins.handleAdd(t)
        }) : ti.ins.handleAdd(t)
    }
    ,
    N.clear = function() {}
    ,
    e(1, _s, "ins", function() {
        return _s._inst || (_s._inst = new _s)
    }, gs.prototype._$set_ins),
    _s._inst = null,
    _s.showMsgIdx = null,
    _s.addMsgHandler = null,
    _s.delayAddMsgs = 0;
    var gs, ms = _s;
    function _s() {
        gs.call(this)
    }
    t(vs, "app.fateGame.role.AppCityPlayerAIManager", fs = P),
    (v = vs.prototype).loop = function() {
        I.AUTO && !this.player.isControlByPlayer && fs.prototype.loop.call(this)
    }
    ,
    v.destroy = function() {
        fs.prototype.destroy.call(this),
        this.recover()
    }
    ,
    v.recover = function(t) {
        void 0 === t && (t = !0),
        this.player = null,
        this.setAuto(!1),
        fs.prototype.recover.call(this, !1),
        t && dt.recover("app.fateGame.role.AppCityPlayerAIManager", this)
    }
    ;
    var fs, ys = vs;
    function vs() {
        fs.call(this),
        this.actionList = []
    }
    var xs;
    t(ws, "app.fateGame.role.AppPlayerDetailInfo", xs = T);
    function ws() {
        xs.call(this)
    }
    t(Is, "app.fateGame.role.AppRoleInfo", bs = V),
    (i = Is.prototype).isRole = function() {
        return this.isPlayer()
    }
    ,
    i.isPlayer = function() {
        return 1 == this.type
    }
    ,
    i.isPlayerControlRole = function() {
        return 1 == this.type
    }
    ,
    i.isNpc = function() {
        return 3 == this.type
    }
    ,
    i.getCurShowModels = function(t) {
        var e = "";
        return e = t && this._showModels && "" != this._showModels ? this._showModels : e
    }
    ,
    e(0, i, "showPlayerId", function() {
        return this._showPlayerId
    }, function(t) {
        this._showPlayerId = t
    }),
    e(0, i, "ownPlayerId", function() {
        return this._ownPlayerId
    }, function(t) {
        this._ownPlayerId = t
    }),
    e(0, i, "nickName", function() {
        return this._nickName
    }, function(t) {
        this._nickName = t
    }),
    e(0, i, "teamPartnerNum", function() {
        return this._teamPartnerNum
    }, function(t) {
        this._teamPartnerNum = t
    }),
    e(0, i, "sex", function() {
        return this._sex
    }, function(t) {
        this._sex = t
    }),
    e(0, i, "skinId", function() {
        return this._skinId
    }, function(t) {
        this._skinId = t
    }),
    e(0, i, "type", function() {
        return this._type
    }, function(t) {
        this._type = t
    }),
    e(0, i, "isDead", function() {
        return this._isDead
    }, function(t) {
        this._isDead = t
    }),
    e(0, i, "mapId", function() {
        return this._mapId
    }, function(t) {
        this._mapId = t
    }),
    e(0, i, "personId", function() {
        return this._personId
    }, function(t) {
        this._personId = t
    }),
    e(0, i, "currentTarget", function() {
        return this._currentTargetId ? pi.ins.getRole(this._currentTargetId) : null
    }, function(t) {
        var e;
        this._currentTargetId && t && t.info && t.info.personId && this._currentTargetId.equal(t.info.personId) || (e = this.currentTarget,
        t && e && t != e && this.personId && this.personId.equal(A.ins.playerInfo.personId) && e.hideTargetCircle(),
        t && t.info && t.info.personId ? (this._currentTargetId = t.info.personId,
        t.selected(),
        this.personId && this.personId.equal(A.ins.playerInfo.personId) && !this._currentTargetId.equal(this.personId) && !A.ins.checkIsMyPlayer(this._currentTargetId) && t.showTargetCircle()) : this._currentTargetId = null)
    }),
    e(0, i, "createTime", function() {
        return this._createTime
    }, function(t) {
        this._createTime = t
    }),
    e(0, i, "level", function() {
        return this._level
    }, function(t) {
        this._level != t && (this._level = t,
        this.event("update_lv"))
    }),
    e(0, i, "targetY", function() {
        return this._targetY
    }, function(t) {
        this._targetY = t
    }),
    e(0, i, "targetX", function() {
        return this._targetX
    }, function(t) {
        this._targetX = t
    }),
    e(0, i, "showID", function() {
        return this._showID && "" != this._showID ? this._showID : null
    }, function(t) {
        t != this._showID && (this._showID = t,
        this.event("update_view"))
    }),
    e(0, i, "mapCfg", function() {
        return De.ins.getMapById("" + A.ins.playerInfo.mapId)
    }, bs.prototype._$set_mapCfg);
    var bs, Ss = Is;
    function Is() {
        this._targetX = NaN,
        this._targetY = NaN,
        this._level = 0,
        this._personId = null,
        this._showPlayerId = null,
        this._ownPlayerId = null,
        this.modelId = 0,
        this._nickName = null,
        this._showModels = null,
        this._forceAlpha = !1,
        this._teamPartnerNum = 0,
        this._playerName = "",
        this.clientSetting = null,
        this._sex = 0,
        this._skinId = 0,
        this._type = 0,
        this._mapId = 30001,
        this.x = 0,
        this.y = 0,
        this.q_weight = 100,
        this._isDead = !1,
        this._num = 0,
        this._currentTargetId = null,
        this._createTime = 0,
        this._isFirst = !0,
        this._showID = null,
        bs.call(this)
    }
    t(Ps, "app.PlatformKS", Cs = Di),
    (s = Ps.prototype).init = function() {
        var t, i = this;
        (Di.inst = this).baseInit(),
        c.s_needReplaces.push("j1cpiq56.com"),
        wt.init(),
        !this.mini.exitMiniProgram && this.mini.exitApplication && (this.mini.exitMiniProgram = this.mini.exitApplication),
        this.mini && (t = this.mini.getLaunchOptionsSync(),
        console.info("首次开启 launchOption" + JSON.stringify(t)),
        this.dealKsReward(t),
        this.mini.checkSliderBarIsAvailable({
            success: function(t) {
                var e = i.reachClientVersion("12.11.10");
                Ps.Support_Side = t.available && e,
                Ps.Support_Side_Navigate = i.reachClientVersion("13.4.40"),
                console.info("checkSliderBarIsAvailable:" + JSON.stringify(t) + " ,version:" + e + " ,navigate:" + Ps.Support_Side_Navigate)
            }
        }),
        this.mini.onShow(function(t) {
            console.info("回到前台onShow" + JSON.stringify(t)),
            Ps.curScene = t.scene,
            i.dealKsReward(t)
        }))
    }
    ,
    s.dealKsReward = function(t) {
        "021020" != t.scene && "991020" != t.scene || (Ps.curScene = "021012"),
        "retention_desk_ios" == t.from && (Ps.curScene = "021012"),
        "shortcut_app" == t.from && (Ps.curScene = "021012"),
        "sidebar_new" == t.from && (Ps.curScene = "021036"),
        Ps.ins.event("Scene_Info", Ps.curScene)
    }
    ,
    s.queueSdkInit = function(t) {
        w.window.alert = c.alert2;
        Ps.onGetScene && Ps.onGetScene.run(),
        this.setKeepScreenOn(),
        c.USE_LOGIN = w.now() - c.USE_LOGIN,
        t.run()
    }
    ,
    s.sdkLogin = function(e) {
        var i = this;
        Ht.lastError += "|sdkLogin",
        p.ins.m_loginPanel || (g.initReplace("" + g.gid),
        p.ins.openLoginPanel()),
        Ht.lastError += "|sdkLogin2",
        c.send("3710003"),
        w.window.SQSDK.login({
            pid: g.PID,
            gid: g.gid
        }, function(t) {
            i.wxToken = t.token,
            c.token = encodeURI(t.token),
            c.time = t.time,
            c.sign = t.user.sign,
            Ht.lastError += "|sdkLogin2Back",
            e.run()
        }, function(t) {
            t ? console.info("SQSDK.login error: code: " + t.code + ", msg: " + msg) : console.info("SQSDK.login error")
        })
    }
    ,
    s.loadSubModule = function(t) {
        var e = this.mini;
        g.isWXNew ? (c.isloadSub = !0,
        t && t.run()) : w.window.wxzip && e.loadSubpackage({
            name: "subpackModule",
            success: function() {
                require("subpackModule/subpackModule.js"),
                console.info("加载分包4成功"),
                e.loadSubpackage({
                    name: "module",
                    success: function() {
                        require("module/module.js"),
                        console.info("加载分包5成功"),
                        e.loadSubpackage({
                            name: "module1",
                            success: function() {
                                require("module1/module1.js"),
                                console.info("加载分包6成功"),
                                c.isloadSub = !0,
                                t && t.run()
                            },
                            fail: function() {
                                console.info("加载分包6失败"),
                                c.alert2("加载分包6失败", c.refresh)
                            }
                        })
                    },
                    fail: function() {
                        console.info("加载分包5失败"),
                        c.alert2("加载分包5失败", c.refresh)
                    }
                })
            },
            fail: function() {
                console.info("加载分包4失败"),
                c.alert2("加载分包4失败", c.refresh)
            }
        })
    }
    ,
    s.loadSubpack2 = function(t, e) {
        var i;
        c.allMainJsSucc ? e && e.run() : (i = this.mini).loadSubpackage({
            name: "subpack",
            success: function() {
                require("subpack/subpack.js"),
                console.info("加载分包1成功"),
                i.loadSubpackage({
                    name: "main0",
                    success: function() {
                        require("main0/main0.js"),
                        console.info("加载分包2成功"),
                        i.loadSubpackage({
                            name: "main1",
                            success: function() {
                                require("main1/main1.js"),
                                console.info("加载分包3成功"),
                                c.allMainJsSucc = !0,
                                w.window.wxzip && i.loadSubpackage({
                                    name: "subpackModule",
                                    success: function() {
                                        require("subpackModule/subpackModule.js"),
                                        console.info("加载分包4成功"),
                                        i.loadSubpackage({
                                            name: "module",
                                            success: function() {
                                                require("module/module.js"),
                                                console.info("加载分包5成功"),
                                                i.loadSubpackage({
                                                    name: "module1",
                                                    success: function() {
                                                        require("module1/module1.js"),
                                                        console.info("加载分包6成功"),
                                                        c.allMainJsSucc = !0,
                                                        e && e.run()
                                                    },
                                                    fail: function() {
                                                        console.info("加载分包6失败"),
                                                        c.alert2("加载分包6失败", c.refresh)
                                                    }
                                                })
                                            },
                                            fail: function() {
                                                console.info("加载分包5失败"),
                                                c.alert2("加载分包5失败", c.refresh)
                                            }
                                        })
                                    },
                                    fail: function() {
                                        console.info("加载分包4失败"),
                                        c.alert2("加载分包4失败", c.refresh)
                                    }
                                })
                            },
                            fail: function() {
                                console.info("加载分包3失败"),
                                c.alert2("加载分包3失败", c.refresh)
                            }
                        })
                    },
                    fail: function() {
                        console.info("加载分包2失败"),
                        c.alert2("加载分包2失败", c.refresh)
                    }
                })
            },
            fail: function() {
                console.info("加载分包1失败"),
                c.alert2("加载分包1失败", c.refresh)
            }
        })
    }
    ,
    s.initPayType = function(t, e, i) {
        "1" == a.getItem("paytype") ? g.m_paySwitch = 0 : (g.m_paySwitch = 1,
        0 == c.isNewRole && x.timer.once(2e4, this, this.checkFileMorethan, [!0]))
    }
    ,
    s.updatePayType = function(t, e, i) {}
    ,
    s.pay = function(t) {
        w.window.SQSDK.pay(t, function() {})
    }
    ,
    s.preCreateRole = function(t) {}
    ,
    s.createRole = function(t) {}
    ,
    s.enterGame = function(t) {}
    ,
    s.updateLevel = function(t) {}
    ,
    s.showModal = function(t, e, i) {
        this.mini.showModal({
            title: e || "提示",
            content: t,
            showCancel: !1,
            complete: function() {
                i && i()
            }
        })
    }
    ,
    s.setClipboardData = function(t) {
        this.mini && this.mini.setClipboardData({
            data: t,
            success: function(t) {}
        })
    }
    ,
    s.reachClientVersion = function(t) {
        if ("" == t)
            return !0;
        if (!w.window.ks)
            return !1;
        var e = this.getClientVersion();
        if (console.log("获取当前快手版本----" + e),
        "" == e)
            return !1;
        for (var i = t.split("."), s = e.split("."), n = 0, n = 0; n < i.length && n < s.length; n++) {
            if (parseInt(s[n]) > parseInt(i[n]))
                return !0;
            if (parseInt(s[n]) < parseInt(i[n]))
                return !1
        }
        return n == i.length
    }
    ,
    s.getClientVersion = function() {
        var t, e = "99.99.99.99";
        return w.window.ks && (t = w.window.ks.getSystemInfoSync()) && (e = t.version,
        console.log("快手版本信息" + e)),
        e
    }
    ,
    e(0, s, "mini", function() {
        return w.window.ks
    }, Cs.prototype._$set_mini),
    e(1, Ps, "ins", function() {
        return Ps._ins = Ps._ins || new Ps
    }, Cs.prototype._$set_ins),
    Ps.onGetScene = null,
    Ps.curScene = "",
    Ps._ins = null,
    Ps.Support_Side = !1,
    Ps.Support_Side_Navigate = !1;
    var Cs, ks = Ps;
    function Ps() {
        Cs.call(this)
    }
    t(As, "app.PlatformVivo", Ts = Di),
    (N = As.prototype).init = function() {
        (Di.inst = this).baseInit(),
        c.s_needReplaces.push("j1cpiq56.com"),
        bt.init(),
        !this.mini.exitMiniProgram && this.mini.exitApplication && (this.mini.exitMiniProgram = this.mini.exitApplication)
    }
    ,
    N.queueSdkInit = function(t) {
        w.window.alert = c.alert2;
        As.onGetScene && As.onGetScene.run(),
        this.setKeepScreenOn(),
        c.USE_LOGIN = w.now() - c.USE_LOGIN,
        t.run()
    }
    ,
    N.sdkLogin = function(e) {
        var i = this;
        Ht.lastError += "|sdkLogin",
        p.ins.m_loginPanel || (g.initReplace("" + g.gid),
        p.ins.openLoginPanel()),
        Ht.lastError += "|sdkLogin2",
        c.send("3710003"),
        w.window.SQSDK.login({
            pid: g.PID,
            gid: g.gid
        }, function(t) {
            i.wxToken = t.token,
            c.token = encodeURI(t.token),
            c.time = t.time,
            c.sign = t.user.sign,
            Ht.lastError += "|sdkLogin2Back",
            console.log("小游戏暂时不支持版本更新"),
            e.run()
        })
    }
    ,
    N.initPayType = function(t, e, i) {
        "1" == a.getItem("paytype") || this.getIsTishenSer() && "563" == g.PID ? g.m_paySwitch = 0 : ("648" != g.PID && (g.m_paySwitch = 1),
        0 == c.isNewRole && x.timer.once(2e4, this, this.checkFileMorethan, [!0]))
    }
    ,
    N.updatePayType = function(t, e, i) {}
    ,
    N.pay = function(t) {
        0 != g.m_paySwitch && w.window.SQSDK.pay(t, function() {})
    }
    ,
    N.preCreateRole = function(t) {}
    ,
    N.createRole = function(t) {}
    ,
    N.enterGame = function(t) {}
    ,
    N.updateLevel = function(t) {}
    ,
    N.showModal = function(t, e, i) {
        this.mini && this.mini.showDialog({
            title: e || "提示",
            message: t,
            buttons: [{
                text: "确定",
                color: "#000000"
            }],
            complete: function() {
                i && i()
            }
        })
    }
    ,
    N.setClipboardData = function(t) {
        this.mini && this.mini.setClipboardData({
            text: t,
            success: function(t) {}
        })
    }
    ,
    e(0, N, "mini", function() {
        return w.window.qg
    }, Ts.prototype._$set_mini),
    e(1, As, "ins", function() {
        return As._ins = As._ins || new As
    }, Ts.prototype._$set_ins),
    As.onGetScene = null,
    As.curScene = 0,
    As._ins = null;
    var Ts, Ls = As;
    function As() {
        Ts.call(this)
    }
    t(Ms, "app.PlatformWechat", Rs = Di),
    (P = Ms.prototype).init = function() {
        (Di.inst = this).baseInit(),
        c.s_needReplaces.push("j1cpiq56.com"),
        St.init()
    }
    ,
    P.queueSdkInit = function(t) {
        w.window.alert = c.alert2;
        var e, i = !0, s = (Ms.dataReport({
            pid: g.PID,
            gid: g.gid,
            event_name: "white_load"
        }),
        w.window.wx), n = w.window.qq;
        Ht.lastError += "|queueSdkInit",
        c.send("3710002"),
        n ? (e = n.getLaunchOptionsSync(),
        this.setQueryByShare(e.query),
        this.setActivity(e.query),
        this.setKeepScreenOn()) : (x.timer.once(200, Ms, Ms.dataReport, [{
            pid: g.PID,
            gid: g.gid,
            event_name: "enter_game"
        }]),
        e = s.getLaunchOptionsSync(),
        console.log("onshow:" + JSON.stringify(e)),
        Ms.curScene = e.scene,
        Ms.onGetScene && Ms.onGetScene.run(),
        this.setKeepScreenOn(),
        this.setQueryByShare(e.query),
        this.setActivity(e.query)),
        i && (i = !1,
        c.USE_LOGIN = w.now() - c.USE_LOGIN,
        t.run())
    }
    ,
    P.loadSubModule = function(t) {
        var e = w.window.wx;
        console.log("--wx loadSubModule: " + w.now()),
        c.USE_SUBMODULE = w.now(),
        g.isWXNew ? (c.isloadSub = !0,
        t && t.run()) : e.loadSubpackage({
            name: "module",
            success: function() {
                console.log("加载module1成功"),
                e.loadSubpackage({
                    name: "module1",
                    success: function() {
                        console.log("加载module2成功"),
                        e.loadSubpackage({
                            name: "module2",
                            success: function() {
                                console.log("加载module3成功"),
                                c.isloadSub = !0,
                                c.USE_SUBMODULE = w.now() - c.USE_SUBMODULE,
                                t && t.run()
                            },
                            fail: function() {
                                console.log("加载module3失败"),
                                c.alert2("加载module3失败", c.refresh)
                            }
                        })
                    },
                    fail: function() {
                        console.log("加载module2失败"),
                        c.alert2("加载module2失败", c.refresh)
                    }
                })
            },
            fail: function() {
                console.log("加载module1失败"),
                c.alert2("加载module1失败", c.refresh)
            }
        })
    }
    ,
    P.loadSubpack2 = function(t, e) {
        var i = this
          , s = (require("subpack.js"),
        c.USE_LOADMAIN = w.now(),
        w.window.wx);
        console.log("开始加载分包"),
        s.loadSubpackage({
            name: "subpack",
            success: function() {
                console.log("加载分包1成功"),
                t ? i.loadSubpack3(e) : e && e.run()
            },
            fail: function() {
                console.log("加载分包1失败"),
                c.alert2("加载分包1失败", c.refresh)
            }
        })
    }
    ,
    P.loadSubpack3 = function(t) {
        var e = w.window.wx;
        console.log("开始加载分包"),
        e.loadSubpackage({
            name: "subpack1",
            success: function() {
                console.log("加载分包2成功"),
                c.allMainJsSucc = !0,
                c.USE_LOADMAIN = w.now() - c.USE_LOADMAIN,
                t && t.run()
            },
            fail: function() {
                console.log("加载分包2失败"),
                c.alert2("加载分包2失败", c.refresh)
            }
        })
    }
    ,
    P.sdkLogin = function(n) {
        var o = this
          , t = (c.USE_SDK_LOGIN = w.now(),
        p.ins.m_loginPanel || (g.initReplace("" + g.gid),
        p.ins.openLoginPanel()),
        Ms.dataReport({
            pid: g.PID,
            gid: g.gid,
            event_name: "register_arrive"
        }, function() {
            c.send("1000002")
        }),
        w.window.SQSDK);
        c.send("1000001"),
        t.login({
            pid: g.PID,
            gid: g.gid
        }, function(t) {
            Ms.ins.wxToken = t.token,
            c.token = encodeURI(t.token),
            c.time = t.time,
            w.window.wx && !w.window.qq ? c.sign = t.user.sign : c.sign = t.sign,
            c.send("1000003");
            var e, i, s = o.mini, t = !1;
            (t = s && (e = s.getSystemInfoSync()) && e.platform && ("windows" == e.platform || "devtools" == e.platform || "mac" == e.platform) ? !0 : t) || w.window.qq || !s.getUpdateManager ? (console.log("qq小游戏暂时不支持版本更新"),
            c.USE_SDK_LOGIN = w.now() - c.USE_SDK_LOGIN,
            n.run()) : ((i = s.getUpdateManager()).onCheckForUpdate(function(t) {
                t.hasUpdate ? (s.showLoading({
                    title: "版本有更新,下载中",
                    mask: !0
                }),
                console.log("微信小游戏版本有更新,下载中")) : (console.log("版本无更新,进入游戏"),
                c.USE_SDK_LOGIN = w.now() - c.USE_SDK_LOGIN,
                n.run())
            }),
            i.onUpdateReady(function() {
                console.log("微信小游戏,下载好,请求重启"),
                i.applyUpdate()
            }),
            i.onUpdateFailed(function() {
                s.hideLoading({}),
                Ms.ins.refresh("版本更新失败，请退出游戏再打开", "onUpdateFailed")
            }))
        })
    }
    ,
    P.initPayType = function(t, e, i) {
        var s, n, o = this;
        "1" == a.getItem("paytype") ? g.m_paySwitch = 0 : ("648" == g.PID ? (s = w.window.SQSDK,
        (n = {}).dsid = t,
        n.drid = e,
        n.drlevel = i,
        s.getIOSGameLink(n, function(t) {
            1 == t.enable ? (o._QQIOSPayLink = t.link,
            g.m_paySwitch = 1) : g.m_paySwitch = 0
        })) : "484" == g.PID && w.onIOS ? (s = w.window.SQSDK,
        (n = {}).dsid = t,
        n.drid = e,
        n.drlevel = i,
        s.checkLimit(n, function(t) {
            1 == t.state && 1 == t.data.switch ? g.m_paySwitch = 1 : g.m_paySwitch = 0
        })) : g.m_paySwitch = 1,
        0 == c.isNewRole && x.timer.once(2e4, this, this.checkFileMorethan, [!0]))
    }
    ,
    P.updatePayType = function(t, e, i) {
        var s, n, o = this;
        "1" == a.getItem("paytype") || this.getIsTishenSer() && w.onIOS && ("484" == g.PID || "648" == g.PID) || ("648" == g.PID ? (g.m_paySwitch = 0,
        s = w.window.SQSDK,
        (n = {}).dsid = t,
        n.drid = e,
        n.drlevel = i,
        s.getIOSGameLink(n, function(t) {
            1 == t.enable ? (o._QQIOSPayLink = t.link,
            g.m_paySwitch = 1) : g.m_paySwitch = 0
        })) : "484" == g.PID && w.onIOS && (s = w.window.SQSDK,
        (n = {}).dsid = t,
        n.drid = e,
        n.drlevel = i,
        s.checkLimit(n, function(t) {
            1 == t.state && 1 == t.data.switch ? g.m_paySwitch = 1 : g.m_paySwitch = 0
        })))
    }
    ,
    P.pay = function(t) {
        var e;
        0 != g.m_paySwitch && (e = w.window.SQSDK,
        w.window.qq || (t.pid = t.pid || g.PID,
        t.gid = t.gid || g.gid),
        e.pay(t, function() {}))
    }
    ,
    P.wxShare = function(t) {
        var e = this.mini
          , i = {};
        i.title = Ms.getShareTitle(),
        i.imageUrl = Di.getShareImgs(),
        i.query = t,
        e.shareAppMessage({
            title: i.title,
            imageUrl: i.imageUrl,
            query: i.query
        })
    }
    ,
    P.setQueryByShare = function(t) {
        var e = a.getItem("shareQuery");
        try {
            e && "" != e && a.removeItem("shareQuery")
        } catch (t) {}
        var e = !1;
        (e = t && t.guid && t.serverId ? !0 : e) && ((e = {}).guid = t.guid,
        e.serverId = t.serverId,
        a.setItem("shareQuery", JSON.stringify(e)),
        Ms.dataReport({
            gid: g.gid,
            pid: g.PID,
            event_name: "share_card_click"
        }))
    }
    ,
    P.setActivity = function(t) {
        var e = a.getItem("activityTime")
          , i = null;
        try {
            e && "" != e && (i = JSON.parse(e).actTime,
            a.removeItem("activityTime"))
        } catch (t) {}
        var s, n, e = !1;
        (e = t && t.activity && ("cost" == t.activity || "come1" == t.activity || "come2" == t.activity || "come3" == t.activity) ? !0 : e) && (e = {},
        s = (s = new Date).getMonth() + "," + s.getDay(),
        e.actTime = s,
        e.params = t.activity,
        n = !0,
        i && (n = s != i && "cost" != t.activity),
        e.showPanel = n,
        a.setItem("activityTime", JSON.stringify(e))),
        t && t.act && "coupons" == t.act && (this._QQTicketSign = t.act)
    }
    ,
    P.adSceneReach = function(t, e) {
        var i = w.window.ADSDK;
        i && i.adSceneReach && (console.log("ADSDK.adSceneReach call"),
        i.adSceneReach(t, function() {
            e.run()
        }))
    }
    ,
    P.rewardedVideoAdCreate = function(t, e, i) {
        var s = w.window.ADSDK;
        s && s.rewardedVideoAdCreate && (console.log("ADSDK.rewardedVideoAdCreate call"),
        s.rewardedVideoAdCreate(t, function() {
            e.run()
        }, function(t) {
            i.runWith(t)
        }))
    }
    ,
    P.rewardedVideoAdShow = function(t, e) {
        var i = w.window.ADSDK;
        i && i.rewardedVideoAdShow && (console.log("ADSDK.rewardedVideoAdShow call"),
        i.rewardedVideoAdShow(t, function() {
            e.run()
        }))
    }
    ,
    P.rewardedVideoAdDestory = function(t, e) {
        var i = w.window.ADSDK;
        i && i.rewardedVideoAdDestory && (console.log("ADSDK.rewardedVideoAdDestory call"),
        i.rewardedVideoAdDestory(t, function() {
            e.run()
        }))
    }
    ,
    P.wxInitSubscribeMessage = function(t, e, i) {
        var s, n = w.window.SQSDK;
        n && n.showSubscribe && ((s = {}).scene = t,
        s.pid = g.PID,
        s.gid = g.gid,
        s.event_name = "enter_game_by_share",
        s.dsanme = g.serverName,
        s.dsid = g.SERVER,
        s.drid = i.personId + "",
        s.drname = i.nickName,
        s.drlevel = i.level,
        s.drtime = i.createTime,
        n.initSubscribe(s, e))
    }
    ,
    P.wxRequestSubscribeMessage = function(t, e, i) {
        var s, n = w.window.SQSDK;
        n && n.showSubscribe && ((s = {}).scene = t,
        s.pid = g.PID,
        s.gid = g.gid,
        s.event_name = "enter_game_by_share",
        s.dsanme = g.serverName,
        s.dsid = g.SERVER,
        s.drid = i.personId + "",
        s.drname = i.nickName,
        s.drlevel = i.level,
        s.drtime = i.createTime,
        n.showSubscribe(s, e))
    }
    ,
    P.wxGetSetting = function(e) {
        w.window.wx.getSetting({
            withSubscriptions: !0,
            success: function(t) {
                console.log(t.subscriptionsSetting),
                e.runWith(t.subscriptionsSetting)
            }
        })
    }
    ,
    P.wxOpenSetting = function(e) {
        w.window.wx.openSetting({
            success: function(t) {
                console.log(t.authSetting),
                e.runWith(t)
            }
        })
    }
    ,
    P.onTouchEnd = function(t) {
        w.window.wx.onTouchEnd(t)
    }
    ,
    P.offTouchEnd = function(t) {
        w.window.wx.offTouchEnd(t)
    }
    ,
    P.setClipboardData = function(t) {
        this.mini.setClipboardData({
            data: t,
            success: function(t) {}
        })
    }
    ,
    P.sendSmsCode = function(t, e) {
        var i = w.window.wx;
        i && i.request({
            url: "https://us-api.39ej7e.com/wxmgame/smsVerifyCode",
            data: {
                token: decodeURIComponent(Ms.ins.wxToken),
                phone: t,
                pid: g.PID,
                gid: g.gid
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                200 == t.statusCode && e.runWith(t.data)
            }
        })
    }
    ,
    P.bindPhone = function(t, e, i) {
        var s = w.window.wx;
        s && s.request({
            url: "https://us-api.39ej7e.com/wxmgame/bindPhone",
            data: {
                token: decodeURIComponent(Ms.ins.wxToken),
                phone: t,
                verifyCode: e,
                pid: g.PID,
                gid: g.gid
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                200 == t.statusCode && i.runWith(t.data)
            }
        })
    }
    ,
    P.hasBindPhone = function(e) {
        var t = w.window.wx;
        t && t.request({
            url: "https://us-api.39ej7e.com/wxmgame/isBindPhone",
            data: {
                token: decodeURIComponent(Ms.ins.wxToken),
                pid: g.PID,
                gid: g.gid
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                200 == t.statusCode && 0 == t.data.errcode && e.runWith(t.isBindPhone)
            }
        })
    }
    ,
    P.msgSecCheck = function(e, t) {
        var i, s = w.window.SQSDK;
        g.isWx() && 0 != this.getIsTishenSer() && s && s.checkSecurity ? ((i = {
            type: "msgSecCheck"
        }).data = {
            content: t
        },
        s.checkSecurity(i, function(t) {
            e.runWith(t.state)
        })) : e.runWith(1)
    }
    ,
    P.showModal = function(t, e, i) {
        this.mini.showModal({
            title: e || "提示",
            content: t,
            showCancel: !1,
            complete: function() {
                i && i()
            }
        })
    }
    ,
    P.openCustomerService = function(e) {
        var t = w.window.wx;
        t && t.openCustomerServiceConversation({
            success: function(t) {
                e && e.runWith(t)
            }
        })
    }
    ,
    P.playVideo = function(t, e, i, s, n, o, a) {
        void 0 === i && (i = 0),
        void 0 === s && (s = 0),
        void 0 === n && (n = 0),
        void 0 === o && (o = 0),
        void 0 === a && (a = !0);
        var r, l, h = w.window.wx;
        h && (r = h.getSystemInfoSync(),
        (l = h.createVideo({
            x: i,
            y: s,
            width: n || r.screenWidth,
            height: o || r.screenHeight,
            controls: !1,
            autoplay: a,
            enableProgressG: !1,
            estureobjectFit: "contain",
            src: t
        })).onEnded(function() {
            l.destroy(),
            e && e.runWith(1)
        }))
    }
    ,
    e(0, P, "mini", function() {
        var t = w.window.qq;
        return t || w.window.wx
    }, Rs.prototype._$set_mini),
    e(1, Ms, "ins", function() {
        return Ms._ins = Ms._ins || new Ms
    }, Rs.prototype._$set_ins),
    Ms.getRemainder = function() {
        w.window.SQSDK.getRemainder(function(t) {
            t = t.remainder;
            -1 == t ? console.info("查询余额失败") : x.stage.event("getRemainder_back", t)
        })
    }
    ,
    Ms.getShareTitle = function() {
        var t = Di.getGid()
          , t = Di.getShareTile(t);
        return t[Math.floor(Math.random() * t.length)]
    }
    ,
    Ms.format = function(t, e) {
        for (var i = [], s = 1, n = arguments.length; s < n; s++)
            i.push(arguments[s]);
        for (var o, a = i.length, s = 0; s < a; s++)
            o = new RegExp("\\{" + s + "\\}","g"),
            t = t.replace(o, i[s]);
        return t
    }
    ,
    Ms.dataReport = function(t, e) {
        var i, s;
        g.isWx() && w.onMiniGame && ((i = w.window.SQSDK) && i.dataReport ? (s = t.event_name,
        i.dataReport(t, function(t) {
            e && e(),
            console.log("分享回调 == " + s + ";" + t.msg)
        })) : console.log("????  === 没有初始化呢"))
    }
    ,
    Ms.onGetScene = null,
    Ms.curScene = 0,
    Ms._ins = null;
    var Rs, Bs = Ms;
    function Ms() {
        this._QQIOSPayLink = null,
        this._QQTicketSign = "",
        Rs.call(this)
    }
    t(Es, "app.fateGame.role.AppPlayerInfo", Ns = Ss),
    Es.createByDetailInfo = function(t) {
        var e = new Es;
        return e.type = 1,
        e.personId = t.personId,
        e.ownPlayerId = t.ownPlayerId,
        e.sex = t.sex,
        e.level = t.level,
        e.nickName = t.playerName,
        e
    }
    ,
    Es.createByAlterDetail = function(t) {
        var e = new Es;
        return e.type = 1,
        e.personId = t.personId,
        e.ownPlayerId = t.ownPlayerId,
        e.sex = t.sex,
        e.level = t.level,
        e.nickName = t.playerName,
        e
    }
    ;
    var Ns, Ds = Es;
    function Es() {
        Ns.call(this)
    }
    t(Hs, "app.WuhunGugeAni", Os = z),
    (v = Hs.prototype).loadAni = function(t) {
        this._skUrl = t,
        null == It.TEMPLET_DICTIONARY && (It.TEMPLET_DICTIONARY = {}),
        this._templet = It.TEMPLET_DICTIONARY[this._skUrl],
        Hs.addDontClearUrl(this._skUrl),
        this._templet ? this._templet.isParserComplete ? this.parseComplete() : this._templet.on("complete", this, this.parseComplete) : (this.resComplete = !1,
        this._templet = new It,
        this._templet._setUrl(this._skUrl),
        this._templet.on("complete", this, this.parseComplete),
        this._templet.loadAni(this._skUrl),
        It.TEMPLET_DICTIONARY[this._skUrl] = this._templet,
        this._templet.isParserComplete = !1)
    }
    ,
    v.parseComplete = function() {
        this._sln = this._templet.buildArmature(0),
        this._sln.scale(1, 1),
        this.addChild(this._sln),
        this.resComplete = !0,
        this.event("complete")
    }
    ,
    v.playOnce = function() {
        this._sln && (this._sln.on("stopped", this, this.playOnceSkHandler),
        this._sln.play(this._curIndex, !1))
    }
    ,
    v.playOnceSkHandler = function() {
        this.event("stopped")
    }
    ,
    v.play = function() {
        this._sln && (this._sln.on("stopped", this, this.completeSkHandler),
        this.doplay())
    }
    ,
    v.loopPlay = function(t) {
        !this._sln || this._curIndex > this._sln.getAnimNum() || (this._curIndex = t,
        this._sln.play(this._curIndex, !0))
    }
    ,
    v.completeSkHandler = function() {
        this.doplay()
    }
    ,
    v.doplay = function() {
        this._sln && (this._curIndex++,
        this._curIndex >= this._sln.getAnimNum() && (this._curIndex = 0),
        this._sln.play(this._curIndex, !1))
    }
    ,
    v.stop = function() {
        this._sln && this._sln.stop()
    }
    ,
    v.paused = function() {
        this._sln && this._sln.paused()
    }
    ,
    v.clear = function(t) {
        void 0 === t && (t = !0),
        this._sln && this._sln.parent && (this._sln.off("stopped", this, this.completeSkHandler),
        this._sln.stop(),
        this._sln.parent.removeChild(this._sln),
        this._sln.destroy(),
        this._sln = null),
        this._templet && (this._templet.off("complete", this, this.parseComplete),
        Hs.removeDontClearUrl(this._skUrl),
        t) && this.needClear && (this._templet.destroy(),
        this._templet = null),
        t && this.needClear && this._skUrl && ($.clearRes(this.skUrl),
        this._skUrl = "")
    }
    ,
    e(0, v, "skUrl", function() {
        return this._skUrl
    }, Os.prototype._$set_skUrl),
    e(0, v, "needClear", function() {
        return !(Hs.m_dontClearUrls && 0 < Hs.m_dontClearUrls[this._skUrl])
    }, Os.prototype._$set_needClear),
    e(0, v, "sln", function() {
        return this._sln
    }, Os.prototype._$set_sln),
    Hs.addDontClearUrl = function(t) {
        (Hs.m_dontClearUrls = Hs.m_dontClearUrls ? Hs.m_dontClearUrls : {})[t] || (Hs.m_dontClearUrls[t] = 0),
        Hs.m_dontClearUrls[t]++
    }
    ,
    Hs.removeDontClearUrl = function(t) {
        Hs.m_dontClearUrls && 0 < Hs.m_dontClearUrls[t] && (Hs.m_dontClearUrls[t]--,
        0 == Hs.m_dontClearUrls[t]) && delete Hs.m_dontClearUrls[t]
    }
    ,
    Hs.m_dontClearUrls = null;
    var Os, Fs = Hs;
    function Hs() {
        this._skUrl = "",
        this._templet = null,
        this._sln = null,
        this.resComplete = !1,
        this._curIndex = 0,
        Os.call(this)
    }
    t(Vs, "app.fateGame.AppImgNumber", Gs = z),
    (T = Vs.prototype).resetNum = function() {
        this._text = ""
    }
    ,
    T.setNumber = function(t, e, i, s, n, o, a, r) {
        if (void 0 === i && (i = 0),
        void 0 === s && (s = !1),
        void 0 === n && (n = ""),
        void 0 === o && (o = !1),
        void 0 === a && (a = 0),
        void 0 === r && (r = 0),
        t && "" != t && this._text != t) {
            this._text = t,
            this._numId = e,
            this.reset(),
            s && "" != n && (this.sp1 = Vs.loadPngAsSprite(n, "res/", o),
            this.addChild(this.sp1));
            var l, h, c = t.split("");
            for (h in -1 == this.flag && c.reverse(),
            c)
                "-" == (l = c[h]) ? l = "dec" : "+" == l ? l = "plus" : "%" == l ? l = "100" : "," == l ? l = "dot" : "." == l ? l = "point" : "*" == l ? l = "mult" : ":" == l ? l = "colon" : "s" == l ? l = "step" : "/" == l && (l = "slash"),
                this.sp1 = Vs.loadPngAsSprite(this._numId + "_" + l, "res/", o),
                0 < a && (this.sp1.width = a),
                0 < r && (this.sp1.height = r),
                this.sp1 && (0 == this.width ? this.sp1.x = 0 : this.sp1.x = this.width * this.flag + i,
                this.width = this.sp1.x + this.sp1.width,
                0 < this.height && (this.sp1.y = this.height - this.sp1.height),
                this.addChild(this.sp1))
        }
    }
    ,
    T.setChineseNumber = function(t, e, i, s, n, o, a, r) {
        if (void 0 === i && (i = 0),
        void 0 === s && (s = !1),
        void 0 === n && (n = ""),
        void 0 === o && (o = !1),
        void 0 === a && (a = 0),
        void 0 === r && (r = 0),
        t && "" != t && this._text != t) {
            this._text = t,
            this._numId = e,
            this.reset(),
            s && "" != n && (this.sp1 = Vs.loadPngAsSprite(n, "res/", o),
            this.addChild(this.sp1));
            var l, h, e = t.split(""), c = (-1 == this.flag && e.reverse(),
            []), s = parseInt(t);
            for (h in 10 < s && s < 20 ? (c.push("10"),
            c.push(s % 10 + "")) : s % 10 == 0 ? (10 != s && c.push("" + s / 10),
            c.push("10")) : 20 < s && s < 100 ? (c.push("" + s / 10),
            c.push("10"),
            c.push("" + s % 10)) : c = e,
            c)
                l = c[h],
                this.sp1 = Vs.loadPngAsSprite(this._numId + "_" + parseInt(l), "res/", o),
                0 < a && (this.sp1.width = a),
                0 < r && (this.sp1.height = r),
                this.sp1 && (0 == this.width ? this.sp1.x = 0 : this.sp1.x = this.width * this.flag + i,
                this.width = this.sp1.x + this.sp1.width,
                0 < this.height && (this.sp1.y = this.height - this.sp1.height),
                this.addChild(this.sp1))
        }
    }
    ,
    T.loop = function(t) {
        if (t && t.length)
            for (var e = t.length - 1; 0 <= e; e--) {
                var i = t[e];
                null != i && !i.run() || t.splice(e, 1)
            }
        else
            this.clearTimer(this, this.loop)
    }
    ,
    T.tweeMove = function(t, e, i, s, n) {
        var o;
        return e *= .015,
        Math.abs(t.y - e) >= n * i ? ((o = 0 < n ? t.removeChildAt(0) : t.removeChildAt(1)).destroy(),
        t.getChildAt(0).y = 0,
        !(t.y = 0)) : (t.y -= e,
        Math.ceil(Math.abs(t.y / i)) > s.pass && (s.pass++,
        o = t.getChildAt(0),
        e = t.getChildAt(1).y,
        t.setChildIndex(o, t.numChildren - 1),
        o.y = e + i,
        o.graphics.clear(),
        t = this._numId + "_" + s.num,
        s.num = s.num + 1,
        s.num > n && (s.pass = 100),
        t.indexOf("/") < 0 ? o.loadImage("x5_compWx/" + t + ".png") : o.loadImage(t + ".png")),
        !1)
    }
    ,
    T.reset = function() {
        Vs.clearMcChild(this, !1, !0),
        this.width = 0
    }
    ,
    T.destroy = function(t) {
        void 0 === t && (t = !0),
        m.clearAll(this),
        this.clearTimer(this, this.loop),
        Gs.prototype.destroy.call(this, !0)
    }
    ,
    e(0, T, "numId", function() {
        return this._numId
    }, function(t) {
        this._numId = t
    }),
    Vs.clearMcChild = function(t, e, i) {
        var s;
        if ((void 0 === e && (e = !1),
        void 0 === i && (i = !1),
        t) && t)
            for (; 0 < t.numChildren; )
                s = t.getChildAt(0),
                x.__typeof(s, kt) && s.stop(),
                s.parent == t && t.removeChild(s)
    }
    ,
    Vs.loadPngAsSprite = function(t, e, i) {
        return void 0 === e && (e = "res/"),
        void 0 === i && (i = !1),
        t ? (e = new J,
        t.indexOf("/") < 0 ? e.skin = "x5_compWx/num_" + t + ".png" : e.skin = t + ".png",
        e) : null
    }
    ;
    var Gs, Us = Vs;
    function Vs() {
        this._numId = "",
        this.sp1 = null,
        this._text = null,
        this.flag = 1,
        Gs.call(this),
        this.mouseEnabled = !1
    }
    t(Ws, "app.fateGame.f1.animation.AppLayaAnimationView", zs = z),
    i = Ws.prototype,
    x.imps(i, {
        "app.fateGame.f1.manager.AppIResUser": !0
    }),
    i.frameChangeHandler = function(t) {}
    ,
    i.updatePose = function(t, e, i, s, n, o) {
        void 0 === n && (n = ""),
        void 0 === o && (o = !1),
        t && (this.resetDisplayObject(),
        this._ignorePause = o,
        this._url = t,
        this._resUrl = this._url.substring(0, this._url.lastIndexOf(".")) + ".json",
        this._loopTimes = e,
        this._playEndHoldOn = i,
        this._actionName = n,
        this._actCompleteCallBack = s,
        we.ins.useRes(this, this._resUrl),
        x.loader.load(this._resUrl, b.create(this, this.loadJsonComplete, [this._resUrl]), null, "atlas", 3))
    }
    ,
    i.loadJsonComplete = function(t) {
        t == this._resUrl && (this._loader || (this._loader = new Tn),
        this._loader.loadAnimation(this._url, b.create(this, this.loadComplete, [this._resUrl]), this._resUrl))
    }
    ,
    i.loadComplete = function(t) {
        this._loader && this._loader.frames && t == this._resUrl && ($.getRes(this._resUrl) && $.getRes(this._url) ? (this._frames = this._loader.frames,
        this._labels = this._loader.labels,
        this._count = this._frames.length,
        this._baseInterval = this._loader.interval,
        this._curInterval = this._baseInterval * this._playInterMultiple,
        this._loader && this._loader.destroy(),
        this._loader = null,
        this._isPlaying && this._index < 0 && (x.timer.clear(this, this.loop),
        x.timer.frameLoop(1, this, this.loop, null, !0, this._ignorePause),
        this.event("startPlay"))) : (Ws.clearCacheBykey(this._resUrl),
        x.loader.load(this._resUrl, b.create(this, this.loadJsonComplete, [this._resUrl]), null, "atlas", 3)))
    }
    ,
    i.play = function() {
        this._resUrl && we.ins.useRes(this, this._resUrl),
        this._isPlaying = !0,
        this._index = -1,
        this.isPause = !1,
        !this._frames || this._frames.length <= 0 || (this._lastPoseTime = w.now(),
        x.timer.clear(this, this.loop),
        x.timer.frameLoop(1, this, this.loop, null, !0, this._ignorePause),
        this.event("startPlay"))
    }
    ,
    i.loop = function() {
        if (this.isPause)
            this._lastPoseTime = w.now();
        else if (this._isPlaying)
            if (0 < this._count)
                if (this._nowTime = w.now(),
                0 == this._lastPoseTime || 1e3 < this._nowTime - this._lastPoseTime)
                    this._lastPoseTime = this._nowTime,
                    this.nextFrame();
                else
                    for (; this._nowTime - this._lastPoseTime > this._curInterval; )
                        this._lastPoseTime += 0 < this._curInterval ? this._curInterval : 30,
                        this.nextFrame();
            else
                this.actComplete()
    }
    ,
    i.nextFrame = function() {
        if (this._isReverse) {
            if (this._isIntervalLoop && this._index == this._beginIndex && 0 <= this._beginIndex ? (this._repeatOverTimes = 0 < this._repeatTimes ? this._repeatOverTimes + 1 : -1,
            this._repeatTimes <= 0 || this._repeatOverTimes < this._repeatTimes ? this._isPingPong && this._index == this._beginIndex ? (this._isReverse = !1,
            this._index = this._beginIndex < this._frames.length - 1 ? this._beginIndex + 1 : this._beginIndex) : this._index = this._endIndex : (this._isIntervalLoop = !1,
            this._index++)) : this._index--,
            this._index < 0) {
                if (this._loopOverTimes = 0 < this._loopTimes ? this._loopOverTimes + 1 : -1,
                !(this._loopTimes <= 0 || this._loopOverTimes < this._loopTimes))
                    return this._index = 0,
                    void this.actComplete();
                2 == this.wrapMode ? (this._index = 0 < this._count ? 1 : 0,
                this._isReverse = !1) : this._index = this._count - 1
            }
        } else if (this._isIntervalLoop && this._index == this._endIndex && 0 <= this._endIndex ? (this._repeatOverTimes = 0 < this._repeatTimes ? this._repeatOverTimes + 1 : -1,
        this._repeatTimes <= 0 || this._repeatOverTimes < this._repeatTimes ? this._isPingPong && this._index == this._endIndex ? (this._isReverse = !0,
        this._index = 1 <= this._endIndex ? this._endIndex - 1 : 0) : this._index = this._beginIndex : (this._isIntervalLoop = !1,
        this._isReverse = !1,
        this._index++)) : this._index++,
        this._index >= this._count) {
            if (this._loopOverTimes = 0 < this._loopTimes ? this._loopOverTimes + 1 : -1,
            !(this._loopTimes <= 0 || this._loopOverTimes < this._loopTimes))
                return void this.actComplete();
            2 == this.wrapMode ? (this._index = 0 <= this._count - 2 ? this._count - 2 : 0,
            this._isReverse = !0) : this._index = 0
        }
        this.graphics = this._frames[this._index];
        var t = !1;
        if (t = !(t = $.getRes(this._resUrl) && $.getRes(this._url) ? t : !0) && this._url && this._resUrl && this.graphics && this.graphics._one && !this.graphics._one[0].loaded ? !0 : t)
            Ws.clearCacheBykey(this._resUrl),
            x.loader.load(this._resUrl, b.create(this, this.loadJsonComplete, [this._resUrl]), null, "atlas", 3);
        else if (this._labels && this._labels[this._index])
            for (var e = this._labels[this._index], i = 0, s = e.length; i < s; i++)
                this.event("label", e[i])
    }
    ,
    i.actComplete = function() {
        this.event("complete"),
        x.timer.clearAll(this),
        null != this._actCompleteCallBack && (this._actCompleteCallBack.run(),
        this._actCompleteCallBack = null),
        this._playEndHoldOn || this.parent && this.parent.removeChild(this)
    }
    ,
    i.destroy = function(t) {
        zs.prototype.destroy.call(this, t = void 0 === t ? !0 : t),
        console.error("严重错误，貌似有人销毁了Laya特效后，又放回对象池")
    }
    ,
    i.recover = function() {
        this._recovered || (this._recovered = !0,
        this.event("Event_View_Recover"),
        x.timer.clear(this, this.loop),
        this._loader && this._loader.destroy(),
        this._loader = null,
        this.parent && this.parent.removeChild(this),
        this._resUrl && we.ins.unuseRes(this, this._resUrl),
        this.resetDisplayObject(),
        dt.recover("app.fateGame.f1.animation.AppLayaAnimationView", this))
    }
    ,
    i.resetDisplayObject = function() {
        this.scale(1, 1),
        this.alpha = 1,
        this.visible = !0,
        this._loader && this._loader.destroy(),
        this.x = 0,
        this.y = 0,
        this._ignorePause = !1,
        this._loader = null,
        this._playInterMultiple = 1,
        this._loopOverTimes = 0,
        this._resClearTime = we.SKILL,
        this._isReverse = !1,
        this._isPlaying = !1,
        this._nowTime = 0,
        this._lastPoseTime = 0,
        this._index = -1,
        this.isPause = !1,
        this._frames = null,
        this._labels = null,
        this._baseInterval = 0,
        this._curInterval = 30,
        this._count = 0,
        this.wrapMode = 0,
        this._beginIndex = -1,
        this._endIndex = -1,
        this._repeatTimes = 0,
        this._repeatOverTimes = 0,
        this._isIntervalLoop = !1,
        this._isPingPong = !1,
        this._recovered = !1,
        this._url = null,
        this._resUrl = null,
        x.timer.clearAll(this),
        this._actCompleteCallBack && (this._actCompleteCallBack.recover(),
        this._actCompleteCallBack = null),
        this.graphics = null
    }
    ,
    i.move = function(t, e) {
        this.pos(t, e)
    }
    ,
    i.onDisplay = function() {
        this.once("undisplay", this, this.onUndisplay)
    }
    ,
    i.onUndisplay = function() {
        this.once("display", this, this.onDisplay)
    }
    ,
    e(0, i, "playInterMultiple", function() {
        return this._playInterMultiple
    }, function(t) {
        this._playInterMultiple != t && (this._playInterMultiple = t,
        this._curInterval = this._baseInterval * this._playInterMultiple)
    }),
    e(0, i, "resClearTime", function() {
        return this._resClearTime
    }, function(t) {
        this._resClearTime = Math.max(t, 0)
    }),
    e(0, i, "resUrl", function() {
        return this._resUrl
    }, zs.prototype._$set_resUrl),
    Ws.createAnimationView = function() {
        return dt.getItemByClass("app.fateGame.f1.animation.AppLayaAnimationView", Ws)
    }
    ,
    Ws.clearCacheBykey = function(t) {
        $.s_dontClear || (t = t.substring(0, t.lastIndexOf(".")) + ".ani",
        x.loader.clearRes(t, !0),
        x.loader.cancelLoadByUrl(t),
        Pt.clearCache(t))
    }
    ;
    var zs, Xs = Ws;
    function Ws() {
        this._playInterMultiple = 1,
        this._actCompleteCallBack = null,
        this._resUrl = null,
        this._url = null,
        this._playEndHoldOn = !1,
        this._loopTimes = 1,
        this._loopOverTimes = 0,
        this._resClearTime = we.SKILL,
        this._actionName = null,
        this._isReverse = !1,
        this._isPlaying = !1,
        this._nowTime = 0,
        this._lastPoseTime = 0,
        this._index = -1,
        this._recovered = !1,
        this.isPause = !1,
        this._frames = null,
        this._labels = null,
        this._loader = null,
        this._baseInterval = 0,
        this._curInterval = 30,
        this._count = 0,
        this.wrapMode = 0,
        this._beginIndex = 0,
        this._endIndex = 0,
        this._repeatTimes = 0,
        this._repeatOverTimes = 0,
        this._isIntervalLoop = !1,
        this._isPingPong = !1,
        this._ignorePause = !1,
        zs.call(this)
    }
    t(Ys, "app.fateGame.f1.view.mapeditor.AppBgView", js = z),
    (s = Ys.prototype).update = function(t, e, i, s, n) {
        this.layer = n = void 0 === n ? 0 : n,
        this.mapUrl = s,
        this.isLoadingSmall = !0,
        this.reset(),
        this.gridLoaded = 0,
        this.progressFun = i,
        this.completeFun = e,
        x.loader.load(t, b.create(this, this.loadBinComplete), null, "arraybuffer", 0)
    }
    ,
    s.loadBinComplete = function(t) {
        if (!t)
            return null;
        var e = new Oi;
        if (e.writeArrayBuffer(t),
        e.position = 0,
        e.uncompress(),
        this._w = e.readUnsignedInt(),
        this._h = e.readUnsignedInt(),
        this._w < 1 || this._h < 1)
            return null;
        this.size(this._w, this._h),
        this.fragmentWidth = e.readUnsignedInt(),
        this.fragmentHeight = e.readUnsignedInt(),
        this.fragmentW = e.readUnsignedInt(),
        this.fragmentH = e.readUnsignedInt(),
        this.gridWMax = Math.floor(this.fragmentWidth * this.fragmentW / S.GRID_BORDER),
        this.gridHMax = Math.floor(this.fragmentHeight * this.fragmentH / S.GRID_BORDER);
        t = e.readUTF(),
        e = e.readObject();
        return this._roles = e.roles,
        this._swfs = e.swfs,
        this._swfm = e.swfm,
        this._roofs = e.roof,
        this._builds = e.builds,
        this._tileByteArrays = e.Tiles,
        this._tileByteArrays.position = 0,
        this.gridW = this._tileByteArrays.readUnsignedInt(),
        this.gridH = this._tileByteArrays.readUnsignedInt(),
        this._tileByteArrays.position = 0,
        this.bgSrc = "art/res/map/mapres/" + t.replace("\\", "/"),
        this._mapPos = e.mapPos,
        x.loader.load(this.bgSrc + "/small.jpg", b.create(this, this.loadSmallBg), null, "image", 0),
        e
    }
    ,
    s.loadSmallBg = function(t) {
        this.smallTex = t,
        this.isDrawSmall = !1,
        this.isLoadingSmall = !1,
        null != this.completeFun && (this.completeFun.run(),
        this.completeFun = null)
    }
    ,
    s.finalize = function() {}
    ,
    s.reset = function() {}
    ,
    s.resize = function() {}
    ,
    s.getMapObj = function() {
        return k.ins.data == this ? k.ins : k.getCityinsance().data == this ? k.getCityinsance() : null
    }
    ,
    e(0, s, "x", js.prototype._$get_x, function(t) {
        x.superSet(js, this, "x", t)
    }),
    e(0, s, "y", js.prototype._$get_y, function(t) {
        x.superSet(js, this, "y", t)
    }),
    e(0, s, "mapPos", function() {
        return this._mapPos
    }, js.prototype._$set_mapPos),
    e(0, s, "tileByteArrays", function() {
        return this._tileByteArrays
    }, js.prototype._$set_tileByteArrays),
    e(0, s, "swfs", function() {
        return this._swfs
    }, js.prototype._$set_swfs),
    e(0, s, "swfm", function() {
        return this._swfm
    }, js.prototype._$set_swfm),
    e(0, s, "roles", function() {
        return this._roles
    }, js.prototype._$set_roles),
    e(0, s, "builds", function() {
        return this._builds
    }, js.prototype._$set_builds);
    var js, N = Ys;
    function Ys() {
        this._buildsList = null,
        this.fragmentW = null,
        this.fragmentH = null,
        this.fragmentWidth = null,
        this.fragmentHeight = null,
        this._tileByteArrays = null,
        this._builds = null,
        this._roles = null,
        this._swfs = null,
        this._swfm = null,
        this._roofs = null,
        this.gridLoaded = null,
        this.bgSrc = null,
        this._mapPos = null,
        this._w = 0,
        this._h = 0,
        this.smallTex = null,
        this.isDrawSmall = !1,
        this.isLoadingSmall = !0,
        this.gridW = 0,
        this.gridH = 0,
        this.gridWMax = 0,
        this.gridHMax = 0,
        this.progressFun = null,
        this.completeFun = null,
        this.mapUrl = null,
        this.layer = 0,
        js.call(this)
    }
    t(Ks, "app.fateGame.f1.vmc.AppVMCView", $s = z),
    P = Ks.prototype,
    x.imps(P, {
        "app.fateGame.f1.manager.AppIResUser": !0
    }),
    P.markSimple = function() {
        this.m_markSimpleVmc = !0
    }
    ,
    P.isMarkSimple = function() {
        return this.m_markSimpleVmc
    }
    ,
    P.setUndisplayRecover = function(t, e) {
        this.m_recoverUndisplay = t,
        this.m_unDisplayRecoverCallBack = e
    }
    ,
    P.onTargetFramehandler = function(t, e, i) {
        void 0 === i && (i = !0),
        this._targetFrame = t,
        this._onTargetHandler = e,
        this._onlyOnce = i
    }
    ,
    P.frameChangeHandler = function(t) {
        this._frameChangeHandler = t
    }
    ,
    P.paintHandler = function(t) {
        this._paintHandler = t
    }
    ,
    P.destroy = function(t) {
        void 0 === t && (t = !0),
        this.recover()
    }
    ,
    P.setGraphics = function(t) {
        this._clips = t,
        this._count = this._clips.length,
        this._targetFrame >= this._count && (this._targetFrame = this._count - 1),
        this.checkPngSize()
    }
    ,
    P.checkPngSize = function() {
        var t;
        Ht.isNei && this._clips && 0 < this._clips.length && (t = this._clips[0]) && t.bitmap && (2048 < t.bitmap.width || 2048 < t.bitmap.height) && 0 <= this.url.indexOf("art/res/skill/") && console.error("特效尺寸超过2048，且不在configValue中83402，特效id==" + this.url)
    }
    ,
    P.reset = function() {
        this.url = null,
        this._count = 0,
        this.texture = null,
        this.stop()
    }
    ,
    P.play = function() {
        !this.url || this.isSon && !this.isNotAppendPos || (0 <= this._resClearTime && we.ins.useRes(this, this.url),
        x.loader.getRes(this.url) ? (this._lastPoseTime = w.now(),
        this._isPlaying = !0,
        x.timer.frameLoop(1, this, this.loop, null, !0, !!this.isBody || this._ignorePause)) : this._hided ? (this.setGraphics([]),
        this._lastPoseTime = w.now(),
        this._isPlaying = !0,
        x.timer.frameLoop(1, this, this.loop, null, !0, !!this.isBody || this._ignorePause)) : x.loader.getRes(this.url) ? this.loadCfgComplete(this.url) : x.loader.load(this.url, b.create(this, this.loadCfgComplete, [this.url]), null, "atlas", 3))
    }
    ,
    P.replay = function() {
        this.poseProgress = -1,
        this.play()
    }
    ,
    P.loop = function() {
        if (this._isPlaying && this._inters && 0 != this._inters.length && (!this.isSon || this.isNotAppendPos))
            if (this.m_isPause)
                this._lastPoseTime = w.now();
            else {
                var t = w.now();
                if (0 == this._lastPoseTime || 1e3 < t - this._lastPoseTime)
                    this._lastPoseTime = t,
                    this.nextFrame(),
                    0;
                else
                    for (var e = this.url; t - this._lastPoseTime > this.interval; )
                        if (this._lastPoseTime += 0 < this.interval ? this.interval : 30,
                        this.nextFrame(),
                        !this._isPlaying || this.url != e)
                            return
            }
    }
    ,
    P.nextFrame = function() {
        var t;
        this._count <= 0 || (t = !1,
        this.backToLastFrame && (this._poseProgress = this._count - 1),
        this._poseProgress < this._count - 1 ? ++this._poseProgress : this._repeat ? this._poseProgress = 0 : (this.backToFirstFrame && (this._poseProgress = 0),
        t = !0),
        this.url && this._clips && this._poseProgress < this._clips.length && this._clips[this._poseProgress] && !this._clips[this._poseProgress].loaded ? (this.stop(),
        x.loader.load(this.url, b.create(this, this.loadCfgComplete, [this.url]), null, "atlas", 3)) : (this.paint(),
        this._targetFrame == this._poseProgress && this._onTargetHandler && (this._onTargetHandler.run(),
        this._onlyOnce) && (this._onTargetHandler = null,
        this._targetFrame = -1),
        this._frameChangeHandler && this._frameChangeHandler.runWith(this._poseProgress),
        !this.m_isPause && t && (t = this.url,
        this.event("complete"),
        null != this.actCompleteCallBack && (this.actCompleteCallBack.run(),
        this.actCompleteCallBack = null),
        this.url == t) && (this._playOverRemove && this.removeSelf(),
        this._playOverRecover ? this.recover() : this.stop())))
    }
    ,
    P.paint = function() {
        if (this._clips && 0 < this._clips.length && this._poseProgress < this._clips.length) {
            this._poseProgress < 0 && (this.poseProgress = 0);
            var t = !1
              , e = 0
              , i = 0
              , s = (null != this.offset && this._poseProgress < this.offset.length && null != (s = this.offset[this._poseProgress]) && 2 == s.length && (e = s[0] + this.__x / this.scaleX,
            i = s[1] + this.__y / this.scaleY,
            t = !0),
            this.countInter(),
            this._clips[this._poseProgress]);
            if (t && (this.texture != s || this._lastTexX != e || this._lastTexY != i)) {
                if (s && !s.loaded)
                    return;
                this.setTexture2(s, e, i),
                this.runPaintHandler(s, e, i),
                this._lastTexX = e,
                this._lastTexY = i
            }
            if (this._appendList && 0 < this._appendList.length)
                for (var n = 0; n < this._appendList.length; ++n) {
                    var o = this._appendList[n];
                    o && this.paintAppendView(o)
                }
        } else
            this._clips && 0 < this._clips.length ? (s = this._clips[this._clips.length - 1],
            this.texture == s || s && !s.loaded || (this.setTexture2(s, this._lastTexX, this._lastTexY),
            this.runPaintHandler(s, this._lastTexX, this._lastTexY))) : (this.texture = null,
            this.runPaintHandler(null))
    }
    ,
    P.runPaintHandler = function(t, e, i) {
        void 0 === e && (e = 0),
        void 0 === i && (i = 0),
        this._paintHandler && this._paintHandler.runWith([t, e, i])
    }
    ,
    P.removeSelf = function() {
        return laya.display.Node.prototype.removeSelf.call(this)
    }
    ,
    P.checkAppendChange = function() {
        this._isPlaying && this.isSon && !this.isNotAppendPos && (this._isPlaying = !1,
        x.timer.clear(this, this.loop))
    }
    ,
    P.stop = function() {
        var t = this._isPlaying;
        this._isPlaying = !1,
        x.timer.clear(this, this.loop),
        t && null != this.stopCallBack && (t = this.stopCallBack,
        this.stopCallBack = null,
        t.run())
    }
    ,
    P.updatePose = function(t, e, i, s, n, o, a, r, l, h, c, p, u, d) {
        void 0 === e && (e = 90),
        void 0 === s && (s = !1),
        void 0 === n && (n = !1),
        void 0 === o && (o = !1),
        void 0 === a && (a = ""),
        void 0 === r && (r = !1),
        void 0 === l && (l = !1),
        void 0 === h && (h = !1),
        void 0 === p && (p = !1),
        void 0 === d && (d = !1),
        t && (this._direct = this.getTargetAnglt(e),
        this._ignorePause = p,
        this.url = t,
        0 <= this._resClearTime && this.url && we.ins.useRes(this, t),
        this.backToFirstFrame = r,
        this.backToLastFrame = d,
        "" == a && (this._actName = null),
        this._actName = a ? a.replace("90", Math.abs(this._direct) + "") : Math.abs(this._direct) + "",
        this.poseInfo = null,
        this.interval = 0,
        this._repeat = s,
        this._playOverRemove = n,
        this._playOverRecover = o,
        this._clips && (this._clips.length = 0),
        this._poses && (this._poses.length = 0),
        this.poseProgress = -1,
        this._count = 0,
        this.m_pauseFrame = null,
        this.m_interPauseFrame = null,
        this.isBody && t.match(/.*act\d*\/\d*\.json/i) && (l = t.replace(/\d*\.json$/i, ""),
        Ks.bodyData[l]) && (this._effectTime = Ks.bodyData[l].effectTime,
        this.releaseTime = Ks.bodyData[l].releaseTime,
        this._effectFrame = Ks.bodyData[l].effectFrame,
        this._releaseFrame = Ks.bodyData[l].releaseFrame),
        (e = t.match(/[\\\/]res[\\\/](buff|skill)[\\\/]([^\\\/]*\.json)$/i)) && e[1] && this.once("undisplay", this, this.undisplayHandler),
        this.isNotAppendPos = h,
        this.checkAppendChange(),
        p = !this.isRolePart || Ks.hasRoleData,
        this._loadCompleteHand = c,
        this._resloadCompleteHand = u,
        !this._hided && p ? (this.completeFun = i,
        x.loader.load(t, b.create(this, this.loadCfgComplete, [t]), null, "atlas", 3)) : (null != i && i.run(),
        this.setGraphics([]),
        this.play(),
        s || x.timer.frameOnce(10, this, this.playWithoutRes, null, !0, !!this.isBody || this._ignorePause)))
    }
    ,
    P.getTargetAnglt = function(t) {
        return isNaN(t) || 180 <= (t = ((t = t % 360) + 360) % 360) && (t -= 360),
        t
    }
    ,
    P.setPauseFrame = function(t) {
        this.m_pauseFrame = t,
        this.checkPauseFrame()
    }
    ,
    P.checkPauseFrame = function() {
        if (this._inters && this.m_pauseFrame) {
            var t = 0;
            this.m_interPauseFrame = [];
            for (var e = 0; e < this._inters.length; ++e) {
                var i, s, n = 0, o = t;
                for (s in t += this._inters[e],
                this.m_pauseFrame)
                    (i = this.m_pauseFrame[s]).delay >= o && i.delay < t && (n += i.time);
                this.m_interPauseFrame.push(n)
            }
            this.countInter()
        }
    }
    ,
    P.undisplayHandler = function() {}
    ,
    P.playWithoutRes = function() {
        this.event("complete")
    }
    ,
    P.doUpdatePose = function() {
        var t = $.getRes(this.url);
        if (t) {
            var e, i = t.cfgs.scale || 1, s = (i = 0 != this.mcScale ? this.mcScale : i) * this._roleScale, n = (this._roleScaleY && (e = i * this._roleScaleY),
            0 < this._direct ? this.scale(s, e || s) : this.scale(-s, e || s),
            t.meta && t.meta.prefix ? H.basePath + t.meta.prefix : this.url.substring(0, this.url.lastIndexOf(".")) + "/");
            if (this._poses.length = 0,
            this.offset)
                for (var o = 0, a = 0, o = 0, a = this.offset.length; o < a; o++)
                    this._poses.push(n + this._actName + "_" + o + ".png");
            var r = this._clips || [];
            for (o = r.length = 0,
            a = this._poses.length; o < a; o++)
                r.push($.getRes(this._poses[o]));
            this.setGraphics(r),
            this.isPlaying || this.isSon && !this.isNotAppendPos || (this.poseProgress = -1,
            this.play())
        }
    }
    ,
    P.loadCfgComplete = function(t) {
        if (t == this.url && (this.poseInfo = $.getRes(this.url),
        this.poseInfo)) {
            if (null != this._resloadCompleteHand && (this._resloadCompleteHand.run(),
            this._resloadCompleteHand = null),
            this._inters = this.poseInfo.cfgs.inter,
            this.checkPauseFrame(),
            this.poseInfo.cfgs.offset instanceof Array)
                this.offset = this.poseInfo.cfgs.offset;
            else if (this.offset = this.poseInfo.cfgs.offset[this._actName],
            !this.offset)
                for (var e in this.poseInfo.cfgs.offset)
                    i = this.poseInfo.cfgs.offset[e],
                    this.offset = i;
            if (this.offset && 0 < this.offset.length && "string" == typeof this.offset[0][0])
                for (var i, s = 0; s < this.offset.length; ++s)
                    2 == (i = this.offset[s]).length && ("string" == typeof i[0] && (i[0] = parseFloat(i[0])),
                    "string" == typeof i[1]) && (i[1] = parseFloat(i[1]));
            var t = this.poseInfo.cfgs.scale || 1;
            this._vmcHeight = Math.abs(this.offset[0][1]) * t,
            this._dirName = this.poseInfo.dirName,
            this._effectTime = this.poseInfo.cfgs.effectTime || 0,
            this.releaseTime = this.poseInfo.cfgs.releaseTime || 0,
            this._effectFrame = this.poseInfo.cfgs.effectFrame || 0,
            this._releaseFrame = this.poseInfo.cfgs.releaseFrame || 0,
            this._offsetX = (this.poseInfo.cfgs.offsetX ? parseFloat(this.poseInfo.cfgs.offsetX) : 0) * t,
            this._offsetY = parseFloat(this.poseInfo.cfgs.offsetY),
            this.isBody && this.url && this.url.match(/.*act\d*\/\d*\.json/i) && (t = this.url.replace(/\d*\.json$/i, ""),
            Ks.bodyData[t] || (Ks.bodyData[t] = {}),
            Ks.bodyData[t].effectTime = this._effectTime,
            Ks.bodyData[t].releaseTime = this.releaseTime,
            Ks.bodyData[t].effectFrame = this._effectFrame,
            Ks.bodyData[t].releaseFrame = this._releaseFrame),
            this._actName && this.doUpdatePose(),
            null != this.completeFun && (this.completeFun.run(),
            this.completeFun = null),
            null != this._loadCompleteHand && (this._loadCompleteHand.run(),
            this._loadCompleteHand = null)
        }
    }
    ,
    P.isEffect = function() {
        return 0 < this._poseProgress && this._poseProgress >= this._effectFrame
    }
    ,
    P.countInter = function() {
        var t;
        this._inters && 0 != this._inters.length && (this.interval = this._inters[this._poseProgress],
        1 != this._playInterMultiple && (this.interval = Math.ceil(this.interval * this._playInterMultiple)),
        this.m_interPauseFrame) && (t = this.m_interPauseFrame[this._poseProgress],
        1 != this._playInterMultiple && (t = Math.ceil(t * this._playInterMultiple)),
        this.interval += t)
    }
    ,
    P.clearAppendList = function() {
        if (this._appendList) {
            for (var t in this._appendList)
                this._appendList[t];
            this._appendList.length = 0
        }
    }
    ,
    P.appendView = function(t) {
        this._appendList || (this._appendList = []),
        -1 == this._appendList.indexOf(t) && this._appendList.push(t),
        t.isSon = !0,
        this.paintAppendView(t),
        t.checkAppendChange()
    }
    ,
    P.removeAppend = function(t) {
        var e;
        this._appendList && 0 < this._appendList.length && (-1 != (e = this._appendList.indexOf(t)) && this._appendList.splice(e, 1),
        t.isSon = !1),
        t.checkAppendChange()
    }
    ,
    P.paintAppendView = function(t) {
        t.isNotAppendPos || (t.poseProgress = this._poseProgress,
        t.paint())
    }
    ,
    P.move = function(t, e) {
        this.__x == t && this.__y == e || (this.__x = t,
        this.__y = e)
    }
    ,
    P.initVmcView = function() {
        this.texture = null,
        this._recovered = !1,
        this._ignorePause = !1,
        this.m_isPause = !1,
        this.mcScale = 0,
        this._playOverRecover = !1,
        this._playOverRemove = !1,
        this.interval = 0,
        this._inters = null,
        this.offset = null,
        this._clips = null,
        this._poses = [],
        this._poseProgress = -1,
        this._count = 0,
        this._effectFrame = -1,
        this._releaseFrame = -1,
        this._isPlaying = !1,
        this.url = null,
        this._actName = null,
        this._direct = 0,
        this._roleScale = 1,
        this._appendList = null,
        this.completeFun && (this.completeFun.recover(),
        this.completeFun = null),
        this._loadCompleteHand && (this._loadCompleteHand.recover(),
        this._loadCompleteHand = null),
        this._resloadCompleteHand && (this._resloadCompleteHand.recover(),
        this._resloadCompleteHand = null),
        this._repeat = !1,
        this._lastPoseTime = 0,
        this.poseInfo = null,
        this._effectTime = 0,
        this.releaseTime = 0,
        this._playInterMultiple = 1,
        this.__x = 0,
        this.__y = 0,
        this._offsetX = 0,
        this._offsetY = 0,
        this._vmcHeight = 0,
        this._dirName = null,
        this.actCompleteCallBack && (this.actCompleteCallBack.recover(),
        this.actCompleteCallBack = null),
        this.stopCallBack && (this.stopCallBack.recover(),
        this.stopCallBack = null),
        this.isSon = !1,
        this.isBody = !1,
        this.isRolePart = !1,
        this._resClearTime = 6e4,
        this._hided = !1,
        this.m_pauseFrame = null,
        this.m_interPauseFrame = null,
        this.m_recoverUndisplay = !1,
        this.m_unDisplayRecoverCallBack = null,
        this.m_markSimpleVmc = !1,
        x.timer.clearAll(this),
        m.clearAll(this),
        Yt.removeTweens(this, !0),
        $t.removeTweens(this, !0),
        this._targetFrame = -1,
        this._onlyOnce = !1,
        this._onTargetHandler = null,
        this._frameChangeHandler = null,
        this._paintHandler = null,
        this._lastTexX = 0,
        this._lastTexY = 0
    }
    ,
    P.recover = function() {
        this._recovered || (this._recovered = !0,
        this.event("Event_View_Recover"),
        this.parent && this.parent.removeChild(this),
        this.stop(),
        this.clearAppendList(),
        0 <= this._resClearTime && this.url && we.ins.unuseRes(this, this.url),
        this.initVmcView(),
        Ks.resetSprite(this),
        this.scale(1, 1),
        this.filters && 0 < this.filters.length && (this.filters = []),
        this.skewX = 0,
        this.skewY = 0,
        this.pivotY = 0,
        this.pivotX = 0,
        dt.recover("app.fateGame.f1.vmc.AppVMCView", this))
    }
    ,
    P.onDisplay = function() {
        this.once("undisplay", this, this.onUndisplay),
        this._isPlaying && x.timer.frameLoop(1, this, this.loop, null, !0, !!this.isBody || this._ignorePause)
    }
    ,
    P.onUndisplay = function() {
        var t, e = this;
        this.once("display", this, this.onDisplay),
        x.timer.clear(this, this.loop),
        this.m_recoverUndisplay && x.timer.callLater(t = this, function() {
            t.m_recoverUndisplay && !t.displayedInStage && (null != e.m_unDisplayRecoverCallBack && (e.m_unDisplayRecoverCallBack.run(),
            e.m_unDisplayRecoverCallBack = null),
            e.recover())
        })
    }
    ,
    e(0, P, "resClearTime", function() {
        return this._resClearTime
    }, function(t) {
        this._resClearTime = t
    }),
    e(0, P, "roleScale", function() {
        return this._roleScale
    }, function(t) {
        this._roleScale != t && (this._roleScale = t,
        this.doUpdatePose())
    }),
    e(0, P, "roleScaleY", function() {
        return this._roleScaleY
    }, function(t) {
        this._roleScaleY != t && (this._roleScaleY = t)
    }),
    e(0, P, "hided", function() {
        return this._hided
    }, function(t) {
        this._hided != t && ((this._hided = t) ? this.setGraphics([]) : this.url && (x.loader.getRes(this.url) ? this.loadCfgComplete(this.url) : x.loader.load(this.url, b.create(this, this.loadCfgComplete, [this.url]), null, "atlas", 3)))
    }),
    e(0, P, "poseProgress", function() {
        return this._poseProgress
    }, function(t) {
        this._poseProgress = t
    }),
    e(0, P, "px", function() {
        return this.__x
    }, function(t) {
        this.__x != t && (this.__x = t)
    }),
    e(0, P, "py", function() {
        return this.__y
    }, function(t) {
        this.__y != t && (this.__y = t)
    }),
    e(0, P, "playInterMultiple", function() {
        return this._playInterMultiple
    }, function(t) {
        this._playInterMultiple = t
    }),
    e(0, P, "resUrl", function() {
        return this.url
    }, $s.prototype._$set_resUrl),
    e(0, P, "repeat", function() {
        return this._repeat
    }, $s.prototype._$set_repeat),
    e(0, P, "vmcHeight", function() {
        return this._vmcHeight
    }, $s.prototype._$set_vmcHeight),
    e(0, P, "dirName", function() {
        return this._dirName
    }, $s.prototype._$set_dirName),
    e(0, P, "isPlaying", function() {
        return this._isPlaying
    }, $s.prototype._$set_isPlaying),
    e(0, P, "lastTexX", function() {
        return this._lastTexX
    }, $s.prototype._$set_lastTexX),
    e(0, P, "lastTexY", function() {
        return this._lastTexY
    }, $s.prototype._$set_lastTexY),
    e(0, P, "paintHandle", function() {
        return this._paintHandler
    }, $s.prototype._$set_paintHandle),
    e(0, P, "count", function() {
        return this._count
    }, $s.prototype._$set_count),
    e(0, P, "offsetX", function() {
        return this._offsetX * this._roleScale
    }, $s.prototype._$set_offsetX),
    e(0, P, "offsetY", function() {
        return this._offsetY
    }, $s.prototype._$set_offsetY),
    e(0, P, "effectTime", function() {
        return this._effectTime
    }, $s.prototype._$set_effectTime),
    Ks.createVMC = function() {
        return dt.getItemByClass("app.fateGame.f1.vmc.AppVMCView", Ks)
    }
    ,
    Ks.resetSprite = function(t) {
        for (var e = t.numChildren - 1; 0 <= e; e--) {
            var i = t.removeChildAt(0);
            x.__typeof(i, Ks) ? (i.stop(),
            i.removeSelf()) : x.__typeof(i, Xs) && i.recover()
        }
        t._childs = q.ARRAY_EMPTY,
        t.name = "",
        t.timer = x.timer,
        t._displayedInStage = !1,
        t._parent = null,
        t._$P = q.PROP_EMPTY,
        t.conchModel = r.isConchNode ? t.createConchModel() : null,
        t.mouseThrough = !1,
        t._transform = null,
        t._tfChanged = !1,
        t._x = 0,
        t._y = 0,
        t._width = 0,
        t._height = 0,
        t._repaint = 1,
        t._changeType = 0,
        t._mouseEnableState = 0,
        t._zOrder = 0,
        t._style = lt.EMPTY,
        t._graphics = null,
        t._renderType = 0,
        t.autoSize = !1,
        t.hitTestPrior = !1,
        t.viewport = null,
        t._optimizeScrollRect = !1,
        t._texture = null
    }
    ,
    Ks.bodyData = {},
    Ks.hasRoleData = !1,
    Ks.s_debugCost = !1,
    Ks.s_isDebuging = !1,
    Ks.s_log = "";
    var $s, qs = Ks;
    function Ks() {
        this._playOverRecover = !1,
        this._playOverRemove = !1,
        this.interval = 0,
        this._inters = null,
        this.offset = null,
        this._clips = null,
        this._poses = null,
        this._poseProgress = -1,
        this._count = 0,
        this._effectFrame = -1,
        this._releaseFrame = -1,
        this._isPlaying = !1,
        this.url = null,
        this.backToFirstFrame = !1,
        this._actName = null,
        this._direct = 0,
        this._roleScale = 1,
        this._roleScaleY = 0,
        this._appendList = null,
        this.completeFun = null,
        this._loadCompleteHand = null,
        this._resloadCompleteHand = null,
        this.backToLastFrame = !1,
        this._repeat = !1,
        this._lastPoseTime = 0,
        this.poseInfo = null,
        this._effectTime = 0,
        this.releaseTime = 0,
        this._playInterMultiple = 1,
        this.__x = 0,
        this.__y = 0,
        this._offsetX = 0,
        this._offsetY = 0,
        this._ignorePause = !1,
        this._vmcHeight = 0,
        this._dirName = null,
        this.actCompleteCallBack = null,
        this.stopCallBack = null,
        this.isSon = !1,
        this.isNotAppendPos = !1,
        this.isBody = !1,
        this.mcScale = 0,
        this.isRolePart = !1,
        this._resClearTime = 6e4,
        this._hided = !1,
        this.m_isPause = !1,
        this._targetFrame = -1,
        this._onTargetHandler = null,
        this._onlyOnce = !1,
        this._frameChangeHandler = null,
        this._paintHandler = null,
        this.m_pauseFrame = null,
        this.m_interPauseFrame = null,
        this.m_recoverUndisplay = !1,
        this.m_unDisplayRecoverCallBack = null,
        this.m_markSimpleVmc = !1,
        this._recovered = !1,
        this._lastTexX = 0,
        this._lastTexY = 0,
        $s.call(this),
        this._poses = [],
        this.once("display", this, this.onDisplay)
    }
    t(Js, "app.fateGame.mission.AppMovieMouseMc", Qs = z),
    (v = Js.prototype).setIsStart = function(t) {
        this.add_y = 0,
        this._change = 0,
        x.timer.clear(this, this.loopFun),
        t && x.timer.loop(34, this, this.loopFun)
    }
    ,
    v.loopFun = function() {
        0 == this._change ? (this.add_y++,
        3 < this.add_y && (this._change = 1)) : (this.add_y--,
        this.add_y < -3 && (this._change = 0)),
        this._up.y = 3 + this.add_y
    }
    ;
    var Qs, Zs = Js;
    function Js() {
        this._down = null,
        this._up = null,
        this.add_y = 0,
        this._change = 0,
        Qs.call(this),
        this._down = new J,
        this._down.skin = "x5_compWx/movie_down.png",
        this._up = new J,
        this._up.skin = "x5_compWx/movie_up.png",
        this.addChild(this._down),
        this.addChild(this._up),
        this._up.x = 6,
        this._up.y = 3
    }
    t(sn, "app.fateGame.mission.AppParticleOne", tn = z),
    sn.prototype.recover = function() {
        this.graphics.clear(),
        this.timeLife = 0,
        this.startTime = 0,
        this.startSize = 0,
        this.startDir = 0,
        this.startSpeed = 0,
        this.startRotate = 0,
        this.startAlpha = 0,
        this.removeSelf(),
        dt.recover("app.fateGame.mission.AppParticleOne", this)
    }
    ,
    sn.create = function() {
        return dt.getItemByClass("app.fateGame.mission.AppParticleOne", sn)
    }
    ;
    var tn, en = sn;
    function sn() {
        this.timeLife = NaN,
        this.startTime = NaN,
        this.startSize = NaN,
        this.startSizeX = NaN,
        this.startSizeY = NaN,
        this.startDir = NaN,
        this.startSpeed = NaN,
        this.startRotate = NaN,
        this.startAlpha = NaN,
        tn.call(this)
    }
    t(an, "app.fateGame.mission.AppParticleShow", nn = z),
    (T = an.prototype).play = function(t) {
        this.stop(),
        x.__typeof(t, Ye) ? this.m_cxt = t : (this.m_cxt = new Ye,
        fi.copyTo(t, this.m_cxt)),
        this.doFirstRound(),
        x.timer.frameLoop(1, this, this.onFrame),
        this.once("undisplay", this, this.onUndisplay),
        this.m_beginTime = x.timer.currTimer,
        this.m_lastRoundPos = new pt(this.x,this.y)
    }
    ,
    T.stop = function() {
        for (var t in x.timer.clear(this, this.onFrame),
        this.off("undisplay", this, this.onUndisplay),
        this.m_beginTime = -1,
        this.m_lastRoundTime = -1,
        this.m_curRound = -1,
        this.m_runingParticles)
            this.m_runingParticles[t].recover();
        this.m_runingParticles = []
    }
    ,
    T.onFrame = function() {
        for (var t = x.timer.currTimer, e = x.timer.delta, i = 0, i = this.m_runingParticles.length - 1; 0 <= i; --i)
            (t >= (s = this.m_runingParticles[i]).startTime + s.timeLife || 0 == s.timeLife) && (s.recover(),
            this.m_runingParticles.splice(i, 1));
        for (; this.m_runingParticles.length < this.m_cxt.maxParticles && (this.m_cxt.maxRound <= 0 || this.m_curRound < this.m_cxt.maxRound - 1) && 0 < this.m_cxt.intervalOfRound && (this.m_lastRoundTime <= 0 || this.m_lastRoundTime + this.m_cxt.intervalOfRound <= t); )
            this.doRound(),
            0 < this.m_cxt.maxRound && ++this.m_curRound,
            this.m_lastRoundTime <= 0 && (this.m_lastRoundTime = t),
            this.m_lastRoundTime += this.m_cxt.intervalOfRound;
        for (this.m_runingParticles.length < this.m_cxt.maxParticles && (this.m_cxt.maxRound <= 0 || this.m_curRound < this.m_cxt.maxRound - 1) && 0 < this.m_cxt.distanceOfRound && this.m_lastRoundPos.distance(this.x, this.y) > this.m_cxt.distanceOfRound && (this.doRound(),
        0 < this.m_cxt.maxRound && ++this.m_curRound,
        this.m_lastRoundPos.x = this.x,
        this.m_lastRoundPos.y = this.y),
        i = this.m_runingParticles.length - 1; 0 <= i; --i) {
            var s, n = (t - (s = this.m_runingParticles[i]).startTime) / s.timeLife, o = s.startSizeX + this.m_cxt.sizeX.timelife.getRangeValue(n, this.m_cxt.sizeXRange, this.m_cxt.sizeXRate), a = s.startSizeY + this.m_cxt.sizeY.timelife.getRangeValue(n, this.m_cxt.sizeYRange, this.m_cxt.sizeYRate);
            s.scaleX = o,
            s.scaleY = a;
            var o = (90 - (s.startDir + this.m_cxt.moveDir.timelife.getRangeValue(n, this.m_cxt.moveDirRange, this.m_cxt.moveDirRate))) * Math.PI / 180
              , a = s.startSpeed + this.m_cxt.moveSpeed.timelife.getRangeValue(n, this.m_cxt.moveSpeedRange, this.m_cxt.moveSpeedRate)
              , r = (90 - (s.startDir + this.m_cxt.gravityDir.timelife.getRangeValue(n, this.m_cxt.gravityDirRange, this.m_cxt.gravityDirRate))) * Math.PI / 180
              , l = this.m_cxt.gravityForce * n;
            0 == a && 0 == l || (s.x += a * e * Math.cos(o) + l * e * Math.cos(r),
            s.y += a * e * Math.sin(o) + l * e * Math.sin(r)),
            s.rotation = s.startRotate + this.m_cxt.rotation.timelife.getRangeValue(n, this.m_cxt.rotationRange, this.m_cxt.rotationRate),
            s.alpha = s.startAlpha + this.m_cxt.alpha.timelife.getRangeValue(n, this.m_cxt.alphaRange, this.m_cxt.alphaRate)
        }
    }
    ,
    T.onUndisplay = function() {
        x.timer.callLater(this, this.stop)
    }
    ,
    T.doShootRounds = function(t) {
        for (var e = 0; e < t; e++)
            this.doRound()
    }
    ,
    T.doFirstRound = function() {
        this.doShootRounds(this.m_cxt.firstRoundCount)
    }
    ,
    T.doRound = function() {
        for (var t = Math.floor(this.m_cxt.numOfRound.randomValue), e = 0; e < t; ++e) {
            if (this.m_runingParticles.length >= this.m_cxt.maxParticles)
                return;
            var i = this.getOne();
            this.m_runingParticles.push(i)
        }
    }
    ,
    T.getOne = function() {
        var t = en.create();
        return this.addChild(t),
        t.loadImage(this.m_cxt.url),
        t.x = 0 == this.m_cxt.rangX ? 0 : -this.m_cxt.rangX / 2 + Math.random() * this.m_cxt.rangX,
        t.y = 0 == this.m_cxt.rangY ? 0 : -this.m_cxt.rangY / 2 + Math.random() * this.m_cxt.rangY,
        t.startTime = x.timer.currTimer,
        t.timeLife = this.m_cxt.lifeTime.randomValue,
        t.startSizeX = this.m_cxt.sizeX.start.randomValue,
        t.startSizeY = this.m_cxt.sizeY.start.randomValue,
        t.scaleX = t.startSize,
        t.scaleY = t.startSize,
        t.startDir = this.m_cxt.moveDir.start.randomValue,
        t.startSpeed = this.m_cxt.moveSpeed.start.randomValue,
        t.startRotate = this.m_cxt.rotation.start.randomValue,
        t.rotation = t.startRotate,
        t.startAlpha = this.m_cxt.alpha.start.randomValue,
        t.alpha = t.startAlpha,
        t
    }
    ,
    e(0, T, "isPlaying", function() {
        return -1 != this.m_beginTime
    }, nn.prototype._$set_isPlaying);
    var nn, on = an;
    function an() {
        this.m_cxt = null,
        this.m_runingParticles = [],
        this.m_lastRoundTime = -1,
        this.m_curRound = -1,
        this.m_beginTime = -1,
        this.m_lastRoundPos = new pt,
        nn.call(this)
    }
    t(hn, "app.fateGame.notice.AppGeneralNoticeItem", rn = z),
    (i = hn.prototype).getHtmlTextElement = function(t) {
        var e = new Y;
        return null == t && (t = new ii),
        e.style.fontFamily = t.font,
        e.style.fontSize = t.fontSize,
        e.style.wordWrap = t.wordWrap,
        e.style.color = t.color,
        e.style.align = t.align,
        e
    }
    ,
    i.setData = function(t) {
        this._htmlDiv.innerHTML = t,
        this._bg.width = this._htmlDiv.contextWidth + 88,
        this._bg.height = 38,
        this._htmlDiv.x = 44,
        this._htmlDiv.y = 9,
        this.size(this._bg.width, this._bg.height),
        m.clearAll(this),
        this.alpha = 1,
        x.timer.once(1500, this, this.delayHandler)
    }
    ,
    i.delayHandler = function() {
        m.to(this, {
            alpha: 0
        }, 750, null, b.create(this, this.completeHandler), 0, !0)
    }
    ,
    i.completeHandler = function() {
        this.event("GENERAL_NOTICE_COMPLETE"),
        this.removeSelf()
    }
    ;
    var rn, ln = hn;
    function hn() {
        this._htmlDiv = null,
        this._bg = null,
        rn.call(this),
        this._htmlDiv = this.getHtmlTextElement(null),
        this._htmlDiv.style.fontSize = 18,
        this._htmlDiv.style.color = "#ff2c3b",
        this._htmlDiv.style.fontFamily = "黑体",
        this.addChild(this._htmlDiv),
        this._bg = new J,
        this._bg.skin = "x5_compWx/bg_notice4.png",
        this._bg.sizeGrid = "12,0,12,0",
        this.addChildAt(this._bg, 0)
    }
    var cn;
    t(pn, "app.fateGame.role.AppPlayerControlRoleInfo", cn = Ds),
    e(0, pn.prototype, "enemyState", function() {
        return this._enemyState
    }, function(t) {
        this._enemyState != t && (this._enemyState = t,
        this.event("event_update_enemy_state"))
    }),
    pn.createByPlayerDetailBean = function(t, e, i) {
        var s = new pn;
        return s.type = 13,
        s.personId = t.personId,
        s.ownPlayerId = t.ownPlayerId,
        s.sex = t.sex,
        s.skinId = t.skinId,
        s.nickName = t.personId.equal(A.ins.playerInfo.personId) ? A.ins.playerInfo.nickName : t.playerName,
        s.x = e,
        s.y = i,
        s.level = t.level,
        s
    }
    ;
    function pn() {
        this.moveType = 0,
        this.reliveTime = new Gi,
        this.allianceWarType = 0,
        this._enemyState = 0,
        this.countryId = 0,
        cn.call(this)
    }
    t(gn, "app.fateGame.role.AppRoleTopView", un = z),
    (s = gn.prototype).setParantScene = function(t) {
        this.m_parantScene = t,
        this.m_parantScene.roleTopLayer.addChild(this),
        this._nameText && this._nameText.parent != this.m_parantScene.nameLayer && this.m_parantScene.nameLayer.addChild(this._nameText)
    }
    ,
    s.recover = function() {
        this._nameText.parent && this._nameText.removeSelf(),
        this._nameText.text = "",
        this._nameText.visible = !0,
        this._nameText.alpha = 1,
        this._nameText.fontSize = 18,
        this._nameText.font = "黑体",
        this._nameText.color = "#ffffff",
        this._nameText.bold = !1,
        this._nameText.stroke = g.Name_Font_Stroke,
        x.timer.clearAll(this),
        this.allHeight = 0,
        this.m_parantScene = null,
        this.m_needReCalc = !1,
        this.visible = !0,
        this.alpha = 1,
        this.pos(0, 0),
        this.removeSelf()
    }
    ,
    s.onLoop = function() {
        this.parent && this.m_parent.info && this.m_parent.info.personId && (this.m_parantScene && null == this.m_parantScene.parent || (this.pos(this.m_parent.x, this.m_parent.y - this.m_parent.high, !0),
        this.m_parantScene && this.calc(!0),
        this.m_needReCalc && (this.m_needReCalc = !1,
        this.calc(!1))))
    }
    ,
    s.reCalc = function() {
        this.m_needReCalc = !0
    }
    ,
    s.calc = function(t) {
        var e = t ? this.x : 0
          , i = t ? this.y : 0
          , t = t && this.m_parantScene || !t && null == this.m_parantScene
          , s = this._nameText ? this._nameText.textWidth : 0;
        t && this._nameText.text && this._nameText.pos(e + -s / 2, i + -26, !0),
        this.allHeight = Math.abs(-26)
    }
    ,
    s.setName = function(t, e) {
        this._nameText.text != t && (e = e || "#ffffff",
        this.m_parantScene ? this.m_parantScene.nameLayer != this._nameText.parent && this.m_parantScene.nameLayer.addChild(this._nameText) : this.m_cacheLayer != this._nameText.parent && this.m_cacheLayer.addChild(this._nameText),
        this._nameText.fontSize = 18,
        this._nameText.color = e,
        this._nameText.stroke = g.Name_Font_Stroke,
        this._nameText.text = t,
        this.reCalc(),
        x.timer.frameOnce(1, this, this.reCalc, null, !0, !0))
    }
    ,
    s.setAlpha = function(t) {
        this.alpha = t
    }
    ,
    e(0, s, "nameText", function() {
        return this._nameText
    }, un.prototype._$set_nameText);
    var un, dn = gn;
    function gn() {
        this.m_cacheLayer = null,
        this.m_dynamicLayer = null,
        this.m_parent = null,
        this.m_parantScene = null,
        this.m_needReCalc = !1,
        this._nameText = null,
        this.allHeight = 0,
        un.call(this),
        this.m_cacheLayer = new z,
        this.addChild(this.m_cacheLayer),
        this.m_dynamicLayer = new z,
        this.addChild(this.m_dynamicLayer),
        this._nameText = new Tt,
        this.recover()
    }
    t(fn, "app.fateGame.role.AppRoleView", mn = z),
    (P = fn.prototype).onDisplay = function() {
        this.once("undisplay", this, this.onUndisplay),
        this.updateName(),
        this.updateShowRealShadow(M.ins.checkShowRealShadow())
    }
    ,
    P.onUndisplay = function() {
        this.once("display", this, this.onDisplay)
    }
    ,
    P.updateAlpha = function() {
        this._realAlpha = this._outSetAlpha,
        this._realAlpha = this._isTransparent ? .5 * this._realAlpha : this._realAlpha,
        x.__typeof(this, pa) || !this.info || this._isNameToAlpha || this.nameAlphaOver(),
        x.superSet(mn, this, "alpha", this._realAlpha),
        this.updateShadowAlpha()
    }
    ,
    P.hideTargetCircle = function() {
        this._targetCircle && (this._targetCircle.recover(),
        this._targetCircle = null)
    }
    ,
    P.sceneHideRole = function(t) {
        this._ignoreSceneHide && (t = !1),
        this._sceneHideRole != t && (this._forceHideRole ? this._sceneHideRole = !1 : (this._sceneHideRole = t,
        this.setHideStatus()))
    }
    ,
    P.forceHideRole = function(t) {
        this._forceHideRole = t,
        this._sceneHideRole = !1,
        this.setHideStatus()
    }
    ,
    P.setHideStatus = function() {
        this._bodyView && (this._bodyView.hided = this.hided,
        this._bodyView.visible = !this.hided),
        this.setStaffVisible()
    }
    ,
    P.setStaffVisible = function() {
        this._targetCircle && (this._targetCircle.visible = !this.hided && this.visible),
        this.shadowView && (this.shadowView.visible = !this.hided && this.visible),
        this.checkNameVisible()
    }
    ,
    P.initRoleView = function() {
        this.filters = [],
        this.shadowView || (this.shadowView = new z),
        this.shadowView.parent && this.shadowView.removeSelf(),
        this.shadowView.visible = !0,
        this._forceHideRealShadow = !1,
        this._shadowLoading = !1,
        this.updateShowRealShadow(!1, !0),
        this._backBody || (this._backBody = new z,
        this._backBody.name = "_backBody"),
        this.addChildAt(this._backBody, 0),
        this._bodyView = qs.createVMC(),
        this._bodyView.hided = this.hided,
        this._bodyView.visible = !this.hided,
        this._bodyView.isRolePart = !0,
        this._bodyView.resClearTime = 3e4,
        this._bodyView.paintHandler(new b(this,this.bodyViewPaint)),
        this._bodyView.isBody = !0,
        this._bodyView.roleScale = I.roleScale,
        this._bodyView.on("complete", this, this.actComplete),
        this.addChild(this._bodyView),
        this._frontBody || (this._frontBody = new z,
        this._frontBody.name = "_frontBody"),
        this.addChild(this._frontBody)
    }
    ,
    P.bodyViewPaint = function(t, e, i) {
        void 0 === e && (e = 0),
        void 0 === i && (i = 0),
        this.showRealShadow && this.shadowView && this.shadowView.parent && this.shadowView.visible && (t ? this._realShadow.setTexture2(t, e, i) : this._realShadow.texture = null)
    }
    ,
    P.pos = function(t, e, i) {
        return mn.prototype.pos.call(this, t, e, i = void 0 === i ? !1 : i)
    }
    ,
    P.hideName = function() {
        this.isNameVisible = !1,
        this.setStaffVisible()
    }
    ,
    P.showName = function() {
        this.isNameVisible = !0,
        this.setStaffVisible()
    }
    ,
    P.setName2 = function(t) {
        this.viewName2 = t
    }
    ,
    P.setName = function(t) {
        this.viewName = t;
        var e = "#ffffff"
          , e = (this.isNpc(),
        "#ffffff");
        this._topView.setName(t, e)
    }
    ,
    P.stopInTargetFrame = function(t, e, i) {
        this._bodyView && this._bodyView.onTargetFramehandler(t, new b(this,this.targetFrameHandler,[e, i]), !0)
    }
    ,
    P.targetFrameHandler = function(t, e) {
        this._fatherActType == e && this.pause(t)
    }
    ,
    P.pause = function(t) {
        this._bodyView.m_isPause || (this._bodyView && (this._bodyView.m_isPause = !0),
        x.timer.once(t, this, this.pauseOver, null, !0, !0))
    }
    ,
    P.pauseOver = function() {
        x.timer.clear(this, this.pauseOver),
        this._bodyView && this._bodyView.m_isPause && (this._bodyView.m_isPause = !1)
    }
    ,
    P.viewAlpha = function(t, e) {
        this._bodyView && 1 != this._bodyView.alpha || (this._isViewToAlpha = !0,
        this._bodyView && (this._bodyView.alpha = e),
        this.shadowView && (this.shadowView.alpha = e),
        this._targetCircle && (this._targetCircle.alpha = e),
        x.timer.once(t, this, this.viewAlphaOver))
    }
    ,
    P.viewAlphaOver = function() {
        this._isViewToAlpha = !1,
        this._bodyView && (this._bodyView.alpha = 1),
        this.shadowView && (this.shadowView.alpha = 1),
        this._targetCircle && (this._targetCircle.alpha = 1)
    }
    ,
    P.nameAlpha = function(t, e) {
        1 == this._topView.alpha && (this._isNameToAlpha = !0,
        this.doNameAlpha(e),
        x.timer.once(t, this, this.nameAlphaOver))
    }
    ,
    P.doNameAlpha = function(t) {
        this._topView.setAlpha(t),
        this.nameText && (this.nameText.alpha = t)
    }
    ,
    P.nameAlphaOver = function() {
        this._topView.setAlpha(1),
        this._isNameToAlpha = !1,
        this.nameText && (this.nameText.alpha = 1)
    }
    ,
    P.offset = function(t, e) {
        this._bodyView && this._bodyView.move(t, e)
    }
    ,
    P.resetHp = function() {}
    ,
    P.resetRole = function() {}
    ,
    P.checkNameVisible = function() {
        this.nameText && (this.nameText.visible = this.isNameVisible && this.visible,
        this._topView.visible = this.isNameVisible && this.visible)
    }
    ,
    P.updateName = function() {
        this._info && ("" != this.viewName2 ? this.setName(this.viewName2) : this.setName(this._info.nickName))
    }
    ,
    P.isAttack = function() {
        return "act05" == this._fatherActType
    }
    ,
    P.setActEx = function(t, e, i, s, n) {
        void 0 === e && (e = !0),
        void 0 === i && (i = !0),
        void 0 === s && (s = !1),
        void 0 === n && (n = NaN),
        n = isNaN(n) ? this._direct : fi.getTargetAnglt(n),
        (this._actType != t || n != this._direct && fi.getFormatDir(this._direct, t, 0) != fi.getFormatDir(n, t, 0)) && this.setAct(t, e, i, s, n)
    }
    ,
    P.fatherAct2ActName = function(t) {
        return t
    }
    ,
    P.setAct = function(t, e, i, s, n) {
        void 0 === e && (e = !0),
        void 0 === i && (i = !0),
        void 0 === s && (s = !1),
        n = fi.getTargetAnglt(n = void 0 === n ? NaN : n);
        s = !1;
        return this.isPlayer() && !x.__typeof(this, pa) && "act01" == t && null != A.ins.getTeammatesByPersonId(this.info.personId) && (s = !0),
        this.pauseOver(),
        this._fatherActType = t,
        this._actType = this.fatherAct2ActName(t),
        this._autoStand = i,
        this._repeat = e,
        isNaN(n) || (this._direct = n),
        this.loadRoleRes(),
        g.isWxOrKuaishou() && "act03" == t && (g.isWXNew ? null != A.ins.getTeammatesByPersonId(this.info.personId) && this.isPlayer() && this.dontClear("bodyView", this._bodyView) : we.ins.dontClear(this.info.personId + "bodyView", null)),
        s && this.dontClear("bodyView", this._bodyView),
        !0
    }
    ,
    P.dontClear = function(t, e) {
        e = e && e.url ? e.url.substr(0, e.url.lastIndexOf("/")) : null;
        we.ins.dontClear(this.info.personId + t, e)
    }
    ,
    P.resetRoleRes = function() {
        this._fatherActType && "act05" != this._fatherActType && this.setAct(this._fatherActType, this._repeat, this._autoStand, !1, this._direct)
    }
    ,
    P.getPlayerRes = function() {
        return 1 == this.info.sex ? "x5/nan_01" : "x5/nv_01"
    }
    ,
    P.changeRoleModel = function() {
        this.loadRoleRes()
    }
    ,
    P.loadRoleRes = function() {
        var t, e, i, s;
        !this.info || "act03" == this.fatherActType && fi.getFormatDir(this.doingDirect, this.actType, 0, !1) == fi.getFormatDir(this.direct, this.actType, 0, !1) && this.doingAct == this.actType && 0 == this.toChangeRes || (this.doingDirect = this.direct,
        this.doingAct = this.actType,
        s = this.actType,
        t = this.direct,
        this.isNpc() ? (i = this.info.showID,
        s = "act01") : this.info && this.info.isRole() && (i = this.getPlayerRes()),
        t = fi.getFormatDir(t, s, 0, !1),
        "" != (e = this.info.getCurShowModels(!1)) && (s = this._fatherActType,
        i = e),
        e = "art/res/role/" + this.GM_URL + i + "/" + s + "/" + Math.abs(t) + ".json",
        i = this.doingFormatDir != t,
        this.doingFormatDir = t,
        s = i,
        this._bodyView.updatePose(e, t, b.create(this, this.showRoleView), this._repeat, !1, !1, "", !1, !0, !1, b.create(this, this.loadBodyComplete), !1, b.create(this, this.calcVmcSpeed)),
        s && this.updateViewLayout(),
        this.calcVmcSpeed(),
        this.updateViewXY())
    }
    ,
    P.calcVmcSpeed = function() {
        this._fatherActType,
        this._bodyView.playInterMultiple = 1
    }
    ,
    P.updateViewXY = function() {
        Ji.ins.isInCity;
        this._bodyView && this._bodyView.move(0, -0)
    }
    ,
    P.removeAppend = function(t) {
        this._bodyView && this._bodyView.removeAppend(t)
    }
    ,
    P.showRoleView = function() {
        this._bodyView.paint()
    }
    ,
    P.loadBodyComplete = function() {
        this.showRealShadow && this.setRealShadowSkew(),
        this.event("complete")
    }
    ,
    P.loop = function() {
        this.shadowView && this.shadowView.parent != this && this.shadowView.pos(this.x - this.shadowView.width / 2, this.y - this.shadowView.height / 2, !0),
        this._targetCircle && this._targetCircle.pos(this.x, this.y, !0),
        this._topView.onLoop()
    }
    ,
    P.updateViewLayout = function() {
        for (var t, e = [this._backBody, this._bodyView, null, this._frontBody], i = null != e ? e.length : 0, s = 0, n = 0; n < i; n++)
            (t = e[n]) && t.parent == this && (this.getChildIndex(t) != s && this.setChildIndex(t, s),
            s++)
    }
    ,
    P.recoverSpAndEff = function(t) {
        for (t.removeSelf(); 0 < t.numChildren; ) {
            var e = t.removeChildAt(0);
            x.__typeof(e, qs) || x.__typeof(e, Xs) ? e.recover() : this.recoverSpAndEff(e)
        }
    }
    ,
    P.removeAllBodyEff = function() {}
    ,
    P.removeAllBuffEffect = function() {}
    ,
    P.restoreAllBuffEffect = function() {}
    ,
    P.removeAllEffect = function() {
        if (this.removeAllBodyEff(),
        this.removeAllBuffEffect(),
        this.frontBody)
            for (; 0 < this.frontBody.numChildren; ) {
                var t = this.frontBody.removeChildAt(0);
                this.recoverSpAndEff(t)
            }
        if (this.backBody)
            for (; 0 < this.backBody.numChildren; ) {
                t = this.backBody.removeChildAt(0);
                this.recoverSpAndEff(t)
            }
    }
    ,
    P.updatePosition = function() {}
    ,
    P.isUser = function() {
        return !!(this._info && this._info.personId && A.ins.playerInfo && A.ins.playerInfo.personId) && this._info.personId.equal(A.ins.playerInfo.personId)
    }
    ,
    P.isTeammate = function() {
        return !(!this._info || !this._info) && null != A.ins.getTeammatesByPersonId(this._info.personId)
    }
    ,
    P.isPlayer = function() {
        return this.info && this.info.isPlayer()
    }
    ,
    P.isPlayerControlRole = function() {
        return this.info && this.info.isPlayerControlRole()
    }
    ,
    P.isNpc = function() {
        return this.info && this.info.isNpc()
    }
    ,
    P.actComplete = function() {
        this._autoStand ? "act01" != this.actType && this.setAct("act01", !0, !1, !0) : null != this._bodyView && this._bodyView.stop(),
        this.event("Act_Finish")
    }
    ,
    P.showTargetCircle = function(t) {
        void 0 === t && (t = 1),
        this.hided || (this._targetCircle || (this._targetCircle = dt.getItemByClass("app.fateGame.f1.vmc.AppVMCView", qs),
        this._targetCircle.resClearTime = 6e4,
        ve.ins.gameScene.bottomLayer.addChild(this._targetCircle)),
        this._targetCircle.updatePose(Me.getEffectUrl("choose_circle_" + t), 90, null, !0),
        this._targetCircle.roleScale = .7,
        this._targetCircle.pos(this.x, this.y, !0),
        this.isNameVisible = !0)
    }
    ,
    P.destroy = function(t) {
        void 0 === t && (t = !0),
        this.recover()
    }
    ,
    P.recover = function(t) {
        void 0 === t && (t = !0),
        this.parent && this.parent.removeChild(this),
        this.isShowRealShadow = !0,
        this.shadow && (this.shadow.pivotY = 0),
        this.debugSeaGod = !1,
        this.nameAlphaOver(),
        this.curStatus = 0,
        this.removeAllEffect(),
        this._isOtherToAlpha = !1,
        this._isViewToAlpha = !1,
        this._isNameToAlpha = !1,
        this.isRole = !0,
        this.forceHigh = 0,
        this._monsterHigh = 0,
        this.viewAlphaOver(),
        this._bodyView && (this._bodyView.recover(),
        this._bodyView = null),
        this.visible = !0,
        this.isNameVisible = !0,
        this._backBody && (this.recoverSpAndEff(this._backBody),
        this._backBody = null),
        this._frontBody && (this.recoverSpAndEff(this._frontBody),
        this._frontBody = null),
        this._targetCircle && (this._targetCircle.recover(),
        this._targetCircle = null),
        this._topView.recover(),
        x.timer.clear(this, this.nameAlphaOver),
        x.timer.clear(this, this.viewAlphaOver),
        this.typeUrl = "ac001",
        this._actType = "act01",
        this._roleSelected = !1,
        this._selectedLight && (this._selectedLight.recover(),
        this._selectedLight = null),
        this._roleScale = 1,
        this._fatherActType = "act01",
        this._repeat = !1,
        this._autoStand = !1,
        this._direct = 135,
        this.doingDirect = NaN,
        this.doingFormatDir = NaN,
        this.doingAct = null,
        this._forceHideRole = !1,
        this._sceneHideRole = !1,
        this._ignoreSceneHide = !1,
        this._isTransparent = !1,
        this._outSetAlpha = 1,
        this._realAlpha = 1,
        x.superSet(mn, this, "alpha", 1),
        this.forceX = 0,
        this.forceY = 0,
        this.viewName2 = "",
        this.filters && 0 < this.filters.length && (this.filters = []),
        x.timer.clearAll(this),
        m.clearAll(this),
        Yt.removeTweens(this, !0),
        this.viewName = "",
        this._info && (this._info.off("update_view", this, this.resetRoleRes),
        this._info.off("change_playerinfo", this, this.updateName),
        this._info.off("change_role_models", this, this.changeRoleModel)),
        this._info = null,
        fi.resetSprite(this),
        this.initRoleView(),
        t && dt.recover("app.fateGame.role.AppRoleView", this)
    }
    ,
    P.updateShowRealShadow = function(t, e) {
        void 0 === e && (e = !1),
        0 == this.isShowRealShadow || !e && this._showRealShadow == t || (this._showRealShadow = t,
        this._showRealShadow ? (this.shadowView.graphics.clear(),
        this.shadowView.width = 0,
        this.shadowView.height = 0,
        this._realShadow || (this._realShadow = new z,
        fn.s_realShadowFilter || (fn.s_realShadowFilter = [new Lt([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .5, 0])]),
        this._realShadow.filters = fn.s_realShadowFilter,
        this.shadowView.addChild(this._realShadow)),
        this.updateShadowAlpha(),
        this.setRealShadowSkew()) : (this.shadowView.graphics.clear(),
        this.shadowView.skewX = 0,
        this.shadowView.skewY = 0,
        this._shadowLoading || (this._shadowLoading = !0),
        this._realShadow && (this._realShadow.texture = null,
        this._realShadow.destroy(),
        this._realShadow = null)))
    }
    ,
    P.setRealShadowSkew = function() {
        var t, e, i, s;
        this._realShadow && (t = -40,
        e = 0,
        fn.DEBUG_REALSHADOW_SKEW_OPEN && (t = fn.DEBUG_REALSHADOW_SKEW_X,
        e = fn.DEBUG_REALSHADOW_SKEW_Y),
        i = 120,
        s = 60,
        fn.DEBUG_REALSHADOW_SCALE_OPEN && (i = fn.DEBUG_REALSHADOW_SCALE_X,
        s = fn.DEBUG_REALSHADOW_SCALE_Y),
        this._realShadow.scaleX = i / 100 * this._bodyView.scaleX * this.scaleX,
        this._realShadow.scaleY = s / 100 * this._bodyView.scaleY * this.scaleY,
        this.shadowView.skewX = t,
        this.shadowView.skewY = e)
    }
    ,
    P.defaultShadowCompleted = function() {
        !this.showRealShadow && this._shadowLoading || this.shadowView && (this.shadowView.graphics.clear(),
        this.shadowView.width = 0,
        this.shadowView.height = 0),
        this._shadowLoading = !1
    }
    ,
    P.updateShadowAlpha = function() {
        this._realShadow && (this._realShadow.alpha = (this._forceHideRealShadow ? 0 : 1) * this._realAlpha)
    }
    ,
    e(0, P, "isNameVisible", function() {
        return this._isNameVisible
    }, function(t) {
        this._isNameVisible = t,
        this.checkNameVisible()
    }),
    e(0, P, "viewName2", function() {
        return this._viewName2
    }, function(t) {
        this._viewName2 = t
    }),
    e(0, P, "isTransparent", function() {
        return this._isTransparent
    }, function(t) {
        this._isTransparent != t && (this._isTransparent = t,
        this.updateAlpha())
    }),
    e(0, P, "visible", mn.prototype._$get_visible, function(t) {
        x.superSet(mn, this, "visible", t),
        this.setStaffVisible()
    }),
    e(0, P, "alpha", function() {
        return this._outSetAlpha
    }, function(t) {
        this._outSetAlpha = t,
        this.updateAlpha()
    }),
    e(0, P, "roleScale", function() {
        return this._roleScale
    }, function(t) {
        this._roleScale = t,
        this.scale(I.roleScale * this._roleScale, I.roleScale * this._roleScale),
        this.setRealShadowSkew()
    }),
    e(0, P, "roleSelected", function() {
        return this._roleSelected
    }, function(t) {
        this._roleSelected = t,
        x.timer && (this._roleSelected ? (this._selectedLight || (this._selectedLight = qs.createVMC(),
        this._selectedLight.resClearTime = 6e4),
        this.info && (this._selectedLight.updatePose(this.isNpc() ? Me.getEffectUrl("choose_circle_3") : Me.getEffectUrl("choose_circle_1"), 90, null, !0),
        this.addChildAt(this._selectedLight, 0))) : this._selectedLight && this._selectedLight.parent == this && (this._selectedLight.stop(),
        this._selectedLight.parent.removeChild(this._selectedLight)))
    }),
    e(0, P, "info", function() {
        return this._info
    }, function(t) {
        this._info && (this._info.off("update_view", this, this.resetRoleRes),
        this._info.off("change_playerinfo", this, this.updateName),
        this._info.off("change_role_models", this, this.changeRoleModel)),
        this._info = t,
        this.curStatus = 0,
        t && (this._info.on("update_view", this, this.resetRoleRes),
        this._info.on("change_playerinfo", this, this.updateName),
        this._info.on("change_role_models", this, this.changeRoleModel),
        this.updateName(),
        this.updateAlpha())
    }),
    e(0, P, "direct", function() {
        return this._direct
    }, function(t) {
        t = fi.getTargetAnglt(t),
        this._direct != t && (this._direct = t,
        this.loadRoleRes())
    }),
    e(0, P, "curStatus", function() {
        return this._curStatus
    }, function(t) {
        this._info ? this._curStatus = t : this._curStatus = 0
    }),
    e(0, P, "ignoreSceneHide", function() {
        return this._ignoreSceneHide
    }, function(t) {
        this._ignoreSceneHide = t
    }),
    e(0, P, "forceHideRealShadow", mn.prototype._$get_forceHideRealShadow, function(t) {
        this._forceHideRealShadow != t && (this._forceHideRealShadow = t,
        this.updateShadowAlpha())
    }),
    e(0, P, "frontBody", function() {
        return this._frontBody
    }, mn.prototype._$set_frontBody),
    e(0, P, "backBody", function() {
        return this._backBody
    }, mn.prototype._$set_backBody),
    e(0, P, "bodyView", function() {
        return this._bodyView
    }, mn.prototype._$set_bodyView),
    e(0, P, "shadow", function() {
        return this.shadowView
    }, mn.prototype._$set_shadow),
    e(0, P, "topView", function() {
        return this._topView
    }, mn.prototype._$set_topView),
    e(0, P, "nameText", function() {
        return this._topView.nameText
    }, mn.prototype._$set_nameText),
    e(0, P, "hided", function() {
        return this._forceHideRole || this._sceneHideRole
    }, mn.prototype._$set_hided),
    e(0, P, "namehigh", function() {
        return this._topView ? this.high + this._topView.allHeight : this.high
    }, mn.prototype._$set_namehigh),
    e(0, P, "high", function() {
        return 0 < this.forceHigh ? this.forceHigh : 0 < this._monsterHigh ? this._monsterHigh : !this.info && this._bodyView && 0 < this._bodyView.vmcHeight ? this._bodyView.vmcHeight * this.roleScale : 94 * this.roleScale
    }, mn.prototype._$set_high),
    e(0, P, "firstCalHeight", function() {
        return this._firstCalHeight <= 0 && (this._firstCalHeight = this.high),
        this._firstCalHeight
    }, mn.prototype._$set_firstCalHeight),
    e(0, P, "actType", function() {
        return this._actType
    }, mn.prototype._$set_actType),
    e(0, P, "isStand", function() {
        return "act01" == this._fatherActType
    }, mn.prototype._$set_isStand),
    e(0, P, "fatherActType", function() {
        return this.isStand ? "act01" : this._fatherActType
    }, mn.prototype._$set_fatherActType),
    e(0, P, "currentActEffectTime", function() {
        return this._bodyView ? this._bodyView.effectTime * this._bodyView.playInterMultiple : 0
    }, mn.prototype._$set_currentActEffectTime),
    e(0, P, "currentActReleaseTime", function() {
        return this._bodyView ? this._bodyView.releaseTime * this._bodyView.playInterMultiple : 0
    }, mn.prototype._$set_currentActReleaseTime),
    e(0, P, "showRealShadow", function() {
        return this._showRealShadow
    }, mn.prototype._$set_showRealShadow),
    e(0, P, "realShadow", function() {
        return this._realShadow
    }, mn.prototype._$set_realShadow),
    fn.DEBUG_REALSHADOW_SKEW_OPEN = !1,
    fn.DEBUG_REALSHADOW_SKEW_X = 40,
    fn.DEBUG_REALSHADOW_SKEW_Y = 0,
    fn.DEBUG_REALSHADOW_SCALE_OPEN = !1,
    fn.DEBUG_REALSHADOW_SCALE_X = 120,
    fn.DEBUG_REALSHADOW_SCALE_Y = 60,
    fn.textHeight = 26,
    fn.showHP = !1,
    fn.DefaultPlayerName = "魂师",
    fn.s_realShadowFilter = null;
    var mn, _n = fn;
    function fn() {
        this._bodyView = null,
        this.shadowView = null,
        this._realShadow = null,
        this._forceHideRealShadow = !1,
        this._showRealShadow = !1,
        this._shadowLoading = !1,
        this._topView = null,
        this._frontBody = null,
        this._curStatus = 0,
        this._backBody = null,
        this._info = null,
        this.typeUrl = "ac001",
        this._actType = "act01",
        this._roleSelected = !1,
        this._selectedLight = null,
        this._roleScale = 1,
        this._isNameVisible = !0,
        this._forceHideRole = !1,
        this._sceneHideRole = !1,
        this._ignoreSceneHide = !1,
        this._isTransparent = !1,
        this._outSetAlpha = 1,
        this._realAlpha = 1,
        this.forceX = 0,
        this.forceY = 0,
        this.m_isShocking = !1,
        this.preRoleScale = 0,
        this.viewName = "",
        this._viewName2 = "",
        this.showMonsterLevelIcon = !1,
        this.isCallLateStand = !1,
        this.FILTER_CONST = [180, 150, 120, 210, 240, 225, 320, 360, 90, 60],
        this._targetCircle = null,
        this._isNameToAlpha = !1,
        this._isViewToAlpha = !1,
        this._isOtherToAlpha = !1,
        this._monsterHigh = 0,
        this.forceHigh = 0,
        this._firstCalHeight = 0,
        this._fatherActType = "act01",
        this._repeat = !1,
        this._autoStand = !1,
        this._direct = 135,
        this.debugSeaGod = !1,
        this.GM_URL = "",
        this.doingDirect = NaN,
        this.doingFormatDir = NaN,
        this.doingAct = null,
        this.toChangeRes = !1,
        this.isRole = !0,
        this.isShowRealShadow = !0,
        mn.call(this),
        this._topView = new dn,
        (this._topView.m_parent = this).initRoleView(),
        this.once("display", this, this.onDisplay)
    }
    t(xn, "app.fateGame.f1.AppBaseSprite", yn = At),
    (v = xn.prototype).setWH = function(t, e) {
        this.__w = t,
        this.__h = e
    }
    ,
    v.setAttr = function(t, e) {
        null == this.attrs && (this.attrs = new ut),
        this.attrs[t] = e
    }
    ,
    v.getAttr = function(t) {
        return null != this.attrs ? this.attrs[t] : null
    }
    ,
    v.removeAttr = function(t) {
        this.attrs[t] = null,
        delete this.attrs[t]
    }
    ,
    v.removeAllAttr = function() {
        this.attrs = null
    }
    ,
    v.setAlpha = function(t) {
        this.alpha != t && (this.alpha = t)
    }
    ,
    v.setWidth = function(t) {
        this.width != t && (this.width = t)
    }
    ,
    v.setHeight = function(t) {
        this.height != t && (this.height = t)
    }
    ,
    v.setSize = function(t, e) {
        this.setWidth(t),
        this.setHeight(e)
    }
    ,
    v.getSprite = function() {
        return this
    }
    ,
    v.removeSprite = function(t) {
        t && t.parent && t.parent.removeChild(t)
    }
    ,
    v.setVisible = function(t) {
        this.visible != t && (this.visible = t)
    }
    ,
    v.removeChildByName = function(t) {
        t = this.getChildByName(t);
        return t ? this.removeChild(t) : null
    }
    ,
    v.getParent = function() {
        return this.parent
    }
    ,
    v.finalize = function() {
        xn.clearMcChild(this, !0),
        this.isFinalized = !0
    }
    ,
    v.removeFromParent = function(t) {
        void 0 === t && (t = !1),
        this.parent && this.parent.removeChild(this),
        t && this.finalize()
    }
    ,
    v.setFilters = function(t) {
        this.filters = t
    }
    ,
    v.resize = function() {}
    ,
    v.layoutMC = function(t, e, i, s, n, o, a) {
        void 0 === e && (e = 1),
        void 0 === i && (i = 0),
        void 0 === s && (s = 0),
        void 0 === n && (n = 0),
        void 0 === o && (o = NaN),
        void 0 === a && (a = NaN)
    }
    ,
    v.layoutGroup = function(t, e, i, s, n, o, a) {
        void 0 === e && (e = 1),
        void 0 === i && (i = 0),
        void 0 === s && (s = 0),
        void 0 === n && (n = 0),
        void 0 === o && (o = NaN),
        void 0 === a && (a = NaN)
    }
    ,
    v.addEvtListener = function(t, e, i) {
        t && this.on(t, this, e, i)
    }
    ,
    v.addEvtListeners = function(t, e) {
        var i, s;
        for (s in t)
            i = t[s],
            this.on(i, this, e)
    }
    ,
    v.removeEvtListener = function(t, e, i) {
        this.off(t, this, e, i = void 0 === i ? !1 : i)
    }
    ,
    v.dispatchEvt = function(t, e) {
        this.event(t, e)
    }
    ,
    e(0, v, "_h", function() {
        return 0 < this.__h ? this.__h : this.height
    }, function(t) {
        this.__h = t
    }),
    e(0, v, "_w", function() {
        return 0 < this.__w ? this.__w : this.width
    }, function(t) {
        this.__w = t
    }),
    xn.clearMcChild = function(t, e, i) {
        var s, n;
        if ((void 0 === e && (e = !1),
        void 0 === i && (i = !1),
        t) && x.__typeof(t, q))
            for (; 0 < t.numChildren; )
                (s = t.getChildAt(0)).stop && s.stop(),
                i && (null != (n = s.reset) && n.call(s),
                me.CheckIn(s)),
                s.parent == t && t.removeChild(s)
    }
    ;
    var yn, vn = xn;
    function xn() {
        this.__w = null,
        this.__h = null,
        this.attrs = null,
        this.isFinalized = !1,
        yn.call(this),
        this.mouseEnabled = !0
    }
    t(Sn, "app.fateGame.f1.view.mapeditor.AppGameBgView", wn = N),
    (T = Sn.prototype).preloadPos = function(t, e, i, s, n) {
        void 0 === n && (n = 0);
        var o = this
          , a = this.fragmentW * this.fragmentH - 1
          , r = Math.floor(t / this.fragmentWidth)
          , r = Math.floor(e / this.fragmentHeight) * this.fragmentW + r;
        if (r < 0 || a < r)
            console.error("不能预加载,一开始就传进来一个超出地图范围的位置 x:" + t + " y:" + e),
            i.run();
        else {
            function l(t, e, i) {
                e < 0 || e >= o.fragmentW || i < 0 || i >= o.fragmentH || (i = i * o.fragmentW + e,
                d[i]) || -1 != t.indexOf(i) || t.push(i)
            }
            var h = ".jpg"
              , c = this.bgSrc
              , p = (0 < this.layer && (h = ".png",
            c = this.bgSrc + "/pngs"),
            [])
              , u = []
              , d = {};
            (_ = []).push(r);
            for (var g = 0; g < s + n && 0 != _.length; ++g)
                for (var m = _, _ = [], f = 0; f < m.length; ++f) {
                    var y = m[f]
                      , v = (d[y] = !0,
                    (g < s ? p : u).push(c + "/bgfm" + y + h),
                    y % this.fragmentW)
                      , y = Math.floor(y / this.fragmentW);
                    l(_, v - 1, y),
                    l(_, 1 + v, y),
                    l(_, v, y - 1),
                    l(_, v, y + 1)
                }
            a = 3;
            w.antiMiniGame && (a = 0),
            0 < p.length && x.loader.load(p, i, null, null, a),
            a = 1,
            w.antiMiniGame && (a = 0),
            0 < u.length && x.loader.load(u, null, null, null, a)
        }
    }
    ,
    T.onDisplay = function() {
        this.once("undisplay", this, this.onUndisplay),
        x.timer.frameLoop(1, this, this.enterFrameHandler, null, !0, !0)
    }
    ,
    T.onUndisplay = function() {
        this.once("display", this, this.onDisplay),
        x.timer.clear(this, this.enterFrameHandler)
    }
    ,
    T.updateScale = function(t, e) {
        this._scaleX = t,
        this._scaleY = e
    }
    ,
    T.pos = function(t, e, i) {
        return (i = void 0 === i ? !0 : i) && (this.needUpdate = !0),
        this.holdBgMove ? laya.display.Sprite.prototype.pos.call(this, this.x, this.y, !0) : laya.display.Sprite.prototype.pos.call(this, t, e, !0)
    }
    ,
    T.enterFrameHandler = function() {
        var t, e;
        this.isLoadingSmall || (this.isDrawSmall || (this.isDrawSmall = !0,
        this.graphics.cleanByTexture(this.smallTex, 0, 0, this.fragmentW * this.fragmentWidth, this.fragmentH * this.fragmentHeight),
        0 < this.layer && this.graphics.cleanByTexture(null, 0, 0)),
        this.blockLayer ? this._isShowReal && !this.blockLayer.parent && this.addChildAt(this.blockLayer, 0) : (this.blockLayer = new z,
        this.blockLayer.mouseEnabled = !0,
        this.blockLayer.name = "blockLayer"),
        g.isAuditing ? (t = g.SERVER % 10,
        t = this.FILTER_CONST[t],
        (e = new is).SetHueMatrix(Math.floor(255 * t / 100)),
        this.blockLayer.filters = [new Lt(e.GetFlatArray())]) : this.blockLayer.filters = [],
        this._topLayer && 0 < this._topLayer.numChildren && (this._topLayer.x = -this.x,
        this._topLayer.y = -this.y),
        this.needUpdate && (this.needUpdate = !1,
        this.updateFragment()))
    }
    ,
    T.updateFragment = function() {
        var t = -this.x / this._scaleX
          , e = -this.y / this._scaleY
          , i = t + I.w / this._scaleX
          , s = e + I.h / this._scaleY
          , n = Math.floor(t / this.fragmentWidth)
          , t = Math.floor(e / this.fragmentHeight)
          , o = Math.ceil((i - this.fragmentWidth) / this.fragmentWidth)
          , a = Math.ceil((s - this.fragmentHeight) / this.fragmentHeight);
        if (0 == this.idxX1 || 0 == this.idxX1 || n != this.idxX || t != this.idxY || o != this.idxX1 || a != this.idxY1) {
            this.idxX = n,
            this.idxY = t,
            this.idxX1 = o,
            this.idxY1 = a;
            var r, l, h, c = w.now(), p = ".jpg", u = this.bgSrc;
            for (0 < this.layer && (p = ".png",
            u = this.bgSrc + "/pngs"),
            l = t; l <= a; l++)
                if (!(l < 0 || l >= this.fragmentH))
                    for (h = l * this.fragmentW,
                    r = n; r <= o; r++)
                        if (!(r < 0 || r >= this.fragmentW)) {
                            var d = h + r
                              , g = u + "/bgfm" + Math.abs(d) + p
                              , m = this._blocks[d];
                            if (m) {
                                if (m.url == g) {
                                    m.updateMark = c;
                                    continue
                                }
                                m.recover(),
                                m = null,
                                delete this._blocks[d]
                            }
                            var _ = this._loadingBlocks[d];
                            if (m) {
                                if (_.block && console.error("逻辑错误，加载中的地图块不可能存在实体,是不是池回收有问题，或者外部修改了什么"),
                                _.url == g) {
                                    _.updateMark = c;
                                    continue
                                }
                                _.recover(),
                                _ = null,
                                delete this._loadingBlocks[d]
                            }
                            m = Se.create(),
                            _ = (m.block = null,
                            m.url = g,
                            m.px = r,
                            m.py = l,
                            m.idx = d,
                            m.updateMark = c,
                            this._loadingBlocks[m.idx] = m,
                            1),
                            m = (w.antiMiniGame && (_ = 0),
                            $.getRes(g));
                            m ? this.onLoadBlock(d, g, m) : x.loader.load(g, b.create(this, this.onLoadBlock, [d, g]), null, null, _)
                        }
            var f, y, v = null;
            for (y in this._blocks)
                (f = this._blocks[y]).updateMark != c && (v = v || []).push(f);
            for (y in v)
                f = v[y],
                delete this._blocks[f.idx],
                f.recover(),
                f = null;
            for (y in v = null,
            this._loadingBlocks)
                (f = this._loadingBlocks[y]).updateMark != c && (v = v || []).push(f);
            for (y in v)
                f = v[y],
                delete this._loadingBlocks[f.idx],
                f.recover(),
                f = null
        }
    }
    ,
    T.onLoadBlock = function(t, e, i) {
        var s;
        i ? x.__typeof(i, K) ? (s = $.getRes(e)) && s == i ? (s = this._loadingBlocks[t]) && (this._blocks[s.idx] ? console.error("逻辑错误，loading列表和显示列表中同时存在地图块4:" + e) : (delete this._loadingBlocks[s.idx],
        this._blocks[s.idx] = s,
        this.adptTexture(i),
        (t = dt.getItemByClass("Block:Map", z)).name = "block_" + s.idx,
        t.texture = i,
        t.x = s.px * this.fragmentWidth,
        t.y = s.py * this.fragmentHeight,
        this.blockLayer.addChildAt(t, 0),
        s.block = t)) : console.error("严重错误，加载到的地图块贴图和资源不符，可能handler被别处调用3:" + e) : console.error("严重错误，地图块贴图不可用，可能handler被别处调用2:" + e) : console.error("加载不到地图块资源,可能资源丢失，也可能handler被别处调用1:" + e)
    }
    ,
    T.adptTexture = function(t) {
        var e, i, s, n, o, a;
        t && !t.x5uvOld && (e = t.uv[0],
        i = t.uv[2],
        s = t.uv[1],
        n = t.uv[7],
        o = 1 / t.bitmap.width,
        a = 1 / t.bitmap.height,
        t.x5uvOld = t.uv,
        t.uv = [],
        t.uv[0] = t.uv[6] = e + o,
        t.uv[2] = t.uv[4] = i - o,
        t.uv[1] = t.uv[3] = s + a,
        t.uv[5] = t.uv[7] = n - a)
    }
    ,
    T.reset = function() {
        wn.prototype.reset.call(this);
        var t, e, i = null;
        for (e in this._blocks)
            t = this._blocks[e],
            (i = i || []).push(t);
        for (e in i)
            t = i[e],
            delete this._blocks[t.idx],
            t.recover(),
            t = null;
        for (e in i = null,
        this._loadingBlocks)
            t = this._loadingBlocks[e],
            (i = i || []).push(t);
        for (e in i)
            t = i[e],
            delete this._loadingBlocks[t.idx],
            t.recover(),
            t = null;
        this._blocks = {},
        this._loadingBlocks = {},
        this.idxX = -999,
        this.idxY = -999,
        this.idxX1 = -999,
        this.idxY1 = -999,
        this.needUpdate = !0,
        this.isLoading = !1,
        this.hideMap(0, 0, 0, 1),
        this.removeAllTopLayer()
    }
    ,
    T.addViewInTopLayer = function(t) {
        this._topLayer || (this._topLayer = new z,
        this._topLayer.mouseEnabled = !1,
        this.addChildAt(this._topLayer, this.numChildren)),
        this._topLayer.addChild(t)
    }
    ,
    T.romoveViewInTopLayer = function(t) {
        this._topLayer && this._topLayer.removeChild(t)
    }
    ,
    T.removeAllTopLayer = function() {
        if (this._topLayer)
            for (; this._topLayer.numChildren; )
                this._topLayer.removeChildAt(0)
    }
    ,
    T.finalize = function() {}
    ,
    T.showRealMap = function(t) {
        ve.ins.gameScene.bgView.holdBgMove = !t,
        (this._isShowReal = t) ? this.contains(this.blockLayer) || this.addChildAt(this.blockLayer, 0) : this.contains(this.blockLayer) && 0 == this.layer && this.removeChild(this.blockLayer)
    }
    ,
    T.hideMap = function(t, e, i, s) {
        this._changeIng || (this._changeIng = !0,
        this._hideTime = t,
        this._waitTime = e,
        this._targetAlpha = s,
        this._showTime = i,
        this._hideStartTime = w.now(),
        this._showStartTime = this._hideStartTime + t + e,
        x.timer.frameLoop(1, this, this.hideMapProgress, null, !0, !0),
        this.hideMapProgress())
    }
    ,
    T.hideMapProgress = function() {
        var t = w.now();
        t >= this._showStartTime ? this.updateShow(t) : t >= this._hideStartTime + this._hideTime ? this.alpha = this._targetAlpha : this.updateHide(t)
    }
    ,
    T.updateHide = function(t) {
        t = this._hideTime <= 0 ? 0 : (t - this._hideStartTime) / this._hideTime;
        this.alpha = 1 - t * (1 - this._targetAlpha)
    }
    ,
    T.updateShow = function(t) {
        t = this._showTime <= 0 ? 1 : (t - this._showStartTime) / this._showTime;
        this.alpha = this._targetAlpha + t * (1 - this._targetAlpha),
        1 <= t && (this.alpha = 1,
        this._changeIng = !1,
        x.timer.clear(this, this.hideMapProgress))
    }
    ,
    e(0, T, "topLayer", function() {
        return this._topLayer || (this._topLayer = new z,
        this._topLayer.mouseEnabled = !1),
        this._topLayer.parent || this.addChildAt(this._topLayer, this.numChildren),
        this._topLayer
    }, wn.prototype._$set_topLayer),
    e(0, T, "isShowReal", function() {
        return this._isShowReal
    }, wn.prototype._$set_isShowReal),
    Sn.clearAdptTexture = function(t) {
        t && t.x5uvOld && (t.uv = t.x5uvOld,
        t.x5uvOld = null)
    }
    ;
    var wn, bn = Sn;
    function Sn() {
        this.idxX = 0,
        this.idxY = 0,
        this.idxX1 = 0,
        this.idxY1 = 0,
        this._blocks = {},
        this._loadingBlocks = {},
        this.needUpdate = !1,
        this.isLoading = !1,
        this._isShowReal = !0,
        this.blockLayer = null,
        this._topLayer = null,
        this.FILTER_CONST = [180, 150, 120, 210, 240, 225, 320, 360, 90, 60],
        this.holdBgMove = !1,
        this._scaleX = 1,
        this._scaleY = 1,
        this._hideStartTime = NaN,
        this._showStartTime = NaN,
        this._targetAlpha = NaN,
        this._hideTime = 0,
        this._waitTime = 0,
        this._showTime = 0,
        this._changeIng = !1,
        wn.call(this),
        this.reset(),
        this.mouseEnabled = !0,
        this.once("display", this, this.onDisplay)
    }
    t(kn, "app.fateGame.role.AppSimpleRole", In = _n),
    (i = kn.prototype).pathingUpdate = function() {
        if (di.checkCanWalk(this)) {
            if (this._bodyView && this._bodyView.m_isPause)
                this.lastTime = w.now(),
                this._pauseStartTime <= 0 && (this._pauseStartTime = this.lastTime);
            else if (null != this.info) {
                var t, e = w.now(), i = 0 < this._pauseStartTime ? e - this._pauseStartTime : 0;
                if (this.stTime += i,
                this._pauseStartTime = 0,
                isNaN(this.controlAngle) || Ji.ins.isInCity)
                    this.isPathing && (s = e - this.stTime,
                    i = this.distanceTime - s,
                    t = s / this.distanceTime,
                    this.pathTarget && (0 < i ? this.pos(this.stPosition[0] + Math.ceil(this.distanceX * t), this.stPosition[1] + Math.ceil(this.distanceY * t), !0) : (this._direct = fi.getAngleDir(this._x, this._y, this.pathTarget[0], this.pathTarget[1]),
                    this.pos(this.pathTarget[0], this.pathTarget[1], !0),
                    this.spaceTime = -i,
                    this.setToNextTarget())),
                    this.lastTime = e);
                else {
                    for (var s, n = (s = e - this.lastTime) * kn.defaultRunSpeed / 1e3; 0 < n; ) {
                        var o = n * Math.cos(this.controlAngle)
                          , a = n * Math.sin(this.controlAngle);
                        if (k.ins.canPass(S.coo2Tile(this.x + o), S.coo2Tile(this.y + a)))
                            break;
                        if (k.ins.canPass(S.coo2Tile(this.x + (o = o < 0 ? -n : 0 < o ? n : 0)), S.coo2Tile(this.y))) {
                            a = 0;
                            break
                        }
                        if (a = a < 0 ? -n : 0 < a ? n : 0,
                        k.ins.canPass(S.coo2Tile(this.x), S.coo2Tile(this.y + a))) {
                            o = 0;
                            break
                        }
                        n -= S.GRID_BORDER,
                        a = o = NaN
                    }
                    isNaN(o) || isNaN(a) || (this.pos(this.x + o, this.y + a, !0),
                    e > this._lastMoveAngle + 250 && (this._lastMoveAngle = e,
                    this.event("Server_Move_Angle", this))),
                    this.lastTime = e
                }
                this.checkChangeTile()
            }
        } else
            this.lastTime = w.now()
    }
    ,
    i.setChangeTileHanlder = function(t) {
        this._changeTileHandler = t
    }
    ,
    i.checkChangeTile = function() {
        var t = S.coo2Tile(this.x)
          , e = S.coo2Tile(this.y);
        this._lastTileX != t && this._lastTileY != e && (-1 == this._lastTileX && -1 == this._lastTileY || this._lastTileX == t && this._lastTileY == e || this._changeTileHandler && this._changeTileHandler.runWith([t, e, this._lastTileX, this._lastTileY]),
        this._lastTileX = t,
        this._lastTileY = e)
    }
    ,
    i.moveByAngle = function(t) {
        var e = !isNaN(this.controlAngle)
          , i = !isNaN(t);
        this.controlAngle = t,
        !i && this.isPathing && this.stopPath(),
        this.isPathing = i,
        !e && i && (this.lastTime = w.now()),
        i ? (t = fi.getAngleDir(0, 0, Math.cos(this.controlAngle), Math.sin(this.controlAngle)),
        this.direct == t && "act03" == this._fatherActType || ("act03" != this._fatherActType ? this.setAct("act03", !0, !1, !0, t) : this.direct = t)) : e && this.setAct("act01", !0, !0, !1, this.direct)
    }
    ,
    i.setToNextTarget = function() {
        this.path && 0 < this.path.length ? (this.pathTarget = this.path.shift(),
        this.dirs && 0 < this.dirs.length && (this._changeToDir = this.dirs.shift()),
        this.setToTarget(this.pathTarget)) : (this.pathTarget = null,
        this.stPosition = null,
        this.stTime = 0,
        this._pauseStartTime = 0,
        this.distanceTime = 0,
        this.distanceX = 0,
        this.distanceY = 0,
        this.arrive())
    }
    ,
    i.setToTarget = function(t) {
        var e, i;
        t && (this.pathDirectChange(t),
        this.lastTime = w.now(),
        this.stPosition = [this._x, this._y],
        this.stTime = this.lastTime - this.spaceTime,
        e = kn.defaultRunSpeed,
        i = fi.distance(this._x, this._y, t[0], t[1]),
        this.distanceTime = 1e3 * i / e,
        this.distanceX = t[0] - this._x,
        this.distanceY = t[1] - this._y,
        0 < this.spaceTime) && this.pathingUpdate()
    }
    ,
    i.pathDirectChange = function(t) {
        var e = 0;
        if (this.dirs && 0 < this.dirs.length) {
            if ((0 == this._changeToDir || 2 == this._changeToDir || 4 == this._changeToDir || 6 == this._changeToDir) && 0 < this.dirs.length && this.dirs[0] == S.roleDir2MapDirect(this.direct))
                return void ("act03" != this._fatherActType && this.setAct("act03", !0, !1, !1, this.direct));
            e = fi.getIsFivePath("act03", this, !1) ? S.mapDirect2RoleDir(this._changeToDir) : S.mapDirect3RoleDir(this._changeToDir)
        } else
            e = fi.getAngleDir(this._x, this._y, t[0], t[1]);
        "act17" == this._fatherActType || this.direct == e && "act03" == this._fatherActType || ("act03" != this._fatherActType ? this.setAct("act03", !0, !1, !1, e) : this.direct = e)
    }
    ,
    i.arrive = function() {
        this.dirs = null,
        this.path = null,
        this.isPathing = !1,
        this._curPathStep = 0,
        this.setAct("act01", !0, !1),
        this.event("complete"),
        this.event("Path_Finish"),
        this.event("Server_Move_Stop", this)
    }
    ,
    i.judgeCanMove = function(t, e) {
        t = S.coo2Tile(t),
        e = S.coo2Tile(e);
        return S.canPath(k.ins.data.tileByteArrays, t, e)
    }
    ,
    i.pathByCoo = function(t, e, i, s, n, o, a, r, l) {
        void 0 === i && (i = 0),
        void 0 === s && (s = 0),
        void 0 === n && (n = !1),
        void 0 === o && (o = !0),
        void 0 === a && (a = !1),
        void 0 === r && (r = !0),
        0 == (l = void 0 === l ? !0 : l) && this.setAct("act03", !0, !0, !0),
        this.moveTargetX = t,
        this.moveTargetY = e;
        s = S.coo2Tile(t),
        n = S.coo2Tile(e);
        if (this.isPathing && this.destinationPX == s && this.destinationPY == n)
            return !0;
        var h = S.findPath(k.ins.data.tileByteArrays, S.coo2Tile(this.x), S.coo2Tile(this.y), s, n, i);
        if (!h || h.length < 2)
            this.path = null,
            this.setToNextTarget();
        else {
            var c, o = S.tile2CooXY(h[h.length - 1]);
            this._armX = o[0],
            this._armY = o[1],
            S.countTileDirection(h[0], h[1]);
            if (this.event("Server_Move_Path", this),
            this.destinationPX = S.coo2Tile(t),
            this.destinationPY = S.coo2Tile(e),
            h && 1 < h.length) {
                for (var p = [], u = [], d = h.length - 1, g = 0; g < d; g++)
                    c = S.countTileDirection(h[g], h[g + 1]),
                    p.push(c),
                    u.push(S.tile2CooXY(h[g]));
                return u.shift(),
                u.push(S.tile2CooXY(h[d])),
                m.clearAll(this),
                this.pathByAStarArray(u, p),
                !0
            }
        }
        return !1
    }
    ,
    i.pathByAStarArray = function(t, e) {
        return t && 0 != t.length ? (this.dirs = e,
        this.path = t,
        this.isPathing = !0,
        this.spaceTime = 0,
        this.setToNextTarget()) : this.arrive(),
        !0
    }
    ,
    i.stopPath = function() {
        this.isPathing && (this.pathTarget = null,
        this.stPosition = null,
        this.stTime = 0,
        this._pauseStartTime = 0,
        this.distanceTime = 0,
        this.distanceX = 0,
        this.distanceY = 0,
        this._curPathStep = 0,
        this.path = null,
        this.isPathing = !1,
        this.isAround = !1,
        "act01" != this.actType) && this.setAct("act01", !0, !1, !0),
        this.event("Server_Move_Stop", this),
        m.clearAll(this)
    }
    ,
    i.loop = function() {
        this.pathingUpdate(),
        In.prototype.loop.call(this)
    }
    ,
    i.isAlive = function() {
        return !0
    }
    ,
    i.moveToTarget = function(t, e, i, s, n) {
        void 0 === n && (n = 0);
        var o = _i.ins.getRolePos(this)
          , a = (a = pi.ins.getRole(A.ins.playerInfo.showPlayerId)) || pi.ins.player;
        return !o || !s || this == a || i <= _i.Grid_Size_Max ? this.oldMoveToTarget(t, e, i, n) : this.newMoveToTarget(t, e, i, o)
    }
    ,
    i.oldMoveToTarget = function(t, e, i, s) {
        var n, o, a;
        return i += s,
        fi.distance(this.x, this.y, t, e) <= i || (a = Math.atan2(this.y - e, this.x - t),
        n = t + s * Math.cos(a),
        s = e + s * Math.sin(a),
        a = S.coo2Tile(n),
        o = S.coo2Tile(s),
        k.ins.canPass(a, o) || (n = t,
        s = e),
        (!this.isPathing || (a = S.tile2CooXY([this.destinationPX, this.destinationPY]),
        i < fi.distance(n, s, a[0], a[1]))) && this.pathByCoo(n, s, 0, 0, !1, !1),
        !1)
    }
    ,
    i.newMoveToTarget = function(t, e, i, s) {
        var n = _i.coo2Tile(this.x)
          , o = _i.coo2Tile(this.y)
          , n = s.x == n && s.y == o
          , o = fi.distanceSQ(t, e, _i.tile2Coo(s.x), _i.tile2Coo(s.y)) <= i * i
          , s = _i.ins.isGoodCooPos(this, _i.tile2Coo(s.x), _i.tile2Coo(s.y));
        if (n && o && s)
            return !0;
        if (!(this.isPathing && o && s)) {
            for (var a = Math.atan2(this.y - e, this.x - t), r = Math.floor((i - _i.Grid_Size_Min) / _i.Grid_Size_Max); 0 < r; r--)
                for (var l = r * _i.Grid_Size_Max, h = (_i.Grid_Size_Max + .1 * l) / l, c = 0; c < 6; ++c) {
                    var p = c * h;
                    if (p >= Math.PI)
                        break;
                    for (var u = 0; u < 2; ++u) {
                        var d = a + p * (0 == u ? -1 : 1)
                          , g = t + l * Math.cos(d)
                          , d = e + l * Math.sin(d)
                          , m = S.coo2Tile(g)
                          , _ = S.coo2Tile(d)
                          , g = S.tile2Coo(m)
                          , d = S.tile2Coo(_);
                        if (!k.ins.isObstacle(m, _) && (!(fi.distanceSQ(t, e, g, d) > i * i) && 0 == p))
                            break
                    }
                }
            if (fi.distanceSQ(t, e, this.x, this.y) <= i * i)
                return !0;
            this.isPathing && o || this.pathByCoo(t, e, 0, 0, !1, !1)
        }
        return !1
    }
    ,
    i.destroy = function(t) {
        void 0 === t && (t = !0),
        this.stopPath(),
        In.prototype.destroy.call(this, t)
    }
    ,
    i.recover = function(t) {
        void 0 === t && (t = !0),
        this._isDizzing = !1,
        this._lastTileX = -1,
        this._lastTileY = -1,
        this._armX = 0,
        this._armY = 0,
        this._lastMoveAngle = 0,
        this.isPathing = !1,
        this.isAround = !1,
        this.pathTarget = null,
        this._changeToDir = 0,
        this.dirs = null,
        this.path = null,
        this.destinationPX = 0,
        this.destinationPY = 0,
        this.stPosition = null,
        this.stTime = 0,
        this._pauseStartTime = 0,
        this.spaceTime = 0,
        this.distanceTime = 0,
        this.distanceX = 0,
        this.distanceY = 0,
        this.lastTime = 0,
        this._curPathStep = 0,
        this.isShowFly = !1,
        this._changeTileHandler && (this._changeTileHandler.recover(),
        this._changeTileHandler = null),
        this.moveTargetX = 0,
        this.moveTargetY = 0,
        m.clearAll(this),
        In.prototype.recover.call(this, !1),
        this._fatherActType && this.setAct(this._fatherActType, !0, !1),
        t && dt.recover("app.fateGame.role.AppSimpleRole", this)
    }
    ,
    i.clearPath = function() {
        this.pathTarget = null,
        this.stPosition = null,
        this.stTime = 0,
        this.distanceTime = 0,
        this.distanceX = 0,
        this.distanceY = 0,
        this.path = null,
        this.isPathing = !1
    }
    ,
    i.stopAllAct = function() {
        this.clearPath(),
        this.controlAngle = NaN,
        this.stopPath(),
        1 != this.curStatus && (this.curStatus = 0),
        this.setAct("act01", !0, !1, !0, this.direct)
    }
    ,
    i.stopTransposition = function() {
        12 == this.curStatus && (this.curStatus = 0)
    }
    ,
    i.removeSet = function() {}
    ,
    e(0, i, "isPathing", function() {
        return this._isPathing
    }, function(t) {
        this._isPathing = t
    }),
    e(0, i, "armX", function() {
        return this._armX
    }, function(t) {
        this._armX = t
    }),
    e(0, i, "armY", function() {
        return this._armY
    }, function(t) {
        this._armY = t
    }),
    e(0, i, "controlAngle", function() {
        return this._controlAngle
    }, function(t) {
        this._controlAngle = t
    }),
    e(0, i, "isControlByPlayer", function() {
        return !isNaN(this.controlAngle)
    }, In.prototype._$set_isControlByPlayer),
    e(0, i, "changeToDir", function() {
        return this._changeToDir
    }, In.prototype._$set_changeToDir),
    kn.defaultRunSpeed = 240;
    var In, Cn = kn;
    function kn() {
        this._armX = 0,
        this._armY = 0,
        this.pathTarget = null,
        this._changeToDir = 0,
        this.dirs = null,
        this.path = null,
        this.destinationPX = 0,
        this.destinationPY = 0,
        this.stPosition = null,
        this.stTime = 0,
        this.spaceTime = 0,
        this.distanceTime = 0,
        this.distanceX = NaN,
        this.distanceY = NaN,
        this.lastTime = 0,
        this._curPathStep = 0,
        this.isAround = !1,
        this._isPathing = !1,
        this._controlAngle = NaN,
        this._lastTileX = -1,
        this._lastTileY = -1,
        this.isShowFly = !1,
        this._isHitWhite = !1,
        this._isDizzing = !1,
        this._pauseStartTime = 0,
        this._lastMoveAngle = 0,
        this._changeTileHandler = null,
        this.moveTargetX = 0,
        this.moveTargetY = 0,
        In.call(this),
        this._fatherActType && this.setAct(this._fatherActType, !0, !1)
    }
    t(Ln, "app.fateGame.f1.animation.AppAnimationBase", Pn = Pt),
    e(0, Ln.prototype, "labels", function() {
        return this._labels
    }, Pn.prototype._$set_labels);
    var Pn, Tn = Ln;
    function Ln() {
        Pn.call(this)
    }
    t(Bn, "app.fateGame.f1.layer.AppBaseScene", An = vn),
    (s = Bn.prototype).updateWH = function() {
        this._w = I.w,
        this._h = I.h
    }
    ,
    s.createLayer = function(t) {
        var e = new vn;
        return this.addChild(e),
        e.mouseThrough = !0,
        e.setWH(this._w, this._h),
        e.width = this._w,
        e.height = this._h,
        t && (e.name = t),
        this.layers.push(e),
        e
    }
    ,
    s.finalize = function() {
        this._preScene && this._preScene.nextScene == this && (this._preScene.nextScene = this.nextScene),
        this._nextScene && this._nextScene.preScene == this && (this._nextScene.preScene = this.preScene),
        this.layers = null,
        this._preScene = null,
        this._nextScene = null
    }
    ,
    s.scale = function(t, e, i) {
        return void 0 === i && (i = !1),
        laya.display.Sprite.prototype.scale.call(this, t, e, i)
    }
    ,
    e(0, s, "w", function() {
        return this._w
    }, function(t) {
        this._w = t,
        this.width = this._w
    }),
    e(0, s, "h", function() {
        return this._h
    }, function(t) {
        this._h = t,
        this.height = this._h
    }),
    e(0, s, "preScene", function() {
        return this._preScene
    }, function(t) {
        this._preScene = t
    }),
    e(0, s, "nextScene", function() {
        return this._nextScene
    }, function(t) {
        this._nextScene = t
    }),
    e(0, s, "scaleY", function() {
        return x.superGet(An, this, "scaleY")
    }, function(t) {
        x.superSet(An, this, "scaleY", t)
    }),
    e(0, s, "scaleX", function() {
        return x.superGet(An, this, "scaleX")
    }, function(t) {
        x.superSet(An, this, "scaleX", t)
    });
    var An, Rn = Bn;
    function Bn() {
        this.layers = null,
        this._preScene = null,
        this._nextScene = null,
        An.call(this),
        this.layers = []
    }
    t(Dn, "app.fateGame.role.AppRole", Mn = Cn),
    (P = Dn.prototype).setAI = function(t) {
        this.aiManager && (this.aiManager.recover(),
        this.aiManager = null),
        this.aiManager = t,
        this.aiManager && this.aiManager.setPlayer(this)
    }
    ,
    P.setAIAuto = function(t, e) {
        void 0 === e && (e = 5),
        this.aiManager && this.aiManager.setAuto(t, e)
    }
    ,
    P.resetAI = function() {
        this.aiManager && this.aiManager.reset()
    }
    ,
    P.dead = function(t, e) {
        this.info && (this.setDeathStatus(),
        this.setAct("act11", !1, !1),
        this.deadComplete(t, e))
    }
    ,
    P.actComplete = function() {
        app.fateGame.role.AppRoleView.prototype.actComplete.call(this)
    }
    ,
    P.selected = function() {}
    ,
    P.resetRole = function() {
        app.fateGame.role.AppRoleView.prototype.resetRole.call(this),
        this.stopAllAct()
    }
    ,
    P.setDeathStatus = function() {
        this.info && (this.controlAngle = NaN,
        this.curStatus = 1,
        this.isSilent = !1,
        this.deadX = this.x,
        this.deadY = this.y,
        this.hideName(),
        this.stopAllAct(),
        this.removeAllBuffEffect(),
        this.hideTargetCircle(),
        this.removeAllBodyEff(),
        this.aiManager) && this.aiManager.setAuto(!1)
    }
    ,
    P.revive = function() {
        this.curStatus = 0,
        this._fatherActType = "act01",
        this.stopAllAct(),
        this.showName()
    }
    ,
    P.reliveHandler = function() {
        this.revive()
    }
    ,
    P.deadComplete = function(t, e) {
        this._isPlayingDead || (this._isPlayingDead = !0,
        this.isAlive() ? null != this.parent && console.error("逻辑错误，死亡结束处理的时候发现还是生存状态") : 3 != t && ("act08" == this.fatherActType ? this.setAct("act11", !1, !1, !0) : this.isUser() || this.isTeammate() || 0 != t && this.deadDispare()))
    }
    ,
    P.deadDispare = function() {
        this._isPlayingDead = !1,
        this.scaleY = 1,
        this.isAlive() || this.isUser() || this.isTeammate() || this.isPlayerControlRole() || M.ins.removeRole(this, !0)
    }
    ,
    P.recover = function(t) {
        void 0 === t && (t = !0),
        this._info && this._info.off("relive", this, this.reliveHandler),
        this.aiManager && (this.aiManager.recover(),
        this.aiManager = null),
        this.removeAllEffect(),
        this.topEffList.length = 0,
        this.isSilent = !1,
        this.isPrevWave = !1,
        this.recoverHpArr = null,
        this.isPlayingRecoveHp = !1,
        this.flags = null,
        this._isPlayingDead = !1,
        Mn.prototype.recover.call(this, !1),
        t && dt.recover("app.fateGame.role.AppRole", this)
    }
    ,
    P.removeSet = function() {}
    ,
    e(0, P, "info", Mn.prototype._$get_info, function(t) {
        this._info && this._info.off("relive", this, this.reliveHandler),
        x.superSet(Mn, this, "info", t),
        t && t.isRole() && this._info.on("relive", this, this.reliveHandler)
    }),
    Dn.DEBUGBUFFMSG = !1;
    var Mn, Nn = Dn;
    function Dn() {
        this.aiManager = null,
        this.topEffList = null,
        this.deadX = 0,
        this.deadY = 0,
        this.isSilent = !1,
        this.isPrevWave = !1,
        this.flags = null,
        this._isPlayingDead = !1,
        this.recoverHpArr = null,
        this.isPlayingRecoveHp = !1,
        Mn.call(this),
        this.topEffList = []
    }
    t(Fn, "app.AppBaseItem", En = j),
    (At = Fn.prototype).updateItem = function(t) {
        this._itemId = t,
        this.data = Fn.itemIdData[t],
        this.imgBg.skin = "x5_backReser/frameBig_item_" + this.data.quality + ".png",
        this.icon.skin = "img/icon/" + this.data.icon_bag + ".png",
        this.icon.anchorX = this.icon.anchorY = .5,
        this.icon.x = this.icon.y = this.imgBg.width / 2,
        this.numLb.width = this.imgBg.width - 3,
        this.nameLb.width = this.imgBg.width + 20,
        this.nameLb.y = this.imgBg.height + 10,
        this.nameLb.color = oo.getTipsColorByQuality(this.data.quality),
        this.nameLb.text = this.data.name,
        this.nameLb.visible = this.isShowName,
        -1 != this.num ? this.numLb.text = "x" + this.num : this.numLb.text = "",
        this.off("click", this, this.onTipsHandler),
        this.on("click", this, this.onTipsHandler)
    }
    ,
    At.onTipsHandler = function() {
        this.isClick && p.ins.showItemTips(this._itemId)
    }
    ,
    At.clear = function() {
        this.off("click", this, this.onTipsHandler)
    }
    ,
    Fn.itemIdData = null;
    var En, On = Fn;
    function Fn() {
        this.boxCon = null,
        this.imgBg = null,
        this.icon = null,
        this.numLb = null,
        this.nameLb = null,
        this.isClick = !0,
        this.isShowName = !1,
        this.num = -1,
        this._itemId = 0,
        this.data = null,
        En.call(this),
        this.boxCon = new at,
        this.imgBg = new J,
        this.icon = new J,
        this.icon.width = this.icon.width = 64,
        this.numLb = new rt,
        this.numLb.fontSize = 24,
        this.numLb.align = "right",
        this.numLb.y = 60,
        this.numLb.color = "#FFF",
        this.nameLb = new rt,
        this.nameLb.fontSize = 20,
        this.nameLb.x = -10,
        this.nameLb.align = "center",
        this.addChild(this.boxCon),
        this.addChild(this.imgBg),
        this.addChild(this.icon),
        this.addChild(this.numLb),
        this.addChild(this.nameLb)
    }
    t(Un, "app.BasePanel", Hn = j),
    (v = Un.prototype).getAltas = function() {
        return []
    }
    ,
    v.getUIView = function() {
        return null
    }
    ,
    v.needAutoResize = function() {
        return !1
    }
    ,
    v.onInit = function() {}
    ,
    v.onFirstOpen = function() {}
    ,
    v.onOpen = function() {}
    ,
    v.onClose = function() {}
    ,
    v.onResize = function(t, e, i, s) {}
    ,
    v.open = function() {
        var t, e = this;
        this._isInit ? this.visible || (this.visible = !0,
        this.onOpen(),
        this.resize()) : (this._isInit = !0,
        this.onInit(),
        0 < (t = this.getAltas()).length ? x.loader.load(t, b.create(this, function() {
            j.createComp(e.getUIView(), this, this),
            e._isLoadAltas = !0,
            e.onFirstOpen(),
            this.visible && (e.onOpen(),
            e.resize())
        }, null), null, "atlas") : (j.createComp(this.getUIView(), this, this),
        this._isLoadAltas = !0,
        this.onFirstOpen(),
        this.onOpen(),
        this.resize()))
    }
    ,
    v.close = function() {
        this.visible && (this.visible = !1,
        this._isLoadAltas) && this.onClose()
    }
    ,
    v.resize = function() {
        var t, e, i, s, n, o, a, r;
        this.visible && this._isLoadAltas && (t = p.s_width,
        e = p.s_minWidth,
        i = p.s_height,
        a = this.needAutoResize(),
        r = e <= (r = p.ins.m_loginRoot.width) || !a ? (this.scaleX = this.scaleY = 1,
        this.x = 0,
        n = t - (s = (t - r) / 2),
        o = this.y = 0,
        i) : (this.scaleX = this.scaleY = a = r / e,
        this.x = (t - t * a) / 2,
        this.y = (i - i * a) / 2,
        n = t - (s = (e - t) / 2),
        i - (o = -(i - i * a / 2) / a)),
        this.onResize(s, n, o, r))
    }
    ,
    v.destroyPanel = function() {
        this.visible && this._isLoadAltas && this.close(),
        this.destroy()
    }
    ,
    e(0, v, "isLoadAltas", function() {
        return this._isLoadAltas
    }, Hn.prototype._$set_isLoadAltas);
    var Hn, Gn = Un;
    function Un() {
        this._isInit = !1,
        this._isLoadAltas = !1,
        Hn.call(this)
    }
    t(Xn, "app.X5LoginTalkItem", Vn = j),
    Xn.prototype.updateTalk = function(t) {
        this.talk_lab.innerHTML = t
    }
    ;
    var Vn, zn = Xn;
    function Xn() {
        this.box = null,
        this.itemBg = null,
        this.lineImg = null,
        this.name_lab = null,
        this.talk_lab = null,
        Vn.call(this),
        this.box = new at,
        this.itemBg = new J,
        this.lineImg = new J,
        this.name_lab = new rt,
        this.talk_lab = new Y,
        this.addChild(this.box),
        this.addChild(this.itemBg),
        this.addChild(this.lineImg),
        this.addChild(this.name_lab),
        this.addChild(this.talk_lab),
        this.itemBg.skin = "x5_login/bg_talk.png",
        this.itemBg.sizeGrid = "13,18,30,59",
        this.itemBg.width = 400,
        this.itemBg.height = 170,
        this.lineImg.skin = "x5_login/line_talk.png",
        this.lineImg.x = 10,
        this.lineImg.y = 30,
        this.lineImg.width = 382,
        this.lineImg.height = 20,
        this.name_lab.font = "黑体",
        this.name_lab.fontSize = 24,
        this.name_lab.color = "#FFEEA0",
        this.name_lab.x = 29,
        this.name_lab.y = 18,
        this.name_lab.cacheAs = "bitmap",
        this.talk_lab.x = 28,
        this.talk_lab.y = 57,
        this.talk_lab.color = "#BCC6CF",
        this.talk_lab.width = 354,
        this.talk_lab.height = 80,
        this.talk_lab.style.fontSize = 24,
        this.talk_lab.style.fontFamily = "黑体",
        this.talk_lab.style.color = "#BCC6CF",
        this.talk_lab.style.leading = 4,
        this.talk_lab.style.wordWrap = !0,
        this.talk_lab.cacheAs = "bitmap",
        this.name_lab.text = d.getI18(20039)
    }
    t(Yn, "app.X5WuhunSelectItem", Wn = j),
    (N = Yn.prototype).getUIView = function() {
        return Yn.uiView
    }
    ,
    N.setSelect = function(t) {
        m.to(this.imgLight, {
            alpha: t ? 1 : 0
        }, 150)
    }
    ,
    N.showNewIcon = function(t) {}
    ,
    N.onDown = function(t) {
        this.downPos = new pt(x.stage.mouseX,x.stage.mouseY),
        this.on("mouseup", this, this.onUp)
    }
    ,
    N.onUp = function(t) {
        this.off("mouseup", this, this.onUp);
        var e = new pt(x.stage.mouseX,x.stage.mouseY);
        Math.abs(e.x - this.downPos.x) < 10 && x.timer.callLater(this, this.focusOn)
    }
    ,
    N.focusOn = function() {
        p.ins.focusToItem(this)
    }
    ,
    e(0, N, "data", Wn.prototype._$get_data, function(t) {
        this.setSelect(!1),
        this.imgFull.visible = !1,
        t && (this._cfg = t,
        this.imgIcon.skin = "res/x5_unpack/" + this._cfg.btn + ".png",
        this.imgIcon.gray = this.imgFull.visible = !1)
    }),
    e(0, N, "dataSource", Wn.prototype._$get_dataSource, function(t) {
        x.superSet(Wn, this, "dataSource", t),
        this.imgLight.alpha = 0,
        this.boxClick.on("mousedown", this, this.onDown),
        this.setSelect(!1),
        this.imgFull.visible = !1,
        t && (this._cfg = t,
        this.imgIcon.skin = "res/x5_unpack/" + this._cfg.btn + ".png",
        p.ins.wuhunSelectPlayerId ? (this.imgIcon.gray = !Wo.checkCfgAble(this.cfg, c.sex, p.ins.wuhunSelectTargetIndex),
        this.showNewIcon(Wo.checkCfgByType(this.cfg, c.sex, p.ins.wuhunSelectTargetIndex, !0))) : (this.imgIcon.gray = !1,
        this.showNewIcon(!1)),
        this.imgFull.visible = !1),
        this.showNewIcon(!1)
    }),
    e(0, N, "cfg", function() {
        return this._cfg
    }, Wn.prototype._$set_cfg),
    e(0, N, "parentView", function() {
        return this._parentView
    }, Wn.prototype._$set_parentView),
    Yn.uiView = {
        x: 0,
        type: "View",
        selectedBox: 15,
        selecteID: 13,
        referenceLines: [{
            value: -371,
            type: 1,
            id: 1
        }, {
            value: -468,
            type: 0,
            id: 2
        }],
        props: {
            width: 120,
            sceneColor: "#a4a4a4",
            height: 190
        },
        nodeParent: -1,
        label: "View",
        isOpen: !0,
        isDirectory: !0,
        isAniNode: !0,
        hasChild: !0,
        compId: 1,
        child: [{
            x: 15,
            type: "Box",
            props: {
                y: 104,
                x: 60,
                var: "boxCon"
            },
            nodeParent: 1,
            label: "Box(boxCon)",
            isOpen: !0,
            isDirectory: !0,
            isAniNode: !0,
            hasChild: !0,
            compId: 15,
            child: [{
                x: 30,
                type: "Image",
                props: {
                    y: -39,
                    x: -40,
                    width: 80,
                    var: "imgIcon",
                    skin: "res/x5_unpack/icon_wuhun_13.png",
                    height: 80
                },
                nodeParent: 15,
                label: "Image(imgIcon)",
                isDirectory: !1,
                isAniNode: !0,
                hasChild: !1,
                compId: 10,
                child: [],
                $HIDDEN: !1
            }, {
                x: 30,
                type: "Image",
                props: {
                    y: -51,
                    x: -49,
                    skin: "x5_wuhunWx/ringCenter_1.png"
                },
                nodeParent: 15,
                label: "Image",
                isDirectory: !1,
                isAniNode: !0,
                hasChild: !1,
                compId: 6,
                child: [],
                $LOCKED: !1,
                $HIDDEN: !1
            }, {
                x: 30,
                type: "Image",
                props: {
                    y: -85,
                    x: -86,
                    var: "imgLight",
                    skin: "x5_wuhunWx/selectLight.png",
                    alpha: 1
                },
                nodeParent: 15,
                label: "Image(imgLight)",
                isDirectory: !1,
                isAniNode: !0,
                hasChild: !1,
                compId: 7,
                child: [],
                $LOCKED: !1,
                $HIDDEN: !0
            }, {
                x: 30,
                type: "Image",
                props: {
                    y: 35,
                    x: -66,
                    var: "imgFull",
                    skin: "x5_wuhunWx/full_bg.png"
                },
                nodeParent: 15,
                label: "Image(imgFull)",
                isOpen: !0,
                isDirectory: !0,
                isAniNode: !0,
                hasChild: !0,
                compId: 13,
                child: [{
                    x: 45,
                    type: "Image",
                    props: {
                        y: 2,
                        x: 27,
                        skin: "x5_wuhunWx/img_full.png"
                    },
                    nodeParent: 13,
                    label: "Image",
                    isDirectory: !1,
                    isAniNode: !0,
                    hasChild: !1,
                    compId: 12,
                    child: []
                }],
                $HIDDEN: !0
            }]
        }, {
            x: 15,
            type: "Box",
            props: {
                width: 120,
                var: "boxClick",
                mouseEnabled: !0,
                height: 190
            },
            nodeParent: 1,
            label: "Box(boxClick)",
            isDirectory: !1,
            isAniNode: !0,
            hasChild: !1,
            compId: 16,
            child: []
        }],
        animations: [{
            nodes: [],
            name: "ani1",
            id: 1,
            frameRate: 24,
            action: 0
        }]
    };
    var Wn, jn = Yn;
    function Yn() {
        this.boxCon = null,
        this.imgIcon = null,
        this.imgLight = null,
        this.imgFull = null,
        this.boxClick = null,
        this._cfg = null,
        this.downPos = null,
        this._parentView = null,
        Wn.call(this),
        j.createComp(Yn.uiView, this, this)
    }
    t(Kn, "app.fateGame.f1.layer.AppGameScene", $n = Rn),
    (T = Kn.prototype).sortTitleLayer = function() {
        x.timer.callLater(this, this.sortTitleLayer2)
    }
    ,
    T.sortTitleLayer2 = function() {
        if (this._titleLayer._childs && 0 != this._titleLayer._childs.length) {
            var t = this._titleLayer._childs.concat();
            t.sort(Kn.sortTitle);
            for (var e = 0; e < t.length; ++e)
                this._titleLayer.setChildIndex(t[e], e)
        }
    }
    ,
    T.moveTo = function(t, e, i, s, n, o) {
        this.m_moveBeginTime = w.now(),
        this.m_moveBeginX = t,
        this.m_moveBeginY = e,
        this.m_moveEndX = i,
        this.m_moveEndY = s,
        this.m_moveTime = n,
        this.m_moveCompleteHandler = o
    }
    ,
    T.clearMove = function() {
        this.m_moveBeginTime = this.m_moveTime = this.m_moveEndY = this.m_moveEndX = this.m_moveBeginY = this.m_moveBeginX = 0,
        this.m_moveCompleteHandler = null
    }
    ,
    T.scalePoseTo = function(t, e, i, s, n, o, a) {
        void 0 === o && (o = 0),
        us.ins.s_moveSceneSmoothTime = 0,
        this.moveTo(t, e, i, s, n, a),
        this.changeSceenScale(o, n, a)
    }
    ,
    T.resumeScene = function(t) {
        void 0 === t && (t = !0),
        this.isHiding && (this.isHiding = !1,
        this._shadowLayer.visible = !0,
        this._bottomLayer.visible = !0,
        this._projectiveLayer.visible = !0,
        this._gameLayer.visible = !0,
        this._topLayer.visible = !0,
        this._nameBottomImgLayer.visible = !0,
        this._nameLayer.visible = !0,
        this._nameTopImgLayer.visible = !0,
        this._nameFxLayer1.visible = !0,
        this._nameFxLayer2.visible = !0,
        this._roletopLayer.visible = !0,
        this._titleLayer.visible = this._titleVisible,
        this._numberLayer.visible = !0,
        this._nearbyMsgLayer.visible = !0,
        this._tempLayer.visible = !0,
        this.updateRoleDisplay(),
        this.setFocusPlayer(null, !1, t, !0, !1),
        this._mapGridNodes && this._mapGridNodes.parent && (this._mapGridNodes.removeChildren(),
        this._bgView.removeChild(this._mapGridNodes)),
        this.resetCutPet())
    }
    ,
    T.hideScene = function() {
        this.isHiding || (this.isHiding = !0,
        this._shadowLayer.visible = !1,
        this._bottomLayer.visible = !1,
        this._projectiveLayer.visible = !1,
        this._gameLayer.visible = !1,
        this._topLayer.visible = !1,
        this._nameBottomImgLayer.visible = !1,
        this._nameLayer.visible = !1,
        this._nameTopImgLayer.visible = !1,
        this._nameFxLayer1.visible = !1,
        this._nameFxLayer2.visible = !1,
        this._roletopLayer.visible = !1,
        this._titleLayer.visible = !1,
        this._numberLayer.visible = !1,
        this._nearbyMsgLayer.visible = !1,
        this._tempLayer.visible = !1,
        pi.ins.hideAll())
    }
    ,
    T.showLayer = function(t, e) {
        void 0 === e && (e = "");
        e = t ? 1 : 0;
        this._shadowLayer.alpha = e,
        this._bottomLayer.alpha = e,
        this._projectiveLayer.alpha = e,
        this._gameLayer.alpha = e,
        this._topLayer.alpha = e,
        this._nameBottomImgLayer.alpha = e,
        this._nameLayer.alpha = e,
        this._nameTopImgLayer.alpha = e,
        this._nameFxLayer1.alpha = e,
        this._nameFxLayer2.alpha = e,
        this._roletopLayer.alpha = e,
        this._titleLayer.alpha = e,
        this._numberLayer.alpha = e,
        this._nearbyMsgLayer.alpha = e,
        this._tempLayer.alpha = e,
        x.stage.mouseEnabled = t
    }
    ,
    T.showTitleLayer = function(t) {
        this._titleVisible = t,
        this.isHiding || (this._titleLayer.visible = this._titleVisible)
    }
    ,
    T.addedToStageHandler = function(t) {
        this.once("undisplay", this, this.removedFromStageHandler),
        x.stage.on("mousedown", this, this.mouseDownStageHandler),
        x.stage.on("click", this, this.clickStageHandler),
        this.resumeScene(),
        this.resetScaleArg()
    }
    ,
    T.removedFromStageHandler = function(t) {
        if (this.once("display", this, this.addedToStageHandler),
        x.stage.off("click", this, this.clickStageHandler),
        x.stage.off("mousedown", this, this.mouseDownStageHandler),
        x.stage.off("mousemove", this, this.mouseMoveStageHandler),
        x.stage.off("mouseup", this, this.mouseUpStageHandler),
        x.stage.off("mouseout", this, this.mouseUpStageHandler),
        this.mouseUpStageHandler(null),
        this.focusPlayer && this.focusPlayer.isControlByPlayer && this.focusPlayer.moveByAngle(NaN),
        this.hideScene(),
        this.reset(),
        this.bgView && (this.bgView.reset(),
        !ve.ins.cityScene.bgView || !ve.ins.cityScene.bgView.bgSrc || this.bgView.bgSrc != ve.ins.cityScene.bgView.bgSrc)) {
            for (var e = this.bgView.fragmentH * this.bgView.fragmentW, i = 0; i < e; i++) {
                var s = this.bgView.bgSrc + "/bgfm" + i + ".jpg";
                x.loader.getRes(s) && x.loader.clearRes(s, !0)
            }
            this._bgView && this._bgView.removeSelf()
        }
    }
    ,
    T.resizeHandler = function(t) {
        this.scale(I.globalScale * I.gameSceneSc * I.globalViewScaleX, I.globalScale * I.gameSceneSc * I.globalViewScaleY),
        this.width = I.w * this.scaleX + 1,
        this.height = I.h * this.scaleY + 1,
        this.focusPlayer && this.parent && this.moveScene(this.focusPlayer.x, this.focusPlayer.y - 45)
    }
    ,
    T.clickStageHandler = function(t) {
        if (!this._scaleIng && !M.ins.isChangingMap && !M.ins.isCollectIng && (!k.getCityinsance().data || k.getCityinsance().data.tileByteArrays)) {
            var e = this.focusPlayer;
            if (e && 1 != e.curStatus && e.isAlive() && !this.isMovedByPlayer && (this.clickedPlayer = null,
            t.target == this || this.contains(t.target))) {
                var t = (x.stage.mouseX - this._gameLayer.x * this.scaleX) / this.scaleX
                  , i = (x.stage.mouseY - this._gameLayer.y * this.scaleY) / this.scaleY
                  , s = (t /= this._curScale,
                i /= this._curScale,
                this.getRoleByPoint(t, i));
                if (s)
                    x.__typeof(s, to) ? x.__typeof(e, ga) && e.setMoveTargetRole(s) : x.__typeof(s, ga) && e.setMoveTargetRole(s);
                else if (e && e.parent) {
                    x.__typeof(e, ga) && e.setMoveTargetRole(null);
                    var n = e.judgeCanMove(t, i)
                      , o = "ground_able";
                    if (x.timer.clear(this, this.clearClickPoint),
                    0 == n && (x.timer.once(2e3, this, this.clearClickPoint),
                    o = "ground_disable"),
                    this.curClickUrl != o && (this.clickPoint && (this.clickPoint.recover(),
                    this.clickPoint = null),
                    this.curClickUrl = o),
                    this.clickPoint || (this.clickPoint = dt.getItemByClass("app.fateGame.f1.vmc.AppVMCView", qs),
                    this.clickPoint.resClearTime = 6e4),
                    t = S.tile2Coo(S.coo2Tile(t)),
                    i = S.tile2Coo(S.coo2Tile(i)),
                    this.clickPoint.x = t,
                    this.clickPoint.y = i,
                    this.clickPoint.updatePose(Me.getEffectUrl(o), 90, null, !0),
                    e.parent && e.parent.addChild(this.clickPoint),
                    !k.ins.canPass(S.coo2Tile(t), S.coo2Tile(i)))
                        return;
                    e.pathByCoo(t, i, 0, 0, !1, !0, !1, !0, !1),
                    e.once("Path_Finish", this, this.playerArrivePointHandler),
                    e.once("Path_Stop", this, this.playerArrivePointHandler)
                }
                s && M.ins.event("STAGE_CLICK_ROLE", s)
            }
        }
    }
    ,
    T.clearClickPoint = function() {
        this.clickPoint && this.clickPoint.stop(),
        this.clickPoint && this.clickPoint.parent && this.clickPoint.parent.removeChild(this.clickPoint)
    }
    ,
    T.mouseDownStageHandler = function(t) {
        var e;
        this._nearestAct = w.now(),
        M.ins.isChangingMap || !this.isFocusPlayer || M.ins.isCollectIng || (e = this.focusPlayer) && 1 != e.curStatus && e.isAlive() && (M.ins.curMapLogic.pathFinish(),
        this.isMovedByPlayer = !1,
        !x.__typeof(t.target, gt)) && this.parent && (e = A.ins.playerInfo.mapId,
        t = De.ins.getMapById("" + e)) && (M.ins.curMapLogic.isPlayerControl() || 2 == t.mapType || 12 == t.mapType || 17 == t.mapType || 25 == t.mapType) && (this.mouseDownX = x.stage.mouseX,
        this.mouseDownY = x.stage.mouseY,
        x.stage.on("mousemove", this, this.mouseMoveStageHandler),
        x.stage.on("mouseup", this, this.mouseUpStageHandler))
    }
    ,
    T.mouseMoveStageHandler = function(t) {}
    ,
    T.mouseUpStageHandler = function(t) {
        x.stage.off("mousemove", this, this.mouseMoveStageHandler),
        x.stage.off("mouseup", this, this.mouseUpStageHandler),
        x.stage.off("mouseout", this, this.mouseUpStageHandler),
        this.mouseDownX = NaN,
        this.mouseDownY = NaN,
        this.removeRocker(),
        this.focusPlayer && this.focusPlayer.isControlByPlayer && this.focusPlayer.moveByAngle(NaN),
        this.playerArrivePointHandler()
    }
    ,
    T.removeRockerHandler = function() {
        x.stage.off("mousemove", this, this.mouseMoveStageHandler),
        x.stage.off("mouseup", this, this.mouseUpStageHandler),
        x.stage.off("mouseout", this, this.mouseUpStageHandler),
        this.mouseDownX = NaN,
        this.mouseDownY = NaN,
        this.removeRocker(),
        this.focusPlayer && this.focusPlayer.moveByAngle(NaN),
        this.playerArrivePointHandler()
    }
    ,
    T.updateRocker = function(t, e) {
        var i = w.pixelRatio < 1 ? 1 : w.pixelRatio;
        r.isConchApp || 2 < w.pixelRatio && (i = 2),
        i = w.onPC ? i : i / 2,
        this.rockerBg || (this.rockerBg = new z,
        this.rockerBg.scale(i, i)),
        this.rockerBg.parent || (x.stage.addChild(this.rockerBg),
        this.rockerBg.alpha = 0,
        Yt.get(this.rockerBg).to({
            alpha: 1,
            duration: 200
        })),
        this.rockerBg.x = this.mouseDownX - 82 * i,
        this.rockerBg.y = this.mouseDownY - 82 * i,
        this.rocker || (this.rocker = new z,
        this.rocker.scale(i, i)),
        this.rocker.parent || (x.stage.addChild(this.rocker),
        this.rocker.alpha = 0,
        Yt.get(this.rocker).to({
            alpha: 1,
            duration: 200
        })),
        (t - this.mouseDownX) * (t - this.mouseDownX) + (e - this.mouseDownY) * (e - this.mouseDownY) <= this.rockerSize * this.rockerSize * i * i ? (this.rocker.x = t - 39 * i,
        this.rocker.y = e - 39 * i) : (e = Math.atan2(e - this.mouseDownY, t - this.mouseDownX),
        this.rocker.x = this.mouseDownX + (this.rockerSize * Math.cos(e) - 39) * i,
        this.rocker.y = this.mouseDownY + (this.rockerSize * Math.sin(e) - 39) * i)
    }
    ,
    T.removeRocker = function() {
        var t;
        this.rockerBg && this.rockerBg.parent && (Yt.removeTweens(this.rockerBg, !0),
        (t = Yt.get(this.rockerBg)).to({
            alpha: 0,
            duration: 200
        }),
        t.call(this.doRemoveRocker, this, this.rockerBg)),
        this.rocker && this.rocker.parent && (Yt.removeTweens(this.rocker, !0),
        (t = Yt.get(this.rocker)).to({
            alpha: 0,
            duration: 200
        }),
        t.call(this.doRemoveRocker, this, this.rocker))
    }
    ,
    T.doRemoveRocker = function(t) {
        t && t.parent && t.parent.removeChild(t)
    }
    ,
    T.mapReady = function() {
        this.reset(),
        this.createNpc(),
        this.loadingComplete()
    }
    ,
    T.createNpc = function() {
        if (30001 != A.ins.playerInfo.mapId) {
            var t, e = De.ins.getMapById("" + A.ins.playerInfo.mapId), i = ri.ins.getNpcsByType(e.mapType);
            for (t in i) {
                var s, n = (s = i[t]).id;
                0 < s.mapId && s.mapId != A.ins.playerInfo.mapId || 1 != s.isMission && (s = Gi.fromNumber(n),
                (s = pi.ins.getRole(s)) || ((s = dt.getItemByClass("app.fateGame.role.AppNpc", to)).npcId = n,
                this.addRole(s)),
                s.updateName())
            }
        }
    }
    ,
    T.loadingComplete = function() {
        k.ins.data = this._bgView,
        this.updateWH(),
        this.enableEnterFrame(),
        this.riviseCityPos(),
        null != this._loadedFun && this._loadedFun.run()
    }
    ,
    T.riviseCityPos = function() {
        var t = A.ins.playerInfo.mapId
          , t = De.ins.getMapById("" + t);
        99999 == t.id || 90002 == t.id ? this.isCityCopy = !0 : this.isCityCopy = !1
    }
    ,
    T.updateMap = function(t, e, i) {
        this._loadedFun = e,
        this._bgView.update("art/res/map/" + t + ".bin", b.create(this, this.mapReady, null, !1), null, t, i)
    }
    ,
    T.addRole = function(t) {
        t && (this.addElement(t),
        pi.ins.addRole(t),
        this.updateRoleDisplay())
    }
    ,
    T.roleCount = function() {
        return this._roles ? this._roles.length : 0
    }
    ,
    T.getRole = function(t) {
        var e, i;
        if (this._roles && t)
            for (i in this._roles)
                if ((e = this._roles[i]).info && t.equal(e.info.personId))
                    return e;
        return null
    }
    ,
    T.setRolePause = function(t, e) {
        var i, s;
        if (this._roles)
            for (s in this._roles)
                i = this._roles[s],
                t <= 0 || i.info && e && e.equal(i.info.personId) ? i.pauseOver() : i.pause(t)
    }
    ,
    T.addElement = function(t) {
        this._otherPlayerVisible || (t.visible = t.visible),
        t.updatePosition(),
        "act11" == t.actType ? t.setAct("act11", !1, !1) : t.setAct("act01", !0, !1),
        this.isInScene(t) || this._roles.push(t),
        m.clearAll(t),
        Yt.removeTweens(t, !0),
        t.scale(I.roleScale * t.roleScale, I.roleScale * t.roleScale),
        t.alpha = 1,
        t.isShowFly ? (this._birdLayer.addChild(t),
        this._birdLayer.addChild(t.shadow),
        t.addChild(t.topView),
        t.topView.x = 0,
        t.topView.y = 94,
        t.updateName(),
        t.topView.reCalc()) : (this._gameLayer.addChild(t),
        t.isTeammate() && t.isUser(),
        t.sceneHideRole(!this._gameLayer.visible),
        this._shadowLayer.addChild(t.shadow),
        t.topView.setParantScene(this),
        t.updateName(),
        t.topView.reCalc(),
        t.loop())
    }
    ,
    T.addDropName = function(t) {
        this._nameLayer.addChild(t)
    }
    ,
    T.removeRole = function(t, e) {
        void 0 === e && (e = !0),
        t && (pi.ins.removeRole(t),
        t.info && (t.info.isDead = !0),
        this.removeElement(t, e),
        this.updateRoleDisplay())
    }
    ,
    T.removeElement = function(t, e) {
        void 0 === e && (e = !0),
        t && (this.removeArrayElement(this._roles, t),
        e ? t.destroy(!0) : t.parent && t.parent.removeChild(t))
    }
    ,
    T.removeArrayElement = function(t, e) {
        e = t.indexOf(e);
        -1 != e && t.splice(e, 1)
    }
    ,
    T.isInScene = function(t) {
        var e, i;
        for (i in this._roles)
            if ((e = this._roles[i]) && e.info && e.info == t.info)
                return !0;
        return !1
    }
    ,
    T.__enterFrame = function(t) {
        (this._nearestAct <= 0 || Ji.ins.isInCity) && (this._nearestAct = w.now()),
        w.now() - this._nearestAct > Kn.maxNoActTime && (M.ins.isChangingMap || (this._nearestAct = w.now(),
        $i.ins.switchCityScene(!0)));
        for (var e = null != this.parent, i = this._roles.length, s = x.timer.currFrame % 3 == 0, n = 0; n < i; n++) {
            var o = this._roles[n];
            o.loop(),
            e && s && (k.ins.isAlphaByCoo(o.x, o.y) ? o.isTransparent = !0 : o.isTransparent = !1)
        }
        this.isCityCopy && (h = M.ins.curPlayer,
        $i.ins.cityCopyPos = [h.x, h.y]);
        var a, r, l, h = M.ins.curMapCfg.cameraPos;
        0 < this.m_moveTime ? (a = Math.min(w.now() - this.m_moveBeginTime, this.m_moveTime) / this.m_moveTime,
        r = this.m_moveBeginX + (this.m_moveEndX - this.m_moveBeginX) * a,
        l = this.m_moveBeginY + (this.m_moveEndY - this.m_moveBeginY) * a,
        this.setFocusPos(r, l, !1),
        1 <= a && (r = this.m_moveCompleteHandler,
        this.clearMove(),
        r) && r.run()) : M.ins.needCheckRoleCenter ? (l = !1,
        (l = this._targetScale != Number.MAX_VALUE && this._costTime != Number.MAX_VALUE && this._starTime != Number.MAX_VALUE ? this._curScale != this._targetScale : l) ? e && this.follow(!0) : (r = (a = M.ins.getAllRoleCenterPos())[0],
        l = a[1],
        us.ins.s_moveSceneSmoothTime = M.SCENE_MOVE_TIME,
        us.ins.s_scene_centerY = .5,
        e && this.setFocusPos(r, l, !0))) : h && h.x && this.isFacusCameraPos ? e && this.setFocusPos(S.tile2Coo(parseInt(h.x)), S.tile2Coo(parseInt(h.y)), !1) : M.ins.isPlayerControlMap() && this.isFollowPlayerControlRole ? e && this.setFocusPlayer(null, !1, !0, !0, !1) : this._lastIsHide ? e && this.follow(!1) : e && this.follow(!0),
        this._lastIsHide = !1,
        e && 8 < this.layoutCount++ && (this.layoutElements(),
        this.layoutCount = 0)
    }
    ,
    T.layoutElements = function() {
        this._gameLayer && this.layoutElementsInLayer(this._gameLayer)
    }
    ,
    T.layoutElementsInLayer = function(t) {
        for (var e = [], i = t.numChildren, s = 0; s < i; s++)
            e.push(t.getChildAt(s));
        if (e && 1 < e.length)
            for (e.sort(this.sortElements); i--; ) {
                var n = e[i];
                t.getChildIndex(n) != i && t.setChildIndex(n, i)
            }
    }
    ,
    T.sortElements = function(t, e) {
        return x.__typeof(t, Nn) && x.__typeof(e, Nn) && (t.isAlive() && !e.isAlive() || !t.isAlive() && e.isAlive()) ? t.isAlive() ? 1 : -1 : (x.__typeof(t, Nn) && x.__typeof(e, Nn),
        t.y != e.y ? t.y - e.y : t.parent.getChildIndex(t) - e.parent.getChildIndex(e))
    }
    ,
    T.follow = function(t, e) {
        var i = 0
          , s = 0;
        if (this._m_focusPosX != Kn.Invalid_Pos || this._m_focusPosY != Kn.Invalid_Pos)
            i = this._m_focusPosX,
            s = this._m_focusPosY;
        else {
            if (!(this.focusPlayer && 0 < this.focusPlayer.x))
                return;
            i = this.focusPlayer.x,
            s = this.focusPlayer.y - 45
        }
        this.moveScene(i, s, t, e = void 0 === e ? !0 : e)
    }
    ,
    T.getMouseGrid = function() {
        var t = (x.stage.mouseX - this._gameLayer.x * this.scaleX) / this.scaleX
          , e = (x.stage.mouseY - this._gameLayer.y * this.scaleY) / this.scaleY;
        return new pt(S.coo2Tile(t),S.coo2Tile(e))
    }
    ,
    T.changeSceenScale = function(t, e, i) {
        isNaN(t) || isNaN(e) || (this._origeScale = this._curScale,
        this._starTime = w.now(),
        this._targetScale = t,
        this._costTime = e <= 0 ? 1 : e,
        this._scaleCompletedFun = i)
    }
    ,
    T.moveScene = function(t, e, i, s) {
        void 0 === i && (i = !1),
        void 0 === s && (s = !1),
        us.ins.focusX = t,
        us.ins.focusY = e,
        this._scaleIng = !1,
        this._targetScale != Number.MAX_VALUE && this._costTime != Number.MAX_VALUE && this._starTime != Number.MAX_VALUE && (this._scaleIng = this._curScale != this._targetScale,
        (n = w.now()) <= this._starTime + this._costTime ? (n = (n - this._starTime) / this._costTime * (this._targetScale - this._origeScale),
        this._curScale = this._origeScale + n) : (this._scaleCompletedFun && (this._scaleCompletedFun.run(),
        this._scaleCompletedFun = null),
        this._scaleIng = !1,
        this._curScale = this._targetScale,
        this._targetScale = Number.MAX_VALUE,
        this._costTime = Number.MAX_VALUE,
        this._starTime = Number.MAX_VALUE)),
        t = (t + Kn.s_addMoveX) * this._curScale,
        e = (e + Kn.s_addMoveY) * this._curScale;
        var n = I.w
          , o = I.h
          , a = 0 < us.ins.s_scene_centerY ? us.ins.s_scene_centerY : .48
          , t = (this._bgView._w,
        this._curScale,
        this._bgView._h,
        this._curScale,
        t + this._gameLayer.x)
          , e = e + this._gameLayer.y
          , r = this._bgView.x
          , l = this._bgView.y
          , t = r - (t - .5 * n)
          , r = (M.ins.curMapCfg.qMapWidth - -t / this._curScale < n / this._curScale ? t = (n / this._curScale - M.ins.curMapCfg.qMapWidth) * this._curScale : 0 < t && (t = 0),
        t)
          , n = l - (e - o * a);
        M.ins.curMapCfg.qMapHeight - -n / this._curScale < o / this._curScale ? n = (o / this._curScale - M.ins.curMapCfg.qMapHeight) * this._curScale : 0 < n && (n = 0),
        l = n,
        !this._scaleIng && i && 0 < us.ins.s_moveSceneSmoothTime ? (this.smoothCxtX.current = this._gameLayer.x,
        this.smoothCxtY.current = this._gameLayer.y,
        this.smoothCxtX.target = r,
        this.smoothCxtY.target = l,
        this.smoothCxtX.smoothTime = this.smoothCxtY.smoothTime = us.ins.s_moveSceneSmoothTime,
        this.smoothCxtX.deltaTime = this.smoothCxtY.deltaTime = (w.now() - this.lastMoveSceneTime) / 1e3,
        r = this.smoothCxtX.current,
        l = this.smoothCxtY.current) : (this.smoothCxtX.currentVelocity = 0,
        this.smoothCxtY.currentVelocity = 0),
        this.lastMoveSceneTime = w.now(),
        s = s || this._scaleIng,
        this.setLayerPos(r, l, s),
        this.setVisibleRange(-r - 100, -l - 50, this._w + 100 + 100, this._h + 50 + 0)
    }
    ,
    T.updateRoleDisplay = function() {
        this._gameLayer.visible && pi.ins.updateRoleDisplay()
    }
    ,
    T.setLayerPos = function(t, e, i) {
        void 0 === i && (i = !0),
        this._bgView.updateScale(this._curScale, this._curScale),
        this._bgView.pos(t, e, i),
        this._shadowLayer.pos(t, e, !0),
        this._bottomLayer.pos(t, e, !0),
        this._projectiveLayer.pos(t, e, !0),
        this._gameLayer.pos(t, e, !0),
        this._topLayer.pos(t, e, !0),
        this._nameBottomImgLayer.pos(t, e, !0),
        this._nameLayer.pos(t, e, !0),
        this._nameTopImgLayer.pos(t, e, !0),
        this._nameFxLayer1.pos(t, e, !0),
        this._nameFxLayer2.pos(t, e, !0),
        this._roletopLayer.pos(t, e, !0),
        this._titleLayer.pos(t, e, !0),
        this._numberLayer.pos(t, e, !0),
        this._nearbyMsgLayer.pos(t, e, !0),
        this._tempLayer.pos(t, e, !0),
        this._birdLayer.pos(t, e, !0),
        this._bgView.scale(this._curScale, this._curScale, !0),
        this._shadowLayer.scale(this._curScale, this._curScale, !0),
        this._bottomLayer.scale(this._curScale, this._curScale, !0),
        this._projectiveLayer.scale(this._curScale, this._curScale, !0),
        this._gameLayer.scale(this._curScale, this._curScale, !0),
        this._topLayer.scale(this._curScale, this._curScale, !0),
        this._nameBottomImgLayer.scale(this._curScale, this._curScale, !0),
        this._nameLayer.scale(this._curScale, this._curScale, !0),
        this._nameTopImgLayer.scale(this._curScale, this._curScale, !0),
        this._nameFxLayer1.scale(this._curScale, this._curScale, !0),
        this._nameFxLayer2.scale(this._curScale, this._curScale, !0),
        this._roletopLayer.scale(this._curScale, this._curScale, !0),
        this._titleLayer.scale(this._curScale, this._curScale, !0),
        this._numberLayer.scale(this._curScale, this._curScale, !0),
        this._nearbyMsgLayer.scale(this._curScale, this._curScale, !0),
        this._tempLayer.scale(this._curScale, this._curScale, !0),
        this._birdLayer.scale(this._curScale, this._curScale, !0)
    }
    ,
    T.setVisibleRange = function(t, e, i, s) {
        this._visibleRange || (this._visibleRange = new st),
        this._visibleRange.setTo(t, e, i, s);
        var n, o, a, r;
        for (r in this._roles)
            n = (a = this._roles[r]).visible,
            (o = a.x * this._curScale >= t && a.y * this._curScale >= e && a.x * this._curScale <= t + i && a.y * this._curScale <= e + s) != n && (a.visible = o)
    }
    ,
    T.isInVisibleRange = function(t, e) {
        var i, s, n, o;
        return !!this._visibleRange && (i = this._visibleRange.x,
        s = this._visibleRange.y,
        n = this._visibleRange.width,
        o = this._visibleRange.height,
        t * this._curScale >= i) && e * this._curScale >= s && t * this._curScale <= i + n && e * this._curScale <= s + o
    }
    ,
    T.xInVisibleRange = function(t) {
        var e, i;
        return !!this._visibleRange && (e = this._visibleRange.x,
        this._visibleRange.y,
        i = this._visibleRange.width,
        this._visibleRange.height,
        t * this._curScale >= e) && t * this._curScale <= e + i
    }
    ,
    T.yInVisibleRange = function(t) {
        var e, i;
        return !!this._visibleRange && (this._visibleRange.x,
        e = this._visibleRange.y,
        this._visibleRange.width,
        i = this._visibleRange.height,
        t * this._curScale >= e) && t * this._curScale <= e + i
    }
    ,
    T.enableEnterFrame = function() {
        x.timer.frameLoop(1, this, this.__enterFrame, null, !0, !0)
    }
    ,
    T.disableEnterFrame = function() {
        x.timer.clear(this, this.__enterFrame)
    }
    ,
    T.getMapXY = function(t, e) {
        return [t + this._gameLayer.x, e + this._gameLayer.y]
    }
    ,
    T.resetScaleArg = function() {
        this._curScale = 1,
        this._scaleIng = !1,
        this._scaleCompletedFun = null,
        this._targetScale = Number.MAX_VALUE,
        this._costTime = Number.MAX_VALUE,
        this._starTime = Number.MAX_VALUE
    }
    ,
    T.reset = function() {
        this.removeAllRole(),
        this.clearMove(),
        this._sceneItems = [],
        this.removeRocker();
        var t = pi.ins;
        t.reset(),
        this.resetScaleArg(),
        t.player && this.addRole(t.player),
        this._showMap = !1,
        this._mapGridNodes && this._mapGridNodes.parent && (this._mapGridNodes.removeChildren(),
        this._bgView.removeChild(this._mapGridNodes))
    }
    ,
    T.removeAllRole = function(t) {
        void 0 === t && (t = !1);
        for (var e, i = []; 0 < this._roles.length; )
            e = this._roles[0],
            pi.ins.removeRole(e),
            this.removeElement(e);
        for (; 0 < i.length; )
            (e = i.shift()).pauseOver(),
            this._roles.push(e)
    }
    ,
    T.removeAllRoleAndUser = function() {
        for (var t; 0 < this._roles.length; )
            t = this._roles[0],
            pi.ins.removeRole(t),
            this.removeElement(t);
        pi.ins.removeAllTeammate(),
        pi.ins.reset()
    }
    ,
    T.resize = function() {
        app.fateGame.f1.AppBaseSprite.prototype.resize.call(this),
        this._bgView.resize(),
        this.setFocusPlayer(null, !1, !0, !0, !1)
    }
    ,
    T.finalize = function() {
        this.disableEnterFrame(),
        this._bgView.finalize(),
        this._bgView = null,
        $n.prototype.finalize.call(this)
    }
    ,
    T.getRoleByPoint = function(t, e) {
        for (var i, s, n, o = [], a = this.gameLayer.numChildren - 1; 0 <= a; a--) {
            var r = this.gameLayer.getChildAt(a);
            x.__typeof(r, Nn) && 0,
            t >= r.x + this.npcRect.x && t <= r.x + this.npcRect.x + this.npcRect.width && e >= r.y + this.npcRect.y + 0 && e <= r.y + this.npcRect.y + this.npcRect.height && 0
        }
        for (n in o)
            s = o[n],
            (!i || i.lv > s.lv) && (i = s);
        return (!i || !x.__typeof(i.son, to) || i.son.canClick) && i ? i.son : null
    }
    ,
    T.playerArrivePointHandler = function(t, e) {
        (t = void 0 === t ? !1 : t) && e && e.x && M.ins.event("ROLE_MOVE_POINT", [e.x, e.y]),
        this.clearClickPoint()
    }
    ,
    T.playerArriveHandler = function(t, e) {}
    ,
    T.clubMeditationEffAdd = function(t, e) {
        this._vmcMeditation = dt.getItemByClass("app.fateGame.f1.vmc.AppVMCView", qs),
        this._vmcMeditation.updatePose("art/res/other/x5/teach_light.json", 90, null, !0, !1, !1),
        this._vmcMeditation.roleScale = 2,
        this._vmcMeditation.pos(t, e - 35),
        this._topLayer.addChild(this._vmcMeditation)
    }
    ,
    T.clubMeditationEffClear = function() {
        this._vmcMeditation && this._vmcMeditation.removeSelf()
    }
    ,
    T.getCenterPoint = function() {
        var t = -this._gameLayer.x + .5 * I.w
          , e = -this._gameLayer.y + .5 * I.h;
        return new pt(t,e)
    }
    ,
    T.curIsHiding = function() {
        return this.isHiding
    }
    ,
    T.resetCutPet = function() {
        var t, e = pi.ins.roles;
        for (t in e)
            e[t]
    }
    ,
    T.setFocusPos = function(t, e, i) {
        void 0 === i && (i = !1),
        this._m_focusPosX = t,
        this._m_focusPosY = e,
        (this._focusPlayer = null) == this._gameLayer || this._m_focusPosX == Kn.Invalid_Pos && this._m_focusPosY == Kn.Invalid_Pos && (this._focusPlayer = pi.ins.getFocusPlayer(),
        !this._focusPlayer) || this.follow(i, !0)
    }
    ,
    T.setFocusPlayer = function(t, e, i, s, n) {
        !n && this._m_focusPosX != Kn.Invalid_Pos && this._m_focusPosY != Kn.Invalid_Pos || s && M.ins.curMapCfg && M.ins.curMapCfg.cameraPos && M.ins.curMapCfg.cameraPos.x || (t = t || pi.ins.getFocusPlayer(),
        this._focusPlayer = t,
        this._m_focusPosX = Kn.Invalid_Pos,
        this._m_focusPosY = Kn.Invalid_Pos,
        this.follow(e, i))
    }
    ,
    T.getAroundPoint = function(t, e, i, s, n) {
        for (var o, a = S.coo2Tile(i), r = S.coo2Tile(s), l = this._bgView.getMapObj(), h = a + -1 * n; h <= a + n; h++)
            for (var c = r + -1 * n; c <= r + n; c++) {
                var p = S.tile2Coo(h)
                  , u = S.tile2Coo(c);
                fi.distance(i, s, p, u) > n * S.GRID_BORDER || l.canWalkByCoo(p, u) && (null == o ? o = new pt(p,u) : fi.distanceSQ(t, e, o.x, o.y) > fi.distanceSQ(t, e, p, u) && o.setTo(p, u))
            }
        return o = null == o ? new pt(i,s) : o
    }
    ,
    e(0, T, "clickedPlayer", function() {
        return this._clickedPlayer
    }, function(t) {
        this._clickedPlayer && (this._clickedPlayer.roleSelected = !1),
        this._clickedPlayer = t,
        this._clickedPlayer && (this._clickedPlayer.roleSelected = !0)
    }),
    e(0, T, "showFocusPlayer", $n.prototype._$get_showFocusPlayer, function(t) {
        this.isFocusPlayer = t
    }),
    e(0, T, "showMap", function() {
        return this._showMap
    }, function(t) {
        if (!(this._showMap == t && t && this._mapGridNodes && this._mapGridNodes.parent))
            if (this._showMap = t) {
                this._mapGridNodes || (this._mapGridNodes = new z),
                this._mapGridNodes.removeChildren();
                for (var t = k.ins, e = t.data.gridW, i = t.data.gridH, s = 0; s < i; s++)
                    for (var n = 0; n < e; n++) {
                        var o = k.ins.canPass(n, s)
                          , a = new J;
                        o ? a.loadImage("x5_few/few_canwalk.png", 0, 0, S.GRID_BORDER, S.GRID_BORDER) : a.loadImage("x5_few/few_cannotwalk.png", 0, 0, S.GRID_BORDER, S.GRID_BORDER),
                        a.pos(n * S.GRID_BORDER, s * S.GRID_BORDER),
                        this._mapGridNodes.addChild(a)
                    }
                this._bgView.addChild(this._mapGridNodes)
            } else
                this._mapGridNodes && this._mapGridNodes.parent && (this._mapGridNodes.removeChildren(),
                this._bgView.removeChild(this._mapGridNodes))
    }),
    e(0, T, "curScale", function() {
        return this._curScale
    }, function(t) {
        this._curScale = t
    }),
    e(0, T, "tempLayer", function() {
        return this._tempLayer
    }, $n.prototype._$set_tempLayer),
    e(0, T, "bottomLayer", function() {
        return this._bottomLayer
    }, $n.prototype._$set_bottomLayer),
    e(0, T, "projectiveLayer", function() {
        return this._projectiveLayer
    }, $n.prototype._$set_projectiveLayer),
    e(0, T, "bgView", function() {
        return this._bgView
    }, $n.prototype._$set_bgView),
    e(0, T, "shadowLayer", function() {
        return this._shadowLayer
    }, $n.prototype._$set_shadowLayer),
    e(0, T, "gameLayer", function() {
        return this._gameLayer
    }, $n.prototype._$set_gameLayer),
    e(0, T, "numberLayer", function() {
        return this._numberLayer
    }, $n.prototype._$set_numberLayer),
    e(0, T, "nameBottomImgLayer", function() {
        return this._nameBottomImgLayer
    }, $n.prototype._$set_nameBottomImgLayer),
    e(0, T, "nameLayer", function() {
        return this._nameLayer
    }, $n.prototype._$set_nameLayer),
    e(0, T, "nameTopImgLayer", function() {
        return this._nameTopImgLayer
    }, $n.prototype._$set_nameTopImgLayer),
    e(0, T, "roleTopLayer", function() {
        return this._roletopLayer
    }, $n.prototype._$set_roleTopLayer),
    e(0, T, "titleLayer", function() {
        return this._titleLayer
    }, $n.prototype._$set_titleLayer),
    e(0, T, "nearbyMsgLayer", function() {
        return this._nearbyMsgLayer
    }, $n.prototype._$set_nearbyMsgLayer),
    e(0, T, "topLayer", function() {
        return this._topLayer
    }, $n.prototype._$set_topLayer),
    e(0, T, "focusPlayer", function() {
        return this._focusPlayer
    }, $n.prototype._$set_focusPlayer),
    e(0, T, "nameFxLayer2", function() {
        return this._nameFxLayer2
    }, $n.prototype._$set_nameFxLayer2),
    e(0, T, "nameFxLayer1", function() {
        return this._nameFxLayer1
    }, $n.prototype._$set_nameFxLayer1),
    Kn.sortTitle = function(t, e) {
        t = t.skin || t.url,
        e = e.skin || e.url;
        return t && !e ? -1 : !t && e ? 1 : t.localeCompare(e)
    }
    ,
    Kn.canPickTime = 0,
    Kn.SHOW_ROLE_ARROUND_PLAYER_NUM = 25,
    Kn.systemTime = 0,
    Kn._frameCount = 1,
    Kn._frameTimer = 0,
    Kn.newTime = 0,
    Kn.MAIN_OFFSET_Y = 45,
    Kn.s_checkPosMin = 60,
    Kn.s_checkPosForce = 200,
    Kn.s_addMoveX = 0,
    Kn.s_addMoveY = 0,
    O(Kn, ["maxNoActTime", function() {
        return this.maxNoActTime = 6e5
    }
    , "Invalid_Pos", function() {
        return this.Invalid_Pos = -99999
    }
    ]);
    var $n, qn = Kn;
    function Kn() {
        this.npcRect = new st(-35,-110,70,140),
        this._bgView = null,
        this._birdLayer = null,
        this._shadowLayer = null,
        this._bottomLayer = null,
        this._projectiveLayer = null,
        this._gameLayer = null,
        this._topLayer = null,
        this._nameBottomImgLayer = null,
        this._nameLayer = null,
        this._nameTopImgLayer = null,
        this._nameFxLayer1 = null,
        this._nameFxLayer2 = null,
        this._roletopLayer = null,
        this._titleLayer = null,
        this._numberLayer = null,
        this._nearbyMsgLayer = null,
        this._tempLayer = null,
        this._roles = null,
        this._sceneItems = null,
        this.clickPoint = null,
        this.dropTimeLineDic = {},
        this.isMovedByPlayer = !1,
        this.mouseDownX = NaN,
        this.mouseDownY = NaN,
        this.rockerBg = null,
        this.rocker = null,
        this.minMove = 30,
        this.rockerSize = 50,
        this._clickedPlayer = null,
        this.isHiding = !1,
        this.isCityCopy = !1,
        this._nearestAct = 0,
        this._loadedFun = null,
        this.m_moveBeginTime = 0,
        this.m_moveBeginX = 0,
        this.m_moveBeginY = 0,
        this.m_moveEndX = 0,
        this.m_moveEndY = 0,
        this.m_moveTime = 0,
        this.m_moveCompleteHandler = null,
        this._titleVisible = !0,
        this.curClickUrl = "",
        this.directArr = [45, 135, -135, -45],
        this.layoutCount = null,
        this.checkShowCount = null,
        this._focusPlayer = null,
        this._otherPlayerVisible = !0,
        this._curMoveX = 0,
        this._curMoveY = 0,
        this._lastIsHide = !1,
        this.isFacusCameraPos = !0,
        this.isFollowPlayerControlRole = !0,
        this._m_focusPosX = Kn.Invalid_Pos,
        this._m_focusPosY = Kn.Invalid_Pos,
        this.smoothCxtX = {},
        this.smoothCxtY = {},
        this._curScale = 1,
        this._scaleIng = !1,
        this._origeScale = 1,
        this._scaleCompletedFun = null,
        this._targetScale = NaN,
        this._costTime = NaN,
        this._starTime = NaN,
        this.lastMoveSceneTime = NaN,
        this._visibleRange = null,
        this.isFocusPlayer = !0,
        this._showMap = !1,
        this._mapGridNodes = null,
        this._vmcMeditation = null,
        $n.call(this),
        this.scale(I.globalScale * I.gameSceneSc * I.globalViewScaleX, I.globalScale * I.gameSceneSc * I.globalViewScaleY),
        this.width = I.w * this.scaleX + 1,
        this.height = I.h * this.scaleY + 1,
        this.resetScaleArg(),
        this._bgView = new bn,
        this.addChild(this._bgView),
        this._shadowLayer = this.createLayer("shadowLayer"),
        this._bottomLayer = this.createLayer("bottomLayer"),
        this._projectiveLayer = this.createLayer("projectiveLayer"),
        this._gameLayer = this.createLayer("gameLayer"),
        this._topLayer = this.createLayer("topLayer"),
        this._nameBottomImgLayer = this.createLayer("nameBottomImgLayer"),
        this._nameLayer = this.createLayer("nameLayer"),
        this._nameTopImgLayer = this.createLayer("_nameTopImgLayer"),
        this._nameFxLayer1 = this.createLayer("_nameFxLayer1"),
        this._nameFxLayer2 = this.createLayer("_nameFxLayer2"),
        this._roletopLayer = this.createLayer("roletopLayer"),
        this._titleLayer = this.createLayer("titleLayer"),
        this._numberLayer = this.createLayer("numberLayer"),
        this._nearbyMsgLayer = this.createLayer("nearbyMsgLayer"),
        this._tempLayer = this.createLayer("tempLayer"),
        this._birdLayer = this.createLayer("_birdLayer"),
        this._sceneItems = [],
        this._roles = [],
        this.once("display", this, this.addedToStageHandler),
        x.stage.on("resizeComplete", this, this.resizeHandler)
    }
    var Qn;
    t(Zn, "app.fateGame.mission.AppFieldBox", Qn = n),
    (i = Zn.prototype).setObject = function(t) {
        if (t)
            if (x.__typeof(t, "app.fateGame.mission.AppIFieldBoxCustom")) {
                var e = t;
                this.m_fieldInfos = e.getFields()
            } else
                for (var i in this.m_fieldInfos = [],
                t) {
                    var s = t[i];
                    "number" != typeof s && "string" != typeof s && !x.__typeof(s, "app.fateGame.mission.AppIFieldBoxFieldCustom") || this.m_fieldInfos.push(new He(i,i))
                }
        else
            this.m_fieldInfos = [];
        this.m_obj = t,
        this.renderHandler = b.create(this, this.onRenderField, null, !1),
        this.vScrollBarSkin = "",
        this.array = this.m_fieldInfos
    }
    ,
    i.onRenderField = function(t, e) {
        var i;
        !this.m_obj || !this.m_fieldInfos || e >= this.m_fieldInfos.length || (null != (e = this.m_fieldInfos[e]).onDraw ? e.onDraw.runWith([this.m_obj, e, t]) : (i = this.m_obj[e.fieldName],
        x.__typeof(i, "app.fateGame.mission.AppIFieldBoxFieldCustom") ? i.onDraw(this.m_obj, e, t, this) : this.drawField(this.m_obj, e, t)))
    }
    ,
    i.drawField = function(e, i, t) {
        var s = e[i.fieldName]
          , n = t.getChildAt(0)
          , o = n.getChildAt(1).getChildAt(0)
          , a = t.getChildAt(1)
          , t = t.getChildAt(2);
        n.text = i.showName,
        o.text = "" + s,
        o.editable = !i.readOnly,
        o.dataSource = [e, i],
        o.offAll("blur"),
        o.offAll("enter"),
        i.readOnly || (o.on("blur", this, this.onInputFieldFinish),
        o.on("enter", this, this.onInputFieldFinish)),
        i.btn1Name && i.onBtn1 ? (a.visible = !0,
        a.label = i.btn1Name,
        a.offAll("click"),
        a.on("click", this, function(t) {
            i.onBtn1.runWith(e)
        })) : a.visible = !1,
        i.btn2Name && i.onBtn2 ? (t.visible = !0,
        t.label = i.btn2Name,
        t.offAll("click"),
        t.on("click", this, function(t) {
            i.onBtn2.runWith(e)
        })) : t.visible = !1
    }
    ,
    i.onInputFieldFinish = function(t) {
        var e, i;
        t.dataSource && ("number" == typeof (e = (i = t.dataSource)[0])[(i = i[1]).fieldName] ? e[i.fieldName] = Number(t.text) : e[i.fieldName] = t.text,
        this.event("Event_Field_Change", [[e, i]]))
    }
    ;
    function Zn() {
        this.m_obj = null,
        this.m_fieldInfos = null,
        Qn.call(this)
    }
    t(eo, "app.fateGame.role.AppNpc", Jn = Nn),
    (s = eo.prototype).startFloat = function(t) {
        t ? (this.bodyView.y = this._oldY,
        m.to(this.bodyView, {
            y: this._oldY - eo.floatAdd
        }, eo.floatTime, Rt.linearInOut, b.create(this, this.completeFloat))) : this.bodyView && m.clearTween(this.bodyView)
    }
    ,
    s.completeFloat = function() {
        this.bodyView.y = this._oldY - eo.floatAdd,
        m.to(this.bodyView, {
            y: this._oldY
        }, eo.floatTime, Rt.linearInOut, b.create(this, this.startFloat, [!0]))
    }
    ,
    s.loadResComplete = function() {
        this.updateShow()
    }
    ,
    s.updateShow = function() {
        this.onLoadSelf(null)
    }
    ,
    s.onLoadSelf = function(t) {
        this.npcCfg && (Ji.ins.isInCity && (this.forceHigh = this.npcCfg.iconHigh - 10,
        this._topView.setName(this.npcCfg.desc, "#ffffff")),
        this.forceHigh = this.npcCfg.nameHigh,
        this.setName(this.npcCfg.name))
    }
    ,
    s.updateName = function() {
        this.updateShow()
    }
    ,
    s.isAlive = function() {
        return !0
    }
    ,
    s.recover = function(t) {
        void 0 === t && (t = !0),
        this._npcId = 0,
        this.off("complete", this, this.loadResComplete),
        M.ins.off("ROLE_MOVE_POINT", this, this.playerMoveHanlder),
        x.timer.clear(this, this.updateHandler),
        this.startFloat(!1),
        this._isRound = !1,
        this.addState = 0,
        this.npcCfg = null,
        Jn.prototype.recover.call(this, !1),
        t && dt.recover("app.fateGame.role.AppNpc", this)
    }
    ,
    s.playerMoveHanlder = function(t, e) {
        Math.abs(t - this.x) < 150 && Math.abs(e - this.y) < 150 ? 0 == this._isRound && (this._isRound = !0) : (this._isRound = !1,
        this.addState = 0)
    }
    ,
    s.updateHandler = function(t) {
        0 == this.addState ? (t.num++,
        8 <= t.num && (this.addState = 1)) : 1 == this.addState ? (t.num--,
        0 == t.num && (this.addState = 2)) : 2 == this.addState && (this.addState = 0,
        x.timer.clear(this, this.updateHandler))
    }
    ,
    s.updateModel = function() {
        this._info.showID = us.ins.getNpcRes(this.npcCfg)
    }
    ,
    e(0, s, "npcId", function() {
        return this._npcId
    }, function(t) {
        this._npcId = t,
        this.npcCfg = ri.ins.getNpcById(this._npcId);
        var t = new Ss
          , e = (t.personId = Gi.fromNumber(this._npcId),
        t.type = 3,
        this.roleScale = this.npcCfg.modelZoom ? this.npcCfg.modelZoom / 100 : 1,
        S.tile2CooXY([this.npcCfg.px, this.npcCfg.py]));
        this.x = e[0],
        this.y = e[1],
        this._oldY = 0,
        this.once("complete", this, this.loadResComplete),
        this.info = t,
        this.updateModel(),
        this.direct = S.mapDirect2RoleDir(this.npcCfg.direct),
        this.setActEx("act01"),
        M.ins.on("ROLE_MOVE_POINT", this, this.playerMoveHanlder),
        0 < this.npcCfg.isFloat ? (this.isShowRealShadow = !1,
        this.shadow.pivotY = -100,
        this.startFloat(!0)) : this.startFloat(!1)
    }),
    e(0, s, "visible", Jn.prototype._$get_visible, function(t) {
        x.superSet(Jn, this, "visible", t)
    }),
    e(0, s, "canClick", function() {
        return this.npcCfg && 0 == this.npcCfg.canClick
    }, Jn.prototype._$set_canClick),
    eo.floatAdd = 34,
    eo.floatTime = 2800;
    var Jn, to = eo;
    function eo() {
        this._npcId = 0,
        this.npcCfg = null,
        this._oldY = 0,
        this._isRound = !1,
        this.addState = 0,
        Jn.call(this)
    }
    t(so, "app.fateGame.role.AppPlayer", io = Nn),
    (P = so.prototype).loop = function() {
        app.fateGame.role.AppSimpleRole.prototype.loop.call(this)
    }
    ,
    P.pathByCoo = function(t, e, i, s, n, o, a, r, l) {
        return void 0 === i && (i = 0),
        void 0 === s && (s = 0),
        void 0 === n && (n = !1),
        void 0 === o && (o = !0),
        void 0 === a && (a = !1),
        void 0 === r && (r = !0),
        void 0 === l && (l = !0),
        app.fateGame.role.AppSimpleRole.prototype.pathByCoo.call(this, t, e, i, s, n, o, a, r, l)
    }
    ,
    P.revive = function() {
        io.prototype.revive.call(this),
        m.clearAll(this),
        Yt.removeTweens(this, !0),
        this.scale(I.roleScale, I.roleScale),
        this.alpha = 1,
        Ji.ins.isInCity
    }
    ,
    P.destroy = function(t) {
        void 0 === t && (t = !0),
        this.info && this.info.isPlayer() ? (this.parent && this.parent.removeChild(this),
        this.shadow && this.shadow.parent && this.shadow.parent.removeChild(this.shadow),
        this._topView.recover(),
        this.isFirst = !0,
        this.aiManager && this.aiManager.setAuto(!1)) : app.fateGame.role.AppSimpleRole.prototype.destroy.call(this, t)
    }
    ,
    P.recover = function(t) {
        void 0 === t && (t = !0),
        this.isFirst = !0,
        this._info,
        io.prototype.recover.call(this, !1),
        t && dt.recover("app.fateGame.role.AppPlayer", this)
    }
    ,
    P.updateShow = function() {}
    ,
    e(0, P, "info", function() {
        return this._info
    }, function(t) {
        this._info,
        x.superSet(io, this, "info", t),
        this._info,
        this._info && (this.preLevel = 1)
    });
    var io, At = so;
    function so() {
        this.isFirst = !0,
        this.preLevel = 0,
        io.call(this)
    }
    t(ao, "app.AppItemTipsPanel", no = Gn),
    (v = ao.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_login.json"), "img/x5_backReser.json"]
    }
    ,
    v.getUIView = function() {
        return ao.uiView
    }
    ,
    v.needAutoResize = function() {
        return !0
    }
    ,
    v.onFirstOpen = function() {
        var t = this;
        t.btn_close.on("click", t, function() {
            t.close()
        }),
        t.imgMask.on("click", t, function() {
            t.close()
        })
    }
    ,
    v.onOpen = function() {}
    ,
    v.updateView = function() {
        this.removeElement();
        var t = On.itemIdData[this.itemId]
          , e = (this.item || (this.item = new On,
        this.item.isClick = !1,
        this.itemBox.addChild(this.item)),
        this.tipbg.skin = "x5_backReser/bg_tips_item_" + t.quality + ".png",
        this.item.updateItem(this.itemId),
        this.html = this.createText(this.topBox, 0, 0, ao.getTipsColorByQuality(t.quality), t.name),
        t.nameDown && this.createText(this.topBox, 0, 30, "#FFF", t.nameDown, 18, "left"),
        t.itemDescribe.split("LOOK_ITEM_TIPS"));
        if (this.createHtml(e[0]),
        t.lookTips) {
            for (var i = 0; i < t.lookTips.length; i++) {
                var s = t.lookTips[i].value.split(":");
                this.createItem(this.htmlBox, 100 * i + this.tempX, this.tempY, parseInt(s[0]), parseInt(s[1]), !0)
            }
            this.tempY += 150,
            this.createLine(this.htmlBox, this.tempX, this.tempY)
        }
        e[1] && this.createHtml(e[1]);
        e = Math.min(750, this.tempY + 150);
        this.bg.size(389, e),
        this.tBox.height = e,
        this.htmlPanel.realContentHeigth = this.tempY,
        this.htmlPanel.size(355, e - 140),
        this.htmlBox.size(355, this.tempY),
        this.htmlPanel.scrollTo(0, 0)
    }
    ,
    v.createHtml = function(t) {
        for (var e = t.split("<line>"), i = e.length, s = 0; s < i; s++)
            this.html = this.createText(this.htmlBox, this.tempX, this.tempY, "#FFF", e[s], 20, "left", 350),
            this.tempY += this.html.contextHeight + 8,
            s != i - 1 && this.createLine(this.htmlBox, this.tempX, this.tempY - 20)
    }
    ,
    v.onClose = function() {
        this.removeElement()
    }
    ,
    v.removeElement = function() {
        for (; this.arrHtmlTexts.length; )
            this.arrHtmlTexts.pop().destroy();
        this.arrHtmlTexts.length = 0,
        this.tempY = 0,
        this.htmlBox.removeChildren()
    }
    ,
    v.createText = function(t, e, i, s, n, o, a, r) {
        var l;
        return void 0 === o && (o = 24),
        void 0 === a && (a = "left"),
        void 0 === r && (r = 312),
        (l = new Y).x = e,
        l.y = i,
        l.style.fontSize = o,
        l.style.color = s,
        l.style.strokeColor = "#000000",
        l.style.align = "left",
        l.mouseEnabled = !1,
        l.style.width = r,
        l.style.wordWrap = !0,
        l.style.align = a,
        l.innerHTML = n,
        t.addChild(l),
        this.arrHtmlTexts.push(l),
        l
    }
    ,
    v.createItem = function(t, e, i, s, n, o) {
        var a;
        return void 0 === o && (o = !1),
        (a = new On).x = e,
        a.y = i,
        a.num = n,
        a.isClick = o,
        a.isShowName = !0,
        a.updateItem(s),
        t.addChild(a),
        this.arrHtmlTexts.push(a),
        a
    }
    ,
    v.createLine = function(t, e, i) {
        var s = new J;
        return s.skin = "x5_backReser/br_line_5.png",
        s.sizeGrid = "0,50,0,50",
        s.width = 440,
        s.height = 1,
        s.scaleX = .8,
        s.x = e,
        s.y = i + 7,
        t.addChild(s),
        s
    }
    ,
    ao.getTipsColorByQuality = function(t) {
        switch (t) {
        case 1:
            return "#ffffff";
        case 2:
            return "#ffeea0";
        case 3:
            return "#bf74ff";
        case 4:
            return "#000000";
        case 5:
            return "#ff6859";
        case 6:
            return "#fe69f2"
        }
        return "#ffffff"
    }
    ,
    ao.uiView = {
        type: "BaseBox",
        props: {
            width: 768,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                y: -100,
                x: -100,
                width: 968,
                var: "imgMask",
                skin: "x5_login/bg_chat.png",
                sizeGrid: "2,2,2,2",
                height: 1224
            }
        }, {
            type: "Box",
            props: {
                y: 381,
                x: 189,
                width: 389,
                var: "tBox",
                centerY: 0
            },
            child: [{
                type: "Image",
                props: {
                    y: -39,
                    x: 5,
                    width: 389,
                    var: "bg",
                    skin: "x5_backReser/br_bg_tips_1.png",
                    sizeGrid: "23,32,23,28",
                    height: 302,
                    alpha: 1
                }
            }, {
                type: "Image",
                props: {
                    y: -34,
                    x: 10,
                    width: 375,
                    var: "tipbg",
                    skin: "x5_backReser/bg_tips_item_6.png",
                    sizeGrid: "2,2,2,2",
                    height: 110
                }
            }, {
                type: "Button",
                props: {
                    y: -48,
                    x: 375,
                    var: "btn_close",
                    stateNum: 1,
                    skin: "x5_login/btn_close.png"
                },
                child: [{
                    type: "Rect",
                    props: {
                        y: -21,
                        x: -16,
                        width: 68,
                        renderType: "hit",
                        height: 68,
                        fillColor: "#ff0000"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: -16,
                    x: 132,
                    width: 227,
                    var: "topBox",
                    height: 78
                }
            }, {
                type: "Panel",
                props: {
                    y: 87,
                    x: 17,
                    width: 363,
                    var: "htmlPanel",
                    height: 159
                },
                child: [{
                    type: "Box",
                    props: {
                        var: "htmlBox"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: -22,
                    x: 25,
                    var: "itemBox"
                }
            }]
        }]
    };
    var no, oo = ao;
    function ao() {
        this.itemId = 0,
        this.tempX = 10,
        this.tempY = 0,
        this.html = null,
        this.attrObject = {},
        this.arrChildren = [],
        this.arrHtmlTexts = [],
        this.arrImgs = [],
        this.item = null,
        this.imgMask = null,
        this.tBox = null,
        this.bg = null,
        this.tipbg = null,
        this.btn_close = null,
        this.topBox = null,
        this.htmlPanel = null,
        this.htmlBox = null,
        this.itemBox = null,
        no.call(this)
    }
    t(ho, "app.X5BackActPanel", ro = Gn),
    (N = ho.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_login.json")]
    }
    ,
    N.getUIView = function() {
        return ho.uiView
    }
    ,
    N.needAutoResize = function() {
        return !0
    }
    ,
    N.onFirstOpen = function() {
        var t = this;
        t.closeBtn.on("click", t, function() {
            t.close()
        }),
        t.imgMask.on("click", t, function() {
            t.close()
        }),
        t.helpBtn.on("click", t, function() {
            t.helpBox.visible = !0
        }),
        t.hCloseBtn.on("click", t, function() {
            t.helpBox.visible = !1
        }),
        t.hOkBtn.on("click", t, function() {
            t.helpBox.visible = !1
        }),
        t.hImgMask.on("click", t, function() {
            t.helpBox.visible = !1
        })
    }
    ,
    N.onOpen = function() {
        this.txtPanel.mouseThrough = !0,
        this.txtPanel.vScrollBarSkin = "",
        this.hcontextLb.style.fontSize = 20,
        this.hcontextLb.color = "#2A3940",
        this.helpBox.visible = !1,
        this.hcontextLb.innerHTML = d.getI18(40036),
        this.txtPanel.realContentHeigth = this.hcontextLb.contextHeight,
        this.txtPanel.scrollTo(0, 0)
    }
    ,
    N.onClose = function() {}
    ,
    ho.uiView = {
        type: "BaseBox",
        props: {
            width: 768,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                y: -100,
                x: -100,
                width: 968,
                var: "imgMask",
                skin: "x5_login/bg_chat.png",
                sizeGrid: "2,2,2,2",
                height: 1224
            }
        }, {
            type: "Image",
            props: {
                y: 132,
                x: 0,
                var: "bg1",
                skin: "img/back9_0010.png"
            }
        }, {
            type: "Box",
            props: {
                y: 140,
                x: 105,
                mouseEnabled: !0
            },
            child: [{
                type: "Button",
                props: {
                    y: 87,
                    x: 529,
                    var: "closeBtn",
                    stateNum: 1,
                    skin: "x5_login/btn_close.png"
                }
            }, {
                type: "Box",
                props: {
                    y: 565,
                    x: 3,
                    width: 483,
                    var: "helpBtn",
                    height: 37
                },
                child: [{
                    type: "Button",
                    props: {
                        stateNum: 1,
                        skin: "x5_login/btn_tipicon.png"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 11,
                        x: 40,
                        wordWrap: !0,
                        width: 474,
                        text: "直接登录回归服，即可领取海量福利",
                        leading: 10,
                        height: 21,
                        fontSize: 18,
                        font: "黑体",
                        color: "#f6f6ef",
                        align: "left"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 201,
                    x: 160
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 6,
                        x: 13,
                        skin: "img/back9_0011.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 126,
                        x: 13,
                        skin: "img/back9_0011.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 245,
                        x: 13,
                        skin: "img/back9_0011.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 5,
                        x: 7,
                        skin: "img/backActivity_0039.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 118,
                        x: 3,
                        skin: "img/back9_0006.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 237,
                        x: 6,
                        skin: "img/backActivity_0041.png"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 24,
                        x: 141,
                        wordWrap: !0,
                        width: 219,
                        text: "福利一：绑钻凶兽随心兑",
                        leading: 10,
                        height: 21,
                        fontSize: 18,
                        font: "黑体",
                        color: "#ffeea0",
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 143,
                        x: 141,
                        wordWrap: !0,
                        width: 213,
                        text: "福利二：学院分红送绑钻",
                        leading: 10,
                        height: 21,
                        fontSize: 18,
                        font: "黑体",
                        color: "#ffeea0",
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 262,
                        x: 141,
                        wordWrap: !0,
                        width: 203,
                        text: "福利三：专属玩法送好礼",
                        leading: 10,
                        height: 21,
                        fontSize: 18,
                        font: "黑体",
                        color: "#ffeea0",
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 51,
                        x: 128,
                        wordWrap: !0,
                        width: 236,
                        text: "绑钻商城上架新凶兽魂环，登录回归服领海量绑钻随心兑换",
                        leading: 10,
                        height: 51,
                        fontSize: 16,
                        font: "黑体",
                        color: "#ffffff",
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 170,
                        x: 130,
                        wordWrap: !0,
                        width: 198,
                        text: "回归服绑钻福利加码，开服七天活跃即可瓜分海量绑钻",
                        leading: 10,
                        height: 55,
                        fontSize: 16,
                        font: "黑体",
                        color: "#ffffff",
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 291,
                        x: 130,
                        wordWrap: !0,
                        width: 147,
                        text: "神秘专属玩法来袭 红包放送等你来领",
                        leading: 10,
                        height: 47,
                        fontSize: 16,
                        font: "黑体",
                        color: "#ffffff",
                        align: "left"
                    }
                }]
            }]
        }, {
            type: "Image",
            props: {
                y: 168,
                x: 260,
                skin: "img/back9_0013.png"
            }
        }, {
            type: "Image",
            props: {
                y: 226,
                x: 233,
                skin: "img/back9_0012.png",
                mouseThrough: !0,
                mouseEnabled: !1
            }
        }, {
            type: "Box",
            props: {
                y: 260,
                x: 143,
                width: 482,
                var: "helpBox",
                height: 388
            },
            child: [{
                type: "Image",
                props: {
                    y: -418,
                    x: -243,
                    width: 968,
                    var: "hImgMask",
                    skin: "x5_login/bg_chat.png",
                    sizeGrid: "2,2,2,2",
                    height: 1224
                }
            }, {
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 482,
                    skin: "x5_login/bg_23.png",
                    sizeGrid: "12,10,10,11",
                    mouseEnabled: !0,
                    height: 388
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 97,
                        skin: "x5_login/bg_title.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 45,
                        x: 12,
                        width: 458,
                        skin: "x5_login/bg_21.png",
                        sizeGrid: "5,5,5,5",
                        height: 236
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 4,
                        x: 155,
                        width: 178,
                        text: "规则说明",
                        height: 32,
                        fontSize: 24,
                        font: "黑体",
                        color: "#2A3940",
                        align: "center"
                    }
                }, {
                    type: "Button",
                    props: {
                        y: 5,
                        x: 444,
                        var: "hCloseBtn",
                        stateNum: 1,
                        skin: "x5_login/btn_close.png"
                    }
                }, {
                    type: "Button",
                    props: {
                        y: 298,
                        x: 168,
                        width: 145,
                        var: "hOkBtn",
                        stateNum: 2,
                        skin: "x5_login/gamebutton_blue.png",
                        height: 60
                    },
                    child: [{
                        type: "Label",
                        props: {
                            y: 17,
                            x: 5,
                            width: 131,
                            text: "确 认",
                            strokeColor: "#2A3940",
                            height: 27,
                            fontSize: 22,
                            font: "黑体",
                            color: "#48565d",
                            bold: !0,
                            align: "center"
                        }
                    }]
                }, {
                    type: "Panel",
                    props: {
                        y: 60,
                        x: 25,
                        width: 433,
                        var: "txtPanel",
                        height: 211
                    },
                    child: [{
                        type: "HTMLDivElement",
                        props: {
                            y: 0,
                            x: 0,
                            width: 433,
                            var: "hcontextLb"
                        }
                    }]
                }]
            }]
        }]
    };
    var ro, lo = ho;
    function ho() {
        this.imgMask = null,
        this.bg1 = null,
        this.closeBtn = null,
        this.helpBtn = null,
        this.helpBox = null,
        this.hImgMask = null,
        this.hCloseBtn = null,
        this.hOkBtn = null,
        this.txtPanel = null,
        this.hcontextLb = null,
        ro.call(this)
    }
    t(uo, "app.X5BackReservationPanel", co = Gn),
    (T = uo.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_login.json"), "img/x5_backReser.json"]
    }
    ,
    T.getUIView = function() {
        return uo.uiView
    }
    ,
    T.needAutoResize = function() {
        return !0
    }
    ,
    T.onFirstOpen = function() {
        var t = this;
        t.closeBtn.on("click", t, function() {
            t.close()
        }),
        t.imgMask.on("click", t, function() {
            t.close()
        })
    }
    ,
    T.onOpen = function() {
        this.reservaBtn.on("click", this, this.onResetvaBtnHandler),
        this.updateView()
    }
    ,
    T.onCheckBtn = function() {
        a.setItem("brtips9", this.noTips.selected ? "true" : "false")
    }
    ,
    T.renderRewardList = function(t, e) {
        var i = t.getChildByName("proImg")
          , s = t.getChildByName("item")
          , n = t.getChildByName("effBox")
          , o = s.getChildByName("iconImg")
          , a = s.getChildByName("bgImg")
          , t = t.getChildByName("numLb")
          , r = this.rewardData[e]
          , l = On.itemIdData[r[1]];
        t.text = r[0] + "预约",
        a.skin = "x5_backReser/frameBig_item_" + l.quality + ".png",
        o.skin = "img/icon/" + l.icon_bag + ".png",
        i.width = 70 * Math.min(this.reserNums[e] / this.reserNums2[e], 1),
        s.off("click", this, this.onItemTips),
        s.on("click", this, this.onItemTips, [r[1]]),
        n.removeChildren(),
        70 == i.width && ((t = dt.getItemByClass("app.fateGame.f1.vmc.AppVMCView", qs)).pos(36, 36),
        t.updatePose("img/other/hgf_reward.json", 90, null, !0),
        n.addChild(t))
    }
    ,
    T.onItemTips = function(t) {
        p.ins.showItemTips(t)
    }
    ,
    T.checkReserNum = function() {
        this.reserNums = [];
        for (var t = this.reserNum, e = 0; e < this.reserNums2.length; e++)
            0 <= t - this.reserNums2[e] ? (t -= this.reserNums2[e],
            this.reserNums[e] = this.reserNums2[e]) : (this.reserNums[e] = t,
            t = 0)
    }
    ,
    T.onResetvaBtnHandler = function() {
        this.send(),
        this.isReserSucc = !0,
        this.reserNum++,
        this.updateView(),
        a.setItem("isbrtips9", this.reserNum + "")
    }
    ,
    T.send = function() {
        var t, e = "http://xxh5outer.996a.com/api/subscribe".replace(/\$1/g, c.uid), i = w.now();
        t = w.antiMiniGame ? require("md5.js").md5(c.uid + i.toString() + "adqFD1wmf7wFbkTu") : w.window.hex_md5(c.uid + i.toString() + "adqFD1wmf7wFbkTu"),
        c.load(e, b.create(this, function(t) {
            1 == JSON.parse(t).state && console.error("预约成功")
        }), 1, {
            uid: c.uid,
            time: i,
            sign: t
        }, !1)
    }
    ,
    T.updateView = function() {
        On.itemIdData && this.numLb && (this.checkReserNum(),
        this.numLb.text = 1e5 <= this.reserNum ? "100000+" : this.reserNum + "",
        this.reservaBtn.visible = !this.isReserSucc,
        this.reservaSucc.visible = this.isReserSucc,
        this.rewardList.renderHandler = b.create(this, this.renderRewardList, null, !1),
        this.rewardList.array = this.rewardData,
        this.noTips.on("click", this, this.onCheckBtn))
    }
    ,
    T.onClose = function() {
        this.rewardList.renderHandler && this.rewardList.renderHandler.recover(),
        this.rewardList.renderHandler = null,
        this.reservaBtn.off("click", this, this.onResetvaBtnHandler),
        this.noTips.off("click", this, this.onCheckBtn)
    }
    ,
    uo.uiView = {
        type: "BaseBox",
        props: {
            width: 768,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                y: -100,
                x: -100,
                width: 968,
                var: "imgMask",
                skin: "x5_login/bg_chat.png",
                sizeGrid: "2,2,2,2",
                height: 1224
            }
        }, {
            type: "Image",
            props: {
                y: 84,
                x: 104,
                var: "bg1",
                skin: "img/back9_0001.png",
                mouseEnabled: !0
            }
        }, {
            type: "Box",
            props: {
                y: 121,
                x: 125
            },
            child: [{
                type: "CheckBox",
                props: {
                    y: 676,
                    x: -6,
                    var: "noTips",
                    stateNum: 3,
                    skin: "x5_backReser/checkbox_3.png",
                    labelSize: 18,
                    labelPadding: "5,0,0,0",
                    labelFont: "黑体",
                    labelColors: "#f6f6ef,#f6f6ef,#f6f6ef,#f6f6ef",
                    label: "不再弹出"
                }
            }, {
                type: "Image",
                props: {
                    y: 172,
                    x: 161,
                    skin: "img/backActivity_0039.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 280,
                    x: 156,
                    skin: "img/back9_0006.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 393,
                    x: 157,
                    skin: "img/backActivity_0041.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 532,
                    x: 90,
                    width: 400,
                    skin: "x5_backReser/barfrane_dartask.png",
                    sizeGrid: "12,24,13,23",
                    height: 27
                }
            }, {
                type: "Image",
                props: {
                    y: 539,
                    x: 107,
                    width: 350,
                    skin: "x5_backReser/progress_7_4.png",
                    sizeGrid: "5,3,4,4",
                    height: 12
                }
            }, {
                type: "Image",
                props: {
                    y: 598,
                    x: -6,
                    width: 528,
                    skin: "img/back9_0004.png",
                    height: 37
                }
            }, {
                type: "List",
                props: {
                    y: 516,
                    x: 110,
                    width: 405,
                    var: "rewardList",
                    repeatY: 1,
                    height: 80
                },
                child: [{
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        width: 129,
                        renderType: "render",
                        height: 76
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 23,
                            x: 0,
                            width: 0,
                            skin: "x5_backReser/bar_dayktask.png",
                            sizeGrid: "2,3,3,1",
                            name: "proImg",
                            height: 12
                        }
                    }, {
                        type: "Box",
                        props: {
                            y: -1,
                            x: 70,
                            width: 72,
                            scaleY: .8,
                            scaleX: .8,
                            name: "item",
                            height: 72
                        },
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 72,
                                skin: "res/x5_unpack/frameBig_item_5.png",
                                name: "bgImg",
                                height: 72
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 36,
                                x: 36,
                                width: 64,
                                name: "iconImg",
                                height: 64,
                                anchorY: .5,
                                anchorX: .5
                            }
                        }]
                    }, {
                        type: "Box",
                        props: {
                            y: 27,
                            x: 99,
                            width: 72,
                            name: "effBox",
                            height: 72,
                            anchorY: .5,
                            anchorX: .5
                        }
                    }, {
                        type: "Label",
                        props: {
                            y: 57,
                            x: 43,
                            wordWrap: !0,
                            width: 107,
                            text: "1000预约",
                            name: "numLb",
                            leading: 10,
                            height: 21,
                            fontSize: 16,
                            font: "黑体",
                            color: "#ffffff",
                            align: "center"
                        }
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    y: 598,
                    x: 19,
                    width: 483,
                    var: "helpBtn",
                    height: 37
                },
                child: [{
                    type: "Button",
                    props: {
                        y: 4,
                        x: -3,
                        stateNum: 1,
                        skin: "x5_backReser/icon_tip_tan.png"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 10,
                        x: 30,
                        wordWrap: !0,
                        width: 474,
                        text: "回归服开服后，回归服玩家可通过邮件领取预约达标奖励",
                        leading: 10,
                        height: 21,
                        fontSize: 18,
                        font: "黑体",
                        color: "#f6f6ef",
                        align: "left"
                    }
                }]
            }, {
                type: "Image",
                props: {
                    y: 514,
                    x: 2,
                    skin: "img/back9_0005.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 132,
                    x: 176,
                    var: "titleImg2",
                    skin: "img/back9_0002.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 6,
                    x: 137,
                    var: "titleImg",
                    skin: "img/back9_0003.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 651,
                    x: 180,
                    var: "reservaSucc",
                    skin: "x5_backReser/backreser_0002.png"
                }
            }, {
                type: "Button",
                props: {
                    y: 645,
                    x: 182,
                    width: 147,
                    var: "reservaBtn",
                    stateNum: 1,
                    skin: "x5_login/denglu_btn_enter2.png",
                    labelSize: 23,
                    labelFont: "黑体",
                    label: "我要预约",
                    height: 56
                }
            }, {
                type: "Button",
                props: {
                    y: 15,
                    x: 497,
                    var: "closeBtn",
                    stateNum: 1,
                    skin: "x5_login/btn_close.png"
                }
            }, {
                type: "Label",
                props: {
                    y: 192,
                    x: 292,
                    wordWrap: !0,
                    width: 219,
                    text: "福利一：绑钻凶兽随心兑",
                    leading: 10,
                    height: 21,
                    fontSize: 18,
                    font: "黑体",
                    color: "#ffeea0",
                    align: "left"
                }
            }, {
                type: "Label",
                props: {
                    y: 302,
                    x: 294,
                    wordWrap: !0,
                    width: 213,
                    text: "福利二：学院分红送绑钻",
                    leading: 10,
                    height: 21,
                    fontSize: 18,
                    font: "黑体",
                    color: "#ffeea0",
                    align: "left"
                }
            }, {
                type: "Label",
                props: {
                    y: 413,
                    x: 295,
                    wordWrap: !0,
                    width: 203,
                    text: "福利三：专属玩法送好礼",
                    leading: 10,
                    height: 21,
                    fontSize: 18,
                    font: "黑体",
                    color: "#ffeea0",
                    align: "left"
                }
            }, {
                type: "Label",
                props: {
                    y: 222,
                    x: 289,
                    wordWrap: !0,
                    width: 225,
                    text: "绑钻商城上架新凶兽魂环，登录回归服领海量绑钻随心兑换",
                    leading: 10,
                    height: 51,
                    fontSize: 16,
                    font: "黑体",
                    color: "#ffffff",
                    align: "left"
                }
            }, {
                type: "Label",
                props: {
                    y: 332,
                    x: 289,
                    wordWrap: !0,
                    width: 198,
                    text: "回归服绑钻福利加码，开服七天活跃即可瓜分海量绑钻",
                    leading: 10,
                    height: 55,
                    fontSize: 16,
                    font: "黑体",
                    color: "#ffffff",
                    align: "left"
                }
            }, {
                type: "Label",
                props: {
                    y: 447,
                    x: 290,
                    wordWrap: !0,
                    width: 225,
                    text: "神秘专属玩法来袭 红包放送等你来领",
                    leading: 10,
                    height: 47,
                    fontSize: 16,
                    font: "黑体",
                    color: "#ffffff",
                    align: "left"
                }
            }, {
                type: "Label",
                props: {
                    y: 549,
                    x: 3,
                    wordWrap: !0,
                    width: 105,
                    var: "numLb",
                    text: 99999999,
                    leading: 10,
                    height: 26,
                    fontSize: 22,
                    font: "黑体",
                    color: "#ffeea0",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 525,
                    x: 3,
                    wordWrap: !0,
                    width: 107,
                    text: "预约人数",
                    leading: 10,
                    height: 21,
                    fontSize: 18,
                    font: "黑体",
                    color: "#ffffff",
                    align: "center"
                }
            }]
        }]
    },
    uo._httpRequest = null;
    var co, po = uo;
    function uo() {
        this.isReserSucc = !1,
        this.reserNum = 0,
        this.reserNums = [],
        this.reserNums2 = [1e4, 3e4, 6e4],
        this.rewardData = [[1e4, 551], [4e4, 111106], [1e5, 200201]],
        this.imgMask = null,
        this.bg1 = null,
        this.noTips = null,
        this.rewardList = null,
        this.helpBtn = null,
        this.titleImg2 = null,
        this.titleImg = null,
        this.reservaSucc = null,
        this.reservaBtn = null,
        this.closeBtn = null,
        this.numLb = null,
        this.errorCount = 0,
        co.call(this);
        var e = this
          , t = d.getImgPath("img/backItemCfg.json");
        w.antiMiniGame && (t = H.miniLoginPath ? H.miniLoginPath + t : H.formatURL(t)),
        uo._httpRequest || (uo._httpRequest = new G),
        uo._httpRequest.on("complete", this, function(t) {
            t = JSON.parse(t);
            On.itemIdData = t,
            e.updateView()
        }),
        uo._httpRequest.on("error", this, function() {
            e.errorCount++,
            3 < e.errorCount ? (console.error("无法下载backItemCfg.json"),
            e.close()) : uo._httpRequest.send(t)
        }),
        uo._httpRequest.send(t)
    }
    t(_o, "app.X5LoginCreateRole", go = Gn),
    (n = _o.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_createrole.json")]
    }
    ,
    n.getUIView = function() {
        return _o.uiView
    }
    ,
    n.onInit = function() {}
    ,
    n.onFirstOpen = function() {}
    ,
    n.onOpen = function() {
        var t = this
          , e = (this.width = 768,
        this.inputName.mouseEnabled = !p.ins.isTime("2025/9/2 18:00:00", "2025/9/4 18:00:00"),
        this.btnEnter.on("click", this, this.clickEnterGameBtnHandler),
        this.btnSex1.on("click", this, this.onSelectSex1),
        this.btnSex2.on("click", this, this.onSelectSex2),
        this.btnRandomName.on("click", this, function() {
            t.inputName.text = g.getRandomName(1 == t.selectSex)
        }),
        this.btnLeft.on("click", this, this.clickLeft),
        this.btnRight.on("click", this, this.clickRight),
        this.bgMask.on("mousedown", this, this.onScrollDown),
        this.txtInfo.style.fontSize = 18,
        this.txtInfo.style.fontFamily = d.getI18(10001),
        this.txtInfo.style.color = "#929aa1",
        this.txtInfo.style.align = "center",
        this.txtInfo.style.leading = 6,
        this.txtInfo.style.wordWrap = !0,
        this.errorClue.style.wordWrap = !0,
        this.errorClue.style.fontSize = 22,
        this.errorClue.style.fontFamily = d.getI18(10001),
        this.errorClue.style.align = "center",
        this.errorClue.style.color = "#FF0000",
        this.errorClue.style.strokeColor = "#1E150A",
        Math.random());
        this.selectSex = .5 < e ? 1 : 2,
        this.refresh(!1),
        this.setBgSize()
    }
    ,
    n.onClose = function() {
        this.soundUrl && this.soundUrl == Q._tMusic && Q.stopMusic(),
        this.stopVoice();
        for (var t = 1; t <= _o.SEX_NUM; ++t) {
            for (var e = _o.rolesCon[t], i = e.numChildren - 1; 0 <= i; --i) {
                var s = e.getChildAt(i);
                0 != s.numChildren && x.__typeof(s.getChildAt(0), Ct) && ((s = s.getChildAt(0)).templet.destroy(),
                s.stop(),
                s.removeSelf(),
                s.destroy())
            }
            e.destroy()
        }
        _o.rolesCon = null,
        p.ins.m_isCreateRolePanelOpen = !1,
        this.m_onClose()
    }
    ,
    n.clickLeft = function() {
        this.selectSex <= 1 ? this.selectSex = _o.SEX_NUM : this.selectSex--,
        this.refresh(!0, !0)
    }
    ,
    n.clickRight = function() {
        this.selectSex >= _o.SEX_NUM ? this.selectSex = 1 : this.selectSex++,
        this.refresh(!0)
    }
    ,
    n.onSelectSex1 = function(t) {
        1 != this.selectSex && (this.selectSex = 1,
        this.refresh(!0))
    }
    ,
    n.onSelectSex2 = function(t) {
        2 != this.selectSex && (this.selectSex = 2,
        this.refresh(!0))
    }
    ,
    n.getSound = function(t) {
        t = 1 == t ? "img/createMan" : "img/createWoman";
        return t += r.isConchApp ? ".ogg" : ".mp3",
        t = d.getImgPath(t)
    }
    ,
    n.stopVoice = function() {
        this.voiceChannel && (this.voiceChannel.stop(),
        this.voiceChannel = null)
    }
    ,
    n.refresh = function(t, e) {
        if (void 0 === e && (e = !1),
        this.inputName) {
            var i, s;
            this.stopVoice(),
            this.voiceChannel = Q.playSound(this.getSound(this.selectSex), 1),
            this.inputName.text = g.getRandomName(1 == this.selectSex),
            this.imgTxt.skin = "x5_createrole/createrole_img_txt_" + this.selectSex + ".png",
            this.txtInfo.innerHTML = _o.infoArr[1 == this.selectSex ? 0 : 3],
            this.jobBg || (this.jobBg = new J,
            this.addChildAt(this.jobBg, 1)),
            this.jobBg.skin = d.getImgPath("img/createrole_bg_" + this.selectSex + ".jpg"),
            Yt.removeTweens(this.jobBg),
            t && (i = Yt.get(this.jobBg),
            this.jobBg.alpha = 0,
            i.to({
                alpha: 1,
                duration: 500,
                ease: Rt.sineOut
            }));
            for (var n = 1; n <= _o.SEX_NUM; ++n) {
                this["btnSex" + n].skin = "x5_createrole/createrole_btn_" + n + "_" + (n == this.selectSex ? 2 : 1) + ".png",
                this["btnSex" + n].x = -this["btnSex" + n].width / 2,
                this["btnSex" + n].y = -this["btnSex" + n].height / 2,
                _o.rolesCon || console.error(d.getI18(10084));
                var o = _o.rolesCon[n];
                if (n == this.selectSex) {
                    o.y = 490,
                    o.scale(1.49, 1.49),
                    this.centerBox.addChild(o);
                    for (var a = 0; a < o.numChildren; ++a)
                        (r = o.getChildAt(a).getChildAt(0)).play(0, !0),
                        t && (Yt.removeTweens(r),
                        s = Yt.get(r),
                        r.alpha = 0,
                        r.x = e ? 100 : -100,
                        s.to({
                            alpha: 1,
                            x: 0,
                            duration: 500,
                            ease: Rt.sineOut
                        }))
                } else {
                    for (var r, a = 0; a < o.numChildren; ++a)
                        (r = o.getChildAt(a).getChildAt(0)).stop();
                    o.removeSelf()
                }
            }
        }
    }
    ,
    n.onScrollDown = function() {
        this.startX = x.stage.mouseX,
        x.stage.once("mouseup", this, this.onScrollUp)
    }
    ,
    n.onScrollUp = function() {
        100 <= this.startX - x.stage.mouseX ? this.clickLeft() : this.startX - x.stage.mouseX <= -100 && this.clickRight()
    }
    ,
    n.showTip = function(t) {
        this.errorClue.visible = !0,
        this.errorClue.innerHTML = t,
        m.to(this.errorClue, {
            alpha: 1
        }, 2e3, null, b.create(this, this.hideTip))
    }
    ,
    n.hideTip = function() {
        this.errorClue.visible = !1
    }
    ,
    n.clickEnterGameBtnHandler = function(t) {
        var e, o, a = this;
        "" != this.inputName.text && (5 < this.inputName.text.length ? this.showTip(d.getI18(10085)) : g.isDebugMode ? (c.sex = 1 == this.selectSex ? 1 : 2,
        c.roleName = this.inputName.text,
        this.close()) : (e = this.inputName.text,
        w.onMiniGame && (e = encodeURI(this.inputName.text)),
        w.onMiniGame && ("484" == g.PID ? c.send("40091") : "442" == g.PID ? c.send("40092") : c.send("4009")),
        o = c.roleRepeatUrl.replace(/\$1/, e).replace(/\$2/, c.selectedServer.serverId),
        o += "&v=" + (new Date).getTime(),
        c.load(o, b.create(this, function(t, e, i) {
            if (i && this.visible && !this.destroyed)
                if (w.window.loginDataFromJG.push(o + "\n" + i),
                1 != parseInt(i)) {
                    for (var s = [], n = 0; n < 13; ++n)
                        s.push(null);
                    s[0] = d.getI18(10086),
                    s[4] = d.getI18(10087),
                    s[5] = d.getI18(10085),
                    s[6] = d.getI18(10088),
                    s[12] = d.getI18(10089);
                    i = parseInt(i);
                    a.showTip(s[i] || d.getI18(10091))
                } else
                    c.sex = 1 == e ? 1 : 2,
                    c.roleName = t,
                    w.onMiniGame && ("484" == g.PID ? c.send("40101") : "442" == g.PID ? c.send("40102") : c.send("4010")),
                    this.close()
        }, [this.inputName.text, this.selectSex]))))
    }
    ,
    n.onResize = function(t, e, i, s) {
        this.jobBg && (this.bgMask.x = t,
        this.bgMask.y = i,
        this.bgMask.width = e - t,
        this.bgMask.height = s - i,
        this.setBgSize(),
        this.bottomBox.x = (t + e) / 2,
        this.bottomBox.y = s - 86,
        this.leftTopBox.x = t,
        this.leftTopBox.y = i - 10,
        this.rightTopBox.x = e,
        this.rightTopBox.y = i - 10,
        this.jobBg.height = 1400,
        this.jobBg.width = 768,
        this.jobBg.centerX = 0,
        this.jobBg.centerY = 0,
        this.centerBox.x = (t + e) / 2,
        this.centerBox.y = (i + s) / 2 - 70,
        this.errorClue.x = (t + e - this.errorClue.width) / 2)
    }
    ,
    n.setBgSize = function() {
        this.jobBg && (g.isHuaweiLargeCam ? (this.jobBg.scaleX = 1.26,
        this.jobBg.scaleY = 1.26,
        this.jobBg.x = this.jobBg.x + (this.jobBg.width - this.jobBg.width * this.jobBg.scaleX) / 2,
        this.jobBg.y = this.jobBg.y + (this.jobBg.height - this.jobBg.height * this.jobBg.scaleY) / 2) : (this.jobBg.scaleX = 1,
        this.jobBg.scaleY = 1,
        this.jobBg.x = 0,
        this.jobBg.y = 0))
    }
    ,
    _o.preLoad = function(t) {
        function i() {
            --s <= 0 && t.run()
        }
        function e(t, e) {
            this.destroyed || e.destroyed || ((t = t.buildArmature(0)).scale(1, 1),
            t.pos(0, 0),
            e.addChild(t),
            i())
        }
        for (var s = 1, n = 0, o = g.isWx() ? d.getImgPath("img/female_spinewx.sk") : d.getImgPath("img/female_spine.sk"), n = (_o.Res_Spines = [null, [d.getImgPath("img/male_spine.sk")], [o]],
        _o.rolesCon = [null],
        1); n <= _o.SEX_NUM; ++n) {
            _o.rolesCon.push(new z);
            for (var a = _o.rolesCon[n], r = _o.Res_Spines[n], l = 0; l < r.length; ++l) {
                var h = new z
                  , c = (a.addChild(h),
                ++s,
                new It);
                c.on("complete", null, e, [c, h]),
                c.loadAni(r[l])
            }
        }
        ++s,
        x.loader.load([d.getImgPath("img/x5_createrole.json")], b.create(null, i, null), null, "atlas"),
        ++s;
        var p = [];
        for (n = 1; n <= _o.SEX_NUM; ++n)
            p.push(d.getImgPath("img/createrole_bg_" + n + ".jpg"));
        x.loader.load(p, b.create(null, i, null), null, "image"),
        i()
    }
    ,
    _o.SEX_NUM = 2,
    _o.rolesCon = null,
    _o.uiView = {
        type: "BaseBox",
        props: {
            width: 576,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                y: 0,
                x: 0,
                width: 576,
                var: "bgMask",
                skin: "x5_createrole/createrole_black.png",
                sizeGrid: "2,2,2,2",
                height: 1024
            }
        }, {
            type: "Box",
            props: {
                y: 512,
                x: 288,
                width: 10,
                var: "centerBox",
                height: 10
            }
        }, {
            type: "Box",
            props: {
                y: 945,
                x: 288,
                width: 10,
                var: "bottomBox",
                height: 10
            },
            child: [{
                type: "Image",
                props: {
                    y: -142,
                    x: -115,
                    width: 228,
                    skin: "x5_createrole/img_nameBg.png",
                    sizeGrid: "12,5,12,12",
                    height: 42
                },
                child: [{
                    type: "TextInput",
                    props: {
                        y: 1,
                        x: 19,
                        width: 190,
                        var: "inputName",
                        text: d.getI18(10083),
                        stroke: 0,
                        promptColor: "#ffffff",
                        height: 40,
                        fontSize: 24,
                        font: d.getI18(10001),
                        color: "#ffffff",
                        align: "center"
                    }
                }, {
                    type: "Button",
                    props: {
                        y: -6,
                        x: 200,
                        var: "btnRandomName",
                        stateNum: 1,
                        skin: "x5_createrole/createrole_img_1.png"
                    }
                }]
            }, {
                type: "Image",
                props: {
                    y: -64,
                    x: -101,
                    width: 204,
                    var: "btnEnter",
                    skin: "x5_createrole/img_btn_enter.png"
                }
            }, {
                type: "Image",
                props: {
                    y: -44,
                    x: -61,
                    var: "imgLabel",
                    skin: "x5_createrole/createRole_label_1.png"
                }
            }, {
                type: "Image",
                props: {
                    y: -213,
                    x: -183,
                    width: 360,
                    skin: "x5_createrole/img_bgInfo.png",
                    sizeGrid: "5,31,4,30",
                    height: 51
                },
                child: [{
                    type: "HTMLDivElement",
                    props: {
                        y: 5,
                        x: -24,
                        width: 420,
                        var: "txtInfo",
                        height: 45
                    }
                }]
            }]
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 0,
                var: "leftTopBox"
            },
            child: [{
                type: "Image",
                props: {
                    y: 15,
                    x: 5,
                    var: "imgTxt",
                    skin: "x5_createrole/createrole_img_txt_1.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 603,
                    x: 80,
                    var: "btnLeft",
                    skin: "x5_createrole/createrole_btn_arrow.png",
                    scaleX: -1
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 576,
                var: "rightTopBox"
            },
            child: [{
                type: "Image",
                props: {
                    y: 603,
                    x: -81,
                    var: "btnRight",
                    skin: "x5_createrole/createrole_btn_arrow.png"
                }
            }, {
                type: "Box",
                props: {
                    y: 218,
                    x: -57,
                    width: 61,
                    height: 65
                },
                child: [{
                    type: "Image",
                    props: {
                        y: -41,
                        x: -41,
                        var: "btnSex1",
                        skin: "x5_createrole/createrole_btn_1_1.png"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 318,
                    x: -57
                },
                child: [{
                    type: "Image",
                    props: {
                        y: -41,
                        x: -41,
                        var: "btnSex2",
                        skin: "x5_createrole/createrole_btn_2_1.png",
                        pivotY: 0,
                        pivotX: 0
                    }
                }]
            }]
        }, {
            type: "HTMLDivElement",
            props: {
                y: 675,
                x: 131,
                width: 310,
                var: "errorClue",
                height: 45
            }
        }]
    },
    O(_o, ["Res_Spines", function() {
        return this.Res_Spines = [null, [d.getImgPath("img/male_spine.sk")], [d.getImgPath("img/female_spine.sk")]]
    }
    , "infoArr", function() {
        return this.infoArr = [d.getI18(10079), d.getI18(10080), d.getI18(10081), d.getI18(10082), d.getI18(10080), d.getI18(10081)]
    }
    ]);
    var go, mo = _o;
    function _o() {
        this.voiceChannel = null,
        this.bgMask = null,
        this.centerBox = null,
        this.bottomBox = null,
        this.inputName = null,
        this.btnRandomName = null,
        this.btnEnter = null,
        this.imgLabel = null,
        this.leftTopBox = null,
        this.imgTxt = null,
        this.btnLeft = null,
        this.rightTopBox = null,
        this.btnSex1 = null,
        this.btnSex2 = null,
        this.btnRight = null,
        this.errorClue = null,
        this.txtInfo = null,
        this.m_onClose = null,
        this.selectSex = 0,
        this.jobBg = null,
        this.soundUrl = null,
        this.startX = 0,
        go.call(this)
    }
    t(vo, "app.X5LoginInputName", fo = Gn),
    (i = vo.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_login.json")]
    }
    ,
    i.getUIView = function() {
        return vo.uiView
    }
    ,
    i.needAutoResize = function() {
        return !0
    }
    ,
    i.onFirstOpen = function() {
        var t = this
          , e = this;
        e.btnOk.on("click", e, function() {
            e.close(),
            t.onOk.runWith([t.username.text, t.password.text])
        })
    }
    ,
    i.onOpen = function() {
        this.username.text = this.strUsername,
        this.password.text = this.strPassword
    }
    ,
    i.onClose = function() {}
    ,
    vo.uiView = {
        type: "BaseBox",
        props: {
            y: 0,
            width: 768,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                y: 249,
                x: 133,
                width: 516,
                skin: "x5_login/bg_23.png",
                sizeGrid: "12,10,10,11",
                height: 388
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    skin: "x5_login/bg_title.png",
                    centerX: 0
                }
            }, {
                type: "Image",
                props: {
                    y: 45,
                    x: 11,
                    width: 494,
                    skin: "x5_login/bg_21.png",
                    sizeGrid: "5,5,5,5",
                    height: 235
                }
            }, {
                type: "Label",
                props: {
                    y: 6,
                    width: 400,
                    text: d.getI18(10074),
                    height: 27,
                    fontSize: 24,
                    font: d.getI18(10001),
                    color: "#2A3940",
                    centerX: 0,
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 98,
                    x: 82,
                    text: d.getI18(10075),
                    fontSize: 24,
                    font: d.getI18(10001),
                    color: "#010101"
                },
                child: [{
                    type: "Image",
                    props: {
                        y: -5,
                        x: 75,
                        width: 212,
                        visible: !0,
                        skin: "x5_login/bg_19.png",
                        sizeGrid: "8,8,8,8",
                        height: 36
                    },
                    child: [{
                        type: "TextInput",
                        props: {
                            y: -2,
                            x: -30,
                            width: 272,
                            var: "username",
                            text: d.getI18(10076),
                            maxChars: 12,
                            height: 40,
                            fontSize: 24,
                            font: d.getI18(10001),
                            color: "#F7F7F7",
                            align: "center"
                        }
                    }]
                }]
            }, {
                type: "Label",
                props: {
                    y: 175,
                    x: 82,
                    text: d.getI18(10077),
                    fontSize: 24,
                    font: d.getI18(10001),
                    color: "#010101"
                },
                child: [{
                    type: "Image",
                    props: {
                        y: -5,
                        x: 75,
                        width: 212,
                        visible: !0,
                        skin: "x5_login/bg_19.png",
                        sizeGrid: "8,8,8,8",
                        height: 36
                    },
                    child: [{
                        type: "TextInput",
                        props: {
                            y: -2,
                            x: -30,
                            width: 272,
                            var: "password",
                            text: d.getI18(10078),
                            maxChars: 12,
                            height: 40,
                            fontSize: 24,
                            font: d.getI18(10001),
                            color: "#F7F7F7",
                            align: "center"
                        }
                    }]
                }]
            }, {
                type: "Button",
                props: {
                    y: 298,
                    var: "btnOk",
                    stateNum: 2,
                    skin: "x5_login/gamebutton_blue.png",
                    labelSize: 22,
                    centerX: 0
                },
                child: [{
                    type: "Label",
                    props: {
                        y: 16,
                        x: 8,
                        width: 131,
                        text: d.getI18(10071),
                        strokeColor: "#2A3940",
                        height: 27,
                        fontSize: 24,
                        font: d.getI18(10001),
                        color: "#48565d",
                        bold: !0,
                        align: "center"
                    }
                }]
            }]
        }]
    };
    var fo, yo = vo;
    function vo() {
        this.strUsername = "",
        this.strPassword = "",
        this.username = null,
        this.password = null,
        this.btnOk = null,
        this.onOk = null,
        fo.call(this)
    }
    t(bo, "app.X5LoginLoadingPanel", xo = Gn),
    (s = bo.prototype).getAltas = function() {
        return []
    }
    ,
    s.getUIView = function() {
        return bo.uiView
    }
    ,
    s.onInit = function() {}
    ,
    s.onFirstOpen = function() {}
    ,
    s.onOpen = function() {
        this.imgRound.skin = d.getImgPath("img/loadingRound.png"),
        x.timer.frameLoop(1, this, this.onUpdateRound),
        this.loadingMask || (this.loadingMask = new at),
        this.loadingMask.graphics.drawRect(0, 0, 768, 1024, "#000000"),
        this.loadingMask.alpha = 0,
        this.mouseEnabled = !0,
        this.mouseThrough = !1,
        this.addChildAt(this.loadingMask, 0),
        this.imgRound.x = 400,
        this.imgRound.scale(1.5, 1.5),
        this.loadLb.x = 280
    }
    ,
    s.onClose = function() {
        c.send("37012"),
        this.mouseEnabled = !0,
        this.imgRound.skin = "",
        x.timer.clear(this, this.onUpdateRound),
        this.loadingMask && (this.loadingMask.graphics && this.loadingMask.graphics.clear(),
        this.loadingMask.removeSelf(),
        this.loadingMask = null)
    }
    ,
    s.onResize = function(t, e, i, s) {}
    ,
    s.onUpdateRound = function() {
        this.imgRound.rotation += 7
    }
    ,
    bo.uiView = {
        x: 0,
        type: "BaseBox",
        selectedBox: 1,
        selecteID: 2,
        props: {
            width: 576,
            sceneColor: "#000000",
            height: 1024
        },
        nodeParent: -1,
        label: "BaseBox",
        isOpen: !0,
        isDirectory: !0,
        isAniNode: !0,
        hasChild: !0,
        compId: 1,
        child: [{
            x: 15,
            type: "Image",
            props: {
                y: 470,
                x: 305,
                var: "imgRound",
                pivotY: 32,
                pivotX: 32
            },
            nodeParent: 1,
            label: "Image(imgRound)",
            isDirectory: !1,
            isAniNode: !0,
            hasChild: !1,
            compId: 2,
            child: []
        }, {
            type: "Label",
            props: {
                y: 507,
                x: 180,
                width: 215,
                var: "loadLb",
                text: "资源加载中...",
                strokeColor: "#000000",
                stroke: 3,
                height: 18,
                fontSize: 18,
                font: "黑体",
                color: "#ffffff",
                bold: !0,
                align: "center"
            }
        }],
        animations: [{
            nodes: [],
            name: "ani1",
            id: 1,
            frameRate: 24,
            action: 0
        }]
    };
    var xo, wo = bo;
    function bo() {
        this.imgRound = null,
        this.loadLb = null,
        this.loadingMask = null,
        xo.call(this)
    }
    t(Co, "app.X5LoginMessageBox", So = Gn),
    (P = Co.prototype).showMessageBox = function(t, e, i, s, n, o, a, r) {
        void 0 === a && (a = !0),
        void 0 === r && (r = !1),
        this.strContent = t,
        this.strTitle = e,
        this.onOk = i,
        this.strOk = s,
        this.onCancel = n,
        this.strCancel = o,
        this._showCloseBtn = a,
        this._needScroll = r,
        this.open()
    }
    ,
    P.getAltas = function() {
        return [d.getImgPath("img/x5_login.json")]
    }
    ,
    P.getUIView = function() {
        return Co.uiView
    }
    ,
    P.needAutoResize = function() {
        return !0
    }
    ,
    P.onFirstOpen = function() {
        var t = this
          , e = this;
        e.btnClose.on("click", e, function() {
            e.close(),
            t.onCancel ? t.onCancel.run() : t.onOk && t.onOk.run()
        }),
        e.btnOk.on("click", e, function() {
            e.close(),
            t.onOk && t.onOk.run()
        }),
        e.btnCancel.on("click", e, function() {
            e.close(),
            t.onCancel && t.onCancel.run()
        }),
        e.link_txt1.on("click", e, function() {
            p.ins.showUserPro()
        }),
        e.link_txt2.on("click", e, function() {
            p.ins.showPrivacyPolicy()
        })
    }
    ,
    P.onOpen = function() {
        this.content.visible = !this._needScroll,
        this.btnClose.visible = this._showCloseBtn,
        this.txtCon.visible = this.hrefBox.visible = this._needScroll,
        this.btnCancel.y = this.btnOk.y = this._needScroll ? 317 : 298,
        this.title.text = this.strTitle || d.getI18(10073),
        this._needScroll ? (this.txtCon.mouseThrough = !0,
        this.txtCon.vScrollBarSkin = "",
        this.html.style.fontSize = 20,
        this.html.style.align = "left",
        this.html.color = "#2A3940",
        this.html.innerHTML = this.strContent,
        this.txtCon.realContentHeigth = this.html.contextHeight,
        this.txtCon.scrollTo(0, 0)) : this.content.text = this.strContent,
        this.labelOk.text = this.strOk || d.getI18(10071),
        this.onCancel ? (this.btnCancel.visible = !0,
        this.labelCancel.text = this.strCancel || d.getI18(10072),
        this.btnOk.x = 288) : (this.btnCancel.visible = !1,
        this.btnOk.x = 170)
    }
    ,
    P.onClose = function() {}
    ,
    Co.uiView = {
        type: "View",
        props: {
            width: 768,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                y: -100,
                x: -100,
                width: 968,
                skin: "x5_login/bg_chat.png",
                height: 1224
            }
        }, {
            type: "Image",
            props: {
                y: 250,
                x: 143,
                width: 482,
                skin: "x5_login/bg_23.png",
                sizeGrid: "12,10,10,11",
                mouseEnabled: !0,
                height: 388
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 97,
                    skin: "x5_login/bg_title.png"
                }
            }, {
                type: "Button",
                props: {
                    y: 5,
                    x: 444,
                    var: "btnClose",
                    stateNum: 1,
                    skin: "x5_login/btn_close.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 45,
                    x: 12,
                    width: 458,
                    skin: "x5_login/bg_21.png",
                    sizeGrid: "5,5,5,5",
                    height: 236
                }
            }, {
                type: "Button",
                props: {
                    y: 298,
                    x: 288,
                    width: 145,
                    var: "btnOk",
                    stateNum: 2,
                    skin: "x5_login/gamebutton_blue.png",
                    height: 60
                },
                child: [{
                    type: "Label",
                    props: {
                        y: 17,
                        x: 5,
                        width: 131,
                        var: "labelOk",
                        text: "确 定",
                        strokeColor: "#2A3940",
                        height: 27,
                        fontSize: 22,
                        font: "黑体",
                        color: "#48565d",
                        bold: !0,
                        align: "center"
                    }
                }]
            }, {
                type: "Button",
                props: {
                    y: 298,
                    x: 59,
                    width: 145,
                    var: "btnCancel",
                    stateNum: 2,
                    skin: "x5_login/gamebutton_green.png",
                    height: 60
                },
                child: [{
                    type: "Label",
                    props: {
                        y: 17,
                        x: 5,
                        width: 131,
                        var: "labelCancel",
                        text: "取 消",
                        strokeColor: "#2A3940",
                        height: 27,
                        fontSize: 22,
                        font: "黑体",
                        color: "#5d5948",
                        bold: !0,
                        align: "center"
                    }
                }]
            }, {
                type: "Label",
                props: {
                    y: 4,
                    x: 155,
                    width: 178,
                    var: "title",
                    text: "提 示",
                    height: 32,
                    fontSize: 24,
                    font: "黑体",
                    color: "#2A3940",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 74,
                    x: 44,
                    wordWrap: !0,
                    width: 394,
                    var: "content",
                    valign: "middle",
                    height: 176,
                    fontSize: 20,
                    font: "黑体",
                    color: "#2A3940",
                    align: "center"
                }
            }, {
                type: "Panel",
                props: {
                    y: 57,
                    x: 23,
                    width: 436,
                    var: "txtCon",
                    height: 212
                },
                child: [{
                    type: "HTMLDivElement",
                    props: {
                        y: 0,
                        x: 0,
                        width: 436,
                        var: "html",
                        innerHTML: "htmlText",
                        height: 214
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 287,
                    x: 12,
                    var: "hrefBox"
                },
                child: [{
                    type: "Label",
                    props: {
                        text: "点击查看",
                        fontSize: 20,
                        font: "黑体",
                        color: "#2A3940",
                        bold: !1,
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        x: 71,
                        text: "《",
                        fontSize: 20,
                        font: "黑体",
                        color: "#3da42c",
                        bold: !1,
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        x: 90,
                        var: "link_txt1",
                        underlineColor: "#3da42c",
                        underline: !0,
                        text: "用户协议",
                        fontSize: 20,
                        font: "黑体",
                        color: "#3da42c",
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        x: 170,
                        text: "》《",
                        fontSize: 20,
                        font: "黑体",
                        color: "#3da42c",
                        bold: !1,
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        x: 210,
                        var: "link_txt2",
                        underlineColor: "#3da42c",
                        underline: !0,
                        text: "隐私政策",
                        fontSize: 20,
                        font: "黑体",
                        color: "#3da42c",
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        x: 290,
                        text: "》",
                        fontSize: 20,
                        font: "黑体",
                        color: "#3da42c",
                        bold: !1,
                        align: "left"
                    }
                }]
            }]
        }]
    };
    var So, Io = Co;
    function Co() {
        this.title = null,
        this.btnClose = null,
        this.html = null,
        this.btnOk = null,
        this.labelOk = null,
        this.btnCancel = null,
        this.labelCancel = null,
        this.txtCon = null,
        this.hrefBox = null,
        this.link_txt1 = null,
        this.link_txt2 = null,
        this.content = null,
        this.strContent = null,
        this.strTitle = null,
        this.onOk = null,
        this.strOk = null,
        this.onCancel = null,
        this.strCancel = null,
        this._showCloseBtn = !1,
        this._needScroll = !1,
        So.call(this)
    }
    t(To, "app.X5LoginNotice", ko = Gn),
    (v = To.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_login.json")]
    }
    ,
    v.getUIView = function() {
        return To.uiView
    }
    ,
    v.needAutoResize = function() {
        return !0
    }
    ,
    v.onFirstOpen = function() {
        var t = this;
        t.btnClose.on("click", t, function() {
            t.close()
        }),
        t.btn.on("click", t, function() {
            t.close()
        }),
        t.imgMask.on("click", t, function() {
            this.close()
        }),
        this.txtCon.mouseThrough = !0,
        this.txtCon.vScrollBarSkin = "",
        this.txtConVivo1.mouseThrough = !0,
        this.txtConVivo1.vScrollBarSkin = "",
        this.txtConVivo2.mouseThrough = !0,
        this.txtConVivo2.vScrollBarSkin = ""
    }
    ,
    v.onOpen = function() {
        if (this.txtCon.visible = !0,
        this.txtConVivo1.visible = this.txtConVivo2.visible = !1,
        this.html.style.fontSize = 20,
        this.html.color = "#2A3940",
        this.html.height = 0,
        1 == this._isNotice)
            this.html.innerHTML = c.noticeInfoData.desc,
            this.title_lab.text = d.getI18(10066);
        else if (2 == this._isNotice) {
            if (w.onVVMiniGame) {
                for (var t = 0; t < this.txtConVivo1.content._childs.length - 1; t++)
                    this.txtConVivo1.content.getChildAt(t).skin = "img/vivo/userProtocol_oppo" + (t + 1) + ".png";
                this.txtConVivo1.visible = !0,
                this.txtCon.visible = !1
            } else
                this.html.innerHTML = c.userProInfoData.desc;
            this.title_lab.text = d.getI18(20040)
        } else if (3 == this._isNotice) {
            if (w.onVVMiniGame) {
                for (t = 0; t < this.txtConVivo2.content._childs.length - 1; t++)
                    this.txtConVivo2.content.getChildAt(t).skin = "img/vivo/privacyPolicy_oppo" + (t + 1) + ".png";
                this.txtConVivo2.visible = !0,
                this.txtCon.visible = !1
            } else
                this.html.innerHTML = c.privacyPolicyData.desc;
            this.title_lab.text = d.getI18(30066)
        } else
            4 == this._isNotice && (this.html.innerHTML = c.ageData.desc,
            this.title_lab.text = d.getI18(40024));
        this.btn.visible = !this._isNotice,
        this.txtCon.height = this._isNotice ? 669 : 566,
        this.bg2.height = this._isNotice ? 697 : 594,
        this.html.on("link", this, this.onLink),
        this.txtCon.realContentHeigth = this.html.contextHeight,
        this.txtCon.scrollTo(0, 0),
        app.multiZone.BackPressedController && xi.instance.registerCloseFunction(this, this.close),
        g.isOppoLargeCam && (this.imgMask.x = -p.ins.m_loginRoot.x,
        this.imgMask.width = 1920)
    }
    ,
    v.onLink = function(t) {
        r.isConchApp ? Dt.showWebView(t) : w.window.location.href = t
    }
    ,
    v.setIsNotice = function(t) {
        this._isNotice = t
    }
    ,
    v.getIsNotice = function() {
        return this._isNotice
    }
    ,
    v.onClose = function() {
        app.multiZone.BackPressedController && xi.instance.removeCloseFunction(this)
    }
    ,
    To.uiView = {
        type: "BaseBox",
        props: {
            width: 768,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                y: -100,
                x: -100,
                width: 968,
                var: "imgMask",
                skin: "x5_login/bg_chat.png",
                sizeGrid: "2,2,2,2",
                height: 1224
            }
        }, {
            type: "Image",
            props: {
                y: 160,
                x: 109,
                width: 550,
                var: "bg1",
                skin: "x5_login/bg_23.png",
                sizeGrid: "10,12,11,12",
                mouseEnabled: !0,
                height: 760,
                alpha: 1
            },
            child: [{
                type: "Image",
                props: {
                    y: 41,
                    x: 7,
                    width: 536,
                    var: "bg2",
                    skin: "x5_login/bg_21.png",
                    sizeGrid: "10,10,10,10",
                    height: 697
                }
            }, {
                type: "Image",
                props: {
                    y: 0,
                    x: 130,
                    var: "bgTitle",
                    skin: "x5_login/bg_title.png"
                }
            }, {
                type: "Button",
                props: {
                    y: 5,
                    x: 514,
                    var: "btnClose",
                    stateNum: 1,
                    skin: "x5_login/btn_close.png"
                }
            }, {
                type: "Label",
                props: {
                    y: 4,
                    x: 209,
                    width: 133,
                    var: "title_lab",
                    text: "公 告",
                    height: 32,
                    fontSize: 24,
                    font: "黑体",
                    color: "#0A3940",
                    align: "center"
                }
            }, {
                type: "Panel",
                props: {
                    y: 61,
                    x: 31,
                    width: 487,
                    var: "txtCon",
                    height: 669
                },
                child: [{
                    type: "HTMLDivElement",
                    props: {
                        y: 0,
                        x: 0,
                        width: 487,
                        var: "html",
                        innerHTML: "htmlText"
                    }
                }]
            }, {
                type: "Panel",
                props: {
                    y: 53,
                    x: 30,
                    width: 494,
                    var: "txtConVivo1",
                    height: 669
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 618,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 1236,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 1854,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 2472,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 3090,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 3708,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 4326,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 4944,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 5562,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 6180,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 6798,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 7416,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 8034,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 8652,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 9270,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 9888,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 10506,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 11124,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 11742,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 12360,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 12978,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 13596,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 14214,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 14832,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 15450,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 16068,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 16686,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 17304,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 17922,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 18540,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 19158,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 19776,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 20394,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 21012,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 21630,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 22258,
                        x: -1
                    }
                }]
            }, {
                type: "Panel",
                props: {
                    y: 53,
                    x: 30,
                    width: 494,
                    var: "txtConVivo2",
                    height: 669
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 618,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 1236,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 1854,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 2472,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 3090,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 3708,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 4326,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 4944,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 5562,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 6180,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 6798,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 7416,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 8034,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 8652,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 9270,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 9888,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 10506,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 11124,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 11742,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 12360,
                        x: -1
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 12988,
                        x: -1
                    }
                }]
            }, {
                type: "Button",
                props: {
                    y: 659,
                    x: 201,
                    width: 148,
                    var: "btn",
                    stateNum: 2,
                    skin: "x5_login/gamebutton_blue.png",
                    height: 60
                },
                child: [{
                    type: "Label",
                    props: {
                        y: 17,
                        x: 5,
                        width: 131,
                        text: "确 认",
                        strokeColor: "#2A3940",
                        height: 27,
                        fontSize: 24,
                        font: "黑体",
                        color: "#48565D",
                        align: "center"
                    }
                }]
            }]
        }, {
            type: "Box",
            props: {
                y: 933,
                x: 165,
                width: 438,
                var: "img_back",
                height: 79
            },
            child: [{
                type: "Image",
                props: {
                    y: 30,
                    x: 72,
                    var: "imgBack",
                    skin: "x5_login/word_clickReturn.png"
                }
            }]
        }]
    };
    var ko, Po = To;
    function To() {
        this.imgMask = null,
        this.bg1 = null,
        this.bg2 = null,
        this.bgTitle = null,
        this.btnClose = null,
        this.title_lab = null,
        this.txtCon = null,
        this.html = null,
        this.txtConVivo1 = null,
        this.txtConVivo2 = null,
        this.btn = null,
        this.img_back = null,
        this.imgBack = null,
        this._isNotice = 0,
        ko.call(this)
    }
    t(Ro, "app.X5LoginPanel", Lo = Gn),
    (N = Ro.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_login.json")]
    }
    ,
    N.getUIView = function() {
        return Ro.uiView
    }
    ,
    N.onInit = function() {
        function t() {
            if ("State_loading" != this.state && ++o.loadCompleteCount == n.length)
                for (var t = 0; t < n.length; t++) {
                    var e = new z
                      , i = (o.spinePanel.addChildAt(e, 0),
                    a[t].split("_"));
                    s("spineBird" + t, parseInt(i[0]), parseInt(i[1]), e, r[t])
                }
        }
        var e, o = this, s = (g.isReplace,
        this.imgBottom = new J,
        this.imgBottom.skin = this.getBgSkin(),
        this.imgBottom.width = 768,
        this.imgBottom.height = 1024,
        this.imgBottom.on("click", this, this.sdkLogin),
        this.addChild(this.imgBottom),
        function(t, e, i, s, n) {
            "State_loading" != this.state && (n = n.buildArmature(0),
            this[t] = n,
            (o.m_spineList[t] = n).scale(1, 1),
            n.pos(e, i),
            s.addChild(n),
            n.play(0, !0))
        }
        ), n = ["img/loading_jdcx_1.sk", "img/loading_jdcx_2.sk", "img/loading_jdcx_3.sk", "img/loading_jdcx_4.sk", "img/loading_jdcx_5.sk", "img/loading_jdcx_6.sk", "img/loading_jdcx_7.sk", "img/loading_jdcx_8.sk", "img/loading_jdcx_9.sk"], a = ["0_0", "0_0", "0_0", "0_0", "0_0", "0_0", "0_0", "0_0", "0_0"], r = [];
        if (this.hasSpecSpine && !w.antiMiniGame) {
            this.spinePanel = new Bt,
            this.spinePanel.width = 768,
            this.spinePanel.height = 1024,
            this.loginImg = new J,
            this.loginImg.skin = d.getImgPath("img/imgLogo.png"),
            this.loginImg.x = 180,
            this.loginImg.y = 20,
            this.loginImg.scale(.65, .65),
            this.spinePanel.addChild(this.loginImg),
            this.spineOtherImg = new J,
            this.spineOtherImg.skin = d.getImgPath("img/jdcx.png"),
            this.spineOtherImg.x = 165,
            this.spineOtherImg.y = 230,
            this.spinePanel.addChild(this.spineOtherImg),
            this.addChildAt(this.spinePanel, 1);
            for (var i = 0; i < n.length; i++) {
                var l = new It;
                r.push(l),
                l.on("complete", this, t),
                l.loadAni(d.getImgPath(n[i]))
            }
        }
        g.isOppoLargeCam && ((e = new J).skin = d.getImgPath("img/bottom_1.jpg"),
        e.left = 0,
        e.top = 0,
        e.height = p.s_height,
        e.name = "imgBottom1",
        x.stage.addChildAt(e, 0),
        (e = new J).skin = d.getImgPath("img/bottom_2.jpg"),
        e.right = 0,
        e.top = 0,
        e.height = p.s_height,
        e.name = "imgBottom2",
        x.stage.addChildAt(e, 1)),
        this.imgLogo = new J,
        this.imgLogo.skin = d.getImgPath("img/denglu_img_logo.png"),
        this.imgLogo.x = 225,
        this.imgLogo.y = this.getOpSerDay() ? 115 : 164,
        this.imgLogo.visible = !1,
        this.addChild(this.imgLogo),
        this.imgNewHelp = new J,
        this.imgNewHelp.skin = d.getImgPath("img/topic.png"),
        this.imgNewHelp.x = 225,
        this.imgNewHelp.y = 420,
        this.imgNewHelp.visible = !0,
        this.addChild(this.imgNewHelp)
    }
    ,
    N.click = function(t) {
        if (!this.isClick) {
            if (this.isClick = !0,
            t.stageX < this.width / 2)
                for (var e = 0; e < 50; e++) {
                    var i = new rt;
                    i.x = 200,
                    i.y = 21 * e,
                    i.fontSize = 20,
                    i.height = 30,
                    i.color = "#ffffff",
                    i.width = 300,
                    this.addChild(i),
                    this.memTxtS.push(i)
                }
            else
                for (e = 0; e < 50; e++) {
                    var s = new z;
                    s.x = 200,
                    s.y = 21 * e,
                    this.addChild(s),
                    this.memSpS.push(s)
                }
            x.timer.frameLoop(1, this, this.loop)
        }
    }
    ,
    N.loop = function() {
        for (var t = 0; t < 50; t++) {
            var e = ((+Math.random()).toFixed(14) + "").substr(2) + "sd89%$#这是一个测试内存";
            this.memTxtS[t] ? this.memTxtS[t].text = e + "Text" : (this.memSpS[t].graphics.clear(),
            this.memSpS[t].graphics.fillText(e + "FillText", 0, 0, "20px Arial", "#ffffff", "left"))
        }
    }
    ,
    N.getBgSkin = function() {
        return this.hasSpecSpine && !w.antiMiniGame ? d.getImgPath("img/specSpineBg.jpg") : "1016636" == g.gid || "1016413" == g.gid ? d.getImgPath("img/bgwwjx1.jpg") : d.getImgPath("img/bg.jpg")
    }
    ,
    N.getOpSerDay = function() {
        return a.getItem("Storage_OpTime2") && "true" == a.getItem("Storage_OpTime2")
    }
    ,
    N.getIsYearTime = function() {
        return !1
    }
    ,
    N.onFirstOpen = function() {
        var t, e = this, i = (this.boxEnterServer.visible = !1,
        "1009124" == g.gid && (t = this.btnEnter.getChildAt(0)) && x.__typeof(t, J) && this.btnEnter.removeChildAt(0),
        this);
        i.btnEnter.y = 50,
        i.btnEnter.on("mousedown", i, function() {
            i.btnEnter.x = 81,
            i.btnEnter.y = 52,
            i.btnEnter.on("mouseup", i, function() {
                i.btnEnter.x = 79,
                i.btnEnter.y = 50
            }),
            i.btnEnter.on("mouseout", i, function() {
                i.btnEnter.x = 79,
                i.btnEnter.y = 50
            })
        }),
        i.btnEnter.on("click", i, function() {
            e._showCheckBtn && !g.isSelectPrivacy ? e.addToGeneral(d.getI18(40014)) : e._delayClickStatus || (c.selectedServer ? 4 == c.selectedServer.state ? p.ins.showMessageBox(c.selectedServer.name + d.getI18(10038)) : 5 == c.selectedServer.state ? c.selectedServer.autoOpenTime ? p.ins.showMessageBox(c.selectedServer.name + d.getI18(10039) + e.formatTime(c.selectedServer.autoOpenTime) + d.getI18(10040)) : p.ins.showMessageBox(c.selectedServer.name + d.getI18(10041)) : (c.serverid == c.selectedServer.serverId || c.wxServerId.indexOf(c.serverid) < 0 && c.wxServerId.indexOf(c.selectedServer.serverId) < 0 || (w.onVVMiniGame || w.onKSMiniGame) && (g.isCfgInited = !1,
            Ot.verUrls = null),
            e.setSelectSerOpTime(),
            e._delayClickStatus = !0,
            x.timer.once(1e3, i, e.setBtnEnterStatus),
            c.USE_LOGIN3 = w.now(),
            c.startEnterGame()) : p.ins.showMessageBox(d.getI18(10037)))
        }),
        i.btnSelectServer.on("click", i, function() {
            p.ins.showSelectServer()
        }),
        i.btnSelectServer2.on("click", i, function() {
            p.ins.showSelectServer()
        }),
        i.btnNotive.on("click", i, function() {
            p.ins.showNotice()
        }),
        i.btnUser.on("click", i, function() {
            99995 != c.selectedServer.serverId && r.isConchApp ? (w.onAndroid && 951 <= parseInt(c.appVer) || w.onIOS && 75 <= parseInt(c.appVer) || w.onOhos) && Dt.showUAgreement() : p.ins.showUserPro()
        }),
        i.btnRefresh.on("click", i, function() {
            var t;
            "State_loading" == i.state ? (t = w.window.wx) && t.restartMiniProgram && t.restartMiniProgram() : p.ins.clearMiniGameFile()
        }),
        i.btnScanCode.on("click", i, function() {
            Dt.scanCode(function(t, e) {
                c.sendPostCodeInfo(e.data)
            })
        }),
        i.btnPassCode.on("click", i, function() {
            p.ins.showPcCodePanel()
        }),
        i.btnCollect.on("click", i, function() {
            p.ins.showPrivacyPolicy()
        }),
        i.btnRightAge.on("click", i, function() {
            Dt.showRightAge()
        }),
        i.check_img.on("click", this, function() {
            e.checkHandler()
        }),
        i.txt_img2.on("click", this, function() {
            p.ins.showPrivacyPolicy()
        }),
        i.txt_img4.on("click", this, function() {
            p.ins.showUserPro()
        }),
        i.btnAge.on("click", i, function() {
            p.ins.showAgeHandler()
        }),
        w.onVVMiniGame && (c.userProInfoData = {
            desc: " "
        },
        c.privacyPolicyData = {
            desc: " "
        })
    }
    ,
    N.checkHandler = function() {
        g.isSelectPrivacy ? (g.isSelectPrivacy = !1,
        this.check_img1.visible = !1,
        a.setItem("privacyStatu_" + g.PID + "_" + g.account, "0")) : (g.isSelectPrivacy = !0,
        this.check_img1.visible = !0,
        a.setItem("privacyStatu_" + g.PID + "_" + g.account, this.privacyVer),
        c.isNewUser && (w.window.qq || w.window.qg || w.window.ks || w.window.wx) && c.startEnterGame(1))
    }
    ,
    N.addToGeneral = function(t) {
        t && !this.isTweenTxt && this.tipCon && (this.tipCon.alpha = 1,
        this.tipCon.visible = !0,
        m.to(this.tipCon, {
            alpha: 0
        }, 1500, null, b.create(this, this.completeHandler)),
        this.isTweenTxt = !0)
    }
    ,
    N.completeHandler = function() {
        m.clearAll(this.tipCon),
        this.isTweenTxt = !1,
        this.tipCon.visible = !1
    }
    ,
    N.onOpen = function() {
        this.tip_lab3.text = d.getI18(10011),
        this.tip_lab3.visible = g.Language != g.defaultLang,
        "zh_tw" == g.Language && (this.tip_lab4.text = d.getI18(30067)),
        this.btnUser.visible = !1,
        this.btnCollect.visible = !1,
        this.btnScanCode.visible = !1,
        this.btnPassCode.visible = !1,
        this.btnRightAge.visible = !1,
        this.btnAge.visible = !1,
        w.onMiniGame || (this.btnRefresh.visible = !1),
        this.tip_lab0.visible = this.tip_lab1.visible = this.tip_lab2.visible = "zh_tw" != g.Language,
        this.tip_lab3.y = "zh_tw" != g.Language ? 96 : 44,
        this.tip_lab5.y = this.tip_lab3.visible ? 135 : 96;
        var t = this.boxTip.getChildAt(3);
        t && (t.visible = "zh_tw" != g.Language),
        this.imgLogo && (this.imgLogo.visible = !0),
        this.imgLogo && this.getIsYearTime() && this.getNeedChangeBgSer() && (this.imgLogo.visible = !1),
        this.getNeedChangeBgSer() && (this.imgLogo.visible = !1),
        "zh_tw" == g.Language && (this.imgLogo.visible = !1),
        this.firstLoginImg && (this.firstLoginImg.visible = !1),
        this.setState(this.state),
        x.timer.frameLoop(1, this, this.onUpdate),
        g.isWx() || Q.playMusic(r.isConchApp && !w.onOhos ? d.getImgPath("img/establish.ogg") : d.getImgPath("img/establish.mp3"), 0),
        this._musicUrl = Q._tMusic,
        this.setWxHpTxt(),
        this._showCheckBtn = !1,
        this.tipCon.visible = !1,
        this.checkBox.visible = !1,
        g.isSelectPrivacy = this.check_img1.visible = c.islocal,
        this.updateGoldBg()
    }
    ,
    N.updateGoldBg = function() {
        this.bgServer.pos(0, -30),
        this.bgServer.size(355, 64),
        this.bgServer.skin = "x5_login/denglu_bg_3.png",
        (g.isGoldServer || g.isGoldServerByServerId(c.selectedServer && c.selectedServer.serverId)) && (this.bgServer.skin = "x5_login/denglu_goldServer_bg.png",
        this.bgServer.pos(-108, -57),
        this.bgServer.size(576, 119))
    }
    ,
    N.clickHanlder = function() {
        0 == this.isStart ? (this.isStart = !0,
        x.timer.once(1e3, this, this.delayfun)) : (this.count++,
        5 == this.count && w.window.wx.navigateToMiniProgram({
            appId: "wx0fc8fdda7190f447",
            path: "",
            extraData: {},
            enVersion: "develop",
            success: function(t) {
                console.info("navigateToMiniProgram" + t)
            }
        }))
    }
    ,
    N.delayfun = function() {
        this.isStart = !1,
        this.count = 0
    }
    ,
    N.setWxHpTxt = function() {
        var t = this.wxHpMsg;
        if (t) {
            for (var e = 0, i = (g.gamePlat == g.plat_zh && "1016525" == g.gid && "1" == g.PID && (e = 1),
            g.isWx() && !g.isReplace && "1016636" != g.gid && "1016413" != g.gid); e < t.length; e++) {
                var s = t[e]
                  , n = this.qualityBox.getChildByName("quaTxt" + e);
                i && (n.color = "#FFF"),
                n.text = s,
                n.on("click", this, this.onQuaTxtHandler, [n])
            }
            i && (this.tip_title.color = this.tip_lab1.color = this.tip_lab2.color = "#FFF")
        }
    }
    ,
    N.onClose = function() {
        this._musicUrl && this._musicUrl == Q._tMusic && Q.stopMusic(),
        x.timer.clear(this, this.loop),
        x.timer.clear(this, this.onUpdate),
        x.timer.clear(this, this.setBtnEnterStatus),
        this._delayClickStatus = !1;
        function t(t) {
            t.templet.destroy(),
            t.stop(),
            t.removeSelf(),
            t.destroy()
        }
        for (var e in this.spineBird && (t(this.spineBird),
        this.spineBird = null),
        this.spineLeft && (t(this.spineLeft),
        this.spineLeft = null),
        this.spineRight && (t(this.spineRight),
        this.spineRight = null),
        g.isOppoLargeCam && (x.stage.removeChildByName("imgBottom1"),
        x.stage.removeChildByName("imgBottom2")),
        this.m_spineList) {
            e = this.m_spineList[e];
            e && (t(e),
            0)
        }
        this.m_spineList = {},
        this.loadCompleteCount = 0,
        this.completeHandler()
    }
    ,
    N.onResize = function(t, e, i, s) {
        this.curY = i + 20,
        this.btnNotive.y = this.curY,
        this.btnBox.x = g.isConnerForbid ? t + 20 : e - 80,
        g.isConnerForbid && (this.btnBox.scaleX = this.btnBox.scaleY = .9),
        this.imgLogo.centerX = 0,
        this.imgLogo.centerY = -150,
        this.boxTip.y = s - 150;
        this.isWxHp ? (this.qualityBox.visible = !0,
        this.qualityBox.y = this.boxTip.y - 185,
        this.boxEnterServer.y = this.qualityBox.y - 155,
        this.progress1.y = 601,
        this.progress2.y = 657,
        this.firstLoginImg.y = 408) : (this.qualityBox.visible = !1,
        this.boxEnterServer.y = s - 310,
        this.progress1.y = 761,
        this.progress2.y = 817,
        this.firstLoginImg.y = 568),
        this.btnUser.visible && (this.curY += 75,
        this.btnUser.x = this.btnNotive.x - 10,
        this.btnUser.y = this.curY),
        this.btnCollect.visible && (this.curY += 75,
        this.btnCollect.x = this.btnNotive.x - 10,
        this.btnCollect.y = this.btnUser.visible ? this.btnUser.y + 75 : this.curY - 75),
        w.onMiniGame && (this.curY += 75,
        this.btnCollect.visible ? (this.btnRefresh.x = this.btnNotive.x - 10,
        this.btnRefresh.y = this.btnCollect.y + 75) : this.btnUser.visible ? (this.btnRefresh.x = this.btnUser.x - 10,
        this.btnRefresh.y = this.btnUser.y + 75) : (this.btnRefresh.x = this.btnNotive.x - 10,
        this.btnRefresh.y = this.btnNotive.y + 75)),
        this.btnScanCode.visible && (this.curY += 75,
        this.btnScanCode.x = this.btnNotive.x,
        this.btnScanCode.y = this.curY),
        this.btnPassCode.visible && (this.curY += 75,
        this.btnPassCode.x = this.btnNotive.x - 10,
        this.btnPassCode.y = this.curY),
        this.btnAge.visible && (this.curY += 75,
        this.btnAge.x = this.btnNotive.x + 4,
        this.btnAge.y = this.curY),
        g.isHuaweiLargeCam ? (this.imgBottom.scaleX = 1.26,
        this.imgBottom.scaleY = 1.26,
        this.imgBottom.x = (this.imgBottom.width - this.imgBottom.width * this.imgBottom.scaleX) / 2,
        this.imgBottom.y = (this.imgBottom.height - this.imgBottom.height * this.imgBottom.scaleY) / 2) : (this.imgBottom.x = 0,
        this.imgBottom.y = 0,
        this.imgBottom.scaleX = 1,
        this.imgBottom.scaleY = 1),
        this.updateRightAge(),
        this.checkBox.y = this.boxEnterServer.y + 120
    }
    ,
    N.updateRightAge = function() {
        c.rightAgeUrl && (this.btnRightAge.visible = !0,
        this.btnRightAge.skin = c.rightAgeUrl,
        this.btnRightAge.x = this.btnNotive.x + 4,
        this.curY += 70,
        this.btnRightAge.y = this.curY)
    }
    ,
    N.setVer = function(t) {
        console.info("nowversion", t)
    }
    ,
    N.setState = function(t) {
        this.state = t,
        this.isLoadAltas && (w.onOhos && "State_loading" == this.state && (w.ohosNoChange = !0),
        "State_none" == this.state ? (this.test.visible = !1,
        this.boxEnterServer.visible = !1,
        this.progress1.visible = !1,
        this.progress2.visible = !1,
        this.boxAuditing.visible = !1,
        this.tipCon.visible = !1,
        this.checkBox.visible = !1,
        this._showCheckBtn = !1) : "State_enter" == this.state ? (this.test.visible = !1,
        c.IsFate || (this.boxEnterServer.visible = !0),
        this.progress1.visible = !1,
        this.progress2.visible = !1,
        this.boxAuditing.visible = !1,
        this.btnSelectServer.style.fontSize = 20,
        this.btnSelectServer.style.align = "center",
        this.refreshSelectServer(),
        null != c.selectedServer && (this.btnScanCode.visible = g.isCanScanCode && !g.checkIsAuditing(c.selectedServer.serverId) && this.scanCodePidArr.indexOf(g.PID) < 0 && !g.isGoldServer && !this.checkSidForPc(parseInt(c.selectedServer.serverId)) && "zh_tw" != g.Language && 99995 != c.selectedServer.serverId,
        this.btnPassCode.visible = !g.isCanScanCode && !g.checkIsAuditing(c.selectedServer.serverId) && this.scanCodePidArr.indexOf(g.PID) < 0 && !g.isGoldServer && !this.checkSidForPc(parseInt(c.selectedServer.serverId)) && "zh_tw" != g.Language && 99995 != c.selectedServer.serverId),
        "1023118" == g.gid && "787" == g.PID && (this.btnPassCode.visible = !0),
        "1023381" != g.gid && "1023382" != g.gid && "1023383" != g.gid && "1023384" != g.gid || "1" != g.PID || (this.btnScanCode.visible = !1,
        this.btnPassCode.visible = !1),
        w.onKSMiniGame && (this.btnScanCode.visible = !1,
        this.btnPassCode.visible = !1),
        w.antiMiniGame && (this.btnAge.visible = !0),
        this.resize(),
        t = !1,
        (t = !!(!w.antiMiniGame && p.ins.isTime("2025/1/18 00:00:00", "2025/1/25 23:59:59") || w.onMiniGame && p.ins.isTime("2025/1/18 00:00:00", "2025/1/25 23:59:59")) || t) && !g.checkIsAuditing(c.selectedServer.serverId) && 99995 != c.selectedServer.serverId && p.ins.showBackActPanel(),
        t = !1,
        (t = !!(!w.antiMiniGame && p.ins.isTime("2025/1/10 00:00:00", "2025/1/17 23:59:59") || w.onMiniGame && p.ins.isTime("2025/1/10 00:00:00", "2025/1/17 23:59:59")) || t) && !g.checkIsAuditing(c.selectedServer.serverId) && 99995 != c.selectedServer.serverId && p.ins.showBackReservationPanel()) : "State_loading" == this.state ? (c.isNewRole && g.isWx() && !c.IsFate && (this.firstLoginImg.visible = !0),
        w.onMiniGame && (p.ins.closeNoticePanel(),
        this.btnRefresh.visible = !1,
        t = w.window.wx) && t.restartMiniProgram && (this.btnRefresh.visible = !0),
        g.isReplace,
        this.boxEnterServer.visible = !1,
        this.checkBox.visible = !1,
        this._showCheckBtn = !1,
        this.tipCon.visible = !1,
        this.showLoading(),
        this.onUpdate()) : this.state)
    }
    ,
    N.showLoading = function() {
        g.isAuditing ? "zh_tw" == g.Language ? (this.test.visible = !1,
        this.boxEnterServer.visible = !1,
        this.progress1.visible = !1,
        this.progress2.visible = !1,
        this.boxAuditing.visible = !1,
        p.ins.showLoginTalk(!0)) : (this.imgRound.skin = d.getImgPath("img/loadingRound.png"),
        this.boxAuditing.visible = !0,
        this.progress1.visible = !1,
        this.progress2.visible = !1) : (this.boxAuditing.visible = !1,
        c.IsFate || (this.progress1.visible = !0),
        this.progress2.visible = !0),
        this.p1Label.text = d.getI18(10007),
        this.loadingString = this.loadingHelp,
        this.p2Label.text = d.getI18(10056),
        this.lastP1Time = this.begingLoadingTime = x.timer.currTimer,
        this.onUpdate()
    }
    ,
    N.showLoadingRound = function(t, e) {
        (this.boxAuditing.visible = t) ? (this.imgRound.skin = d.getImgPath("img/loadingRound.png"),
        this.txtProcess.text = e,
        x.timer.frameLoop(1, this, this.onUpdateRound),
        this.loadingMask || (this.loadingMask = new at),
        this.loadingMask.graphics.drawRect(this.imgBottom.x, this.imgBottom.y, this.imgBottom.width, this.imgBottom.height, "#000000"),
        this.loadingMask.alpha = .2,
        this.mouseEnabled = !1,
        this.addChild(this.loadingMask)) : (this.mouseEnabled = !0,
        this.imgRound.skin = "",
        this.txtProcess.text = d.getI18(10057),
        x.timer.clear(this, this.onUpdateRound),
        this.loadingMask && (this.loadingMask.graphics && this.loadingMask.graphics.clear(),
        this.loadingMask.removeSelf(),
        this.loadingMask = null))
    }
    ,
    N.onUpdateRound = function() {
        this.imgRound.rotation += 7
    }
    ,
    N.setImgProgress = function(t, e, i) {
        var s;
        e.visible = 0 < i && i < .99,
        t.mask || ((s = new z).graphics.drawRect(0, 0, t.width, t.height, "#ff0000"),
        t.mask = s),
        t.mask.x = -t.width + i * t.width,
        e.x = this.pLightOffsetX + i * t.width
    }
    ,
    N.clamp = function(t, e, i) {
        return e < t ? i < t - e ? t - i : e : i < e - t ? t + i : e
    }
    ,
    N.onUpdate = function() {
        if ("State_enter" == this.state && g.isReplace,
        "State_loading" == this.state) {
            for (var t = x.timer.currTimer, e = t - this.begingLoadingTime, i = .99, s = 0, s = 0; s < this.timeList.length; ++s)
                if (e <= this.timeList[s]) {
                    var n = 0 == s ? 0 : this.partList[s - 1]
                      , o = 0 == s ? 0 : this.timeList[s - 1]
                      , i = n + (this.partList[s] - n) * (e - o) / (this.timeList[s] - o);
                    break
                }
            this.setImgProgress(this.p1, this.p1Light, i);
            var a = .99;
            for (s = 0; s < this.filePer.length; ++s)
                if (i <= this.filePer[s]) {
                    var r = 0 == s ? 0 : this.filePer[s - 1]
                      , a = (i - r) / (this.filePer[s] - r);
                    break
                }
            this.setImgProgress(this.p2, this.p2Light, a);
            var l = this.lightAlphaArr.indexOf(this.p1Light.alpha);
            this.p1Light.alpha = this.p2Light.alpha = this.lightAlphaArr[(l + 1) % this.lightAlphaArr.length],
            3e3 < t - this.lastP1Time && (this.lastP1Time = t,
            this.p1Label.text = this.helpHtmls[Math.random() * this.helpHtmls.length >> 0]),
            this.imgRound.rotation += 7,
            this.txtProcess.text = d.getI18(10057),
            this.p2Label.text = this.loadingString.split("#1").join(Math.round(100 * a)).split("#2").join(100).split("#3").join(Math.round(100 * a)).split("#help").join("")
        }
    }
    ,
    N.setLoading = function(t) {
        t && (this.loadingString = t),
        this.loadingString || (this.loadingString = this.loadingHelp),
        this.onUpdate()
    }
    ,
    N.endLoading = function(e) {
        var i = this;
        "State_endding" != this.state && (this.setState("State_endding"),
        x.timer.clear(this, this.onUpdate),
        x.timer.once(200, this, function() {
            Yt.removeTweens(this);
            var t = Yt.get(this);
            t.wait(200),
            t.to({
                alpha: 0,
                duration: 300
            }),
            t.call(function() {
                e()
            }, null, null),
            i.p1 && i.p1.mask && (Yt.removeTweens(i.p1.mask),
            (t = Yt.get(i.p1.mask)).to({
                x: 0,
                duration: 300
            })),
            i.p1Light && (Yt.removeTweens(i.p1Light),
            (t = Yt.get(i.p1Light)).to({
                x: i.pLightOffsetX + i.p1.width,
                duration: 300
            })),
            i.p2.mask && (Yt.removeTweens(i.p2.mask),
            (t = Yt.get(i.p2.mask)).to({
                x: 0,
                duration: 300
            })),
            i.p2Light && (Yt.removeTweens(i.p2Light),
            (t = Yt.get(i.p2Light)).to({
                x: i.pLightOffsetX + i.p2.width,
                duration: 300
            }))
        }))
    }
    ,
    N.refreshSelectServer = function() {
        this.btnSelectServer2.visible = w.onKSMiniGame,
        this.btnSelectServer.visible = !w.onKSMiniGame,
        c.selectedServer ? 4 == c.selectedServer.state ? (this.imgServerState.skin = "x5_login/denglu_icon_point_4.png",
        w.onKSMiniGame ? (this.selectServerLab1.text = c.selectedServer.name + "  ",
        this.selectServerLab1.color = "#BCC6CF",
        this.selectServerLab2.text = d.getI18(10038),
        this.selectServerLab2.color = "#32F3C3") : this.btnSelectServer.innerHTML = "<font color='#BCC6CF'>" + c.selectedServer.name + d.getI18(10060)) : 5 == c.selectedServer.state ? (this.imgServerState.skin = "x5_login/denglu_icon_point_4.png",
        w.onKSMiniGame ? (this.selectServerLab1.text = c.selectedServer.name + "  ",
        this.selectServerLab1.color = "#BCC6CF",
        this.selectServerLab2.text = d.getI18(10041),
        this.selectServerLab2.color = "#32F3C3") : this.btnSelectServer.innerHTML = "<font color='#BCC6CF'>" + c.selectedServer.name + d.getI18(10061)) : (this.imgServerState.skin = "x5_login/denglu_icon_point_3.png",
        w.onKSMiniGame ? (this.selectServerLab1.text = c.selectedServer.name + "  ",
        this.selectServerLab1.color = "#BCC6CF",
        this.selectServerLab2.text = d.getI18(10101),
        this.selectServerLab2.color = "#C99A0A") : this.btnSelectServer.innerHTML = "<font color='#BCC6CF'>" + c.selectedServer.name + d.getI18(10062)) : (this.imgServerState.skin = "x5_login/denglu_icon_point_4.png",
        w.onKSMiniGame ? (this.selectServerLab1.text = d.getI18(10100) + "  ",
        this.selectServerLab1.color = "#C99A0A",
        this.selectServerLab2.text = "") : this.btnSelectServer.innerHTML = d.getI18(10059)),
        this.selectServerLab1.font = this.selectServerLab2.font = "黑体",
        this.selectServerLab1.y = this.selectServerLab2.y = 0,
        this.btnSelectServer2.refresh(),
        this.btnSelectServer2.width = this.selectServerLab1.width + this.selectServerLab2.width,
        c.selectedServer ? 0 <= c.wxServerId.indexOf(c.selectedServer.serverId) ? this.btnUser.visible = !0 : r.isConchApp ? (w.onAndroid && 951 <= parseInt(c.appVer) || w.onIOS && 75 <= parseInt(c.appVer) || w.onOhos) && (this.btnUser.visible = !g.checkIsAuditing(c.selectedServer.serverId)) : this.btnUser.visible = !g.checkIsAuditing(c.selectedServer.serverId) && (0 <= Ro.userProGIdArr.indexOf(g.gid + "") && 0 <= Ro.userProPidArr.indexOf(g.PID + "") || 0 <= Ro.userProGIdArr_ad.indexOf(g.gid + "") && 0 <= Ro.userProPidArr_ad.indexOf(g.PID + "") || 0 <= Ro.userProGIdArr_hjy.indexOf(g.gid + "") && 0 <= Ro.userProPidArr_hjy.indexOf(g.PID + "") || 0 <= Ro.userProPidArr_hjy2.indexOf(g.PID + "") || 0 <= Ro.userProPidArr_yl.indexOf(g.PID + "") || 0 <= Ro.userProPidArr_xy.indexOf(g.PID + "")) : this.btnUser.visible = !1,
        r.isConchApp ? (w.onAndroid && 951 <= parseInt(c.appVer) || w.onIOS && 75 <= parseInt(c.appVer) || w.onOhos) && (this.btnCollect.visible = !1) : this.btnCollect.visible = 0 <= this.privacyPolicyGidArr.indexOf(g.gid + "") && 0 <= this.privacyPolicyPidArr.indexOf(g.PID + ""),
        this.resize(),
        this.tipCon.visible = !1,
        this.checkBox.visible = w.antiMiniGame;
        var t = a.getItem("privacyStatu_" + g.PID + "_" + g.account);
        g.isSelectPrivacy = !!c.islocal || t && t == this.privacyVer,
        this.check_img1.visible = !!c.islocal || t && t == this.privacyVer,
        this.btnCollect.visible ? (this.txt_img2.visible = !0,
        this.btnUser.visible ? (this.txt_img3.visible = this.txt_img4.visible = !0,
        this.checkBox.x = 178,
        this.txt_img4.x = 325) : (this.txt_img3.visible = this.txt_img4.visible = !1,
        this.checkBox.x = 232),
        this.txt_img2.x = 220) : this.btnUser.visible ? (this.txt_img2.visible = this.txt_img3.visible = !1,
        this.txt_img4.visible = !0,
        this.txt_img4.x = 220,
        this.checkBox.x = 232) : this.checkBox.visible = !1,
        this._showCheckBtn = this.checkBox.visible,
        (w.window.qg || w.window.ks || w.window.qq || w.window.wx) && !t && "0" != t && this.showCheckPanel(),
        this.updateGoldBg()
    }
    ,
    N.showCheckPanel = function() {
        var t = w.window.qq ? 40035 : 40016;
        p.ins.showMessageBox(d.getI18(t), d.getI18(40019), b.create(this, this.checkHandler), d.getI18(40018), b.create(this, this.closeCheckHandler), d.getI18(40017), !1, !0)
    }
    ,
    N.closeCheckHandler = function() {
        p.ins.showMessageBox(d.getI18(40020), d.getI18(40023), b.create(this, this.showCheckPanel), d.getI18(40021), b.create(this, this.doExitQQMiniGame), d.getI18(40022), !1)
    }
    ,
    N.doExitQQMiniGame = function() {
        w.window.qq ? w.window.qq.exitMiniProgram({}) : w.window.qg ? w.window.qg.exitMiniProgram({}) : w.window.ks && w.window.ks.exitMiniProgram({})
    }
    ,
    N.setBtnEnterStatus = function() {
        this._delayClickStatus = !1
    }
    ,
    N.setSelectSerOpTime = function() {
        var t = new Date
          , t = (t.setFullYear(2021),
        t.setMonth(10),
        t.setDate(26),
        t.setHours(0),
        t.setMinutes(0),
        t.setSeconds(0),
        c.selectedServer.autoOpenTime < t.getTime());
        a.setItem("Storage_OpTime2", t + "")
    }
    ,
    N.getNeedChangeBgSer = function() {
        return !g.isReplace && "zh" == g.Language
    }
    ,
    N.monitorAccelerator = function(t, e, i, s) {
        var n = e.x
          , o = e.y;
        "number" == typeof e.x && (this.targetAddX = this.clampNormalize(n, -3, 3),
        this.targetAddY = this.clampNormalize(o, 0, 6))
    }
    ,
    N.clampNormalize = function(t, e, i) {
        return ((t = i < (t = t < e ? e : t) ? i : t) - e) / (i - e)
    }
    ,
    N.formatTime = function(t) {
        var t = new Date(t)
          , e = new Date
          , i = ""
          , s = t.getFullYear()
          , n = t.getMonth() + 1
          , o = t.getDate()
          , a = t.getHours()
          , t = t.getMinutes();
        return s != e.getFullYear() && (i += s + d.getI18(10063)),
        i = (i += n + d.getI18(10064) + o + d.getI18(10065)) + (a < 10 ? "0" + a + ":" : a + ":") + (t < 10 ? "0" + t : t + "")
    }
    ,
    N.checkSidForPc = function(t) {
        return !!t && 5e4 <= t && t <= 52e3
    }
    ,
    N.sdkLogin = function() {
        c.sdkLogined || (g.isHuaWei() || g.isYingYongBao() || r.isConchApp && w.onAndroid ? Li.ins.queueSdkLogin(Li.ins.sdkLoginHandler) : r.isConchApp && (w.onIOS || w.onOhos) && c.isSdkClosed && (Li.ins.queueSdkLogin(Li.ins.sdkLoginHandler),
        c.isSdkClosed = !1))
    }
    ,
    N.onQuaTxtHandler = function(t) {
        "quaTxt6" == t.name && r.isConchApp && Dt.openUrl("https://beian.miit.gov.cn/#/Integrated/index")
    }
    ,
    e(0, N, "isWxHp", function() {
        return g.gamePlat == g.plat_zh
    }, Lo.prototype._$set_isWxHp),
    e(0, N, "wxHpMsg", function() {
        var t = [d.getI18(30069), d.getI18(30023), d.getI18(30025), d.getI18(30032), d.getI18(30070), d.getI18(30034)]
          , e = [d.getI18(30031), d.getI18(30025), d.getI18(30032), d.getI18(30024), d.getI18(30068)]
          , i = [d.getI18(40025), d.getI18(40026), d.getI18(40027), d.getI18(40028), d.getI18(40029)];
        return "1016413" == g.gid ? i : "1016636" == g.gid ? [d.getI18(40030), d.getI18(40031), d.getI18(40032), d.getI18(40033), d.getI18(40034)] : w.onMiniGame && ("1005708" != g.gid || "442" != g.PID && "484" != g.PID) ? e : "1017207" != g.gid || "753" != g.PID && "752" != g.PID ? "1002997" == g.gid && "625" == g.PID ? (t.splice(t.length - 1, 1),
        t.push(d.getI18(40037)),
        t) : "1006888" != g.gid && "1005366" != g.gid && "1005365" != g.gid || "1" != g.PID ? "1007150" == g.gid && "1" == g.PID ? (t.splice(t.length - 1, 1),
        t.push(d.getI18(40041)),
        t) : "1005033" == g.gid && "1" == g.PID ? (t.splice(t.length - 1, 1),
        t.push(d.getI18(40042)),
        t) : "1006924" == g.gid && "1" == g.PID ? (t.splice(t.length - 1, 1),
        t.push(d.getI18(40043)),
        t) : "1016525" == g.gid && "1" == g.PID ? (t.splice(t.length - 1, 1),
        t.push(d.getI18(40044)),
        t) : "1021136" != g.gid && "1021220" != g.gid && "1021221" != g.gid && "1021272" != g.gid && "1021275" != g.gid && "1021317" != g.gid || "787" != g.PID ? ("1021252" != g.gid && "1021253" != g.gid && "1023301" != g.gid && "1023302" != g.gid && "1023303" != g.gid && "1023304" != g.gid && "1023305" != g.gid || "797" != g.PID) && ("1021254" != g.gid || "797" != g.PID && "791" != g.PID && "790" != g.PID) ? "1003279" == g.gid ? (t.splice(t.length - 1, 1),
        t.push(d.getI18(40048)),
        t) : "1021253" == g.gid && "797" == g.PID ? (t.push(d.getI18(40047)),
        t) : w.onKSMiniGame ? (this.qualityBox.getChildByName("quaTxt" + t.length).underline = !1,
        t.push(d.getI18(40049)),
        t) : g.gamePlat == g.plat_zh ? (r.isConchApp && (w.onIOS ? (t.splice(t.length - 1, 1),
        t.push(d.getI18(40038))) : w.onAndroid && (t.splice(t.length - 1, 1),
        t.push(d.getI18(40037)))),
        t) : null : (t.splice(t.length - 1, 1),
        t.push(d.getI18(40046)),
        t) : (t.splice(t.length - 1, 1),
        t.push(d.getI18(40045)),
        t) : (t.splice(t.length - 1, 1),
        t.push(d.getI18(40040)),
        t) : (t.splice(t.length - 1, 1),
        t.push(d.getI18(40039)),
        t)
    }, Lo.prototype._$set_wxHpMsg),
    Ro.SmoothDamp = function(t) {
        var e = t.current
          , i = t.target
          , s = t.currentVelocity || 0
          , n = t.smoothTime || .3
          , o = t.maxSpeed || 99999999
          , a = t.deltaTime
          , r = 2 / (n = Math.max(1e-4, n))
          , l = r * a
          , l = 1 / (1 + l + .48 * l * l + .235 * l * l * l)
          , h = e - i
          , o = o * n
          , n = (s + r * (h = o < (h = h < -o ? -o : h) ? o : h)) * a
          , s = (s - r * n) * l
          , o = e - h + (h + n) * l;
        0 < i - e == i < o && (s = ((o = i) - i) / a),
        t.currentVelocity = s,
        t.current = o
    }
    ,
    Ro.uiView = {
        type: "BaseBox",
        props: {
            width: 768,
            height: 1024
        },
        child: [{
            type: "Box",
            props: {
                y: 0,
                x: 0,
                var: "test"
            },
            child: [{
                type: "Image",
                props: {
                    y: -110,
                    x: -64,
                    width: 900,
                    height: 806
                }
            }, {
                type: "Image",
                props: {
                    y: 400,
                    x: -60,
                    width: 900,
                    height: 780
                }
            }, {
                type: "Image",
                props: {
                    y: 215,
                    x: 166,
                    skin: "img/denglu_img_logo.png"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 750,
                x: 204,
                var: "boxEnterServer"
            },
            child: [{
                type: "Image",
                props: {
                    y: -30,
                    x: 0,
                    width: 355,
                    var: "bgServer",
                    skin: "x5_login/denglu_bg_3.png",
                    sizeGrid: "15,0,18,0",
                    height: 64
                }
            }, {
                type: "Image",
                props: {
                    y: -7,
                    x: 38,
                    var: "imgServerState",
                    skin: "x5_login/denglu_icon_point_3.png"
                }
            }, {
                type: "HTMLDivElement",
                props: {
                    y: -6,
                    x: 79,
                    width: 236,
                    var: "btnSelectServer",
                    innerHTML: "<font color='#FFF2C7'>绝密内测九9999服</font>  <font color='#32F3C3'>选服></font>",
                    height: 23
                }
            }, {
                type: "HBox",
                props: {
                    y: -7,
                    x: 195,
                    visible: !1,
                    var: "btnSelectServer2",
                    anchorX: .5
                },
                child: [{
                    type: "Label",
                    props: {
                        var: "selectServerLab1",
                        text: "绝密内测九9999服",
                        fontSize: 20,
                        font: "黑体",
                        color: "#FFF2C7",
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        var: "selectServerLab2",
                        text: "选服",
                        fontSize: 20,
                        font: "黑体",
                        color: "#FFF2C7",
                        align: "left"
                    }
                }]
            }, {
                type: "Image",
                props: {
                    y: 80,
                    x: 79,
                    var: "btnEnter",
                    stateNum: 2,
                    skin: "x5_login/denglu_btn_enter2.png"
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 20,
                        x: 41,
                        skin: "x5_login/img_enterGame.png"
                    }
                }]
            }]
        }, {
            type: "Box",
            props: {
                y: 467,
                x: 277,
                var: "boxAuditing"
            },
            child: [{
                type: "Image",
                props: {
                    y: 32,
                    x: 107,
                    var: "imgRound",
                    pivotY: 32,
                    pivotX: 32
                }
            }, {
                type: "Label",
                props: {
                    y: 66,
                    x: 0,
                    width: 215,
                    var: "txtProcess",
                    text: "加载中...1%",
                    strokeColor: "#000000",
                    stroke: 3,
                    height: 18,
                    fontSize: 18,
                    font: "黑体",
                    color: "#ffffff",
                    bold: !0,
                    align: "center"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 781,
                x: 155,
                var: "progress1"
            },
            child: [{
                type: "Image",
                props: {
                    width: 465,
                    skin: "x5_login/denglu_progress_1_1.png",
                    sizeGrid: "0,17,0,15"
                }
            }, {
                type: "Image",
                props: {
                    y: 3,
                    x: 9,
                    width: 446,
                    var: "p1",
                    skin: "x5_login/denglu_progress_1_2.png",
                    sizeGrid: "0,43,0,53"
                }
            }, {
                type: "Image",
                props: {
                    y: -15,
                    x: -4,
                    var: "p1Light",
                    skin: "x5_login/denglu_progress_1_3.png"
                }
            }, {
                type: "Label",
                props: {
                    y: 21,
                    x: 4,
                    width: 462,
                    var: "p1Label",
                    text: "首次加载会比较慢，请耐心等待",
                    strokeColor: "#000000",
                    stroke: 3,
                    height: 18,
                    fontSize: 18,
                    font: "黑体",
                    color: "#ffffff",
                    bold: !0,
                    align: "center"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 837,
                x: 155,
                var: "progress2"
            },
            child: [{
                type: "Image",
                props: {
                    width: 465,
                    skin: "x5_login/denglu_progress_1_1.png",
                    sizeGrid: "0,17,0,15"
                }
            }, {
                type: "Image",
                props: {
                    y: 3,
                    x: 9,
                    width: 446,
                    var: "p2",
                    skin: "x5_login/denglu_progress_1_2.png",
                    sizeGrid: "0,43,0,53"
                }
            }, {
                type: "Image",
                props: {
                    y: -15,
                    x: 240,
                    var: "p2Light",
                    skin: "x5_login/denglu_progress_1_3.png"
                }
            }, {
                type: "Label",
                props: {
                    y: 21,
                    x: 0,
                    width: 462,
                    var: "p2Label",
                    text: "游戏主程序 加载中...(60%)",
                    strokeColor: "#000000",
                    stroke: 3,
                    height: 18,
                    fontSize: 18,
                    font: "黑体",
                    color: "#ffffff",
                    bold: !0,
                    align: "center"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 976,
                x: 200,
                width: 380,
                var: "boxTip",
                height: 113
            },
            child: [{
                type: "Label",
                props: {
                    y: 44,
                    x: 104,
                    width: 181,
                    var: "tip_lab0",
                    text: "Powered By LayaAir Engine ",
                    height: 17,
                    fontSize: 14,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "left"
                }
            }, {
                type: "Label",
                props: {
                    y: 0,
                    x: 0,
                    width: 390,
                    var: "tip_lab1",
                    text: "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当",
                    height: 17,
                    fontSize: 14,
                    font: "黑体",
                    color: "#FFFFFF",
                    align: "left"
                }
            }, {
                type: "Label",
                props: {
                    y: 25,
                    x: 0,
                    width: 390,
                    var: "tip_lab2",
                    text: "适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活",
                    height: 17,
                    fontSize: 14,
                    font: "黑体",
                    color: "#FFFFFF",
                    align: "left"
                }
            }, {
                type: "Image",
                props: {
                    y: 64,
                    x: 129,
                    var: "img_logo",
                    skin: "x5_login/logo.png"
                }
            }, {
                type: "Label",
                props: {
                    y: 96,
                    x: -31,
                    width: 442,
                    var: "tip_lab3",
                    text: "为了您的健康，请合理控制游戏时间 本游戏适合16周岁以上的用户使用",
                    height: 17,
                    fontSize: 14,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "left"
                }
            }, {
                type: "Label",
                props: {
                    y: 119,
                    x: -31,
                    width: 442,
                    var: "tip_lab4",
                    text: "未成年人进行付费行为需征求监护人同意",
                    height: 17,
                    fontSize: 14,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: -25,
                    width: 390,
                    var: "tip_title",
                    text: "健康游戏忠告",
                    height: 17,
                    fontSize: 14,
                    font: "黑体",
                    color: "#FFFFFF",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 96,
                    x: -31,
                    width: 442,
                    var: "tip_lab5",
                    text: "本公司积极履行《网络游戏行业防沉迷自律公约》",
                    height: 17,
                    fontSize: 14,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "center"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 548,
                var: "btnBox"
            },
            child: [{
                type: "Image",
                props: {
                    x: 11,
                    var: "btnNotive",
                    stateNum: 1,
                    skin: "x5_login/denglu_btn_notice.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 75,
                    x: 1,
                    var: "btnUser",
                    stateNum: 1,
                    skin: "x5_login/denglu_btn_userPro.png"
                }
            }, {
                type: "Button",
                props: {
                    y: 149,
                    x: 1,
                    var: "btnCollect",
                    stateNum: 1,
                    skin: "x5_login/denglu_btn_privacyPolicy.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 220,
                    x: 11,
                    var: "btnScanCode",
                    stateNum: 1,
                    skin: "x5_login/denglu_btn_code.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 282,
                    x: 0,
                    var: "btnPassCode",
                    skin: "x5_login/denglu_btn_passCode.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 355,
                    x: 18,
                    var: "btnAge",
                    skin: "x5_login/ageTips.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 95,
                    x: 1,
                    var: "btnRefresh",
                    skin: "x5_login/denglu_btn_refresh.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 376,
                    x: 18,
                    width: 46,
                    var: "btnRightAge",
                    height: 60
                }
            }]
        }, {
            type: "Image",
            props: {
                y: 568,
                x: 416,
                var: "firstLoginImg",
                skin: "img/first_login_gift.png"
            }
        }, {
            type: "Box",
            props: {
                y: 835,
                x: 190,
                width: 380,
                var: "qualityBox",
                height: 119
            },
            child: [{
                type: "Label",
                props: {
                    y: 0,
                    x: 0,
                    width: 390,
                    name: "quaTxt0",
                    height: 17,
                    fontSize: 12,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 20,
                    x: 0,
                    width: 390,
                    name: "quaTxt1",
                    height: 17,
                    fontSize: 12,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 40,
                    x: 0,
                    width: 390,
                    name: "quaTxt2",
                    height: 17,
                    fontSize: 12,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 60,
                    x: 0,
                    width: 390,
                    name: "quaTxt3",
                    height: 17,
                    fontSize: 12,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 80,
                    x: 0,
                    width: 390,
                    name: "quaTxt4",
                    height: 17,
                    fontSize: 12,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 100,
                    x: 0,
                    width: 390,
                    name: "quaTxt5",
                    height: 17,
                    fontSize: 12,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 120,
                    x: 0,
                    width: 390,
                    underline: !0,
                    name: "quaTxt6",
                    height: 17,
                    fontSize: 12,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 140,
                    x: 0,
                    width: 390,
                    underline: !0,
                    name: "quaTxt7",
                    height: 17,
                    fontSize: 12,
                    font: "黑体",
                    color: "#bcc6cf",
                    align: "center"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 880,
                x: 178,
                width: 411,
                var: "checkBox",
                height: 35
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    var: "check_img",
                    skin: "x5_login/checkbox_1.png"
                }
            }, {
                type: "Image",
                props: {
                    var: "check_img1",
                    skin: "x5_login/checkbox_2.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 7,
                    x: 40,
                    var: "txt_img1",
                    skin: "x5_login/login_tip1.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 7,
                    x: 220,
                    var: "txt_img2",
                    skin: "x5_login/login_tip2.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 8,
                    x: 303,
                    var: "txt_img3",
                    skin: "x5_login/login_tip3.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 7,
                    x: 325,
                    var: "txt_img4",
                    skin: "x5_login/login_tip4.png"
                }
            }]
        }, {
            type: "Image",
            props: {
                y: 157,
                x: 256,
                var: "tipCon",
                stateNum: 1,
                skin: "x5_login/bg_notice4.png"
            },
            child: [{
                type: "Label",
                props: {
                    y: 10,
                    x: 0,
                    width: 258,
                    var: "con_txt",
                    text: "请仔细阅读并同意隐私政策",
                    strokeColor: "#000000",
                    height: 18,
                    fontSize: 18,
                    font: "黑体",
                    color: "#ff2c3b",
                    bold: !0,
                    align: "center"
                }
            }]
        }]
    },
    O(Ro, ["userProGIdArr", function() {
        return this.userProGIdArr = ["1003529", "1003202", "1005580", "1006518", "1002997", "1005793", "1005708", "1006772", "1006518"]
    }
    , "userProPidArr", function() {
        return this.userProPidArr = ["484", "442", "648", "644", "76", "655", "661", "669", "646", "663", "368", "367", "17", "11", "41", "393", "2", "5", "401", "542", "1", "623", "23", "602", "625", "564", "462", "464", "252", "598", "590", "472", "16", "617", "541", "4", "289", "631", "475", "157", "9", "498", "247", "182", "15", "12", "642", "196", "612", "558", "25", "474", "359", "27", "392", "20", "622", "421", "605", "461", "123", "607", "587", "615", "579", "372", "3", "6", "7", "8", "10", "13", "18", "66", "110", "351", "400", "410", "420", "435", "460", "463", "481", "543", "548", "616", "628", "632", "665"]
    }
    , "userProGIdArr_ad", function() {
        return this.userProGIdArr_ad = ["1006294", "1006291", "1009124", "1004882", "1004883", "1004884", "1004885", "1004989", "1004990", "1004991", "1004992", "1005083", "1005084", "1005085", "1005086", "1005302", "1006048", "1006049", "1006050", "1006051", "1006156", "1006168", "1006226", "1006424", "1006425", "1006426", "1006527", "1006680", "1006681", "1006682", "1006925", "1006926", "1006935", "1006951", "1006952", "1006953"]
    }
    , "userProPidArr_ad", function() {
        return this.userProPidArr_ad = ["41", "442", "484"]
    }
    , "userProGIdArr_hjy", function() {
        return this.userProGIdArr_hjy = ["1023301"]
    }
    , "userProPidArr_hjy", function() {
        return this.userProPidArr_hjy = ["797"]
    }
    , "userProPidArr_hjy2", function() {
        return this.userProPidArr_hjy2 = ["791", "790", "541", "636", "681", "716", "718", "735", "754", "753", "781", "797"]
    }
    , "userProPidArr_yl", function() {
        return this.userProPidArr_yl = ["344", "476", "481", "483", "623", "727", "728", "740", "742", "743"]
    }
    , "userProPidArr_xy", function() {
        return this.userProPidArr_xy = ["387", "443", "452", "548", "787"]
    }
    ]);
    var Lo, Ao = Ro;
    function Ro() {
        this.test = null,
        this.boxEnterServer = null,
        this.bgServer = null,
        this.imgServerState = null,
        this.btnSelectServer = null,
        this.btnSelectServer2 = null,
        this.selectServerLab1 = null,
        this.selectServerLab2 = null,
        this.btnEnter = null,
        this.boxAuditing = null,
        this.imgRound = null,
        this.txtProcess = null,
        this.progress1 = null,
        this.p1 = null,
        this.p1Light = null,
        this.p1Label = null,
        this.progress2 = null,
        this.p2 = null,
        this.p2Light = null,
        this.p2Label = null,
        this.boxTip = null,
        this.tip_lab0 = null,
        this.tip_lab1 = null,
        this.tip_lab2 = null,
        this.img_logo = null,
        this.tip_lab3 = null,
        this.tip_lab4 = null,
        this.tip_title = null,
        this.tip_lab5 = null,
        this.btnBox = null,
        this.btnNotive = null,
        this.btnUser = null,
        this.btnCollect = null,
        this.btnScanCode = null,
        this.btnPassCode = null,
        this.btnAge = null,
        this.btnRefresh = null,
        this.btnRightAge = null,
        this.firstLoginImg = null,
        this.qualityBox = null,
        this.checkBox = null,
        this.check_img = null,
        this.check_img1 = null,
        this.txt_img1 = null,
        this.txt_img2 = null,
        this.txt_img3 = null,
        this.txt_img4 = null,
        this.tipCon = null,
        this.con_txt = null,
        this.imgTop = null,
        this.imgMask = null,
        this.imgBottom = null,
        this.imgLogo = null,
        this.imgNewHelp = null,
        this.spinePanel = null,
        this.loginImg = null,
        this.spineOtherImg = null,
        this.spineBird = null,
        this.spineLeft = null,
        this.spineRight = null,
        this.state = null,
        this._img1_x = 476,
        this._img1_y = 131,
        this._img2_x = -60,
        this._img2_y = 410,
        this._spineRight_x = 420,
        this._spineRight_y = 590,
        this.targetAddX = .5,
        this.targetAddY = .5,
        this.curAddX = {
            current: .5,
            smoothTime: .2
        },
        this.curAddY = {
            current: .5,
            smoothTime: .2
        },
        this.begingLoadingTime = 0,
        this.lastP1Time = 0,
        this.helpHtmls = [d.getI18(10012), d.getI18(10013), d.getI18(10014), d.getI18(10015), d.getI18(10016), d.getI18(10017), d.getI18(10018), d.getI18(10019), d.getI18(10020), d.getI18(10021), d.getI18(10022), d.getI18(10023), d.getI18(10024), d.getI18(10025), d.getI18(10026), d.getI18(10027), d.getI18(10028), d.getI18(10029), d.getI18(10030), d.getI18(10031), d.getI18(10032), d.getI18(10033), d.getI18(10035)],
        this.partList = [.5, .7, .9, .95, .99],
        this.timeList = [1e4, 2e4, 4e4, 8e4, 2e5],
        this.filePer = [.05, .1, .5, .6, .7, .8, .9, 1],
        this.loadingHelp = d.getI18(10036),
        this.loadingString = null,
        this.lightAlphaArr = [1, .8, .6, .4, .2, 0, .3, .7],
        this.pLightOffsetX = -10,
        this._delayClickStatus = !1,
        this._showCheckBtn = !1,
        this.privacyVer = "2",
        this.scanCodePidArr = ["2", "4", "5", "7", "9", "11", "12", "15", "16", "17", "20", "23", "25", "27", "66", "76", "123", "157", "182", "196", "247", "252", "289", "291", "351", "359", "372", "392", "393", "401", "421", "438", "461", "462", "464", "472", "474", "475", "481", "498", "537", "538", "539", "540", "541", "542", "558", "564", "579", "587", "590", "598", "602", "605", "607", "612", "615", "617", "622", "623", "625", "631", "642", "646", "655", "661", "663", "669", "61", "634", "650", "665", "634", "481", "367", "368"],
        this.privacyPolicyGidArr = ["1003202", "1002997", "1005793", "1005708", "1006772", "1006518", "1005580", "1016251", "1016413", "1016636", "1023393"],
        this.privacyPolicyPidArr = ["367", "462", "602", "393", "464", "401", "475", "541", "368", "542", "612", "617", "590", "472", "598", "642", "631", "392", "558", "663", "564", "623", "498", "474", "196", "359", "622", "646", "421", "669", "661", "605", "291", "461", "587", "615", "1", "655", "665", "443", "7", "11", "17", "41", "5", "2", "23", "16", "4", "182", "9", "252", "625", "66", "15", "289", "157", "20", "247", "27", "12", "76", "25", "123", "644", "648", "442", "484", "565", "806", "805"],
        this.m_spineList = {},
        this.loadCompleteCount = 0,
        this.hasSpecSpine = !1,
        this.memTxtS = [],
        this.memSpS = [],
        this.isClick = !1,
        this.isTweenTxt = !1,
        this.isStart = !1,
        this.count = 0,
        this._musicUrl = null,
        this.curY = 0,
        this.loadingMask = null,
        Lo.call(this)
    }
    t(No, "app.X5LoginPcCodePanel", Bo = Gn),
    (T = No.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_login.json")]
    }
    ,
    T.getUIView = function() {
        return No.uiView
    }
    ,
    T.needAutoResize = function() {
        return !0
    }
    ,
    T.onFirstOpen = function() {}
    ,
    T.onOpen = function() {
        var t = this
          , e = (this.username.text = "",
        this);
        this.btnOk.on("click", this, function() {
            c.sendPostCodeInfo(t.username.text),
            e.close()
        }),
        this.btnCancel.on("click", this, function() {
            e.close()
        }),
        this.btnClose.on("click", this, function() {
            e.close()
        })
    }
    ,
    T.onClose = function() {}
    ,
    No.uiView = {
        type: "BaseBox",
        props: {
            y: 0,
            width: 768,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                y: 249,
                x: 133,
                width: 516,
                skin: "x5_login/bg_23.png",
                sizeGrid: "12,10,10,11",
                height: 388
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    skin: "x5_login/bg_title.png",
                    centerX: 0
                }
            }, {
                type: "Image",
                props: {
                    y: 45,
                    x: 11,
                    width: 494,
                    skin: "x5_login/bg_21.png",
                    sizeGrid: "5,5,5,5",
                    height: 235
                }
            }, {
                type: "Label",
                props: {
                    y: 6,
                    width: 400,
                    text: d.getI18(30037),
                    height: 27,
                    fontSize: 24,
                    font: "黑体",
                    color: "#2A3940",
                    centerX: 0,
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 158,
                    x: 99,
                    text: d.getI18(30038),
                    fontSize: 24,
                    font: "黑体",
                    color: "#010101"
                },
                child: [{
                    type: "Image",
                    props: {
                        y: -5,
                        x: 85,
                        width: 212,
                        visible: !0,
                        skin: "x5_login/bg_19.png",
                        sizeGrid: "8,8,8,8",
                        height: 36
                    },
                    child: [{
                        type: "TextInput",
                        props: {
                            y: -2,
                            x: -30,
                            width: 272,
                            var: "username",
                            promptColor: "#F7F7F7",
                            prompt: d.getI18(30039),
                            maxChars: 12,
                            height: 40,
                            fontSize: 24,
                            font: "黑体",
                            color: "#F7F7F7",
                            align: "center"
                        }
                    }]
                }]
            }, {
                type: "Button",
                props: {
                    y: 298,
                    x: 300,
                    var: "btnOk",
                    stateNum: 2,
                    skin: "x5_login/gamebutton_blue.png",
                    labelSize: 22
                },
                child: [{
                    type: "Label",
                    props: {
                        y: 16,
                        x: 8,
                        width: 131,
                        text: d.getI18(30040),
                        strokeColor: "#2A3940",
                        height: 27,
                        fontSize: 24,
                        font: "黑体",
                        color: "#48565d",
                        bold: !0,
                        align: "center"
                    }
                }]
            }, {
                type: "Button",
                props: {
                    y: 298,
                    x: 65,
                    var: "btnCancel",
                    stateNum: 2,
                    skin: "x5_login/gamebutton_green.png",
                    labelSize: 22
                },
                child: [{
                    type: "Label",
                    props: {
                        y: 16,
                        x: 8,
                        width: 131,
                        text: d.getI18(10072),
                        strokeColor: "#2A3940",
                        height: 27,
                        fontSize: 24,
                        font: "黑体",
                        color: "#48565d",
                        bold: !0,
                        align: "center"
                    }
                }]
            }, {
                type: "Button",
                props: {
                    y: 1,
                    x: 484,
                    var: "btnClose",
                    stateNum: 1,
                    skin: "x5_login/btn_close.png"
                }
            }]
        }]
    };
    var Bo, Mo = No;
    function No() {
        this.username = null,
        this.btnOk = null,
        this.btnCancel = null,
        this.btnClose = null,
        Bo.call(this)
    }
    t(Oo, "app.X5LoginSelectServer", Do = Gn),
    (n = Oo.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_login.json")]
    }
    ,
    n.getUIView = function() {
        return Oo.uiView
    }
    ,
    n.needAutoResize = function() {
        return !0
    }
    ,
    n.onFirstOpen = function() {
        var t = this;
        this.btnClose.on("click", this, function() {
            t.close()
        }),
        this.imgMask.on("click", this, function() {
            t.close()
        }),
        this.areas.trueCellHeight = 60,
        this.areas.renderHandler = b.create(this, this.onRenderArea, null, !1),
        this.servers.renderHandler = b.create(this, this.onRenderServer, null, !1),
        this.areas.vScrollBarSkin = "",
        this.servers.vScrollBarSkin = ""
    }
    ,
    n.onOpen = function() {
        this.serverDic = {},
        this.zoneDic = {},
        this.zoneSort = {};
        for (var t = 0, e = c.serverData.servers.length; t < e; t++) {
            var i = c.serverData.servers[t];
            this.serverDic[i.serverId] = i,
            this.zoneDic[i.zoneName] ? this.zoneDic[i.zoneName].push(i.serverId) : (this.zoneDic[i.zoneName] = [i.serverId],
            this.zoneSort[i.zoneName] = i.zoneNo)
        }
        this.selArea(0),
        app.multiZone.BackPressedController && xi.instance.registerCloseFunction(this, this.close),
        g.isOppoLargeCam && (this.imgMask.x = -p.ins.m_loginRoot.x,
        this.imgMask.width = 1920)
    }
    ,
    n.onClose = function() {
        app.multiZone.BackPressedController && xi.instance.removeCloseFunction(this)
    }
    ,
    n.selArea = function(t) {
        var e, i = this, s = (this.curArea = t,
        []);
        for (e in this.zoneDic)
            s.push(e);
        s.sort(function(t, e) {
            return i.zoneSort[t] - i.zoneSort[e]
        });
        for (var n = [{
            label: d.getI18(10004)
        }], o = 0, o = 0; o < s.length; o++)
            n.push({
                label: s[o],
                zoneNo: this.zoneSort[s[o]]
            });
        var a = (this.areas.array = n)[t].label
          , r = [];
        if (a == d.getI18(10004))
            for (o = 0; o < c.serverData.loginedServerList.length; o++) {
                var l, h = c.serverData.loginedServerList[o];
                this.serverDic[h] ? r.push(this.serverDic[h]) : (l = c.getRoleServerName(h)) && r.push({
                    name: l,
                    serverId: h
                })
            }
        else
            for (o = 0; o < this.zoneDic[a].length; o++)
                if (h = this.zoneDic[a][o],
                this.serverDic[h]) {
                    if ("zh_tw" == g.Language) {
                        if (c.importServerData && 0 == c.importServerData.isolduser && (1 <= h && h <= 5 || 10 == h))
                            continue
                    } else if (c.importServerData && 0 == c.importServerData.isolduser && (70001 == h || 40001 == h))
                        continue;
                    r.push(this.serverDic[h])
                }
        r.sort(function(t, e) {
            return e.autoOpenTime == t.autoOpenTime ? e.serverId - t.serverId : e.autoOpenTime - t.autoOpenTime
        }),
        this.renderCount = 0,
        this.selTime = w.now(),
        this.servers.array = r
    }
    ,
    n.onRenderArea = function(t, e) {
        var i, s, n, o = this;
        !this.areas.array || e < 0 || e >= this.areas.array.length || (t.offAll("click"),
        t.on("click", this, function(t) {
            o.selArea(e)
        }),
        i = t.getChildAt(0),
        s = t.getChildAt(1),
        n = t.getChildAt(2),
        t.getChildAt(3).text = this.areas.array[e].label,
        n.visible = g.isGoldServer || g.isGoldServerByZone(this.areas.array[e].zoneNo),
        this.curArea == e ? (i.visible = !1,
        s.visible = !0) : (i.visible = !0,
        s.visible = !1))
    }
    ,
    n.onRenderServer = function(i, s) {
        var t, e, n, o, a, r, l, h = this;
        !this.servers.array || s < 0 || s >= this.servers.array.length || (++this.renderCount,
        i.offAll("click"),
        i.on("click", this, function(t) {
            var e = i.dataSource;
            c.serverData && -1 == c.serverData.loginedServerList.indexOf(e.serverId) && 7 == e.state ? p.ins.showMessageBox(d.getI18(20050), d.getI18(20042), null, null, null) : (this.close(),
            c.importServerData && 0 == c.importServerData.isolduser && 70001 == e.serverId && c.sendError("test scroll count " + h.renderCount + " index:" + s + " scrollTime:" + (w.now() - h.selTime)),
            c.setSelectServer(e))
        }),
        l = i.dataSource,
        r = i.getChildAt(1),
        t = i.getChildAt(2),
        e = i.getChildAt(3),
        n = i.getChildAt(4),
        r.visible = g.isGoldServer || g.isGoldServerByZone(l.zoneNo),
        t.text = l ? l.name + "" : "",
        l && null != l.state && 1 != l.state ? (e.visible = !0,
        n.visible = !0,
        e.skin = "x5_login/denglu_icon_point_" + l.state + ".png",
        n.skin = "x5_login/denglu_word_" + l.state + ".png") : (e.visible = !1,
        n.visible = !1),
        r = 0 == this.curArea,
        o = i.getChildAt(5),
        a = i.getChildAt(6),
        o.visible = r,
        (a.visible = r) ? (r = c.getRoleName(l.serverId),
        l = this.getLevelName(c.getRoleLevel(l.serverId)),
        o.text = r,
        a.text = l,
        t.pos(21, e.visible ? 44 : 31),
        e.pos(21, 15),
        n.pos(50, 15)) : (t.pos(105, 31),
        e.pos(17, 31),
        n.pos(46, 31)))
    }
    ,
    n.getLevelName = function(t) {
        if (0 != t)
            for (var e = this.roleLvMap, i = 0, s = e.length; i < s; i++) {
                var n = e[i]
                  , o = n[1];
                if (o) {
                    if (o[0] <= t && o[1] >= t)
                        return n[0].replace("{0}", t - n[2])
                } else
                    console.log("这里的配置有问题", i)
            }
        return ""
    }
    ,
    Oo.uiView = {
        type: "BaseBox",
        props: {
            width: 768,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                y: -100,
                x: -100,
                width: 968,
                var: "imgMask",
                skin: "x5_login/bg_chat.png",
                sizeGrid: "2,2,2,2",
                height: 1224
            }
        }, {
            type: "Image",
            props: {
                y: 142,
                x: 109,
                width: 550,
                var: "boxCon",
                skin: "x5_login/bg_23.png",
                sizeGrid: "10,13,9,11",
                mouseEnabled: !0,
                height: 760,
                alpha: 1
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 130,
                    var: "bgTitle",
                    skin: "x5_login/bg_title.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 41,
                    x: 7,
                    width: 536,
                    var: "bg1",
                    skin: "x5_login/bg_21.png",
                    sizeGrid: "10,10,10,10",
                    height: 697
                }
            }, {
                type: "Button",
                props: {
                    y: 5,
                    x: 514,
                    var: "btnClose",
                    stateNum: 1,
                    skin: "x5_login/btn_close.png"
                }
            }, {
                type: "Label",
                props: {
                    y: 4,
                    x: 185,
                    width: 182,
                    text: "选择区服",
                    height: 32,
                    fontSize: 24,
                    font: "黑体",
                    color: "#0A3940",
                    align: "center"
                }
            }, {
                type: "Image",
                props: {
                    y: 58,
                    x: 189,
                    skin: "x5_login/denglu_line_1.png",
                    height: 686
                }
            }, {
                type: "Image",
                props: {
                    y: 803,
                    x: 113,
                    var: "imgBack",
                    skin: "x5_login/word_clickReturn.png",
                    centerX: 0
                }
            }, {
                type: "List",
                props: {
                    y: 43,
                    x: 8,
                    width: 181,
                    var: "areas",
                    height: 691
                },
                child: [{
                    type: "Box",
                    props: {
                        y: 4,
                        x: 2,
                        renderType: "render"
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 3,
                            skin: "x5_login/denglu_bg_5.png"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            skin: "x5_login/denglu_bg_6.png"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: -4,
                            x: -2,
                            skin: "x5_login/denglu_goldServer_selectImg.png"
                        }
                    }, {
                        type: "Label",
                        props: {
                            y: 20,
                            x: 2,
                            width: 174,
                            text: "公测4001-2000服",
                            strokeColor: "",
                            stroke: 0,
                            height: 19,
                            fontSize: 20,
                            font: "黑体",
                            color: "#225154",
                            align: "center"
                        }
                    }]
                }]
            }, {
                type: "List",
                props: {
                    y: 42,
                    x: 191,
                    width: 352,
                    var: "servers",
                    height: 690
                },
                child: [{
                    type: "Box",
                    props: {
                        renderType: "render"
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 352,
                            skin: "x5_login/bg_33.png",
                            sizeGrid: "27,21,15,15",
                            renderType: "render",
                            height: 82
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 4,
                            x: 4,
                            skin: "x5_login/denglu_goldServer_select.png"
                        }
                    }, {
                        type: "Label",
                        props: {
                            y: 31,
                            x: 106,
                            width: 185,
                            text: "公测4001服",
                            strokeColor: "",
                            stroke: 0,
                            height: 19,
                            fontSize: 20,
                            font: "黑体",
                            color: "#2A3940",
                            align: "left"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 31,
                            x: 17,
                            skin: "x5_login/denglu_icon_point_3.png"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 31,
                            x: 46,
                            width: 35,
                            skin: "x5_login/denglu_word_3.png",
                            height: 20
                        }
                    }, {
                        type: "Label",
                        props: {
                            y: 18,
                            x: 167,
                            width: 180,
                            text: "等级",
                            strokeColor: "",
                            stroke: 0,
                            height: 19,
                            fontSize: 20,
                            font: "黑体",
                            color: "#2A3940",
                            align: "left"
                        }
                    }, {
                        type: "Label",
                        props: {
                            y: 44,
                            x: 167,
                            width: 178,
                            text: "等级",
                            strokeColor: "",
                            stroke: 0,
                            height: 19,
                            fontSize: 20,
                            font: "黑体",
                            color: "#2A3940",
                            align: "left"
                        }
                    }]
                }]
            }]
        }]
    };
    var Do, Eo = Oo;
    function Oo() {
        this.imgMask = null,
        this.btnClose = null,
        this.areas = null,
        this.servers = null,
        this.boxCon = null,
        this.curArea = 0,
        this.serverDic = null,
        this.zoneDic = null,
        this.zoneSort = null,
        this.renderCount = 0,
        this.selTime = 0,
        this.roleLvMap = [["{0}级", [1, 40], 0], ["大魂师{0}级", [41, 80], 40], ["魂尊{0}级\t", [81, 170], 80], ["魂宗{0}级", [171, 260], 170], ["魂王{0}级", [261, 350], 260], ["魂帝{0}级", [351, 440], 350], ["魂圣{0}级", [441, 530], 440], ["魂斗罗{0}级", [531, 620], 530], ["封号斗罗{0}级", [621, 714], 620], ["封号斗罗{0}级", [715, 718], 620], ["封号斗罗{0}级", [719, 719], 620], ["半神前期{0}阶\t", [721, 750], 720], ["半神中期{0}阶", [751, 780], 750], ["半神后期{0}阶", [781, 810], 780], ["神官前期{0}阶", [811, 840], 810], ["神官中期{0}阶", [841, 870], 840], ["神官后期{0}阶", [871, 900], 870], ["三级神祇前期{0}阶", [901, 930], 900], ["三级神祇中期{0}阶", [931, 960], 930], ["三级神祇后期{0}阶\t", [961, 990], 960], ["二级神祇前期{0}阶", [991, 1020], 990], ["二级神祇中期{0}阶", [1021, 1050], 1020], ["二级神祇后期{0}阶", [1051, 1080], 1050], ["一级神祇前期{0}阶", [1081, 1110], 1080], ["一级神祇中期{0}阶", [1111, 1140], 1110], ["一级神祇后期{0}阶", [1141, 1170], 1140]],
        Do.call(this)
    }
    t(Go, "app.X5LoginTalkPanel", Fo = Gn),
    (i = Go.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_login.json")]
    }
    ,
    i.getUIView = function() {
        return Go.uiView
    }
    ,
    i.onInit = function() {}
    ,
    i.onFirstOpen = function() {
        this.bg_img.skin = d.getImgPath("img/talkBg.jpg"),
        this.head_img.skin = d.getImgPath("img/talkRole.png")
    }
    ,
    i.onOpen = function() {
        this._talkPool || (this._talkPool = []),
        this._index = -1,
        this._layoutY = -1,
        this.content_box.y = 450,
        this.startTalk()
    }
    ,
    i.onClose = function() {
        for (x.timer.clear(this, this.setTween),
        m.clearAll(this.content_box); 0 < this.content_box.numChildren; )
            this._talkPool.push(this.content_box.removeChildAt(this.content_box.numChildren - 1))
    }
    ,
    i.onResize = function(t, e, i, s) {
        this.bg_img.x = t,
        this.bg_img.y = i,
        this.bg_img.width = e - t,
        this.bg_img.height = s - i,
        this.head_img.x = 439 + t,
        this.head_img.y = 582 + i,
        this.content_box.x = e - 400 - 10,
        this.content_box.y = this.content_box.y + i
    }
    ,
    i.startTalk = function() {
        this.addTalk(),
        this.addLoop()
    }
    ,
    i.addTalk = function() {
        this._layoutY++;
        var t = (t = this._talkPool.pop()) || new zn
          , e = Math.floor(Math.random() * this.talkHtmls.length);
        e == this._index ? this._index = e + 1 : this._index = e,
        this._index >= this.talkHtmls.length && (this._index = 0),
        t.updateTalk(this.talkHtmls[this._index]),
        t.y = 180 * this._layoutY,
        this.content_box.addChild(t)
    }
    ,
    i.addLoop = function() {
        x.timer.loop(3600, this, this.setTween)
    }
    ,
    i.setTween = function() {
        this.addTalk(),
        m.to(this.content_box, {
            y: this.content_box.y - 180
        }, 560, Rt.circOut)
    }
    ,
    Go.preLoad = function(t) {
        x.loader.load([d.getImgPath("img/talkBg.jpg"), d.getImgPath("img/talkRole.png")], b.create(null, function() {
            t.run()
        }, null), null, "image")
    }
    ,
    Go.uiView = {
        type: "BaseBox",
        props: {
            width: 576,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                var: "bg_img"
            }
        }, {
            type: "Image",
            props: {
                y: 582,
                x: 439,
                width: 450,
                var: "head_img",
                scaleX: -1,
                height: 450
            }
        }, {
            type: "Box",
            props: {
                y: 460,
                x: 269,
                var: "content_box"
            }
        }]
    };
    var Fo, Ho = Go;
    function Go() {
        this.bg_img = null,
        this.head_img = null,
        this.content_box = null,
        this._talkPool = null,
        this._index = 0,
        this._layoutY = 0,
        this.talkHtmls = [d.getI18(20037), d.getI18(20038), d.getI18(20028), d.getI18(20029), d.getI18(20030), d.getI18(20031), d.getI18(20032), d.getI18(20033), d.getI18(20034), d.getI18(20035), d.getI18(20036)],
        Fo.call(this)
    }
    t(zo, "app.X5LoginWaitPanel", Uo = Gn),
    (s = zo.prototype).getUIView = function() {
        return zo.uiView
    }
    ,
    s.needAutoResize = function() {
        return !0
    }
    ,
    s.onFirstOpen = function() {
        this.btnEnter.visible = !1,
        this.btnEnter.on("click", this, function() {}),
        this.imgMask.on("click", this, function() {})
    }
    ,
    s.onOpen = function() {
        x.timer.clear(this, this.loopTime),
        this.loopTime()
    }
    ,
    s.showTime = function(t) {
        this.leftTime = t
    }
    ,
    s.loopTime = function() {
        this.tipsLabel.text = d.getI18(40050, [this.leftTime]),
        console.log("排队剩余时间:" + this.leftTime + "秒"),
        this.leftTime <= 0 && (this.tipsLabel.text = ""),
        this.leftTime--,
        x.timer.once(1e3, this, this.loopTime)
    }
    ,
    s.onClose = function() {
        x.timer.clear(this, this.loopTime)
    }
    ,
    zo.uiView = {
        type: "View",
        props: {
            width: 768,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                y: -100,
                x: -100,
                width: 968,
                var: "imgMask",
                skin: "x5_login/bg_chat.png",
                sizeGrid: "2,2,2,2",
                height: 1224
            }
        }, {
            type: "Box",
            props: {
                y: 249,
                x: 144,
                width: 480,
                mouseThrough: !1,
                mouseEnabled: !0,
                height: 322
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 480,
                    skin: "x5_login/bg_23.png",
                    sizeGrid: "4,4,6,1",
                    mouseEnabled: !0,
                    height: 321
                }
            }, {
                type: "Image",
                props: {
                    y: 0,
                    x: 94,
                    skin: "x5_login/bg_title.png"
                }
            }, {
                type: "Image",
                props: {
                    y: 45,
                    x: 11,
                    width: 458,
                    skin: "x5_login/bg_21.png",
                    sizeGrid: "7,7,9,5",
                    height: 236
                }
            }, {
                type: "Label",
                props: {
                    y: 3,
                    x: 130,
                    width: 220,
                    text: "通 知",
                    height: 27,
                    fontSize: 24,
                    font: "黑体",
                    color: "#2A3940",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 109,
                    x: 22,
                    width: 440,
                    text: "当前排队人数较多",
                    height: 27,
                    fontSize: 24,
                    font: "黑体",
                    color: "#2A3940",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 146,
                    x: 22,
                    width: 440,
                    text: "请耐心等待",
                    height: 27,
                    fontSize: 24,
                    font: "黑体",
                    color: "#2A3940",
                    align: "center"
                }
            }, {
                type: "Label",
                props: {
                    y: 183,
                    x: 22,
                    width: 440,
                    var: "tipsLabel",
                    text: "预计等待时间:60秒",
                    height: 27,
                    fontSize: 24,
                    font: "黑体",
                    color: "#2A3940",
                    align: "center"
                }
            }, {
                type: "Button",
                props: {
                    y: 242,
                    x: 166,
                    width: 148,
                    var: "btnEnter",
                    stateNum: 2,
                    skin: "x5_login/gamebutton_blue.png"
                },
                child: [{
                    type: "Label",
                    props: {
                        y: 17,
                        x: -36,
                        width: 220,
                        text: "登 录",
                        height: 27,
                        fontSize: 24,
                        font: "黑体",
                        color: "#2A3940",
                        align: "center"
                    }
                }]
            }]
        }]
    };
    var Uo, Vo = zo;
    function zo() {
        this.imgMask = null,
        this.tipsLabel = null,
        this.btnEnter = null,
        this.leftTime = NaN,
        Uo.call(this)
    }
    t(D, "app.X5WuhunSelectPanel", Xo = Gn),
    (P = D.prototype).getAltas = function() {
        return [d.getImgPath("img/x5_wuhunWx.json")]
    }
    ,
    P.getUIView = function() {
        return D.uiView
    }
    ,
    P.needAutoResize = function() {
        return !1
    }
    ,
    P.onFirstOpen = function() {
        var t = this;
        this.bgAni = new Fs,
        this.bgAni.once("complete", this, function() {
            t.bgAni.play(),
            t.boxBg.addChild(t.bgAni)
        }),
        this.bgAni.loadAni("art/res/spine/wuhunchoose/whxz_bg.sk"),
        this.bgAni.pos(0, 240),
        this._wuhunSelectItemPool || (this._wuhunSelectItemPool = []),
        this.addSoulListPoints(),
        this._soulScrollList = new zt,
        this._soulScrollList.init(this.soulListScrollArea, this.soulListPoints, this.soulListBack, this.soulListFront, jn, !0)
    }
    ,
    P.onResize = function(t, e, i, s) {
        this.height = I.viewHeight,
        this.centerX = 0,
        this.centerY = 0
    }
    ,
    P.onOpen = function() {
        this.boxTouch.on("mousedown", this, this.onTopStart),
        this.btnOk.on("click", this, this.onChoose),
        this.btnLeft.on("click", this, this.onSideBtn),
        this.btnRight.on("click", this, this.onSideBtn),
        this.btnBack.on("click", this, this.close),
        this.btnBack.visible = !1,
        this.txtInfo.style.fontSize = 22,
        this.txtInfo.style.leading = 6,
        this.txtInfo.style.color = "#BCC6CF",
        this.txtInfo.style.align = "center",
        this.txtUnable.style.fontSize = 22,
        this.txtUnable.style.color = "#6F767C",
        this.txtUnable.style.align = "center",
        this.txtUnable.style.wordWrap = "true",
        this.txtTip.style.fontSize = 22,
        this.txtTip.style.color = "#FFAD39",
        this.txtTip.style.align = "center",
        this.txtTip.style.wordWrap = "true",
        this.getBattleSoulChooseData(),
        x.timer.once(1e3, Vi.ins, Vi.ins.StartLoadGame),
        c.send("3703")
    }
    ,
    P.getBattleSoulChooseData = function() {
        var t;
        c.battleSoulChooseData || (t = d.getImgPath(t = "img/battleSoulChoose.json"),
        w.antiMiniGame && (t = H.formatURL(t)),
        this.getBattleSoulChoose(t))
    }
    ,
    P.getBattleSoulChoose = function(t) {
        (D._httpRequest1 = D._httpRequest1 ? D._httpRequest1 : new G).on("complete", this, this.battleSoulChooseOnLoad),
        D._httpRequest1.on("error", this, this.battleSoulChooseOnError),
        p.useHttps && (t = t.replace(/^http\:\/\//i, "https://")),
        D._httpRequest1.send(t)
    }
    ,
    P.battleSoulChooseOnLoad = function(t) {
        c.battleSoulChooseData = t,
        this.setData()
    }
    ,
    P.battleSoulChooseOnError = function(t) {
        c.battleSoulChooseData = ""
    }
    ,
    P.addSoulListPoints = function() {
        for (var t = 0, e = this.soulListPointCellPos.length; t < e; t++) {
            var i = (i = this._wuhunSelectItemPool.pop()) || new jn
              , s = this.soulListPointCellPos[t];
            i.name = s.name,
            i.x = s.posX,
            i.y = s.posY,
            this.soulListPoints.addChild(i)
        }
    }
    ,
    P.onClose = function() {
        for (this.boxTouch.off("mousedown", this, this.onTopStart),
        this.btnOk.off("click", this, this.onChoose),
        this.btnLeft.off("click", this, this.onSideBtn),
        this.btnRight.off("click", this, this.onSideBtn),
        this.btnBack.off("click", this, this.close),
        x.loader.cancelLoadByUrl("res/x5_unpack/wuhunSelectBg.jpg"),
        x.loader.cancelLoadByUrl("res/x5_unpack/wuhunSelectLight.jpg"),
        x.loader.cancelLoadByUrl("res/x5_unpack/wuhunTitleBg.jpg"),
        this.soulAni && (x.loader.cancelLoadByUrl(this.soulAni.skUrl),
        this.soulAni.clear(),
        this.boxSpine.removeChild(this.soulAni),
        this.soulAni.stop(),
        this.soulAni = null),
        this.roleAni && (x.loader.cancelLoadByUrl(this.roleAni.skUrl),
        this.roleAni.clear(),
        this.boxRole.removeChild(this.roleAni),
        this.roleAni.stop(),
        this.roleAni = null),
        this.bgAni && (x.loader.cancelLoadByUrl(this.bgAni.skUrl),
        this.bgAni.clear(),
        this.bgAni.removeSelf(),
        this.bgAni.stop(),
        this.bgAni = null); 0 < this.soulListPoints.numChildren; )
            this._wuhunSelectItemPool.push(this.soulListPoints.removeChildAt(this.soulListPoints.numChildren - 1));
        this._soulScrollList = null,
        c.send("37041")
    }
    ,
    P.setData = function() {
        var t, e = JSON.parse(c.battleSoulChooseData);
        for (t in this.protoData = [],
        e)
            this.protoData.push(e[t]);
        p.ins.wuhunSelectPlayerId && (this.btnBack.visible = this.imgTopTitle.visible = !1,
        p.ins.wuhunSelectTargetIndex = 1,
        this.protoData = this.getBattleSoulWX(c.sex, p.ins.wuhunSelectTargetIndex),
        this.protoData = this.randomChoose(this.protoData),
        this.txtTip.style.color = "#FFAD39",
        this.txtTip.innerHTML = d.getI18(40008, [D.INDEX_NAME[0]]),
        this.txtTip.y = 49),
        this.btnBack.visible = !1,
        this.soulListFront.removeChildren(),
        this.soulListBack.removeChildren(),
        this._soulScrollList.array = this.protoData,
        this.soulListScrollArea.on("EVENT_MOVE_COMPLETE", this, this.update),
        this.update()
    }
    ,
    P.randomChoose = function(t) {
        for (var e = [], i = 0, s = this.protoData.length; i < s; i++)
            D.checkCfgByType(this.protoData[i], c.sex, p.ins.wuhunSelectTargetIndex, !0) && e.push(i);
        var n, o, a = 0;
        return 4 == (a = 0 < e.length ? e[Math.floor(e.length * Math.random())] : Math.floor(this.protoData.length * Math.random())) ? this.protoData : (n = 0,
        n = 5 <= this.protoData.length && 5 <= a ? a - 4 : a == (o = 5 % this.protoData.length) - 1 ? 0 : a - (o - 1),
        a = this.protoData.slice(n),
        o = this.protoData.slice(0, n),
        a.concat(o))
    }
    ,
    P.focusToItem = function(t) {
        this._soulScrollList.setPosSmooth(t._splineIdx, .5)
    }
    ,
    P.update = function() {
        if (this.visible && (this.curItem = this._soulScrollList.centerItem,
        this.curItem)) {
            for (var t, e, i, s, n, o, a = this._soulScrollList.getUseIngItemArr(), r = 0; r < a.length; r++)
                a[r] != this.curItem && a[r].setSelect(!1);
            this.curItem.setSelect(!0),
            this.txtInfo.innerHTML = this.curItem.cfg.des,
            this.imgTitle.skin = "x5_wuhunWx/" + this.curItem.cfg.nameImg + ".png",
            this.roleAni = this.roleAni || new Fs,
            this.curItem.cfg.npcspineId && "" != this.curItem.cfg.npcspineId && (e = (t = this.curItem.cfg.npcspineId.split(","))[0],
            i = D.DEBUG ? D.DEBUG_ROLE_X : parseInt(t[1]),
            s = D.DEBUG ? D.DEBUG_ROLE_Y : parseInt(t[2]),
            n = (D.DEBUG ? D.DEBUG_ROLE_SCALE : parseInt(t[3])) / 1e4,
            this.roleAni.skUrl != (o = "art/res/spine/wuhunchoose/" + e + ".sk") && (this.roleAni.clear(),
            this.roleAni.once("complete", this, this.loadBgOver),
            this.roleAni.loadAni(o)),
            this.roleAni.scale(n, n),
            this.roleAni.pos(i, s)),
            this.curItem.cfg.whspineId && "" != this.curItem.cfg.whspineId ? (this.soulAni = this.soulAni || new Fs,
            e = (t = this.curItem.cfg.whspineId.split(","))[0],
            i = D.DEBUG ? D.DEBUG_SOUL_X : parseInt(t[1]),
            s = D.DEBUG ? D.DEBUG_SOUL_Y : parseInt(t[2]),
            n = (D.DEBUG ? D.DEBUG_SOUL_SCALE : parseInt(t[3])) / 1e4,
            this.soulAni.skUrl != (o = "art/res/spine/wuhunchoose/" + e + ".sk") && (this.soulAni.clear(),
            this.soulAni.pos(i, s),
            this.soulAni.once("complete", this, this.loadOver),
            this.soulAni.loadAni(o)),
            this.soulAni.scale(n, n),
            this.soulAni.pos(i, s)) : this.soulAni && (this.soulAni.clear(),
            this.boxSpine.removeChild(this.soulAni),
            this.soulAni.stop(),
            this.soulAni = null),
            p.ins.wuhunSelectPlayerId && D.checkCfgAble(this.curItem.cfg, c.sex, p.ins.wuhunSelectTargetIndex) ? (this.btnOk.visible = !0,
            this.txtUnable.visible = !1,
            this.btnOk.gray = !1) : (this.btnOk.visible = !1,
            this.txtUnable.visible = !0,
            this.txtUnable.innerHTML = D.getUnableDesc(this.curItem.cfg, p.ins.wuhunSelectTargetIndex))
        }
    }
    ,
    P.loadOver = function() {
        this.soulAni && (this.soulAni.play(),
        this.boxRole.addChild(this.soulAni))
    }
    ,
    P.loadBgOver = function() {
        this.roleAni && (this.roleAni.play(),
        this.boxSpine.addChild(this.roleAni))
    }
    ,
    P.onTopStart = function() {
        this.beginTopX = x.stage.mouseX,
        this.boxTouch.off("mouseup", this, this.onTopStart),
        x.stage.on("mouseup", this, this.onTopStop),
        x.stage.on("mouseout", this, this.onTopStop)
    }
    ,
    P.onTopStop = function() {
        this.boxTouch.on("mouseup", this, this.onTopStart),
        x.stage.off("mouseup", this, this.onTopStop),
        x.stage.off("mouseout", this, this.onTopStop);
        var t = x.stage.mouseX - this.beginTopX;
        100 < Math.abs(t) && this.onForward(t < 0 ? 1 : 2)
    }
    ,
    P.onSideBtn = function(t) {
        this.onForward(t.currentTarget == this.btnLeft ? 1 : 2)
    }
    ,
    P.onForward = function(t) {
        var e = this._soulScrollList.getCurPos();
        this._soulScrollList.setPosSmooth(1 == t ? e[0] - 1 : e[0] + 1, e[1])
    }
    ,
    P.onChoose = function() {
        var t, e;
        this.curItem && (a.setItem("wuhunSelectTargetType", this.curItem.cfg.type),
        p.ins.wuhunSelectTargetType = this.curItem.cfg.type,
        t = 0,
        13 == p.ins.wuhunSelectTargetType && 1 != A.ins.playerInfo.sex && (t = 1),
        22 == p.ins.wuhunSelectTargetType && 2 != A.ins.playerInfo.sex && (t = 2),
        e = ve.ins.cityScene.getRole(A.ins.playerInfo.personId),
        0 < t && e && e.info && (e.info.sex = t,
        e.loadRoleRes()),
        this._completeHandler && (this._completeHandler.run(),
        this._completeHandler = null),
        c.send("32"),
        c.send("3704"),
        this.close())
    }
    ,
    P.getBattleSoulWX = function(t, e) {
        var i, s = [], n = JSON.parse(c.battleSoulChooseData);
        for (i in n) {
            var o = n[i];
            D.checkCfgByType(o, t, e) && s.push(o)
        }
        return s = s.sort(this.sortByIndex)
    }
    ,
    P.sortByIndex = function(t, e) {
        return t.sort - e.sort
    }
    ,
    e(0, P, "completeHandler", Xo.prototype._$get_completeHandler, function(t) {
        this._completeHandler = t
    }),
    D.checkCfgByType = function(t, e, i, s) {
        void 0 === i && (i = 0),
        void 0 === s && (s = !1);
        var n = !1;
        return 0 == t.manSelect.length && 0 == t.womanSelect.length ? n = !1 : s ? 0 <= t.wxFirst.indexOf(i) && (n = !0) : (5 != i || 1 == e && 0 <= t.manSelect.indexOf(i) || 2 == e && 0 <= t.womanSelect.indexOf(i)) && (n = !0),
        n
    }
    ,
    D.checkCfgAble = function(t, e, i) {
        var s = !1;
        return s = D.checkCfgByType(t, e, i = void 0 === i ? 0 : i) && (1 == e && 0 <= t.manSelect.indexOf(i) || 2 == e && 0 <= t.womanSelect.indexOf(i)) ? !0 : s
    }
    ,
    D.getUnableDesc = function(t, e) {
        var i, s = 0, n = 0;
        if (0 < t.manSelect.length)
            for (var o = 0; o < t.manSelect.length; o++)
                if (t.manSelect[o] > e) {
                    s = t.manSelect[o];
                    break
                }
        if (0 < t.womanSelect.length)
            for (var a = 0; a < t.womanSelect.length; a++)
                if (t.womanSelect[a] > e) {
                    n = t.womanSelect[a];
                    break
                }
        var r = D.INDEX_NAME[s - 1]
          , l = D.INDEX_NAME[n - 1]
          , h = "<font color='#e4af0e' size='22'>" + d.getI18(40009) + "</font>"
          , c = "<font color='#e4af0e' size='22'>" + d.getI18(40010) + "</font>"
          , p = d.getI18(40011);
        return s == n ? i = d.getI18(40012, [r, p]) : 0 < s ? i = d.getI18(40013, [r]) + h + p : 0 < n && (i = d.getI18(40013, [l]) + c + p),
        i
    }
    ,
    D.uiView = {
        type: "BaseBox",
        props: {
            width: 576,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                skin: "res/x5_unpack/wuhunSelectBg.jpg",
                centerY: 0,
                centerX: 0
            }
        }, {
            type: "Image",
            props: {
                y: 691,
                x: 0,
                skin: "res/x5_unpack/wuhunSelectLight.png"
            }
        }, {
            type: "Box",
            props: {
                y: 59,
                x: 28,
                width: 524,
                var: "boxTouch",
                height: 570
            }
        }, {
            type: "Image",
            props: {
                y: 68,
                x: 141,
                skin: "x5_wuhunWx/title_light.png"
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 298,
                    skin: "x5_wuhunWx/title_light.png",
                    scaleX: -1
                }
            }]
        }, {
            type: "Button",
            props: {
                y: 908,
                x: 190,
                var: "btnOk",
                stateNum: 1,
                skin: "x5_wuhunWx/btn_select2.png"
            },
            child: [{
                type: "Image",
                props: {
                    y: 18,
                    x: 67,
                    skin: "x5_wuhunWx/label_select.png"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 495,
                x: -31,
                width: 633,
                var: "soulList",
                mouseThrough: !0,
                height: 406
            },
            child: [{
                type: "Box",
                props: {
                    y: 103,
                    x: 46,
                    var: "soulListPoints",
                    mouseEnabled: !1,
                    alpha: 1
                }
            }, {
                type: "Box",
                props: {
                    y: 156,
                    x: 20,
                    width: 600,
                    var: "soulListScrollArea",
                    mouseEnabled: !0,
                    height: 272
                }
            }, {
                type: "Box",
                props: {
                    y: -180,
                    x: 322,
                    var: "boxBg"
                }
            }, {
                type: "Box",
                props: {
                    y: 65,
                    x: 46,
                    width: 0,
                    var: "soulListBack",
                    height: 0
                }
            }, {
                type: "Box",
                props: {
                    y: -176,
                    x: 320,
                    var: "boxRole"
                }
            }, {
                type: "Box",
                props: {
                    y: -180,
                    x: 317,
                    var: "boxSpine"
                }
            }, {
                type: "Box",
                props: {
                    y: 98,
                    x: 117,
                    width: 404,
                    height: 132
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 202,
                        skin: "res/x5_unpack/wuhunTitleBg.png",
                        anchorX: .5
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 29,
                        var: "imgTitle",
                        skin: "x5_wuhunWx/battlesoul31.png",
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    }
                }, {
                    type: "HTMLDivElement",
                    props: {
                        y: 64,
                        x: 0,
                        wordWrap: !0,
                        width: 410,
                        var: "txtInfo",
                        height: 65,
                        fontSize: 22,
                        font: "黑体",
                        color: "#ffffff",
                        align: "center"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 65,
                    x: 46,
                    width: 0,
                    var: "soulListFront",
                    mouseThrough: !0,
                    height: 0
                }
            }]
        }, {
            type: "HTMLDivElement",
            props: {
                y: 905,
                x: 131,
                wordWrap: !0,
                width: 313,
                var: "txtUnable",
                height: 66,
                fontSize: 24,
                font: "黑体",
                color: "#6F767C",
                align: "center"
            }
        }, {
            type: "Button",
            props: {
                visible: !1,
                var: "btnBack",
                stateNum: 1,
                skin: "x5_compWx/btn_page_back1.png",
                left: 0,
                bottom: 21
            }
        }, {
            type: "HTMLDivElement",
            props: {
                y: 49,
                x: 71,
                wordWrap: !0,
                width: 437,
                var: "txtTip",
                stroke: 0,
                height: 24,
                fontSize: 24,
                font: "黑体",
                color: "#FFAD39",
                align: "center"
            }
        }, {
            type: "Image",
            props: {
                y: 39,
                x: 234,
                var: "imgTopTitle",
                skin: "x5_wuhunWx/title_preview.png"
            }
        }, {
            type: "Button",
            props: {
                y: 539,
                x: 8,
                var: "btnLeft",
                stateNum: 1,
                skin: "x5_wuhunWx/wuhun_arrow.png"
            }
        }, {
            type: "Button",
            props: {
                y: 540,
                x: 568,
                var: "btnRight",
                stateNum: 1,
                skin: "x5_wuhunWx/wuhun_arrow.png",
                scaleX: -1
            }
        }]
    },
    D.DEBUG = !1,
    D.DEBUG_ROLE_X = 0,
    D.DEBUG_ROLE_Y = 0,
    D.DEBUG_ROLE_SCALE = 1e4,
    D.DEBUG_SOUL_X = 0,
    D.DEBUG_SOUL_Y = 0,
    D.DEBUG_SOUL_SCALE = 1e4,
    D._httpRequest1 = null,
    O(D, ["INDEX_NAME", function() {
        return this.INDEX_NAME = [d.getI18(40001), d.getI18(40002), d.getI18(40003), d.getI18(40004), d.getI18(40005)]
    }
    ]);
    var Xo, Wo = D;
    function D() {
        this.boxTouch = null,
        this.btnOk = null,
        this.soulList = null,
        this.soulListPoints = null,
        this.soulListScrollArea = null,
        this.boxBg = null,
        this.soulListBack = null,
        this.boxRole = null,
        this.boxSpine = null,
        this.imgTitle = null,
        this.txtInfo = null,
        this.soulListFront = null,
        this.txtUnable = null,
        this.btnBack = null,
        this.txtTip = null,
        this.imgTopTitle = null,
        this.btnLeft = null,
        this.btnRight = null,
        this.protoData = null,
        this.curItem = null,
        this.roleAni = null,
        this.soulAni = null,
        this.bgAni = null,
        this.beginTopX = 0,
        this._completeHandler = null,
        this.ITEM_WID = 130,
        this.MOVE_SPEED = 300,
        this.soulListPointCellPos = [{
            name: 0,
            posX: 244,
            posY: 55,
            scale: .5
        }, {
            name: 1,
            posX: 244,
            posY: 65,
            scale: .6
        }, {
            name: 2,
            posX: 17,
            posY: 80,
            scale: .75
        }, {
            name: 3,
            posX: 87,
            posY: 127,
            scale: .8
        }, {
            name: 4,
            posX: 213,
            posY: 133,
            scale: 1
        }, {
            name: 5,
            posX: 363,
            posY: 127,
            scale: .8
        }, {
            name: 6,
            posX: 442,
            posY: 80,
            scale: .75
        }, {
            name: 7,
            posX: 351,
            posY: 65,
            scale: .6
        }, {
            name: 8,
            posX: 244,
            posY: 55,
            scale: .5
        }],
        this._wuhunSelectItemPool = null,
        this._soulScrollList = null,
        Xo.call(this)
    }
    t($o, "app.fateGame.AppMainBottom", jo = Gn),
    (v = $o.prototype).getAltas = function() {
        return ["res/x5_mainview.json", "res/x5_compWx.json"]
    }
    ,
    v.getUIView = function() {
        return $o.uiView
    }
    ,
    v.needAutoResize = function() {
        return !1
    }
    ,
    v.onFirstOpen = function() {}
    ,
    v.onOpen = function() {
        this.mouseThrough = !0,
        this.box_friend.on("click", this, this.onClickBtn),
        this.setBtn.on("click", this, this.onClickBtn),
        this.bagBtn.on("click", this, this.onClickBtn),
        this.roleEquipBtn.on("click", this, this.onClickBtn),
        this.expClickArea.on("click", this, this.onClickBtn),
        this.enhanceBtn.on("click", this, this.onClickBtn),
        this.soulroadLock.on("click", this, this.onClickBtn),
        this.skillBtn.on("click", this, this.onClickBtn),
        this.taskGoalBox.hitArea = new st(0,0,200,60),
        this.taskDescTxt.style.fontSize = 14,
        this.taskDescTxt.style.strokeColor = "#000000",
        this.taskDescTxt.style.align = "left",
        this.taskDescTxt.style.fontFamily = "黑体",
        this.taskDescTxt.style.leading = 0,
        this.taskAwardTxt.style.fontSize = 14,
        this.taskAwardTxt.style.strokeColor = "#000000",
        this.taskAwardTxt.style.align = "left",
        this.taskAwardTxt.style.fontFamily = "黑体",
        this.taskDescTxt.style.wordWrap = !0,
        this.taskAwardTxt.style.wordWrap = !0,
        this.setStep1()
    }
    ,
    v.onClickBtn = function() {
        ms.ins.addToGeneral("完成<span style='color:#34e973'>主线</span>任务后开启", 0)
    }
    ,
    v.onClose = function() {}
    ,
    v.onResize = function(t, e, i, s) {
        this.width = I.viewWidth,
        this.height = I.viewHeight,
        this.centerX = 0,
        this.mainBox.bottom = 0,
        this.mainBox.width = I.viewWidth,
        this.topbox.width = I.viewWidth,
        this.boxMid.width = I.viewWidth,
        this.flynumBox.width = I.viewWidth,
        this.bgCover.width = I.viewWidth,
        this.bgImg.width = I.viewWidth + 2,
        this.ball_Water.x = I.viewWidth - 116,
        this.glass_box.x = I.viewWidth - 98,
        this.achiLightBox.x = (I.viewWidth - this.boxAchi.width) / 2,
        this.glass_box.x = I.viewWidth - 98,
        this.boxExpEff.x = I.viewWidth - 49,
        this.tipRedExpGod.x = I.viewWidth - 25,
        g.isLiuHai && g.isWanba && (this.mainBox.bottom = 18),
        this.bg.width = I.viewWidth / 2,
        this.bg1.width = I.viewWidth / 2,
        this.bg1.x = I.viewWidth,
        this.boxBar.width = I.viewWidth;
        var n = this.bgBaseBar.width;
        this.barWidth = I.viewWidth - 236,
        this.bgBaseBar.width = this.barWidth,
        this.bgBaseBar.x = 118,
        this.progressExp.width = Math.min(this.progressExp.width / n * this.barWidth, this.barWidth),
        this.progressExp.x = 118,
        this.tweenBar.width = this.barWidth,
        this.tweenBar.x = 118,
        this.buttonBox.centerX = 0,
        this.ball_glass.right = 50
    }
    ,
    v.setStep1 = function() {
        this.taskDescTxt.innerHTML = "<font color='#FFEEA0'>觉醒仪式<font color='#34E973'>（0/1）</font></font>",
        this.taskAwardTxt.innerHTML = "<font color='#FFB12A'>奖励:魂币</font>",
        this.taskIcon.skin = "art/res/explore/x5/2.png"
    }
    ,
    $o.uiView = {
        type: "BaseBox",
        props: {
            y: 0,
            x: 0,
            width: 576,
            height: 1024
        },
        child: [{
            type: "Box",
            props: {
                x: 0,
                width: 576,
                var: "mainBox",
                name: "mainBox",
                height: 159,
                bottom: 0
            },
            child: [{
                type: "Box",
                props: {
                    y: 70,
                    width: 576,
                    var: "boxMid",
                    name: "boxMid",
                    height: 90
                },
                child: [{
                    type: "Image",
                    props: {
                        y: -69,
                        x: 0,
                        width: 576,
                        var: "bgImg",
                        skin: "x5_compWx/bg_chat.png",
                        name: "bgImg",
                        mouseEnabled: !1,
                        height: 158
                    }
                }, {
                    type: "Box",
                    props: {
                        y: -62,
                        width: 38,
                        var: "box_friend",
                        right: 56,
                        name: "box_friend",
                        height: 44
                    },
                    child: [{
                        type: "Button",
                        props: {
                            y: 0,
                            x: 0,
                            visible: !0,
                            var: "friendBtn",
                            stateNum: 1,
                            skin: "x5_mainview/btn_chat_friend.png"
                        },
                        child: [{
                            type: "Box",
                            props: {
                                y: -10,
                                x: 16,
                                visible: !1,
                                var: "private_tips",
                                scaleY: .89,
                                scaleX: .89
                            },
                            child: [{
                                type: "Button",
                                props: {
                                    y: 6,
                                    x: 4,
                                    width: 24,
                                    stateNum: 1,
                                    skin: "x5_compWx/icon_tip.png",
                                    height: 24
                                }
                            }, {
                                type: "Label",
                                props: {
                                    y: 10,
                                    x: -4,
                                    width: 40,
                                    var: "private_text",
                                    text: 1,
                                    strokeColor: "#1e150a",
                                    stroke: 1,
                                    fontSize: 14,
                                    font: "黑体",
                                    color: "#ffffff",
                                    align: "center"
                                }
                            }]
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: -63,
                        width: 38,
                        var: "setBtn",
                        right: 8,
                        name: "setBtn",
                        height: 44
                    },
                    child: [{
                        type: "Button",
                        props: {
                            y: 0,
                            x: 0,
                            visible: !0,
                            stateNum: 1,
                            skin: "x5_mainview/btn_chat_set.png"
                        },
                        child: [{
                            type: "Rect",
                            props: {
                                y: -6,
                                x: -2,
                                width: 47,
                                renderType: "hit",
                                lineWidth: 1,
                                height: 49,
                                fillColor: "#ff0000"
                            }
                        }]
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: -69,
                        var: "chatline",
                        skin: "x5_mainview/main_shu.png",
                        right: 102,
                        name: "chatline",
                        height: 52
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 89,
                        x: 0,
                        width: 576,
                        visible: !0,
                        var: "bgCover",
                        skin: "x5_compWx/few_black.png",
                        sizeGrid: "1,1,1,1",
                        height: 20
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 576,
                        width: 288,
                        visible: !0,
                        var: "bg1",
                        skin: "x5_compWx/mainview_bottombg.png",
                        sizeGrid: "0,5,0,240",
                        scaleX: -1,
                        name: "bg1",
                        height: 90
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 288,
                        visible: !0,
                        var: "bg",
                        skin: "x5_compWx/mainview_bottombg.png",
                        sizeGrid: "0,5,0,240",
                        name: "bg",
                        height: 90
                    }
                }, {
                    type: "Box",
                    props: {
                        y: 7,
                        width: 348,
                        var: "buttonBox",
                        centerX: 0
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 3,
                            x: 259,
                            skin: "x5_mainview/main_iconbg.png"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 3,
                            x: 2,
                            skin: "x5_mainview/main_iconbg.png"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 3,
                            x: 86,
                            skin: "x5_mainview/main_iconbg.png"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 3,
                            x: 173,
                            skin: "x5_mainview/main_iconbg.png"
                        }
                    }, {
                        type: "Box",
                        props: {
                            y: 3,
                            x: 347,
                            scaleX: -1
                        },
                        child: [{
                            type: "Image",
                            props: {
                                x: 257,
                                skin: "x5_mainview/main_iconbg.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                skin: "x5_mainview/main_iconbg.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                x: 84,
                                skin: "x5_mainview/main_iconbg.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                x: 171,
                                skin: "x5_mainview/main_iconbg.png"
                            }
                        }]
                    }, {
                        type: "Box",
                        props: {
                            y: 0,
                            x: 257,
                            width: 90,
                            var: "enhanceBtn",
                            name: "enhance"
                        },
                        child: [{
                            type: "Button",
                            props: {
                                y: 37,
                                x: 46,
                                visible: !0,
                                var: "moreBtn",
                                stateNum: 1,
                                skin: "x5_mainview/btn_duanzao2.png",
                                rotation: 0,
                                anchorY: .5,
                                anchorX: .5
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 49,
                                var: "morePic",
                                stateNum: 1,
                                skin: "x5_mainview/btn_duanzao12.png",
                                centerX: 1
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 3,
                                x: 57,
                                width: 24,
                                visible: !1,
                                var: "enhanceTip",
                                skin: "x5_compWx/icon_tip.png",
                                height: 24
                            }
                        }]
                    }, {
                        type: "Button",
                        props: {
                            x: 171,
                            width: 90,
                            visible: !0,
                            var: "roleEquipBtn",
                            stateNum: 1,
                            skin: "x5_mainview/btn_renwu1.png",
                            name: "equipment"
                        },
                        child: [{
                            type: "Image",
                            props: {
                                y: 3,
                                x: 57,
                                width: 24,
                                visible: !1,
                                var: "updateNotice",
                                skin: "x5_compWx/icon_tip.png",
                                height: 24
                            }
                        }]
                    }, {
                        type: "Button",
                        props: {
                            x: 85,
                            width: 90,
                            visible: !0,
                            var: "bagBtn",
                            stateNum: 1,
                            skin: "x5_mainview/btn_beibao1.png",
                            name: "bag"
                        },
                        child: [{
                            type: "Image",
                            props: {
                                y: 3,
                                x: 57,
                                width: 24,
                                visible: !1,
                                var: "bagFull",
                                skin: "x5_compWx/icon_tip.png",
                                height: 24
                            }
                        }]
                    }, {
                        type: "Button",
                        props: {
                            x: 0,
                            width: 90,
                            visible: !0,
                            var: "skillBtn",
                            stateNum: 1,
                            skin: "x5_mainview/btn_jineng1.png",
                            name: "skill"
                        },
                        child: [{
                            type: "Image",
                            props: {
                                y: 3,
                                x: 57,
                                width: 24,
                                visible: !1,
                                var: "iconAttrTip1",
                                skin: "x5_compWx/icon_tip.png",
                                height: 24
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 2,
                                x: 13,
                                visible: !1,
                                var: "wuHunNewImg",
                                skin: "x5_mainview/new_icon.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 2,
                                x: 5,
                                width: 24,
                                visible: !1,
                                var: "wuHunTip",
                                skin: "x5_compWx/icon_tip.png",
                                height: 24
                            }
                        }]
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: -2,
                        width: 45,
                        var: "ball_glass",
                        skin: "x5_mainview/bg_5.png",
                        right: 50,
                        name: "ball_glass",
                        height: 96
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 90,
                            width: 45,
                            skin: "x5_mainview/bg_5.png",
                            scaleX: -1,
                            height: 96
                        }
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: -2,
                        width: 96,
                        var: "expClickArea",
                        skin: "x5_mainview/bg_top_88.png",
                        right: 6,
                        mouseEnabled: !0,
                        height: 96,
                        alpha: 0
                    }
                }, {
                    type: "Image",
                    props: {
                        y: -20,
                        x: 0,
                        var: "soulroadLock",
                        skin: "x5_mainview/soulRoad_gray.png"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 144,
                    x: 0,
                    width: 576,
                    var: "boxBar",
                    height: 23.5
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 12,
                        x: 118,
                        width: 340,
                        visible: !1,
                        var: "bgBaseBar",
                        skin: "x5_mainview/progress_0.png",
                        name: "bgBaseBar",
                        height: 3,
                        sizeGrid: "0,8,0,8"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 12,
                        x: 118,
                        width: 340,
                        visible: !1,
                        var: "tweenBar",
                        skin: "x5_mainview/progress_gray.png",
                        name: "tweenBar",
                        height: 3,
                        sizeGrid: "0,8,0,8"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 12,
                        x: 118,
                        width: 340,
                        var: "progressExp",
                        skin: "x5_mainview/progress_0.png",
                        name: "progressExp",
                        height: 3,
                        sizeGrid: "0,8,0,8"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 12,
                        x: 118,
                        width: 340,
                        visible: !1,
                        var: "_expMask",
                        skin: "x5_mainview/progress_0.png",
                        name: "_expMask",
                        height: 3,
                        sizeGrid: "0,8,0,8"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 4,
                        visible: !1,
                        var: "maxFlag",
                        skin: "x5_mainview/img_max.png",
                        scaleY: .5,
                        scaleX: .5,
                        centerX: 0
                    }
                }]
            }, {
                type: "Box",
                props: {
                    width: 168,
                    var: "boxAchi",
                    name: "boxAchi",
                    height: 82,
                    centerX: 0,
                    bottom: 178
                },
                child: [{
                    type: "Box",
                    props: {
                        y: 0,
                        x: -6,
                        visible: !1,
                        var: "ba"
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 10,
                            x: 25,
                            visible: !0,
                            var: "achievePointImgbg",
                            skin: "x5_compWx/unpack_llbg.png",
                            mouseEnabled: !1
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 12,
                            x: 60,
                            width: 128,
                            var: "achievePointImg",
                            height: 48
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 11,
                            x: 0,
                            skin: "x5_mainview/bg_top_2.png"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: -9,
                            var: "ll",
                            skin: "x5_mainview/lilian.png"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 2,
                            x: 38,
                            width: 24,
                            visible: !0,
                            var: "taskUpdate",
                            skin: "x5_compWx/icon_tip.png",
                            height: 24
                        }
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 6,
                        x: 20,
                        width: 180,
                        var: "taskGoalBox",
                        name: "taskGoalBox",
                        height: 60,
                        centerX: 0
                    },
                    child: [{
                        type: "Box",
                        props: {
                            y: 0,
                            x: 0,
                            var: "box_task",
                            name: "box_task",
                            cacheAs: "bitmap"
                        },
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 18,
                                visible: !0,
                                skin: "x5_compWx/unpack_llbg.png",
                                mouseEnabled: !1
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 1,
                                x: -7,
                                visible: !0,
                                var: "iconBg",
                                skin: "x5_mainview/bg_top_2.png",
                                name: "iconBg",
                                mouseEnabled: !1
                            },
                            child: [{
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 56,
                                    visible: !0,
                                    skin: "x5_mainview/bg_top_2.png",
                                    scaleX: -1,
                                    mouseEnabled: !1
                                }
                            }]
                        }, {
                            type: "Image",
                            props: {
                                y: 3,
                                x: -3,
                                width: 50,
                                var: "taskIcon",
                                name: "taskIcon",
                                height: 50
                            }
                        }]
                    }, {
                        type: "HTMLDivElement",
                        props: {
                            y: 10,
                            x: 58,
                            width: 160,
                            visible: !0,
                            var: "taskDescTxt",
                            name: "taskDescTxt",
                            mouseEnabled: !1,
                            innerHTML: "击杀Boss-冰后",
                            height: 24,
                            fontSize: 14,
                            font: "SimHei",
                            color: "#000000"
                        }
                    }, {
                        type: "HTMLDivElement",
                        props: {
                            y: 30,
                            x: 58,
                            width: 160,
                            visible: !0,
                            var: "taskAwardTxt",
                            name: "taskAwardTxt",
                            mouseEnabled: !1,
                            innerHTML: "奖励：限购礼包加一",
                            height: 24,
                            fontSize: 14,
                            color: "#000000"
                        }
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    y: 28,
                    x: 0,
                    width: 576,
                    var: "boxEffect",
                    name: "boxEffect",
                    mouseThrough: !0
                },
                child: [{
                    type: "Box",
                    props: {
                        y: 89,
                        x: 54,
                        var: "boxEff",
                        name: "boxEff"
                    }
                }, {
                    type: "Box",
                    props: {
                        y: 89,
                        x: 527,
                        var: "boxExpEff",
                        name: "boxExpEff"
                    }
                }, {
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        var: "weixianBox",
                        name: "weixianBox"
                    }
                }, {
                    type: "Box",
                    props: {
                        y: 0,
                        x: 460,
                        var: "ball_Water",
                        name: "ball_Water"
                    }
                }, {
                    type: "Box",
                    props: {
                        y: 40,
                        x: 478,
                        var: "glass_box",
                        name: "glass_box",
                        mouseEnabled: !1
                    }
                }, {
                    type: "Box",
                    props: {
                        y: 0,
                        x: 460,
                        var: "lightbox",
                        name: "lightbox",
                        mouseEnabled: !1
                    }
                }, {
                    type: "Box",
                    props: {
                        y: -91,
                        x: 204,
                        var: "achiIconBox",
                        name: "achiIconBox"
                    }
                }, {
                    type: "Box",
                    props: {
                        y: -91,
                        x: 204,
                        var: "achiLightBox",
                        name: "achiLightBox"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 28,
                    x: 0,
                    width: 576,
                    var: "topbox"
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 39,
                        var: "expBall_lock",
                        skin: "x5_mainview/lock_exppool.png",
                        right: 51
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 88,
                            skin: "x5_mainview/lock_exppool.png",
                            scaleX: -1
                        }
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 103,
                        var: "expimg1",
                        skin: "x5_mainview/bg_1.png",
                        scaleX: -1,
                        right: 126
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 108,
                        var: "expimg2",
                        skin: "x5_mainview/word_shihai.png",
                        right: 21
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 103,
                        x: 0,
                        var: "soulroadimg1",
                        skin: "x5_mainview/bg_1.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 109,
                        x: 16,
                        var: "soulroadimg2",
                        skin: "x5_mainview/word_xiuxing.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 38,
                        x: 79,
                        width: 24,
                        visible: !1,
                        var: "tipGroup",
                        skin: "x5_compWx/icon_tip.png",
                        height: 24
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 34,
                        x: 542,
                        width: 24,
                        visible: !1,
                        var: "tipRedExpGod",
                        skin: "x5_compWx/icon_tip.png",
                        height: 24
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 121,
                        x: 241,
                        width: 94,
                        var: "txtExpPer",
                        text: "0.00%",
                        strokeColor: "#474d78",
                        stroke: 1,
                        name: "txtExpPer",
                        height: 18,
                        fontSize: 12,
                        font: "黑体",
                        color: "#ffffff",
                        centerX: 0,
                        align: "center"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 75,
                        x: 473,
                        width: 104,
                        visible: !1,
                        var: "txt_BallExp",
                        strokeColor: "#643209",
                        stroke: 2,
                        right: -1,
                        fontSize: 16,
                        font: "黑体",
                        color: "#FFFFFF",
                        align: "center"
                    }
                }]
            }]
        }, {
            type: "Box",
            props: {
                var: "flynumBox"
            }
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 0,
                var: "bottomeffLayer",
                name: "bottomeffLayer"
            }
        }]
    };
    var jo, Yo = $o;
    function $o() {
        this.mainBox = null,
        this.boxMid = null,
        this.bgImg = null,
        this.box_friend = null,
        this.friendBtn = null,
        this.private_tips = null,
        this.private_text = null,
        this.setBtn = null,
        this.chatline = null,
        this.bgCover = null,
        this.bg1 = null,
        this.bg = null,
        this.buttonBox = null,
        this.enhanceBtn = null,
        this.moreBtn = null,
        this.morePic = null,
        this.enhanceTip = null,
        this.roleEquipBtn = null,
        this.updateNotice = null,
        this.bagBtn = null,
        this.bagFull = null,
        this.skillBtn = null,
        this.iconAttrTip1 = null,
        this.wuHunNewImg = null,
        this.wuHunTip = null,
        this.ball_glass = null,
        this.expClickArea = null,
        this.soulroadLock = null,
        this.boxBar = null,
        this.bgBaseBar = null,
        this.tweenBar = null,
        this.progressExp = null,
        this._expMask = null,
        this.maxFlag = null,
        this.boxAchi = null,
        this.ba = null,
        this.achievePointImgbg = null,
        this.achievePointImg = null,
        this.ll = null,
        this.taskUpdate = null,
        this.taskGoalBox = null,
        this.box_task = null,
        this.iconBg = null,
        this.taskIcon = null,
        this.taskDescTxt = null,
        this.taskAwardTxt = null,
        this.boxEffect = null,
        this.boxEff = null,
        this.boxExpEff = null,
        this.weixianBox = null,
        this.ball_Water = null,
        this.glass_box = null,
        this.lightbox = null,
        this.achiIconBox = null,
        this.achiLightBox = null,
        this.topbox = null,
        this.expBall_lock = null,
        this.expimg1 = null,
        this.expimg2 = null,
        this.soulroadimg1 = null,
        this.soulroadimg2 = null,
        this.tipGroup = null,
        this.tipRedExpGod = null,
        this.txtExpPer = null,
        this.txt_BallExp = null,
        this.flynumBox = null,
        this.bottomeffLayer = null,
        this.barWidth = 0,
        jo.call(this)
    }
    t(Qo, "app.fateGame.AppMainTop", qo = Gn),
    (N = Qo.prototype).X5WuhunSelectPanel = function() {}
    ,
    N.getAltas = function() {
        return ["res/x5_mainview.json", "res/x5_compWx.json"]
    }
    ,
    N.getUIView = function() {
        return Qo.uiView
    }
    ,
    N.needAutoResize = function() {
        return !1
    }
    ,
    N.onFirstOpen = function() {}
    ,
    N.onOpen = function() {
        this.mouseThrough = !0,
        x.timer.loop(1e3, this, this.setTime),
        this.setTime(),
        this.buffBox.on("click", this, this.onClickBtn),
        this.boxExp.on("click", this, this.onClickBtn),
        this.vipBox.on("click", this, this.onClickBtn),
        this.coinBox.on("click", this, this.onClickBtn, [2]),
        this.scoreBox.on("click", this, this.onClickBtn, [5]),
        this.goldBtn.on("click", this, this.onClickBtn),
        this.boxField.on("click", this, this.onClickBtn),
        x.stage.on("update_head", this, this.updateHead),
        this.updateHead()
    }
    ,
    N.onClickBtn = function() {
        ms.ins.addToGeneral("完成<span style='color:#34e973'>主线</span>任务后开启", 0)
    }
    ,
    N.showPower = function(t, e, i) {
        void 0 === e && (e = !0),
        void 0 === i && (i = 0),
        this.removeNum(),
        this.img = new Us,
        this.img.setNumber("" + t, "x5_mainview/zhanli", -8),
        this.box_Fight.addChild(this.img),
        this.iconFightingList.push(this.img)
    }
    ,
    N.removeNum = function() {
        if (0 < this.iconFightingList.length) {
            var t, e;
            for (e in this.iconFightingList)
                (t = this.iconFightingList[e]).parent && this.removeChild(t),
                t.destroy();
            this.iconFightingList.length = 0
        }
    }
    ,
    N.onClose = function() {}
    ,
    N.onResize = function(t, e, i, s) {
        this.width = e,
        this.main.width = e,
        this.m_transjobbox.width = e,
        this.bgTop.width = e + 2,
        this.tempBg.width = e + 160,
        this.y = g.LiuHai_ADD_HEIGHT,
        w.onKSMiniGame || w.antiMiniGame && (this.boxField.y = 74,
        this.boxExp.y = 74)
    }
    ,
    N.setTime = function() {
        this.timeTxt.text = Qo.starmpToChinese(1e3 * this.getServerTime(), 3)
    }
    ,
    N.getServerTime = function() {
        return Math.floor(w.now() / 1e3)
    }
    ,
    N.updateHead = function() {
        0 < p.ins.wuhunSelectTargetType ? (this.iconHead.skin = "res/x5_unpack/icon_wuhun_" + p.ins.wuhunSelectTargetType + ".png",
        this.levelText.text = "2",
        this.showPower(4073, !0)) : (this.showPower(1023, !0),
        this.iconHead.skin = this.getJobImage(c.sex, 0),
        this.iconHead.x = 2,
        this.iconHead.y = -3,
        this.levelText.text = "1"),
        this.setNameText(A.ins.playerInfo.nickName)
    }
    ,
    N.setNameText = function(t) {
        this.nameText.text = t
    }
    ,
    N.getJobImage = function(t, e) {
        return "res/x5_unpack/head_" + (t = 0 == t ? 1 : t) + ".png"
    }
    ,
    Qo.starmpToChinese = function(t, e) {
        var t = new Date(t)
          , i = t.getFullYear()
          , s = t.getMonth() + 1
          , n = t.getDate()
          , o = t.getHours()
          , a = t.getMinutes()
          , t = t.getSeconds()
          , r = s < 10 ? "0" + s : "" + s
          , l = n < 10 ? "0" + n : "" + n
          , h = o < 10 ? "0" + o : "" + o
          , c = a < 10 ? "0" + a : "" + a
          , p = t < 10 ? "0" + t : "" + t;
        switch (e) {
        case 1:
            return i + "-" + r + "-" + l + " " + h + ":" + c + ":" + p;
        case 3:
            return h + ":" + c + ":" + p;
        case 7:
            return h + ":" + c;
        case 5:
            return r + "/" + l;
        case 6:
            return c + ":" + p
        }
        return null
    }
    ,
    Qo.uiView = {
        type: "BaseBox",
        props: {
            y: 0,
            x: 0,
            width: 576,
            name: "btnQuickFight",
            height: 1024
        },
        child: [{
            type: "Box",
            props: {
                y: 0,
                x: 0,
                width: 576,
                var: "main",
                mouseThrough: !0,
                height: 226,
                cacheAs: "bitmap"
            },
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "m_gamemenubox",
                    name: "m_gamemenubox"
                }
            }, {
                type: "Box",
                props: {
                    var: "m_previewbox",
                    name: "m_previewbox"
                }
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "m_soulroadbox",
                    name: "m_soulroadbox"
                }
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "m_transjobbox",
                    name: "m_transjobbox"
                }
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "m_soulMasterNoteBox",
                    name: "m_soulMasterNoteBox"
                }
            }, {
                type: "Box",
                props: {
                    y: 10,
                    x: 10,
                    var: "m_freevipbox",
                    name: "m_freevipbox"
                }
            }, {
                type: "Image",
                props: {
                    y: -132,
                    x: -80,
                    width: 742,
                    visible: !0,
                    var: "tempBg",
                    skin: "x5_mainview/few_black.png",
                    sizeGrid: "1,1,1,1",
                    height: 133
                }
            }, {
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 576,
                    visible: !0,
                    var: "bgTop",
                    skin: "x5_mainview/bg_top_4.png",
                    sizeGrid: "0,2,0,244",
                    height: 29,
                    alpha: 1
                }
            }, {
                type: "Image",
                props: {
                    y: 56,
                    x: 44,
                    width: 185,
                    var: "timebg",
                    skin: "x5_mainview/main_bg_line.png",
                    sizeGrid: "0,60,0,0",
                    height: 23
                }
            }, {
                type: "Image",
                props: {
                    y: 28.5,
                    x: 63,
                    skin: "x5_mainview/main_name_bg.png"
                }
            }, {
                type: "Box",
                props: {
                    y: 24,
                    x: 347,
                    width: 229,
                    visible: !0,
                    var: "boxExp",
                    right: 0,
                    mouseThrough: !0,
                    height: 77
                },
                child: [{
                    type: "Button",
                    props: {
                        y: 0,
                        x: 0,
                        stateNum: 1,
                        skin: "x5_mainview/bg_top_1.png",
                        name: "mapBg"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 2,
                        x: 175,
                        var: "mapbg1",
                        skin: "x5_mainview/bg_top_2.png",
                        mouseEnabled: !0
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 32,
                        x: 37,
                        var: "expicon",
                        skin: "x5_mainview/icon_top_3.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 5,
                        x: 17,
                        var: "mapLight",
                        skin: "x5_mainview/bg_top_1light.png"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 33,
                        x: 67,
                        width: 94,
                        var: "expSpeed",
                        text: "正在统计",
                        height: 21,
                        fontSize: 14,
                        font: "黑体",
                        color: "#34E973",
                        align: "left"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 11,
                        x: 33,
                        width: 109,
                        var: "mapName",
                        text: "幽暗森-林森林",
                        height: 20,
                        fontSize: 16,
                        font: "黑体",
                        color: "#BCC6CF",
                        align: "center"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 24,
                    width: 229,
                    var: "boxField",
                    right: 0,
                    mouseEnabled: !0,
                    height: 77
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        visible: !0,
                        var: "mapbg2",
                        skin: "x5_mainview/bg_top_1.png",
                        mouseEnabled: !0
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 2,
                        x: 175,
                        skin: "x5_mainview/bg_top_2.png",
                        mouseEnabled: !0
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 34,
                        x: 42,
                        width: 133,
                        visible: !0,
                        var: "txtUnOpenTip",
                        text: "大魂师1级任务开启",
                        height: 24,
                        fontSize: 14,
                        font: "黑体",
                        color: "#34E973",
                        align: "left"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: -2,
                        x: 170,
                        skin: "x5_mainview/word_area.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 6,
                        x: 33,
                        skin: "x5_mainview/word_area1.png"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 4,
                    width: 102,
                    var: "goldBox",
                    right: 12,
                    height: 28
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 102,
                        skin: "x5_compWx/bg_main_icon_bg.png",
                        sizeGrid: "0,9,0,9",
                        height: 20
                    }
                }, {
                    type: "Image",
                    props: {
                        y: -1,
                        x: 0,
                        visible: !0,
                        var: "icon_diamond",
                        skin: "x5_mainview/icon_main_diamond.png",
                        scaleY: .8,
                        scaleX: .8,
                        name: "icon_diamond"
                    }
                }, {
                    type: "Box",
                    props: {
                        y: 5,
                        x: 10,
                        width: 19,
                        height: 19
                    },
                    child: [{
                        type: "Button",
                        props: {
                            var: "btnAdd",
                            stateNum: 1,
                            skin: "x5_mainview/btn_plus_2.png"
                        }
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 2,
                        x: 0,
                        width: 103,
                        var: "goldBtn",
                        height: 28
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 2,
                        x: 29,
                        width: 66,
                        var: "goldTxt",
                        valign: "top",
                        text: "0",
                        name: "diamondNum",
                        height: 22,
                        fontSize: 16,
                        font: "黑体",
                        color: "#BCC6CF",
                        align: "left"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 4,
                    width: 102,
                    var: "coinBox",
                    right: 116,
                    height: 28
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 102,
                        skin: "x5_compWx/bg_main_icon_bg.png",
                        sizeGrid: "0,9,0,9",
                        height: 20
                    }
                }, {
                    type: "Image",
                    props: {
                        y: -1,
                        x: 0,
                        visible: !0,
                        var: "icon_coin",
                        skin: "x5_mainview/icon_main_coin.png",
                        scaleY: .8,
                        scaleX: .8,
                        name: "icon_coin"
                    }
                }, {
                    type: "Button",
                    props: {
                        y: 6,
                        x: 7,
                        stateNum: 1,
                        skin: "x5_mainview/btn_plus_2.png"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 2,
                        x: 29,
                        width: 106,
                        visible: !0,
                        var: "coinTxt",
                        valign: "top",
                        text: "1000",
                        name: "goldNum",
                        height: 20,
                        fontSize: 16,
                        font: "黑体",
                        color: "#BCC6CF",
                        align: "left"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 4,
                    width: 102,
                    var: "scoreBox",
                    right: 222,
                    height: 28
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 102,
                        skin: "x5_compWx/bg_main_icon_bg.png",
                        sizeGrid: "0,10,0,10",
                        height: 20
                    }
                }, {
                    type: "Image",
                    props: {
                        y: -1,
                        x: 0,
                        visible: !0,
                        var: "icon_score",
                        skin: "x5_mainview/icon_main_score.png",
                        scaleY: .8,
                        scaleX: .8,
                        name: "icon_score"
                    }
                }, {
                    type: "Button",
                    props: {
                        y: 6,
                        x: 7,
                        stateNum: 1,
                        skin: "x5_mainview/btn_plus_2.png"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 2,
                        x: 29,
                        width: 66,
                        var: "scoreTxt",
                        valign: "top",
                        text: "0",
                        name: "scoreNum",
                        height: 17,
                        fontSize: 16,
                        font: "黑体",
                        color: "#BCC6CF",
                        align: "left"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "headBox"
                },
                child: [{
                    type: "Box",
                    props: {
                        y: 3,
                        x: 0
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            skin: "x5_mainview/main_headbg_2.png"
                        },
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 72,
                                skin: "x5_mainview/main_headbg_2.png",
                                scaleX: -1
                            }
                        }]
                    }, {
                        type: "Box",
                        props: {
                            y: 4,
                            x: 4
                        },
                        child: [{
                            type: "Image",
                            props: {
                                width: 64,
                                var: "iconHead",
                                skin: "res/x5_unpack/icon_wuhun_11.png",
                                height: 64
                            }
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: 39,
                            x: 37,
                            anchorY: .5,
                            anchorX: .5
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 64,
                            x: 2,
                            width: 68,
                            skin: "x5_compWx/progress_22_1.png",
                            height: 13
                        }
                    }, {
                        type: "Label",
                        props: {
                            y: 32.5,
                            x: 73,
                            width: 84,
                            var: "nameText",
                            text: "名字五个字",
                            height: 18,
                            fontSize: 14,
                            font: "黑体",
                            color: "#2a3940",
                            align: "center"
                        }
                    }, {
                        type: "Text",
                        props: {
                            y: 26,
                            x: 16,
                            width: 38,
                            height: 20,
                            fontSize: 20,
                            font: "黑体",
                            color: "#FF2B2B",
                            align: "center"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 47,
                            x: 48,
                            skin: "x5_mainview/headLevelBg.png"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 67,
                            x: 6,
                            width: 60,
                            skin: "x5_compWx/progress_22_2.png",
                            sizeGrid: "0,3,0,3",
                            name: "hpbg",
                            height: 7
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 67,
                            x: 6,
                            skin: "x5_compWx/progress_22_2.png",
                            sizeGrid: "0,3,0,3",
                            name: "hpbar",
                            height: 7
                        }
                    }, {
                        type: "Text",
                        props: {
                            y: 44,
                            x: 46,
                            width: 27,
                            var: "levelText",
                            valign: "middle",
                            text: 1,
                            height: 21,
                            fontSize: 16,
                            font: "黑体",
                            color: "#BCC6CF",
                            align: "center"
                        }
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    y: 28.5,
                    x: 152,
                    visible: !0,
                    var: "buffBox"
                },
                child: [{
                    type: "Button",
                    props: {
                        y: 0,
                        x: 1.5,
                        var: "buffbtn",
                        stateNum: 1,
                        skin: "x5_mainview/btn_gray_3.png",
                        labelSize: 16,
                        labelPadding: "-1,2,0,0",
                        labelFont: "黑体",
                        labelColors: "#BCC6CF,#efefef,#BCC6CF,#BCC6CF",
                        label: "增益"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 62,
                    x: 145,
                    var: "msgBigBox"
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 1,
                        x: 0,
                        width: 17,
                        visible: !1,
                        var: "betterBarbg",
                        skin: "x5_mainview/main_state_b0.png",
                        height: 10
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 3,
                        x: 2,
                        width: 12,
                        visible: !1,
                        var: "betterBar",
                        skin: "x5_mainview/main_state_b1.png",
                        height: 6
                    }
                }, {
                    type: "Label",
                    props: {
                        y: -1,
                        x: -60,
                        width: 60,
                        var: "timeTxt",
                        text: "10:10:10",
                        height: 14,
                        fontSize: 14,
                        font: "黑体",
                        color: "#bcc6cf"
                    }
                }, {
                    type: "Box",
                    props: {
                        y: 1,
                        x: 0,
                        visible: !1,
                        alpha: 0
                    },
                    child: [{
                        type: "Label",
                        props: {
                            x: 18,
                            var: "delayTxt",
                            text: "993ms",
                            fontSize: 10,
                            font: "黑体",
                            color: "#bcc6cf"
                        }
                    }, {
                        type: "Box",
                        props: {
                            var: "wifibox"
                        },
                        child: [{
                            type: "Image",
                            props: {
                                var: "wifi999",
                                skin: "x5_mainview/main_state_wifi999.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                var: "wifi0",
                                skin: "x5_mainview/main_state_wifi0.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                var: "wifi1",
                                skin: "x5_mainview/main_state_wifi1.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                var: "wifi2",
                                skin: "x5_mainview/main_state_wifi2.png"
                            }
                        }]
                    }, {
                        type: "Box",
                        props: {
                            y: 1,
                            x: 2,
                            var: "msgbox"
                        },
                        child: [{
                            type: "Image",
                            props: {
                                var: "msg999",
                                skin: "x5_mainview/main_state_msg999.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                var: "msg0",
                                skin: "x5_mainview/main_state_msg0.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                var: "msg1",
                                skin: "x5_mainview/main_state_msg1.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                var: "msg2",
                                skin: "x5_mainview/main_state_msg2.png"
                            }
                        }]
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    y: 5,
                    x: 74,
                    var: "midBox",
                    cacheAs: "bitmap"
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        var: "fight_img",
                        skin: "x5_mainview/word_zhandouli1.png"
                    }
                }, {
                    type: "Box",
                    props: {
                        y: -2,
                        x: 56,
                        width: 111,
                        var: "box_Fight",
                        name: "box_Fight",
                        height: 18
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 30,
                    x: 246,
                    width: 55,
                    visible: !0,
                    var: "vipBox",
                    height: 52
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        skin: "x5_mainview/btn_yellow_2.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: -2,
                        x: 30,
                        width: 24,
                        visible: !1,
                        var: "imgVipRed",
                        skin: "x5_compWx/icon_tip.png",
                        height: 24
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 15,
                        x: 4,
                        var: "picviplv",
                        skin: "x5_mainview/num_vip_0.png"
                    }
                }]
            }]
        }, {
            type: "Box",
            props: {
                y: 56,
                x: 70,
                var: "nameFxBox",
                scaleY: .9,
                scaleX: .91
            }
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 0,
                var: "imgLayer",
                name: "imgLayer"
            }
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 0,
                var: "txttLayer",
                name: "txttLayer"
            }
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 0,
                var: "effLayer",
                name: "effLayer"
            }
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 0,
                var: "itemLayer",
                name: "itemLayer"
            }
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 0,
                var: "effUpLayer",
                name: "effUpLayer"
            }
        }]
    };
    var qo, Ko = Qo;
    function Qo() {
        this.main = null,
        this.m_gamemenubox = null,
        this.m_previewbox = null,
        this.m_soulroadbox = null,
        this.m_transjobbox = null,
        this.m_soulMasterNoteBox = null,
        this.m_freevipbox = null,
        this.tempBg = null,
        this.bgTop = null,
        this.timebg = null,
        this.boxExp = null,
        this.mapbg1 = null,
        this.expicon = null,
        this.mapLight = null,
        this.expSpeed = null,
        this.mapName = null,
        this.boxField = null,
        this.mapbg2 = null,
        this.txtUnOpenTip = null,
        this.goldBox = null,
        this.icon_diamond = null,
        this.btnAdd = null,
        this.goldBtn = null,
        this.goldTxt = null,
        this.coinBox = null,
        this.icon_coin = null,
        this.coinTxt = null,
        this.scoreBox = null,
        this.icon_score = null,
        this.scoreTxt = null,
        this.headBox = null,
        this.iconHead = null,
        this.nameText = null,
        this.levelText = null,
        this.buffBox = null,
        this.buffbtn = null,
        this.msgBigBox = null,
        this.betterBarbg = null,
        this.betterBar = null,
        this.timeTxt = null,
        this.delayTxt = null,
        this.wifibox = null,
        this.wifi999 = null,
        this.wifi0 = null,
        this.wifi1 = null,
        this.wifi2 = null,
        this.msgbox = null,
        this.msg999 = null,
        this.msg0 = null,
        this.msg1 = null,
        this.msg2 = null,
        this.midBox = null,
        this.fight_img = null,
        this.box_Fight = null,
        this.vipBox = null,
        this.imgVipRed = null,
        this.picviplv = null,
        this.nameFxBox = null,
        this.imgLayer = null,
        this.txttLayer = null,
        this.effLayer = null,
        this.itemLayer = null,
        this.effUpLayer = null,
        this.iconFightingList = [],
        this.img = null,
        qo.call(this)
    }
    t(ta, "app.fateGame.AppMapLoadingView", Zo = Gn),
    (T = ta.prototype).getAltas = function() {
        return this._resArr
    }
    ,
    T.getUIView = function() {
        return ta.uiView
    }
    ,
    T.onOpen = function() {
        this.bgBlack.mouseEnabled = !0,
        this.bgBlack.mouseThrough = !1,
        this.updateProgress(0),
        this.mouseEnabled = !0,
        this.bg.alpha = 0,
        this.boxBg.alpha = 0,
        m.to(this.bg, {
            alpha: 1
        }, 300),
        m.to(this.boxBg, {
            alpha: 1
        }, 300),
        this.updateProgress(0),
        this.mouseEnabled = !0,
        x.timer.frameLoop(1, this, this.rotateRound),
        this.bg.skin = "",
        this.quan.skin = "",
        this.quan.skin = "res/x5_unpack/fx_loading.png",
        this.showEff(),
        this.setTitle(),
        x.timer.once(500, this, this.delayFun),
        x.timer.once(15e3, this, this.delay15000),
        x.stage.on("resizeComplete", this, this.resizeHandler),
        this.resizeHandler()
    }
    ,
    T.delay15000 = function() {
        (w.antiMiniGame || c.IsFate) && Vi.ins.EndGame()
    }
    ,
    T.delayFun = function() {
        Vi.ins.LoadEnd()
    }
    ,
    T.resizeHandler = function(t) {
        this.width = I.viewWidth,
        this.height = I.viewHeight,
        this.centerX = 0,
        this.centerY = 0;
        var e = I.viewWidth + 2
          , i = I.viewHeight;
        this.boxBg.width = e,
        this.bgBlack.width = e,
        this.bgBlack.height = i,
        this.bgBlack.x = 0,
        this.bgBlack.y = 0
    }
    ,
    T.setTitle = function() {}
    ,
    T.showEff = function() {
        x.timer.loop(34, this, this.loopFun)
    }
    ,
    T.loopFun = function() {
        this.quan.rotation += 3
    }
    ,
    T.rotateRound = function() {
        g.isAuditing && (this.imgRound.rotation += 7)
    }
    ,
    T.updateProgress = function(t) {
        t = Math.min(t, 1),
        g.isAuditing ? (this.boxNormal.visible = !1,
        this.boxAuditing.visible = !0,
        this.imgRound.skin = "img/loadingRound.png",
        this.txtProcess.text = Math.floor(100 * t) + "%") : (this.boxNormal.visible = !0,
        this.boxAuditing.visible = !1,
        this.loadingProgress.text = "正在加载场景")
    }
    ,
    T.onClose = function() {
        x.stage.off("resizeComplete", this, this.resizeHandler),
        x.timer.clear(this, this.rotateRound),
        x.timer.clear(this, this.loopFun),
        x.timer.clear(this, this.close),
        this.completeFun && this.completeFun.run()
    }
    ,
    e(0, T, "completeFun", function() {
        return this._completeFun
    }, function(t) {
        this._completeFun = t
    }),
    ta.createPanel = function() {
        return ta._ins = ta._ins || new ta
    }
    ,
    ta.uiView = {
        type: "BaseBox",
        props: {
            width: 576,
            height: 1024,
            centerY: 0,
            centerX: 0
        },
        child: [{
            type: "Image",
            props: {
                var: "bgBlack",
                skin: "res/x5_unpack/bgLoading.jpg"
            }
        }, {
            type: "Image",
            props: {
                width: 768,
                var: "bg",
                height: 1400,
                centerY: 0,
                centerX: 0
            },
            child: [{
                type: "Box",
                props: {
                    y: 747,
                    width: 438,
                    var: "boxNormal",
                    height: 82,
                    centerX: 0
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 30,
                        x: 0,
                        width: 438,
                        visible: !1,
                        skin: "x5_compWx/maploadingx_barbg.png",
                        sizeGrid: "0,15,0,15",
                        height: 20
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 33,
                        x: 9,
                        width: 420,
                        visible: !1,
                        var: "bar",
                        skin: "x5_compWx/maploadingx_bar.png",
                        height: 12.5
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 19,
                        x: 407,
                        visible: !1,
                        var: "point",
                        skin: "x5_compWx/maploadingx_point.png"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: -31,
                        width: 500,
                        skin: "x5_compWx/loadingInfoBg.png",
                        sizeGrid: "6,0,6,0",
                        height: 76
                    }
                }, {
                    type: "Text",
                    props: {
                        y: 12,
                        x: 89,
                        width: 262,
                        var: "loadingProgress",
                        text: "正在加载地图",
                        height: 23,
                        fontSize: 20,
                        font: "黑体",
                        color: "#FEFFFF",
                        align: "center"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 45,
                        width: 434,
                        var: "txtInfo",
                        text: "挑战永恒塔，解锁新的魂印类型",
                        height: 20,
                        fontSize: 20,
                        font: "SimHei",
                        color: "#A9DDF0",
                        centerX: 0,
                        align: "center"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 683,
                    var: "boxAuditing",
                    centerX: 2
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 31.5,
                        x: 230,
                        var: "imgRound",
                        pivotY: 32,
                        pivotX: 32
                    }
                }, {
                    type: "Text",
                    props: {
                        y: 69.5,
                        x: 204,
                        width: 51,
                        var: "txtProcess",
                        text: "1%",
                        height: 23,
                        fontSize: 20,
                        font: "黑体",
                        color: "#FEFFFF",
                        align: "center"
                    }
                }, {
                    type: "Text",
                    props: {
                        y: 112,
                        x: 0,
                        width: 459,
                        text: "正在进入游戏，请耐心等待。（此过程不消耗流量）",
                        height: 23,
                        fontSize: 20,
                        font: "黑体",
                        color: "#FEFFFF",
                        align: "center"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 425,
                    x: 205,
                    width: 358,
                    var: "box",
                    height: 318
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 179,
                        x: 179,
                        var: "quan",
                        skin: "res/x5_unpack/fx_loading.png",
                        anchorY: .5,
                        anchorX: .5
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 581,
                    width: 200,
                    centerX: 0
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 15,
                        var: "titlePic",
                        skin: "x5_compWx/jxys.png",
                        centerX: 0
                    }
                }, {
                    type: "Box",
                    props: {
                        y: 2,
                        var: "boxTitle",
                        centerX: 0
                    }
                }]
            }]
        }, {
            type: "Box",
            props: {
                width: 768,
                var: "boxBg",
                height: 1400,
                centerY: 0,
                centerX: 0
            },
            child: [{
                type: "Image",
                props: {
                    skin: "res/x5_unpack/loading_side.png",
                    left: 0,
                    height: 1400
                }
            }, {
                type: "Image",
                props: {
                    skin: "res/x5_unpack/loading_side.png",
                    scaleX: -1,
                    right: 214,
                    height: 1400
                }
            }]
        }, {
            type: "Image",
            props: {
                width: 178,
                top: 20,
                skin: "res/x5_unpack/maploadingx_logo.png",
                left: 20,
                height: 125
            }
        }]
    },
    ta._ins = null;
    var Zo, Jo = ta;
    function ta() {
        this.bgBlack = null,
        this.bg = null,
        this.boxNormal = null,
        this.bar = null,
        this.point = null,
        this.loadingProgress = null,
        this.txtInfo = null,
        this.boxAuditing = null,
        this.imgRound = null,
        this.txtProcess = null,
        this.box = null,
        this.quan = null,
        this.titlePic = null,
        this.boxTitle = null,
        this.boxBg = null,
        this.maskSp = null,
        this._resArr = [],
        this._completeFun = null,
        Zo.call(this),
        this.maskSp = new z
    }
    t(sa, "app.fateGame.f1.layer.AppCityScene", ea = qn),
    (n = sa.prototype).onDisplay = function(t) {
        this.once("undisplay", this, this.onUndisplay),
        us.ins.isServerFighting = !0
    }
    ,
    n.onUndisplay = function(t) {
        this.once("display", this, this.onDisplay),
        us.ins.isServerFighting = !1
    }
    ,
    n.onMapChanged = function(t) {
        0 == t && this.callLater(this.updateNpcs)
    }
    ,
    n.updateNpcs = function() {
        var t, e;
        if (Ji.ins.isInCity)
            for (e in this._roles)
                (t = this._roles[e]) && t.isNpc() && t.loadRoleRes()
    }
    ,
    n.addRole = function(t) {
        t && (this.addElement(t),
        oi.ins.addRole(t),
        x.__typeof(t, pa) && !t.info.personId.equal(A.ins.playerInfo.personId) && this.players.set(t.info.personId + "", t),
        this.updateRoleDisplay())
    }
    ,
    n.removeRole = function(t, e) {
        void 0 === e && (e = !0),
        t && (oi.ins.removeRole(t),
        x.__typeof(t, pa) && this.players.remove(t.info.personId + ""),
        this.updateRoleDisplay(),
        this.removeElement(t))
    }
    ,
    n.updateRoleDisplay = function() {
        this._gameLayer.visible && oi.ins.updateRoleDisplay()
    }
    ,
    n.reset = function() {
        this.removeAllRole(),
        this._sceneItems = [],
        this._bgView.reset(),
        this.lastNearPlayer = null,
        this.setLayerPos(0, 0),
        oi.ins.reset(),
        this.resetScaleArg(),
        this._showMap = !1,
        x.timer.clear(this, this.resetFocus),
        this._mapGridNodes && this._mapGridNodes.parent && (this._mapGridNodes.removeChildren(),
        this._bgView.removeChild(this._mapGridNodes))
    }
    ,
    n.removeAllRole = function(t) {
        void 0 === t && (t = !1);
        for (var e = this._roles.concat(), i = (A.ins.playerInfo.personId,
        0), s = e.length; i < s; i++) {
            var n = e[i];
            this.removeRole(n),
            n.recover(!0)
        }
    }
    ,
    n.resetFocus = function(t, e) {
        void 0 === t && (t = !1),
        void 0 === e && (e = !0),
        null != this._gameLayer && null != oi.ins.player && this.follow(t, e)
    }
    ,
    n.follow = function(t, e) {
        var i, s;
        void 0 === e && (e = !0),
        null != oi.ins.player && (i = oi.ins.player.x,
        s = oi.ins.player.y - 45,
        this.moveScene(i, s, t, e))
    }
    ,
    n.moveScene = function(t, e, i, s) {
        void 0 === i && (i = !1),
        void 0 === s && (s = !1),
        this._scaleIng = !1,
        this._targetScale != Number.MAX_VALUE && this._costTime != Number.MAX_VALUE && this._starTime != Number.MAX_VALUE && (this._scaleIng = this._curScale != this._targetScale,
        (i = w.now()) <= this._starTime + this._costTime ? (i = (i - this._starTime) / this._costTime * (this._targetScale - this._origeScale),
        this._curScale = this._origeScale + i) : (this._scaleCompletedFun && (this._scaleCompletedFun.run(),
        this._scaleCompletedFun = null),
        this._scaleIng = !1,
        this._curScale = this._targetScale,
        this._targetScale = Number.MAX_VALUE,
        this._costTime = Number.MAX_VALUE,
        this._starTime = Number.MAX_VALUE)),
        t *= this._curScale,
        e *= this._curScale;
        var n, o, i = 0, a = 0, r = I.w, l = I.h, h = .5 * r, c = .48 * l, p = this._bgView._w * this._curScale, u = this._bgView._h * this._curScale, t = t + this._gameLayer.x, e = e + this._gameLayer.y, d = this._bgView.x, g = this._bgView.y;
        if (r < p ? 0 != (i = this._scaleIng || t < h ? t - h : r - h < t ? t - r + h : 0) && (i - d <= 10 ? d = -10 : p - r - 10 <= i - d ? d = r - p + 10 : d -= i) : d = -this._gameLayer.x,
        l < u ? 0 != (a = this._scaleIng || e < c ? e - c : l - c < e ? e - l + c : 0) && (a - g <= 10 ? g = -10 : u - l - 10 <= a - g ? g = l - u + 10 : g -= a) : g = -this._gameLayer.y,
        this.setLayerPos(d, g, s),
        this.setVisibleCityRange(-d - 100, -g - 50, this._w + 100 + 100, this._h + 50 + 0),
        !this._otherPlayerVisible)
            for (o in this._roles)
                (n = this._roles[o]).visible = n.visible
    }
    ,
    n.setVisibleCityRange = function(t, e, i, s) {
        var n, o, a, r;
        for (r in this._roles)
            n = (a = this._roles[r]).visible,
            (o = a.x * this._curScale >= t && a.y * this._curScale >= e && a.x * this._curScale <= t + i && a.y * this._curScale <= e + s) != n && (a.visible = o);
        this.createNpcWx(t, e, i, s)
    }
    ,
    n.resumeScene = function(t) {
        void 0 === t && (t = !0),
        this.isHiding && (this.isHiding = !1,
        this._shadowLayer.visible = !0,
        this._bottomLayer.visible = !0,
        this._projectiveLayer.visible = !0,
        this._gameLayer.visible = !0,
        this._topLayer.visible = !0,
        this._nameBottomImgLayer.visible = !0,
        this._nameLayer.visible = !0,
        this._nameTopImgLayer.visible = !0,
        this._nameFxLayer1.visible = !0,
        this._nameFxLayer2.visible = !0,
        this._roletopLayer.visible = !0,
        this._titleLayer.visible = !0,
        this._numberLayer.visible = !0,
        this._nearbyMsgLayer.visible = !0,
        this._tempLayer.visible = !0,
        this.updateRoleDisplay(),
        this.resetFocus(!1, t),
        this._mapGridNodes) && this._mapGridNodes.parent && (this._mapGridNodes.removeChildren(),
        this._bgView.removeChild(this._mapGridNodes))
    }
    ,
    n.showLayer = function(t, e) {
        void 0 === e && (e = "");
        e = t ? 1 : 0;
        this._shadowLayer.alpha = e,
        this._bottomLayer.alpha = e,
        this._projectiveLayer.alpha = e,
        this._gameLayer.alpha = e,
        this._topLayer.alpha = e,
        this._nameBottomImgLayer.alpha = e,
        this._nameLayer.alpha = e,
        this._nameTopImgLayer.alpha = e,
        this._nameFxLayer1.alpha = e,
        this._nameFxLayer2.alpha = e,
        this._roletopLayer.alpha = e,
        this._titleLayer.alpha = e,
        this._numberLayer.alpha = e,
        this._nearbyMsgLayer.alpha = e,
        this._tempLayer.alpha = e,
        x.stage.mouseEnabled = t
    }
    ,
    n.hideScene = function() {
        if (!this.isHiding) {
            this.isHiding = !0,
            this._shadowLayer.visible = !1,
            this._bottomLayer.visible = !1,
            this._projectiveLayer.visible = !1,
            this._gameLayer.visible = !1,
            this._topLayer.visible = !1,
            this._nameBottomImgLayer.visible = !1,
            this._nameLayer.visible = !1,
            this._nameTopImgLayer.visible = !1,
            this._nameFxLayer1.visible = !1,
            this._nameFxLayer2.visible = !1,
            this._roletopLayer.visible = !1,
            this._titleLayer.visible = !1,
            this._numberLayer.visible = !1,
            this._nearbyMsgLayer.visible = !1,
            this._tempLayer.visible = !1;
            for (var t = 0, e = this._roles.length; t < e; t++) {
                var i = this._roles[t];
                x.__typeof(i, _n) && i.sceneHideRole(!0)
            }
        }
    }
    ,
    n.addElement = function(t) {
        this._otherPlayerVisible || (t.visible = t.visible),
        t.updatePosition(),
        "act11" == t.actType ? t.setAct("act11", !1, !1) : t.setAct("act01", !0, !1),
        this.isInScene(t) || this._roles.push(t),
        m.clearAll(t),
        Yt.removeTweens(t, !0),
        t.scale(I.roleScale * t.roleScale, I.roleScale * t.roleScale),
        t.alpha = 1,
        t.isShowFly ? (this._birdLayer.addChild(t),
        this._birdLayer.addChild(t.shadow),
        t.addChild(t.topView),
        t.topView.x = 0,
        t.topView.y = 94,
        t.updateName(),
        t.topView.reCalc()) : (this._gameLayer.addChild(t),
        t != oi.ins.player && (x.__typeof(t, pa),
        t.sceneHideRole(!this._gameLayer.visible)),
        this._shadowLayer.addChild(t.shadow),
        t.topView.setParantScene(this),
        t.updateName(),
        t.topView.reCalc(),
        t.loop())
    }
    ,
    n.movePlayer = function(t, e, i) {
        t = this.players.get(t + "");
        t && t.pathByCoo(e, i)
    }
    ,
    n.mapReady = function() {
        k.getCityinsance().data = this._bgView,
        this.updateWH();
        var t = !1;
        Ji.ins.isInit || (t = Ji.ins.isInit = !0,
        this.createNpc(),
        this.enableEnterFrame()),
        this.calcBornPos(t),
        this.lastNearPlayer = null,
        us.ins.isSameMap && x.timer.once(500, this, function() {
            us.ins.isSameMap = !1
        }),
        x.timer.loop(1e3, this, this.resetFocus),
        null != this._loadedFun && this._loadedFun.run()
    }
    ,
    n.calcBornPos = function(t) {
        var e = oi.ins.player
          , i = (e.parent || this.addRole(e),
        Ji.ins.playerX)
          , s = Ji.ins.playerY;
        $i.ins.cityCopyPos ? (i = $i.ins.cityCopyPos[0],
        s = $i.ins.cityCopyPos[1]) : $i.ins.npcCopyPos && (i = $i.ins.npcCopyPos[0],
        s = $i.ins.npcCopyPos[1]),
        $i.ins.cityCopyPos = null,
        $i.ins.npcCopyPos = null,
        Ji.ins.isNeedRandomPos = !0,
        e.info.x = i,
        e.info.y = s,
        e.x = i,
        e.y = s,
        e.armX = i,
        e.armY = s,
        e.direct = 360 * Math.random() - 180,
        Ji.ins.setPlayerPos(i, s),
        this.setLayerPos(0, 0),
        this.resetFocus()
    }
    ,
    n.__enterFrame = function(t) {
        for (var e = this._roles.length, i = x.timer.currFrame % 3 == 0, s = 0; s < e; s++) {
            var n = this._roles[s];
            n.loop(),
            i && (k.getCityinsance().isAlphaByCoo(n.x, n.y) ? n.isTransparent = !0 : n.isTransparent = !1)
        }
        var o, a = oi.ins.player, r = (a && (a.isPathing || this._targetScale != Number.MAX_VALUE && this._costTime != Number.MAX_VALUE && this._starTime != Number.MAX_VALUE) && this.follow(!1),
        8 < this.layoutCount++ && (this.layoutElements(),
        this.layoutCount = 0),
        oi.ins.player);
        if (8 < this.nearCheckCounter++) {
            if (this.nearCheckCounter = 0,
            null != r) {
                var l, a = this.NEAR_DIS * S.GRID_BORDER + 10, h = a * a;
                for (l in this._roles) {
                    var c, p = this._roles[l];
                    p && p.isPlayer() && p != r && !p.isShowFly && (h <= (c = this.distanceSQ(r.x, r.y, p.x, p.y)) || (h = c,
                    o = p))
                }
            } else
                o = null;
            this.lastNearPlayer != o && (this.lastNearPlayer = o,
            Ji.ins.event("Near_Player", o))
        }
    }
    ,
    n.distance = function(t, e, i, s) {
        return Math.sqrt(this.distanceSQ(t, e, i, s))
    }
    ,
    n.distanceSQ = function(t, e, i, s) {
        t -= i,
        i = e - s;
        return t * t + i * i
    }
    ,
    n.createNpc = function() {}
    ,
    n.createNpcWx = function(t, e, i, s) {
        if (oi.ins.player.parent) {
            this.curPos = [t, e, i, s];
            var n, o = ri.ins.getNpcsByType(1);
            for (n in o) {
                var a, r = (a = o[n]).id;
                S.tile2Coo(a.px) * this._curScale >= t && S.tile2Coo(a.py) * this._curScale >= e && S.tile2Coo(a.px) * this._curScale <= t + i && S.tile2Coo(a.py) * this._curScale <= e + s && (a = Gi.fromNumber(r),
                (a = oi.ins.getRole(a)) || ((a = dt.getItemByClass("app.fateGame.role.AppNpc", to)).npcId = r,
                this.addRole(a)),
                a.updateName())
            }
        }
    }
    ,
    n.getNpcById = function(t) {
        for (var e = this.gameLayer.numChildren - 1; 0 <= e; e--) {
            var i = this.gameLayer.getChildAt(e);
            if (x.__typeof(i, to) && i.npcId == t)
                return i
        }
        return null
    }
    ,
    n.addedToStageHandler = function(t) {
        ea.prototype.addedToStageHandler.call(this, t),
        this.once("undisplay", this, this.removedFromStageHandler),
        x.stage.on("click", this, this.clickStageHandler),
        Ji.ins.on("cityUpdate", this, this.cityUpdateHandler),
        Ji.ins.on("cityMove", this, this.cityMoveHandler),
        Ji.ins.on("cityUpdateNpc", this, this.cityUpdateNpcHandler),
        Ji.ins.isInit && (this.enableEnterFrame(),
        Ji.ins.updateNpcs())
    }
    ,
    n.removedFromStageHandler = function(t) {
        ea.prototype.removedFromStageHandler.call(this, t),
        x.stage.off("click", this, this.clickStageHandler);
        t = oi.ins.player;
        t && t.isControlByPlayer && t.moveByAngle(NaN),
        Ji.ins.off("cityUpdate", this, this.cityUpdateHandler),
        Ji.ins.off("cityMove", this, this.cityMoveHandler),
        Ji.ins.off("cityUpdateNpc", this, this.cityUpdateNpcHandler),
        this.disableEnterFrame(),
        this.clear(),
        M.ins.clearUpdataSceneSkin(),
        this._bgView && this._bgView.removeSelf()
    }
    ,
    n.cityUpdateHandler = function(t) {
        if (!g.isWXNew)
            if (t) {
                var e = this.players.get(t + "")
                  , t = Ji.ins.getEquipInfo(t);
                e && t ? e.updateByEquipInfo(t) : e ? this.removeRole(e) : t && this.addRole(pa.createByEquipInfo(t))
            } else {
                for (var i = Ji.ins.getHideEquipInfo(), s = {}, n = 0, o = i.length; n < o; n++) {
                    var a = this.getRole(i[n].playerId);
                    s[i[n].playerId + ""] = !0,
                    a ? a.updateByEquipInfo(i[n]) : this.addRole(pa.createByEquipInfo(i[n]))
                }
                for (var r = A.ins.playerInfo.showPlayerId, n = 0, o = this._roles.length; n < o; n++)
                    a = this._roles[n],
                    !x.__typeof(a, pa) || r.equal(a.info.personId) || s[a.info.personId + ""] || this.removeRole(a)
            }
    }
    ,
    n.cityMoveHandler = function(t) {
        var e = this.players.get(t + "")
          , t = Ji.ins.getEquipInfo(t);
        e && t && e.pathByCoo(t.position.x, t.position.y)
    }
    ,
    n.cityUpdateNpcHandler = function() {
        oi.ins.player
    }
    ,
    n.mouseDownStageHandler = function(t) {}
    ,
    n.mouseMoveStageHandler = function(t) {
        var e, i, s, n = oi.ins.player;
        n.aiManager.isAuto || (e = x.stage.mouseX,
        (i = x.stage.mouseY) > .85 * x.stage.height && this.rockerBg && !this.rockerBg.parent) || (this.isMovedByPlayer || (e - this.mouseDownX) * (e - this.mouseDownX) + (i - this.mouseDownY) * (i - this.mouseDownY) >= this.minMove * this.minMove ? (s = Math.atan2(i - this.mouseDownY, e - this.mouseDownX),
        n.moveByAngle(s),
        this.updateRocker(e, i),
        this.isMovedByPlayer = !0) : n.isControlByPlayer && n.moveByAngle(NaN))
    }
    ,
    n.mouseUpStageHandler = function(t) {
        t && t.stopPropagation(),
        x.stage.off("mousemove", this, this.mouseMoveStageHandler),
        x.stage.off("mouseup", this, this.mouseUpStageHandler),
        this.mouseDownX = NaN,
        this.mouseDownY = NaN;
        t = oi.ins.player;
        t.isControlByPlayer && (t.moveByAngle(NaN),
        Ji.ins.setPlayerPos(Math.floor(t.x), Math.floor(t.y)),
        M.ins.event("ROLE_MOVE_POINT", [t.x, t.y])),
        this.playerArrivePointHandler(),
        this.removeRocker()
    }
    ,
    n.clickStageHandler = function(t) {
        var e, i;
        this._scaleIng || k.getCityinsance().data && !k.getCityinsance().data.tileByteArrays || this.isMovedByPlayer || (this.clickedPlayer = null,
        (t.target == this || this.contains(t.target)) && (e = (x.stage.mouseX - this._gameLayer.x * this.scaleX) / this.scaleX,
        i = (x.stage.mouseY - this._gameLayer.y * this.scaleY) / this.scaleY,
        e /= this._curScale,
        i /= this._curScale,
        e = this.getRoleByPoint(e, i),
        i = oi.ins.player,
        e) && (x.__typeof(e, to) ? (this.clickedPlayer = e,
        Le.ins.pathToNpc(e.npcId, b.create(this, this.playerArrivePointHandler, [!0, i]), null, null)) : x.__typeof(e, pa) && e.info.nickName != A.ins.playerInfo.nickName && (this.NEAR_DIS,
        t.stopPropagation())))
    }
    ,
    n.getAroundPoint = function(t, e, i, s, n) {
        for (var o, a = S.coo2Tile(i), r = S.coo2Tile(s), l = a + -1 * n; l <= a + n; l++)
            for (var h = r + -1 * n; h <= r + n; h++) {
                var c = S.tile2Coo(l)
                  , p = S.tile2Coo(h);
                this.distance(i, s, c, p) > n * S.GRID_BORDER || k.getCityinsance().canWalkByCoo(c, p) && (null == o ? o = new pt(c,p) : this.distanceSQ(t, e, o.x, o.y) > this.distanceSQ(t, e, c, p) && o.setTo(c, p))
            }
        return o = null == o ? new pt(i,s) : o
    }
    ,
    n.clear = function() {
        this.reset(),
        this.bgView.bgSrc && this.bgView.bgSrc.indexOf(M.ins.curMapCfg.qMapresid)
    }
    ,
    n.getRoleByPoint = function(t, e) {
        for (var i, s = this.gameLayer.numChildren - 1; 0 <= s; s--) {
            var n = this.gameLayer.getChildAt(s);
            if (x.__typeof(n, to) || x.__typeof(n, pa))
                if (x.__typeof(n, pa) && 0,
                t >= n.x + this.npcRect.x && t <= n.x + this.npcRect.x + this.npcRect.width && e >= n.y + this.npcRect.y + 0 && e <= n.y + this.npcRect.y + this.npcRect.height) {
                    if (x.__typeof(n, to))
                        return n.canClick ? n : null;
                    i = i || n
                }
        }
        return i
    }
    ,
    n.onSceneSkinChange = function() {}
    ,
    n.setLayerPos = function(t, e, i) {
        ea.prototype.setLayerPos.call(this, t, e, i = void 0 === i ? !0 : i)
    }
    ,
    e(0, n, "showMap", ea.prototype._$get_showMap, function(t) {
        if (!(this._showMap == t && t && this._mapGridNodes && this._mapGridNodes.parent))
            if (this._showMap = t) {
                this._mapGridNodes || (this._mapGridNodes = new z),
                this._mapGridNodes.removeChildren();
                for (var t = k.getCityinsance(), e = t.data.gridW, i = t.data.gridH, s = 0; s < i; s++)
                    for (var n = 0; n < e; n++) {
                        var o = k.getCityinsance().canPass(n, s)
                          , a = new J;
                        o ? a.loadImage("x5_few/few_canwalk.png", 0, 0, S.GRID_BORDER, S.GRID_BORDER) : a.loadImage("x5_few/few_cannotwalk.png", 0, 0, S.GRID_BORDER, S.GRID_BORDER),
                        a.pos(n * S.GRID_BORDER, s * S.GRID_BORDER),
                        this._mapGridNodes.addChild(a)
                    }
                this._bgView.addChild(this._mapGridNodes)
            } else
                this._mapGridNodes && this._mapGridNodes.parent && (this._mapGridNodes.removeChildren(),
                this._bgView.removeChild(this._mapGridNodes))
    }),
    sa.setSkinBoxVisible = function(t, e) {
        void 0 === e && (e = !1);
        var i, s = t.childData;
        for (i in s)
            s[i].visible = e
    }
    ;
    var ea, ia = sa;
    function sa() {
        this.players = new ut,
        this.NEAR_DIS = 50,
        this.nearCheckCounter = null,
        this.lastNearPlayer = null,
        this.curPos = [],
        ea.call(this),
        M.ins.on("Event_Change_Map", this, this.onMapChanged),
        this.once("display", this, this.onDisplay)
    }
    t(aa, "app.fateGame.mission.AppMovieScreenTalkPanel", na = Gn),
    (i = aa.prototype).updateCfgEx = function(t, e, i, s) {
        null == s && (s = []),
        this._talkId = t,
        this._auto = e,
        this._overHandler = i,
        this._talkContents = s,
        this.isUpdate && this._talkId && (this._talks = We.ins.getItemsByType(this._talkId),
        this.box0.visible = this.box1.visible = this.box2.visible = this.box3.visible = this.box4.visible = !1,
        this._systemNotices = new Ue(5),
        this.head_left.skin = "",
        this.head_right.skin = "",
        this.playNext())
    }
    ,
    i.onClick = function(t) {
        this.isLooping ? this.endLoop() : this.playNext()
    }
    ,
    i.playNext = function() {
        if (this._talkCfg = this._talks.shift(),
        0 < this._talkContents.length && (this.curContent = this._talkContents.shift()),
        null != this._talkCfg) {
            this._systemNotices.shift({
                cfg: this._talkCfg,
                index: this.idx
            });
            for (var t = 0, e = .75 * I.viewWidth, i = 2 * I.viewHeight / 3, s = i - 20, n = 0; n < this._systemNotices.length; n++) {
                var o = this["box" + n]
                  , a = this._systemNotices.dataLst[n].cfg
                  , r = o.getChildByName("nameText")
                  , l = o.getChildByName("htmlDiv")
                  , h = (l.style.fontSize = 24,
                l.style.leading = 4,
                o.getChildByName("itemBg"))
                  , c = o.getChildByName("itemBg2")
                  , p = o.getChildByName("lineImg")
                  , u = (r.text = "player" == a.name ? A.ins.playerInfo.nickName : a.name,
                r = this.parseContent(a, this.curContent),
                fi.parseSmallFace(r));
                l.style.lineHeight = 38,
                1 == a.position ? l.color = "#bcc6cf" : l.color = "#69d190",
                l.width = e - 2 * l.x,
                !fi.trySetHtml(l, u) && g.isDebugMode && alert("MovieScreenTalkRESOURCE 的content解析出错，id:" + a.id),
                h.width = Math.min(e, l.contextWidth + 65 + 5),
                c.width = Math.min(e, l.contextWidth + 65 + 5),
                p.width = h.width - 2 * p.x,
                h.height = l.contextHeight + 85 + 17,
                c.height = l.contextHeight + 85 + 17,
                o.visible = !0,
                m.clearAll(o),
                1 == a.position ? (o.x = 20,
                h.visible = !0,
                c.visible = !1) : (o.x = I.viewWidth - h.width - 20,
                h.visible = !1,
                c.visible = !0),
                0 == n ? (o.y = s,
                m.to(o, {
                    y: s - o.height
                }, 560, Rt.circOut),
                x.timer.loop(70, this, this.loopTime),
                this._str = r,
                this._htmlDiv = l,
                this._num = 0,
                t = o.height,
                this.traceId = this._talkCfg.id,
                null == this._mc && (this._mc = new Zs),
                o.addChild(this._mc),
                this._mc.x = h.width - 48,
                this._mc.y = h.height - 71,
                this._mc.setIsStart(!0),
                this.parseSound(a),
                this.loopTime()) : (o.y = s - o.height - 40,
                m.to(o, {
                    y: o.y - t
                }, 560, Rt.circOut)),
                s = o.y
            }
            if (m.clearAll(this.head_left),
            m.clearAll(this.head_right),
            1 == this._talkCfg.position) {
                var d = this.getNameStr(this._talkCfg);
                if (this.head_left.skin = this.url + d,
                this._lastLine && this._lastLine.position == this._talkCfg.position)
                    return;
                this.head_left.x = 271,
                this.head_left.y = i - (0 <= d.indexOf("npc_001") ? 40 : 0),
                m.to(this.head_left, {
                    x: 371,
                    alpha: 1
                }, 300, Rt.sineInOut),
                this.head_left.filters = null,
                this.head_right.x = I.viewWidth - 450 + 80,
                m.to(this.head_right, {
                    x: I.viewWidth - 450 + 180,
                    alpha: 1
                }, 300, Rt.sineInOut),
                this.head_right.filters = this.blinFx
            } else {
                d = this.getNameStr(this._talkCfg);
                if (this.head_right.skin = this.url + d,
                this._lastLine && this._lastLine.position == this._talkCfg.position)
                    return;
                this.head_left.x = 371,
                m.to(this.head_left, {
                    x: 271,
                    alpha: 1
                }, 300, Rt.sineInOut),
                this.head_left.filters = this.blinFx,
                this.head_right.x = I.viewWidth - 450 + 180,
                this.head_right.y = i - (0 <= d.indexOf("npc_001") ? 40 : 0),
                m.to(this.head_right, {
                    x: I.viewWidth - 450 + 80,
                    alpha: 1
                }, 300, Rt.sineInOut),
                this.head_right.filters = null
            }
            this._lastLine = this._talkCfg
        } else
            this.onOver()
    }
    ,
    i.parseSound = function(t) {
        var e = "";
        if (1 == t.chooseTalk) {
            for (var i, s = t.sound.split("|"), n = 0; n < s.length; n++)
                if (i = s[n].split(":"),
                parseInt(i[0]) == p.ins.wuhunSelectTargetType) {
                    e = i[1];
                    break
                }
        } else
            e = t.sound;
        "" != e && (t = parseInt(e),
        -1 == this.hasSendIdList.indexOf(t)) && this.hasSendIdList.push(t)
    }
    ,
    i.parseContent = function(t, e) {
        null == e && (e = []);
        var i = "";
        if (1 == t.chooseTalk) {
            for (var s = 0; s < t.content.length; s++)
                for (var n in t.content[s])
                    if (parseInt(n) == p.ins.wuhunSelectTargetType) {
                        i = t.content[s][n];
                        break
                    }
            "" == i && (i = t.content[0][0],
            console.log("策划没有配武魂 MOVIESCREENTALKRESOURCE表 id:" + t.id))
        } else
            i = t.content[0];
        return "" == i && console.log("剧情对话解析出错 MOVIESCREENTALKRESOURCE表 id:" + t.id),
        i = fi.filterColor(i),
        i = 0 < e.length ? fi.replaceInfos(i, e) : i
    }
    ,
    i.getNameStr = function(t) {
        return "player" == t.icon ? 1 == A.ins.playerInfo.sex ? "npc_002.png" : "npc_001wx.png" : "tigerplayer" == t.icon ? "sr_hhsf" + (1 == A.ins.playerInfo.sex ? "nan" : "nv") + ".png" : t.icon
    }
    ,
    i.endLoop = function() {
        this._num = this._str.length,
        this.loopTime()
    }
    ,
    i.loopTime = function(t) {
        void 0 === t && (t = 0),
        this._num++,
        this._num > this._str.length && (this._num = this._str.length,
        x.timer.clear(this, this.loopTime),
        this._auto) && x.timer.once(100, this, this.onClick),
        t = this._talkCfg && 1 == this._talkCfg.isWriter ? (this._num = this._str.length,
        x.timer.clear(this, this.loopTime),
        fi.parseSmallFace(this._str)) : (this._mc.visible = this._num == this._str.length,
        "#" == this._str.substr(0, this._num).substr(-1, 1) && (this._num = this._num + 2),
        t = this._str.substr(0, this._num),
        fi.parseSmallFace(t)),
        !fi.trySetHtml(this._htmlDiv, t) && g.isDebugMode && alert("MovieScreenTalkRESOURCE 的content解析出错，id:" + this.traceId + " 出错文本：" + this._str)
    }
    ,
    i.onOver = function() {
        this.close()
    }
    ,
    i.getUIView = function() {
        return aa.uiView
    }
    ,
    i.getAltas = function() {
        return []
    }
    ,
    i.onOpen = function() {
        var t, e = this;
        this.isUpdate = !0,
        this.bg.mouseThrough = !1,
        this.bg.mouseEnabled = !0,
        this.updateCfgEx(this._talkId, this._auto, this._overHandler, this._talkContents),
        x.stage.on("resizeComplete", this, this.resizeHandler),
        this.bg.on("click", this, this.onBgClick),
        0 < We.ins.getItemsByType(this._talkId).length && (t = this).callLater(function() {
            x.stage.on("click", t, e.onClick)
        }),
        this.resizeHandler(null)
    }
    ,
    i.onClose = function() {
        this._mc && this._mc.setIsStart(!1),
        this.hasSendIdList = [],
        this._talkContents = [],
        m.clearTween(this.head_left),
        m.clearTween(this.head_right),
        m.clearAll(this.box0),
        m.clearAll(this.box1),
        m.clearAll(this.box2),
        x.stage.off("resizeComplete", this, this.resizeHandler),
        this.bg.off("click", this, this.onBgClick),
        x.stage.off("click", this, this.onClick),
        x.timer.clear(this, this.loopTime),
        this._talkId = 0,
        this._lastLine = null,
        this.isUpdate = !1,
        this._overHandler && this._overHandler.run(),
        this._completeFun && this._completeFun.run()
    }
    ,
    i.onBgClick = function(t) {}
    ,
    i.resizeHandler = function(t) {
        if (this.width = I.viewWidth,
        this.height = I.viewHeight,
        this._talkCfg) {
            1 == this._talkCfg.position ? (this.head_left.x = 371,
            this.head_right.x = I.viewWidth - 450 + 180) : (this.head_left.x = 271,
            this.head_right.x = I.viewWidth - 450 + 80);
            for (var e = 0; e < this._systemNotices.length; e++) {
                var i = this["box" + e]
                  , s = this._systemNotices.dataLst[e].cfg
                  , n = i.getChildByName("itemBg");
                1 == s.position ? i.x = 20 : i.x = I.viewWidth - n.width - 20
            }
        }
    }
    ,
    e(0, i, "completeFun", function() {
        return this._completeFun
    }, function(t) {
        this._completeFun = t
    }),
    e(0, i, "isLooping", function() {
        return this._num < this._str.length
    }, na.prototype._$set_isLooping),
    aa.createPanel = function() {
        return aa._ins = aa._ins || new aa
    }
    ,
    aa.uiView = {
        type: "BaseBox",
        props: {
            width: 576,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                var: "bg",
                top: -2,
                skin: "x5_compWx/bg_black.png",
                sizeGrid: "2,2,2,2",
                right: -2,
                left: -2,
                bottom: -2,
                alpha: .8
            }
        }, {
            type: "Image",
            props: {
                y: 663,
                x: 271,
                width: 450,
                var: "head_left",
                scaleX: -1,
                height: 450
            }
        }, {
            type: "Image",
            props: {
                y: 663,
                x: 210,
                width: 450,
                var: "head_right",
                height: 450
            }
        }, {
            type: "Box",
            props: {
                y: 500,
                x: 223,
                var: "box0",
                name: "box0"
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 355,
                    skin: "x5_compWx/bg_screen.png",
                    sizeGrid: "13,18,30,59",
                    name: "itemBg",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 355,
                    skin: "x5_compWx/bg_screen2.png",
                    sizeGrid: "12,65,30,19",
                    name: "itemBg2",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 30,
                    x: 10,
                    width: 100,
                    skin: "x5_compWx/bg_screen_line.png",
                    sizeGrid: "0,36,0,54",
                    name: "lineImg",
                    height: 20
                }
            }, {
                type: "Label",
                props: {
                    y: 18,
                    x: 29,
                    width: 135,
                    text: "唐三",
                    strokeColor: "",
                    stroke: 0,
                    name: "nameText",
                    height: 19,
                    fontSize: 24,
                    font: "黑体",
                    color: "#FFEEA0",
                    align: "left"
                }
            }, {
                type: "HTMLDivElement",
                props: {
                    y: 57,
                    x: 38,
                    wordWrap: !0,
                    width: 281,
                    stroke: 0,
                    name: "htmlDiv",
                    leading: 4,
                    innerHTML: "一行有好多个字啊一",
                    height: 35,
                    fontSize: 24,
                    font: "黑体",
                    color: "#BCC6CF",
                    align: "left"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 355,
                x: 223,
                var: "box1",
                name: "box1"
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 355,
                    skin: "x5_compWx/bg_screen.png",
                    sizeGrid: "13,18,30,59",
                    name: "itemBg",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 355,
                    skin: "x5_compWx/bg_screen2.png",
                    sizeGrid: "12,65,30,19",
                    name: "itemBg2",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 30,
                    x: 10,
                    width: 220,
                    skin: "x5_compWx/bg_screen_line.png",
                    sizeGrid: "0,36,0,54",
                    name: "lineImg",
                    height: 20
                }
            }, {
                type: "Label",
                props: {
                    y: 18,
                    x: 29,
                    width: 135,
                    text: "唐三",
                    strokeColor: "",
                    stroke: 0,
                    name: "nameText",
                    height: 19,
                    fontSize: 24,
                    font: "黑体",
                    color: "#FFEEA0",
                    align: "left"
                }
            }, {
                type: "HTMLDivElement",
                props: {
                    y: 57,
                    x: 38,
                    wordWrap: !0,
                    width: 281,
                    stroke: 0,
                    name: "htmlDiv",
                    leading: 4,
                    innerHTML: "一行有好多个字啊一",
                    height: 35,
                    fontSize: 24,
                    font: "黑体",
                    color: "#BCC6CF",
                    align: "left"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 213,
                x: 223,
                var: "box2",
                name: "box2"
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 355,
                    skin: "x5_compWx/bg_screen.png",
                    sizeGrid: "13,18,30,59",
                    name: "itemBg",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 355,
                    skin: "x5_compWx/bg_screen2.png",
                    sizeGrid: "12,65,30,19",
                    name: "itemBg2",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 30,
                    x: 10,
                    width: 220,
                    skin: "x5_compWx/bg_screen_line.png",
                    sizeGrid: "0,36,0,54",
                    name: "lineImg",
                    height: 20
                }
            }, {
                type: "Label",
                props: {
                    y: 18,
                    x: 29,
                    width: 135,
                    text: "唐三",
                    strokeColor: "",
                    stroke: 0,
                    name: "nameText",
                    height: 19,
                    fontSize: 24,
                    font: "黑体",
                    color: "#FFEEA0",
                    align: "left"
                }
            }, {
                type: "HTMLDivElement",
                props: {
                    y: 57,
                    x: 38,
                    wordWrap: !0,
                    width: 281,
                    stroke: 0,
                    name: "htmlDiv",
                    leading: 4,
                    innerHTML: "一行有好多个字啊一",
                    height: 35,
                    fontSize: 24,
                    font: "黑体",
                    color: "#BCC6CF",
                    align: "left"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: 71,
                x: 223,
                var: "box3",
                name: "box3"
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 355,
                    skin: "x5_compWx/bg_screen.png",
                    sizeGrid: "13,18,30,59",
                    name: "itemBg",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 355,
                    skin: "x5_compWx/bg_screen2.png",
                    sizeGrid: "12,65,30,19",
                    name: "itemBg2",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 30,
                    x: 10,
                    width: 220,
                    skin: "x5_compWx/bg_screen_line.png",
                    sizeGrid: "0,36,0,54",
                    name: "lineImg",
                    height: 20
                }
            }, {
                type: "Label",
                props: {
                    y: 18,
                    x: 29,
                    width: 135,
                    text: "唐三",
                    strokeColor: "",
                    stroke: 0,
                    name: "nameText",
                    height: 19,
                    fontSize: 24,
                    font: "黑体",
                    color: "#FFEEA0",
                    align: "left"
                }
            }, {
                type: "HTMLDivElement",
                props: {
                    y: 57,
                    x: 38,
                    wordWrap: !0,
                    width: 281,
                    stroke: 0,
                    name: "htmlDiv",
                    leading: 4,
                    innerHTML: "一行有好多个字啊一",
                    height: 35,
                    fontSize: 24,
                    font: "黑体",
                    color: "#BCC6CF",
                    align: "left"
                }
            }]
        }, {
            type: "Box",
            props: {
                y: -68,
                x: 223,
                var: "box4",
                name: "box4"
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 355,
                    skin: "x5_compWx/bg_screen.png",
                    sizeGrid: "13,18,30,59",
                    name: "itemBg",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 355,
                    skin: "x5_compWx/bg_screen2.png",
                    sizeGrid: "12,65,30,19",
                    name: "itemBg2",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 30,
                    x: 10,
                    width: 220,
                    skin: "x5_compWx/bg_screen_line.png",
                    sizeGrid: "0,36,0,54",
                    name: "lineImg",
                    height: 20
                }
            }, {
                type: "Label",
                props: {
                    y: 18,
                    x: 29,
                    width: 135,
                    text: "唐三",
                    strokeColor: "",
                    stroke: 0,
                    name: "nameText",
                    height: 19,
                    fontSize: 24,
                    font: "黑体",
                    color: "#FFEEA0",
                    align: "left"
                }
            }, {
                type: "HTMLDivElement",
                props: {
                    y: 57,
                    x: 38,
                    wordWrap: !0,
                    width: 281,
                    stroke: 0,
                    name: "htmlDiv",
                    leading: 4,
                    innerHTML: "一行有好多个字啊一",
                    height: 35,
                    fontSize: 24,
                    font: "黑体",
                    color: "#BCC6CF",
                    align: "left"
                }
            }]
        }]
    },
    aa._ins = null;
    var na, oa = aa;
    function aa() {
        this.bg = null,
        this.head_left = null,
        this.head_right = null,
        this.box0 = null,
        this.box1 = null,
        this.box2 = null,
        this.box3 = null,
        this.box4 = null,
        this._talkId = 0,
        this._auto = !1,
        this._talks = null,
        this._talkContents = [],
        this._systemNotices = new Ue(5),
        this.url = "art/res/x5Npc/screen/",
        this._lastLine = null,
        this.blinFx = null,
        this.isUpdate = !1,
        this.traceId = 0,
        this._talkCfg = null,
        this.curContent = [],
        this._overHandler = null,
        this._completeFun = null,
        this.idx = -1,
        this._str = "",
        this._htmlDiv = null,
        this._num = 0,
        this._mc = null,
        this.hasSendIdList = [],
        na.call(this);
        this.blinFx = [new Lt([.5, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, 1, 0])]
    }
    t(ha, "app.fateGame.mission.AppSoulPowerTestPanel", ra = Gn),
    (s = ha.prototype).getAltas = function() {
        return this._resArr
    }
    ,
    s.getUIView = function() {
        return ha.uiView
    }
    ,
    s.onOpen = function() {
        this.mouseEnabled = !0,
        x.loader.load("res/x5_unpack/bgLoading.jpg"),
        x.loader.load("res/x5_unpack/fx_loading.png"),
        x.loader.load("res/x5_unpack/maploadingx_logo.png"),
        x.loader.load("res/x5_unpack/loading_side.png"),
        this.fresh(),
        c.send("37091")
    }
    ,
    s.fresh = function() {
        x.stage.on("mousedown", this, this.startTestHandler),
        x.stage.on("resizeComplete", this, this.resizeHandler),
        this._imgReturn.visible = !1,
        this.clearEffect(),
        this.showClickTips(),
        this.showParticel(),
        fi.playSimpleVmc(this.effectBox1, "art/res/other/x5/hlcsl_cnq1.json", 0, 0, Number(ha.DEBUG_SCALE1 * ha.DEBUG_SCALE / 1e6), !0),
        this.resizeHandler()
    }
    ,
    s.onClose = function() {
        x.stage.off("mousedown", this, this.startTestHandler),
        x.stage.off("click", this, this.onClickHandler),
        x.stage.off("resizeComplete", this, this.resizeHandler),
        x.stage.off("loadJsComplete", this, this.close),
        x.timer.clearAll(this),
        this.clearEffect(),
        x.loader.cancelLoadByUrl("res/x5_unpack/soul_power_bgWx.jpg"),
        this._particle && (this._particle.stop(),
        this._particle = null),
        this.completeFun && this.completeFun.run()
    }
    ,
    s.resizeHandler = function(t) {
        this.width = I.viewWidth,
        this.height = I.viewHeight,
        this.centerX = 0,
        this.centerY = 0,
        this._touchPanel.width = this.width,
        this._touchPanel.height = this.height,
        this._contentBox.x = (this.width - this._contentBox.width) / 2,
        this._contentBox.y = (this.height - this._contentBox.height) / 2 - 30,
        this._imgReturn.x = (this.width - (this._imgReturn.width <= 0 ? 293 : this._imgReturn.width)) / 2,
        this._particle.x = this._touchPanel.width / 2,
        this._particle.y = this._touchPanel.height / 2
    }
    ,
    s.showClickTips = function() {
        this._box2.visible = !0,
        this._fingerEffect = this._fingerEffect || Xs.createAnimationView(),
        this._fingerEffect.updatePose("art/res/layaFx/fx_hlcsl_dj.ani", 0, !1),
        this._contentBox.addChild(this._fingerEffect),
        this._fingerEffect.move(140, 140),
        this._fingerEffect.play()
    }
    ,
    s.showParticel = function() {
        this._particle || (this._particle = new on,
        this._touchPanel.addChild(this._particle)),
        this._particle.x = this._touchPanel.width / 2,
        this._particle.y = this._touchPanel.height / 2,
        this._particle.play(ha._cfgObj)
    }
    ,
    s.hideClickTips = function() {
        this._box2.visible = !1,
        this._fingerEffect && (this._fingerEffect.recover(),
        this._fingerEffect = null)
    }
    ,
    s.startTestHandler = function() {
        c.send("3709"),
        x.stage.off("mousedown", this, this.startTestHandler),
        this.hideClickTips(),
        x.timer.frameOnce(2, this, this.PlayEffectBox1),
        fi.playSimpleVmc(this.effectBox2, "art/res/other/x5/hlcsl_cnq2.json", 0, 0, Number(ha.DEBUG_SCALE2 * ha.DEBUG_SCALE / 1e6), !1),
        x.timer.once(1100, this, this.showEffect2Complete)
    }
    ,
    s.PlayEffectBox1 = function() {
        fi.playSimpleVmc(this.effectBox1, null)
    }
    ,
    s.showEffect2Complete = function() {
        fi.playSimpleVmc(this.effectBox3, "art/res/other/x5/hlcsl_cnq3.json", 0, 0, Number(ha.DEBUG_SCALE3 * ha.DEBUG_SCALE / 1e6), !1),
        fi.playSimpleVmc(this.effectBox4, "art/res/other/x5/hlcsl_cnq4.json", 0, 0, Number(ha.DEBUG_SCALE4 * ha.DEBUG_SCALE / 1e6), !0),
        this._txtEffect1 = Xs.createAnimationView(),
        this._txtEffect1.updatePose("art/res/layaFx/fx_ztxhbj.ani", 0, !1),
        this._txtEffect1.move(140, -130),
        this._txtEffect1.play(),
        this.lightBox.addChild(this._txtEffect1),
        x.timer.once(1e3, this, this.Play2),
        x.timer.once(28, this, this.PlaycontentBox),
        c.send("3710")
    }
    ,
    s.PlaycontentBox = function() {
        fi.playSimpleVmc(this._contentBox, "art/res/other/x5/xtmhl.json", 140, -130, 1, !0)
    }
    ,
    s.Play2 = function() {
        this._imgReturn.visible = !0,
        c.islocal && Vi.ins.loadJsComplete || Vi.ins.loadCfgComplete && Vi.ins.loadAtlasComplete ? this.close() : x.stage.once("loadJsComplete", this, this.close)
    }
    ,
    s.onClickHandler = function() {
        this.close()
    }
    ,
    s.clearEffect = function() {
        this._txtEffect1 && (this._txtEffect1.recover(),
        this._txtEffect1 = null),
        this._fingerEffect && (this._fingerEffect.recover(),
        this._fingerEffect = null),
        fi.playSimpleVmc(this.effectBox2, null),
        fi.playSimpleVmc(this.effectBox3, null),
        fi.playSimpleVmc(this.effectBox4, null),
        fi.playSimpleVmc(this._contentBox, null)
    }
    ,
    e(0, s, "completeFun", function() {
        return this._completeFun
    }, function(t) {
        this._completeFun = t
    }),
    ha.createSoulPowerTestPanel = function() {
        return ha._ins = ha._ins || new ha
    }
    ,
    ha.uiView = {
        type: "BaseBox",
        props: {
            y: 0,
            x: 0,
            width: 576,
            height: 1024
        },
        child: [{
            type: "Image",
            props: {
                skin: "res/x5_unpack/soul_power_bgWx.jpg",
                centerY: 0,
                centerX: 0
            }
        }, {
            type: "Box",
            props: {
                y: 0,
                x: 0,
                var: "_touchPanel"
            }
        }, {
            type: "Box",
            props: {
                y: 342,
                x: 149,
                width: 280,
                var: "_contentBox",
                height: 280
            },
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "lightBox"
                }
            }, {
                type: "Box",
                props: {
                    y: 147,
                    x: 142,
                    var: "effectBox1"
                }
            }, {
                type: "Box",
                props: {
                    y: 147,
                    x: 142,
                    var: "effectBox2"
                }
            }, {
                type: "Box",
                props: {
                    y: 147,
                    x: 142,
                    var: "effectBox4"
                }
            }, {
                type: "Box",
                props: {
                    y: 147,
                    x: 142,
                    var: "effectBox3"
                }
            }, {
                type: "Box",
                props: {
                    y: -122,
                    x: -18,
                    width: 305,
                    var: "_box2",
                    height: 35
                },
                child: [{
                    type: "Image",
                    props: {
                        y: -.5,
                        x: -.5,
                        width: 152,
                        skin: "x5_compWx/bg_soulPower.png",
                        height: 35
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 304,
                            width: 152,
                            skin: "x5_compWx/bg_soulPower.png",
                            scaleX: -1,
                            height: 35
                        }
                    }]
                }, {
                    type: "Label",
                    props: {
                        y: 6,
                        x: 50,
                        text: "长按不放 测试魂力",
                        fontSize: 24,
                        font: "黑体",
                        color: "#FFAD39",
                        align: "left"
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    width: 280,
                    var: "_panelBall",
                    height: 280
                }
            }]
        }, {
            type: "Image",
            props: {
                x: 141,
                var: "_imgReturn",
                skin: "x5_compWx/word_clickReturn.png",
                bottom: 52
            }
        }, {
            type: "Box",
            props: {
                visible: !1,
                var: "proBox",
                centerX: 0,
                bottom: 89
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    width: 340,
                    skin: "x5_compWx/progress_22_1.png",
                    sizeGrid: "5,20,5,20",
                    height: 21
                }
            }, {
                type: "Image",
                props: {
                    y: 2,
                    x: 4,
                    width: 332,
                    var: "bar",
                    skin: "x5_compWx/progress_22_2.png",
                    sizeGrid: "5,20,5,20",
                    height: 15
                }
            }, {
                type: "Label",
                props: {
                    y: 2,
                    x: 10,
                    width: 200,
                    text: "正在前往天斗主城",
                    stroke: 1,
                    fontSize: 14,
                    font: "黑体",
                    color: "#ffffff",
                    centerX: 0,
                    align: "center"
                }
            }]
        }]
    },
    ha._ins = null,
    ha.DEBUG_SCALE1 = 1210,
    ha.DEBUG_SCALE2 = 1250,
    ha.DEBUG_SCALE3 = 2420,
    ha.DEBUG_SCALE4 = 1667,
    ha.DEBUG_SCALE = 1e3,
    O(ha, ["_cfgObj", function() {
        return this._cfgObj = {
            url: "art/res/particle/fx_hlcs_lz.png",
            rangX: 1e3,
            rangY: 1e3,
            maxRound: -1,
            firstRoundCount: 20,
            distanceOfRound: -1,
            intervalOfRound: 50,
            maxParticles: 400,
            sizeXRange: 0,
            sizeXRate: 0,
            sizeYRange: 0,
            sizeYRate: 0,
            moveDirRange: 0,
            moveDirRate: 0,
            moveSpeedRange: .03,
            moveSpeedRate: 0,
            gravityDirRange: 0,
            gravityDirRate: 0,
            gravityForce: 0,
            rotationRange: 30,
            rotationRate: 1,
            alphaRange: 1,
            alphaRate: .6,
            numOfRound: {
                begin: 1,
                end: 2
            },
            lifeTime: {
                begin: 3500,
                end: 4e3
            },
            sizeX: {
                start: {
                    begin: .09,
                    end: .6
                },
                timelife: {
                    begin: 0,
                    end: 0
                }
            },
            sizeY: {
                start: {
                    begin: .7,
                    end: .8
                },
                timelife: {
                    begin: 0,
                    end: 0
                }
            },
            moveDir: {
                start: {
                    begin: 110,
                    end: 130
                },
                timelife: {
                    begin: 0,
                    end: 0
                }
            },
            moveSpeed: {
                start: {
                    begin: .01,
                    end: .05
                },
                timelife: {
                    begin: 0,
                    end: 0
                }
            },
            gravityDir: {
                start: {
                    begin: 0,
                    end: 0
                },
                timelife: {
                    begin: 0,
                    end: 0
                }
            },
            rotation: {
                start: {
                    begin: 40,
                    end: 60
                },
                timelife: {
                    begin: 0,
                    end: 0
                }
            },
            alpha: {
                start: {
                    begin: 0,
                    end: .3
                },
                timelife: {
                    begin: 0,
                    end: 0
                }
            },
            moveSpeedRangeType: "float"
        }
    }
    ]);
    var ra, la = ha;
    function ha() {
        this._touchPanel = null,
        this._contentBox = null,
        this.lightBox = null,
        this.effectBox1 = null,
        this.effectBox2 = null,
        this.effectBox4 = null,
        this.effectBox3 = null,
        this._box2 = null,
        this._panelBall = null,
        this._imgReturn = null,
        this.proBox = null,
        this.bar = null,
        this._fingerEffect = null,
        this._txtEffect1 = null,
        this._completeFun = null,
        this._particle = null,
        this._resArr = ["art/res/other/x5/hlcsl_cnq1.json", "art/res/other/x5/hlcsl_cnq2.json", "art/res/other/x5/hlcsl_cnq3.json", "art/res/other/x5/hlcsl_cnq4.json", "art/res/layaFx/fx_ztxhbj.json", "art/res/other/x5/xtmhl.json"],
        ra.call(this),
        this.centerX = 0,
        this.centerY = 0
    }
    t(ua, "app.fateGame.role.AppCityPlayer", ca = At),
    (P = ua.prototype).updateName = function() {
        this._info.nickName && this.setName(this._info.nickName)
    }
    ,
    P.updateByEquipInfo = function(t) {
        this.info && t && 0 == Gi.compare(this.info.personId, t.playerId) && (this.info.nickName = t.playerName,
        this.info.level = t.level,
        this.x == t.position.x && this.y == t.position.y || (-1 == this.x && -1 == this.y ? (this.x = this.info.x = t.position.x,
        this.y = this.info.y = t.position.y) : this.pathByCoo(t.position.x, t.position.y)))
    }
    ,
    P.pathingUpdate = function() {
        var t, e = w.now();
        if (null != this.info)
            if (!isNaN(this.controlAngle) && Ji.ins.isInCity && !this.aiManager.isAuto || !isNaN(this.controlAngle) && Ji.ins.isInCity) {
                for (var i, s = (i = e - this.lastTime) * Cn.defaultRunSpeed / 1e3; 0 < s; ) {
                    var n = s * Math.cos(this.controlAngle)
                      , o = s * Math.sin(this.controlAngle);
                    if (k.getCityinsance().canPass(S.coo2Tile(this.x + n), S.coo2Tile(this.y + o)))
                        break;
                    if (n = n < 0 ? -s : 0 < n ? s : 0,
                    k.getCityinsance().canPass(S.coo2Tile(this.x + n), S.coo2Tile(this.y))) {
                        o = 0;
                        break
                    }
                    if (o = o < 0 ? -s : 0 < o ? s : 0,
                    k.getCityinsance().canPass(S.coo2Tile(this.x), S.coo2Tile(this.y + o))) {
                        n = 0;
                        break
                    }
                    s -= S.GRID_BORDER,
                    o = n = NaN
                }
                isNaN(n) || isNaN(o) || this.pos(this.x + n, this.y + o),
                this.lastTime = e
            } else
                this.isPathing && (i = e - this.stTime,
                i = this.distanceTime - i,
                t = (e - this.stTime) / this.distanceTime,
                this.pathTarget && (0 < i ? (n = this.stPosition[0] + Math.ceil(this.distanceX * t),
                o = this.stPosition[1] + Math.ceil(this.distanceY * t),
                this.pos(this.stPosition[0] + Math.ceil(this.distanceX * t), this.stPosition[1] + Math.ceil(this.distanceY * t))) : (this.pos(this.pathTarget[0], this.pathTarget[1]),
                this.spaceTime = -i,
                this.setToNextTarget())),
                this.lastTime = e)
    }
    ,
    P.judgeCanMove = function(t, e) {
        return !(!k.getCityinsance().data || !k.getCityinsance().data.tileByteArrays) && (t = S.coo2Tile(t),
        e = S.coo2Tile(e),
        S.canPath(k.getCityinsance().data.tileByteArrays, t, e))
    }
    ,
    P.pathByCoo = function(t, e, i, s, n, o, a, r, l) {
        if (void 0 === i && (i = 0),
        void 0 === s && (s = 0),
        void 0 === n && (n = !1),
        void 0 === o && (o = !0),
        void 0 === a && (a = !1),
        void 0 === r && (r = !0),
        void 0 === l && (l = !0),
        !k.getCityinsance().canWalkByCoo(t, e)) {
            s = k.getCityinsance().getNearestWalkPointByCoo(this.x, this.y, t, e);
            if (s.x == this.x && s.y == this.y)
                return !1;
            t = s.x,
            e = s.y
        }
        n = S.coo2Tile(t),
        o = S.coo2Tile(e);
        if (this.isPathing && this.destinationPX == n && this.destinationPY == o)
            return !0;
        var h = S.findPath(k.getCityinsance().data.tileByteArrays, S.coo2Tile(this.x), S.coo2Tile(this.y), n, o, i);
        if (h && !(h.length < 2)) {
            var c, a = S.tile2CooXY(h[h.length - 1]);
            this._armX = a[0],
            this._armY = a[1],
            S.countTileDirection(h[0], h[1]);
            if (this.isPathing && this.destinationPX == S.coo2Tile(t) && this.destinationPY == S.coo2Tile(e))
                return !0;
            if (this.destinationPX = S.coo2Tile(t),
            this.destinationPY = S.coo2Tile(e),
            h && 1 < h.length) {
                for (var p = [], u = [], d = h.length - 1, g = 0; g < d; g++)
                    c = S.countTileDirection(h[g], h[g + 1]),
                    p.push(c),
                    u.push(S.tile2CooXY(h[g]));
                return u.shift(),
                u.push(S.tile2CooXY(h[d])),
                this.pathByAStarArray(u, p),
                !0
            }
        }
        return !1
    }
    ,
    P.loadRoleRes = function() {
        var t = this._direct;
        app.fateGame.role.AppRoleView.prototype.loadRoleRes.call(this),
        this._direct = t
    }
    ,
    P.loop = function() {
        ca.prototype.loop.call(this);
        var t = A.ins.playerInfo.personId;
        this.info && this.info.personId && this.info.personId.equal(t)
    }
    ,
    P.recover = function(t) {
        void 0 === t && (t = !0),
        this._info,
        ca.prototype.recover.call(this, !1),
        t && dt.recover("app.fateGame.role.AppCityPlayer", this)
    }
    ,
    e(0, P, "info", function() {
        return this._info
    }, function(t) {
        x.superSet(ca, this, "info", t)
    }),
    ua.createByEquipInfo = function(t) {
        var e = new Ss
          , i = (e.type = 1,
        e.personId = t.playerId,
        e.nickName = t.playerName,
        e.sex = t.sex,
        e.skinId = t.skinId,
        e.level = t.level,
        dt.getItemByClass("app.fateGame.role.AppCityPlayer", ua));
        return i.info = e,
        i.x = t.position.x + ua.getRandomV(),
        i.y = t.position.y + ua.getRandomV(),
        i.direct = 360 * Math.random() - 180,
        i.setAct("act01", !0, !1, !0, i.direct),
        i
    }
    ,
    ua.getRandomV = function() {
        var t = Math.floor(20 * Math.random()) % 2 == 0
          , e = Math.floor(30 * Math.random());
        return t ? e : -1 * e
    }
    ;
    var ca, pa = ua;
    function ua() {
        this.time = NaN,
        ca.call(this)
    }
    t(ma, "app.fateGame.role.AppPlayerControlRole", da = At),
    (v = ma.prototype).updateEnemyState = function() {}
    ,
    v.updateName = function() {
        this._info && this._info.nickName && this.setName(this._info.nickName)
    }
    ,
    v.setName = function(t) {
        this._info && (this.viewName = t,
        this._topView.setName(t, "#ffffff"),
        this.updateEnemyState())
    }
    ,
    v.setAct = function(t, e, i, s, n) {
        return void 0 === e && (e = !0),
        void 0 === i && (i = !0),
        void 0 === n && (n = NaN),
        !!(s = void 0 !== s && s) && (this._fatherActType = t,
        this._autoStand = i,
        this._repeat = e,
        this._actType = t,
        isNaN(n) || (this._direct = n),
        this._repeat = e,
        this.loadRoleRes(),
        this.updateViewLayout(),
        !0)
    }
    ,
    v.isCanMove = function() {
        return 0 == this.moveType || 4 == this.moveType
    }
    ,
    v.stopPath = function() {
        this.isPathing;
        app.fateGame.role.AppSimpleRole.prototype.stopPath.call(this)
    }
    ,
    v.pathingUpdate = function() {
        var t, e, i, s, n, o, a;
        this.isCanMove() && null != this.info && (M.ins.forbidMove ? this.stopPath() : (t = w.now(),
        isNaN(this.controlAngle) ? this.isPathing && (e = t - this.stTime,
        o = this.distanceTime - e,
        i = (t - this.stTime) / this.distanceTime,
        this.pathTarget && (0 < o ? (this.stPosition[0],
        Math.ceil(this.distanceX * i),
        this.stPosition[1],
        Math.ceil(this.distanceY * i),
        this.pos(this.stPosition[0] + Math.ceil(this.distanceX * i), this.stPosition[1] + Math.ceil(this.distanceY * i))) : (this._direct = this.getAngleDir(this._x, this._y, this.pathTarget[0], this.pathTarget[1]),
        this.pos(this.pathTarget[0], this.pathTarget[1]),
        this.spaceTime = -o,
        this.setToNextTarget())),
        this.lastTime = t) : (e = t - this.lastTime,
        a = this.getMoveTar(o = e * (i = Cn.defaultRunSpeed) / 1e3),
        isNaN(a[0]) || isNaN(a[1]) || (s = this.x + a[0],
        n = this.y + a[1],
        this.pos(s, n),
        t > this._noticeServerTime + this.NOTICE_TIME && (this._noticeServerTime = t,
        o = (e + this.NOTICE_TIME) * i / 1e3,
        a = this.getMoveTar(o),
        isNaN(a[0]) || (this.x,
        a[0]),
        isNaN(a[1]) || (this.y,
        a[1]),
        this.event("Server_Move_Angle", this))),
        this.lastTime = t),
        this.checkChangeTile()))
    }
    ,
    v.getAngleDir = function(t, e, i, s) {
        s = 180 * (s = Math.atan2(s - e, i - t)) / Math.PI;
        return 180 <= (s += 90) && (s -= 360),
        parseInt(s + "")
    }
    ,
    v.arrive = function() {
        app.fateGame.role.AppSimpleRole.prototype.arrive.call(this)
    }
    ,
    v.recover = function(t) {
        void 0 === t && (t = !0),
        this.info && this.info.off("event_update_enemy_state", this, this.updateEnemyState),
        da.prototype.recover.call(this, !1)
    }
    ,
    v.getMoveTar = function(t) {
        for (; 0 < t; ) {
            var e = t * Math.cos(this.controlAngle)
              , i = t * Math.sin(this.controlAngle);
            if (k.ins.canPass(S.coo2Tile(this.x + e), S.coo2Tile(this.y + i)))
                break;
            var s = k.ins.canPass(S.coo2Tile(this.x + e), S.coo2Tile(this.y))
              , n = k.ins.canPass(S.coo2Tile(this.x), S.coo2Tile(this.y + i));
            if (s) {
                i = 0;
                break
            }
            if (n) {
                e = 0;
                break
            }
            t -= S.GRID_BORDER,
            i = e = NaN
        }
        return [e, i]
    }
    ,
    v.setMoveTargetRole = function(t) {
        var e, i, s, n;
        x.timer.clear(this, this.setMoveTargetRole),
        this._targetRole && this._targetRole != t && (this._targetRole.roleSelected = !1),
        this._targetRole = t,
        this._targetRole && (t = S.coo2Tile(this.x),
        e = S.coo2Tile(this.y),
        i = S.coo2Tile(this._targetRole.x),
        s = S.coo2Tile(this._targetRole.y),
        (t == i && e == s ? 0 : (n = this.getAroundPoint(this.x, this.y, this._targetRole.x, this._targetRole.y, !0),
        this.distance(this.x, this.y, n.x, n.y))) <= 0 ? this._targetRole instanceof ma ? (this.stopPath(),
        this._targetRole.info,
        this._targetRole.roleSelected = !1,
        this._targetRole = null) : x.__typeof(this._targetRole, to) && (this.stopPath(),
        (t = this._targetRole.npcCfg) && t.func,
        this._targetRole.roleSelected = !1,
        this._targetRole = null) : (this._targetRole.roleSelected = !0,
        x.timer.once(this.NOTICE_TIME, this, this.setMoveTargetRole, [this._targetRole], !1),
        this.pathByCoo(n.x, n.y, 0, 0, !1, !1)))
    }
    ,
    v.getAroundPoint = function(t, e, i, s, n) {
        for (var o, a = S.coo2Tile(i), r = S.coo2Tile(s), l = 0; !o; ) {
            for (var h = a + -1 * ++l; h <= a + l; h++)
                for (var c = r + -1 * l; c <= r + l; c++) {
                    var p = S.tile2Coo(h)
                      , u = S.tile2Coo(c);
                    this.distance(i, s, p, u) > l * S.GRID_BORDER || n && !k.ins.canWalkByCoo(p, u) || (o ? this.distanceSQ(t, e, o.x, o.y) > this.distanceSQ(t, e, p, u) && o.setTo(p, u) : o = new pt(p,u))
                }
            if (12 <= l)
                break
        }
        return o = o || new pt(t,e)
    }
    ,
    v.distance = function(t, e, i, s) {
        return Math.sqrt(this.distanceSQ(t, e, i, s))
    }
    ,
    v.distanceSQ = function(t, e, i, s) {
        t -= i,
        i = e - s;
        return t * t + i * i
    }
    ,
    v.pathByCoo = function(t, e, i, s, n, o, a, r, l) {
        return void 0 === i && (i = 0),
        void 0 === s && (s = 0),
        void 0 === n && (n = !1),
        void 0 === o && (o = !0),
        void 0 === a && (a = !1),
        void 0 === r && (r = !0),
        void 0 === l && (l = !0),
        !!this.isCanMove() && da.prototype.pathByCoo.call(this, t, e, i, s, n, o, a, r, l)
    }
    ,
    v.setMoveType = function(t) {
        this.moveType = t
    }
    ,
    v.onStateChange = function() {
        this.removeAllBodyEff(),
        this.removeTopViewEff(),
        0 == this._moveType && this.info && !this.isAlive() && this.revive()
    }
    ,
    v.removeTopViewEff = function() {}
    ,
    v.revive = function() {
        this._fatherActType = "act01",
        this.stopAllAct(),
        this.showName(),
        m.clearAll(this),
        Yt.removeTweens(this, !0),
        this.scale(I.roleScale, I.roleScale),
        this.alpha = 1
    }
    ,
    e(0, v, "info", da.prototype._$get_info, function(t) {
        this.info && this.info.off("event_update_enemy_state", this, this.updateEnemyState),
        x.superSet(da, this, "info", t),
        this.info && this.info.on("event_update_enemy_state", this, this.updateEnemyState)
    }),
    e(0, v, "controlAngle", da.prototype._$get_controlAngle, function(t) {
        x.superSet(da, this, "controlAngle", t)
    }),
    e(0, v, "colStarTime", function() {
        return this._colStarTime
    }, function(t) {
        this._colStarTime != t && (this._colStarTime = t)
    }),
    e(0, v, "moveType", function() {
        return this._moveType
    }, function(t) {
        this._moveType != t && (this._moveType = t,
        this.onStateChange())
    }),
    e(0, v, "playerControlRoleInfo", function() {
        return this.info
    }, da.prototype._$set_playerControlRoleInfo);
    var da, ga = ma;
    function ma() {
        this.NOTICE_TIME = 200,
        this._moveType = 0,
        this._colStarTime = 0,
        this._targetRole = null,
        this._targetPoint = null,
        this._noticeServerTime = 0,
        this._allianceNameColor = null,
        da.call(this)
    }
    x.__init([Yt, $t])
}(window, (document,
Laya)),
"function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function(t, e) {
    "use strict";
    for (var i in Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Laya) {
        var s = Laya[i];
        s && s.__isclass && (e[i] = s)
    }
});
