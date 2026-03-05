import React, { useState } from "react";
import platformLogo from "./assets/platform-logo.png";
type SideBucket = "apps" | "games" | "worksheets" | "videos";

interface MathApp {
  id: string;
  title: string;
  description: string;
  url: string;
  bucket: SideBucket;
  badge?: string;
}

/* جميع العناصر (تطبيقات + ألعاب + أوراق عمل + فيديوهات) */
const APPS: MathApp[] = [
  // 📌 منصّة كاملة لجدول الضرب
  {
    id: "mul-platform-main",
    title: "منصّة جدول الضرب ٠–١٠",
    description:
      "منصّة متكاملة لتدريبات وألعاب واختبارات جداول الضرب من ٠ إلى ١٠.",
    url: "https://123456789fh.github.io/FH0-10/",
    bucket: "apps",
    badge: "منصّة كاملة",
  },

  // 📌 تطبيقات جداول الضرب
  {
    id: "mul-0-10",
    title: "جدول الضرب التفاعلي ٠–١٠",
    description:
      "تدريبات تفاعلية على جداول الضرب مع مساحات للإجابات وتغذية راجعة فورية.",
    url: "https://123456789fh.github.io/Multiplication-table/",
    bucket: "apps",
    badge: "جدول الضرب",
  },
  {
    id: "mul-1-3",
    title: "تعلّم جدول الضرب من ١ إلى ٣",
    description:
      "تطبيق تدريبي لتعلّم جداول الضرب من ١ إلى ٣ بخطوات متدرجة وممتعة.",
    url: "https://123456789fh.github.io/Multiplication-process/",
    bucket: "apps",
    badge: "جدول الضرب",
  },
  {
    id: "mul-3",
    title: "مغامرة جدول ٣",
    description:
      "تطبيق قصصي وتدريبات مركّزة على جدول الضرب في ٣ للصف الثالث الابتدائي.",
    url: "https://123456789fh.github.io/3---/",
    bucket: "apps",
    badge: "جدول الضرب",
  },
  {
    id: "mul-5",
    title: "مغامرة جدول الخمسة",
    description:
      "تدريبات تدرّجية على جدول الضرب في ٥ من خلال قصة وأنشطة تفاعلية.",
    url: "https://123456789fh.github.io/5--/",
    bucket: "apps",
    badge: "جدول الضرب",
  },
  {
    id: "mul-network",
    title: "جدول الضرب والشبكات",
    description:
      "تطبيق يربط بين جدول الضرب وتمثيله بالشبكات لتقريب المفهوم للطلاب والطالبات.",
    url: "https://123456789fh.github.io/Networks-in-the-multiplication-process/",
    bucket: "apps",
    badge: "جدول الضرب",
  },
  {
    id: "mul-test",
    title: "اختبار جدول الضرب",
    description:
      "اختبار تفاعلي على جداول الضرب المختارة مع نتيجة فورية للطالب أو الطالبة.",
    url: "https://123456789fh.github.io/Multiplication-table-/",
    bucket: "apps",
    badge: "اختبار",
  },

  // 🔢 مهارات وأعداد
  {
    id: "comparison-numbers",
    title: "المقارنة بين الأعداد",
    description:
      "تطبيق يساعد الطلاب على المقارنة بين الأعداد وترتيبها باستخدام تمثيلات مناسبة.",
    url: "https://123456789fh.github.io/Comparison-/",
    bucket: "apps",
    badge: "مهارة الأعداد",
  },
  {
    id: "approximation-numbers",
    title: "تقريب الأعداد",
    description:
      "تطبيق لتدريب الطلاب على تقريب الأعداد إلى أقرب عشرة أو مئة بطريقة تفاعلية.",
    url: "https://123456789fh.github.io/Approximation/",
    bucket: "apps",
    badge: "تقريب",
  },
  {
    id: "addition-basic",
    title: "تعلّم الجمع",
    description:
      "أنشطة تدرّجية لتعلّم عملية الجمع وفهم معناها باستخدام أمثلة بسيطة.",
    url: "https://123456789fh.github.io/Collection/",
    bucket: "apps",
    badge: "الجمع",
  },
  {
    id: "subtraction-zeros-app",
    title: "تعلّم الطرح مع الأصفار",
    description:
      "تطبيق يدرّب الطالب على الطرح مع وجود الأصفار بخطوات واضحة.",
    url: "https://123456789fh.github.io/Subtraction/",
    bucket: "apps",
    badge: "الطرح",
  },
  {
    id: "patterns-basic",
    title: "الأنماط",
    description:
      "تطبيق لتعرّف الأنماط العددية والشكليّة واستكمالها بطرق متنوعة.",
    url: "https://123456789fh.github.io/The-pattern1/",
    bucket: "apps",
    badge: "الأنماط",
  },
  {
    id: "patterns-review",
    title: "مراجعة درس الأنماط",
    description:
      "مراجعة تفاعلية لدرس الأنماط مع أسئلة متنوعة لترسيخ المفهوم.",
    url: "https://123456789fh.github.io/Review-/",
    bucket: "apps",
    badge: "مراجعة",
  },
  {
    id: "elapsed-time-calculator",
    title: "حاسبة الزمن المنقضي",
    description:
      "تطبيق يساعد الطلاب على حساب الزمن المنقضي بين حدثين باستخدام الساعة.",
    url: "https://123456789fh.github.io/Hour1/",
    bucket: "apps",
    badge: "الوقت",
  },
  {
    id: "estimate-sum-app",
    title: "تقدير نواتج الجمع",
    description:
      "تطبيق يدرّب على تقدير نواتج الجمع قبل إجراء العملية الدقيقة.",
    url: "https://123456789fh.github.io/The-approximation/",
    bucket: "apps",
    badge: "تقدير",
  },
  {
    id: "addition-properties-main",
    title: "خصائص الجمع",
    description:
      "عرض عام لخصائص الجمع الأساسية مع أمثلة تطبيقية.",
    url: "https://123456789fh.github.io/000/",
    bucket: "apps",
    badge: "خصائص الجمع",
  },
  {
    id: "addition-properties-1",
    title: "خصائص الجمع ١",
    description:
      "تدريبات تركز على الخاصية التجميعية والخاصية التبديلية للجمع.",
    url: "https://123456789fh.github.io/Addition-operation1/",
    bucket: "apps",
    badge: "خصائص الجمع",
  },
  {
    id: "addition-properties-2",
    title: "خصائص الجمع ٢",
    description:
      "أنشطة إضافية على خصائص الجمع من خلال مواقف حياتية.",
    url: "https://123456789fh.github.io/The-boy/",
    bucket: "apps",
    badge: "خصائص الجمع",
  },
  {
    id: "addition-properties-3",
    title: "خصائص الجمع ٣ / تقدير نواتج الجمع",
    description:
      "مزيج من أنشطة خصائص الجمع وتقدير نواتج الجمع في مواقف مختلفة.",
    url: "https://123456789fh.github.io/Estimating-the-sum/",
    bucket: "apps",
    badge: "خصائص الجمع",
  },
  {
    id: "verbal-form",
    title: "الصيغة اللفظية للأعداد",
    description:
      "تطبيق يحوّل بين الصيغة العددية واللفظية للأعداد بطريقة تفاعلية.",
    url: "https://123456789fh.github.io/The-verbal-form/",
    bucket: "apps",
    badge: "الصيغ",
  },
  {
    id: "approximation-calculator",
    title: "حاسبة تقريب العدد",
    description:
      "حاسبة تساعد الطلاب على تقريب الأعداد إلى أقرب عشرة أو مئة بشكل سريع.",
    url: "https://123456789fh.github.io/Approximation-Calculator/",
    bucket: "apps",
    badge: "حاسبة",
  },
  {
    id: "prime-factors",
    title: "العوامل الأولية",
    description:
      "تطبيق يدرّب الطالب على تحليل الأعداد إلى عواملها الأولية بخطوات منظمة.",
    url: "https://123456789fh.github.io/Prime-factors--/",
    bucket: "apps",
    badge: "عوامل أولية",
  },
  {
    id: "interactive-review-multi",
    title: "تهيئة تفاعلية من ثالث إلى سادس",
    description:
      "مراجعة رياضيات تفاعلية لكل صف من ثالث إلى سادس لتهيئة الفصل الأول.",
    url: "https://123456789fh.github.io/Interactive-preparation-questions/",
    bucket: "apps",
    badge: "تهيئة",
  },
  {
  id: "review-grade3",
  title: "مراجعة تفاعلية الصف الثالث",
  description: "مراجعة تفاعلية للصف الثالث الابتدائي (الفصل الدراسي الأول).",
  url: "https://123456789fh.github.io/math-review-grade3-/",
  bucket: "apps",
  badge: "مراجعة",
},
{
  id: "maze-game",
  title: "لعبة المتاهات",
  description: "لعبة متاهات ممتعة لتنمية التركيز وربط المهارة بالإجابة الصحيحة.",
  url: "https://123456789fh.github.io/Maze-game/",
  bucket: "games",
  badge: "لعبة",
},


  // 📌 أوراق عمل / القيمة المنزلية وحل المسألة
  {
    id: "place-value-training",
    title: "تدريبات على القيمة المنزلية – ف١ (أبطال نافس)",
    description:
      "أنشطة وتدريبات تفاعلية على القيمة المنزلية ضمن مبادرة أبطال نافس.",
    url: "https://123456789fh.github.io/The-place-value-of-numbers/",
    bucket: "worksheets",
    badge: "القيمة المنزلية",
  },
  {
    id: "place-value-application",
    title: "تطبيق القيمة المنزلية",
    description:
      "تطبيق تفاعلي يعزّز فهم الطلاب للقيمة المنزلية باستخدام أنشطة متنوعة.",
    url: "https://123456789fh.github.io/Application-/",
    bucket: "worksheets",
    badge: "القيمة المنزلية",
  },
  {
    id: "solve-problem-review",
    title: "مراجعة مهارة حل المسألة",
    description:
      "تدريبات على خطوات حل المسألة ومسار التفكير الصحيح في مسائل الرياضيات.",
    url: "https://ensanbinadam.github.io/12345/",
    bucket: "worksheets",
    badge: "حل المسألة",
  },
  {
    id: "exam-certificate-3-1-1",
    title: "اختبر نفسك واحصل على شهادة إنجاز – ثالث ابتدائي ف١",
    description:
      "اختبار تفاعلي في رياضيات الصف الثالث الفصل الأول مع إمكانية الحصول على شهادة إنجاز.",
    url: "https://123456789fh.github.io/3-1-1/",
    bucket: "worksheets",
    badge: "شهادة إنجاز",
  },

  // 🎮 الألعاب التعليمية
  {
    id: "game-wordwall-1",
    title: "لعبة جدول الضرب – Wordwall",
    description:
      "لعبة تفاعلية على Wordwall لتمرين الطلاب على جدول الضرب بطريقة ممتعة.",
    url: "https://wordwall.net/play/101947/773/350",
    bucket: "games",
    badge: "لعبة",
  },
  {
    id: "game-rounding-3-3",
    title: "لعبة التقريب – ٣-٣",
    description: "لعبة تفاعلية لتدريب الطلاب على تقريب الأعداد.",
    url: "https://123456789fh.github.io/3-3/",
    bucket: "games",
    badge: "لعبة",
  },
  {
    id: "game-place-value-2",
    title: "لعبة القيمة المنزلية",
    description:
      "لعبة تفاعلية تركّز على فهم القيمة المنزلية للأعداد بطريقة ممتعة.",
    url: "https://123456789fh.github.io/2/",
    bucket: "games",
    badge: "لعبة",
  },
  {
    id: "game-generic-1",
    title: "لعبة رياضيات تفاعلية",
    description:
      "لعبة تفاعلية في الرياضيات تناسب طلاب الصف الثالث الابتدائي.",
    url: "https://123456789fh.github.io/1/",
    bucket: "games",
    badge: "لعبة",
  },
  {
    id: "game-wordwall-place-value",
    title: "لعبة القيمة المنزلية – Wordwall",
    description:
      "لعبة على Wordwall لتعزيز فهم القيمة المنزلية للأعداد بطريقة شيقة.",
    url: "https://wordwall.net/play/96648/477/264",
    bucket: "games",
    badge: "لعبة",
  },
  {
  id: "game-perimeter-shape",
  title: "لعبة المحيط",
  description:
    "تدريب تفاعلي على حساب محيط الشكل بجمع أطوال الأضلاع (الزوايا لا تُحسب).",
  url: "https://123456789fh.github.io/Perimeter-of-the-shape-/",
  bucket: "games",
  badge: "لعبة",
},
{
  id: "game-area-shape",
  title: "لعبة المساحة",
  description: "تدريب تفاعلي على إيجاد مساحة الشكل بعدّ المربعات.",
  url: "https://123456789fh.github.io/Area-of-the-shape/",
  bucket: "games",
  badge: "لعبة",
},
{
  id: "game-balance-division",
  title: "لعبة ميزان القسمة",
  description: "تدريب على القسمة عبر الموازنة والتحقق من صحة الناتج.",
  url: "https://123456789fh.github.io/The-Balance-Game/",
  bucket: "games",
  badge: "لعبة",
},
{
  id: "game-maze-division",
  title: "لعبة المتاهة (القسمة)",
  description: "حل مسائل القسمة لاجتياز المتاهة بطريقة ممتعة.",
  url: "https://123456789fh.github.io/Maze-Game-/",
  bucket: "games",
  badge: "لعبة",
},
{
  id: "game-distribute-equally",
  title: "لعبة وزّع بالتساوي",
  description: "نشاط تفاعلي لفهم معنى القسمة كتوزيع متساوٍ.",
  url: "https://123456789fh.github.io/Activity/",
  bucket: "games",
  badge: "لعبة",
},
{
  id: "game-multiplication-division",
  title: "استمتع مع القسمة والضرب",
  description: "أنشطة وتمارين متنوعة لتثبيت مهارات الضرب والقسمة.",
  url: "https://123456789fh.github.io/Multiplication---Division/",
  bucket: "games",
  badge: "لعبة",
},
  {
  id: "game-clock-time",
  title: "تعلم الساعة والوقت",
  description: "تطبيق تفاعلي لتعلّم قراءة الساعة وضبط الوقت بشكل ممتع.",
  url: "https://123456789fh.github.io/The-clock-/",
  bucket: "games",
  badge: "لعبة",
},

  // 🎥 مقاطع فيديو وقصص تعليمية (YouTube)
  {
    id: "video-math-importance-table",
    title: "أهمية حفظ جدول الضرب",
    description: "مقطع تعليمي يوضح أهمية حفظ جدول الضرب في حياتنا اليومية.",
    url: "https://youtu.be/qDUbz47Wk0s?feature=shared",
    bucket: "videos",
    badge: "فيديو تعليمي",
  },
  {
    id: "video-subtraction-zeros",
    title: "الطرح مع وجود الأصفار",
    description: "شرح مبسّط للطرح مع وجود الأصفار بطريقة واضحة للصغار.",
    url: "https://youtu.be/Fwnpp-BfaQ4?si=XpvTb09Dbc6JtHRs",
    bucket: "videos",
    badge: "فيديو تعليمي",
  },
  {
    id: "video-importance-math",
    title: "أهمية الرياضيات",
    description: "مقطع يوضّح أهمية مادة الرياضيات في الحياة والعلوم المختلفة.",
    url: "https://youtu.be/uQTimvnr1i0?si=z2Mg8aMsRbfmBgCl",
    bucket: "videos",
    badge: "فيديو توعوي",
  },
  {
    id: "video-compare-order",
    title: "المقارنة والترتيب",
    description: "شرح مهارة مقارنة الأعداد وترتيبها باستخدام أمثلة بسيطة.",
    url: "https://youtu.be/NxnsAFyaB14?si=iee0HQrplYHHt13p",
    bucket: "videos",
    badge: "فيديو مهارة",
  },
  {
    id: "video-inside-book",
    title: "نظرة داخل كتاب رياضيات الصف الثالث",
    description:
      "جولة سريعة في كتاب الرياضيات للصف الثالث الابتدائي وشرح محتوياته.",
    url: "https://youtu.be/lHpPsqxkoWI?si=xA430uVem5tpXIkN",
    bucket: "videos",
    badge: "عرض كتاب",
  },
  {
    id: "video-place-value",
    title: "القيمة المنزلية",
    description:
      "شرح مفهوم القيمة المنزلية للأعداد مع أمثلة مناسبة للصف الثالث.",
    url: "https://youtu.be/rZ0juxRMRfU?si=dC5JyskYJMhHRKTJ",
    bucket: "videos",
    badge: "فيديو مهارة",
  },
  {
    id: "video-round-fractions",
    title: "تقريب الكسور",
    description: "مقطع يوضح طريقة تقريب الكسور بخطوات سهلة وواضحة.",
    url: "https://youtu.be/uO20aEr3j6w?si=xVMg38S3urqXju8T",
    bucket: "videos",
    badge: "فيديو مهارة",
  },
  {
    id: "video-mass-capacity",
    title: "الكتلة والسعة في النظام المتري",
    description:
      "شرح الكتلة والسعة ووحداتها في النظام المتري مع أمثلة من الحياة اليومية.",
    url: "https://youtu.be/lDKqQTlujiw?si=W89C1V5nEHlyxCqM",
    bucket: "videos",
    badge: "فيديو تعليمي",
  },
  {
    id: "video-metric-length-units",
    title: "وحدات الطول المترية",
    description:
      "تعريف وشرح وحدات الطول في النظام المتري وكيفية التحويل بينها.",
    url: "https://youtu.be/IMbfGc05oMQ?si=Y7HbI2NT-Ts-lSlg",
    bucket: "videos",
    badge: "فيديو وحدات",
  },
  {
    id: "video-symmetry",
    title: "التماثل",
    description:
      "مقطع يوضّح مفهوم التماثل في الأشكال الهندسية باستخدام أمثلة مرئية.",
    url: "https://youtu.be/a_-9zS0SIVE?si=Fnz1Bi-vegWEtMN4",
    bucket: "videos",
    badge: "فيديو هندسة",
  },
  {
    id: "video-metric-length",
    title: "الطول في النظام المتري",
    description: "شرح الطول في النظام المتري وعلاقته بوحدات القياس المختلفة.",
    url: "https://youtu.be/_KSQ9hLReM8?si=PQmnabZY7QflUzIz",
    bucket: "videos",
    badge: "فيديو قياس",
  },
  {
    id: "video-fraction-convert",
    title: "تحويل الكسور",
    description:
      "فيديو يوضّح كيفية تحويل الكسور بين صور مختلفة بطريقة مبسطة.",
    url: "https://youtu.be/g3p0YDSmYnY?si=VAC28NGaXJd51uIy",
    bucket: "videos",
    badge: "فيديو مهارة",
  },
  {
    id: "video-virtual-exhibition",
    title: "معرض افتراضي للرياضيات",
    description:
      "مقطع يعرض معرضًا افتراضيًا يربط الرياضيات بحياة الطالب والبيئة المحيطة.",
    url: "https://youtu.be/WKm0Ize4F8k?si=_SfPhe6s-2Ma65-6",
    bucket: "videos",
    badge: "معرض افتراضي",
  },
];

const SIDE_SECTIONS: { id: SideBucket; title: string; description: string }[] = [
  {
    id: "apps",
    title: "التطبيقات التفاعلية",
    description: "جميع التطبيقات وأدوات التدريب في الرياضيات.",
  },
  {
    id: "games",
    title: "الألعاب التعليمية",
    description: "ألعاب تفاعلية تعزز مهارات الرياضيات لدى الطلاب.",
  },
  {
    id: "worksheets",
    title: "أوراق العمل والمهارات",
    description: "أوراق عمل رقمية للقيمة المنزلية والمهارات الأخرى.",
  },
  {
    id: "videos",
    title: "مقاطع فيديو وقصص تعليمية",
    description: "شروحات وقصص تعليمية في الرياضيات للصف الثالث.",
  },
];

const App: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<MathApp | null>(null);
  const [openSideSection, setOpenSideSection] =
    useState<SideBucket | null>("apps");

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app-shell" dir="rtl">
      {/* الشريط العلوي */}
      <header className="top-bar">
        <div className="top-bar-left">
         <img src={platformLogo} alt="شعار المنصة" className="logo" />
          <div>
            <h1 className="site-title">منصّة رياضيات الصف الثالث الابتدائي</h1>
            <p className="site-subtitle">
              تطبيقات تفاعلية في الرياضيات – للمعلمين/المعلمات والطلاب/الطالبات
            </p>
          </div>
        </div>

        <nav className="nav">
          <button onClick={() => scrollToId("hero")} className="nav-link">
            الرئيسية
          </button>

          {/* زر خاص بمنصّة FH0-10 */}
          <button
            onClick={() =>
              window.open("https://123456789fh.github.io/FH0-10/", "_blank")
            }
            className="nav-link"
          >
            منصّة جدول الضرب
          </button>
          
{/* 📊 تقارير عمل  */}
<button
  onClick={() =>
    window.open("https://123456789fh.github.io/Reports-Product/", "_blank")
  }
  className="nav-link"
>
  تقارير
</button>
          <button onClick={() => scrollToId("about")} className="nav-link">
            عن المنصّة
          </button>
          <button onClick={() => scrollToId("forms")} className="nav-link">
            الاستبانة
          </button>
          <button onClick={() => scrollToId("side-nav")} className="nav-link">
            التبويب الجانبي
          </button>
        </nav>
      </header>

      <main>
        <div className="content-layout">
          {/* العمود الرئيسي */}
          <div className="content-main">
            {/* قسم الترحيب */}
            <section id="hero" className="hero">
              <div className="hero-grid">
                <div className="hero-main">
                  <span className="hero-badge">
                    متوافق مع رؤية المملكة 2030 والتحوّل الرقمي في التعليم
                  </span>
                  <h2 className="hero-title">
                    تعلّم ممتع، تفاعل حيّ، ورياضيات قريبة من واقع طلاب الصف الثالث 💚
                  </h2>
                  <p className="hero-subtitle">
                    تجمع المنصّة بين التطبيقات التفاعلية، وأساليب المعالجة التعليمية
                    للفاقد، واستبانات قياس الأثر؛ لتدعم المعلم/المعلمة في تطبيق منهج
                    الرياضيات بطريقة ميسّرة وجذّابة.
                  </p>

                  <div className="hero-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() => scrollToId("side-nav")}
                    >
                      تصفّح التطبيقات من التبويب الجانبي
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => scrollToId("about")}
                    >
                      تعرّف على رؤية ورسالة المنصّة
                    </button>
                  </div>
                </div>

                <div className="hero-side">
                  <div className="hero-card">
                    <h3>كيف يستفيد المعلم/المعلمة؟</h3>
                    <ul>
                      <li>استخدام التطبيقات في الحصة كأنشطة جماعية أو فردية.</li>
                      <li>إرسال الروابط كواجب منزلي للطلاب والطالبات.</li>
                      <li>قياس الفاقد التعليمي قبل الدرس وبعده.</li>
                      <li>
                        ربط نتائج الطلاب باستبانة قياس أثر التطبيقات في تحسين فهم
                        المفاهيم الرياضية.
                      </li>
                    </ul>
                  </div>

                  <div className="hero-card hero-card-soft">
                    <h4>فكرة عامة عن المنصّة</h4>
                    <p>
                      المنصّة صُمِّمت لتكون بوابة موحّدة لتطبيقات أ/ فاطمة هزازي في
                      الرياضيات للصف الثالث الابتدائي؛ بحيث يمكن للمعلم/المعلمة
                      والطلاب الوصول للتطبيقات بسهولة من مكان واحد.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* قسم الرؤية والرسالة والأهداف */}
            <section id="about" className="section">
              <div className="section-header">
                <h2>عن المنصّة – الرؤية والرسالة والأهداف</h2>
                <p>
                  مساحة تعريفية توضّح الأساس الذي تنطلق منه منصّة رياضيات الصف
                  الثالث الابتدائي.
                </p>
              </div>

              <div className="about-grid">
                <div>
                  <h3>الرؤية</h3>
                  <p>
                    أن تكون منصّة رياضيات الصف الثالث نموذجًا مبسّطًا للتحوّل الرقمي
                    في التعليم، تدعم المعلم/المعلمة في تقديم تعلّم تفاعلي ممتع يرفع
                    نواتج التعلّم في مادة الرياضيات.
                  </p>

                  <h3>الرسالة</h3>
                  <p>
                    تقديم تطبيقات وأدوات رقمية تفاعلية من تصميم وبرمجة أ/ فاطمة
                    هزازي، مرتبطة بأهداف وزارة التعليم ورؤية المملكة 2030 في بناء
                    جيل متقن لمهارات الرياضيات الأساسية.
                  </p>
                </div>
                <div>
                  <h3>الأهداف</h3>
                  <ul className="list">
                    <li>معالجة الفاقد التعليمي في مهارات الأساس.</li>
                    <li>تقديم بدائل رقمية لأنشطة الكتاب المدرسي.</li>
                    <li>تمكين المعلمين من أدوات سهلة وسريعة الاستخدام.</li>
                    <li>إشراك الطلاب في تعلّم نشط وممتع ومتنوع.</li>
                    <li>
                      تعميق ارتباط الطلاب بالرياضيات من خلال قصص وألعاب ومقاطع
                      تعليمية.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* قسم الاستبانة بكرت مستقل */}
            <section id="forms" className="section section-soft">
              <div className="section-header">
                <h2>استبانة قياس أثر التطبيقات</h2>
                <p>
                  استبانة رقمية تدعم عمل المعلم/المعلمة في قياس أثر استخدام
                  التطبيقات التعليمية في تحسين فهم المفاهيم الرياضية لدى الطلاب
                  والطالبات.
                </p>
              </div>

              <div className="forms-card">
                <div className="forms-icon">📊</div>
                <div className="forms-content">
                  <h3>استبانة أثر التطبيقات التعليمية</h3>
                  <p>
                    تفضلي بالدخول إلى نموذج الاستبانة للإجابة على مجموعة من الأسئلة
                    التي تقيس مدى استفادة الطلاب من التطبيقات الرقمية في درس
                    الرياضيات.
                  </p>
                  <a
                    href="https://forms.office.com/r/pr8P9GZ6gm?origin=lprLink"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-small btn-primary forms-button"
                  >
                    فتح الاستبانة في تبويب جديد
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* الشريط الجانبي على اليمين */}
          <aside id="side-nav" className="side-nav">
            <h2 className="side-nav-title">التبويب الجانبي</h2>
            <p className="side-nav-subtitle">
              وصول سريع للتطبيقات، الألعاب، أوراق العمل ومقاطع الفيديو التعليمية.
            </p>

            {SIDE_SECTIONS.map((section) => {
              const items = APPS.filter((app) => app.bucket === section.id);
              const isOpen = openSideSection === section.id;

              return (
                <div key={section.id} className="side-nav-group">
                  <button
                    type="button"
                    className="side-nav-header"
                    onClick={() =>
                      setOpenSideSection(isOpen ? null : section.id)
                    }
                  >
                    <div>
                      <div className="side-nav-header-title">
                        {section.title}
                      </div>
                      <div className="side-nav-header-desc">
                        {section.description}
                      </div>
                    </div>
                    <span
                      className={`side-nav-chevron ${isOpen ? "open" : ""}`}
                    >
                      ▾
                    </span>
                  </button>

                  {isOpen && (
                    <div className="side-nav-body">
                      {items.length === 0 && (
                        <p className="side-nav-empty">لا توجد عناصر حاليًا.</p>
                      )}
                      {items.length > 0 && (
                        <ul className="side-nav-list">
                          {items.map((app) => (
                            <li key={app.id}>
                              <button
                                type="button"
                                className="side-nav-item"
                                onClick={() => setSelectedApp(app)}
                              >
                                <span className="side-nav-item-title">
                                  {app.title}
                                </span>
                                {app.badge && (
                                  <span className="side-nav-item-badge">
                                    {app.badge}
                                  </span>
                                )}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </aside>
        </div>
      </main>

      {/* التذييل */}
      <footer className="footer">
        <p>
          جميع الحقوق محفوظة © {new Date().getFullYear()} – برمجة: أ/ فاطمة هزازي –
          ملتقى معلمي ومعلمات الرياضيات – ملتقى التعليم التفاعلي
        </p>
      </footer>

      {/* نافذة تفاصيل التطبيق / الفيديو */}
      {selectedApp && (
        <div
          className="app-modal-overlay"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="app-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedApp.badge && (
              <span className="app-modal-badge">
                {selectedApp.badge}
              </span>
            )}
            <h3 className="app-modal-title">{selectedApp.title}</h3>
            <p className="app-modal-description">
              {selectedApp.description}
            </p>
            <div className="app-modal-actions">
              <a
                href={selectedApp.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-small btn-primary"
              >
                فتح في تبويب جديد
              </a>
              <button
                type="button"
                className="btn btn-small btn-secondary"
                onClick={() => setSelectedApp(null)}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
