//疑似要素を動かしたい時【疑似要素はDOM要素ではない】

// ■要点
// 疑似要素はDOM要素ではない（含まれない）
// JavaScriptはDOM要素の操作が得意
// GSAPはJavaScriptのライブラリなのでもちろん操作不可
// じゃあ回避方法は？
// ↓
// 『カスタムプロパティ』を使用する
// --のようにハイフン2つをつなげることで、プロパティを自作できる
// カスタムプロパティを使うことで、疑似要素にも継承させることが可能になる（呼び出す際はvar()を使う）

// CSSのtransform-originの知識が必要

window.addEventListener('DOMContentLoaded',function(){
    gsap.to('.heading',{'--scaleX':1,delay:1,duration:0.4});
})

