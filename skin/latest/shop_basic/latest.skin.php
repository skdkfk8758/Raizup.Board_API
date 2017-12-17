<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once('./_common.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$latest_skin_url.'/style.css">', 0);
add_javascript('<script src="'.G5_JS_URL.'/jquery.bxslider.js"></script>', 10);
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
?>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
    
    <!-- 합쳐지고 최소화된 최신 CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    
    <!-- 부가적인 테마 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
    
    <!-- 합쳐지고 최소화된 최신 자바스크립트 -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

    <div class="slider hideslider" id="slider">
        <?php for ($i=0; $i<count($list); $i++) { ?>
            <?php
                $wr_id = $list[$i]['wr_id'];
                $bo_table = "main_slide";
                $file = get_file($bo_table, $wr_id);
                $imgsrc = $file[0]['path']."/".$file[0]['file'];
                echo "<div><img src=".$imgsrc." title=".$list[$i]['subject'].">"."</div>";

            ?>
        <?php }  ?>
    </div>

    <div class="setting-form">
        <ul id="myTab" class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#general_option" id="general-tab" role="tab" data-toggle="tab" aria-controls="general_option" aria-expanded="false">일반옵션</a></li>
            <li role="presentation" class=""><a href="#pager_option" role="tab" id="pager-tab" data-toggle="tab" aria-controls="pager_option" aria-expanded="true">Pager옵션</a></li>
        </ul>
        <div id="myTabContent" class="tab-content">
         <div role="tabpanel" class="tab-pane fade" id="general_option" aria-labelledby="general-tab">
             <table id="general-option-table">
                <tr>
                    <th>옵션</th><th>설명</th><th>선택</th>
                </tr>
             </table>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="pager_option" aria-labelledby="pager-tab">
             <table id="pager-option-table">
                <tr>
                    <th>옵션</th><th>설명</th><th>선택</th>
                </tr>
             </table>
        </div>
        
        </div>  

        <button id="apply-button">적용</button>

        <script src="http://test.raizup.kr/board_api/js/kdh_js.js"></script>
         <script>
            $(document).ready(function(){
                $(".hideslider").hide();
                showTable();
            });
        </script>
    </div>
    