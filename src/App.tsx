import React, { useState } from "react";

type Category = "all" | "multiplication" | "skills" | "forms";

interface MathApp {
  id: string;
  title: string;
  description: string;
  url: string;
  category: Category;
  badge?: string;
}

const APPS: MathApp[] = [
  {
    id: "mul-0-10",
    title: "جدول الضرب التفاعلي ٠–١٠",
    description:
      "تدريبات تفاعلية على جداول الضرب مع مساحات للإجابات وتغذية راجعة فورية.",
    url: "https://123456789fh.github.io/Multiplication-table/",
    category: "multiplication",
    badge: "جدول الضرب",
  },
  {
    id: "mul-3",
    title: "مغامرة جدول ٣",
    description:
      "تطبيق قصصي وتدريبات مركّزة على جدول الضرب في ٣ للصف الثالث الابتدائي.",
    url: "https://123456789fh.github.io/3---/",
    category: "multiplication",
    badge: "جدول الضرب",
  },
  {
    id: "mul-5",
    title: "مغامرة جدول الخمسة",
    description:
      "تدريبات تدرّجية على جدول الضرب في ٥ من خلال قصة وأنشطة تفاعلية.",
    url: "https://123456789fh.github.io/5--/",
    category: "multiplication",
    badge: "جدول الضرب",
  },
  {
    id: "mul-network",
    title: "جدول الضرب والشبكات",
    description:
      "تطبيق يربط بين جدول الضرب وتمثيله بالشبكات لتقريب المفهوم للطلاب والطالبات.",
    url: "https://123456789fh.github.io/Networks-in-the-multiplication-process/",
    category: "multiplication",
    badge: "جدول الضرب",
  },
  {
    id: "mul-test",
    title: "اختبار جدول الضرب",
    description:
      "اختبار تفاعلي على جداول الضرب المختارة مع نتيجة فورية للطالب أو الطالبة.",
    url: "https://123456789fh.github.io/Multiplication-table-/",
    category: "multiplication",
    badge: "اختبار",
  },
  {
    id: "place-value",
    title: "القيمة المنزلية والعددية",
    description:
      "أنشطة لفهم الآحاد والعشرات والمئات باستخدام تمثيلات بصرية مناسبة للصغار.",
    url: "https://123456789fh.github.io/Place-value/",
    category: "skills",
    badge: "مهارات أساسية",
  },
  {
    id: "apps-impact-form",
    title: "استبانة أثر التطبيقات",
    description:
      "استبانة رقمية لقياس أثر استخدام التطبيقات التعليمية في تحسين فهم المفاهيم الرياضية.",
    url: "https://forms.office.com/r/pr8P9GZ6gm?origin=lprLink",
    category: "forms",
    badge: "استبانة",
  },
];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedApp, setSelectedApp] = useState<MathApp | null>(null);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // فلترة حسب التصنيف
  const categoryFiltered =
    activeCategory === "all"
      ? APPS
      : APPS.filter((app) => app.category === activeCategory);

  // فلترة حسب البحث
  const filteredApps = categoryFiltered.filter((app) => {
    if (!searchTerm.trim()) return true;
    const haystack = (app.title + " " + app.description).toLowerCase();
    return haystack.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app-shell" dir="rtl">
      {/* الشريط العلوي */}
      <header className="top-bar">
        <div className="top-bar-left">
          <img src="/hf-logo.png" alt="شعار HF" className="logo" />
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
          <button onClick={() => scrollToId("apps")} className="nav-link">
            التطبيقات
          </button>
          <button onClick={() => scrollToId("forms")} className="nav-link">
            الاستبانة
          </button>
          <button onClick={() => scrollToId("about")} className="nav-link">
            عن المنصّة
          </button>
        </nav>
      </header>

      <main>
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
                  onClick={() => scrollToId("apps")}
                >
                  ابدأ بتطبيقات جدول الضرب
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => scrollToId("about")}
                >
                  تعرّف على فكرة المنصّة
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat-card">
                  <div className="stat-number">٥+</div>
                  <div className="stat-label">تطبيقات لجدول الضرب</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">مهارات</div>
                  <div className="stat-label">القيمة المنزلية والعددية</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">استبانة</div>
                  <div className="stat-label">لقياس أثر التطبيقات</div>
                </div>
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

        {/* قسم التطبيقات */}
        <section id="apps" className="section">
          <div className="section-header">
            <h2>تطبيقات الرياضيات التفاعلية</h2>
            <p>اختاري التصنيف المناسب أو استخدمي البحث لعرض التطبيقات.</p>
          </div>

          {/* شريط البحث */}
          <div className="apps-toolbar">
            <input
              type="text"
              className="apps-search"
              placeholder="ابحث باسم التطبيق أو المهارة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* أزرار الفلترة */}
          <div className="chips">
            <button
              className={`chip ${activeCategory === "all" ? "chip--active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              جميع التطبيقات
            </button>
            <button
              className={`chip ${
                activeCategory === "multiplication" ? "chip--active" : ""
              }`}
              onClick={() => setActiveCategory("multiplication")}
            >
              جداول الضرب والاختبارات
            </button>
            <button
              className={`chip ${
                activeCategory === "skills" ? "chip--active" : ""
              }`}
              onClick={() => setActiveCategory("skills")}
            >
              مهارات أخرى
            </button>
            <button
              className={`chip ${
                activeCategory === "forms" ? "chip--active" : ""
              }`}
              onClick={() => {
                setActiveCategory("forms");
                scrollToId("forms");
              }}
            >
              الاستبانة
            </button>
          </div>

          {/* شبكة البطاقات */}
          <div className="apps-grid">
            {filteredApps.map((app) => (
              <article
                key={app.id}
                className="app-card"
                onClick={() => setSelectedApp(app)}
              >
                {app.badge && (
                  <span className="app-badge">{app.badge}</span>
                )}
                <h3 className="app-title">{app.title}</h3>
                <p className="app-description">{app.description}</p>
                <div className="app-footer">
                  <button
                    type="button"
                    className="btn btn-small btn-secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedApp(app);
                    }}
                  >
                    تفاصيل التطبيق
                  </button>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-small btn-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    فتح التطبيق في تبويب جديد
                  </a>
                </div>
              </article>
            ))}

            {filteredApps.length === 0 && (
              <p className="empty-text">
                لا توجد تطبيقات مطابقة لخيارات الفلترة / البحث الحالية.
              </p>
            )}
          </div>
        </section>

        {/* قسم الاستبانة */}
        <section id="forms" className="section section-soft">
          <div className="section-header">
            <h2>استبانة قياس أثر التطبيقات</h2>
            <p>
              رابط للاستبانة التي تدعم عمل المعلم/المعلمة في قياس أثر استخدام
              التطبيقات التعليمية في تحسين فهم المفاهيم الرياضية.
            </p>
          </div>
          <ul className="list">
            <li>
              <strong>استبانة أثر التطبيقات التعليمية:</strong> لقياس أثر
              استخدام التطبيقات في تحسين فهم المفاهيم الرياضية لدى الطلاب
              والطالبات.
            </li>
          </ul>
        </section>

        {/* عن المنصّة */}
        <section id="about" className="section">
          <div className="section-header">
            <h2>عن المنصّة ورؤيتها</h2>
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
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* التذييل */}
      <footer className="footer">
        <p>
          جميع الحقوق محفوظة © {new Date().getFullYear()} – برمجة: أ/ فاطمة
          هزازي – ملتقى معلمي ومعلمات الرياضيات – ملتقى التعليم التفاعلي
        </p>
      </footer>

      {/* نافذة تفاصيل التطبيق */}
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
                فتح التطبيق في تبويب جديد
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
