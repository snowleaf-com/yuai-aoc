<?php
// Composerのオートローダーを読み込む
require '/Applications/MAMP/vendor/autoload.php';

// 許可するオリジンのリスト
$allowedOrigins = [
    'https://yuai-aoc.com',
    'http://localhost:3000' //許可するURL
];

// リクエストヘッダーからOriginを取得
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// Originが許可リストに含まれているか確認
if (!in_array($origin, $allowedOrigins)) {
    http_response_code(403); // Forbidden
    echo json_encode(['error' => 'Access denied']);
    exit;
}

// CORSヘッダーを設定
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");

// dotenvを使って.envファイルを読み込む
$dotenv = Dotenv\Dotenv::createImmutable("/Applications/MAMP/");
$dotenv->load();


// エラーレポートを表示（開発時のみ有効にすることを推奨）
// ini_set('display_errors', 0);
// error_reporting(E_ALL);

// 環境変数からアクセストークンとユーザーIDを取得
$apiKey = $_ENV['INSTAGRAM_ACCESS_TOKEN'];
$userId = $_ENV['INSTAGRAM_USER_ID'];

// Instagram Graph APIアクセストークンとユーザーID
$cards = 2; // 取得する投稿数
$apiUrl = "https://graph.facebook.com/v17.0/$userId?fields=name,media.limit($cards){caption,media_url,thumbnail_url,permalink,media_type,timestamp}&access_token=$apiKey";

// Instagram APIからデータを取得
$response = file_get_contents($apiUrl);

if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch data from Instagram']);
    exit;
}

$mediaData = json_decode($response, true);

// APIレスポンスにエラーが含まれているか確認
if (isset($mediaData['error'])) {
    http_response_code(500);
    echo json_encode(['error' => 'Instagram API error', 'details' => $mediaData['error']]);
    exit;
}

// 'media' フィールドが存在し、'data' が配列であることを確認
if (isset($mediaData['media']['data']) && is_array($mediaData['media']['data'])) {
    $formattedData = [
        'name' => $mediaData['name'] ?? 'Unknown', // ユーザー名
        'media' => array_map(function($item) {
            $formattedPostTime = (new DateTime($item['timestamp']))->format('Y/m/d');
            return [
                'media' => $item['media_url'],
                'permalink' => $item['permalink'],
                'postTime' => $formattedPostTime,
                'caption' => $item['caption'] ?? '',
            ];
        }, $mediaData['media']['data']),
    ];
} else {
    // エラーハンドリング
    http_response_code(500);
    echo json_encode(['error' => 'Invalid media data format', 'details' => $mediaData]);
    exit;
}

// 取得したデータをJSONで返す
header('Content-Type: application/json');
echo json_encode($formattedData);
?>
