# chroscheme

Chrome拡張を利用して、Schemeを実行することができます。

Schemeのインタープリターは[jsScheme](http://bluishcoder.co.nz/jsscheme/)のWebサイトで使用されているものを利用しています。

Blog : [Schemeを実行するChrome拡張「chroscheme」を作った - Pastalablog in はてな](http://pastak.hatenablog.com/entry/2013/10/26/222617)

# install

## From Chrome Web Store

[https://chrome.google.com/webstore/detail/chroscheme/phjmhmnadabpccnocbkiafljcjajbmjf](https://chrome.google.com/webstore/detail/chroscheme/phjmhmnadabpccnocbkiafljcjajbmjf)

## From Github

- `git clone git@github.com:pastak/chroscheme.git` or [ここからzipでダウンロード](https://github.com/pastak/chroscheme/archive/master.zip) して解凍。
- open [chrome://extensions/](chrome://extensions/) on Google Chrome
- `パッケージ化されてない拡張機能を読み込む`で`chroscheme`のディレクトリを選択。
- インストール完了！！！！！

# Usage

- ポップアップを開いて、一番上のテキストエリアにSchemeのプログラムを入力し、`Eval`を押すと、実行結果が`Result`に、実行過程が`Log`に出力されます。
- ブラウザ内で文字列を選択した状態でポップアップを開いた場合、選択文字列をSchemeのプログラムと解釈し、実行した結果を表示します。
    - [オンライン版SICP](http://mitpress.mit.edu/sicp/full-text/book/book.html)を読む時などに、画面をエディタに切り替えることなく、サンプルコードの実行・確認が可能です。

# License

this software is under [GPL License](http://www.gnu.org/licenses/gpl.html).
