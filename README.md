# 🧮 モンテカルロ法による円周率シミュレーター
Monte Carlo π Simulator using JavaScript and Canvas

## ① 課題名
JavaScript応用課題：Canvasを用いた円周率シミュレーターの作成
(Advanced JavaScript Assignment: Creating a π Simulator using Canvas)

## ② 課題内容（どんな作品か）
このアプリは、モンテカルロ法と呼ばれる確率的アルゴリズムを使って、円周率（π）を近似的に求めるブラウザアプリケーションです。正方形内にランダムに点をプロットし、そのうち1/4円の内側に入る点の割合からπを推定します。Canvasを使ってリアルタイムに可視化されるため、シミュレーション過程が直感的に理解できます。
(This is a browser-based application that approximates the value of π (pi) using a probabilistic algorithm called the Monte Carlo method. It randomly plots points within a square and estimates π based on the proportion that fall inside a quarter-circle. The use of Canvas enables real-time visualization, making the simulation process easy to grasp.)

## ③ アプリのデプロイURL
https://[your-deploy-url].vercel.app
(Replace with your actual deployment URL)

## ④ アプリのログイン用IDまたはPassword（ある場合）
なし（このアプリはログイン不要で誰でも使用できます）
(None – this app is accessible to everyone without login.)

## ⑤ 工夫した点・こだわった点
Canvas描画の最適化：大量の点を描画しても重くならないように、ドット描画を簡素化しました。
UI設計：初学者にも分かりやすいよう、インターフェースは最小限に抑え、ボタンや説明の配置にこだわりました。
学習効果を意識：πの推定値がリアルタイムで更新されるようにし、シミュレーションの収束過程を可視化しました。
(Canvas rendering optimization: Simplified dot rendering to maintain performance with large numbers of points;
User interface design: Kept the interface minimal and user-friendly for beginners, with thoughtful layout of buttons and descriptions;
Educational focus: The π estimate updates in real time, allowing users to visually understand how the approximation converges.)

## ⑥ 難しかった点・次回トライしたいこと（又は機能）
難しかった点：Canvasの座標系（左上原点）と数学的なXY座標（原点中心）との違いに最初混乱し、座標変換に苦労しました。
今後やりたいこと：
点のプロットをアニメーションにする（リアルタイム更新）、推定値のグラフ表示（πの推移）、スマホ対応のUI改善
(Challenges: Initially struggled with the difference between the Canvas coordinate system (top-left origin) and the mathematical XY coordinate system (center origin), which required some careful conversion.
Future plans:
Animate point plotting in real time;
Add a graph to visualize the progression of the π estimate;
Improve mobile UI responsiveness.)

## ⑦ フリー項目（感想、シェアしたいこと等なんでも）
モンテカルロ法はAI開発やデータサイエンスで多用されると聞いています。今回は円周率を題材にしましたが、より実践に即したモンテカルロシミュレーションとはどのようなものなのか興味があります。
(I’ve heard that Monte Carlo methods are widely used in AI development and data science. This project focused on estimating π, but I’m curious about how Monte Carlo simulations are applied in more practical, real-world scenarios.)
