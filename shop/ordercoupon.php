<?php
include_once('./_common.php');

if($is_guest)
    exit;

$price = (int)preg_replace('#[^0-9]#', '', $_POST['price']);

if($price <= 0)
    die('상품금액이 0원이므로 쿠폰을 사용할 수 없습니다.');

// 쿠폰정보
$sql = " select *
            from {$g5['g5_shop_coupon_table']}
            where mb_id IN ( '{$member['mb_id']}', '전체회원' )
              and cp_method = '2'
              and cp_start <= '".G5_TIME_YMD."'
              and cp_end >= '".G5_TIME_YMD."'
              and cp_minimum <= '$price' ";
$result = sql_query($sql);
$count = sql_num_rows($result);
?>

<!-- 쿠폰 선택 시작 { -->
<div id="od_coupon_frm" class="od_coupon">
    <h3>쿠폰 선택</h3>
    <?php if($count > 0) { ?>
    <div class="tbl_head02 tbl_wrap">
        <table>
        <caption>쿠폰 선택</caption>
        <thead>
        <tr>
            <th scope="col">쿠폰명</th>
            <th scope="col">할인금액</th>
            <th scope="col">적용</th>
        </tr>
        </thead>
        <tbody>
        <?php
        for($i=0; $row=sql_fetch_array($result); $i++) {
            // 사용한 쿠폰인지 체크
            if(is_used_coupon($member['mb_id'], $row['cp_id']))
                continue;

            $dc = 0;
            if($row['cp_type']) {
                $dc = floor(($price * ($row['cp_price'] / 100)) / $row['cp_trunc']) * $row['cp_trunc'];
            } else {
                $dc = $row['cp_price'];
            }

            if($row['cp_maximum'] && $dc > $row['cp_maximum'])
                $dc = $row['cp_maximum'];
        ?>
        <tr>
            <td>
                <input type="hidden" name="o_cp_id[]" value="<?php echo $row['cp_id']; ?>">
                <input type="hidden" name="o_cp_prc[]" value="<?php echo $dc; ?>">
                <input type="hidden" name="o_cp_subj[]" value="<?php echo $row['cp_subject']; ?>">
                <?php echo get_text($row['cp_subject']); ?>
            </td>
            <td class="td_numbig"><?php echo number_format($dc); ?></td>
            <td class="td_mngsmall"><button type="button" class="od_cp_apply btn_frmline">적용</button></td>
        </tr>
        <?php
        }
        ?>
        </tbody>
        </table>
    </div>
    <?php
    } else {
        echo '<p>사용할 수 있는 쿠폰이 없습니다.</p>';
    }
    ?>
    <div class="btn_confirm">
        <button type="button" id="od_coupon_close" class="btn_close"><i class="fa fa-times" aria-hidden="true"></i><span class="sound_only">닫기</span></button>
    </div>
</div>
<!-- } 쿠폰 선택 끝 -->