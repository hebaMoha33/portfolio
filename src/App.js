import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
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
      <header data-aos="fade-down" className="header">
        <img src="/me.jpg" alt="هبه الله محمد النور" className="profile-img"/>
        <h1>هبه الله محمد النور</h1>
        <p className="subtitle">Web & Mobile App Developer | SEO Specialist</p>
        <a className="cta" href="https://wa.me/966543519328" target="_blank" rel="noreferrer">💬 احجز الآن</a>
      </header>

      {/* About */}
      <section data-aos="fade-up">
        <h2>نبذة عني</h2>
        <p>
          مطورة تطبيقات ومواقع حاصلة على بكالوريوس علوم الحاسب بمرتبة الشرف.
          أعمل على تطوير تطبيقات الأندرويد ومواقع الويب، تحسين محركات البحث،
          إدارة الحملات الإعلانية وتحليل البيانات.
        </p>
      </section>

      {/* Services */}
      <section data-aos="fade-up">
        <h2>خدماتي</h2>
        <div className="services">
          <div className="service-card" data-aos="zoom-in">
            <h3>تطوير مواقع ويب</h3>
            <p>تصميم مواقع احترافية متوافقة مع جميع الأجهزة وتحسين تجربة المستخدم.</p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>تطوير تطبيقات أندرويد</h3>
            <p>تطبيقات أندرويد عملية وجذابة مع الأداء السلس والتوافقية العالية.</p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>تحسين محركات البحث & Google Ads</h3>
            <p>رفع ظهور موقعك في البحث وجذب عملاء مستهدفين.</p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>تحليل البيانات</h3>
            <p>استخراج بيانات دقيقة لاتخاذ قرارات ذكية وتحسين الأداء الرقمي.</p>
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
          <span>SEO</span>
          <span>Google Ads</span>
          <span>Data Analysis</span>
        </div>
      </section>

      {/* Projects */}
      <section data-aos="fade-up">
        <h2>أعمالي</h2>
        <div className="project-card" data-aos="fade-right">
          <h3>Ofoq Almatanah</h3>
          <p>
            موقع احترافي لشركة استشارات هندسية في الرياض، يعرض الباقات والخدمات بطريقة تسويقية تساعد العميل على اتخاذ القرار بسرعة.
          </p>
          <a href="https://www.ofoq-almatanah.com/" target="_blank" rel="noreferrer">زيارة الموقع</a>
        </div>

        <div className="project-card" data-aos="fade-left">
          <h3>Relaxation Time</h3>
          <p>
            موقع لخدمة المساج المنزلي، تصميم هادئ يعكس الراحة والفخامة، مع إبراز آراء العملاء لزيادة الثقة.
          </p>
          <a href="https://relaxation-time.vercel.app/" target="_blank" rel="noreferrer">زيارة الموقع</a>
        </div>
      </section>

      {/* Gallery */}
      <section data-aos="fade-up">
        <h2>تصاميم يمكنني تنفيذها</h2>
        <div className="gallery">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              onClick={() => handleOpen(img)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div className="lightbox" onClick={handleClose}>
          <img src={currentImg} alt="" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a className="whatsapp" href="https://wa.me/966543519328" target="_blank" rel="noreferrer">
        <FaWhatsapp size={28} />
      </a>

    </div>
  );
}

export default App;