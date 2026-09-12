import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowLeft, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const galleryImages = [
    "/p1.jpg",
    "/p2.jpg",
    "/p3.jpg",
    "/p4.jpg",
    "/p5.jpg",
    "/p6.jpg"
  ];

  const projects = [
    {
      title: "أفق المتانة للاستشارات الهندسية",
      category: "موقع مكتب هندسي",
      description:
        "تصميم وتطوير موقع تعريفي متكامل لمكتب هندسي في الرياض، يعرض خدمات التصميم المعماري والباقات والمشاريع وخدمات إصدار رخص البناء.",
      link: "https://www.ofoq-almatanah.com/"
    },
    {
      title: "Relaxation Time",
      category: "موقع خدمات وعناية",
      description:
        "موقع عصري لخدمات العناية والاسترخاء، بواجهة هادئة وتجربة استخدام سهلة تساعد العميل على استكشاف الخدمات والتواصل بسرعة.",
      link: "https://relaxation-time.vercel.app/"
    },
    {
      title: "موقع خدمات احترافي",
      category: "تصميم وتطوير ويب",
      description:
        "موقع متجاوب بتصميم حديث وتنظيم واضح للمحتوى، يعمل بكفاءة على أجهزة الكمبيوتر والهواتف المحمولة.",
      link: "https://project-ten-lac-91.vercel.app/"
    },
    {
      title: "Saftex",
      category: "موقع تعريفي",
      description:
        "موقع إلكتروني حديث بواجهة منظمة وسهلة الاستخدام، يقدّم المحتوى والخدمات بصورة واضحة ومتوافقة مع مختلف الشاشات.",
      link: "https://saftex-orcin.vercel.app/"
    },
    {
      title: "رفقة البقرة",
      category: "منصة إلكترونية",
      description:
        "منصة إلكترونية ذات طابع هادئ، صُممت لتقديم المحتوى بصورة واضحة وبسيطة مع سهولة التصفح عبر الجوال والكمبيوتر.",
      link: "https://refqat-albaqarah.vercel.app/"
    }
  ];

  const stores = [
    {
      title: "متجر الهدهد الخليجية",
      category: "متجر إلكتروني",
      description:
        "تطوير وتنظيم متجر إلكتروني لعرض المنتجات بطريقة واضحة، مع تحسين تجربة التسوق وسهولة الوصول إلى الأقسام والمنتجات.",
      link: "https://alhudhud-gcc.com/"
    },
    {
      title: "متجر هدهد إيليت",
      category: "متجر على منصة زد",
      description:
        "تصميم وتنظيم متجر متخصص في الأجهزة الإلكترونية، مع ترتيب الأقسام والمنتجات وتحسين المحتوى وتجربة المستخدم.",
      link: "https://hudhudelite.com/"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true
    });
  }, []);

  const handleOpen = (img) => {
    setCurrentImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImg("");
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header" data-aos="fade-down">
        <img
          src="/me.jpg"
          alt="هبه الله محمد النور"
          className="profile-img"
        />

        <h1>هبه الله محمد النور</h1>

        <p className="subtitle">
          Web & Mobile App Developer | SEO Specialist
        </p>

        <a
          className="cta"
          href="https://wa.me/966543519328"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          احجز الآن
        </a>
      </header>

      {/* About */}
      <section data-aos="fade-up">
        <h2>نبذة عني</h2>

        <p className="section-description">
          مطورة تطبيقات ومواقع حاصلة على بكالوريوس علوم الحاسب بمرتبة
          الشرف. أعمل على تطوير تطبيقات الأندرويد ومواقع الويب، وتصميم
          وتطوير المتاجر الإلكترونية على منصتي زد وسلة، وتحسين محركات
          البحث، وإدارة الحملات الإعلانية وتحليل البيانات.
        </p>
      </section>

      {/* Services */}
      <section data-aos="fade-up">
        <h2>خدماتي</h2>

        <div className="services">
          <div className="service-card" data-aos="zoom-in">
            <h3>تطوير مواقع الويب</h3>
            <p>
              تصميم مواقع احترافية متجاوبة مع جميع الأجهزة، مع الاهتمام
              بسرعة الموقع وسهولة الاستخدام.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3>تصميم متاجر زد وسلة</h3>
            <p>
              تصميم وتنظيم المتاجر الإلكترونية وصفحات المنتجات وتحسين
              تجربة التسوق.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3>تطوير تطبيقات أندرويد</h3>
            <p>
              تطوير تطبيقات أندرويد عملية وجذابة بأداء سلس وتوافقية
              عالية.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3>SEO وGoogle Ads</h3>
            <p>
              تحسين ظهور المواقع في نتائج البحث وإدارة الحملات للوصول
              إلى العملاء المستهدفين.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3>تحليل البيانات</h3>
            <p>
              تحليل البيانات واستخراج معلومات تساعد على تطوير الأعمال
              واتخاذ القرارات.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section data-aos="fade-up">
        <h2>مهاراتي</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Android</span>
          <span>متاجر زد</span>
          <span>متاجر سلة</span>
          <span>SEO</span>
          <span>Google Ads</span>
          <span>تحليل البيانات</span>
        </div>
      </section>

      {/* Projects */}
      <section data-aos="fade-up">
        <div className="section-heading">
          <h2>أعمالي في تصميم المواقع</h2>
          <p>مجموعة من المواقع والمنصات التي قمت بتصميمها وتطويرها.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              data-aos="fade-up"
              key={project.link}
            >
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                زيارة المشروع
                <FaArrowLeft />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Stores */}
      <section data-aos="fade-up">
        <div className="section-heading">
          <h2>أعمالي في متاجر زد وسلة</h2>
          <p>نماذج من المتاجر الإلكترونية التي عملت على تطويرها.</p>
        </div>

        <div className="projects-grid stores-grid">
          {stores.map((store) => (
            <article
              className="project-card store-card"
              data-aos="fade-up"
              key={store.link}
            >
              <span className="project-category">
                {store.category}
              </span>

              <h3>{store.title}</h3>

              <p>{store.description}</p>

              <a
                className="project-link"
                href={store.link}
                target="_blank"
                rel="noreferrer"
              >
                زيارة المتجر
                <FaArrowLeft />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section data-aos="fade-up">
        <div className="section-heading">
          <h2>نماذج من تصاميمي</h2>
          <p>اضغطي على أي تصميم لمشاهدته بالحجم الكامل.</p>
        </div>

        <div className="gallery">
          {galleryImages.map((img, index) => (
            <button
              type="button"
              className="gallery-button"
              onClick={() => handleOpen(img)}
              key={img}
              aria-label={`عرض نموذج التصميم ${index + 1}`}
            >
              <img
                src={img}
                alt={`نموذج تصميم ${index + 1}`}
              />

              <span className="gallery-overlay">
                عرض التصميم
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div className="lightbox">
          <button
            type="button"
            className="close-button"
            onClick={handleClose}
            aria-label="إغلاق الصورة"
          >
            <FaTimes />
          </button>

          <img
            src={currentImg}
            alt="معاينة التصميم"
          />
        </div>
      )}

      {/* WhatsApp */}
      <a
        className="whatsapp"
        href="https://wa.me/966543519328"
        target="_blank"
        rel="noreferrer"
        aria-label="التواصل عبر واتساب"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;
