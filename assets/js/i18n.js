// ionflow.xyz - Internationalization (i18n) System
// Supports: Korean, English, Japanese, Chinese, Spanish, Arabic

(function() {
    'use strict';

    // Supported languages
    const SUPPORTED_LANGS = ['ko', 'en', 'ja', 'zh', 'es', 'ar'];
    const DEFAULT_LANG = 'ko';
    const STORAGE_KEY = 'ionflow_lang';

    // Translations
    const translations = {
        ko: {
            // Site
            siteName: 'ionflow',
            siteTitle: '무료 온라인 개발자 도구',
            siteDesc: '무료 온라인 도구 모음. QR코드 생성기, JSON Formatter, Base64 변환, UUID 생성, 비밀번호 생성 등.',

            // Hero
            heroTitle: '온라인 도구 모음.',
            heroSubtitle: '빠르고 안전한 무료 유틸리티.',

            // Sections
            sectionQR: 'QR코드',
            sectionDev: '개발자 도구',
            sectionGen: '생성기',

            // QR Tools
            qrGenerator: 'QR코드 생성기',
            qrGeneratorDesc: 'URL, 텍스트를 QR코드로 변환합니다. PNG, SVG 다운로드를 지원합니다.',
            wifiQR: 'WiFi QR코드',
            wifiQRDesc: 'WiFi 네트워크 정보를 QR코드로 만들어 간편하게 공유합니다.',
            vcardQR: '명함 QR코드',
            vcardQRDesc: '연락처 정보를 vCard QR코드로 만들어 명함에 활용합니다.',

            // Dev Tools
            jsonFormatter: 'JSON Formatter',
            jsonFormatterDesc: 'JSON을 보기 좋게 정리하고 문법 오류를 검사합니다.',
            base64: 'Base64 변환',
            base64Desc: '텍스트와 이미지를 Base64로 인코딩하거나 디코딩합니다.',
            urlEncoder: 'URL 인코더',
            urlEncoderDesc: 'URL 특수문자를 인코딩하거나 디코딩합니다.',
            hashGenerator: 'Hash 생성기',
            hashGeneratorDesc: 'MD5, SHA-1, SHA-256, SHA-512 해시를 생성합니다.',
            timestamp: 'Timestamp 변환',
            timestampDesc: 'Unix Timestamp와 날짜를 서로 변환합니다.',
            colorConverter: '색상 변환기',
            colorConverterDesc: 'HEX, RGB, HSL 색상 코드를 변환합니다.',

            // Generators
            uuidGenerator: 'UUID 생성기',
            uuidGeneratorDesc: 'UUID v4를 생성합니다. 대량 생성과 다양한 포맷을 지원합니다.',
            passwordGenerator: '비밀번호 생성기',
            passwordGeneratorDesc: '강력한 랜덤 비밀번호를 생성합니다. 길이와 문자 종류를 선택할 수 있습니다.',
            byteCounter: '글자수/바이트 계산기',
            byteCounterDesc: '텍스트의 글자수와 바이트 수를 계산합니다. 다양한 인코딩 지원.',

            // Byte Counter Page
            byteCounterTitle: '글자수/바이트 계산기 - ionflow.xyz',
            byteCounterHeading: '글자수/바이트 계산기',
            byteCounterSubheading: '글자수와 바이트 수를 실시간으로 계산합니다',
            charsetLabel: '인코딩:',
            byteInputPlaceholder: '텍스트를 입력하세요...',
            clearBtn: '지우기',
            byteLabel: '바이트 (Bytes)',
            charLabel: '글자수',
            charNoSpaceLabel: '글자수 (공백제외)',
            wordLabel: '단어수',
            detailTitle: '상세 정보',
            lineCount: '줄 수',
            paragraphCount: '문단 수',
            koreanCount: '한글',
            englishCount: '영문',
            numberCount: '숫자',
            spaceCount: '공백',
            encodingInfoTitle: '인코딩별 바이트 크기',
            encodingInfoDesc: '같은 문자라도 인코딩 방식에 따라 바이트 크기가 다릅니다. 한글의 경우 UTF-8에서는 3바이트, EUC-KR에서는 2바이트를 사용합니다.',
            encodingCol: '인코딩',
            asciiCol: 'ASCII/영문',
            koreanCol: '한글',
            noteCol: '특징',
            utf8Note: '웹 표준, 가장 널리 사용',
            euckrNote: '한국어 레거시 시스템',
            utf16Note: 'Windows 내부, Java String',
            utf32Note: '고정 길이, 처리 용이',
            asciiNote: '영문/숫자만 지원',

            // QR Code Page
            qrPageTitle: 'QR코드 생성기 - ionflow.xyz',
            qrPageDesc: '무료 온라인 QR코드 생성기. URL, 텍스트를 QR코드로 변환하세요.',
            qrHeading: 'QR코드 생성기',
            qrSubheading: 'URL, 텍스트를 QR코드로 변환합니다.',
            qrInputTitle: '내용 입력',
            qrTextBtn: '텍스트',
            qrInputPlaceholder: 'URL 또는 텍스트를 입력하세요',
            qrColor: 'QR 색상',
            qrBgColor: '배경 색상',
            qrSize: '크기',
            qrGenerateBtn: 'QR코드 생성',
            qrPreviewTitle: '미리보기',
            qrPlaceholder: 'URL 또는 텍스트를 입력하고<br>생성 버튼을 클릭하세요',
            qrDownloadPNG: 'PNG 다운로드',
            qrDownloadSVG: 'SVG 다운로드',

            // JSON Page
            jsonPageTitle: 'JSON Formatter - ionflow.xyz',
            jsonPageDesc: 'JSON을 보기 좋게 포맷팅하고 문법 오류를 검사합니다.',
            jsonHeading: 'JSON Formatter',
            jsonSubheading: 'JSON을 포맷팅하고 검증합니다',
            jsonFormatBtn: '포맷팅',
            jsonMinifyBtn: '압축',
            jsonCopyBtn: '복사',
            jsonClearBtn: '지우기',

            // Base64 Page
            base64PageTitle: 'Base64 인코더/디코더 - ionflow.xyz',
            base64PageDesc: '온라인 Base64 인코딩/디코딩 도구. 텍스트, 이미지를 Base64로 변환하세요.',
            base64Heading: 'Base64 Encoder',
            base64Subheading: '텍스트를 Base64로 인코딩하거나 디코딩하세요',
            base64TextTab: '텍스트',
            base64ImageTab: '이미지',
            encodeBtn: '인코딩 →',
            decodeBtn: '← 디코딩',

            // URL Page
            urlPageTitle: 'URL 인코더/디코더 - ionflow.xyz',
            urlPageDesc: 'URL 인코딩/디코딩 도구. URL에서 특수문자를 안전하게 인코딩하세요.',
            urlHeading: 'URL Encoder',
            urlSubheading: 'URL의 특수문자를 인코딩하거나 디코딩하세요',

            // Hash Page
            hashPageTitle: 'Hash 생성기 - ionflow.xyz',
            hashPageDesc: '온라인 Hash 생성기. MD5, SHA-1, SHA-256, SHA-512 해시를 즉시 생성하세요.',
            hashHeading: 'Hash Generator',
            hashSubheading: 'MD5, SHA-1, SHA-256, SHA-512 해시를 생성하세요',

            // Color Page
            colorPageTitle: '색상 변환기 - ionflow.xyz',
            colorPageDesc: 'HEX, RGB, HSL 색상 코드를 서로 변환하세요.',
            colorHeading: 'Color Converter',
            colorSubheading: 'HEX, RGB, HSL 색상 코드를 변환하세요',

            // Timestamp Page
            timestampPageTitle: 'Unix Timestamp 변환기 - ionflow.xyz',
            timestampPageDesc: 'Unix Timestamp와 날짜/시간을 서로 변환합니다.',
            timestampHeading: 'Timestamp Converter',
            timestampSubheading: 'Unix Timestamp와 날짜를 변환합니다',

            // UUID Page
            uuidPageTitle: 'UUID 생성기 - ionflow.xyz',
            uuidPageDesc: 'UUID v4를 생성합니다. 대량 생성과 다양한 포맷을 지원합니다.',
            uuidHeading: 'UUID Generator',
            uuidSubheading: 'UUID v4를 생성합니다',

            // Password Page
            passwordPageTitle: '비밀번호 생성기 - ionflow.xyz',
            passwordPageDesc: '강력한 랜덤 비밀번호를 생성합니다.',
            passwordHeading: 'Password Generator',
            passwordSubheading: '안전한 비밀번호를 생성합니다',

            // WiFi Page
            wifiPageTitle: 'WiFi QR코드 생성기 - ionflow.xyz',
            wifiPageDesc: 'WiFi 네트워크 정보를 QR코드로 만들어 손쉽게 공유하세요.',
            wifiHeading: 'WiFi QR코드',
            wifiSubheading: 'WiFi 정보를 QR코드로 만들어 간편하게 공유하세요',

            // vCard Page
            vcardPageTitle: '명함 QR코드 생성기 - ionflow.xyz',
            vcardPageDesc: '명함에 넣을 QR코드를 무료로 생성하세요. 연락처를 vCard 형식으로 변환합니다.',
            vcardHeading: '명함 QR코드',
            vcardSubheading: '연락처 정보를 QR코드로 만들어 명함에 활용하세요',

            // Features
            featureNoServer: '서버 전송 없음',
            featureNoServerDesc: '모든 처리는 브라우저에서만 이루어집니다. 데이터가 외부로 전송되지 않습니다.',
            featureFast: '빠른 처리',
            featureFastDesc: '서버 요청 없이 즉시 처리됩니다. 대용량 데이터도 빠르게 처리합니다.',
            featureFree: '무료 사용',
            featureFreeDesc: '회원가입 없이 모든 기능을 무료로 사용할 수 있습니다.',

            // Nav
            navQR: 'QR 생성기',
            navJSON: 'JSON',
            navBase64: 'Base64',
            navHash: 'Hash',

            // Footer
            footerAbout: '소개',
            footerContact: '문의',
            footerPrivacy: '개인정보처리방침',
            footerTerms: '이용약관',

            // Common
            popular: '인기',
            ad: '광고',
            language: '언어'
        },

        en: {
            siteName: 'ionflow',
            siteTitle: 'Free Online Developer Tools',
            siteDesc: 'Free online tools collection. QR Code Generator, JSON Formatter, Base64 Converter, UUID Generator, Password Generator, etc.',

            heroTitle: 'Online Tools.',
            heroSubtitle: 'Fast and secure free utilities.',

            sectionQR: 'QR Code',
            sectionDev: 'Developer Tools',
            sectionGen: 'Generators',

            qrGenerator: 'QR Code Generator',
            qrGeneratorDesc: 'Convert URL or text to QR code. Supports PNG and SVG download.',
            wifiQR: 'WiFi QR Code',
            wifiQRDesc: 'Create QR code for WiFi network to share easily.',
            vcardQR: 'vCard QR Code',
            vcardQRDesc: 'Create vCard QR code for contact information.',

            jsonFormatter: 'JSON Formatter',
            jsonFormatterDesc: 'Format JSON nicely and validate syntax errors.',
            base64: 'Base64 Converter',
            base64Desc: 'Encode or decode text and images to Base64.',
            urlEncoder: 'URL Encoder',
            urlEncoderDesc: 'Encode or decode URL special characters.',
            hashGenerator: 'Hash Generator',
            hashGeneratorDesc: 'Generate MD5, SHA-1, SHA-256, SHA-512 hashes.',
            timestamp: 'Timestamp Converter',
            timestampDesc: 'Convert between Unix Timestamp and date.',
            colorConverter: 'Color Converter',
            colorConverterDesc: 'Convert HEX, RGB, HSL color codes.',

            uuidGenerator: 'UUID Generator',
            uuidGeneratorDesc: 'Generate UUID v4. Supports bulk generation and various formats.',
            passwordGenerator: 'Password Generator',
            passwordGeneratorDesc: 'Generate strong random passwords. Choose length and character types.',
            byteCounter: 'Byte Counter',
            byteCounterDesc: 'Count characters and bytes in text. Supports various encodings.',

            // Byte Counter Page
            byteCounterTitle: 'Byte Counter - ionflow.xyz',
            byteCounterHeading: 'Byte Counter',
            byteCounterSubheading: 'Count characters and bytes in real-time',
            charsetLabel: 'Encoding:',
            byteInputPlaceholder: 'Enter text...',
            clearBtn: 'Clear',
            byteLabel: 'Bytes',
            charLabel: 'Characters',
            charNoSpaceLabel: 'Characters (no spaces)',
            wordLabel: 'Words',
            detailTitle: 'Details',
            lineCount: 'Lines',
            paragraphCount: 'Paragraphs',
            koreanCount: 'Korean',
            englishCount: 'English',
            numberCount: 'Numbers',
            spaceCount: 'Spaces',
            encodingInfoTitle: 'Byte Size by Encoding',
            encodingInfoDesc: 'The same character can have different byte sizes depending on the encoding. Korean characters use 3 bytes in UTF-8, but only 2 bytes in EUC-KR.',
            encodingCol: 'Encoding',
            asciiCol: 'ASCII/English',
            koreanCol: 'Korean',
            noteCol: 'Notes',
            utf8Note: 'Web standard, most widely used',
            euckrNote: 'Korean legacy systems',
            utf16Note: 'Windows internal, Java String',
            utf32Note: 'Fixed length, easy processing',
            asciiNote: 'English/numbers only',

            // QR Code Page
            qrPageTitle: 'QR Code Generator - ionflow.xyz',
            qrPageDesc: 'Free online QR code generator. Convert URL or text to QR code.',
            qrHeading: 'QR Code Generator',
            qrSubheading: 'Convert URL or text to QR code.',
            qrInputTitle: 'Input Content',
            qrTextBtn: 'Text',
            qrInputPlaceholder: 'Enter URL or text',
            qrColor: 'QR Color',
            qrBgColor: 'Background Color',
            qrSize: 'Size',
            qrGenerateBtn: 'Generate QR Code',
            qrPreviewTitle: 'Preview',
            qrPlaceholder: 'Enter URL or text and<br>click generate button',
            qrDownloadPNG: 'Download PNG',
            qrDownloadSVG: 'Download SVG',

            // JSON Page
            jsonPageTitle: 'JSON Formatter - ionflow.xyz',
            jsonPageDesc: 'Format JSON nicely and validate syntax errors.',
            jsonHeading: 'JSON Formatter',
            jsonSubheading: 'Format and validate JSON',
            jsonFormatBtn: 'Format',
            jsonMinifyBtn: 'Minify',
            jsonCopyBtn: 'Copy',
            jsonClearBtn: 'Clear',

            // Base64 Page
            base64PageTitle: 'Base64 Encoder/Decoder - ionflow.xyz',
            base64PageDesc: 'Online Base64 encoding/decoding tool. Convert text and images to Base64.',
            base64Heading: 'Base64 Encoder',
            base64Subheading: 'Encode or decode text to Base64',
            base64TextTab: 'Text',
            base64ImageTab: 'Image',
            encodeBtn: 'Encode →',
            decodeBtn: '← Decode',

            // URL Page
            urlPageTitle: 'URL Encoder/Decoder - ionflow.xyz',
            urlPageDesc: 'URL encoding/decoding tool. Safely encode special characters in URLs.',
            urlHeading: 'URL Encoder',
            urlSubheading: 'Encode or decode URL special characters',

            // Hash Page
            hashPageTitle: 'Hash Generator - ionflow.xyz',
            hashPageDesc: 'Online Hash generator. Generate MD5, SHA-1, SHA-256, SHA-512 hashes instantly.',
            hashHeading: 'Hash Generator',
            hashSubheading: 'Generate MD5, SHA-1, SHA-256, SHA-512 hashes',

            // Color Page
            colorPageTitle: 'Color Converter - ionflow.xyz',
            colorPageDesc: 'Convert between HEX, RGB, HSL color codes.',
            colorHeading: 'Color Converter',
            colorSubheading: 'Convert HEX, RGB, HSL color codes',

            // Timestamp Page
            timestampPageTitle: 'Unix Timestamp Converter - ionflow.xyz',
            timestampPageDesc: 'Convert between Unix Timestamp and date/time.',
            timestampHeading: 'Timestamp Converter',
            timestampSubheading: 'Convert Unix Timestamp and date',

            // UUID Page
            uuidPageTitle: 'UUID Generator - ionflow.xyz',
            uuidPageDesc: 'Generate UUID v4. Supports bulk generation and various formats.',
            uuidHeading: 'UUID Generator',
            uuidSubheading: 'Generate UUID v4',

            // Password Page
            passwordPageTitle: 'Password Generator - ionflow.xyz',
            passwordPageDesc: 'Generate strong random passwords.',
            passwordHeading: 'Password Generator',
            passwordSubheading: 'Generate secure passwords',

            // WiFi Page
            wifiPageTitle: 'WiFi QR Code Generator - ionflow.xyz',
            wifiPageDesc: 'Create QR code for WiFi network to share easily.',
            wifiHeading: 'WiFi QR Code',
            wifiSubheading: 'Share WiFi easily with QR code',

            // vCard Page
            vcardPageTitle: 'vCard QR Code Generator - ionflow.xyz',
            vcardPageDesc: 'Create QR code for business card. Convert contact info to vCard format.',
            vcardHeading: 'vCard QR Code',
            vcardSubheading: 'Create QR code for contact information',

            featureNoServer: 'No Server Upload',
            featureNoServerDesc: 'All processing happens in your browser. No data is sent externally.',
            featureFast: 'Fast Processing',
            featureFastDesc: 'Instant processing without server requests. Handles large data quickly.',
            featureFree: 'Free to Use',
            featureFreeDesc: 'Use all features for free without registration.',

            navQR: 'QR Generator',
            navJSON: 'JSON',
            navBase64: 'Base64',
            navHash: 'Hash',

            footerAbout: 'About',
            footerContact: 'Contact',
            footerPrivacy: 'Privacy Policy',
            footerTerms: 'Terms of Service',

            popular: 'Popular',
            ad: 'Advertisement',
            language: 'Language'
        },

        ja: {
            siteName: 'ionflow',
            siteTitle: '無料オンライン開発者ツール',
            siteDesc: '無料オンラインツール集。QRコード生成、JSON Formatter、Base64変換、UUID生成、パスワード生成など。',

            heroTitle: 'オンラインツール。',
            heroSubtitle: '高速で安全な無料ユーティリティ。',

            sectionQR: 'QRコード',
            sectionDev: '開発者ツール',
            sectionGen: 'ジェネレーター',

            qrGenerator: 'QRコード生成',
            qrGeneratorDesc: 'URLやテキストをQRコードに変換します。PNG、SVGダウンロード対応。',
            wifiQR: 'WiFi QRコード',
            wifiQRDesc: 'WiFiネットワーク情報をQRコードで簡単に共有できます。',
            vcardQR: '名刺QRコード',
            vcardQRDesc: '連絡先情報をvCard QRコードにして名刺に活用できます。',

            jsonFormatter: 'JSON Formatter',
            jsonFormatterDesc: 'JSONを整形し、構文エラーをチェックします。',
            base64: 'Base64変換',
            base64Desc: 'テキストや画像をBase64でエンコード・デコードします。',
            urlEncoder: 'URLエンコーダー',
            urlEncoderDesc: 'URL特殊文字をエンコード・デコードします。',
            hashGenerator: 'ハッシュ生成',
            hashGeneratorDesc: 'MD5、SHA-1、SHA-256、SHA-512ハッシュを生成します。',
            timestamp: 'タイムスタンプ変換',
            timestampDesc: 'Unixタイムスタンプと日付を相互変換します。',
            colorConverter: '色変換',
            colorConverterDesc: 'HEX、RGB、HSLカラーコードを変換します。',

            uuidGenerator: 'UUID生成',
            uuidGeneratorDesc: 'UUID v4を生成します。一括生成と様々なフォーマットに対応。',
            passwordGenerator: 'パスワード生成',
            passwordGeneratorDesc: '強力なランダムパスワードを生成します。長さと文字種を選択可能。',
            byteCounter: '文字数/バイト計算',
            byteCounterDesc: 'テキストの文字数とバイト数を計算します。様々なエンコーディング対応。',

            // Byte Counter Page
            byteCounterTitle: '文字数/バイト計算 - ionflow.xyz',
            byteCounterHeading: '文字数/バイト計算',
            byteCounterSubheading: '文字数とバイト数をリアルタイムで計算します',
            charsetLabel: 'エンコーディング:',
            byteInputPlaceholder: 'テキストを入力してください...',
            clearBtn: 'クリア',
            byteLabel: 'バイト (Bytes)',
            charLabel: '文字数',
            charNoSpaceLabel: '文字数 (空白除く)',
            wordLabel: '単語数',
            detailTitle: '詳細情報',
            lineCount: '行数',
            paragraphCount: '段落数',
            koreanCount: '韓国語',
            englishCount: '英語',
            numberCount: '数字',
            spaceCount: '空白',
            encodingInfoTitle: 'エンコーディング別バイトサイズ',
            encodingInfoDesc: '同じ文字でもエンコーディング方式によってバイトサイズが異なります。韓国語の場合、UTF-8では3バイト、EUC-KRでは2バイトを使用します。',
            encodingCol: 'エンコーディング',
            asciiCol: 'ASCII/英語',
            koreanCol: '韓国語',
            noteCol: '特徴',
            utf8Note: 'Web標準、最も広く使用',
            euckrNote: '韓国語レガシーシステム',
            utf16Note: 'Windows内部、Java String',
            utf32Note: '固定長、処理が容易',
            asciiNote: '英数字のみ対応',

            // QR Code Page
            qrPageTitle: 'QRコード生成 - ionflow.xyz',
            qrPageDesc: '無料オンラインQRコード生成器。URLやテキストをQRコードに変換。',
            qrHeading: 'QRコード生成',
            qrSubheading: 'URLやテキストをQRコードに変換します。',
            qrInputTitle: '内容入力',
            qrTextBtn: 'テキスト',
            qrInputPlaceholder: 'URLまたはテキストを入力',
            qrColor: 'QR色',
            qrBgColor: '背景色',
            qrSize: 'サイズ',
            qrGenerateBtn: 'QRコード生成',
            qrPreviewTitle: 'プレビュー',
            qrPlaceholder: 'URLまたはテキストを入力し<br>生成ボタンをクリック',
            qrDownloadPNG: 'PNGダウンロード',
            qrDownloadSVG: 'SVGダウンロード',

            // JSON Page
            jsonPageTitle: 'JSON Formatter - ionflow.xyz',
            jsonPageDesc: 'JSONを整形し、構文エラーをチェックします。',
            jsonHeading: 'JSON Formatter',
            jsonSubheading: 'JSONを整形・検証',
            jsonFormatBtn: 'フォーマット',
            jsonMinifyBtn: '圧縮',
            jsonCopyBtn: 'コピー',
            jsonClearBtn: 'クリア',

            // Base64 Page
            base64PageTitle: 'Base64エンコーダー/デコーダー - ionflow.xyz',
            base64PageDesc: 'オンラインBase64エンコード/デコードツール。テキストや画像をBase64に変換。',
            base64Heading: 'Base64 Encoder',
            base64Subheading: 'テキストをBase64でエンコード・デコード',
            base64TextTab: 'テキスト',
            base64ImageTab: '画像',
            encodeBtn: 'エンコード →',
            decodeBtn: '← デコード',

            // URL Page
            urlPageTitle: 'URLエンコーダー/デコーダー - ionflow.xyz',
            urlPageDesc: 'URLエンコード/デコードツール。URL特殊文字を安全にエンコード。',
            urlHeading: 'URLエンコーダー',
            urlSubheading: 'URL特殊文字をエンコード・デコード',

            // Hash Page
            hashPageTitle: 'ハッシュ生成 - ionflow.xyz',
            hashPageDesc: 'オンラインハッシュ生成器。MD5、SHA-1、SHA-256、SHA-512ハッシュを即座に生成。',
            hashHeading: 'ハッシュ生成',
            hashSubheading: 'MD5、SHA-1、SHA-256、SHA-512ハッシュを生成',

            // Color Page
            colorPageTitle: '色変換 - ionflow.xyz',
            colorPageDesc: 'HEX、RGB、HSLカラーコードを相互変換。',
            colorHeading: '色変換',
            colorSubheading: 'HEX、RGB、HSLカラーコードを変換',

            // Timestamp Page
            timestampPageTitle: 'Unixタイムスタンプ変換 - ionflow.xyz',
            timestampPageDesc: 'Unixタイムスタンプと日付/時刻を相互変換。',
            timestampHeading: 'タイムスタンプ変換',
            timestampSubheading: 'Unixタイムスタンプと日付を変換',

            // UUID Page
            uuidPageTitle: 'UUID生成 - ionflow.xyz',
            uuidPageDesc: 'UUID v4を生成。一括生成と様々なフォーマットに対応。',
            uuidHeading: 'UUID生成',
            uuidSubheading: 'UUID v4を生成',

            // Password Page
            passwordPageTitle: 'パスワード生成 - ionflow.xyz',
            passwordPageDesc: '強力なランダムパスワードを生成。',
            passwordHeading: 'パスワード生成',
            passwordSubheading: '安全なパスワードを生成',

            // WiFi Page
            wifiPageTitle: 'WiFi QRコード生成 - ionflow.xyz',
            wifiPageDesc: 'WiFiネットワーク情報をQRコードで簡単に共有。',
            wifiHeading: 'WiFi QRコード',
            wifiSubheading: 'WiFi情報をQRコードで簡単に共有',

            // vCard Page
            vcardPageTitle: '名刺QRコード生成 - ionflow.xyz',
            vcardPageDesc: '名刺用QRコードを無料で生成。連絡先をvCard形式に変換。',
            vcardHeading: '名刺QRコード',
            vcardSubheading: '連絡先情報をQRコードにして名刺に活用',

            featureNoServer: 'サーバー送信なし',
            featureNoServerDesc: 'すべての処理はブラウザ内で行われます。データは外部に送信されません。',
            featureFast: '高速処理',
            featureFastDesc: 'サーバーリクエストなしで即座に処理。大容量データも高速に処理します。',
            featureFree: '無料利用',
            featureFreeDesc: '会員登録なしですべての機能を無料で利用できます。',

            navQR: 'QR生成',
            navJSON: 'JSON',
            navBase64: 'Base64',
            navHash: 'Hash',

            footerAbout: '紹介',
            footerContact: 'お問い合わせ',
            footerPrivacy: 'プライバシーポリシー',
            footerTerms: '利用規約',

            popular: '人気',
            ad: '広告',
            language: '言語'
        },

        zh: {
            siteName: 'ionflow',
            siteTitle: '免费在线开发者工具',
            siteDesc: '免费在线工具集合。QR码生成器、JSON格式化、Base64转换、UUID生成、密码生成等。',

            heroTitle: '在线工具集。',
            heroSubtitle: '快速安全的免费工具。',

            sectionQR: 'QR码',
            sectionDev: '开发者工具',
            sectionGen: '生成器',

            qrGenerator: 'QR码生成器',
            qrGeneratorDesc: '将URL或文本转换为QR码。支持PNG、SVG下载。',
            wifiQR: 'WiFi QR码',
            wifiQRDesc: '将WiFi网络信息生成QR码，方便分享。',
            vcardQR: '名片QR码',
            vcardQRDesc: '将联系人信息生成vCard QR码，用于名片。',

            jsonFormatter: 'JSON格式化',
            jsonFormatterDesc: '美化JSON并检查语法错误。',
            base64: 'Base64转换',
            base64Desc: '将文本和图像进行Base64编码或解码。',
            urlEncoder: 'URL编码器',
            urlEncoderDesc: '对URL特殊字符进行编码或解码。',
            hashGenerator: '哈希生成器',
            hashGeneratorDesc: '生成MD5、SHA-1、SHA-256、SHA-512哈希值。',
            timestamp: '时间戳转换',
            timestampDesc: 'Unix时间戳与日期互相转换。',
            colorConverter: '颜色转换器',
            colorConverterDesc: '转换HEX、RGB、HSL颜色代码。',

            uuidGenerator: 'UUID生成器',
            uuidGeneratorDesc: '生成UUID v4。支持批量生成和多种格式。',
            passwordGenerator: '密码生成器',
            passwordGeneratorDesc: '生成强随机密码。可选择长度和字符类型。',
            byteCounter: '字符/字节计算器',
            byteCounterDesc: '计算文本的字符数和字节数。支持多种编码。',

            // Byte Counter Page
            byteCounterTitle: '字符/字节计算器 - ionflow.xyz',
            byteCounterHeading: '字符/字节计算器',
            byteCounterSubheading: '实时计算字符数和字节数',
            charsetLabel: '编码:',
            byteInputPlaceholder: '请输入文本...',
            clearBtn: '清除',
            byteLabel: '字节 (Bytes)',
            charLabel: '字符数',
            charNoSpaceLabel: '字符数 (不含空格)',
            wordLabel: '单词数',
            detailTitle: '详细信息',
            lineCount: '行数',
            paragraphCount: '段落数',
            koreanCount: '韩文',
            englishCount: '英文',
            numberCount: '数字',
            spaceCount: '空格',
            encodingInfoTitle: '不同编码的字节大小',
            encodingInfoDesc: '相同字符在不同编码方式下字节大小不同。韩文在UTF-8中为3字节，在EUC-KR中为2字节。',
            encodingCol: '编码',
            asciiCol: 'ASCII/英文',
            koreanCol: '韩文',
            noteCol: '特点',
            utf8Note: 'Web标准，使用最广泛',
            euckrNote: '韩语遗留系统',
            utf16Note: 'Windows内部，Java String',
            utf32Note: '固定长度，易于处理',
            asciiNote: '仅支持英文/数字',

            // QR Code Page
            qrPageTitle: 'QR码生成器 - ionflow.xyz',
            qrPageDesc: '免费在线QR码生成器。将URL或文本转换为QR码。',
            qrHeading: 'QR码生成器',
            qrSubheading: '将URL或文本转换为QR码。',
            qrInputTitle: '输入内容',
            qrTextBtn: '文本',
            qrInputPlaceholder: '输入URL或文本',
            qrColor: 'QR颜色',
            qrBgColor: '背景颜色',
            qrSize: '大小',
            qrGenerateBtn: '生成QR码',
            qrPreviewTitle: '预览',
            qrPlaceholder: '输入URL或文本并<br>点击生成按钮',
            qrDownloadPNG: '下载PNG',
            qrDownloadSVG: '下载SVG',

            // JSON Page
            jsonPageTitle: 'JSON格式化 - ionflow.xyz',
            jsonPageDesc: '美化JSON并检查语法错误。',
            jsonHeading: 'JSON格式化',
            jsonSubheading: '格式化和验证JSON',
            jsonFormatBtn: '格式化',
            jsonMinifyBtn: '压缩',
            jsonCopyBtn: '复制',
            jsonClearBtn: '清除',

            // Base64 Page
            base64PageTitle: 'Base64编码器/解码器 - ionflow.xyz',
            base64PageDesc: '在线Base64编码/解码工具。将文本和图像转换为Base64。',
            base64Heading: 'Base64编码器',
            base64Subheading: '将文本编码或解码为Base64',
            base64TextTab: '文本',
            base64ImageTab: '图像',
            encodeBtn: '编码 →',
            decodeBtn: '← 解码',

            // URL Page
            urlPageTitle: 'URL编码器/解码器 - ionflow.xyz',
            urlPageDesc: 'URL编码/解码工具。安全编码URL中的特殊字符。',
            urlHeading: 'URL编码器',
            urlSubheading: '编码或解码URL特殊字符',

            // Hash Page
            hashPageTitle: '哈希生成器 - ionflow.xyz',
            hashPageDesc: '在线哈希生成器。即时生成MD5、SHA-1、SHA-256、SHA-512哈希。',
            hashHeading: '哈希生成器',
            hashSubheading: '生成MD5、SHA-1、SHA-256、SHA-512哈希',

            // Color Page
            colorPageTitle: '颜色转换器 - ionflow.xyz',
            colorPageDesc: '在HEX、RGB、HSL颜色代码之间转换。',
            colorHeading: '颜色转换器',
            colorSubheading: '转换HEX、RGB、HSL颜色代码',

            // Timestamp Page
            timestampPageTitle: 'Unix时间戳转换器 - ionflow.xyz',
            timestampPageDesc: 'Unix时间戳与日期/时间互相转换。',
            timestampHeading: '时间戳转换器',
            timestampSubheading: '转换Unix时间戳和日期',

            // UUID Page
            uuidPageTitle: 'UUID生成器 - ionflow.xyz',
            uuidPageDesc: '生成UUID v4。支持批量生成和多种格式。',
            uuidHeading: 'UUID生成器',
            uuidSubheading: '生成UUID v4',

            // Password Page
            passwordPageTitle: '密码生成器 - ionflow.xyz',
            passwordPageDesc: '生成强随机密码。',
            passwordHeading: '密码生成器',
            passwordSubheading: '生成安全密码',

            // WiFi Page
            wifiPageTitle: 'WiFi QR码生成器 - ionflow.xyz',
            wifiPageDesc: '将WiFi网络信息生成QR码，方便分享。',
            wifiHeading: 'WiFi QR码',
            wifiSubheading: '用QR码轻松分享WiFi信息',

            // vCard Page
            vcardPageTitle: '名片QR码生成器 - ionflow.xyz',
            vcardPageDesc: '免费生成名片用QR码。将联系人信息转换为vCard格式。',
            vcardHeading: '名片QR码',
            vcardSubheading: '将联系人信息制作成QR码用于名片',

            featureNoServer: '无服务器上传',
            featureNoServerDesc: '所有处理都在浏览器中完成。数据不会发送到外部。',
            featureFast: '快速处理',
            featureFastDesc: '无需服务器请求，即时处理。大数据量也能快速处理。',
            featureFree: '免费使用',
            featureFreeDesc: '无需注册即可免费使用所有功能。',

            navQR: 'QR生成',
            navJSON: 'JSON',
            navBase64: 'Base64',
            navHash: 'Hash',

            footerAbout: '关于',
            footerContact: '联系我们',
            footerPrivacy: '隐私政策',
            footerTerms: '服务条款',

            popular: '热门',
            ad: '广告',
            language: '语言'
        },

        es: {
            siteName: 'ionflow',
            siteTitle: 'Herramientas de Desarrollador Gratuitas',
            siteDesc: 'Colección de herramientas en línea gratuitas. Generador de QR, JSON Formatter, Base64, UUID, Contraseñas, etc.',

            heroTitle: 'Herramientas en Línea.',
            heroSubtitle: 'Utilidades gratuitas, rápidas y seguras.',

            sectionQR: 'Código QR',
            sectionDev: 'Herramientas de Desarrollo',
            sectionGen: 'Generadores',

            qrGenerator: 'Generador de QR',
            qrGeneratorDesc: 'Convierte URL o texto a código QR. Descarga en PNG y SVG.',
            wifiQR: 'QR de WiFi',
            wifiQRDesc: 'Crea código QR para compartir información de red WiFi.',
            vcardQR: 'QR de Tarjeta',
            vcardQRDesc: 'Crea código QR vCard para información de contacto.',

            jsonFormatter: 'JSON Formatter',
            jsonFormatterDesc: 'Formatea JSON y verifica errores de sintaxis.',
            base64: 'Convertidor Base64',
            base64Desc: 'Codifica o decodifica texto e imágenes en Base64.',
            urlEncoder: 'Codificador URL',
            urlEncoderDesc: 'Codifica o decodifica caracteres especiales de URL.',
            hashGenerator: 'Generador Hash',
            hashGeneratorDesc: 'Genera hashes MD5, SHA-1, SHA-256, SHA-512.',
            timestamp: 'Convertidor Timestamp',
            timestampDesc: 'Convierte entre Unix Timestamp y fecha.',
            colorConverter: 'Convertidor de Color',
            colorConverterDesc: 'Convierte códigos de color HEX, RGB, HSL.',

            uuidGenerator: 'Generador UUID',
            uuidGeneratorDesc: 'Genera UUID v4. Generación masiva y varios formatos.',
            passwordGenerator: 'Generador de Contraseñas',
            passwordGeneratorDesc: 'Genera contraseñas aleatorias seguras. Elige longitud y tipos de caracteres.',
            byteCounter: 'Contador de Bytes',
            byteCounterDesc: 'Cuenta caracteres y bytes en texto. Soporta varias codificaciones.',

            // Byte Counter Page
            byteCounterTitle: 'Contador de Bytes - ionflow.xyz',
            byteCounterHeading: 'Contador de Bytes',
            byteCounterSubheading: 'Cuenta caracteres y bytes en tiempo real',
            charsetLabel: 'Codificación:',
            byteInputPlaceholder: 'Ingrese texto...',
            clearBtn: 'Borrar',
            byteLabel: 'Bytes',
            charLabel: 'Caracteres',
            charNoSpaceLabel: 'Caracteres (sin espacios)',
            wordLabel: 'Palabras',
            detailTitle: 'Detalles',
            lineCount: 'Líneas',
            paragraphCount: 'Párrafos',
            koreanCount: 'Coreano',
            englishCount: 'Inglés',
            numberCount: 'Números',
            spaceCount: 'Espacios',
            encodingInfoTitle: 'Tamaño de bytes por codificación',
            encodingInfoDesc: 'El mismo carácter puede tener diferentes tamaños de bytes según la codificación. Los caracteres coreanos usan 3 bytes en UTF-8, pero solo 2 bytes en EUC-KR.',
            encodingCol: 'Codificación',
            asciiCol: 'ASCII/Inglés',
            koreanCol: 'Coreano',
            noteCol: 'Notas',
            utf8Note: 'Estándar web, más utilizado',
            euckrNote: 'Sistemas heredados coreanos',
            utf16Note: 'Windows interno, Java String',
            utf32Note: 'Longitud fija, fácil procesamiento',
            asciiNote: 'Solo inglés/números',

            // QR Code Page
            qrPageTitle: 'Generador de QR - ionflow.xyz',
            qrPageDesc: 'Generador de códigos QR gratuito. Convierte URL o texto a código QR.',
            qrHeading: 'Generador de QR',
            qrSubheading: 'Convierte URL o texto a código QR.',
            qrInputTitle: 'Contenido',
            qrTextBtn: 'Texto',
            qrInputPlaceholder: 'Ingresa URL o texto',
            qrColor: 'Color QR',
            qrBgColor: 'Color de Fondo',
            qrSize: 'Tamaño',
            qrGenerateBtn: 'Generar QR',
            qrPreviewTitle: 'Vista Previa',
            qrPlaceholder: 'Ingresa URL o texto y<br>haz clic en generar',
            qrDownloadPNG: 'Descargar PNG',
            qrDownloadSVG: 'Descargar SVG',

            // JSON Page
            jsonPageTitle: 'JSON Formatter - ionflow.xyz',
            jsonPageDesc: 'Formatea JSON y verifica errores de sintaxis.',
            jsonHeading: 'JSON Formatter',
            jsonSubheading: 'Formatea y valida JSON',
            jsonFormatBtn: 'Formatear',
            jsonMinifyBtn: 'Minimizar',
            jsonCopyBtn: 'Copiar',
            jsonClearBtn: 'Limpiar',

            // Base64 Page
            base64PageTitle: 'Codificador/Decodificador Base64 - ionflow.xyz',
            base64PageDesc: 'Herramienta de codificación/decodificación Base64. Convierte texto e imágenes a Base64.',
            base64Heading: 'Codificador Base64',
            base64Subheading: 'Codifica o decodifica texto a Base64',
            base64TextTab: 'Texto',
            base64ImageTab: 'Imagen',
            encodeBtn: 'Codificar →',
            decodeBtn: '← Decodificar',

            // URL Page
            urlPageTitle: 'Codificador/Decodificador URL - ionflow.xyz',
            urlPageDesc: 'Herramienta de codificación/decodificación URL. Codifica caracteres especiales en URLs.',
            urlHeading: 'Codificador URL',
            urlSubheading: 'Codifica o decodifica caracteres especiales de URL',

            // Hash Page
            hashPageTitle: 'Generador de Hash - ionflow.xyz',
            hashPageDesc: 'Generador de Hash en línea. Genera MD5, SHA-1, SHA-256, SHA-512 al instante.',
            hashHeading: 'Generador de Hash',
            hashSubheading: 'Genera hashes MD5, SHA-1, SHA-256, SHA-512',

            // Color Page
            colorPageTitle: 'Convertidor de Color - ionflow.xyz',
            colorPageDesc: 'Convierte entre códigos de color HEX, RGB, HSL.',
            colorHeading: 'Convertidor de Color',
            colorSubheading: 'Convierte códigos de color HEX, RGB, HSL',

            // Timestamp Page
            timestampPageTitle: 'Convertidor de Timestamp Unix - ionflow.xyz',
            timestampPageDesc: 'Convierte entre Timestamp Unix y fecha/hora.',
            timestampHeading: 'Convertidor de Timestamp',
            timestampSubheading: 'Convierte Timestamp Unix y fecha',

            // UUID Page
            uuidPageTitle: 'Generador de UUID - ionflow.xyz',
            uuidPageDesc: 'Genera UUID v4. Generación masiva y varios formatos.',
            uuidHeading: 'Generador de UUID',
            uuidSubheading: 'Genera UUID v4',

            // Password Page
            passwordPageTitle: 'Generador de Contraseñas - ionflow.xyz',
            passwordPageDesc: 'Genera contraseñas aleatorias seguras.',
            passwordHeading: 'Generador de Contraseñas',
            passwordSubheading: 'Genera contraseñas seguras',

            // WiFi Page
            wifiPageTitle: 'Generador de QR WiFi - ionflow.xyz',
            wifiPageDesc: 'Crea código QR para compartir información de red WiFi fácilmente.',
            wifiHeading: 'QR de WiFi',
            wifiSubheading: 'Comparte WiFi fácilmente con código QR',

            // vCard Page
            vcardPageTitle: 'Generador de QR vCard - ionflow.xyz',
            vcardPageDesc: 'Crea código QR para tarjeta de visita. Convierte contacto a formato vCard.',
            vcardHeading: 'QR de Tarjeta',
            vcardSubheading: 'Crea código QR para información de contacto',

            featureNoServer: 'Sin Envío al Servidor',
            featureNoServerDesc: 'Todo se procesa en tu navegador. Los datos no se envían externamente.',
            featureFast: 'Procesamiento Rápido',
            featureFastDesc: 'Procesamiento instantáneo sin peticiones al servidor.',
            featureFree: 'Uso Gratuito',
            featureFreeDesc: 'Usa todas las funciones gratis sin registro.',

            navQR: 'QR',
            navJSON: 'JSON',
            navBase64: 'Base64',
            navHash: 'Hash',

            footerAbout: 'Acerca de',
            footerContact: 'Contacto',
            footerPrivacy: 'Privacidad',
            footerTerms: 'Términos',

            popular: 'Popular',
            ad: 'Publicidad',
            language: 'Idioma'
        },

        ar: {
            siteName: 'ionflow',
            siteTitle: 'أدوات المطورين المجانية',
            siteDesc: 'مجموعة أدوات مجانية عبر الإنترنت. مولد QR، JSON Formatter، Base64، UUID، كلمات المرور، إلخ.',

            heroTitle: 'أدوات عبر الإنترنت.',
            heroSubtitle: 'أدوات مجانية سريعة وآمنة.',

            sectionQR: 'رمز QR',
            sectionDev: 'أدوات المطورين',
            sectionGen: 'المولدات',

            qrGenerator: 'مولد رمز QR',
            qrGeneratorDesc: 'تحويل URL أو نص إلى رمز QR. يدعم تنزيل PNG و SVG.',
            wifiQR: 'QR للواي فاي',
            wifiQRDesc: 'إنشاء رمز QR لمشاركة معلومات شبكة WiFi.',
            vcardQR: 'QR بطاقة العمل',
            vcardQRDesc: 'إنشاء رمز QR vCard لمعلومات الاتصال.',

            jsonFormatter: 'منسق JSON',
            jsonFormatterDesc: 'تنسيق JSON والتحقق من الأخطاء النحوية.',
            base64: 'محول Base64',
            base64Desc: 'ترميز أو فك ترميز النص والصور إلى Base64.',
            urlEncoder: 'مشفر URL',
            urlEncoderDesc: 'ترميز أو فك ترميز الأحرف الخاصة لـ URL.',
            hashGenerator: 'مولد Hash',
            hashGeneratorDesc: 'إنشاء تجزئة MD5، SHA-1، SHA-256، SHA-512.',
            timestamp: 'محول الطابع الزمني',
            timestampDesc: 'التحويل بين طابع Unix الزمني والتاريخ.',
            colorConverter: 'محول الألوان',
            colorConverterDesc: 'تحويل رموز الألوان HEX، RGB، HSL.',

            uuidGenerator: 'مولد UUID',
            uuidGeneratorDesc: 'إنشاء UUID v4. يدعم الإنشاء بالجملة وتنسيقات متعددة.',
            passwordGenerator: 'مولد كلمات المرور',
            passwordGeneratorDesc: 'إنشاء كلمات مرور عشوائية قوية. اختر الطول وأنواع الأحرف.',
            byteCounter: 'عداد البايت',
            byteCounterDesc: 'حساب عدد الأحرف والبايتات في النص. يدعم ترميزات متعددة.',

            // Byte Counter Page
            byteCounterTitle: 'عداد البايت - ionflow.xyz',
            byteCounterHeading: 'عداد البايت',
            byteCounterSubheading: 'حساب الأحرف والبايتات في الوقت الفعلي',
            charsetLabel: 'الترميز:',
            byteInputPlaceholder: 'أدخل النص...',
            clearBtn: 'مسح',
            byteLabel: 'بايت (Bytes)',
            charLabel: 'الأحرف',
            charNoSpaceLabel: 'الأحرف (بدون مسافات)',
            wordLabel: 'الكلمات',
            detailTitle: 'التفاصيل',
            lineCount: 'الأسطر',
            paragraphCount: 'الفقرات',
            koreanCount: 'كوري',
            englishCount: 'إنجليزي',
            numberCount: 'أرقام',
            spaceCount: 'مسافات',
            encodingInfoTitle: 'حجم البايت حسب الترميز',
            encodingInfoDesc: 'يمكن أن يكون لنفس الحرف أحجام بايت مختلفة حسب الترميز. الأحرف الكورية تستخدم 3 بايت في UTF-8، لكن 2 بايت فقط في EUC-KR.',
            encodingCol: 'الترميز',
            asciiCol: 'ASCII/إنجليزي',
            koreanCol: 'كوري',
            noteCol: 'ملاحظات',
            utf8Note: 'معيار الويب، الأكثر استخداماً',
            euckrNote: 'أنظمة كورية قديمة',
            utf16Note: 'Windows داخلي، Java String',
            utf32Note: 'طول ثابت، معالجة سهلة',
            asciiNote: 'إنجليزي/أرقام فقط',

            // QR Code Page
            qrPageTitle: 'مولد رمز QR - ionflow.xyz',
            qrPageDesc: 'مولد رمز QR مجاني. تحويل URL أو نص إلى رمز QR.',
            qrHeading: 'مولد رمز QR',
            qrSubheading: 'تحويل URL أو نص إلى رمز QR.',
            qrInputTitle: 'إدخال المحتوى',
            qrTextBtn: 'نص',
            qrInputPlaceholder: 'أدخل URL أو نص',
            qrColor: 'لون QR',
            qrBgColor: 'لون الخلفية',
            qrSize: 'الحجم',
            qrGenerateBtn: 'إنشاء رمز QR',
            qrPreviewTitle: 'معاينة',
            qrPlaceholder: 'أدخل URL أو نص و<br>انقر على زر الإنشاء',
            qrDownloadPNG: 'تحميل PNG',
            qrDownloadSVG: 'تحميل SVG',

            // JSON Page
            jsonPageTitle: 'منسق JSON - ionflow.xyz',
            jsonPageDesc: 'تنسيق JSON والتحقق من الأخطاء النحوية.',
            jsonHeading: 'منسق JSON',
            jsonSubheading: 'تنسيق والتحقق من JSON',
            jsonFormatBtn: 'تنسيق',
            jsonMinifyBtn: 'ضغط',
            jsonCopyBtn: 'نسخ',
            jsonClearBtn: 'مسح',

            // Base64 Page
            base64PageTitle: 'مشفر/فك تشفير Base64 - ionflow.xyz',
            base64PageDesc: 'أداة ترميز/فك ترميز Base64. تحويل النص والصور إلى Base64.',
            base64Heading: 'مشفر Base64',
            base64Subheading: 'ترميز أو فك ترميز النص إلى Base64',
            base64TextTab: 'نص',
            base64ImageTab: 'صورة',
            encodeBtn: 'ترميز →',
            decodeBtn: '← فك الترميز',

            // URL Page
            urlPageTitle: 'مشفر/فك تشفير URL - ionflow.xyz',
            urlPageDesc: 'أداة ترميز/فك ترميز URL. ترميز الأحرف الخاصة في URL بأمان.',
            urlHeading: 'مشفر URL',
            urlSubheading: 'ترميز أو فك ترميز الأحرف الخاصة في URL',

            // Hash Page
            hashPageTitle: 'مولد Hash - ionflow.xyz',
            hashPageDesc: 'مولد Hash عبر الإنترنت. إنشاء MD5، SHA-1، SHA-256، SHA-512 فوراً.',
            hashHeading: 'مولد Hash',
            hashSubheading: 'إنشاء تجزئة MD5، SHA-1، SHA-256، SHA-512',

            // Color Page
            colorPageTitle: 'محول الألوان - ionflow.xyz',
            colorPageDesc: 'التحويل بين رموز الألوان HEX، RGB، HSL.',
            colorHeading: 'محول الألوان',
            colorSubheading: 'تحويل رموز الألوان HEX، RGB، HSL',

            // Timestamp Page
            timestampPageTitle: 'محول الطابع الزمني Unix - ionflow.xyz',
            timestampPageDesc: 'التحويل بين طابع Unix الزمني والتاريخ/الوقت.',
            timestampHeading: 'محول الطابع الزمني',
            timestampSubheading: 'تحويل طابع Unix الزمني والتاريخ',

            // UUID Page
            uuidPageTitle: 'مولد UUID - ionflow.xyz',
            uuidPageDesc: 'إنشاء UUID v4. يدعم الإنشاء بالجملة وتنسيقات متعددة.',
            uuidHeading: 'مولد UUID',
            uuidSubheading: 'إنشاء UUID v4',

            // Password Page
            passwordPageTitle: 'مولد كلمات المرور - ionflow.xyz',
            passwordPageDesc: 'إنشاء كلمات مرور عشوائية قوية.',
            passwordHeading: 'مولد كلمات المرور',
            passwordSubheading: 'إنشاء كلمات مرور آمنة',

            // WiFi Page
            wifiPageTitle: 'مولد QR للواي فاي - ionflow.xyz',
            wifiPageDesc: 'إنشاء رمز QR لمشاركة معلومات شبكة WiFi بسهولة.',
            wifiHeading: 'QR للواي فاي',
            wifiSubheading: 'مشاركة WiFi بسهولة مع رمز QR',

            // vCard Page
            vcardPageTitle: 'مولد QR لبطاقة العمل - ionflow.xyz',
            vcardPageDesc: 'إنشاء رمز QR لبطاقة العمل. تحويل معلومات الاتصال إلى تنسيق vCard.',
            vcardHeading: 'QR بطاقة العمل',
            vcardSubheading: 'إنشاء رمز QR لمعلومات الاتصال',

            featureNoServer: 'بدون إرسال للخادم',
            featureNoServerDesc: 'تتم جميع المعالجات في متصفحك. لا يتم إرسال البيانات خارجياً.',
            featureFast: 'معالجة سريعة',
            featureFastDesc: 'معالجة فورية بدون طلبات الخادم. يعالج البيانات الكبيرة بسرعة.',
            featureFree: 'استخدام مجاني',
            featureFreeDesc: 'استخدم جميع الميزات مجاناً بدون تسجيل.',

            navQR: 'QR',
            navJSON: 'JSON',
            navBase64: 'Base64',
            navHash: 'Hash',

            footerAbout: 'حول',
            footerContact: 'اتصل بنا',
            footerPrivacy: 'سياسة الخصوصية',
            footerTerms: 'شروط الخدمة',

            popular: 'شائع',
            ad: 'إعلان',
            language: 'اللغة'
        }
    };

    // Language names for selector
    const languageNames = {
        ko: '한국어',
        en: 'English',
        ja: '日本語',
        zh: '中文',
        es: 'Español',
        ar: 'العربية'
    };

    // Detect browser language
    function detectLanguage() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED_LANGS.includes(saved)) {
            return saved;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        const shortLang = browserLang.split('-')[0].toLowerCase();

        if (SUPPORTED_LANGS.includes(shortLang)) {
            return shortLang;
        }

        // Map common variants
        const langMap = {
            'zh-cn': 'zh',
            'zh-tw': 'zh',
            'zh-hk': 'zh',
            'ja-jp': 'ja',
            'ko-kr': 'ko',
            'es-es': 'es',
            'es-mx': 'es',
            'ar-sa': 'ar'
        };

        const fullLang = browserLang.toLowerCase();
        if (langMap[fullLang]) {
            return langMap[fullLang];
        }

        return DEFAULT_LANG;
    }

    // Get current language
    function getCurrentLang() {
        return localStorage.getItem(STORAGE_KEY) || detectLanguage();
    }

    // Set language
    function setLanguage(lang) {
        if (!SUPPORTED_LANGS.includes(lang)) {
            lang = DEFAULT_LANG;
        }
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;

        // RTL support for Arabic
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }

        applyTranslations();
    }

    // Get translation
    function t(key) {
        const lang = getCurrentLang();
        return translations[lang]?.[key] || translations[DEFAULT_LANG]?.[key] || key;
    }

    // Apply translations to elements with data-i18n attribute
    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = t(key);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = t(key);
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = t(key);
        });

        // Update page title
        const titleEl = document.querySelector('title');
        if (titleEl && titleEl.getAttribute('data-i18n')) {
            titleEl.textContent = t(titleEl.getAttribute('data-i18n'));
        }

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && metaDesc.getAttribute('data-i18n')) {
            metaDesc.content = t(metaDesc.getAttribute('data-i18n'));
        }
    }

    // Create language selector HTML
    function createLanguageSelector() {
        const currentLang = getCurrentLang();
        const options = SUPPORTED_LANGS.map(lang =>
            `<option value="${lang}" ${lang === currentLang ? 'selected' : ''}>${languageNames[lang]}</option>`
        ).join('');

        return `
        <div class="lang-selector" style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:12px;opacity:0.7;">🌐</span>
            <select id="lang-select" style="font-size:12px;padding:4px 8px;border:1px solid #d2d2d7;border-radius:6px;background:#fff;cursor:pointer;">
                ${options}
            </select>
        </div>`;
    }

    // Initialize
    function init() {
        const lang = detectLanguage();
        setLanguage(lang);
    }

    // Export to global scope
    window.i18n = {
        t,
        setLanguage,
        getCurrentLang,
        applyTranslations,
        createLanguageSelector,
        translations,
        languageNames,
        SUPPORTED_LANGS
    };

    // Auto-initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
