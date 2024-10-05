// よく使うプロパティとGSAP特有のプロパティ
// x x:()=>{}も出来る
// y
// xPercent
// yPercent
// rotate
// rotateX
// rotateY
// rotateZ
// scale

// よく使うわけじゃないけど、知っておくと便利（ほぼすべてのCSSプロパティが使えるがリフロー起こすリスクがあるので推奨はされていない）
// clip-path inset(0 0 0 0)
// filter:'blur'
// filter:property[i]みたいに配列を入れることもできる
// width
// height
// display:'none'
// font-size
// background-color
// background-position
// // 👇ただここにもあるように気をつけよう
// https://greensock.com/get-started/#timeline-control

// GSAP特有のプロパティ
// autoAlpha
// duration
// repeat -1だと無限
// repeatDelay
// yoyo
// yoyoEase
// delay
// stagger


window.addEventListener("DOMContentLoaded", function () {
    // gsap.to('.box',{x:200,delay:1});

    // rem、em、%など普段使用している単位も使用できる
    // gsap.to('.box',{x:'200vw',delay:1});

    // ()=>を使うことで、複雑な計算式を使用できる
    // gsap.to('.box',{x:()=>window.innerWidth / 2,delay:1});

    // ランダムな数値を生成してくれる
    // gsap.to('.box',{x:'random(0,200)',delay:1});

    // gsap.to('.box',{y:100,delay:1});

    // 要素自身の50%進む（transform:translateX(50%）に相当）
    // 要素自体の中心からいくらか動かしたい場合はxPercent、yPercentを使用する
    // gsap.to('.box',{xPercent:50,delay:1}); //%の単位は不要

    // gsap.to('.box',{rotate:45,delay:1}); //単位不要、プラスは時計回り、マイナスは反時計回り

    // gsap.to('.box',{rotateX:180,duration:10,delay:1}); //ロールピッチヨーの考え方を知っておく

    // 倍数で指定
    // gsap.to('.box',{scale:0.5,duration:1,delay:1});
    // gsap.to('.box',{scaleX:2,duration:1,delay:1});





    // GSAP特有のプロパティじゃないものに関しての注意事項
    // ・ハイフンでつなぐCSSプロパティについては、キャメルケースにする
    // 例：background-color→backgroundColor
    // ・プロパティ名のあとはシングルクォーテーションで囲ってから記述する
    // 例：clipPath:'inset(0 100% 0 0)'

    // ※Clippyというサイト参照（この中でもInsetをよく使う→トリミングができる）
    // https://bennettfeely.com/clippy/
    // gsap.to('.box',{clipPath:'inset(0 100% 0 0)',duration:1,delay:1});
    
    // gsap.to('.box',{filter:'blur(8px)',duration:1,delay:1});

    // 配列も使える
    // const hako = ['blur(15px)','grayscale(0.8)']
    // gsap.to('.box',{filter:hako[1],duration:1,delay:1});

    // gsap.to('.box',{width:'100px',duration:1,delay:1});

    // gsap.to('.box',{display:'none',duration:1,delay:1});




    // GSAP特有のプロパティ
    // autoAlphaは0-1の値を指定する
    // autoAlphaのイメージ: autoAlpha = opacity + visibility
    // gsap.to('.box',{autoAlpha:0.5,duration:1,delay:1});

    // durationはtransitionとは異なる
    // GSAPを使ってアニメーション付与する場合、CSS,GSAPともにtransitionは使わないようにする（紛らわしいのでdurationを使うようにする）

    // gsap.to('.box',{autoAlpha:0,repeat:-1,repeatDelay:1,duration:1,delay:1});

    // yoyo使う場合は、repeatも併用する方がいい
    // gsap.to('.box',{autoAlpha:0,repeat:1,yoyo:true,duration:1,delay:1});

    // gsap.to('.box',{x:200,
    //     repeat:-1,
    //     repeatDelay:1,
    //     yoyo:true,
    //     // アニメーションが動き出す度にeaseを付与するイメージ（yoyoEaseがある場合とない場合で比べてみると分かりやすい）
    //     yoyoEase:true,
    //     ease:'bounce.out',
    //     duration:2,delay:1});

    // 複数要素のタイミングをずらす
    // gsap.to('.box',{x:300,delay:1,stagger:{
    //     each:1,
    //     from:'start'
    // }});
})