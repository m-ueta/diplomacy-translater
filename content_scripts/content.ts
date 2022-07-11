function replaceCountryCode(countryCode) {
    switch (countryCode) {
        //トルコデフォ
        case "Con":
            return "コンスタンティノーブル";
        case "Ank":
            return "アンカラ";
        case "Smy":
            return "スミルナ";
        //トルコ東
        case "Arm":
            return "アルメニア";
        case "Syr":
            return "シリア";
        //岸種別
        case "ec":
            return "東岸";
        case "nc":
            return "北岸"
        case "sc":
            return "南岸";
        //ロシアデフォ
        case "Stp":
            return "サンクトペテルブルク";
        case "Mos":
            return "モスクワ";
        case "Sev":
            return "セヴァストポリ";
        case "War":
            return "ワルシャワ";
        //ワルシャワ周辺
        case "Lyn":
            return "リヴォニア";
        case "Pru":
            return "プロシア";
        case "Sil":
            return "シレジア";
        case "Gal":
            return "ガリシア";
        case "Ukr":
            return "ウクライナ";
        //トルコ西
        case "Bul":
            return "ブルガリア";
        case "Rum":
            return "ルーマニア";
        case "Gre":
            return "ギリシャ";
        case "Bud":
            return "ブダペスト"
        case "Tri":
            return "トリエステ";
        //オーストリア周辺国
        case "Ser":
            return "セルビア";
        case "Alb":
            return "アルバニア";
        case "Tyr":
            return "チロル";
        case "Boh":
            return "ボヘミア";
        case "Vie":
            return "ウィーン";
        //イタリア半島
        case "Ven":
            return "ヴェニス";
        case "Apu":
            return "アビュリア";
        case "Nap":
            return "ナポリ";
        case "Rom":
            return "ローマ";
        case "Tus":
            return "トスカーナ";
        //フランス
        case "Pie":
            return "ピエモント";
        case "Mar":
            return "マルセイユ";
        case "Gas":
            return "ガスコーニュ";
        case "Bur":
            return "ブルゴーニュ";
        case "Par":
            return "パリ";
        case "Bre":
            return "ブレスト";
        case "Pic":
            return "ピカルディ";
        case "Spa":
            return "スペイン";
        case "Por":
            return "ポルトガル";
        case "Naf":
            return "北アフリカ";
        case "Tun":
            return "チュニス";
        case "Bel":
            return "ベルギー";
        case "Hol":
            return "オランダ";
        case "Ruh":
            return "ルール";
        case "Kie":
            return "キール";
        case "Ber":
            return "ベルリン";
        case "Mun":
            return "ミュンヘン";
        //イギリス
        case "Edi":
            return "エディンバラ";
        case "Cly":
            return "クライド";
        case "Wal":
            return "ウェールズ";
        case "Lvp":
            return "リヴァプール";
        case "Lon":
            return "ロンドン";
        //ノルウェー半島
        case "Nwy":
            return "ノルウェー"
        case "Swe":
            return "スウェーデン";
        case "Fin":
            return "フィンランド";
        case "Den":
            return "デンマーク";
        //海シリーズ
        case "BLA":
            return "黒海";
        case "EAS":
            return "東地中海";
        case "AEG":
            return "エーゲ海";
        case "ION":
            return "イオニア海";
        case "TYS":
            return "ティレニア海";
        case "LYO":
            return "リヨン海";
        case "WES":
            return "西地中海";
        case "MAO":
            return "中大西洋";
        case "IRI":
            return "アイリッシュ海";
        case "NAO":
            return "北大西洋";
        case "NWG":
            return "ノルウェー海";
        case "NTH":
            return "北海";
        case "HEL":
            return "ヘルゴランド海";
        case "SKA":
            return "スカゲラク";
        case "BAL":
            return "バルト海";
        case "BOT":
            return "ボスニア海";
        case "BAR":
            return "バレンツ海";
        case "ADR":
            return "アドリア海";
        case "ENG":
            return "イングランド海"
        case "Yor":
            return "ヨークシャー";
        case "Lvn":
            return "リヴォニア"
        default:
            return countryCode;
    }
}
function f(n) {
    var tspanCollection = n.getElementsByTagName("tspan");
    var tspanCollectionLength = tspanCollection.length;
    for (var i = 0; i < tspanCollectionLength; i++) {
        tspanCollection[i].innerHTML = replaceCountryCode(tspanCollection[i].innerHTML);
    }
}
f(document.body);