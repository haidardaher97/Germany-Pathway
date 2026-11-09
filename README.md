# طريقك إلى ألمانيا — موقع ثابت (عربي)
HTML/CSS/JS فقط، بدون build أو backend. المسارات نسبية فيعمل على `https://USER.github.io/REPO/` مباشرة.

## التعديل
كل المحتوى في `js/data.js` (النصوص، الخدمات، الرقم، البريد). الصور في `assets/` (رسومات SVG أصلية)؛ لاستخدام صور حقيقية ضع ملفاتها في `assets/` وبدّل `src` في `index.html`.

## نموذج التواصل
أنشئ نموذجاً مجانياً على https://formspree.io والصق رابطه في `formEndpoint`.

## التشغيل محلياً
`python3 -m http.server 8000` ثم افتح http://localhost:8000

## النشر
ارفع إلى `main`، ثم Settings → Pages → Source: **GitHub Actions**. (المستودع يجب أن يكون عاماً في الخطة المجانية.)
