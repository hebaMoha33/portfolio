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
            <h3>تطوير مواقع ويب</h3>

            <p>
              تصميم مواقع احترافية متوافقة مع جميع الأجهزة
              وتحسين تجربة المستخدم.
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
              تطبيقات أندرويد عملية وجذابة مع الأداء السلس
              والتوافقية العالية.
            </p>
          </div>

          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3>تحسين محركات البحث وGoogle Ads</h3>

            <p>
              رفع ظهور موقعك في نتائج البحث وجذب عملاء مستهدفين.
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
              على اتخاذ القرارات المناسبة.
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

        {/* المشروع القديم الأول */}
        <div className="project-card" data-aos="fade-up">
          <h3>مكتب أفق المتاهة للاستشارات الهندسية</h3>

          <p>
            موقع احترافي لمكتب هندسي، يعرض الخدمات والمشاريع
            ويساعد العملاء على التواصل بسهولة.
          </p>

          <a
            href="https://www.ofoq-almatanah.com/"
            target="_blank"
            rel="noreferrer"
          >
            عرض المشروع
          </a>
        </div>

        {/* المشروع القديم الثاني */}
        <div className="project-card" data-aos="fade-up">
          <h3>Relaxation Time</h3>

          <p>
            موقع إلكتروني احترافي بتصميم هادئ وجذاب،
            مع تجربة استخدام سهلة ومتوافقة مع مختلف الأجهزة.
          </p>

          <a
            href="https://relaxation-time.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            عرض المشروع
          </a>
        </div>

        {/* المشروع الجديد الأول */}
        <div className="project-card" data-aos="fade-up">
          <h3>المشروع الأول</h3>

          <p>
            تصميم وتطوير موقع ويب احترافي ومتوافق
            مع مختلف أحجام الشاشات.
          </p>

          <a
            href="https://project-ten-lac-91.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            عرض المشروع
          </a>
        </div>

        {/* المشروع الجديد الثاني */}
        <div className="project-card" data-aos="fade-up">
          <h3>Saftex</h3>

          <p>
            موقع إلكتروني حديث بتصميم منظم وسهل الاستخدام،
            ومتوافق مع أجهزة الجوال والكمبيوتر.
          </p>

          <a
            href="https://saftex-orcin.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            عرض المشروع
          </a>
        </div>

        {/* المشروع الجديد الثالث */}
        <div className="project-card" data-aos="fade-up">
          <h3>رفقة البقرة</h3>

          <p>
            منصة إلكترونية بتجربة استخدام بسيطة
            وواجهة متوافقة مع مختلف الأجهزة.
          </p>

          <a
            href="https://refqat-albaqarah.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            عرض المشروع
          </a>
        </div>
      </section>

      {/* Zid and Salla Stores */}
      <section data-aos="fade-up">
        <h2>أعمالي في متاجر زد وسلة</h2>

        <div className="project-card" data-aos="fade-up">
          <h3>متجر الهدهد الخليجية</h3>

          <p>
            تصميم وتطوير متجر إلكتروني احترافي لعرض المنتجات
            بصورة واضحة وتوفير تجربة تسوق سهلة.
          </p>

          <a
            href="https://alhudhud-gcc.com/"
            target="_blank"
            rel="noreferrer"
          >
            زيارة المتجر
          </a>
        </div>

        <div className="project-card" data-aos="fade-up">
          <h3>متجر هدهد إيليت</h3>

          <p>
            متجر إلكتروني احترافي مع تنظيم المنتجات
            وتحسين تجربة المستخدم وسهولة الوصول إلى المنتجات.
          </p>

          <a
            href="https://hudhudelite.com/"
            target="_blank"
            rel="noreferrer"
          >
            زيارة المتجر
          </a>
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

      {/* Image Preview */}
      {open && (
        <div className="lightbox" onClick={handleClose}>
          <img
            src={currentImg}
            alt="معاينة التصميم"
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
