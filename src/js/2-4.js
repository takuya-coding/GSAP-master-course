//【知ってたら便利】実用的なutils関数について
// utils.random
// utils.toArray
// この２つ知っているだけで十分

window.addEventListener('DOMContentLoaded',function(){
    // 0-500という範囲を指定
    // let translateX = gsap.utils.random(0,500);

    // それぞれを別個にランダムに動かしたい場合（trueを付ける）
    // let translateX = gsap.utils.random(0,500,true);

    // 100刻みで動かしたい場合
    let translateX = gsap.utils.random(0,500,100,true);

    // gsap.to('.box',{x:translateX,delay:1});

    // 素のJavaScript
    // let boxes = document.querySelectorAll('.box');
    // console.log(boxes);

    // 素のJavaScriptと同じことがgsap側だけでできる
    // let boxes = gsap.utils.toArray('.box');
    // console.log(boxes);

    // 具体的な使用例

    // 素のJavaScript使った場合
    // this.document.querySelectorAll('.box').forEach((target)=>{
    //     gsap.to(target,{x:translateX,delay:1});
    // });

    // utils.toArray使った場合
    gsap.utils.toArray('.box').forEach((target)=>{
        gsap.to(target,{x:translateX,delay:1});
    });


})