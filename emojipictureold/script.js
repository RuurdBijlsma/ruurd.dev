document.addEventListener('DOMContentLoaded', init, false);

async function init() {
    es = (new EmojiSplitter());
    // let [r, g, b] = colorconv.YUV2RGB(colorFromEmoji("👅"));
    // console.log(r, g, b);
    if (localStorage.emojiCache === undefined)
        localStorage.emojiCache = '{}';
    emojiCache = JSON.parse(localStorage.emojiCache);

    if (starry.complete) {
        loadedImage = starry;
        render();
    }

    starry.onload = () => {
        loadedImage = starry;
        render();
    }
}

function updateCache() {
    localStorage.emojiCache = JSON.stringify(emojiCache);
}

function setPalette(key) {
    let palettes = {
        'flags': '🏳️🏴🏁🚩🏳️‍🌈🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇰🇭🇨🇲🇨🇦🇮🇨🇨🇻🇧🇶🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇰🇨🇷🇨🇮🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇯🇲🇯🇵🎌🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇳🇵🇱🇵🇹🇵🇷🇶🇦🇷🇪🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇬🇸🇸🇧🇸🇴🇿🇦🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇵🇲🇻🇨🇸🇩🇸🇷🇸🇿🇸🇪🇨🇭🇸🇾🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇻🇮🇺🇬🇺🇦🇦🇪🇬🇧🇺🇸🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼',
        'default': '😂💯🙈😡😍😱👌👌🏻👌🏼👌🏽👌🏾👌🏿🤡😈🤢👹👾🤖👻💩💍💋👅👄👥👀🎒👛👘👒👗👔👖👚👠🐾🌴🍃🌏🌓🌝🍏🍎🍋🥝🍳🥚🍖🏀⚾🎾🏐🏉👣💛💚💙💜🖤',
        'sepia': '👌👌🏻👌🏼👌🏽👌🏾👌🏿',
        'travel': '🚗🚕🚙🚌🚎🏎🚓🚑🚒🚐🚚🚛🚜🛴🚲🛵🏍🚨🚔🚍🚘🚖🚡🚠🚟🚃🚋🚞🚝🚄🚅🚈🚂🚆🚇🚊🚉🚁🛩✈️🛫🛬🚀🛰💺🛶⛵️🛥🚤🛳⛴🚢⚓️🚧⛽️🚏🚦🚥🗺🗿🗽⛲️🗼🏰🏯🏟🎡🎢🎠⛱🏖🏝⛰🏔🗻🌋🏜🏕⛺️🛤🛣🏗🏭🏠🏡🏘🏚🏢🏬🏣🏤🏥🏦🏨🏪🏫🏩💒🏛⛪️🕌🕍🕋⛩🗾🎑🏞🌅🌄🌠🎇🎆🌇🌆🏙🌃🌌🌉🌁',
        'all': '😀😁😂🤣😃😄😅😆😉😊😋😎😍😘😗😙😚☺️🙂🤗🤩🤔🤨😐😑😶🙄😏😣😥😮🤐😯😪😫😴😌😛😜😝🤤😒😓😔😕🙃🤑😲☹️🙁😖😞😟😤😢😭😦😧😨😩🤯😬😰😱😳🤪😵😡😠🤬😷🤒🤕🤢🤮🤧😇🤠🤡🤥🤫🤭🧐🤓😈👿👹👺💀👻👽🤖💩😺😸😹😻😼😽🙀😿😾👶👦👧👨👩👴👵👨‍⚕️👩‍⚕️👨‍🎓👩‍🎓👨‍⚖️👩‍⚖️👨‍🌾👩‍🌾👨‍🍳👩‍🍳👨‍🔧👩‍🔧👨‍🏭👩‍🏭👨‍💼👩‍💼👨‍🔬👩‍🔬👨‍💻👩‍💻👨‍🎤👩‍🎤👨‍🎨👩‍🎨👨‍✈️👩‍✈️👨‍🚀👩‍🚀👨‍🚒👩‍🚒👮👮‍♂️👮‍♀️🕵🕵️‍♂️🕵️‍♀️💂💂‍♂️💂‍♀️👷👷‍♂️👷‍♀️🤴👸👳👳‍♂️👳‍♀️👲🧕🧔👱👱‍♂️👱‍♀️🤵👰🤰🤱👼🎅🤶🧙‍♀️🧙‍♂️🧚‍♀️🧚‍♂️🧛‍♀️🧛‍♂️🧜‍♀️🧜‍♂️🧝‍♀️🧝‍♂️🧞‍♀️🧞‍♂️🧟‍♀️🧟‍♂️🙍🙍‍♂️🙍‍♀️🙎🙎‍♂️🙎‍♀️🙅🙅‍♂️🙅‍♀️🙆🙆‍♂️🙆‍♀️💁💁‍♂️💁‍♀️🙋🙋‍♂️🙋‍♀️🙇🙇‍♂️🙇‍♀️🤦🤦‍♂️🤦‍♀️🤷🤷‍♂️🤷‍♀️💆💆‍♂️💆‍♀️💇💇‍♂️💇‍♀️🚶🚶‍♂️🚶‍♀️🏃🏃‍♂️🏃‍♀️💃🕺👯👯‍♂️👯‍♀️🧖‍♀️🧖‍♂️🕴🗣👤👥👫👬👭💏👨‍❤️‍💋‍👨👩‍❤️‍💋‍👩💑👨‍❤️‍👨👩‍❤️‍👩👪👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👨‍👦👨‍👨‍👧👨‍👨‍👧‍👦👨‍👨‍👦‍👦👨‍👨‍👧‍👧👩‍👩‍👦👩‍👩‍👧👩‍👩‍👧‍👦👩‍👩‍👦‍👦👩‍👩‍👧‍👧👨‍👦👨‍👦‍👦👨‍👧👨‍👧‍👦👨‍👧‍👧👩‍👦👩‍👦‍👦👩‍👧👩‍👧‍👦👩‍👧‍👧🤳💪👈👉☝️👆🖕👇✌️🤞🖖🤘🖐✋👌👍👎✊👊🤛🤜🤚👋🤟✍️👏👐🙌🤲🙏🤝💅👂👃👣👀👁🧠👅👄💋👓🕶👔👕👖🧣🧤🧥🧦👗👘👙👚👛👜👝🎒👞👟👠👡👢👑👒🎩🎓🧢⛑💄💍🌂💼👐🏻🙌🏻👏🏻🙏🏻👍🏻👎🏻👊🏻✊🏻🤛🏻🤜🏻🤞🏻✌🏻🤘🏻👌🏻👈🏻👉🏻👆🏻👇🏻☝🏻✋🏻🤚🏻🖐🏻🖖🏻👋🏻🤙🏻💪🏻🖕🏻✍🏻🤳🏻💅🏻👂🏻👃🏻👶🏻👦🏻👧🏻👨🏻👩🏻👱🏻‍♀️👱🏻👴🏻👵🏻👲🏻👳🏻‍♀️👳🏻👮🏻‍♀️👮🏻👷🏻‍♀️👷🏻💂🏻‍♀️💂🏻🕵🏻‍♀️🕵🏻👩🏻‍⚕️👨🏻‍⚕️👩🏻‍🌾👨🏻‍🌾👩🏻‍🍳👨🏻‍🍳👩🏻‍🎓👨🏻‍🎓👩🏻‍🎤👨🏻‍🎤👩🏻‍🏫👨🏻‍🏫👩🏻‍🏭👨🏻‍🏭👩🏻‍💻👨🏻‍💻👩🏻‍💼👨🏻‍💼👩🏻‍🔧👨🏻‍🔧👩🏻‍🔬👨🏻‍🔬👩🏻‍🎨👨🏻‍🎨👩🏻‍🚒👨🏻‍🚒👩🏻‍✈️👨🏻‍✈️👩🏻‍🚀👨🏻‍🚀👩🏻‍⚖️👨🏻‍⚖️🤶🏻🎅🏻👸🏻🤴🏻👰🏻🤵🏻👼🏻🤰🏻🙇🏻‍♀️🙇🏻💁🏻💁🏻‍♂️🙅🏻🙅🏻‍♂️🙆🏻🙆🏻‍♂️🙋🏻🙋🏻‍♂️🤦🏻‍♀️🤦🏻‍♂️🤷🏻‍♀️🤷🏻‍♂️🙎🏻🙎🏻‍♂️🙍🏻🙍🏻‍♂️💇🏻💇🏻‍♂️💆🏻💆🏻‍♂️🕴🏻💃🏻🕺🏻🚶🏻‍♀️🚶🏻🏃🏻‍♀️🏃🏻🏋🏻‍♀️🏋🏻🤸🏻‍♀️🤸🏻‍♂️⛹🏻‍♀️⛹🏻🤾🏻‍♀️🤾🏻‍♂️🏌🏻‍♀️🏌🏻🏄🏻‍♀️🏄🏻🏊🏻‍♀️🏊🏻🤽🏻‍♀️🤽🏻‍♂️🚣🏻‍♀️🚣🏻🏇🏻🚴🏻‍♀️🚴🏻🚵🏻‍♀️🚵🏻🤹🏻‍♀️🤹🏻‍♂️🛀🏻👐🏼🙌🏼👏🏼🙏🏼👍🏼👎🏼👊🏼✊🏼🤛🏼🤜🏼🤞🏼✌🏼🤘🏼👌🏼👈🏼👉🏼👆🏼👇🏼☝🏼✋🏼🤚🏼🖐🏼🖖🏼👋🏼🤙🏼💪🏼🖕🏼✍🏼🤳🏼💅🏼👂🏼👃🏼👶🏼👦🏼👧🏼👨🏼👩🏼👱🏼‍♀️👱🏼👴🏼👵🏼👲🏼👳🏼‍♀️👳🏼👮🏼‍♀️👮🏼👷🏼‍♀️👷🏼💂🏼‍♀️💂🏼🕵🏼‍♀️🕵🏼👩🏼‍⚕️👨🏼‍⚕️👩🏼‍🌾👨🏼‍🌾👩🏼‍🍳👨🏼‍🍳👩🏼‍🎓👨🏼‍🎓👩🏼‍🎤👨🏼‍🎤👩🏼‍🏫👨🏼‍🏫👩🏼‍🏭👨🏼‍🏭👩🏼‍💻👨🏼‍💻👩🏼‍💼👨🏼‍💼👩🏼‍🔧👨🏼‍🔧👩🏼‍🔬👨🏼‍🔬👩🏼‍🎨👨🏼‍🎨👩🏼‍🚒👨🏼‍🚒👩🏼‍✈️👨🏼‍✈️👩🏼‍🚀👨🏼‍🚀👩🏼‍⚖️👨🏼‍⚖️🤶🏼🎅🏼👸🏼🤴🏼👰🏼🤵🏼👼🏼🤰🏼🙇🏼‍♀️🙇🏼💁🏼💁🏼‍♂️🙅🏼🙅🏼‍♂️🙆🏼🙆🏼‍♂️🙋🏼🙋🏼‍♂️🤦🏼‍♀️🤦🏼‍♂️🤷🏼‍♀️🤷🏼‍♂️🙎🏼🙎🏼‍♂️🙍🏼🙍🏼‍♂️💇🏼💇🏼‍♂️💆🏼💆🏼‍♂️🕴🏼💃🏼🕺🏼🚶🏼‍♀️🚶🏼🏃🏼‍♀️🏃🏼🏋🏼‍♀️🏋🏼🤸🏼‍♀️🤸🏼‍♂️⛹🏼‍♀️⛹🏼🤾🏼‍♀️🤾🏼‍♂️🏌🏼‍♀️🏌🏼🏄🏼‍♀️🏄🏼🏊🏼‍♀️🏊🏼🤽🏼‍♀️🤽🏼‍♂️🚣🏼‍♀️🚣🏼🏇🏼🚴🏼‍♀️🚴🏼🚵🏼‍♀️🚵🏻🤹🏼‍♀️🤹🏼‍♂️🛀🏼👐🏽🙌🏽👏🏽🙏🏽👍🏽👎🏽👊🏽✊🏽🤛🏽🤜🏽🤞🏽✌🏽🤘🏽👌🏽👈🏽👉🏽👆🏽👇🏽☝🏽✋🏽🤚🏽🖐🏽🖖🏽👋🏽🤙🏽💪🏽🖕🏽✍🏽🤳🏽💅🏽👂🏽👃🏽👶🏽👦🏽👧🏽👨🏽👩🏽👱🏽‍♀️👱🏽👴🏽👵🏽👲🏽👳🏽‍♀️👳🏽👮🏽‍♀️👮🏽👷🏽‍♀️👷🏽💂🏽‍♀️💂🏽🕵🏽‍♀️🕵🏽👩🏽‍⚕️👨🏽‍⚕️👩🏽‍🌾👨🏽‍🌾👩🏽‍🍳👨🏽‍🍳👩🏽‍🎓👨🏽‍🎓👩🏽‍🎤👨🏽‍🎤👩🏽‍🏫👨🏽‍🏫👩🏽‍🏭👨🏽‍🏭👩🏽‍💻👨🏽‍💻👩🏽‍💼👨🏽‍💼👩🏽‍🔧👨🏽‍🔧👩🏽‍🔬👨🏽‍🔬👩🏽‍🎨👨🏽‍🎨👩🏽‍🚒👨🏽‍🚒👩🏽‍✈️👨🏽‍✈️👩🏽‍🚀👨🏽‍🚀👩🏽‍⚖️👨🏽‍⚖️🤶🏽🎅🏽👸🏽🤴🏽👰🏽🤵🏽👼🏽🤰🏽🙇🏽‍♀️🙇🏽💁🏽💁🏽‍♂️🙅🏽🙅🏽‍♂️🙆🏽🙆🏽‍♂️🙋🏽🙋🏽‍♂️🤦🏽‍♀️🤦🏽‍♂️🤷🏽‍♀️🤷🏽‍♂️🙎🏽🙎🏽‍♂️🙍🏽🙍🏽‍♂️💇🏽💇🏽‍♂️💆🏽💆🏽‍♂️🕴🏼💃🏽🕺🏽🚶🏽‍♀️🚶🏽🏃🏽‍♀️🏃🏽🏋🏽‍♀️🏋🏽🤸🏽‍♀️🤸🏽‍♂️⛹🏽‍♀️⛹🏽🤾🏽‍♀️🤾🏽‍♂️🏌🏽‍♀️🏌🏽🏄🏽‍♀️🏄🏽🏊🏽‍♀️🏊🏽🤽🏽‍♀️🤽🏽‍♂️🚣🏽‍♀️🚣🏽🏇🏽🚴🏽‍♀️🚴🏽🚵🏽‍♀️🚵🏽🤹🏽‍♀️🤹🏽‍♂️🛀🏽👐🏾🙌🏾👏🏾🙏🏾👍🏾👎🏾👊🏾✊🏾🤛🏾🤜🏾🤞🏾✌🏾🤘🏾👌🏾👈🏾👉🏾👆🏾👇🏾☝🏾✋🏾🤚🏾🖐🏾🖖🏾👋🏾🤙🏾💪🏾🖕🏾✍🏾🤳🏾💅🏾👂🏾👃🏾👶🏾👦🏾👧🏾👨🏾👩🏾👱🏾‍♀️👱🏾👴🏾👵🏾👲🏾👳🏾‍♀️👳🏾👮🏾‍♀️👮🏾👷🏾‍♀️👷🏾💂🏾‍♀️💂🏾🕵🏾‍♀️🕵🏾👩🏾‍⚕️👨🏾‍⚕️👩🏾‍🌾👨🏾‍🌾👩🏾‍🍳👨🏾‍🍳👩🏾‍🎓👨🏾‍🎓👩🏾‍🎤👨🏾‍🎤👩🏾‍🏫👨🏾‍🏫👩🏾‍🏭👨🏾‍🏭👩🏾‍💻👨🏾‍💻👩🏾‍💼👨🏾‍💼👩🏾‍🔧👨🏾‍🔧👩🏾‍🔬👨🏾‍🔬👩🏾‍🎨👨🏾‍🎨👩🏾‍🚒👨🏾‍🚒👩🏾‍✈️👨🏾‍✈️👩🏾‍🚀👨🏾‍🚀👩🏾‍⚖️👨🏾‍⚖️🤶🏾🎅🏾👸🏾🤴🏾👰🏾🤵🏾👼🏾🤰🏾🙇🏾‍♀️🙇🏾💁🏾💁🏾‍♂️🙅🏾🙅🏾‍♂️🙆🏾🙆🏾‍♂️🙋🏾🙋🏾‍♂️🤦🏾‍♀️🤦🏾‍♂️🤷🏾‍♀️🤷🏾‍♂️🙎🏾🙎🏾‍♂️🙍🏾🙍🏾‍♂️💇🏾💇🏾‍♂️💆🏾💆🏾‍♂️🕴🏾💃🏾🕺🏾🚶🏾‍♀️🚶🏾🏃🏾‍♀️🏃🏾🏋🏾‍♀️🏋🏾🤸🏾‍♀️🤸🏾‍♂️⛹🏾‍♀️⛹🏾🤾🏾‍♀️🤾🏾‍♂️🏌🏾‍♀️🏌🏾🏄🏾‍♀️🏄🏾🏊🏾‍♀️🏊🏾🤽🏾‍♀️🤽🏾‍♂️🚣🏾‍♀️🚣🏾🏇🏾🚴🏾‍♀️🚴🏾🚵🏾‍♀️🚵🏾🤹🏾‍♀️🤹🏾‍♂️🛀🏾👐🏿🙌🏿👏🏿🙏🏿👍🏿👎🏿👊🏿✊🏿🤛🏿🤜🏿🤞🏿✌🏿🤘🏿👌🏿👈🏿👉🏿👆🏿👇🏿☝🏿✋🏿🤚🏿🖐🏿🖖🏿👋🏿🤙🏿💪🏿🖕🏿✍🏿🤳🏿💅🏿👂🏿👃🏿👶🏿👦🏿👧🏿👨🏿👩🏿👱🏿‍♀️👱🏿👴🏿👵🏿👲🏿👳🏿‍♀️👳🏿👮🏿‍♀️👮🏿👷🏿‍♀️👷🏿💂🏿‍♀️💂🏿🕵🏿‍♀️🕵🏿👩🏿‍⚕️👨🏿‍⚕️👩🏿‍🌾👨🏿‍🌾👩🏿‍🍳👨🏿‍🍳👩🏿‍🎓👨🏿‍🎓👩🏿‍🎤👨🏿‍🎤👩🏿‍🏫👨🏿‍🏫👩🏿‍🏭👨🏿‍🏭👩🏿‍💻👨🏿‍💻👩🏿‍💼👨🏿‍💼👩🏿‍🔧👨🏿‍🔧👩🏿‍🔬👨🏿‍🔬👩🏿‍🎨👨🏿‍🎨👩🏿‍🚒👨🏿‍🚒👩🏿‍✈️👨🏿‍✈️👩🏿‍🚀👨🏿‍🚀👩🏿‍⚖️👨🏿‍⚖️🤶🏿🎅🏿👸🏿🤴🏿👰🏿🤵🏿👼🏿🤰🏿🙇🏿‍♀️🙇🏿💁🏿💁🏿‍♂️🙅🏿🙅🏿‍♂️🙆🏿🙆🏿‍♂️🙋🏿🙋🏿‍♂️🤦🏿‍♀️🤦🏿‍♂️🤷🏿‍♀️🤷🏿‍♂️🙎🏿🙎🏿‍♂️🙍🏿🙍🏿‍♂️💇🏿💇🏿‍♂️💆🏿💆🏿‍♂️🕴🏿💃🏿🕺🏿🚶🏿‍♀️🚶🏿🏃🏿‍♀️🏃🏿🏋🏿‍♀️🏋🏿🤸🏿‍♀️🤸🏿‍♂️⛹🏿‍♀️⛹🏿🤾🏿‍♀️🤾🏿‍♂️🏌🏿‍♀️🏌🏿🏄🏿‍♀️🏄🏿🏊🏿‍♀️🏊🏿🤽🏿‍♀️🤽🏿‍♂️🚣🏿‍♀️🚣🏿🏇🏿🚴🏿‍♀️🚴🏿🚵🏿‍♀️🚵🏿🤹🏿‍♀️🤹🏿‍♂️🛀🏿🐶🐱🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐽🐸🐵🙊🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐚🐞🐜🕷🕸🐢🐍🦎🦂🦀🦑🐙🦐🐠🐟🐡🐬🦈🐳🐋🐊🐆🐅🐃🐂🐄🦌🐪🐫🐘🦏🦍🐎🐖🐐🐏🐑🐕🐩🐈🐓🦃🕊🐇🐁🐀🐿🐾🐉🐲🌵🎄🌲🌳🌴🌱🌿☘️🍀🎍🎋🍃🍂🍁🍄🌾💐🌷🌹🥀🌻🌼🌸🌺🌎🌍🌏🌕🌖🌗🌘🌑🌒🌓🌔🌚🌝🌞🌛🌜🌙💫⭐️🌟✨⚡️🔥💥☄️☀️🌤⛅️🌥🌦🌈☁️🌧⛈🌩🌨☃️⛄️❄️🌬💨🌪🌫🌊💧💦☔️🍏🍎🍐🍊🍋🍌🍉🍇🍓🍈🍒🍑🍍🥝🥑🍅🍆🥒🥕🌽🌶🥔🍠🌰🥜🍯🥐🍞🥖🧀🥚🍳🥓🥞🍤🍗🍖🍕🌭🍔🍟🥙🌮🌯🥗🥘🍝🍜🍲🍥🍣🍱🍛🍚🍙🍘🍢🍡🍧🍨🍦🍰🎂🍮🍭🍬🍫🍿🍩🍪🥛🍼☕️🍵🍶🍺🍻🥂🍷🥃🍸🍹🍾🥄🍴🍽⚽️🏀🏈⚾️🎾🏐🏉🎱🏓🏸🥅🏒🏑🏏⛳️🏹🎣🥊🥋⛸🎿⛷🏂🏋️‍♀️🏋️🤺🤼‍♀️🤼‍♂️🤸‍♀️🤸‍♂️⛹️‍♀️⛹️🤾‍♀️🤾‍♂️🏌️‍♀️🏌️🏄‍♀️🏄🏊‍♀️🏊🤽‍♀️🤽‍♂️🚣‍♀️🚣🏇🚴‍♀️🚴🚵‍♀️🚵🎽🏅🎖🥇🥈🥉🏆🏵🎗🎫🎟🎪🤹‍♀️🤹‍♂️🎭🎨🎬🎤🎧🎼🎹🥁🎷🎺🎸🎻🎲🎯🎳🎮🎰🚗🚕🚙🚌🚎🏎🚓🚑🚒🚐🚚🚛🚜🛴🚲🛵🏍🚨🚔🚍🚘🚖🚡🚠🚟🚃🚋🚞🚝🚄🚅🚈🚂🚆🚇🚊🚉🚁🛩✈️🛫🛬🚀🛰💺🛶⛵️🛥🚤🛳⛴🚢⚓️🚧⛽️🚏🚦🚥🗺🗿🗽⛲️🗼🏰🏯🏟🎡🎢🎠⛱🏖🏝⛰🏔🗻🌋🏜🏕⛺️🛤🛣🏗🏭🏠🏡🏘🏚🏢🏬🏣🏤🏥🏦🏨🏪🏫🏩💒🏛⛪️🕌🕍🕋⛩🗾🎑🏞🌅🌄🌠🎇🎆🌇🌆🏙🌃🌌🌉🌁⌚️📱📲💻⌨️🖥🖨🖱🖲🕹🗜💽💾💿📀📼📷📸📹🎥📽🎞📞☎️📟📠📺📻🎙🎚🎛⏱⏲⏰🕰⌛️⏳📡🔋🔌💡🔦🕯🗑🛢💸💵💴💶💷💰💳💎⚖️🔧🔨⚒🛠⛏🔩⚙️⛓🔫💣🔪🗡⚔️🛡🚬⚰️⚱️🏺🔮📿💈⚗️🔭🔬🕳💊💉🌡🚽🚰🚿🛁🛀🛎🔑🗝🚪🛋🛏🛌🖼🛍🛒🎁🎈🎏🎀🎊🎉🎎🏮🎐✉️📩📨📧💌📥📤📦🏷📪📫📬📭📮📯📜📃📄📑📊📈📉🗒🗓📆📅📇🗃🗳🗄📋📁📂🗂🗞📰📓📔📒📕📗📘📙📚📖🔖🔗📎🖇📐📏📌📍📌🎌🏳️🏴🏁🏳️‍🌈✂️🖊🖋✒️🖌🖍📝✏️🔍🔎🔏🔐🔒🔓❤️💛💚💙💜🖤💔❣️💕💞💓💗💖💘💝💟☮️✝️☪️🕉☸️✡️🔯🕎☯️☦️🛐⛎♈️♉️♊️♋️♌️♍️♎️♏️♐️♑️♒️♓️🆔⚛️🉑☢️☣️📴📳🈶🈚️🈸🈺🈷️✴️🆚💮🉐㊙️㊗️🈴🈵🈹🈲🅰️🅱️🆎🆑🅾️🆘❌⭕️🛑⛔️📛🚫💯💢♨️🚷🚯🚳🚱🔞📵🚭❗️❕❓❔‼️⁉️🔅🔆〽️⚠️🚸🔱⚜️🔰♻️✅🈯️💹❇️✳️❎🌐💠Ⓜ️🌀💤🏧🚾♿️🅿️🈳🈂️🛂🛃🛄🛅🚹🚺🚼🚻🚮🎦📶🈁🔣ℹ️🔤🔡🔠🆖🆗🆙🆒🆕🆓0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟🔢#️⃣*️⃣▶️⏸⏯⏹⏺⏭⏮⏩⏪⏫⏬◀️🔼🔽➡️⬅️⬆️⬇️↗️↘️↙️↖️↕️↔️↪️↩️⤴️⤵️🔀🔁🔂🔄🔃🎵🎶➕➖➗✖️💲💱™️©️®️〰️➰➿🔚🔙🔛🔝✔️☑️🔘⚪️⚫️🔴🔵🔺🔻🔸🔹🔶🔷🔳🔲▪️▫️◾️◽️◼️◻️⬛️⬜️🔈🔇🔉🔊🔔🔕📣📢👁‍🗨💬💭🗯♠️♣️♥️♦️🃏🎴🀄️🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛🕜🕝🕞🕟🕠🕡🕢🕣🕤🕥🕦🕧🏳️🏴🏁🚩🏳️‍🌈🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇰🇭🇨🇲🇨🇦🇮🇨🇨🇻🇧🇶🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇰🇨🇷🇨🇮🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇯🇲🇯🇵🎌🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇳🇵🇱🇵🇹🇵🇷🇶🇦🇷🇪🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇬🇸🇸🇧🇸🇴🇿🇦🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇵🇲🇻🇨🇸🇩🇸🇷🇸🇿🇸🇪🇨🇭🇸🇾🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇻🇮🇺🇬🇺🇦🇦🇪🇬🇧🇺🇸🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼😃💁People•🐻🌻Animals•🍔🍹Food•🎷⚽️Activities•🚘🌇Travel•💡🎉Objects•💖🔣Symbols•🎌🏳️‍🌈Flags🤩🤨🤯🤪🤬🤮🤫🤭🧐🧒🧑🧓🧕🧔🤱🧙🧙‍♀️🧙‍♂️🧚🧚‍♀️🧚‍♂️🧛🧛‍♀️🧛‍♂️🧜🧜‍♀️🧜‍♂️🧝🧝‍♀️🧝‍♂️🧞🧞‍♀️🧞‍♂️🧟🧟‍♀️🧟‍♂️🧖🧖‍♀️🧖‍♂️🧗🧗‍♀️🧗‍♂️🧘🧘‍♀️🧘‍♂️🤟🤲🧠🧡🧣🧤🧥🧦🧢🦓🦒🦔🦕🦖🦗🥥🥦🥨🥩🥪🥣🥫🥟🥠🥡🥧🥤🥢🛸🛷🥌🏴󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁷󠁬󠁳󠁿😃💁People•🐻🌻Animals•🍔🍹Food•🎷⚽️Activities•🚘🌇Travel•💡🎉Objects•💖🔣Symbols•🎌🏳️‍🌈Flags☺️☹☝️✌️✍️❤️❣️☠♨️✈️⌛⌚♈♉♊♋♌♍♎♏♐♑♒♓☀️☁️☂️❄️⛄️☄♠️♥️♦️♣️▶️◀️☎️⌨✉️✏️✒️✂️↗️➡️↘️↙️↖️↕️↔️↩️↪️✡️☸☯️✝️☦☪☮☢☣☑️✔️✖️✳️✴️❇️‼️©️®️™️Ⓜ️▪️▫️#⃣️*️⃣0⃣️1⃣️2⃣️3⃣️4⃣️5⃣️6⃣️7⃣️8⃣️9⃣️⁉️ℹ️⤴️⤵️♻️◻️◼️◽◾☕⚠️☔⏏⬆️⬇️⬅️⚡☘⚓♿⚒⚙⚗⚖⚔⚰⚱⚜⚛⚪⚫🀄⭐⬛⬜⛑⛰⛪⛲⛺⛽⛵⛴⛔⛅⛈⛱⛄⚽⚾️⛳⛸⛷⛹⛏⛓⛩⭕❗🅿️❦♕♛♔♖♜☾→⇒⟹⇨⇰➩➪➫➬➭➮➯➲➳➵➸➻➺➼➽☜☟➹➷↶↷✆⌘⎋⏎⏏⎈⎌⍟❥ツღ☻'
    }

    let form = document.getElementById('controls');
    form.palette.value = palettes[key];
}

function render(e) {
    console.time("Render");
    if (e)
        e.preventDefault();
    let form = document.getElementById('controls');
    let output = document.getElementById('output');

    let config = [
        loadedImage, +form.width.value,
        es.spliddit(form.palette.value)
    ];
    document.documentElement.style.setProperty('--emoji-size', form.size.value + 'px');

    if (typeof currentConfig === 'undefined' || typeof prevImgUrl === 'undefined' || config.join() !== currentConfig.join() || loadedImage.src !== prevImgUrl) {
        prevImgUrl = loadedImage.src;
        currentConfig = config;
        output.innerHTML = picToEmoji(...config);
    }
    console.timeEnd("Render");
}

function setImage(e) {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = () => {
        loadedImage = img;
    }
}

function getEmojiColorPalette(palette) {
    let emojiColors = [];
    for (let emoji of palette) {
        let color = colorFromEmoji(emoji);
        emojiColors.push({
            color,
            emoji
        });
    }
    updateCache();
    return emojiColors;
}

function picToEmoji(image, width = 70, palette = ['👌', '👌🏻', '👌🏼', '👌🏽', '👌🏾', '👌🏿']) {
    let emojiColors = getEmojiColorPalette(palette);

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext('2d');
    let height = Math.floor(image.height / (image.width / width));
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0, width, height);

    let result = '';
    for (let y = 0; y < height; y++) {
        result += `<div class='row'>`;
        for (let x = 0; x < width; x++) {
            let yuv = colorconv.RGB2YUV(context.getImageData(x, y, 1, 1).data);
            result += `<div class='item'>${emojiFromColor(yuv, emojiColors)}</div>`;
        }
        result += '</div>';
    }
    return result;
}

// colorCache = {};

function emojiFromColor(targetColor, emojiColors) {
    // if (colorCache.hasOwnProperty(targetColor) && emojiColors.map(e => e.emoji).includes(colorCache[targetColor]))
    //     return colorCache[targetColor];

    let result;
    let bestDistance = Infinity;
    for (let {
            color,
            emoji
        } of emojiColors) {
        let distance = colorDistance(color, targetColor);
        if (distance < bestDistance) {
            bestDistance = distance;
            result = emoji;
        }
    }
    // colorCache[targetColor] = result;
    return result;
}

function colorDistance(vec1, vec2) {
    return vec1.map((c, i) => Math.abs(c - vec2[i])).reduce((a, b) => a + b);
}

emojiCache = {};

function colorFromEmoji(emoji, size = 15) {
    if (emojiCache.hasOwnProperty(emoji))
        return emojiCache[emoji];

    let canvas = document.createElement('canvas');
    // canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    context.font = `${size}px Arial`;
    let width = context.measureText(emoji).width;
    let height = size * 1.3;
    canvas.height = height;
    canvas.width = width;
    context.font = `${size}px Arial`;
    context.fillText(emoji, 0, size);
    let rSum = 0,
        gSum = 0,
        bSum = 0,
        pixels = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let [r, g, b, a] = context.getImageData(x, y, 1, 1).data;
            if (a === 255) {
                rSum += r;
                gSum += g;
                bSum += b;
                pixels++;
            }
        }
    }
    let avgColor = [rSum, gSum, bSum].map(c => Math.floor(c / pixels));
    let result = colorconv.RGB2YUV(avgColor);

    // context.fillStyle = `rgb(${avgColor[0]},${avgColor[1]},${avgColor[2]})`;
    // context.fillRect(0, 0, 5, 5);

    emojiCache[emoji] = result;
    return result;
}

function autoRefresh(e) {
    e.target.checked ? enableAutoRefresh() : disableAutoRefresh();
}

function enableAutoRefresh() {
    refresher = setInterval(() => {
        render();
    }, 100);
}

function disableAutoRefresh() {
    clearInterval(refresher);
}