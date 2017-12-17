
// 옵션 초기화
var modeOption = { HORIZONTAL: "horizontal", VERTICAL: "vertical", FADE: "fade" };
var pagerTypeOption = { FULL: "full", SHORT: "short" };
var boolOptions = { TRUE: true, FALSE: false };
var options = {
  item:
    {
        // 일반옵션
        mode: {selectOption: modeOption, desc: "슬라이드 모드 설정", type: "mode",  upperMenu: 'general'},
        speed: {default: 500, desc: "슬라이더 속도 설정", type: "input",upperMenu: "general"},
        slideMargin: {default: 0, desc: "슬라이더 이미지 여백 설정", type: "input",upperMenu: "general"},
        startSlide: {default: 0, desc: "시작 슬라이드 설정", type: "input",upperMenu: "general"},
        randomStart: {selectOption: boolOptions, desc: "시작 슬라이드 랜덤 설정", type: "bool_false",upperMenu: "general"},
        // slideSelector: ?
        infiniteLoop: {selectOption: boolOptions, desc: "무한반복 설정", type: "bool_true",upperMenu: "general"},
        hideControlOnEnd: {selectOption: boolOptions, desc: "처음 / 끝 슬라이드 도착시 컨트롤러 숨기기(If 무한반복 = false)", type: "bool_false",upperMenu: "general"},
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

        //pager 옵션
        pager: {selectOption: boolOptions, desc: "페이저 추가", type: "bool_true", upperMenu: "pager"},
        pagerType: {selectOption: pagerTypeOption, desc: "페이저 타입 설정", type: "pagerType", upperMenu: "pager"},
        pagerShortSeparator: {default: '/', desc: "페이저 구분자 설정(If PagerType = Short)", type: "input", upperMenu: "pager"},
        pagerSelector: {default: '', desc: "호출기를 채우는데 사용된 요소", type: "input", upperMenu: "pager"},
        pagerCustom: {default: '', desc: "페이저로 사용될 선택자징", type: "input", upperMenu: "pager"},
        buildPager: {default: '', desc: "슬라이드에서 함수가 호출되고 호출기항목은 마크업으로 사용 -> 함수지정", type: "input", upperMenu: "pager"},

        //controls 옵션
        controls : {selectOption: boolOptions, desc: "컨트롤러 추가", type: "bool_true", upperMenu: "controls"},
        nextText : {default: "Next", desc: "Next 컨트롤에 사용할 수 있는 텍스트", type: "input", upperMenu: "controls"},
        prevText : {default: "Prev", desc: "Prev 컨트롤에 사용할 수 있는 텍스트", type: "input", upperMenu: "controls"},
        nextSelector : {default: "", desc: "Next 컨트롤에 사용할 수 있는 선택자", type: "input", upperMenu: "controls"},
        prevSelector : {default: "", desc: "Prev 컨트롤에 사용할 수 있는 선택자", type: "input", upperMenu: "controls"},
        autoControls : {selectOption: boolOptions, desc: "Start / Stop 컨트롤러 추가", type: "bool_false", upperMenu: "controls"},
        startText : {default: "Start", desc: "Start 컨트롤에 사용할 수 있는 텍스트", type: "input", upperMenu: "controls"},
        stopText : {default: "Stop", desc: "Stop 컨트롤에 사용할 수 있는 텍스트", type: "input", upperMenu: "controls"},
        autoControlsCombine : {selectOption: boolOptions, desc: "슬라이드 동작시 Stop 표시", type: "bool_false", upperMenu: "controls"},
        autoControlsSelector : {selectOption: boolOptions, desc: "자동 컨트롤을 채우는데 사용되는 선택자", type: "bool_true", upperMenu: "controls"},
        keyboardEnabled : {selectOption: boolOptions, desc: "키보트 컨트롤 설정", type: "bool_false", upperMenu: "controls"},
    }
};

// ----------------------------  테이블 생성
function showTable(){ $.each(options.item, function(name, value) { buildTableRow(name, value); } ); }
function buildTableRow(name, value){
    switch (value.type) {
        case 'mode': buildSelectBox(name, value, value.selectOption.HORIZONTAL, value.upperMenu); break;
        case 'input': buildInputBox(name, value, value.upperMenu); break;
        case 'bool_false': buildSelectBox(name, value, value.selectOption.FALSE, value.upperMenu); break;
        case 'bool_true': buildSelectBox(name, value, value.selectOption.TRUE, value.upperMenu); break;
        case 'pagerType': buildSelectBox(name, value, value.selectOption.FULL, value.upperMenu); break;
        default:
            // code
    }
}
//---------------------------------------

// SelectBox 구성
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

    $.each(value.selectOption, function(index, value){ if(value != defaultOption){ $(`#${name}`).append(`<option value="${value}">${value}</option>`); } } );
}

// InputBox 구성
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

// ---------------------------- 적용버튼 실행
$("#apply-button").click(function() {
    changeSlider();
});

function changeSlider(){
    $('.hideslider').show();
    $('.slider').bxSlider(setOptions());
    $('.setting-form').hide();
}
// ------------------------------------------

//  일반옵션
function setMode(){ options.mode = $("#mode option:selected").val(); }
function setSpeed(){ options.speed = parseInt($("#speed").val()); }
function setMargin(){ options.slideMargin = parseInt($("#slideMargin").val()); }
function setStartSlide(){ options.startSlide = parseInt($("#startSlide").val())-1; }
function setRandomStart(){  var value = $("#randomStart option:selected").val(); (value == 'true') ? options.randomStart = value : options.randomStart = ""; }
function setLoop(){ var value = $("#infiniteLoop option:selected").val(); (value == 'true') ? options.infiniteLoop = value : options.infiniteLoop = ""; }
function setHideController(){ var value = $("#hideControlOnEnd option:selected").val(); (value  == 'true') ? options.hideControlOnEnd = value : options.hideControlOnEnd = ""; }
function setCaptions(){ var value = $("#captions option:selected").val(); (value  == 'true') ? options.captions = value : options.captions = ""; }
function setTicker(){ var value = $("#ticker option:selected").val(); (value  == 'true') ? options.ticker = value : options.ticker = ""; }
function setTickerHover(){ var value = $("#tickerHover option:selected").val(); (value  == 'true') ? options.tickerHover = value : options.tickerHover = ""; }
function setAdaptiveHeight(){ var value = $("#adaptiveHeight option:selected").val(); (value  == 'true') ? options.adaptiveHeight = value : options.adaptiveHeight = ""; }
function setAdaptiveHeightSpeed(){ options.adaptiveHeightSpeed = parseInt($("#adaptiveHeightSpeed").val()); }
function setVideo(){ var value = $("#video option:selected").val(); (value  == 'true') ? options.video = value : options.video = ""; }
function setResponse(){ var value = $("#responsive option:selected").val(); (value  == 'true') ? options.responsive = value : options.responsive = ""; }
function setUseCSS(){ var value = $("#useCSS option:selected").val(); (value  == 'true') ? options.useCSS = value : options.useCSS = ""; }
function setTouchEnabled(){ var value = $("#touchEnabled option:selected").val(); (value  == 'true') ? options.touchEnabled = value : options.touchEnabled = ""; }
function setSwipeThreshold(){ options.swipeThreshold = parseInt($("#swipeThreshold").val()); }
function setOneToOneTouch(){ var value = $("#oneToOneTouch option:selected").val(); (value == 'true') ? options.oneToOneTouch = value : options.oneToOneTouch = ""; }
function setPreventDefaultSwipeX(){ var value = $("#preventDefaultSwipeX option:selected").val(); (value == 'true') ? options.preventDefaultSwipeX = value : options.preventDefaultSwipeX = ""; }
function setPreventDefaultSwipeY(){ var value = $("#preventDefaultSwipeY option:selected").val(); (value == 'true') ? options.preventDefaultSwipeY = value : options.preventDefaultSwipeY = ""; }
function setSlideWidth(){ options.slideWidth = parseInt($("#slideWidth").val()); }

// Pager 옵션
function setPager(){ var value = $("#pager option:selected").val(); (value == 'true') ? options.pager = value : options.pager = ""; }
function setPagerType(){ options.pagerType = $("#pagerType option:selected").val(); }
function setPagerShortSeparator(){ options.pagerShortSeparator = $("#pagerShortSeparator").val(); }
function setPagerSelector(){ options.pagerSelector = $("#pagerSelector").val(); }
function setPagerCustom(){ options.pagerCustom = $("#pagerCustom").val(); }
function setBuildPager(){ options.buildPager = $("#buildPager").val(); }

// Controls 옵션
function setControls() { var value = $("#controls option:selected").val(); (value == 'true') ? options.controls = value : options.controls = ""; }
function setNextText(){ options.nextText = $("#nextText").val(); }
function setPrevText(){ options.prevText = $("#prevText").val(); }
function setNextSelector(){ options.nextSelector = $("#nextSelector").val(); }
function setPrevSelector(){ options.prevSelector = $("#prevSelector").val(); }
function setAutoControls() { var value = $("#autoControls option:selected").val(); (value == 'true') ? options.autoControls = value : options.autoControls = ""; }
function setStartText(){ options.startText = $("#startText").val(); }
function setStopText(){ options.stopText = $("#stopText").val(); }
function setAutoControlsCombine() { var value = $("#autoControlsCombine option:selected").val(); (value == 'true') ? options.autoControlsCombine = value : options.autoControlsCombine = ""; }
function setAutoControlsSelector() { var value = $("#autoControlsSelector option:selected").val(); (value == 'true') ? options.autoControlsSelector = value : options.autoControlsSelector = ""; }
function setKeyboardEnabled() { var value = $("#keyboardEnabled option:selected").val(); (value == 'true') ? options.keyboardEnabled = value : options.keyboardEnabled = ""; }






























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

    setControls();
    setNextText();
    setPrevText();
    setNextSelector();
    setPrevSelector();
    setAutoControls();
    setStartText();
    setStopText();
    setAutoControlsCombine();
    setAutoControlsSelector();
    setKeyboardEnabled();

    return options;
}