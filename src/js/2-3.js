// イージングを制するものがアニメーションを制する

// 自己帰属感（=自分で操作できている感覚）について
// ease.in out inoutの覚え方
// cubic-bezier
// https://cubic-bezier.com/#.17,.67,.83,.67
// カスタムease

// 自己帰属感やUX、イージングに関する参考サイト
// https://note.com/ritar/n/n5e8ed0e07917
// https://ics.media/entry/18730/
// https://blog.adobe.com/jp/publish/2019/04/17/cc-web-ui-ux-animation-principles-tips-tricks-best-practices

// ビジュアライザー（可視化）
// https://greensock.com/docs/v3/Eases


// window.addEventListener('DOMContentLoaded',function(){
//     gsap.to('.box',{x:500,ease:'power2.out',delay:1});
// })

// ease各種の覚え方
// easeの意味：ゆったり
// ease-in: inなので、入りゆったり
// ease-out: outなので、出口ゆったり
// ease-inout: 入りと出口ともにゆったり

// GSAP使う場合、デフォルトで何かしらeaseが付いていることが多いことは覚えておく
// →ScrollTrigger使う場合、打ち消さないとおかしな挙動になることがある（ease:'none'）