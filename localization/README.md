# 繁體中文與英文版本

繁體中文為教材資料源；`en/` 是編譯後的完整英文網站。首頁、備課、課堂、學習單、群島、教學說明及五本線上書籍均有語言選單。

首次使用預設繁體中文。使用者切換後，以同一網站的 localStorage `social_skills_language` 記住 `zh-Hant` / `en`。保留原課程 id、投影片與書籍章節；星星、進度、自訂課程等原有資料鍵不變。私人瀏覽或清除網站資料後會恢復預設。英文使用瀏覽器英文朗讀，既有中文預錄語音不在英文版播放。

## 更新方式

1. 修改中文教材；若涉及教材資料，先依專案規範重編五本出版教材並驗證目錄。
2. `npm ci --prefix localization`（建置時需要 Node 和 Acorn，網站瀏覽不需要）。
3. `python3 localization/build_english.py --catalog` 更新翻譯清單。
4. 將新增文字的英文加入 `strings.en.json`；專有名詞與人工修訂放 `overrides.en.json`。`paragraphs.en.json` 保存依原段落對齊的譯文。缺少翻譯或模板變數不一致會停止建置，不能以中文靜默代替英文。
5. `python3 localization/build_english.py --install` 同步兩種語言的入口與英文輸出。英文頁請勿直接修改。
6. `node localization/verify_english.cjs` 及 `python3 localization/verify_build.py`。
7. 實際操作兩種語言、搜尋、切換課程、朗讀、遊戲與書籍。依本機使用手冊維護流程更新截圖及 PDF。使用手冊與編譯後中文 PDF 仍依原有排除規則保留在本機，不混入 GitHub 提交。

`?lang=en` 或 `?lang=zh-Hant` 可指定並記住語言。這也是無儲存權限時一般站內連結的備援方式。自訂課程保留使用者輸入的原文，不將私人學生資料傳送到翻譯服務。

## 翻譯來源與檢閱

本版以既有公開教材為來源，使用機器翻譯輔助，人工整理全部 101 堂標題、主要介面、冷靜通道與常用詞彙，並檢查段落和程式變數的對照。長篇教材並非英語專業人員逐字審訂；如需正式英語出版，仍應進行專業語言編校。網站執行時不連線到翻譯服務。

未採用的初稿曾使用 Helsinki-NLP OPUS-MT（CC BY 4.0）；交付的翻譯已以公開網站譯文及人工修訂替換。參考：<https://huggingface.co/Helsinki-NLP/opus-mt-zh-en>。建置不需要下載或執行模型。
