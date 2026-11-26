# اکسپلورر PGB

توزیع برندشده [Polkadot.js Apps](https://github.com/polkadot-js/apps) برای **Persian Gulf Blockchain Testnet**. نمایش زنده بلاک، تراکنش و رویداد؛ مدیریت حساب و امکانات دارایی، استیکینگ، حاکمیت و خزانه متناسب با Runtime متصل.

[English](README.md) · [سایت](https://persiangulfchain.com) · [اکسپلورر](https://explorer.persiangulfchain.com) · [GitHub](https://github.com/PGBOfficial) · [گزارش مشکل](https://github.com/PGBOfficial/pgb-explorer/issues)

## شبکه

| مورد | مقدار |
|---|---|
| نام | Persian Gulf Blockchain Testnet |
| RPC | wss://rpc.persiangulfchain.com |
| توکن | PGC |
| اعشار | ۱۸ |
| SS58 | ۴۲ |

PGB پیش‌فرض پروفایل جدید است. پارامتر صریح ?rpc= و انتخاب ذخیره‌شده کاربر طبق رفتار اصلی اولویت دارند. برای تغییر انتخاب قدیمی، endpoint رسمی را انتخاب یا لینک `/?rpc=wss://rpc.persiangulfchain.com#/explorer` را باز کنید. برای تغییر شبکه، فضای ذخیره حساب‌ها را پاک نکنید. مشخصات و قابلیت‌ها از زنجیره متصل خوانده می‌شوند؛ Runtime یا تنظیم بلاکچین توسط این پروژه تغییر نمی‌کند.

## پیش‌نیاز و ساخت سورس

Node.js حداقل ۱۸.۱۴، Corepack و Yarn نسخه 4.6.0؛ فایل Yarn ثابت و yarn.lock همراه سورس هستند. برای CI موجود، محیط Node 24 استفاده شود.

```sh
corepack enable
ELECTRON_SKIP_BINARY_DOWNLOAD=1 yarn install --immutable
yarn build:images
yarn build:www
```

متغیر ELECTRON_SKIP_BINARY_DOWNLOAD از دانلود غیرضروری برنامه دسکتاپ Electron برای ساخت وب جلوگیری می‌کند؛ قابلیت و سورس Electron حفظ شده‌اند. در PowerShell ویندوز ابتدا `$env:ELECTRON_SKIP_BINARY_DOWNLOAD='1'` و سپس `yarn install --immutable` را اجرا کنید.

خروجی production در packages/apps/build است. تست‌های موجود با yarn test اجرا می‌شوند. نتیجه واقعی و محدودیت این تحویل در FINAL-TEST-REPORT.md است؛ Build موفق، اثبات تراکنش امضاشده یا همه ماژول‌های Runtime نیست.

## اجرای محلی

برای توسعه:

```sh
yarn start
```

برای پیش‌نمایش خروجی ازپیش‌ساخته:

```sh
node scripts/pgb-serve.cjs
```

نشانی http://localhost:3000/#/explorer را باز کنید. سرور همراه فقط روی loopback گوش می‌دهد و برای پیش‌نمایش محلی است، نه سرور عمومی. ZIP نهایی Build فایل‌های آماده میزبانی دارد؛ ZIP سورس به نصب وابستگی و Build نیاز دارد.

## استقرار

محتوای packages/apps/build را در ریشه میزبان فایل ایستای HTTPS قرار دهید. مسیرهای برنامه مبتنی بر hash هستند و router سمت سرور لازم ندارند. نام chunkها و اطلاعات subresource integrity را تغییر ندهید. برای index.html، env-config.js و pgb-config.js کش قدیمی نگه ندارید؛ دارایی hashدار می‌تواند کش immutable داشته باشد. پیش‌فرض سورس در packages/apps/public/pgb-config.js حفظ شود. هیچ رمز، کلید یا اعتبارنامه‌ای در تنظیم مرورگر نگذارید. HTTPS و WSS رسمی را استفاده کنید. این تحویل هیچ deploy یا push انجام نمی‌دهد.

## طراحی و امکانات

پالت Midnight/Pearl، چیدمان، لوگوی PGB و موج داده متحرک حفظ شده‌اند. فوتر به سازمان PGBOfficial و سایت رسمی اشاره می‌کند. پیاده‌سازی اصلی حساب، امضا، RPC و صفحات وابسته به Runtime حفظ شده است. موجودبودن Assets، Staking، Governance و Treasury به palletهای زنجیره بستگی دارد و پس از ارتقای Runtime ممکن است تغییر کند.

PGB Signer از API استاندارد تزریق افزونه پشتیبانی می‌کند. افزونه تأییدشده را به‌کار ببرید، origin اکسپلورر را بررسی و مجاز کنید و پیش از امضا، شبکه، مقصد، مبلغ و کارمزد تخمینی را ببینید. امضای موفق به معنی اجرای موفق نیست؛ finalized و رویدادها را کنترل کنید. بررسی این سورس به وجه یا کلید واقعی کاربر نیاز ندارد.

## امنیت و حریم خصوصی

این محصول آزمایشی تست‌نت است. از حساب موقت، عبارت بازیابی و پشتیبان رمزگذاری‌شده محافظت کنید و اطلاعات محرمانه در issue یا لاگ نفرستید. داده زنجیره عمومی است. حساب مرورگر و افزونه مجاز، رفتار اصلی ذخیره و امضا را دارند. انتخاب شبکه‌های دیگر، لینک سرویس‌های عمومی و یکپارچه‌سازی‌های اختیاری حفظ شده‌اند؛ مقصد و endpoint انتخابی را بررسی کنید. اصلاح تأییدشده، هشدار وابستگی و محدودیت حل‌نشده در SECURITY-AUDIT.md است. تست موفق گواهی امنیت مستقل نیست.

## مجوز و انتساب

مجوز Apache-2.0 در LICENSE، NOTICE، سربرگ‌ها و UPSTREAM-README.md حفظ شده است. مبنا، نسخه 0.171.2-12-x ارسالی Polkadot.js Apps است؛ commit اصلی در ZIP ورودی نبود. این توزیع تغییریافته PGB است، نه انتشار رسمی Polkadot.js. نام فنی بسته‌ها و وابستگی‌ها حفظ شده‌اند. workflowهای انتشار اصلی در upstream-notices/workflows آرشیو و غیرفعال‌اند؛ CI فعلی فقط تست/Build می‌گیرد.

مخزن مقصد https://github.com/PGBOfficial/pgb-explorer است. انتشار خودکار وجود ندارد؛ پیش از تأیید، گزارش امنیت و تست را بخوانید.
