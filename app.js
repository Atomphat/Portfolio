// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (hamburger && menu){
  hamburger.addEventListener('click', () => menu.classList.toggle('open'));
}

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href');
  const el = document.querySelector(id);
  if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
}));

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if (e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Project modal data (with bilingual desc)
const PROJECTS = {
 p1: {
  title: 'Random Food App',
  img: "https://i.ibb.co/Pzgqg17Y/Screenshot-20250518-184026.png",
  tech: ['.NET MAUI', 'C#', 'Android'],
  // คำอธิบายสั้น (การ์ด)
  desc_EN: 'Android app built with .NET MAUI that randomly suggests what to eat today—simple, fast, and fun.',
  desc_TH: 'แอป Android ทำด้วย .NET MAUI สำหรับสุ่มว่า “วันนี้จะกินอะไรดี” ใช้ง่าย เร็ว และสนุก',
  // คำอธิบายยาว (ในโมดอล)
  long_EN: 'A cross-platform mobile app (Android) built with .NET MAUI. Tap to get random meal ideas, save favorites, and reshuffle instantly. Designed for quick daily decisions.',
  long_TH: 'แอปมือถือ (Android) พัฒนาด้วย .NET MAUI แตะเพื่อสุ่มเมนู เก็บรายการโปรด และสุ่มใหม่ได้ทันที ออกแบบให้ตัดสินใจมื้ออาหารได้ไวทุกวัน',
  // ลิงก์: ใส่ของจริงเมื่อพร้อม (เช่น GitHub / APK / Play Store)
  links: [
    { label:'APK',  href:'#', disabled:true },
    { label:'Code', href:'#', disabled:true }
  ]
},

  p2: {
    title: 'E-commerce Prototype',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600',
    desc_EN: 'A car e-commerce prototype built with HTML, CSS, and JavaScript, demonstrating front-end programming and interactive features',
    desc_TH: 'ต้นแบบเว็บ E-commerce ซื้อขายรถยนต์ พัฒนาด้วย HTML, CSS, และ JavaScript แสดงความสามารถด้านการเขียนโปรแกรมฝั่ง Front-end และการทำงานแบบโต้ตอบ',
    links:[ {label:'Case Study', href:'#', disabled:true}, {label:'Figma', href:'#', disabled:true} ]
  },
  p3: {
    title: 'Develope chatbot',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600',
    desc_EN: 'Developed a prototype chatbot using Python and the Typhoon 2.1 (Gemma) model with voice input/output. The system allows Thai Social Security members to ask questions about their rights and benefits, then receive natural language answers. This project highlights skills in AI integration, NLP, and conversational interface development.',
    desc_TH: 'พัฒนาต้นแบบแชทบอทด้วย Python โดยใช้โมเดล Typhoon 2.1 (Gemma) รองรับการป้อนข้อมูลและตอบกลับด้วยเสียง ผู้ประกันตนสามารถสอบถามสิทธิประโยชน์ประกันสังคมและได้รับคำตอบอัตโนมัติ โครงการนี้แสดงทักษะด้านการเชื่อมต่อ AI การประมวลผลภาษาธรรมชาติ (NLP) และการสร้างอินเทอร์เฟซโต้ตอบแบบสนทนา',
    links:[ {label:'Live', href:'#', disabled:true}, {label:'Code', href:'#', disabled:true} ]
  }
};

// Modal logic
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalLinks = document.getElementById('modalLinks');

function openProject(id){
  const p = PROJECTS[id];
  if (!p) return;
  modalImg.src = p.img;
  modalTitle.textContent = p.title;
  const lang = (document.querySelector('html').dataset.lang || 'EN').toUpperCase();
  modalDesc.textContent = lang==='TH' ? (p.desc_TH||p.desc_EN) : p.desc_EN;
  modalLinks.innerHTML = '';
  p.links.forEach(l=>{
    const a = document.createElement('a');
    a.textContent = l.label;
    a.className = 'btn ghost small';
    if (l.disabled) { a.href = '#'; a.setAttribute('aria-disabled','true'); }
    else { a.href = l.href; a.target = '_blank'; a.rel = 'noreferrer'; }
    modalLinks.appendChild(a);
  });
  if (typeof modal.showModal === 'function') modal.showModal();
}

Array.from(document.querySelectorAll('[data-readmore]')).forEach(btn=>{
  btn.addEventListener('click', ()=> openProject(btn.dataset.readmore));
});
document.getElementById('modalClose')?.addEventListener('click', ()=> modal.close());

// i18n dictionary (TH/EN) — no parentheses; values switch cleanly
const I18N = {
  EN: {
    title: 'Atom Portfolio',
    brand:'Atom',
    nav_home:'Home', nav_about:'About', nav_projects:'Projects', nav_skills:'Skills', nav_contact:'Contact',
    hero_tag:'🚀 Full stack developer', hero_hi:'Hi, I’m', hero_name:'Phatthana Pomthong',
    hero_lead:'Computer Science student at Bangkok University. I am passionate about coding and web application development. I sharpen my skills by building real projects with HTML, CSS, JavaScript, Python, and .NET MAUI, focusing on writing clean code and creating practical solutions.',
    btn_see_projects:'See Projects',
    currently:'Currently', cur_1:'Building a sky-blue portfolio', cur_2:'Experimenting with micro-interactions', cur_3:'Open to internships',

    about_title:'About Me',
    about_name:'Name', about_name_val:'Phatthana Pomthong',
    about_nick:'Nickname', about_nick_val:'Atom',
    about_role:'Role', about_role_val:'Developer',
    about_loc:'Location', about_loc_val:'Ayutthaya, Thailand',
    about_age:'Age', about_age_val:'22',
    about_edu:'Education', about_edu_val:'Computer Science, Bangkok University',

    soft:'Soft Skills',
    soft_1:'Teamwork',
    soft_2:'Fast learner',
    soft_3:'On-the-spot problem solving',
    soft_4:'English communication',
    soft_5:'Resilient & punctual',

    hard:'Hard Skills',
    hard_1:'Python — Basic',
    hard_2:'HTML — Basic',
    hard_3: 'CSS / JavaScript — Beginner',
    hard_4: '.NET MAUI — Basic',
    hard_5: 'Git/GitHub, Figma — Proficient',

    proj_title:'Projects', chip_web:'Application', chip_ui:'UI', chip_algo:'Chatbot', read_more:'Read more',

    skills_title:'Skills', skills_fe:'Front-End:', skills_fe_val:'HTML, CSS, JS, a11y',
    skills_uiux:'UI/UX:', skills_uiux_val:'Wireframing, Prototyping, Design systems',
    skills_tools:'Tools:', skills_tools_val:'Figma, Git/GitHub, Vite, CodeSandbox',

    contact_title:'Contact',
    label_name:'Name', label_email:'Email', label_msg:'Message',
    btn_send:'Send', elsewhere:'Elsewhere',
    footer_name:'Atomphat', footer_built:'Built with ♥'
  },
  TH: {
    title:'แฟ้มสะลมผลงานของ พัฒนะ',
    brand:'Atom',
    nav_home:'หน้าแรก', nav_about:'เกี่ยวกับ', nav_projects:'ผลงาน', nav_skills:'ทักษะ', nav_contact:'ติดต่อ',
    hero_tag:'🚀 Full stack developer', hero_hi:'สวัสดี ผมคือ', hero_name:'พัฒนะ ป้อมทอง',
    hero_lead:'นักศึกษาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยกรุงเทพ สนใจการเขียนโปรแกรมและพัฒนาเว็บแอปพลิเคชัน ผมฝึกฝนทักษะผ่านการสร้างโปรเจกต์จริง ทั้ง HTML, CSS, JavaScript, Python และ .NET MAUI เพื่อยกระดับทักษะด้านการเขียนโค้ดและสร้างผลงานที่ใช้ได้จริง',
    btn_see_projects:'ดูผลงาน',
    currently:'ตอนนี้', cur_1:'กำลังทำพอร์ตธีมฟ้าสดใส', cur_2:'ลองไมโครอินเทอร์แอคชัน', cur_3:'เปิดรับฝึกงาน',

    about_title:'เกี่ยวกับฉัน',
    about_name:'ชื่อ', about_name_val:'พัฒนะ ป้อมทอง',
    about_nick:'ชื่อเล่น', about_nick_val:'อะตอม',
    about_role:'บทบาท', about_role_val:'นักพัฒนา',
    about_loc:'ที่อยู่', about_loc_val:'พระนครศรีอยุธยา, ไทย',
    about_age:'อายุ', about_age_val:'22',
    about_edu:'การศึกษา', about_edu_val:'วิทยาการคอมพิวเตอร์ มหาวิทยาลัยกรุงเทพ',

    soft:'Soft Skills',
    soft_1:'ทำงานเป็นทีมได้ดี',
    soft_2:'เรียนรู้ไว',
    soft_3:'แก้ปัญหาหน้างานได้',
    soft_4:'สื่อสารภาษาอังกฤษได้',
    soft_5:'อดทน ตรงต่อเวลา',

    hard:'Hard Skills',
    hard_1:'Python — พื้นฐาน',
    hard_2:'HTML — พื้นฐาน',
    hard_3:'CSS / JavaScript — เบื้องต้น',
    hard_4:'.NET MAUI — พื้นฐาน',
    hard_5:'Git/GitHub, Figma - ชำนาญ',

    proj_title:'ผลงาน', chip_web:'แอปพลิเคชัน', chip_ui:'UI', chip_algo:'แชทบอท', read_more:'อ่านต่อ',

    skills_title:'ทักษะ', skills_fe:'Front-End:', skills_fe_val:'HTML, CSS, JS, a11y',
    skills_uiux:'UI/UX:', skills_uiux_val:'Wireframing, Prototyping, Design systems',
    skills_tools:'เครื่องมือ:', skills_tools_val:'Figma, Git/GitHub, Vite, CodeSandbox',

    contact_title:'ติดต่อ',
    label_name:'ชื่อ', label_email:'อีเมล', label_msg:'ข้อความ',
    btn_send:'ส่งข้อความ', elsewhere:'ช่องทางอื่น',
    footer_name:'Atomphat', footer_built:'สร้างด้วยใจ ♥'
  }
};

const translations = {
  EN: {
    cert_title: "Certificates",
    cert_chatbot_title: "Python Chatbot Development",
    cert_chatbot_desc: "Certificate in using Python to develop chatbots",
    cert_cyber_title: "Cybersecurity Basics",
    cert_cyber_desc: "Certificate in fundamental Cybersecurity knowledge",
  },
  TH: {
    cert_title: "ใบรับรอง",
    cert_chatbot_title: "การพัฒนาแชทบอทด้วย Python",
    cert_chatbot_desc: "ใบรับรองการใช้ Python เพื่อสร้างแชทบอท",
    cert_cyber_title: "พื้นฐาน Cybersecurity",
    cert_cyber_desc: "ใบรับรองพื้นฐานด้าน Cybersecurity",
  }
};


// Apply i18n
function applyI18n(lang){
  const dict = I18N[lang] || I18N.EN;
  document.documentElement.setAttribute('lang', lang.toLowerCase());
  document.querySelector('html').dataset.lang = lang;
  document.querySelectorAll('[data-i18n-key]').forEach(el=>{
    const k = el.getAttribute('data-i18n-key');
    if (dict[k] !== undefined) el.textContent = dict[k];
  });

  // Update project card descriptions to current language
  const p1 = document.querySelector('[data-project="p1"] [data-i18n-key="p1_desc"]');
  const p2 = document.querySelector('[data-project="p2"] [data-i18n-key="p2_desc"]');
  const p3 = document.querySelector('[data-project="p3"] [data-i18n-key="p3_desc"]');
  if (p1) p1.textContent = lang==='TH'? PROJECTS.p1.desc_TH : PROJECTS.p1.desc_EN;
  if (p2) p2.textContent = lang==='TH'? PROJECTS.p2.desc_TH : PROJECTS.p2.desc_EN;
  if (p3) p3.textContent = lang==='TH'? PROJECTS.p3.desc_TH : PROJECTS.p3.desc_EN;
}

// Language toggle with localStorage
const langBtn = document.getElementById('langToggle');
function setLang(next){
  localStorage.setItem('portfolio_lang', next);
  applyI18n(next);
  langBtn.textContent = next==='EN' ? 'TH' : 'EN';
}
langBtn?.addEventListener('click', ()=>{
  const cur = (document.querySelector('html').dataset.lang)||'EN';
  setLang(cur==='EN'?'TH':'EN');
});

// Initialize language
const saved = localStorage.getItem('portfolio_lang');
setLang(saved || 'EN');

// Tiny form handler (mailto)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name'));
    const email = encodeURIComponent(data.get('email'));
    const text = encodeURIComponent(data.get('message'));
    const subject = `Portfolio contact from ${name}`;
    const body = `From: ${name} (%20${email}%20)\n\n${text}`;
    window.location.href = `mailto:phatthana718@gmail.com?subject=${subject}&body=${body}`;
    if (msg) {
      const th = document.documentElement.getAttribute('lang')==='th';
      msg.textContent = th ? 'กำลังเปิดแอปอีเมล…' : 'Opening your email app…';
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector("#skills");
  const fills = document.querySelectorAll(".skill-bar .fill");
  const percents = document.querySelectorAll(".skill-bar .percent");

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach((fill, i) => {
          const target = parseInt(fill.dataset.percent, 10);

          // trigger bar
          setTimeout(() => {
            fill.style.width = target + "%";
          }, 200);

          // trigger number
          let current = 0;
          const interval = setInterval(() => {
            if (current >= target) {
              clearInterval(interval);
              return;
            }
            current++;
            percents[i].textContent = current + "%";
          }, 2000 / target);
        });

        skillObserver.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.2 });

  skillObserver.observe(skillSection);
}
);
