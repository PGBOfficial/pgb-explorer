# تغییرات PGB Explorer — ۲۶ نوامبر ۲۰۲۶

ادامه همان ZIP ارسالی، بدون ساخت پروژه جدید یا تغییر Runtime/شبکه.

- پیش‌فرض RPC و fallback به WSS رسمی اصلاح شد؛ IP قدیمی از config حذف شد. انتخاب قبلی کاربر و سایر شبکه‌ها حفظ شده‌اند.
- لینک GitHub منو/فوتر به PGBOfficial تغییر کرد؛ Built on Polkadot از فوتر نمایشی حذف و انتساب Apache-2.0/Polkadot.js Apps در NOTICE و مستندات حفظ شد.
- Midnight، Pearl، CSS، موج داده، Hero و لوگوی موجود عیناً حفظ شدند. حلقه لوزی‌دار سمت راست در اجزای این ورودی وجود نداشت؛ عنصر دیگری به جای آن حذف نشد.
- سه وصله امنیتی محدود: elliptic 6.5.4→6.6.1، sha.js 2.4.11→2.4.12 و cipher-base 1.0.4→1.0.6. resolutions و رکوردهای لازم yarn.lock به‌روزرسانی شدند؛ فایل Lock حفظ و install --immutable دوباره موفق شد.
- کد حساب، بازیابی، امضا، ذخیره کلید، RPC core، palletها و مسیرهای عملیاتی حذف/بازنویسی نشدند. اثر وصله کتابخانه‌ها بر ورودی نامعتبر عمدی است؛ ورودی معتبر با regression بررسی شد.
- metadata مخزن ریشه و workspaceها به PGBOfficial/pgb-explorer اصلاح شد؛ نام فنی و نسخه بسته‌ها حفظ شدند.
- README انگلیسی/فارسی، راهنمای شروع، NOTICE، گزارش امنیت، گزارش تست و snapshot audit افزوده/به‌روزرسانی شدند.
- workflowهای انتشار/تأیید خودکار اصلی در مسیر غیرفعال upstream-notices/workflows آرشیو و CI فقط‌خواندنی تست/Build افزوده شد.
- .gitignore تکمیل شد؛ gallery، validation و فهرست تغییرات تولیدی قدیمی از بسته انتشار کنار رفتند. کش، node_modules و خروجی‌های موقت بسته نمی‌شوند.
- Build واقعی و ۳٬۳۷۳ تست قبل/بعد موفق؛ WSS و خواندن داده واقعی شبکه موفق؛ محدودیت Chrome و mock بودن تست Signer صریحاً در گزارش ثبت شده است.
- GitHub و سرورهای فعال تغییر نکردند.

## فایل‌های مبنای تغییر‌یافته

- `yarn.lock`
- `.gitignore`
- `PGB-START-HERE.md`
- `README.md`
- `package.json`
- `packages/page-nfts/package.json`
- `packages/react-signer/package.json`
- `packages/page-accounts/package.json`
- `packages/page-ambassador/package.json`
- `packages/page-bounties/package.json`
- `packages/page-assets/package.json`
- `packages/page-parachains/package.json`
- `packages/page-utilities/package.json`
- `packages/react-params/package.json`
- `packages/page-addresses/package.json`
- `packages/react-hooks/package.json`
- `packages/page-staking2/package.json`
- `packages/page-fellowship/package.json`
- `packages/page-staking-async/package.json`
- `packages/page-runtime/package.json`
- `packages/page-staking-legacy/package.json`
- `packages/page-poll/package.json`
- `packages/page-claims/package.json`
- `packages/page-rpc/package.json`
- `packages/page-society/package.json`
- `packages/page-ranked/package.json`
- `packages/apps-electron/package.json`
- `packages/page-sudo/package.json`
- `packages/page-signing/package.json`
- `packages/page-membership/package.json`
- `packages/page-js/package.json`
- `packages/page-council/package.json`
- `packages/apps/package.json`
- `packages/page-staking/package.json`
- `packages/page-nis/package.json`
- `packages/react-components/package.json`
- `packages/test-support/package.json`
- `packages/page-treasury/package.json`
- `packages/apps-config/package.json`
- `packages/page-democracy/package.json`
- `packages/page-explorer/package.json`
- `packages/page-contracts/package.json`
- `packages/page-tech-comm/package.json`
- `packages/react-api/package.json`
- `packages/page-collator/package.json`
- `packages/page-preimages/package.json`
- `packages/apps-routing/package.json`
- `packages/page-scheduler/package.json`
- `packages/page-referenda/package.json`
- `packages/page-whitelist/package.json`
- `packages/page-calendar/package.json`
- `packages/page-gilt/package.json`
- `packages/react-query/package.json`
- `packages/page-extrinsics/package.json`
- `packages/page-broker/package.json`
- `packages/page-storage/package.json`
- `packages/page-settings/package.json`
- `packages/page-files/package.json`
- `packages/page-coretime/package.json`
- `packages/page-alliance/package.json`
- `packages/apps/public/pgb-config.js`
- `packages/apps/src/initSettings.ts`
- `packages/apps/src/Menu/index.tsx`
- `packages/apps/src/brand/Footer.tsx`

## فایل‌های حذف/آرشیو‌شده از مسیر اولیه

- `PGB-Explorer-Gallery.html`
- `PGB-modified-files.json`
- `VALIDATION.txt`
- `.github/workflows/test-nightly.yml`
- `.github/workflows/lock.yml`
- `.github/workflows/pr-any.yml`
- `.github/workflows/push-master.yml`
- `.github/workflows/auto-approve.yml`
- `.github/workflows/auto-merge.yml`
- `.github/workflows/chain-endpoints.yml`

فایل‌های workflow در مسیر آرشیو موجودند؛ فایل‌های Gallery/VALIDATION/PGB-modified-files فقط خروجی/گزارش قدیمی بودند. فایل‌های جدید شامل README-fa.md، NOTICE، UPSTREAM-README.md، سه گزارش نهایی، audit/، verify.yml و آرشیو workflowها هستند.
