// これが全ての基本
// to / from / fromTo / set / timeline / add

window.addEventListener("DOMContentLoaded", function () {
// gsap.to('.box',{x:100,delay:0.5})


// fromは分かりづらいのであまり使わない→fromToを使うようにする
// gsap.from('.box',{x:100,delay:0.5})
// gsap.fromTo('.box',{x:100},{x:500,delay:1})


// 複数クラスにアニメーション付けたい場合、カンマ区切りでクラス名記述
// gsap.fromTo('.box,.box2',{x:100},{x:500,delay:1})


// 初期状態を設定しておくのに使う
// gsap.set('.box',{x:100})


// 時間管理、時系列
// const tl = gsap.timeline();
// // tl.to('.box',{x:100,y:100,delay:1})
// tl
// .to('.box',{x:100,delay:1}) // メソッドチェーン組む際はセミコロン(;)付けないように！
// .to('.box',{y:100,})
// .to('.box',{x:200}) // あくまで原点に対してどのくらい動かすかを記述する（ありがちなミス）


// // すべてにデフォルトで効果を適用したい場合の書き方（defaultではなく、defaultsなので要注意）
// const tl = gsap.timeline({
//     defaults:{
//         duration:1,
//         backgroundColor:'#888'
//     }
// });
// tl
// .to('.box',{x:100,delay:1})
// .to('.box',{y:100,})
// .to('.box',{x:200})


// 時間管理（<,-=,+=この３つ使えればOK）
// const tl = gsap.timeline();
// tl
// .to('.box',{x:100,delay:1})
// // '<'は直前のアニメーションと同時に動く
// .to('.box',{y:100},'<')
// .to('.box',{x:200})

// const tl = gsap.timeline();
// tl
// .to('.box',{x:100,delay:1})
// // 本来より0.3秒早く動き出す
// .to('.box',{y:100},'-=0.3')
// .to('.box',{x:200})

// const tl = gsap.timeline();
// tl
// .to('.box',{x:100,delay:1})
// // 本来より3秒遅く動き出す
// .to('.box',{y:100},'+=3')
// .to('.box',{x:200})

// const tl = gsap.timeline();
// tl
// .to('.box',{x:100,delay:1})
// // 名前は何でも良いが名前を付けることで順番を変えられる（管理が難しくなるのであまり使わない）
// .to('.box',{y:100},'label')
// .to('.box',{x:200})
// .to('.box',{y:500},'label')


const tl = gsap.timeline();
tl
.to('.box',{x:100,delay:1})
.to('.box',{y:100})
.to('.box',{x:200})
.to('.box',{y:500})
// addの中で関数などいろいろ自由に記述できる（応用効かせられる）
.add(function(){
    console.log('OK');
})

})
