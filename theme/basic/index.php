<?php
define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>

<h2 class="sound_only">최신글</h2>

<!--슬라이더 세팅 -->


<?php
  echo latest('shop_basic', 'main_slide', 5, 23);
?>

<script src="http://test.raizup.kr/board_api/js/kdh_js.js"></script>
<script>
    var setter = '<?= json_encode($setter) ?>';
    var parsed_setter = JSON.parse(setter);
    
    for(key in parsed_setter) {
        if(parsed_setter[key] == "false") {
            parsed_setter[key] = '';
        }
}
    
     $(document).ready(function(){
        changeSlider(parsed_setter);
    });
</script>


<button style="width: 150px; height:30px; float: right;">
    <a href="./sliderSetting.php">sliderSetting</a>
</button>


<!--슬라이더 세팅 -->

<?php
include_once(G5_THEME_PATH.'/tail.php');
?>

