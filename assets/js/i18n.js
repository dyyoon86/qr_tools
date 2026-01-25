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
