
// 옵션 초기화
var modeOption = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical",
    FADE: "fade"
};

var pagerTypeOption = {
    FULL: "full",
    SHORT: "short"
};

var boolOptions = {
    TURE: true,
    FALSE: false
};

var options = {
  item:
    {
        // 일반옵션
        mode: {selectOption: modeOption, desc: "슬라이드 모드 설정", type: "mode",  upperMenu: 'general'},
        speed: {default: 500, desc: "슬라이더 속도 설정", type: "input",upperMenu: "general"},
        slideMargin: {default: 0, desc: "슬라이더 이미지 여백 설정", type: "input",upperMenu: "general"},
        startSlide: {default: 0, desc: "시작 슬라이드 설정", type: "input",upperMenu: "general"},
        randomStart: {selectOption: boolOptions, desc: "시작 슬라이드 랜점 설정", type: "bool_false",upperMenu: "general"},
        // slideSelector: ?
        infiniteLoop: {selectOption: boolOptions, desc: "무한반복 설정", type: "bool_true",upperMenu: "general"},
        hideControlOnEnd: {selectOption: boolOptions, desc: "반복 설정 해제(?)", type: "bool_false",upperMenu: "general"},
        // easing: null,
        captions: {selectOption: boolOptions, desc: "슬라이드 캡션 설정", type: "bool_false",upperMenu: "general"},
        ticker: {selectOption: boolOptions, desc: "Ticker 설정", type: "bool_false",upperMenu: "general"},
        tickerHover: {selectOption: boolOptions, desc: "TickerHover 설정", type: "bool_false",upperMenu: "general"},
        adaptiveHeight: {selectOption: boolOptions, desc: "각 슬라이드 높이를 기준으로 슬라이더 높이를 동적으로 조정", type: "bool_false",upperMenu: "general"},
        adaptiveHeightSpeed: {default: 500, desc: "슬라이드 높이 전환 지속시간 설정", type: "input",upperMenu: "general"},
        video: {selectOption: boolOptions, desc: "슬라이드에 비디오 재생 설정", type: "bool_false",upperMenu: "general"},
        responsive: {selectOption: boolOptions, desc: "슬라이드 자동 크기조절 설정", type: "bool_true",upperMenu: "general"},
        useCSS: {selectOption: boolOptions, desc: "CSS 전환 사용 설정", type: "bool_true",upperMenu: "general"},
        // preloadImages: all, visible -> 설정하면 이미지 슬라이드 안됨(?)
        touchEnabled: {selectOption: boolOptions, desc: "터치 스와이프 설정", type: "bool_true",upperMenu: "general"},
        swipeThreshold: {default: 50, desc: "터치 스와이프 Threshhold 설정", type: "input",upperMenu: "general"},
        oneToOneTouch: {selectOption: boolOptions, desc: "슬라이드가 손가락을 따가 스와이프됨 -> 설정", type: "bool_true",upperMenu: "general"},
        preventDefaultSwipeX: {selectOption: boolOptions, desc: "터치스크린이 X 축을 따라 움직이는지 설정", type: "bool_true",upperMenu: "general"},
        preventDefaultSwipeY: {selectOption: boolOptions, desc: "터치스크린이 Y 축을 따라 움직이는지 설정", type: "bool_false",upperMenu: "general"},
        // wrapperClass:  -> wrapper 있으면 설정
        // slideWidth: {default: 600, desc: "슬라이드 가로사이즈 설정", type: "input"},
        
        //pager옵션
        pager: {selectOption: boolOptions, desc: "페이저 추가", type: "bool_true", upperMenu: "pager"},
        pagerType: {selectOption: pagerTypeOption, desc: "페이저 타입 설정", type: "pagerType", upperMenu: "pager"},
        pagerShortSeparator: {default: '/', desc: "페이저 구분자 설정", type: "input", upperMenu: "pager"},
        pagerSelector: {default: '', desc: "페이저 Selector", type: "input", upperMenu: "pager"},
        pagerCustom: {default: '', desc: "페이저 커스터마이징", type: "input", upperMenu: "pager"},
        buildPager: {default: '', desc: "페이저 ?", type: "input", upperMenu: "pager"}
    }
};
    
function showTable(){
     $.each(options.item, function(name, value) {
                buildTableRow(name, value);
        });
}
    
function buildTableRow(name, value){
    switch (value.type) {
        case 'mode':
            buildSelectBox(name, value, value.selectOption.HORIZONTAL, value.upperMenu);
            break;
        case 'input':
            buildInputBox(name, value, value.upperMenu);
            break;
        case 'bool_false':
            buildSelectBox(name, value, value.selectOption.FALSE, value.upperMenu);
            break;
        case 'bool_true':
            buildSelectBox(name, value, value.selectOption.TURE, value.upperMenu);
            break;
        case 'pagerType':
            buildSelectBox(name, value, value.selectOption.FULL, value.upperMenu);
            break;
        
        default:
            // code
    }
            
}

function buildSelectBox(name, value, defaultOption, upperMenu){
    var newTableRow = `
                <tr>
                    <td>Set ${name}</td>
                    <td>${value.desc}</td>
                    <td>
                        <select id="${name}">
                            <option value="${defaultOption}" default="${defaultOption}">${defaultOption}</option>
                        </select>
                    </td>
                </tr>
                `;
    $(`#${upperMenu}-option-table`).append(newTableRow);
    
    $.each(value.selectOption, function(index, value){
        if(value != defaultOption){
            var selectOption = `<option value="${value}">${value}</option>`;
            // alert(name + " " + selectOption);
            $(`#${name}`).append(selectOption);
        }
    });
}

function buildInputBox(name, value, upperMenu){
    var newTableRow = `
                <tr>
                    <td>Set ${name}</td>
                    <td>${value.desc}</td>
                    <td>
                        <input type="text" id="${name}" value="${value.default}">  
                    </td>
                </tr>
                `;
     $(`#${upperMenu}-option-table`).append(newTableRow);
}


$("#apply-button").click(function() {
    changeSlider();
});

function changeSlider(){
    $('.hideslider').show();
    $('.slider').bxSlider(setOptions());
    $('.setting-form').hide();
}

// 뷰에서 설정된 옵션 세팅
function setOptions() {
    setMode(); 
    setSpeed();
    setMargin();
    setStartSlide();
    setRandomStart();
    setLoop();
    setHideController();
    setCaptions();
    setTicker();
    setTickerHover();
    setAdaptiveHeight();
    setAdaptiveHeightSpeed();
    setVideo();
    setResponse();
    setUseCSS();
    setTouchEnabled();
    setSwipeThreshold();
    setOneToOneTouch();
    setPreventDefaultSwipeX();
    setPreventDefaultSwipeY();
    setSlideWidth();
    
    setPager();
    setPagerType();
    setPagerCustom();
    setPagerSelector();
    setPagerShortSeparator();
    setBuildPager();

    return options;
}

//  일반옵션

function setMode(){
    var value = $("#mode option:selected").val();
    options.mode = value;
}

function setSpeed(){
    var value = $("#speed");
    options.speed = parseInt(value.val());
}

function setMargin(){
    var value = $("#slideMargin");
    options.slideMargin = parseInt(value.val());
}

function setStartSlide(){
    var value = $("#startSlide");
    options.startSlide = parseInt(value.val())-1;
}

function setRandomStart(){
    var value = $("#randomStart option:selected").val();
    if(value == 'true')
        options.randomStart = value;
    else
        options.randomStart = "";
}

function setLoop(){
    var value = $("#infiniteLoop option:selected").val();
    if(value == 'true')
        options.infiniteLoop = value;
    else
        options.infiniteLoop = "";
}

function setHideController(){
    var value = $("#hideControlOnEnd option:selected").val();
     if(value == 'true')
        options.hideControlOnEnd = value;
    else
        options.hideControlOnEnd = "";
}

function setCaptions(){
    var value = $("#captions option:selected").val();
    if(value == 'true')
        options.captions = value;
    else
        options.captions = "";
}

function setTicker(){
    var value = $("#ticker option:selected").val();
    if(value == 'true')
        options.ticker = value;
    else
        options.ticker = "";
}

function setTickerHover(){
    var value = $("#tickerHover option:selected").val();
    if(value == 'true')
        options.tickerHover = value;
    else
        options.tickerHover = "";
}

function setAdaptiveHeight(){
    var value = $("#adaptiveHeight option:selected").val();
   if(value == 'true')
        options.adaptiveHeight = value;
    else
        options.adaptiveHeight = "";
}

function setAdaptiveHeightSpeed(){
    var value = $("#adaptiveHeightSpeed");
    options.adaptiveHeightSpeed = parseInt(value.val());
}

function setVideo(){
    var value = $("#video option:selected").val();
    if(value == 'true')
        options.video = value;
    else
        options.video = "";
}

function setResponse(){
    var value = $("#responsive option:selected").val();
    if(value == 'true')
        options.responsive = value;
    else
        options.responsive = "";
}

function setUseCSS(){
    var value = $("#useCSS option:selected").val();
    if(value == 'true')
        options.useCSS = value;
    else
        options.useCSS = "";
}

function setTouchEnabled(){
    var value = $("#touchEnabled option:selected").val();
    if(value == 'true')
        options.touchEnabled = value;
    else
        options.touchEnabled = "";
}

function setSwipeThreshold(){
    var value = $("#swipeThreshold");
    options.swipeThreshold = parseInt(value.val());
}

function setOneToOneTouch(){
    var value = $("#oneToOneTouch option:selected").val();
    if(value == 'true')
        options.oneToOneTouch = value;
    else
        options.oneToOneTouch = "";
}

function setPreventDefaultSwipeX(){
    var value = $("#preventDefaultSwipeX option:selected").val();
    if(value == 'true')
        options.preventDefaultSwipeX = value;
    else
        options.preventDefaultSwipeX = "";
}

function setPreventDefaultSwipeY(){
    var value = $("#preventDefaultSwipeY option:selected").val();
    if(value == 'true')
        options.preventDefaultSwipeY = value;
    else
        options.preventDefaultSwipeY = "";
}

function setSlideWidth(){
    var value = $("#slideWidth");
    options.slideWidth = parseInt(value.val());
}

// Pager 옵션

function setPager(){
    var value = $("#pager option:selected").val();
    if(value == 'true')
        options.pager = value;
    else
        options.pager = "";
}

function setPagerType(){
    var value = $("#pagerType option:selected").val();
    options.pagerType = value;
}

function setPagerShortSeparator(){
    var value = $("#pagerShortSeparator");
    options.pagerShortSeparator = value.val();
}

function setPagerSelector(){
    var value = $("#pagerSelector");
    options.pagerSelector = value.val();
}

function setPagerCustom(){
    var value = $("#pagerCustom");
    options.pagerCustom = value.val();
}

function setBuildPager(){
    var value = $("#buildPager");
    options.buildPager = value.val();
}


