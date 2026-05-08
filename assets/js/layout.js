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
        const langSelector = window.i18n ? window.i18n.createLanguageSelector() : '';

        return `
        <header style="background:rgba(255,255,255,0.95);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);position:sticky;top:0;z-index:100;border-bottom:1px solid #d2d2d7;">
            <div style="max-width:1200px;margin:0 auto;padding:0 22px;height:48px;display:flex;align-items:center;justify-content:space-between;">
                <a href="/" style="font-size:21px;font-weight:600;text-decoration:none;color:inherit;">ionflow</a>
                <div style="display:flex;align-items:center;gap:16px;">
                    <a href="/tools/" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:500;color:#0071e3;text-decoration:none;padding:6px 14px;border-radius:980px;background:rgba(0,113,227,0.08);transition:background 0.2s;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0071e3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                        도구 모음
                    </a>
                    <a href="/downloads/" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:500;color:#0071e3;text-decoration:none;padding:6px 14px;border-radius:980px;background:rgba(0,113,227,0.08);transition:background 0.2s;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0071e3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        자료실
                    </a>
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
