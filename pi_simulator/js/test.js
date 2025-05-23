// alert関数を用いて動いていることを確認
// alert(111)

// console.logは、コンソールに出力するためのもの
// 演習
// console.log("はじめてのJavaScript");
// console.log(23+5);
// console.log("18+5");

// 変数 = 段ボール箱のようなイメージ、箱の中にはいろいろなデータを収納できる
// 変数の宣言
// var test = "ジーズアカデミー";  // testという名前の箱を作って、ジーズアカデミーを入れる
// var test1 = 1111; 

// SyntaxErrorは文字の打ち間違い；何行目が間違っているかが表示される


// jQueryを使って、HTMLの要素を取得する
// htmlを書いてからJSを実行すること
$("#a").on("click", function() {
    var numPoints = parseInt($("#numPoints").val());
    var inside = 0;     // insideは円の中に入った点の数；1回点を打つたびに、中に入ってたら inside を1増やす
    for (let i = 0; i < numPoints; i++) {
        // 0から1までのランダムな数字を生成する
        var random_a = Math.random();
        var random_b = Math.random();
        // べき乗を表す演算子は**を使う（Math.pow() でも可）
        // ^はビットごとの排他的論理和
        var distance = Math.sqrt(random_a**2 + random_b**2);   
        console.log(distance);  
        // モンテカルロ法で円周率を求める
        // 条件分岐；if文を用いて条件に応じて処理を分ける
        /*
            if (条件) {
            console.log("Trueの場合の処理");
            }else {
            console.log("Falseの場合の処理");
            }
        */
        if (distance < 1) {
            inside++;
        }
    }
    // h1の文字を書き換える
    var pi = (inside / numPoints) * 4;
    $("h1").text("推定された円周率：" + pi);
    console.log(pi);
    // この上に書く
    // この下絶対消さない！
})

$("#a").on("click", function () {
    var numPoints = parseInt($("#numPoints").val());
    var inside = 0;

    // canvas取得
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // 描画をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 円弧の描画（背景に）
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);  // 左下
    ctx.arc(
        0,                    // 中心X
        canvas.height,        // 中心Y
        canvas.height,        // 半径を canvas.height に（正方形ならOK）
        Math.PI,              // 開始角（左→下）
        1.5 * Math.PI         // 終了角（下→右）
    );
    ctx.closePath();
    ctx.fillStyle = "lightgray";
    ctx.fill();


    for (let i = 0; i < numPoints; i++) {
        // ランダムな点（0〜1の範囲）
        var random_a = Math.random();
        var random_b = Math.random();

        var distance = Math.sqrt(random_a ** 2 + random_b ** 2);

        // スケーリング（キャンバス座標に変換）
        var x = random_a * canvas.width;
        var y = canvas.height - (random_b * canvas.height); // Y軸反転（上が0のため）

        if (distance < 1) {
            inside++;
            ctx.fillStyle = "red"; // 円の中
        } else {
            ctx.fillStyle = "blue"; // 円の外
        }
        ctx.fillRect(x, y, 2, 2); // 1×1の点を描画
    }

    var pi = (inside / numPoints) * 4;
    $("h1").text("推定された円周率：" + pi.toFixed(6));
});

