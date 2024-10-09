<?php
require '/Applications/MAMP/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=UTF-8');

// プリフライトリクエストへの対応
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    http_response_code(200);
    exit;
}

// CORSヘッダーを設定
header("Access-Control-Allow-Origin: *");
$dotenv = Dotenv\Dotenv::createImmutable("/Applications/MAMP/");
$dotenv->load();


// POSTリクエストの処理
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $subject = "ホームページよりお問合せがありました"; // 管理者へのメールタイトル
    $to = 'yy.dec5@gmail.com'; // 管理者のメール送信先
    $url1 = 'http://localhost:3000'; //許可するURL
    $url2 = 'https://yuai-aoc.com'; //許可するURL

    $url = array($url1, $url2);
    $flg = 0;
    foreach ($url as $myuri) {
        if (strncmp($_SERVER['HTTP_REFERER'], $myuri, strlen($myuri)) == 0) {
            $flg = 1;
        }
    }

    if ($flg != 1) {
        header("HTTP/1.1 404 Not Found");
        exit;
    }

    $json = file_get_contents("php://input");
    $contents = json_decode($json, true);
    error_log(print_r($contents, true));

    if (isset($contents["name"])) { // 氏名があればメール送信処理（簡易的チェック）
        file_put_contents("contact.json", $json, FILE_APPEND);

        // 管理者へのメール送信処理
        $mail = new PHPMailer(true);
        try {
            // SMTP設定
            $mail->isSMTP();
            $mail->Host       = $_ENV['SMTP_HOST']; // SMTPサーバー
            $mail->SMTPAuth   = true;
            $mail->Username   = $_ENV['SMTP_USERNAME']; // SMTPユーザー名
            $mail->Password   = $_ENV['SMTP_PASSWORD']; // SMTPパスワード
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // 暗号化方式
            $mail->Port       = $_ENV['SMTP_PORT']; // ポート番号
            $mail->CharSet = 'UTF-8';

            // 送信者情報
            $mail->setFrom('yuai-aoc@yuai-aoc.com', 'ゆうあい鍼灸接骨院'); // 送信元

            // 受信者情報
            $mail->addAddress($to); // 送信先（管理者）

            // メール内容
            $mail->isHTML(false); // テキスト形式で送信
            $mail->Subject = $subject;
            $mail->Body    = "ホームページより以下のお問い合わせがありました" . "\n" . "\n" .
                             "お名前：" . $contents["name"] . "\n" .
                             "メールアドレス：" . $contents["email"] . "\n" . "\n" .
                             $contents["message"] . "\n";

            // 管理者へのメール送信
            $mail->send();
            $arr["status"] = "sendOk";

            // お問い合わせした人にも確認メールを送る
            $mail->clearAddresses(); // 送信先をクリア
            $mail->addAddress($contents["email"]); // お問い合わせした人のメールアドレス
            $mail->Subject = "お問い合わせありがとうございました"; // 送信者へのメールタイトル
            $mail->Body    = $contents["name"] . " 様" . "\n" .
                             "お問い合わせいただきありがとうございました。" . "\n" .
                             "以下の内容でお問い合わせを受け付けました。" . "\n" . "\n" .
                             "お名前：" . $contents["name"] . "\n" .
                             "メールアドレス：" . $contents["email"] . "\n" . "\n" .
                             $contents["message"] . "\n" .
                             "追ってご連絡いたします。";

            // 送信者への確認メール送信
            $mail->send();

        } catch (Exception $e) {
            error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
            $arr["status"] = "sendError";
        }
    } else {
        header("HTTP/1.1 404 Not Found");
        exit;
    }

    print json_encode($arr, JSON_PRETTY_PRINT);
} else {
    header("HTTP/1.1 400 Bad Request");
    header('Content-Type: text/html; charset=UTF-8');
    ?>
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>エラー</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f8d7da; color: #721c24; padding: 20px; }
            h1 { color: #721c24; }
        </style>
    </head>
    <body>
        <h1>不正なリクエスト</h1>
        <p>申し訳ありませんが、正しいリクエストメソッドが使用されていません。POSTリクエストのみが許可されています。</p>
    </body>
    </html>
    <?php
    exit;
}