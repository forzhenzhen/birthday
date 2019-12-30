// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给",
        "阳光、爱唱歌的女孩儿",
        "蓁臻",
        "这次没在身边",
        "只能远远送去祝福",
        "生日快乐啊！",
        "你的好奇心肯定要问了:",
        "\"只有这破网页祝福，没有礼物吗？\"",
        "答案是：",
        "有的，而且。。。",
        "我会每隔一天送你一个",
        "第一个礼物就是这网站",
        "域名买下来了，属于你的",
        "后面的礼物，更奇葩，但或多或少",
        "可以解答你想问的，说出我想我说的",
        "还是可以期待的哈~",
        "最后",
        "祝你天天都开心，天天有惊喜！"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "阳光、爱唱歌的女孩儿": "./imgs/zhenzhen.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "MESSAGE FOR YOU",
    }
};
