// アニメーション制御の助っ人 コントロールメソッド

// ■必要な機能（細分化）
// クリック判定
// 押されたボタンに応じてアニメーション
// クリック判定→JavaScript
// アニメーション→GSAP

// ■要点
// 特定のタイミングで発火したい時などに便利！→GSAP
// イベントリスナー addEventListener() →クリック判定する
// ↑JavaScriptの強みはイベント取得可能!!
// documentとは =>文書
// var let constの使い分け
// const 再代入不可能
// let 再代入可能

document.addEventListener('DOMContentLoaded',function(){
    const start = document.querySelector('.start');
    const pause = document.querySelector('.pause');
    const resume = document.querySelector('.resume');
    const reverse = document.querySelector('.reverse');
    const restart = document.querySelector('.restart');
    const kill = document.querySelector('.kill');

    // GSAPはJavaScirpt同様、変数に格納可能
    const animation = gsap.to('.box',{rotate:360,duration:3})
    animation.pause();
    // setTimeout(() => {
    //     animation.play();
    // }, 5000);

    start.addEventListener('click',function(){
        animation.play();
    })

    pause.addEventListener('click',function(){
        animation.pause();
    })

    resume.addEventListener('click',function(){
        animation.resume();
    })

    reverse.addEventListener('click',function(){
        animation.reverse();
    })

    restart.addEventListener('click',function(){
        animation.restart();
    })

    kill.addEventListener('click',function(){
        animation.kill();
    })
})