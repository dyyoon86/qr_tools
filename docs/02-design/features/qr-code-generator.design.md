# Design: ionflow.xyz 전체 플랫폼 확장

> **Feature**: qr-code-generator (플랫폼 전체 확장)
> **Phase**: Design
> **Created**: 2026-02-12
> **Plan Reference**: docs/01-plan/features/qr-code-generator.plan.md
> **Base Project**: qr-tools/ (ionflow.xyz)

---

## 1. 현재 상태 (AS-IS)

### 1.1 기존 구현 완료 도구 (14개)

| # | 도구 | 파일 | 카테고리 |
|---|------|------|---------|
| 1 | QR코드 생성기 | tools/qr.html | QR코드 |
| 2 | WiFi QR코드 | tools/wifi.html | QR코드 |
| 3 | 명함 QR코드 | tools/vcard.html | QR코드 |
| 4 | JSON 포맷터 | tools/json.html | 개발자 도구 |
| 5 | Base64 변환 | tools/base64.html | 개발자 도구 |
| 6 | URL 인코더 | tools/url.html | 개발자 도구 |
| 7 | Hash 생성기 | tools/hash.html | 개발자 도구 |
| 8 | Timestamp 변환 | tools/timestamp.html | 개발자 도구 |
| 9 | 색상 변환기 | tools/color.html | 개발자 도구 |
| 10 | Regex 테스터 | tools/regex.html | 개발자 도구 |
| 11 | Diff 비교기 | tools/diff.html | 개발자 도구 |
| 12 | UUID 생성기 | tools/uuid.html | 생성기 |
| 13 | 비밀번호 생성기 | tools/password.html | 생성기 |
| 14 | 글자수/바이트 계산기 | tools/byte.html | 생성기 |

### 1.2 기존 기술 스택

| 항목 | 값 |
|------|-----|
| 프레임워크 | 순수 HTML/CSS/JS (No framework) |
| 폰트 | Pretendard (UI) + JetBrains Mono (코드) |
| 디자인 | Apple 스타일 미니멀 |
| 레이아웃 | layout.js 동적 헤더/푸터 삽입 |
| i18n | i18n.js (ko, en, ja, zh, es, ar) |
| 호스팅 | Cloudflare Pages (GitHub auto-deploy) |
| 수익화 | Google AdSense (ca-pub-3465506500903274) |
| 분석 | Google Analytics (G-YXJSQD3KBJ) |
| 도메인 | ionflow.xyz |

### 1.3 기존 디자인 시스템

```css
/* Colors */
--bg:        #fff       /* 배경 */
--panel:     #f5f5f7    /* 패널 배경 */
--text:      #1d1d1f    /* 텍스트 */
--sub-text:  #86868b    /* 서브 텍스트 */
--border:    #d2d2d7    /* 테두리 */
--btn:       #1d1d1f    /* 버튼 */
--success:   #34c759    /* 성공 */
--purple:    #af52de    /* 보라 */
--blue:      #007aff    /* 파란 */
--error:     #ff3b30    /* 에러 */

/* Layout */
max-width: 1200px
border-radius: 18px (패널), 12px (버튼/입력), 8px (작은 요소)
```

---

## 2. 목표 상태 (TO-BE)

### 2.1 신규 추가 도구 전체 목록

min-inter.co.kr 분석 기반, 기존 14개에 추가할 도구들:

#### Wave 1 - 유틸리티 확장 (간단, 1~2일/개)

| # | 도구 | 파일명 | 난이도 | 설명 |
|---|------|--------|:------:|------|
| 15 | 이모지 텍스트 스타일러 | tools/emoji-styler.html | ★☆ | 텍스트를 이모지/특수문자 스타일로 변환 |
| 16 | 체크리스트 관리자 | tools/checklist.html | ★☆ | 할일 목록 관리 (localStorage) |
| 17 | 국가 코드 검색기 | tools/country-code.html | ★☆ | 국가코드/전화번호 검색 |
| 18 | 텍스트 분석기 Pro | tools/text-analyzer.html | ★★ | 글자수, 단어수, 문장수, 키워드 빈도 등 종합 분석 |
| 19 | 마크다운 에디터 | tools/markdown.html | ★★ | 실시간 미리보기 마크다운 편집기 |
| 20 | 이미지 압축기 | tools/image-compress.html | ★★ | 브라우저 내 이미지 리사이즈/압축 |
| 21 | 파비콘 생성기 | tools/favicon-gen.html | ★★ | 텍스트/이모지로 파비콘 생성 |
| 22 | 컬러 팔레트 생성기 | tools/palette.html | ★★ | 조화로운 색상 팔레트 자동 생성 |
| 23 | Lorem Ipsum 생성기 | tools/lorem.html | ★☆ | 더미 텍스트 생성 |
| 24 | JWT 디코더 | tools/jwt.html | ★☆ | JWT 토큰 디코딩/검증 |
| 25 | Cron 표현식 해석기 | tools/cron.html | ★★ | Cron 표현식 해석/생성 |
| 26 | CSS 단위 변환기 | tools/css-unit.html | ★☆ | px/rem/em/vw 변환 |
| 27 | HTML 엔티티 변환기 | tools/html-entity.html | ★☆ | HTML 특수문자 인코딩/디코딩 |
| 28 | IP 주소 조회기 | tools/ip-lookup.html | ★☆ | 내 IP 주소 확인 |
| 29 | User-Agent 분석기 | tools/user-agent.html | ★☆ | 브라우저/OS 정보 파싱 |
| 30 | ASCII 아트 생성기 | tools/ascii-art.html | ★★ | 텍스트를 ASCII 아트로 변환 |

#### Wave 2 - 계산기 시리즈 (템플릿 기반 대량 생산)

| # | 카테고리 | 파일 패턴 | 개수 | 설명 |
|---|---------|----------|:----:|------|
| 31~41 | 급여·연봉 | calc/salary/*.html | 11 | 연봉 실수령, 시급, 퇴직금, 수당 |
| 42~51 | 금융·재무 | calc/finance/*.html | 10 | ROI, 복리, 주식평균가, 대출 |
| 52~60 | 무역·업무 | calc/trade/*.html | 9 | 무역 계산, 관세, 물류 |
| 61~69 | 건강·영양 | calc/health/*.html | 9 | BMI, BMR, 칼로리, 심박수 |
| 70~77 | 수학·통계 | calc/math/*.html | 8 | 백분율, 방정식, 순열조합 |
| 78~87 | 단위변환 | calc/unit/*.html | 10 | 길이, 무게, 온도, 속도 |
| 88~96 | 날짜·시간 | calc/date/*.html | 9 | D-day, 나이계산, 시차 |
| 97~103 | 라이프 | calc/life/*.html | 7 | 기념일, 출산예정일, 육아 |
| 104~109 | 자동차·여행 | calc/auto/*.html | 6 | 연비, 통행료, 여행예산 |
| 110~118 | 공학·IT | calc/tech/*.html | 9 | 옴의법칙, IP서브넷, 진법 |
| 119~128 | 우주·천문 | calc/space/*.html | 10 | 행성무게, 블랙홀, 궤도 |
| 129 | AI | calc/ai/api-cost.html | 1 | AI API 비용 계산 |
| 130~138 | 기타 | calc/etc/*.html | 9 | 요리계량, 할인, 반려동물 |

#### Wave 3 - 게임 (엔터테인먼트)

| # | 게임 | 파일명 | 난이도 | 핵심 기술 |
|---|------|--------|:------:|----------|
| 139 | 2048 | games/2048.html | ★★ | CSS Grid + JS |
| 140 | 워들 (한국어) | games/wordle.html | ★★ | 한국어 단어 DB |
| 141 | 메모리 게임 | games/memory.html | ★★ | CSS Flip |
| 142 | 지뢰찾기 | games/minesweeper.html | ★★★ | 알고리즘 |
| 143 | 스도쿠 | games/sudoku.html | ★★★ | 생성/풀기 알고리즘 |
| 144 | 테트리스 | games/tetris.html | ★★★ | Canvas |
| 145 | 팩맨 | games/pacman.html | ★★★ | Canvas + AI |
| 146 | 갤러그 | games/galaga.html | ★★★ | Canvas + 스프라이트 |
| 147 | 한글 키즈 게임 | games/hangul-kids.html | ★★ | 교육용 |
| 148 | 오목 | games/omok.html | ★★★★ | AI 엔진 |
| 149 | 포커 | games/poker.html | ★★★ | 카드 로직 |
| 150 | 장기 | games/janggi.html | ★★★★★ | AI 엔진 |
| 151 | 당구 3D | games/billiards.html | ★★★★★ | Three.js + 물리 |

#### Wave 4 - 교육/데이터/라이프

| # | 도구 | 파일명 | 난이도 | 설명 |
|---|------|--------|:------:|------|
| 152 | 주기율표 | tools/periodic-table.html | ★★★ | 인터랙티브 |
| 153 | 색각 검사 | tools/color-vision.html | ★★ | 이시하라 검사 |
| 154 | 로또 분석기 | tools/lotto.html | ★★★ | 통계 기반 번호 생성 |
| 155 | 타이머/스톱워치 | tools/timer.html | ★★ | Web Audio 알람 |
| 156 | 모니터 픽셀 테스트 | tools/pixel-test.html | ★☆ | 전체화면 색상 |
| 157 | 오늘 뭐 먹지 | tools/food-random.html | ★☆ | 랜덤 음식 추천 |
| 158 | 음식 칼로리 계산기 | tools/calorie.html | ★★ | 음식 DB 검색 |
| 159 | 수면 시간 계산기 | tools/sleep.html | ★☆ | 수면 사이클 |
| 160 | 사주팔자 | tools/saju.html | ★★★★ | 만세력 알고리즘 |
| 161 | 무료 타로 | tools/tarot.html | ★★★ | 카드 UI + 해석 |
| 162 | PC 견적 계산기 | tools/pc-budget.html | ★★★ | 부품 DB |
| 163 | PDF 합치기/분할 | tools/pdf.html | ★★★★ | pdf-lib |
| 164 | 벨소리 메이커 | tools/ringtone.html | ★★★★ | Web Audio API |

**총 목표: 164+ 도구 (기존 14 + 신규 150)**

---

## 3. 파일 구조 설계

### 3.1 디렉토리 구조

```
qr-tools/
├── index.html                    # 메인 (카테고리별 도구 그리드)
├── assets/
│   ├── css/
│   │   └── common.css            # 공통 스타일 (기존 유지)
│   ├── js/
│   │   ├── layout.js             # 헤더/푸터 (네비게이션 확장)
│   │   ├── i18n.js               # 다국어 (기존 유지)
│   │   └── calc-template.js      # NEW: 계산기 공통 템플릿 엔진
│   └── images/                   # 파비콘 등 (기존 유지)
│
├── tools/                        # 유틸리티 도구 (기존 + Wave 1)
│   ├── qr.html                   # 기존
│   ├── wifi.html                 # 기존
│   ├── vcard.html                # 기존
│   ├── json.html                 # 기존
│   ├── base64.html               # 기존
│   ├── url.html                  # 기존
│   ├── hash.html                 # 기존
│   ├── timestamp.html            # 기존
│   ├── color.html                # 기존
│   ├── regex.html                # 기존
│   ├── diff.html                 # 기존
│   ├── uuid.html                 # 기존
│   ├── password.html             # 기존
│   ├── byte.html                 # 기존
│   ├── emoji-styler.html         # NEW
│   ├── checklist.html            # NEW
│   ├── country-code.html         # NEW
│   ├── text-analyzer.html        # NEW
│   ├── markdown.html             # NEW
│   ├── image-compress.html       # NEW
│   ├── favicon-gen.html          # NEW
│   ├── palette.html              # NEW
│   ├── lorem.html                # NEW
│   ├── jwt.html                  # NEW
│   ├── cron.html                 # NEW
│   ├── css-unit.html             # NEW
│   ├── html-entity.html          # NEW
│   ├── ip-lookup.html            # NEW
│   ├── user-agent.html           # NEW
│   ├── ascii-art.html            # NEW
│   ├── periodic-table.html       # NEW
│   ├── color-vision.html         # NEW
│   ├── lotto.html                # NEW
│   ├── timer.html                # NEW
│   ├── pixel-test.html           # NEW
│   ├── food-random.html          # NEW
│   ├── calorie.html              # NEW
│   ├── sleep.html                # NEW
│   ├── saju.html                 # NEW
│   ├── tarot.html                # NEW
│   ├── pc-budget.html            # NEW
│   ├── pdf.html                  # NEW
│   └── ringtone.html             # NEW
│
├── calc/                         # NEW: 전문 계산기 (Wave 2)
│   ├── index.html                # 계산기 허브 페이지
│   ├── salary/                   # 급여·연봉 (11개)
│   │   ├── index.html            # 카테고리 허브
│   │   ├── annual-net.html
│   │   ├── hourly-wage.html
│   │   ├── salary-raise.html
│   │   ├── bonus.html
│   │   ├── severance.html
│   │   ├── overtime.html
│   │   ├── night-allowance.html
│   │   ├── holiday-allowance.html
│   │   ├── weekly-holiday.html
│   │   └── average-wage.html
│   ├── finance/                  # 금융·재무 (10개)
│   ├── trade/                    # 무역·업무 (9개)
│   ├── health/                   # 건강·영양 (9개)
│   ├── math/                     # 수학·통계 (8개)
│   ├── unit/                     # 단위변환 (10개)
│   ├── date/                     # 날짜·시간 (9개)
│   ├── life/                     # 라이프 (7개)
│   ├── auto/                     # 자동차·여행 (6개)
│   ├── tech/                     # 공학·IT (9개)
│   ├── space/                    # 우주·천문 (10개)
│   ├── ai/                       # AI (1개)
│   └── etc/                      # 기타 (9개)
│
├── games/                        # NEW: 게임 (Wave 3)
│   ├── index.html                # 게임 허브 페이지
│   ├── 2048.html
│   ├── wordle.html
│   ├── memory.html
│   ├── minesweeper.html
│   ├── sudoku.html
│   ├── tetris.html
│   ├── pacman.html
│   ├── galaga.html
│   ├── hangul-kids.html
│   ├── omok.html
│   ├── poker.html
│   ├── janggi.html
│   └── billiards.html
│
├── pages/                        # 정보 페이지 (기존 유지)
│   ├── about.html
│   ├── contact.html
│   ├── privacy.html
│   └── terms.html
│
├── sitemap.xml                   # 업데이트 필요
└── robots.txt                    # 기존 유지
```

---

## 4. index.html 재설계

### 4.1 카테고리 구조

```
[Hero Section] "164가지 무료 온라인 도구"

[QR코드] (3개) - 기존
[개발자 도구] (11개) - 기존 8 + 신규 3 (JWT, Cron, CSS단위)
[텍스트/변환] (7개) - byte + 신규 6
[생성기] (6개) - 기존 3 + 신규 3
[디자인/미디어] (5개) - 기존 color + 신규 4
[전문 계산기] (126개) -> 허브 카드 1개 (calc/index.html로 이동)
[게임] (13개) -> 허브 카드 1개 (games/index.html로 이동)
[라이프/데이터] (10개)
```

### 4.2 네비게이션 확장 (layout.js 수정)

```javascript
const navItems = [
    { href: '/', i18nKey: 'navHome' },
    { href: '/tools/qr.html', i18nKey: 'navQR' },
    { href: '/tools/json.html', i18nKey: 'navJSON' },
    { href: '/calc/', i18nKey: 'navCalc' },        // NEW
    { href: '/games/', i18nKey: 'navGames' },       // NEW
];
```

---

## 5. 계산기 템플릿 시스템 (핵심 설계)

### 5.1 calc-template.js

126개 계산기를 효율적으로 생산하기 위한 공통 템플릿 엔진.

```javascript
class CalcTemplate {
    constructor(config) {
        this.title = config.title;
        this.description = config.description;
        this.inputs = config.inputs;     // [{id, label, type, placeholder, unit}]
        this.outputs = config.outputs;   // [{id, label, unit, format}]
        this.calculate = config.calculate; // (inputs) => outputs
    }

    render(containerId) { /* 폼 자동 생성 */ }
    bindEvents() { /* 실시간 계산 바인딩 */ }
}
```

### 5.2 계산기 페이지 최소 코드

```html
<!-- calc/salary/annual-net.html -->
<script src="/assets/js/calc-template.js"></script>
<script>
new CalcTemplate({
    title: '연봉 실수령액 계산기',
    description: '연봉에서 세금과 4대보험을 공제한 실수령액을 계산합니다.',
    inputs: [
        { id: 'salary', label: '연봉', type: 'number', placeholder: '5000', unit: '만원' },
        { id: 'dependents', label: '부양가족 수', type: 'number', placeholder: '1', unit: '명' }
    ],
    outputs: [
        { id: 'monthly', label: '월 실수령액', unit: '원', format: 'currency' },
        { id: 'tax', label: '총 공제액', unit: '원', format: 'currency' }
    ],
    calculate: (inputs) => {
        // 계산 로직
    }
}).render('app');
</script>
```

### 5.3 계산기 카테고리 허브 (calc/index.html)

min-inter.co.kr/calculators와 동일한 구조:
- 13개 카테고리 카드 그리드
- 각 카테고리 클릭 시 해당 카테고리 허브로 이동
- 총 126개 계산기 표시

---

## 6. 도구별 상세 스펙 (Wave 1 신규 도구)

### 6.1 이모지 텍스트 스타일러 (emoji-styler.html)

| 항목 | 스펙 |
|------|------|
| 입력 | 텍스트 입력 |
| 출력 | 볼드, 이탤릭, 스트라이크스루, 모노스페이스, 유니코드 변환 |
| 기능 | 실시간 변환, 클립보드 복사, 10+ 스타일 |
| 의존성 | 없음 (유니코드 매핑 테이블) |

### 6.2 마크다운 에디터 (markdown.html)

| 항목 | 스펙 |
|------|------|
| 입력 | 마크다운 텍스트 (좌측 에디터) |
| 출력 | HTML 미리보기 (우측 패널) |
| 기능 | 실시간 미리보기, 툴바 (Bold/Italic/Link/Image/Code), 다운로드 (MD/HTML) |
| 라이브러리 | marked.js (CDN ~8KB) |

### 6.3 이미지 압축기 (image-compress.html)

| 항목 | 스펙 |
|------|------|
| 입력 | 이미지 파일 드래그&드롭 또는 업로드 |
| 출력 | 압축된 이미지 다운로드 |
| 기능 | 품질 조절 슬라이더, 리사이즈, 포맷 변환 (JPEG/PNG/WebP), Before/After 비교 |
| 기술 | Canvas API (서버 전송 없음) |

### 6.4 JWT 디코더 (jwt.html)

| 항목 | 스펙 |
|------|------|
| 입력 | JWT 토큰 문자열 |
| 출력 | Header (JSON), Payload (JSON), 만료시간, 유효성 |
| 기능 | 실시간 디코딩, 만료 여부 표시, 구조 색상 하이라이트 |
| 의존성 | 없음 (Base64 디코딩만) |

### 6.5 Cron 표현식 해석기 (cron.html)

| 항목 | 스펙 |
|------|------|
| 입력 | Cron 표현식 (5/6필드) |
| 출력 | 자연어 설명, 다음 실행 시각 5개 |
| 기능 | 프리셋 (매분, 매시, 매일 등), 비주얼 빌더, 검증 |
| 의존성 | 없음 |

---

## 7. 게임 허브 설계 (Wave 3)

### 7.1 games/index.html 레이아웃

```
[Hero] "무료 브라우저 게임"
[카드 그리드]
 - 쉬운 게임 (2048, 워들, 메모리)
 - 클래식 게임 (지뢰찾기, 테트리스, 스도쿠)
 - 아케이드 (팩맨, 갤러그)
 - 보드 게임 (오목, 장기, 포커)
 - 3D (당구)
 - 교육 (한글 키즈)
```

### 7.2 게임 공통 패턴

```html
<!-- 모든 게임 공통 구조 -->
<div class="page-header">
    <h1>게임명</h1>
    <p>설명</p>
</div>
<main>
    <div class="game-container" id="game">
        <!-- 게임 캔버스 또는 그리드 -->
    </div>
    <div class="game-controls">
        <!-- 게임별 컨트롤 -->
    </div>
</main>
```

---

## 8. SEO 설계

### 8.1 각 도구 페이지 필수 메타

```html
<title>{도구명} - 무료 온라인 {카테고리} | ionflow.xyz</title>
<meta name="description" content="{도구 설명 150자}">
<meta name="keywords" content="{도구 키워드}">
<link rel="canonical" href="https://ionflow.xyz/tools/{tool}.html">

<!-- Schema.org -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "{도구명}",
    "url": "https://ionflow.xyz/tools/{tool}.html",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0" }
}
</script>
```

### 8.2 sitemap.xml 자동 생성

모든 도구/계산기/게임 URL을 포함하는 sitemap 필요 (~170+ URL).

---

## 9. 구현 순서 및 일정

### Phase 1: Wave 1 유틸리티 (16개 신규)
**일정**: 10~15일

| 우선순위 | 도구 | 예상 일수 | 이유 |
|:--------:|------|:--------:|------|
| 1 | Lorem Ipsum 생성기 | 0.5 | 매우 간단, 워밍업 |
| 2 | HTML 엔티티 변환기 | 0.5 | 매우 간단 |
| 3 | CSS 단위 변환기 | 0.5 | 간단 |
| 4 | IP 주소 조회기 | 0.5 | 간단 |
| 5 | User-Agent 분석기 | 0.5 | 간단 |
| 6 | 이모지 텍스트 스타일러 | 1 | 유니코드 매핑 |
| 7 | 체크리스트 관리자 | 1 | localStorage |
| 8 | JWT 디코더 | 1 | 개발자 수요 높음 |
| 9 | 수면 시간 계산기 | 0.5 | 간단 |
| 10 | 모니터 픽셀 테스트 | 0.5 | 간단 |
| 11 | 국가 코드 검색기 | 1 | 데이터 테이블 |
| 12 | 파비콘 생성기 | 1 | Canvas API |
| 13 | 컬러 팔레트 생성기 | 1 | 색상 이론 |
| 14 | 마크다운 에디터 | 1.5 | marked.js 연동 |
| 15 | 텍스트 분석기 Pro | 1.5 | 다기능 |
| 16 | 이미지 압축기 | 2 | Canvas + File API |

### Phase 2: 계산기 템플릿 + 핵심 계산기 (30개)
**일정**: 10~12일

1. calc-template.js 엔진 개발 (2일)
2. 급여·연봉 11개 (2일 - 템플릿 적용)
3. 건강·영양 9개 (1.5일)
4. 단위변환 10개 (1.5일)
5. calc/index.html 허브 + 카테고리 허브 (1일)
6. index.html 업데이트 (0.5일)

### Phase 3: 나머지 계산기 (96개)
**일정**: 15~20일 (템플릿 완성 후 빠르게 생산)

### Phase 4: 쉬운 게임 (6개)
**일정**: 8~12일

2048 -> 워들 -> 메모리 -> 지뢰찾기 -> 스도쿠 -> 테트리스

### Phase 5: 나머지 게임 + 고급 도구 (7+ 게임 + 고급 도구)
**일정**: 30~50일

### Phase 6: 사이트 전체 정비
**일정**: 3~5일

- sitemap.xml 전체 업데이트
- index.html 전체 카테고리 재배치
- layout.js 네비게이션 드롭다운 메뉴
- 성능 최적화 (lazy loading)
- Lighthouse 점검

---

## 10. 변경 필요 파일 (기존 코드)

| 파일 | 변경 내용 |
|------|----------|
| `index.html` | 카테고리 재구성, 신규 도구 카드 추가, 계산기/게임 허브 링크 |
| `assets/js/layout.js` | 네비게이션에 계산기/게임 링크 추가 |
| `sitemap.xml` | 모든 신규 URL 추가 |
| `CLAUDE.md` | 파일 구조 업데이트, 신규 패턴 문서화 |
| `README.md` | 도구 목록 업데이트 |

---

## 11. 품질 기준

| 항목 | 기준 |
|------|------|
| 모든 도구 | 기존 Apple 미니멀 디자인 유지 |
| 모든 도구 | common.css 활용, 인라인 스타일 최소화 |
| 모든 도구 | layout.js 헤더/푸터 사용 |
| 모든 도구 | 모바일 반응형 (768px 브레이크포인트) |
| 모든 도구 | AdSense 광고 영역 포함 |
| 모든 도구 | SEO 메타태그 + Schema.org |
| 모든 도구 | Google Analytics 이벤트 |
| 모든 도구 | i18n data-i18n 속성 (최소 ko) |
| 성능 | Lighthouse Performance 85+ |
| 보안 | 서버 전송 없음 (100% 클라이언트) |
