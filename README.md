# موقع شريك أودو | Odoo Partner Website

موقع تعريفي احترافي ثنائي اللغة (عربي/إنجليزي) لشركة تعمل كشريك رسمي لـ **Odoo**، يعرض الميزات الأساسية لنظام Odoo ERP وخدمات التنفيذ والتخصيص والدعم.

A production-ready, bilingual (Arabic/English) marketing website for an official **Odoo** partner — presenting Odoo ERP's core apps, implementation services, methodology, packages and pricing.

---

## المحتوى / What's inside

| Section | الوصف |
| --- | --- |
| Hero + Delivery dashboard | واجهة رسومية تحاكي لوحة تحكم أودو (KPIs، مخطط أعمدة، خط مبيعات، تدفّق مترابط) |
| Trust strip | شريط متحرك بأسماء التطبيقات + أرقام مرجعية من موقع أودو |
| Why Odoo | ستّ قيم أساسية: منصة واحدة، تسعير شفاف، مصدر مفتوح، عربي أولًا، توسّع، نشر مرن |
| Apps showcase | 36 تطبيقًا رسميًا موزّعة على 6 تصنيفات مع تبويبات تفاعلية |
| Integration | مخطط شبكة يوضّح تكامل التطبيقات حول قاعدة بيانات واحدة |
| Inside the system | 4 دورات عمل مع إنفوجرافيك (خط المبيعات، التسوية البنكية، خريطة المستودع، جانت المشاريع) |
| Services | 8 خدمات: تحليل، تنفيذ، تخصيص، تكاملات، ترحيل بيانات، تدريب، دعم، استضافة |
| Methodology | 6 مراحل تنفيذ + شريط زمني إجمالي للمشروع |
| Industries | 8 قطاعات مع التطبيقات المقترحة لكل قطاع |
| Why us | التزاماتنا + أرقام + وعد مكتوب |
| Editions | جدول مقارنة Community vs Enterprise (إنفوجرافيك) |
| Pricing | خطط أودو الرسمية + 3 باقات تنفيذ + ما تشمله كل الباقات |
| Testimonials · FAQ · Contact | آراء عملاء، أسئلة شائعة تفاعلية، ونموذج تواصل مع تحقق وإرسال بالبريد |

المحتوى التسويقي مستند إلى المعلومات المنشورة على **odoo.com** (التطبيقات، النسخ، الأسعار، الأرقام) مع الإشارة للمصدر في المواضع المناسبة.

---

## التشغيل / Getting started

```bash
cd odoo-partner-site
npm install
npm run dev      # http://localhost:5173
npm run build    # ملفات ثابتة في dist/
npm run preview  # معاينة نسخة الإنتاج
```

**التقنيات:** React 19 + TypeScript + Vite + Tailwind CSS 4، بدون أي مكتبة أيقونات أو UI خارجية — كل الأيقونات والرسومات مبنية بـ SVG مخصّص داخل المشروع.

**الهوية اللونية:** كحلي مؤسسي عميق (`brand`) + تيركوازي هادئ (`accent`) على رمادي مزرق محايد (`ink`)، بتشبّع منخفض وتدرّجات محدودة — لتعكس الجدية والاتّزان. كل الألوان معرّفة كـ design tokens في `src/index.css` داخل `@theme`، وألوان بطاقات التطبيقات في `appToneGradients` بملف `src/i18n/content.ts`.

---

## تعديل بيانات الشركة / Customizing

كل ما يخص الهوية والتواصل في مكان واحد:

```
src/i18n/content.ts  →  siteConfig   (الاسم، البريد، الهاتف، واتساب، العنوان، الساعات، السوشيال)
                     →  copy.ar / copy.en   (كل النصوص بالعربية والإنجليزية)
                     →  appCategories       (قائمة تطبيقات أودو وتصنيفاتها)
```

1. **بيانات الشركة:** عدّل `siteConfig` (الاسم، الهاتف، البريد، واتساب، العنوان، روابط السوشيال).
2. **النصوص:** `copy.ar` هي النسخة المصدر و`copy.en` مقيّدة بنفس البنية (`const en: typeof ar`) — أي حقل تُضيفه بالعربية سيُطلب منك بالإنكليزية تلقائيًا (تحقّق نوعي).
3. **الأرقام والالتزامات:** عدّل الأرقام التسويقية (`60+ مشروع`, `97% رضا`, مدة كل مرحلة، أسعار الباقات الإرشادية) لتطابق واقع شركتك.
4. **آراء العملاء:** في `Testimonials.tsx` يوجد تعليق يوضّح أنها نصوص نموذجية بانتظار مراجع العملاء المعتمدة.
5. **الصور:** `public/hero-bg.jpg` و`public/cta-bg.jpg` خلفيات مجرّدة يمكن استبدالها بأي صور أخرى (أو أيقونات/شعارات العملاء).
6. **الأسعار الرسمية لأودو:** تُعرض في قسم الباقات كمعلومات مرجعية مع رابط `odoo.com/pricing` — حدّثها عند تغيّر أسعار أودو.

---

## الهوية والشعار / Brand identity

**الاسم:** `Aiodxy` — يُعرض في الهيدر والتذييل وبطاقة المشاركة، والشعار مدمج داخل الموقع (لا صورة خارجية) في `src/components/ui/Logo.tsx`.

**الشعار:** حرف **A** هندسي داخل مربّع كحلي، وعارضته شريحة تيركوازية — تجسيد بصري لـ «حرف الاسم الأول + شبكة مترابطة» بما يوافق هوية الموقع الكحلية/التيركوازية.

الملفات في `public/` (كلها متجهة SVG، حروف الكلمات محوّلة إلى مسارات فلا تحتاج خطًا مثبتًا):

| الملف | الاستخدام |
| --- | --- |
| `logo-lockup-ar.svg` · `logo-lockup-en.svg` | الشعار الكامل مع سطر التعريف (خلفيات فاتحة) |
| `logo-lockup-ar-reversed.svg` · `logo-lockup-en-reversed.svg` | نفس الشعار على الخلفيات الداكنة |
| `logo-mark.svg` · `logo-mark-reversed.svg` | الرمز فقط (بحجم كبير) |
| `favicon.svg` | أيقونة الموقع |
| `og-image.png` | بطاقة المشاركة 1200×630 |

**إعادة التوليد:** كل الملفات تُبنى من مصدر واحد هندسي:

```bash
npm run brand        # يحتاج: @resvg/resvg-js + fontkit + wawoff2 (موجودة في devDependencies)
```

الناتج: ملفات `public/` + معاينة مراجعة في `brand/aiodxy-brand-preview.png`. تُضبط الألوان من كائن `C` أعلى الملف، والنصوص من ثوابت `lockup()`.

## البنية / Structure

```
src/
├── App.tsx                    # ترتيب الأقسام
├── index.css                  # نظام التصميم (tokens، طبقات base/components، حركات)
├── i18n/
│   ├── content.ts             # كل النصوص + بيانات الشركة + كتالوج التطبيقات
│   └── LanguageContext.tsx    # إدارة اللغة والاتجاه (RTL/LTR) + تبديل عنوان الصفحة
├── components/
│   ├── ui/                    # Icon (47 أيقونة SVG)، Reveal، Counter، Section، FloatingActions
│   └── graphics/              # HeroDashboard، MiniPanels (4 إنفوجرافيك)، IntegrationDiagram
└── sections/                  # 16 قسمًا: Navbar، Hero، TrustStrip، Values، AppsShowcase،
                               # Integration، Platform، Services، Process، Industries، WhyUs،
                               # Editions، Pricing، Testimonials، FAQ، Contact، Footer
```

## ملاحظات تقنية / Technical notes

- **الاتجاه (RTL):** يُضبط `dir` و`lang` على عنصر `html` عند تبديل اللغة، ويُستخدم `text-start/end` و`ms/me` و`ps/pe` (خصائص منطقية) بدل `left/right` ليعمل التخطيط في الاتجاهين دون أي تكرار للأنماط.
- **الخطوط:** Cairo للعربية + Plus Jakarta Sans للاتينية، مضمّنة محليًا عبر `@fontsource` (لا طلبات على شبكات خارجية).
- **الأداء:** لا مكتبات أيقونات/حركة خارجية، الحركات عبر CSS و`IntersectionObserver`، مع احترام `prefers-reduced-motion`.
- **العلامات التجارية:** يوجد تنويه في التذييل يوضّح أن Odoo علامة تجارية لشركة Odoo S.A. وأن الموقع ليس الموقع الرسمي لأودو.
- **نموذج التواصل:** يعمل بالكامل من جهة العميل ويُرسل عبر البريد (`mailto`) — لتشغيله بمعالجة على الخادم، اربط `onSubmit` في `src/sections/Contact.tsx` بأي خدمة مثل Formspree أو نقطة نهاية API.
