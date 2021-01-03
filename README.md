# じゃんけん Janken | rock paper scissors game - Japanese version

### The Odin Project JavaScript 任務實作，參考Traversy Media的教學，再進行排版設計、加入動態效果，製作成日語極簡版。遊戲切分成三階段：Opening、Play、Result，以下依照階段順序，介紹使用到的技術及細節。

**Opening**
* 進行遊戲前的開頭喊聲，運用css animation產生左右彈進效果。
* JavaScript和css animation合用，控制loader進場至結束時間。
* flex垂直置中


**Play**
* gird響應式排版。
* 切分遊戲結構
  * 得到玩家選擇
  * 得到電腦選擇
  * 假設玩家及電腦選擇推測出輸贏結果
  * 輸出輸贏結果及告知使用者電腦選擇


**Result**
* 輸出結果程序中，建立輸出語系及勝、敗、平手三種不同的呈現方式。
* modal彈出視窗設計，加入fadeIn效果
* 點擊畫面清除modal



See [live demo](https://yvonnechin.github.io/Janken/.)
