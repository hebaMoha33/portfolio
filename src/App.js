import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const galleryImages = [
    '/p1.jpg',
    '/p2.jpg',
    '/p3.jpg',
    '/p4.jpg',
    '/p5.jpg',
    '/p6.jpg'
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
    setCurrentImg('');
  };

  return (
    <div className="container">

      {/* Header */}
      <header data-aos="fade-down" className="header">
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
          مطورة تطبيقات ومواقع حاصلة على بكالوريوس علوم الحاسب
          بمرتبة الشرف. أعمل على تطوير تطبيقات الأندرويد ومواقع الويب،
          وتصميم وتطوير المتاجر الإلكترونية على منصتي زد وسلة،
          وتحسين محركات البحث، وإدارة الحملات الإعلانية وتحليل البيانات.
        </p>
      </section>

      {/* Services */}
      <section data-aos="fade-up">
        <h2>خدماتي</h2>

        <div className="services">
          <div className="service-card" data-aos="zoom-in">
            <h3>تطوير مواقع الويب</h3>
            <p>
              تصميم وتطوير مواقع احترافية متوافقة مع جميع الأجهزة،
              مع الاهتمام بسرعة الموقع وسهولة الاستخدام.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3>تصميم متاجر زد وسلة</h3>
            <p>
              تصميم وتطوير متاجر إلكترونية احترافية على منصتي زد وسلة،
              مع تنظيم المنتجات وتحسين تجربة التسوق.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3>تطوير تطبيقات أندرويد</h3>
            <p>
              تطوير تطبيقات أندرويد عملية وجذابة، بأداء سلس
              وتوافقية عالية.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3>تحسين محركات البحث وGoogle Ads</h3>
            <p>
              تحسين ظهور المواقع في نتائج البحث وإدارة الحملات
              الإعلانية للوصول إلى العملاء المستهدفين.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3>تحليل البيانات</h3>
            <p>
              تحليل البيانات واستخراج المعلومات التي تساعد
              على تطوير الأعمال واتخاذ القرارات المناسبة.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section data-aos="fade-up">
        <h2>مهاراتي</h2>

        <div className="services">
          <div className="service-card">
            <h3>تطوير المواقع والتطبيقات</h3>
            <p>
              HTML، CSS، JavaScript، React وتطوير تطبيقات أندرويد.
            </p>
          </div>

          <div className="service-card">
            <h3>المتاجر الإلكترونية</h3>
            <p>
              تصميم وتطوير متاجر زد وسلة وتنظيم صفحات المنتجات.
            </p>
          </div>

          <div className="service-card">
            <h3>التسويق والتحليل</h3>
            <p>
              تحسين محركات البحث، Google Ads وتحليل البيانات.
            </p>
          </div>
        </div>
      </section>

      {/* Web Projects */}
      <section data-aos="fade-up">
        <h2>أعمالي في تصميم المواقع</h2>

        <div className="services">
          <div className="service-card" data-aos="zoom-in">
            <h3>المشروع الأول</h3>

            <p>
              تصميم وتطوير موقع ويب احترافي ومتوافق
              مع مختلف أحجام الشاشات.
            </p>

            <a
              className="cta"
              href="https://project-ten-lac-91.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              عرض المشروع
            </a>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3>Saftex</h3>

            <p>
              موقع إلكتروني حديث بتصميم منظم وسهل الاستخدام،
              ومتوافق مع أجهزة الجوال والكمبيوتر.
            </p>

            <a
              className="cta"
              href="https://saftex-orcin.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              عرض المشروع
            </a>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3>رفقة البقرة</h3>

            <p>
              منصة إلكترونية بتجربة استخدام بسيطة وواجهة متوافقة
              مع مختلف الأجهزة.
            </p>

            <a
              className="cta"
              href="https://refqat-albaqarah.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              عرض المشروع
            </a>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3>مكتب أفق المتاهة للاستشارات الهندسية</h3>

            <p>
              موقع احترافي لمكتب هندسي، يعرض الخدمات والمشاريع
              ويساعد العملاء على التواصل بسهولة.
            </p>

            <a
              className="cta"
              href="https://www.shiarchitecture.com/"
              target="_blank"
              rel="noreferrer"
            >
              عرض المشروع
            </a>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3>منصة رفقاء</h3>

            <p>
              تصميم وتطوير منصة إلكترونية بواجهة حديثة
              وتجربة استخدام واضحة.
            </p>

            <a
              className="cta"
              href="https://refqat-albaqarah.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              عرض المشروع
            </a>
          </div>
        </div>
      </section>

      {/* Zid and Salla Stores */}
      <section data-aos="fade-up">
        <h2>أعمالي في متاجر زد وسلة</h2>

        <div className="services">
          <div className="service-card" data-aos="zoom-in">
            <h3>متجر الهدهد الخليجية</h3>

            <p>
              تصميم وتطوير متجر إلكتروني لعرض المنتجات بصورة واضحة،
              مع تجربة تسوق سهلة ومتوافقة مع الجوال.
            </p>

            <a
              className="cta"
              href="https://alhudhud-gcc.com/"
              target="_blank"
              rel="noreferrer"
            >
              زيارة المتجر
            </a>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3>متجر هدهد إيليت</h3>

            <p>
              متجر إلكتروني احترافي مع تنظيم المنتجات
              وتحسين تجربة المستخدم والوصول إلى المنتجات بسهولة.
            </p>

            <a
              className="cta"
              href="https://hudhudelite.com/"
              target="_blank"
              rel="noreferrer"
            >
              زيارة المتجر
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section data-aos="fade-up">
        <h2>نماذج من تصاميمي</h2>

        <div className="gallery">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`نموذج تصميم ${index + 1}`}
              onClick={() => handleOpen(img)}
            />
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {open && (
        <div
          className="modal"
          onClick={handleClose}
          role="button"
          tabIndex={0}
        >
          <span className="close">&times;</span>

          <img
            src={currentImg}
            alt="معاينة التصميم"
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      {/* WhatsApp Button */}
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
