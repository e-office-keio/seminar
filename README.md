# 李光鎬研究会 公式ウェブサイト

慶應義塾大学 文学部 人間関係学系 李光鎬研究会（メディア ✕ 社会心理学）の公式ホームページです。

---

## 📁 ファイル構成

```text
website/
├── index.html     # メインページ（HTML本体）
├── style.css      # スタイルシート（慶應カラー：ネイビー＆クリムゾン）
├── script.js      # インタラクティブ機能（タブ、FAQアコーディオン、モバイルメニュー）
└── README.md      # 本ドキュメント（公開手順・編集ガイド）
```

---

## 🖥️ ローカル環境でのプレビュー方法

### 方法1：ファイルを直接ブラウザで開く
`website/index.html` をダブルクリック（またはGoogle Chrome等のブラウザにドラッグ＆ドロップ）するだけで、今すぐご確認いただけます。

### 方法2：ローカルサーバーで確認する（推奨）
ターミナルで `website` ディレクトリに移動し、以下のコマンドを実行します：

```bash
cd website
python3 -m http.server 8000
```
ブラウザで [http://localhost:8000](http://localhost:8000) を開きます。

---

## 🚀 GitHub Pages への公開手順（完全無料）

### ステップ1：GitHubで新しいリポジトリを作成
1. [GitHub](https://github.com/) にログインし、新規リポジトリを作成します（例：`lee-seminar-website` または `keio-ganho-semi`）。
2. Public（公開）を選択して作成します。

### ステップ2：ファイルをGitHubにプッシュ
ターミナルで `website` フォルダに移動してGit管理を開始します：

```bash
cd website
git init
git add .
git commit -m "Initial commit: Seminar homepage"
git branch -M main
git remote add origin https://github.com/<あなたのユーザー名>/<リポジトリ名>.git
git push -u origin main
```

### ステップ3：GitHub Pages を有効化
1. 作成したGitHubリポジトリのページを開きます。
2. 上部メニューの **「Settings」**（設定）をクリック。
3. 左メニューの **「Pages」** を選択。
4. **「Build and deployment」** の **「Source」** で **「Deploy from a branch」** を選択。
5. **「Branch」** を `main` / `/(root)` に設定し、**「Save」** をクリック。
6. 数分後、ページ上部に公開URL（例：`https://<ユーザー名>.github.io/<リポジトリ名>/`）が表示され、世界中に公開されます！

---

## ✏️ コンテンツの更新・カスタマイズ方法

- **オープンゼミの日程や場所の更新**:
  `index.html` の `<div class="open-seminar-dates">` 内の日時・教室のテキストを書き換えます。
- **卒論テーマの追加**:
  `index.html` の `<div class="tab-pane" id="tab-grad">` 内に `<div class="thesis-item">...</div>` を追加します。
- **写真・画像の追加**:
  ゼミの写真（合宿や教室風景）や先生の写真を掲載したい場合は、`website/images/` フォルダを作成して画像を配置し、`index.html` のアバター部分やヒーローセクションに `<img>` タグを挿入します。
