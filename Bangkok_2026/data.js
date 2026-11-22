// 曼谷 7 天行程資料：所有頁面都由這裡產生
const HOTEL = { name: "Sib Kao（住宿）", q: "Sib Kao Bangkok" };

const DAYS = [
  {
    date: "12/17（四）", title: "抵達曼谷・天空跑道初體驗", emoji: "🛬",
    summary: "落地入住，傍晚到 True Digital Park 的空中跑道慢跑看夕陽，晚上逛新開幕的 Cloud 11。",
    stops: [
      { t: "13:05 – 14:30", e: "✈️", n: "抵達蘇凡納布機場（BKK）", q: "Suvarnabhumi Airport",
        d: "CI831 抵達後辦理入境、領行李。可在入境大廳 B1 買 AIS/TrueMove 觀光 SIM 卡，並換一點泰銖。",
        tip: "入境前 3 天內記得先上網填好 TDAC 泰國數位入境卡。", tags: ["入境", "SIM 卡"] },
      { t: "14:30 – 15:30", e: "🚕", n: "前往住宿", q: "Suvarnabhumi Airport",
        d: "建議搭 Grab 或排機場計程車（另付 50 泰銖機場費＋高速公路費），約 40–60 分鐘；行李不多也可搭 Airport Rail Link 轉 BTS/MRT。", tags: ["交通"] },
      { t: "15:30 – 16:15", e: "🏨", n: "Check in Sib Kao", q: HOTEL.q,
        d: "放行李、稍作休息，換上跑步裝備。", tags: ["住宿"] },
      { t: "16:30 – 18:00", e: "🏃", n: "101 Sky Track 慢跑", q: "Sky Track True Digital Park",
        d: "True Digital Park 頂樓的空中環狀跑道，四周綠意環繞，傍晚可以邊跑邊看曼谷東區天際線和夕陽（12 月約 17:50 日落），是很有特色的城市跑步路線。",
        tip: "最近的站是 BTS Punnawithi，有天橋直通園區。", tags: ["運動", "夕陽"] },
      { t: "18:00 – 21:00", e: "🛍️", n: "True Digital Park & Cloud 11 逛街晚餐", q: "Cloud 11 Bangkok Sukhumvit",
        d: "True Digital Park 是融合新創辦公室與商場的園區，餐廳選擇很多；隔壁的 Cloud 11 是新興的創意複合空間，有設計感餐飲與市集，適合輕鬆逛、吃頓晚餐。", tags: ["晚餐", "逛街"] },
      { t: "21:30", e: "🌙", n: "回 Sib Kao 休息", q: HOTEL.q, d: "第一天別太累，早點休息。", tags: [] },
    ],
    shops: [
      { e: "🛒", n: "Tops 超市", w: "True Digital Park 內", p: "先買水、水果、優格當房間零食，價格比便利商店划算。" },
      { e: "📱", n: "機場觀光 SIM 卡", w: "BKK 機場 B1", p: "8 天上網方案約 300–400 泰銖，比國際漫遊便宜很多。" },
    ],
    foods: [
      { e: "🍜", n: "泰式炒河粉 Pad Thai", w: "園區美食街", p: "第一餐來份經典 Pad Thai，酸甜鹹香，平價又不踩雷。" },
      { e: "🥤", n: "泰式奶茶（手標）", w: "隨處可見", p: "橘色的泰式奶茶，運動後來一杯冰的超消暑。" },
    ],
  },
  {
    date: "12/18（五）", title: "按摩＋水門・暹羅商圈大採購", emoji: "💆",
    summary: "早上按摩放鬆，中午到水門吃飯，下午一路從 Big C、中央世界逛到暹羅廣場，晚上逛 SWU 跳蚤市場。",
    stops: [
      { t: "09:30 – 11:30", e: "💆", n: "Healthy Massage Sukhumvit 19 按摩", q: "Healthy Massage Sukhumvit 19",
        d: "位在 Asok 商圈巷內，乾淨舒適，傳統泰式按摩加腳底按摩，消除搭機疲勞。", tip: "建議前一天先預約，指定 2 小時套餐。", tags: ["按摩"] },
      { t: "12:00 – 13:15", e: "🍛", n: "PLATINUM POP 用餐", q: "Platinum Fashion Mall Bangkok",
        d: "位於水門 Platinum 時尚購物中心，美食街以平價泰式小吃為主，可以一次嚐好幾樣。", tags: ["午餐"] },
      { t: "13:30 – 15:00", e: "🛒", n: "Big C Supercenter Ratchadamri", q: "Big C Supercenter Ratchadamri",
        d: "觀光客必訪的大賣場，2 樓是伴手禮天堂：芒果乾、榴槤乾、小老闆海苔、泰式香料包一次買齊。", tip: "大量採買可結帳後直接寄放或回飯店再出門。", tags: ["伴手禮", "超市"] },
      { t: "15:00 – 17:00", e: "🏬", n: "中央世界購物商場 CentralWorld", q: "CentralWorld Bangkok",
        d: "曼谷最大的購物中心之一，從平價品牌到精品都有，12 月廣場前有超大聖誕樹與燈飾，非常好拍。", tags: ["購物", "聖誕燈飾"] },
      { t: "17:00 – 18:30", e: "🎨", n: "曼谷市立藝術文化中心 BACC ＆ 暹羅廣場", q: "Bangkok Art and Culture Centre",
        d: "BACC 是免費參觀的當代藝術館，螺旋式展場很有特色；對面暹羅廣場（Siam Square）是年輕人潮流街區，小店、甜點、文創都很多。", tip: "BACC 週一休館，週五開到 20:00。", tags: ["藝術", "免費"] },
      { t: "19:00 – 21:30", e: "🎪", n: "SWU 國際跳蚤市場 晚餐", q: "SWU International Flea Market Bangkok",
        d: "位於 Asok 附近詩納卡寧威洛大學（SWU）旁的市集，二手衣、手作小物和各式泰國街頭小吃，氣氛輕鬆在地。", tags: ["晚餐", "市集"] },
      { t: "22:00", e: "🌙", n: "回 Sib Kao", q: HOTEL.q, d: "整理今天的戰利品。", tags: [] },
    ],
    shops: [
      { e: "🥭", n: "Big C 伴手禮區", w: "Big C Ratchadamri 2F", p: "芒果乾、Tao Kae Noi 海苔、Bento 魷魚片、泰式綠咖哩醬包，CP 值最高。" },
      { e: "👗", n: "Platinum Fashion Mall", w: "水門", p: "曼谷平價服飾批發商場，買 3 件以上常有批發價，T 恤、洋裝超便宜。" },
      { e: "🧴", n: "Boots / Watsons", w: "CentralWorld 內", p: "泰國限定的 Smooth E、蛇牌爽身粉、Ya Hom 香草鼻通，價格比台灣便宜。" },
    ],
    foods: [
      { e: "🍲", n: "冬蔭功湯 Tom Yum Kung", w: "Platinum 美食街", p: "酸辣鮮香的泰國國湯，加椰奶的濃湯版更溫和。" },
      { e: "🍢", n: "泰式烤豬肉串 Moo Ping", w: "SWU 市集", p: "甜鹹醬汁烤到焦香，配糯米飯是最在地的吃法。" },
      { e: "🥥", n: "椰子冰淇淋", w: "暹羅廣場", p: "盛在椰殼裡，可加花生、糯米、玉米粒配料。" },
    ],
  },
  {
    date: "12/19（六）", title: "船麵＋恰圖恰週末市集", emoji: "🧺",
    summary: "週六限定！吃碗道地船麵後，殺進全世界最大週末市集恰圖恰，晚上到朱拉隆功大學一帶吃夜市。",
    stops: [
      { t: "09:30 – 11:30", e: "💆", n: "Healthy Massage Sukhumvit 19 按摩", q: "Healthy Massage Sukhumvit 19",
        d: "逛市集前先把腿腳按鬆，今天要走很多路！", tags: ["按摩"] },
      { t: "12:00 – 13:00", e: "🍜", n: "Baan Kuay Tiew Ruathong 泰式船麵", q: "Baan Kuay Tiew Ruathong",
        d: "泰式船麵是以前在船上叫賣的小碗麵，湯頭加了豬血或牛血、香料，濃郁又帶點甜。一碗份量小，一次疊好幾碗才過癮！", tip: "可選豬肉或牛肉，湯可選 Nam Tok（濃郁版）或清湯。", tags: ["午餐", "必吃"] },
      { t: "13:30 – 14:30", e: "🏢", n: "Mixt Chatuchak", q: "Mixt Chatuchak",
        d: "就在恰圖恰旁的室內商場，有冷氣、整潔，攤位商品和市集類似，熱的時候進來躲太陽順便逛。", tags: ["購物", "冷氣"] },
      { t: "14:30 – 18:00", e: "🧺", n: "恰圖恰市集 Chatuchak Weekend Market", q: "Chatuchak Weekend Market",
        d: "超過 1 萬 5 千個攤位的週末市集，服飾、家飾、陶瓷、香氛、手工藝、古著、寵物用品應有盡有，邊逛邊吃椰子冰淇淋、烤魷魚。", tip: "營業時間週六、日約 09:00–18:00；大面額鈔票先換開，記得殺價。", tags: ["市集", "週末限定"] },
      { t: "18:30 – 21:30", e: "🌃", n: "朱拉隆功夜市（Banthat Thong 美食街一帶）", q: "Banthat Thong Road Bangkok",
        d: "朱拉隆功大學旁的班塔通路是曼谷近年最紅的美食街，排隊老店、宵夜攤一字排開，學生與在地人都愛來。", tags: ["晚餐", "夜市"] },
      { t: "22:00", e: "🌙", n: "回 Sib Kao", q: HOTEL.q, d: "", tags: [] },
    ],
    shops: [
      { e: "🕯️", n: "香氛＆精油攤", w: "恰圖恰", p: "精油、擴香、香皂比百貨便宜一半以上，買多可殺價。" },
      { e: "🍽️", n: "陶瓷碗盤＆木製餐具", w: "恰圖恰 Section 8–10 一帶", p: "泰式風格餐具、椰殼碗，台灣買不到的特色伴手禮。" },
      { e: "👕", n: "泰國大象褲＆T 恤", w: "恰圖恰", p: "大象褲約 100–150 泰銖，輕薄好穿，CP 值超高。" },
    ],
    foods: [
      { e: "🍜", n: "泰式船麵", w: "Baan Kuay Tiew Ruathong", p: "一碗約 20–30 泰銖起，疊碗是樂趣。" },
      { e: "🦀", n: "黃咖哩炒蟹／海鮮", w: "Banthat Thong 美食街", p: "濃郁蛋香咖哩醬配白飯，人氣第一的泰式海鮮料理。" },
      { e: "🥭", n: "芒果糯米飯", w: "恰圖恰", p: "香甜芒果配椰奶糯米，12 月雖非芒果盛產季，但仍然很好吃。" },
    ],
  },
  {
    date: "12/20（日）", title: "豬肉麵・日系甜點・百麗宮", emoji: "🍮",
    summary: "到新地標 EmSphere 吃人氣豬肉麵，下午吃 Custard Nakamura 甜點、逛暹羅廣場，晚上在暹羅百麗宮逛街吃飯。",
    stops: [
      { t: "09:30 – 11:30", e: "💆", n: "Healthy Massage Sukhumvit 19 按摩", q: "Healthy Massage Sukhumvit 19",
        d: "可以試試精油按摩或頭肩頸按摩，換個口味。", tags: ["按摩"] },
      { t: "12:00 – 13:30", e: "🍜", n: "EmSphere 購物中心・榮泰豬肉麵", q: "EmSphere Bangkok",
        d: "EmSphere 是 Phrom Phong 站的新型購物中心，和 EmQuartier、Emporium 組成 EM District。榮泰豬肉麵（Rung Rueang）是米其林必比登推薦的豬肉麵，清湯或冬蔭湯底都好吃。", tags: ["午餐", "米其林必比登"] },
      { t: "13:30 – 15:00", e: "🏬", n: "逛 EM District", q: "EmQuartier Bangkok",
        d: "EmQuartier 的空中花園、Emporium 的 Gourmet Market，有空可以順路逛逛。", tags: ["購物"] },
      { t: "15:30 – 16:30", e: "🍮", n: "Custard Nakamura", q: "Custard Nakamura Sukhumvit 33/1",
        d: "位在 Sukhumvit 33/1 巷、離 BTS Phrom Phong 約 4 分鐘的超人氣日系烘焙店，招牌是卡士達泡芙和卡士達麵包，奶香濃郁。", tip: "人氣品項下午可能賣完，早點去比較保險。", tags: ["甜點"] },
      { t: "16:30 – 18:00", e: "🚶", n: "暹羅廣場 Siam Square", q: "Siam Square Bangkok",
        d: "週日的暹羅廣場人潮熱鬧，街頭表演、潮流小店、手搖飲與甜點店很多。", tags: ["逛街"] },
      { t: "18:00 – 21:00", e: "💎", n: "暹羅百麗宮 Siam Paragon", q: "Siam Paragon",
        d: "曼谷最具代表性的精品百貨，地下樓層的 Gourmet Market 與美食廣場選擇豐富，也很適合挑選高質感伴手禮。", tags: ["晚餐", "購物"] },
      { t: "21:30", e: "🌙", n: "回 Sib Kao", q: HOTEL.q, d: "", tags: [] },
    ],
    shops: [
      { e: "🍫", n: "Gourmet Market", w: "Siam Paragon G 樓 / Emporium", p: "精緻包裝的泰國零食、果乾、泰式香料，送禮有面子。" },
      { e: "🐘", n: "NaRaYa 曼谷包", w: "Siam Paragon / Central", p: "泰國國民布包品牌，款式多又便宜，送禮自用都好。" },
      { e: "👟", n: "Siam Square 潮流小店", w: "暹羅廣場", p: "泰國本土設計師品牌、平價飾品，比百貨便宜。" },
    ],
    foods: [
      { e: "🍜", n: "榮泰豬肉麵", w: "EmSphere", p: "米其林必比登，豬肉丸、豬肝、肉片豐富，一碗約 60–100 泰銖。" },
      { e: "🥐", n: "卡士達泡芙", w: "Custard Nakamura", p: "外皮酥、內餡滿滿香草卡士達。" },
      { e: "🍧", n: "泰式剉冰 / Bingsu", w: "暹羅廣場", p: "逛累了來碗冰，泰式奶茶口味很推。" },
    ],
  },
  {
    date: "12/21（一）", title: "湄南河畔・藝術街區・ICONSIAM", emoji: "🛶",
    summary: "沿著湄南河走：River City 古董藝術商場、松瓦路老街街頭藝術，晚上到 ICONSIAM 吃水上市場美食、看河岸夜景。",
    stops: [
      { t: "09:30 – 11:30", e: "💆", n: "Healthy Massage Sukhumvit 19 按摩", q: "Healthy Massage Sukhumvit 19",
        d: "最後一次連續按摩，好好放鬆。", tags: ["按摩"] },
      { t: "12:00 – 14:00", e: "🖼️", n: "River City Bangkok 午餐", q: "River City Bangkok",
        d: "湄南河畔的藝術與古董商場，有藝廊、古董店與景觀餐廳，可以邊吃午餐邊看河景。", tip: "可搭 BTS 到 Saphan Taksin 站，從 Sathorn 碼頭搭船或轉 Grab 前往。", tags: ["午餐", "藝術"] },
      { t: "14:00 – 17:00", e: "🎨", n: "松瓦路街頭藝術 Song Wat Road", q: "Song Wat Road Bangkok",
        d: "中國城旁的百年老街，老倉庫改建成咖啡廳、選物店，牆上有許多壁畫與街頭藝術，非常好拍照，是近年曼谷最文青的散步路線。", tags: ["散步", "拍照", "咖啡"] },
      { t: "17:30 – 21:30", e: "🌉", n: "ICONSIAM 晚餐", q: "ICONSIAM",
        d: "河岸超大型購物中心，G 樓的 SookSiam 重現泰國各地水上市場與小吃，一次吃遍全泰國；晚上河畔有噴泉燈光秀。", tip: "Sathorn 碼頭有免費接駁船往返 ICONSIAM。", tags: ["晚餐", "夜景"] },
      { t: "22:00", e: "🌙", n: "回 Sib Kao", q: HOTEL.q, d: "", tags: [] },
    ],
    shops: [
      { e: "🏮", n: "SookSiam 手工藝區", w: "ICONSIAM G 樓", p: "泰國各府的手工藝、布織品與特產，品質好、價格公道。" },
      { e: "☕", n: "Song Wat 選物店", w: "松瓦路", p: "泰國在地咖啡豆、香料與設計小物，獨特又有質感。" },
    ],
    foods: [
      { e: "🍤", n: "水上市場小吃", w: "ICONSIAM SookSiam", p: "船麵、烤蝦、椰子煎餅（Khanom Krok），一攤吃一點最划算。" },
      { e: "🥟", n: "中國城小吃", w: "松瓦路附近", p: "魚翅湯、粿條捲、燕窩甜湯，老字號潮州風味。" },
      { e: "🍹", n: "河畔咖啡", w: "松瓦路老倉庫咖啡廳", p: "坐在河邊喝杯冰咖啡，享受老曼谷氛圍。" },
    ],
  },
  {
    date: "12/22（二）", title: "拉拋區購物＋利亞度安夜市", emoji: "🏮",
    summary: "上午逛 SWU 市集，中午到下午在拉拋商圈逛尚泰與 Union Mall，晚上逛超好拍的夜市，最後到蓮花超市補貨。",
    stops: [
      { t: "09:30 – 11:30", e: "🎪", n: "SWU International Flea Market", q: "SWU International Flea Market Bangkok",
        d: "第二次造訪，把上次沒買到的小物補齊。", tip: "市集多在下午、晚間才熱鬧，早上攤位可能較少，出發前建議再確認營業時間。", tags: ["市集"] },
      { t: "12:00 – 14:30", e: "🏬", n: "尚泰叻拋購物中心 Central Ladprao", q: "Central Ladprao",
        d: "曼谷北區的大型百貨，美食街與連鎖餐廳選擇多，價格比市中心親民。", tip: "MRT Phahon Yothin 站或 BTS Ha Yaek Lat Phrao 站直達。", tags: ["午餐", "購物"] },
      { t: "14:30 – 17:00", e: "👚", n: "Union Mall", q: "Union Mall Bangkok",
        d: "就在尚泰叻拋旁，以平價服飾、包包、手機配件為主，學生族群最愛，價格比市中心更便宜。", tags: ["平價購物"] },
      { t: "17:30 – 21:00", e: "🏮", n: "Liabduan Danneramit 夜市", q: "Liab Duan Dan Neramit Night Market",
        d: "建在舊遊樂園「丹尼拉米」附近的新興夜市，童話城堡造型與燈海非常好拍，美食攤、復古小物與現場音樂樣樣有。", tip: "建議先確認當週營業日與時間。", tags: ["晚餐", "夜市", "拍照"] },
      { t: "21:00 – 22:00", e: "🛒", n: "蓮花超市 Lotus's（拉拋店）", q: "Lotus's Lat Phrao",
        d: "回國前最後補貨：伴手禮、零食、泡麵、調味料，一次買齊。", tags: ["伴手禮", "超市"] },
      { t: "22:30", e: "🧳", n: "回 Sib Kao 整理行李", q: HOTEL.q, d: "注意托運重量，液體類放托運行李。", tags: [] },
    ],
    shops: [
      { e: "🛒", n: "Lotus's 蓮花超市", w: "拉拋店", p: "Mama 泡麵、泰式調味醬、乾燥香料、零食，量販價格最便宜。" },
      { e: "👜", n: "Union Mall 平價服飾", w: "拉拋", p: "百元泰銖起的衣服、包包、飾品，比市中心更便宜。" },
    ],
    foods: [
      { e: "🍖", n: "泰式烤雞＋青木瓜沙拉", w: "利亞度安夜市", p: "Gai Yang 配 Som Tam，伊森（東北）風味代表。" },
      { e: "🍡", n: "泰式點心 Khanom", w: "夜市攤位", p: "椰奶小煎餅、班蘭葉糕，色彩繽紛又便宜。" },
      { e: "🧋", n: "ChaTraMue 手標茶", w: "Central Ladprao", p: "泰式奶茶老牌，綠奶茶也很推。" },
    ],
  },
  {
    date: "12/23（三）", title: "Pier 21 早午餐・賦歸", emoji: "🛫",
    summary: "在 Terminal 21 的 Pier 21 美食街吃最後一頓平價泰國菜，退房後前往機場搭 CI832 回台灣。",
    stops: [
      { t: "09:00 – 09:45", e: "🧳", n: "Check out Sib Kao", q: HOTEL.q,
        d: "退房並寄放行李，檢查護照、手機、充電器。", tags: ["退房"] },
      { t: "10:00 – 10:50", e: "🍛", n: "Pier 21 早午餐", q: "Pier 21 Terminal 21 Asok",
        d: "Terminal 21 Asok 5 樓的美食街，價格幾乎是路邊攤等級（一份約 40–80 泰銖），品質卻很穩定，是曼谷 CP 值最高的美食街之一。", tip: "Terminal 21 約 10:00 開門，入口處先儲值餐卡，剩餘金額可退。", tags: ["早午餐", "高 CP"] },
      { t: "11:00 – 12:00", e: "🚕", n: "取行李，前往蘇凡納布機場", q: "Suvarnabhumi Airport",
        d: "Grab 約 40–60 分鐘；也可搭 Airport Rail Link（Makkasan 站上車）避開塞車。", tip: "國際線建議起飛前 2 小時抵達。", tags: ["交通"] },
      { t: "12:00 – 14:05", e: "🛃", n: "報到、退稅、登機", q: "Suvarnabhumi Airport",
        d: "有買滿 2,000 泰銖以上並開立退稅單者，先到退稅櫃台蓋章；出關後可逛 King Power 免稅店。", tags: ["退稅"] },
      { t: "14:05 → 18:40", e: "🛫", n: "CI832 曼谷 → 台灣", q: "Taoyuan International Airport",
        d: "18:40 抵達台灣，旅程圓滿結束！", tags: ["航班"] },
    ],
    shops: [
      { e: "🛍️", n: "King Power 免稅店", w: "BKK 機場出境後", p: "化妝品、酒類、泰國品牌伴手禮，最後衝刺。" },
    ],
    foods: [
      { e: "🍚", n: "泰式打拋豬飯", w: "Pier 21", p: "加顆荷包蛋，最後一餐的經典選擇。" },
      { e: "🥭", n: "芒果糯米飯", w: "Pier 21 甜點區", p: "離開前再吃一次！" },
    ],
  },
];

// 實用泰語：th 為不含語尾的泰文，依男/女聲加上 ครับ / ค่ะ（問句女聲用 คะ）；音檔在 audio/{id}_{m|f}.mp3
const PHRASES = [
  { id: "hello",    zh: "你好",       th: "สวัสดี",         rom: "sà-wàt-dii",        en: "Hello" },
  { id: "price",    zh: "多少錢？",   th: "ราคาเท่าไหร่",    rom: "raa-khaa thâo-rài", en: "How much is it?", q: true },
  { id: "discount", zh: "便宜一點",   th: "ลดหน่อยได้ไหม",   rom: "lót nòi dâi mái",   en: "Can you give me a discount?", q: true },
  { id: "this",     zh: "我要這個",   th: "เอาอันนี้",        rom: "ao an-níi",         en: "I'll take this one." },
  { id: "thanks",   zh: "謝謝",       th: "ขอบคุณ",          rom: "khàwp-khun",        en: "Thank you" },
  { id: "nosweet0", zh: "完全不甜",   th: "ไม่หวานเลย",      rom: "mâi wǎan loei",     en: "Not sweet at all" },
  { id: "nosweet",  zh: "不甜",       th: "ไม่หวาน",         rom: "mâi wǎan",          en: "Not sweet" },
  { id: "lesssweet",zh: "少糖／微糖", th: "หวานน้อย",        rom: "wǎan nói",          en: "Less sweet" },
  { id: "nospicy0", zh: "完全不辣",   th: "ไม่เผ็ดเลย",      rom: "mâi phèt loei",     en: "Not spicy at all" },
  { id: "nospicy",  zh: "不辣",       th: "ไม่เผ็ด",         rom: "mâi phèt",          en: "Not spicy" },
  { id: "yes",      zh: "是的",       th: "ใช่",             rom: "châi",              en: "Yes" },
  { id: "no",       zh: "不是",       th: "ไม่ใช่",          rom: "mâi châi",          en: "No" },
];

// 景點間交通：ROUTES[第幾天-1]["抵達的景點名稱 n"] = 多種方案
// m 交通方式、s 各段（起點 → 終點）、t 時間、c 四位大人合計交通費、n 備註、b 此方案每人 BTS 票價（用來比較一日券）
const BTS_DAY_PASS = 160; // BTS 一日券每人價格（2026 參考價，不含金線、MRT、ARL）
// 票價為 2026 年參考價（BTS ฿17–65、MRT ฿17–44、ARL ฿15–45、快船 ฿16，依距離計），Grab 依時段浮動
const WALK = (s, t) => [{ m: "🚶 步行", s: [s], t, c: "฿0" }];
const AIRPORT_RAIL = { m: "🚆 ARL 機場快線 + MRT（最省）", t: "約 60–70 分",
  c: "約 ฿208（每人 ARL ฿35＋MRT ฿17）", n: "轉乘要走樓梯、天橋，大行李較辛苦；避開早晚尖峰。" };
const ROUTES = [
  { // 第一天
    "前往住宿": [
      { m: "🚗 Grab（6 人座 GrabCar XL）", s: ["Grab：BKK 機場 Grab 指定上車處（依 App 指示）→ Sib Kao（Sukhumvit 19 巷）"],
        t: "40–60 分", c: "約 ฿550–750（一台車，含高速公路費）", n: "4 人＋4 件大行李建議叫 XL，一般 GrabCar 放不下。" },
      { m: "🚕 機場排班計程車", s: ["計程車：BKK 1 樓計程車排班機 → Sib Kao"],
        t: "40–60 分", c: "約 ฿800–1,000（行李多需 2 台，每台跳表＋機場費 ฿50＋過路費約 ฿75）", n: "上車確認司機跳表（meter）。" },
      { ...AIRPORT_RAIL, s: ["步行：入境大廳 → B1 ARL Suvarnabhumi 站", "ARL：Suvarnabhumi → Makkasan（約 26 分）",
        "步行：Makkasan → MRT Phetchaburi（天橋約 5 分）", "MRT 藍線：Phetchaburi → Sukhumvit（1 站）", "步行：MRT Sukhumvit → Sib Kao（約 7 分）"] },
    ],
    "101 Sky Track 慢跑": [
      { m: "🚝 BTS", b: 55, s: ["步行：Sib Kao → BTS Asok（約 5 分）", "BTS 淺綠線：Asok → Punnawithi（7 站，約 15 分）", "步行：Punnawithi 站天橋 → True Digital Park（約 3 分）"],
        t: "約 25–30 分", c: "約 ฿180–220（每人約 ฿45–55）" },
      { m: "🚗 Grab", s: ["Grab：Sib Kao → True Digital Park"], t: "25–40 分（傍晚易塞車）", c: "約 ฿180–250（一台車）" },
    ],
    "True Digital Park & Cloud 11 逛街晚餐": WALK("步行：Sky Track → True Digital Park 商場 → 天橋 → Cloud 11（約 5–8 分）", "約 5–8 分"),
    "回 Sib Kao 休息": [
      { m: "🚝 BTS", b: 55, s: ["步行：Cloud 11 → BTS Punnawithi 或 Udom Suk（約 5 分）", "BTS 淺綠線：Punnawithi → Asok（7 站，約 15 分）", "步行：BTS Asok → Sib Kao（約 5 分）"],
        t: "約 30 分", c: "約 ฿180–220（每人約 ฿45–55）" },
      { m: "🚗 Grab", s: ["Grab：Cloud 11 → Sib Kao"], t: "20–35 分", c: "約 ฿180–250（一台車）" },
    ],
  },
  { // 第二天
    "Healthy Massage Sukhumvit 19 按摩": WALK("步行：Sib Kao → Healthy Massage（同在 Sukhumvit 19 巷）", "約 3–5 分"),
    "PLATINUM POP 用餐": [
      { m: "🚝 BTS + 步行", b: 28, s: ["步行：Sukhumvit 19 → BTS Asok（約 3 分）", "BTS 淺綠線：Asok → Chit Lom（3 站，約 6 分）", "步行：Chit Lom 空橋 → CentralWorld → 過 Phetchaburi 路 → Platinum（約 15 分）"],
        t: "約 25 分", c: "約 ฿112（每人 ฿28）" },
      { m: "⛴️ 森薩運河船（在地體驗）", s: ["步行：Sib Kao → Asok 碼頭（Sukhumvit 21 巷底、Phetchaburi 路，約 15 分）", "運河船 Khlong Saen Saep：Asok → Pratunam 碼頭（約 10 分）", "步行：Pratunam 碼頭 → Platinum（約 3 分）"],
        t: "約 30 分", c: "約 ฿56–64（每人約 ฿14–16，船上付現）", n: "船速快會濺水，上下船動作要快。" },
      { m: "🚗 Grab", s: ["Grab：Sukhumvit 19 → Platinum Fashion Mall"], t: "15–30 分", c: "約 ฿100–150（一台車）" },
    ],
    "Big C Supercenter Ratchadamri": WALK("步行：Platinum → Ratchaprarop 路口 → 過 Phetchaburi 路往南 → Big C（約 10–12 分）", "約 10–12 分"),
    "中央世界購物商場 CentralWorld": WALK("步行：Big C → 天橋過 Ratchadamri 路 → CentralWorld（約 3–5 分）", "約 3–5 分"),
    "曼谷市立藝術文化中心 BACC ＆ 暹羅廣場": [
      { m: "🚶 步行（空中走廊）", s: ["步行：CentralWorld → Skywalk 空中走廊 → BTS Siam → BACC（約 15 分，不曬太陽）"], t: "約 15 分", c: "฿0" },
      { m: "🚝 BTS", b: 25, s: ["步行：CentralWorld → BTS Chit Lom（約 3 分）", "BTS：Chit Lom → National Stadium（2 站，Siam 轉 Silom 線）", "步行：National Stadium 天橋直通 BACC"],
        t: "約 12 分", c: "約 ฿100（每人 ฿25）" },
    ],
    "SWU 國際跳蚤市場 晚餐": [
      { m: "🚝 BTS + 步行", b: 35, s: ["步行：BACC → BTS National Stadium", "BTS：National Stadium → Asok（5 站，Siam 轉淺綠線，約 12 分）", "步行：BTS Asok → Sukhumvit 23 巷 → SWU 市集（約 10 分）"],
        t: "約 30 分", c: "約 ฿140（每人 ฿35）" },
      { m: "🚗 Grab", s: ["Grab：BACC → SWU（Sukhumvit 23）"], t: "30–50 分（週五晚上尖峰）", c: "約 ฿150–220（一台車）" },
    ],
    "回 Sib Kao": WALK("步行：SWU 市集 → Sukhumvit 路 → 19 巷 Sib Kao（約 10–12 分）", "約 10–12 分"),
  },
  { // 第三天
    "Healthy Massage Sukhumvit 19 按摩": WALK("步行：Sib Kao → Healthy Massage（同在 Sukhumvit 19 巷）", "約 3–5 分"),
    "Baan Kuay Tiew Ruathong 泰式船麵": [
      { m: "🚝 BTS", b: 43, s: ["步行：Sukhumvit 19 → BTS Asok", "BTS 淺綠線：Asok → Victory Monument（7 站，約 15 分）", "步行：Victory Monument 站 → 運河邊船麵巷（約 5 分）"],
        t: "約 25 分", c: "約 ฿172（每人 ฿43）" },
      { m: "🚗 Grab", s: ["Grab：Sukhumvit 19 → 勝利紀念碑船麵巷"], t: "25–45 分", c: "約 ฿150–220（一台車）" },
    ],
    "Mixt Chatuchak": [
      { m: "🚝 BTS", b: 32, s: ["步行：船麵巷 → BTS Victory Monument", "BTS 淺綠線：Victory Monument → Mo Chit（4 站，約 8 分）", "步行：Mo Chit 1 號出口 → Mixt（約 5 分）"],
        t: "約 20 分", c: "約 ฿128（每人 ฿32）" },
      { m: "🚗 Grab", s: ["Grab：勝利紀念碑 → Mixt Chatuchak"], t: "15–25 分", c: "約 ฿100–150（一台車）" },
    ],
    "恰圖恰市集 Chatuchak Weekend Market": WALK("步行：Mixt → 直通恰圖恰 9–19 區（約 2 分）", "約 2 分"),
    "朱拉隆功夜市（Banthat Thong 美食街一帶）": [
      { m: "🚇 MRT", s: ["步行：恰圖恰 → MRT Chatuchak Park（約 5 分）", "MRT 藍線：Chatuchak Park → Sam Yan（14 站，約 30 分）", "步行：MRT Sam Yan → Banthat Thong 路（約 10 分）"],
        t: "約 45 分", c: "約 ฿172（每人約 ฿43）" },
      { m: "🚝 BTS", b: 45, s: ["步行：恰圖恰 → BTS Mo Chit", "BTS：Mo Chit → National Stadium（8 站，Siam 轉 Silom 線）", "步行：National Stadium → Banthat Thong 路（約 12 分）"],
        t: "約 40 分", c: "約 ฿180（每人 ฿45）" },
      { m: "🚗 Grab", s: ["Grab：恰圖恰 → Banthat Thong 路"], t: "30–60 分（週六傍晚塞車）", c: "約 ฿200–300（一台車）" },
    ],
    "回 Sib Kao": [
      { m: "🚇 MRT", s: ["步行：Banthat Thong → MRT Sam Yan（約 10 分）", "MRT 藍線：Sam Yan → Sukhumvit（5 站，約 10 分）", "步行：MRT Sukhumvit → Sib Kao（約 7 分）"],
        t: "約 30 分", c: "約 ฿116（每人約 ฿29）" },
      { m: "🚝 BTS", b: 35, s: ["步行：Banthat Thong 路 → BTS National Stadium（約 12 分）", "BTS：National Stadium → Asok（5 站，Siam 轉淺綠線，約 12 分）", "步行：BTS Asok → Sib Kao（約 5 分）"],
        t: "約 30–35 分", c: "約 ฿140（每人 ฿35）" },
      { m: "🚗 Grab", s: ["Grab：Banthat Thong → Sib Kao"], t: "20–35 分", c: "約 ฿120–180（一台車）" },
    ],
  },
  { // 第四天
    "Healthy Massage Sukhumvit 19 按摩": WALK("步行：Sib Kao → Healthy Massage（同在 Sukhumvit 19 巷）", "約 3–5 分"),
    "EmSphere 購物中心・榮泰豬肉麵": [
      { m: "🚝 BTS", b: 17, s: ["步行：Sukhumvit 19 → BTS Asok", "BTS 淺綠線：Asok → Phrom Phong（1 站）", "步行：Phrom Phong 天橋直通 EmSphere"],
        t: "約 12 分", c: "約 ฿68（每人 ฿17）" },
      { m: "🚶 步行", s: ["步行：Sukhumvit 19 → 沿 Sukhumvit 路往東 → EmSphere（約 1.3 km）"], t: "約 18–20 分", c: "฿0" },
      { m: "🚗 Grab", s: ["Grab：Sukhumvit 19 → EmSphere"], t: "10–20 分", c: "約 ฿80–120（一台車）" },
    ],
    "逛 EM District": WALK("步行：EmSphere → 天橋 → EmQuartier／Emporium（約 3–5 分）", "約 3–5 分"),
    "Custard Nakamura": [
      { m: "🚶 步行", s: ["步行：EmQuartier → Sukhumvit 路往 Asok 方向（經 BTS Phrom Phong 下方）→ Sukhumvit 33/1 巷 → Custard Nakamura（約 700 m）"],
        t: "約 8–10 分", c: "฿0" },
      { m: "🚗 Grab", s: ["Grab：EmQuartier → Sukhumvit 33/1 Custard Nakamura"], t: "5–15 分", c: "約 ฿60–100（一台車）", n: "距離很近，走路通常比塞車快。" },
    ],
    "暹羅廣場 Siam Square": [
      { m: "🚝 BTS", b: 35, s: ["步行：Custard Nakamura → Sukhumvit 33/1 巷口 → BTS Phrom Phong（約 4 分）", "BTS 淺綠線：Phrom Phong → Siam（5 站，約 12 分）", "步行：BTS Siam 2／4 號出口 → Siam Square（約 3 分）"],
        t: "約 20–25 分", c: "約 ฿140（每人 ฿35）" },
      { m: "🚗 Grab", s: ["Grab：Sukhumvit 33/1 → Siam Square"], t: "20–40 分", c: "約 ฿120–180（一台車）" },
    ],
    "暹羅百麗宮 Siam Paragon": WALK("步行：Siam Square → 天橋 → Siam Paragon（約 5 分）", "約 5 分"),
    "回 Sib Kao": [
      { m: "🚝 BTS", b: 32, s: ["步行：Siam Paragon → BTS Siam（直通）", "BTS 淺綠線：Siam → Asok（4 站，約 8 分）", "步行：BTS Asok → Sib Kao（約 5 分）"],
        t: "約 20 分", c: "約 ฿128（每人 ฿32）" },
      { m: "🚗 Grab", s: ["Grab：Siam Paragon → Sib Kao"], t: "15–35 分", c: "約 ฿120–180（一台車）" },
    ],
  },
  { // 第五天
    "Healthy Massage Sukhumvit 19 按摩": WALK("步行：Sib Kao → Healthy Massage（同在 Sukhumvit 19 巷）", "約 3–5 分"),
    "River City Bangkok 午餐": [
      { m: "🚝 BTS + ⛴️ 快船", b: 55, s: ["步行：Sukhumvit 19 → BTS Asok", "BTS：Asok → Saphan Taksin（Siam 轉 Silom 線，約 30 分）", "步行：Saphan Taksin 2 號出口 → Sathorn 碼頭（約 2 分）",
        "昭披耶河快船（橘旗）：Sathorn → Si Phraya 碼頭（約 10 分）", "步行：Si Phraya 碼頭 → River City（約 3 分）"],
        t: "約 55 分", c: "約 ฿250–290（每人 BTS 約 ฿47–55＋船 ฿16）", n: "順便體驗湄南河，推薦！" },
      { m: "🚇 MRT + 步行", s: ["步行：Sib Kao → MRT Sukhumvit（約 7 分）", "MRT 藍線：Sukhumvit → Hua Lamphong（6 站，約 15 分）", "步行：Hua Lamphong → River City（約 15 分，或短程 Grab ฿60）"],
        t: "約 40 分", c: "約 ฿116（每人約 ฿29）" },
      { m: "🚗 Grab", s: ["Grab：Sukhumvit 19 → River City"], t: "25–45 分", c: "約 ฿150–250（一台車）" },
    ],
    "松瓦路街頭藝術 Song Wat Road": WALK("步行：River City → Talat Noi 老巷（沿途塗鴉）→ Song Wat 路（約 10–15 分）", "約 10–15 分"),
    "ICONSIAM 晚餐": [
      { m: "⛴️ 快船 + 免費接駁船", s: ["步行：Song Wat 路 → Ratchawong 碼頭（約 5 分）", "昭披耶河快船（橘旗）：Ratchawong → Sathorn 碼頭（約 15 分）", "ICONSIAM 免費接駁船：Sathorn → ICONSIAM（約 10 分）"],
        t: "約 40 分", c: "約 ฿64（每人 ฿16，接駁船免費）", n: "橘旗快船約 19:00 收班，傍晚前搭。" },
      { m: "🚗 Grab", s: ["Grab：Song Wat 路 → ICONSIAM"], t: "20–40 分（過橋易塞）", c: "約 ฿120–200（一台車）" },
    ],
    "回 Sib Kao": [
      { m: "⛴️ 接駁船 + 🚝 BTS", b: 55, s: ["ICONSIAM 免費接駁船 → Sathorn 碼頭（約 10 分）", "步行：Sathorn 碼頭 → BTS Saphan Taksin（約 2 分）", "BTS：Saphan Taksin → Asok（Siam 轉淺綠線，約 30 分）", "步行：BTS Asok → Sib Kao（約 5 分）"],
        t: "約 55 分", c: "約 ฿190–220（每人約 ฿47–55）" },
      { m: "🚝 BTS 金線 + BTS", b: 55, s: ["步行：ICONSIAM → BTS 金線 Charoen Nakhon 站（相連）", "BTS 金線：Charoen Nakhon → Krung Thon Buri（2 站）", "BTS：Krung Thon Buri → Asok（Siam 轉淺綠線，約 30 分）", "步行：BTS Asok → Sib Kao（約 5 分）"],
        t: "約 50 分", c: "約 ฿256–290（每人金線 ฿17＋BTS 約 ฿47–55）" },
      { m: "🚗 Grab", s: ["Grab：ICONSIAM → Sib Kao"], t: "30–50 分", c: "約 ฿200–300（一台車）" },
    ],
  },
  { // 第六天
    "SWU International Flea Market": WALK("步行：Sib Kao → Sukhumvit 路 → 23 巷 SWU 市集（約 10–12 分）", "約 10–12 分"),
    "尚泰叻拋購物中心 Central Ladprao": [
      { m: "🚇 MRT", s: ["步行：SWU → MRT Sukhumvit（約 8 分）", "MRT 藍線：Sukhumvit → Phahon Yothin（8 站，約 18 分）", "Phahon Yothin 站出口直通 Central Ladprao"],
        t: "約 30 分", c: "約 ฿140（每人約 ฿35）" },
      { m: "🚗 Grab", s: ["Grab：Sukhumvit 23 → Central Ladprao"], t: "25–45 分", c: "約 ฿150–250（一台車）" },
    ],
    "Union Mall": WALK("步行：Central Ladprao → 地下道過 Lat Phrao 路口 → Union Mall（約 5 分）", "約 5 分"),
    "Liabduan Danneramit 夜市": [
      { m: "🚶 步行", s: ["步行：Union Mall → 沿 Phahon Yothin 路往北 → Danneramit 夜市（約 900 m）"], t: "約 12–15 分", c: "฿0" },
      { m: "🚝 BTS", b: 17, s: ["步行：Union Mall → BTS Ha Yaek Lat Phrao", "BTS 淺綠線：Ha Yaek Lat Phrao → Phahon Yothin 24（1 站）", "步行：Phahon Yothin 24 站 2 號出口 → 夜市（約 5 分）"],
        t: "約 15 分", c: "約 ฿68（每人 ฿17）" },
      { m: "🚗 Grab", s: ["Grab：Union Mall → Danneramit 夜市"], t: "5–15 分", c: "約 ฿60–100（一台車）" },
    ],
    "蓮花超市 Lotus's（拉拋店）": [
      { m: "🚗 Grab", s: ["Grab：Danneramit 夜市 → Lotus's（拉拋店）"], t: "10–20 分", c: "約 ฿80–150（一台車）", n: "拉拋一帶有多家 Lotus's，出發前用 Google Map 確認要去哪一家。" },
      { m: "🚇 MRT", s: ["步行：夜市 → MRT Phahon Yothin（約 10 分）", "MRT 藍線：Phahon Yothin → Lat Phrao（1 站）", "步行：MRT Lat Phrao → Lotus's（依分店位置）"],
        t: "約 20–25 分", c: "約 ฿68（每人 ฿17）" },
    ],
    "回 Sib Kao 整理行李": [
      { m: "🚗 Grab（推薦，大包小包）", s: ["Grab：Lotus's → Sib Kao"], t: "20–35 分", c: "約 ฿180–250（一台車）" },
      { m: "🚇 MRT", s: ["步行：Lotus's → MRT Lat Phrao", "MRT 藍線：Lat Phrao → Sukhumvit（7 站，約 15 分）", "步行：MRT Sukhumvit → Sib Kao（約 7 分）"],
        t: "約 35 分", c: "約 ฿132（每人約 ฿33）", n: "MRT 末班約 24:00。" },
    ],
  },
  { // 第七天
    "Pier 21 早午餐": WALK("步行：Sib Kao → Sukhumvit 路 → Terminal 21 五樓 Pier 21（約 5–7 分）", "約 5–7 分"),
    "取行李，前往蘇凡納布機場": [
      { m: "🚗 Grab（6 人座 GrabCar XL）", s: ["步行：Terminal 21 → Sib Kao 取行李（約 5 分）", "Grab：Sib Kao → BKK 機場出境樓層（4 樓）"],
        t: "40–60 分", c: "約 ฿550–750（一台車，含高速公路費）", n: "4 人＋大行李建議叫 XL。" },
      { m: "🚕 計程車", s: ["步行：Terminal 21 → Sib Kao 取行李", "計程車：Sib Kao → BKK 機場"],
        t: "40–60 分", c: "約 ฿700–900（行李多需 2 台，每台跳表＋過路費約 ฿75）" },
      { ...AIRPORT_RAIL, s: ["步行：Terminal 21 → Sib Kao 取行李 → MRT Sukhumvit（約 7 分）", "MRT 藍線：Sukhumvit → Phetchaburi（1 站）",
        "步行：MRT Phetchaburi → ARL Makkasan（天橋約 5 分）", "ARL：Makkasan → Suvarnabhumi（約 26 分）"] },
    ],
  },
];
