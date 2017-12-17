<?php
include_once('./_common.php');

// 테마에 coupon.php 있으면 include
if(defined('G5_THEME_MSHOP_PATH')) {
    $theme_coupon_file = G5_THEME_MSHOP_PATH.'/coupon.php';
    if(is_file($theme_coupon_file)) {
        include_once($theme_coupon_file);
        return;
        unset($theme_coupon_file);
    }
}

if ($is_guest)
    alert_close('회원만 조회하실 수 있습니다.');

$g5['title'] = $member['mb_nick'].' 님의 쿠폰 내역';
include_once(G5_PATH.'/head.sub.php');

$sql = " select cp_id, cp_subject, cp_method, cp_target, cp_start, cp_end, cp_type, cp_price
            from {$g5['g5_shop_coupon_table']}
            where mb_id IN ( '{$member['mb_id']}', '전체회원' )
              and cp_start <= '".G5_TIME_YMD."'
              and cp_end >= '".G5_TIME_YMD."'
            order by cp_no ";
$result = sql_query($sql);
?>

<!-- 쿠폰 내역 시작 { -->
<div id="scp_list" class="new_win">
    <h1 id="win_title"><i class="fa fa-newspaper-o" aria-hidden="true"></i> <?php echo $g5['title'] ?></h1>

    <div class="list_01">
        <ul>
        <?php
        $cp_count = 0;
        for($i=0; $row=sql_fetch_array($result); $i++) {
            if(is_used_coupon($member['mb_id'], $row['cp_id']))
                continue;

            if($row['cp_method'] == 1) {
                $sql = " select ca_name from {$g5['g5_shop_category_table']} where ca_id = '{$row['cp_target']}' ";
                $ca = sql_fetch($sql);
                $cp_target = $ca['ca_name'].'의 상품할인';
            } else if($row['cp_method'] == 2) {
                $cp_target = '결제금액 할인';
            } else if($row['cp_method'] == 3) {
                $cp_target = '배송비 할인';
            } else {
                $sql = " select it_name from {$g5['g5_shop_item_table']} where it_id = '{$row['cp_target']}' ";
                $it = sql_fetch($sql);
                $cp_target = $it['it_name'].' 상품할인';
            }

            if($row['cp_type'])
                $cp_price = '<strong>'.$row['cp_price'].'</strong> %';
            else
                $cp_price = '<strong>'.number_format($row['cp_price']).'</strong> 원';

            $cp_count++;
        ?>
        <li>
            <div class="li_pd">
                <div class="li_title"><?php echo $row['cp_subject']; ?></div>
                <span class="pd_price"><?php echo $cp_price; ?></span>
            </div>
            <div class="li_target">
                <?php echo $cp_target; ?>
                <span class="pd_date"><?php echo substr($row['cp_start'], 2, 8); ?> ~ <?php echo substr($row['cp_end'], 2, 8); ?></span>
            </div>
        </li>
        <?php
        }

        if(!$cp_count)
            echo '<li class="empty_list">사용할 수 있는 쿠폰이 없습니다.</li>';
        ?>
        </ul>
    </div>

    <div class="win_btn"><button type="button" onclick="window.close();" class="btn_close">창닫기</button></div>
</div>

<?php
include_once(G5_PATH.'/tail.sub.php');
?>