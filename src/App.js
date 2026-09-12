import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
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
      title: "مكتب أفق المتاهة للاستشارات الهندسية",
      description:
        "موقع احترافي لمكتب هندسي يعرض الخدمات والمشاريع ويساعد العملاء على التواصل بسهولة.",
      link: "https://www.ofoq-almatanah.com/"
    },
    {
      title: "Relaxation Time",
      description:
        "موقع لخدمات العناية والاسترخاء بتصميم هادئ وجذاب وتجربة استخدام سهلة.",
      link: "https://relaxation-time.vercel.app/"
    },
    {
      title: "المشروع الأول",
      description:
        "تصميم وتطوير موقع ويب احترافي ومتوافق مع مختلف أحجام الشاشات.",
      link: "https://project-ten-lac-91.vercel.app/"
    },
    {
      title: "Saftex",
      description:
        "موقع إلكتروني حديث بتصميم منظم وسهل الاستخدام ومتوافق مع أجهزة الجوال والكمبيوتر.",
      link: "https://saftex-orcin.vercel.app/"
    },
    {
      title: "رفقة البقرة",
      description:
        "منصة إلكترونية بتجربة استخدام واضحة وواجهة متوافقة مع مختلف الأجهزة.",
      link: "https://refqat-albaqarah.vercel.app/"
    }
  ];

  const stores = [
    {
      title: "متجر الهدهد الخليجية",
      description:
        "تصميم وتطوير متجر إلكتروني احترافي لعرض المنتجات بصورة واضحة وتوفير تجربة تسوق سهلة.",
      link: "https://alhudhud-gcc.com/"
    },
    {
      title: "متجر هدهد إيليت",
      description:
        "متجر إلكتروني احترافي مع تنظيم المنتجات وتحسين تجربة المستخدم وسهولة الوصول إلى المنتجات.",
      link: "https://hudhudelite.com/"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
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
          💬 احجز الآن
        </a>
      </header>

      {/* About */}
      <section data-aos="fade-up">
        <h2>نبذة عني</h2>

        <p>
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
            <h3>تطوير مواقع ويب</h3>
            <p>
              تصميم مواقع احترافية متوافقة مع جميع الأجهزة وتحسين تجربة
              المستخدم.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3>تصميم متاجر زد وسلة</h3>
            <p>
              تصميم وتطوير متاجر إلكترونية احترافية مع تنظيم المنتجات
              وتحسين تجربة التسوق.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3>تطوير تطبيقات أندرويد</h3>
            <p>
              تطبيقات أندرويد عملية وجذابة مع أداء سلس وتوافقية عالية.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3>تحسين محركات البحث وGoogle Ads</h3>
            <p>
              رفع ظهور موقعك في نتائج البحث وجذب العملاء المستهدفين.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3>تحليل البيانات</h3>
            <p>
              تحليل البيانات واستخراج المعلومات التي تساعد على اتخاذ
              القرارات المناسبة.
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
          <span>تصميم متاجر زد</span>
          <span>تصميم متاجر سلة</span>
          <span>SEO</span>
          <span>Google Ads</span>
          <span>تحليل البيانات</span>
        </div>
      </section>

      {/* Projects */}
      <section data-aos="fade-up">
        <h2>أعمالي في تصميم المواقع</h2>

        {projects.map((project, index) => (
          <div
            className="project-card"
            data-aos="fade-up"
            key={project.link}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              عرض المشروع
            </a>
          </div>
        ))}
      </section>

      {/* Stores */}
      <section data-aos="fade-up">
        <h2>أعمالي في متاجر زد وسلة</h2>

        {stores.map((store) => (
          <div
            className="project-card"
            data-aos="fade-up"
            key={store.link}
          >
            <h3>{store.title}</h3>

            <p>{store.description}</p>

            <a
              href={store.link}
              target="_blank"
              rel="noreferrer"
            >
              زيارة المتجر
            </a>
          </div>
        ))}
      </section>

      {/* Gallery */}
      <section data-aos="fade-up">
        <h2>نماذج من تصاميمي</h2>

        <div className="gallery">
          {galleryImages.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`نموذج تصميم ${index + 1}`}
              onClick={() => handleOpen(img)}
            />
          ))}
        </div>
      </section>

      {/* Image Preview */}
      {open && (
        <div
          className="lightbox"
          onClick={handleClose}
          role="presentation"
        >
          <img
            src={currentImg}
            alt="معاينة التصميم"
            onClick={(event) => event.stopPropagation()}
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
