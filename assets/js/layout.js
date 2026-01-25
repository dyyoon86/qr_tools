// ionflow.xyz - Shared Layout
// Header and Footer injection for all pages with i18n support

(function() {
    'use strict';

    // Wait for i18n to be loaded
    function waitForI18n(callback) {
        if (window.i18n) {
            callback();
        } else {
            setTimeout(() => waitForI18n(callback), 10);
        }
    }

    // Navigation items with i18n keys
    const navItems = [
        { href: '/tools/qr.html', i18nKey: 'navQR' },
        { href: '/tools/json.html', i18nKey: 'navJSON' },
        { href: '/tools/base64.html', i18nKey: 'navBase64' },
        { href: '/tools/hash.html', i18nKey: 'navHash' }
    ];

    // Footer links with i18n keys
    const footerLinks = [
        { href: '/pages/about.html', i18nKey: 'footerAbout' },
        { href: '/pages/contact.html', i18nKey: 'footerContact' },
        { href: '/pages/privacy.html', i18nKey: 'footerPrivacy' },
        { href: '/pages/terms.html', i18nKey: 'footerTerms' }
    ];

    // Get translation helper
    function t(key) {
        return window.i18n ? window.i18n.t(key) : key;
    }

    // Create header HTML with inline styles to ensure consistency
    function createHeader() {
        const navLinksHtml = navItems.map(item =>
            `<a href="${item.href}" style="font-size:12px;opacity:0.8;" data-i18n="${item.i18nKey}">${t(item.i18nKey)}</a>`
        ).join('');

        const langSelector = window.i18n ? window.i18n.createLanguageSelector() : '';

        return `
        <header style="background:rgba(255,255,255,0.95);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);position:sticky;top:0;z-index:100;border-bottom:1px solid #d2d2d7;">
            <div style="max-width:1200px;margin:0 auto;padding:0 22px;height:48px;display:flex;align-items:center;justify-content:space-between;">
                <a href="/" style="font-size:21px;font-weight:600;text-decoration:none;color:inherit;">ionflow</a>
                <div style="display:flex;align-items:center;gap:24px;">
                    <nav style="display:flex;gap:28px;">${navLinksHtml}</nav>
                    ${langSelector}
                </div>
            </div>
        </header>`;
    }

    // Create footer HTML with inline styles to ensure consistency
    function createFooter() {
        const footerLinksHtml = footerLinks.map(item =>
            `<a href="${item.href}" style="margin:0 8px;" data-i18n="${item.i18nKey}">${t(item.i18nKey)}</a>`
        ).join('');

        return `
        <footer style="background:#f5f5f7;padding:20px 22px;text-align:center;font-size:12px;color:#86868b;">
            <p style="margin-bottom:12px;">Copyright © 2026 ionflow.xyz</p>
            <div>${footerLinksHtml}</div>
        </footer>`;
    }

    // Inject header and footer
    function injectLayout() {
        // Replace existing header or insert new one
        const existingHeader = document.querySelector('header');
        if (existingHeader) {
            existingHeader.outerHTML = createHeader();
        } else {
            document.body.insertAdjacentHTML('afterbegin', createHeader());
        }

        // Replace existing footer or insert new one
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.outerHTML = createFooter();
        } else {
            document.body.insertAdjacentHTML('beforeend', createFooter());
        }

        // Add language selector event listener
        const langSelect = document.getElementById('lang-select');
        if (langSelect) {
            langSelect.addEventListener('change', (e) => {
                window.i18n.setLanguage(e.target.value);
                // Re-inject layout to update nav/footer
                injectLayout();
            });
        }
    }

    // Run when DOM is ready and i18n is loaded
    function init() {
        waitForI18n(() => {
            injectLayout();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
