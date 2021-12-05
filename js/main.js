// $(function() {
//   alert('OK!');
// });

// ハンバーガーメニュー

// ハンバーガー
$(".burgerBtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');
  //ボタン自身に activeクラスを付与し
    $(".globalNav").toggleClass('panelactive');
    //しかくい枠を消すための
    $(".burger__btn").toggleClass('panelactive');
    // タイトルの色の変更
    $(".firstView__title").toggleClass('panelactive');
    //ナビゲーションにpanelactiveクラスを付与
    // $(".globalNavMenu__link").toggleClass('panelactive');
    $('.bar__btn').toggleClass('active');
});

// メニューをクリックで閉じる
$(".globalNavMenu__link").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');
  //ボタン自身に activeクラスを付与し
    $(".globalNav").toggleClass('panelactive');
    //ナビゲーションにpanelactiveクラスを付与
    // $(".globalNavMenu__link").toggleClass('panelactive');
    $('.bar__btn').toggleClass('active');
});

