var translations = {
    "h3": {
        "Options": "选项"
    },
    "h5": {
        "Loading Model...": "加载模型中...",
        "Hair Color": "发色",
        "Hair Style": "发型",
        "Eye Color": "瞳色",
        "Blush": "脸红",
        "Smile": "微笑",
        "Open Mouth": "张嘴",
        "Hat": "帽子",
        "Ribbon": "领巾（Ribbon）",
        "Glasses": "眼睛",
        "Noise": "噪点",
        "Current Noise": "当前噪点",
        "Noise Import/Export": "导入/导出噪点"
    },
    "a": {
        "Home": "首页",
        "About": "关于",
        "News": "新闻",
        "Tips": "提示",
        "Official Blog": "官方博客",
    },
    "button": { 
        // Needs binding
        "Generate": "生成",
        "Generating...": "生成中",
        // End
        "Fixed": "固定",
        "Off": "无",
        "On": "有",
        "Import": "导入",
        "Export": "导出",
        "OK": "确定",
    },
    "button > div > div": { // Needs binding
        "Random": "随机",
        "Blonde": "金黄色",
        "Brown": "棕色",
        "Black": "黑色",
        "BluePink": "蓝-粉色",
        "Purple": "紫色",
        "Green": "绿色",
        "Red": "红色",
        "Silver": "银色",
        "White": "白色",
        "Orange": "橘黄色",
        "Aqua": "青绿色",
        "Grey": "灰色",
        "Blue": "蓝色",
        "Yellow": "黄色",
        "Pink": "粉色",
        "Long Hair": "长发",
        "Short Hair": "短发",
        "Twin Tail": "双马尾",
        "Drill Hair": "卷发",
        "Ponytail": "马尾"
    },
    "button span": {
        "Share on Twitter": "分享到推特", // Bind once
    },
    // End
    "h5 + div > button": {
        "Random": "随机"
    },
}

// Needs binding
translations["li > a"] = translations["button > div > div"]

var retranslate = function () {
    for (var element in translations) {
        for (var text in translations[element]) {
            $(element + ":contains('" + text + "')").html(translations[element][text])
        }
    }
}

retranslate()
