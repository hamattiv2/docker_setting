# VUEアプリケーションの作成
`vue create <app_name>`

# vuetifyのインストール
`vue add vuetify@0.5`

バージョン指定しないと最新バージョンがインストールされるが、エラーが発生したためバージョンは固定

# 開発環境の起動
`npm run serve`

# firebaseの導入～デプロイ
## インストール
`npm install -g firebase`

## デプロイ
`npm install -g firebase-tool`

`firebase init`

-> Hosting
-> What do you want to use as your public directory? -> dist
-> Configure as a single-page app (rewrite all urls to /index.html)? -> Y
-> Set up automatic builds and deploys with GitHub? -> N

`npm run build`

`firebase deploy`
