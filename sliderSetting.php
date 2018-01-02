
<!-- } 게시물 작성/수정 끝 -->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>

    <!-- 합쳐지고 최소화된 최신 CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

    <!-- 부가적인 테마 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

    <!-- 합쳐지고 최소화된 최신 자바스크립트 -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>


<form action="./index.php" method="post">
    <div class="setting-form">
        <ul id="myTab" class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#general_option" id="general-tab" role="tab" data-toggle="tab" aria-controls="general_option" aria-expanded="true">일반옵션</a></li>
            <li role="presentation" class=""><a href="#pager_option" role="tab" id="pager-tab" data-toggle="tab" aria-controls="pager_option" aria-expanded="true">Pager옵션</a></li>
            <li role="presentation" class=""><a href="#controls_option" role="tab" id="controls-tab" data-toggle="tab" aria-controls="controls_option" aria-expanded="true">Control 옵션</a></li>
            <li role="presentation" class=""><a href="#auto_option" role="tab" id="auto-tab" data-toggle="tab" aria-controls="auto_option" aria-expanded="true">Auto 옵션</a></li>
            <li role="presentation" class=""><a href="#carousel_option" role="tab" id="carousel-tab" data-toggle="tab" aria-controls="carousel_option" aria-expanded="true">carousel 옵션</a></li>
            <li role="presentation" class=""><a href="#accessibility_option" role="tab" id="accessibility-tab" data-toggle="tab" aria-controls="accessibility_option" aria-expanded="true">accessibility 옵션</a></li>
        </ul>

        <div id="myTabContent" class="tab-content">
            <div role="tabpanel" class="tab-pane fade active in" id="general_option" aria-labelledby="general-tab">
                <table id="general-option-table">
                    <tr> <th>옵션</th><th>설명</th><th>선택</th> </tr>
                </table>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="pager_option" aria-labelledby="pager-tab">
                <table id="pager-option-table">
                    <tr> <th>옵션</th><th>설명</th><th>선택</th> </tr>
                </table>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="controls_option" aria-labelledby="pager-tab">
                <table id="controls-option-table">
                    <tr> <th>옵션</th><th>설명</th><th>선택</th> </tr>
                </table>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="auto_option" aria-labelledby="pager-tab">
                <table id="auto-option-table">
                    <tr> <th>옵션</th><th>설명</th><th>선택</th> </tr>
                </table>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="carousel_option" aria-labelledby="pager-tab">
                <table id="carousel-option-table">
                    <tr> <th>옵션</th><th>설명</th><th>선택</th> </tr>
                </table>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="accessibility_option" aria-labelledby="pager-tab">
                <table id="accessibility-option-table">
                    <tr> <th>옵션</th><th>설명</th><th>선택</th> </tr>
                </table>
            </div>

        </div>
        
    <input type="submit" value="적용" id="apply-button" style="width: 100px; height: 30px;"/>
    <button> <a href="./index.php">취소</a> </button>
</form>

<script src="http://test.raizup.kr/board_api/js/kdh_js.js"></script>
 <script>
    $(document).ready(function(){
        showTable();
    });
</script>

