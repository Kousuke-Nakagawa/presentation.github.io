'use strict'
//これは削除しないこと

//結果の画像を場合分け

//工夫点　たくさん書いてるうちにループに気づいた　正解と問題をオブジェクトで表した
//変数を入れるのに苦労した　＄｛｝
//appendからinnertextにして文字が連打されなくなった
//1回目のクリックだけ点数が加算されるようにした answercount
//shift+alt+Fでインデント整理
//クリックしてエフェクト出るような改良、解説機能をつける プログレスばー
//ボタンを縦にそろえる


let answerCount = 0

let answer = {1:"option4", 2:"option1", 3:"option4", 4:"option1", 5:"option2", 6:"option2", 7:"option3", 8:"option3", 9:"option4", 10:"option1" }

function answerValue() {
  if (answerCount !== 0) {
    return ;
  }
  for (let i =1; i <= 10; i++){
  let selectedRadio = document.querySelector(`input[name="op${i}"]:checked`);
  console.log(selectedRadio);
  if (selectedRadio.id === answer[i]) {
    answerCount = answerCount + 10; 
    console.log("正解");
    let answerCheck = document.getElementById(`answerText${i}`);
    answerCheck.innerText = "正解";
  } else {
    console.log("不正解");
    let answerCheck = document.getElementById(`answerText${i}`);
    answerCheck.innerText = "不正解";
    answerCheck.style.color = "blue";
  }
}
}

function answerCheck(){
  let scoreCheck = document.getElementById("btn-text");
  scoreCheck.innerText = `あなたの点数は${answerCount}点です!`;
}

function showImage(){
  if (answerCount < 50){
  let a = document.getElementById("showImage1") ;
  console.log(a);
  a.style.textAlign = "center"; 
  a.style.display = "inline";
} else if (answerCount >= 50 && answerCount < 80){
  let b = document.getElementById("showImage2") ;
  console.log(b);
  b.style.textAlign = "center"; 
  b.style.display = "inline";
} else if (answerCount >= 80 && answerCount < 100){
  let c = document.getElementById("showImage3") ;
  console.log(c);
  c.style.textAlign = "center"; 
  c.style.display = "inline";
} else if (answerCount === 100){
  let d = document.getElementById("showImage4") ;
  console.log(d);
  d.style.textAlign = "center"; 
  d.style.display = "inline";
}
}



// document.getElementById('button05').addEventListener('click', () => {
//   var a = document.documentElement;
//   var y = a.scrollHeight - a.clientHeight;
//   window.scroll(0, y);
// });

// function getFruits(fruitsObjects){
//   let result = [];
//   for (const key (   ) fruitsObjects){
//     const value = fruitsObjects[key];
//     result.push(value);
//   } return result;
// }

// myName("Kosuke", "Nakagawa");
// const myName = function(first, last){
//   console.log(first + " "+last + "!");
// }