// // 演習1
// console.log("はじめてのjavascript");

// // 演習２
// // 23+5 を計算しなさい
// // ・2000-1800 を計算しなさい
// // ・18+5 を文字列で表示させなさい

// console.log(23 + 5);
// console.log(2000 - 1800);
// console.log("18+5");

// // 変数
// // 段ボールの箱 = 変数
// var test = "変数の練習しています";
// // var point = 5;

// // // var test の[test]をコンソールのカッコ内に入れると表示できます☺️
// // console.log(test);

// // // if文のお話
// // // if (test === "変数の練習しています") {
// // //   // 実行したいことを記述します😀
// // //   alert(1);
// // // }

// // if (point >= 6) {
// //   // 実行したいことを記述します😀
// //   alert("ポイント");
// // } else {
// //   alert("マッチしていません");
// // }

// // 変数
// var point = 80;

// // 90を基準
// if (point >= 80) {
//   console.log("素晴らしい!おめでとう!");
// } else {
//   console.log("もっと頑張りましょう!");
// }

// if(point === 90){

// }else if(point === 80){

// }else if(point === 70){

// }

// 関数= 便利なおまじない、ある機能が使えるもの
// 0 ~ 4
var random = Math.floor(Math.random() * 5);
console.log(random);

if (random === 0) {
  console.log("大吉");
} else if (random === 1) {
  console.log("中吉");
} else if (random === 2) {
  console.log("小吉");
} else if (random === 3) {
  console.log("吉");
} else if (random === 4) {
  console.log("末");
}
