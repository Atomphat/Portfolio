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
  p4: {
    title: 'VLUG — AI Virtual Watch Try-On',
    img: '',
    period: 'Jan 2026 – Feb 2026 · Codediva',
    desc_EN: 'AI-powered virtual watch try-on platform: pick a watch and a strap, then generate an AI preview of how the combination looks when worn.',
    desc_TH: 'แพลตฟอร์มลองนาฬิกาเสมือนจริงด้วย AI เลือกตัวเรือนและสายนาฬิกา แล้วสร้างภาพจำลองด้วย AI ว่าเมื่อสวมใส่จะออกมาเป็นอย่างไร',
    long_EN: 'Developed VLUG, an AI-powered virtual watch try-on platform that allows users to select a watch and strap and generate an AI visualization of how the combination would look when worn. Built frontend features using Next.js, integrated AI image-generation workflows into the application, and designed the user flow for selecting watch components and generating personalized visual previews.',
    long_TH: 'พัฒนา VLUG แพลตฟอร์มลองนาฬิกาเสมือนจริงด้วย AI ที่ให้ผู้ใช้เลือกตัวเรือนและสายนาฬิกา แล้วสร้างภาพจำลองว่าเมื่อสวมใส่จริงจะออกมาเป็นอย่างไร รับผิดชอบการพัฒนาฟีเจอร์ฝั่ง Frontend ด้วย Next.js เชื่อมต่อขั้นตอนการสร้างภาพด้วย AI เข้ากับแอปพลิเคชัน และออกแบบลำดับการใช้งานตั้งแต่การเลือกชิ้นส่วนนาฬิกาจนถึงการสร้างภาพตัวอย่างเฉพาะบุคคล',
    links: []
  },
  p5: {
    title: 'Thai ID Pass',
    img: '',
    period: 'Mar 2026 – May 2026 · Codediva',
    desc_EN: 'Mobile application focused on digital identity verification, built with Flutter and React Native.',
    desc_TH: 'แอปพลิเคชันมือถือสำหรับการยืนยันตัวตนแบบดิจิทัล พัฒนาด้วย Flutter และ React Native',
    long_EN: 'Contributed to the development of Thai ID Pass, a mobile application focused on digital identity verification. Implemented and refined mobile application features while working with the existing application architecture and UI.',
    long_TH: 'ร่วมพัฒนา Thai ID Pass แอปพลิเคชันมือถือที่เน้นการยืนยันตัวตนแบบดิจิทัล พัฒนาและปรับปรุงฟีเจอร์ของแอปโดยทำงานร่วมกับสถาปัตยกรรมและ UI เดิมของแอปพลิเคชัน',
    links: []
  },
  p6: {
    title: 'Principal — Client Project Support',
    img: '',
    period: 'Jan 2026 · Codediva',
    desc_EN: 'Supported frontend implementation, UI improvements, and feature development for Principal client projects.',
    desc_TH: 'สนับสนุนงานพัฒนา Frontend ปรับปรุง UI และพัฒนาฟีเจอร์ให้กับโปรเจกต์ของลูกค้า Principal',
    long_EN: 'Contributed to development tasks for Principal projects using React Native, supporting frontend implementation, UI improvements, and feature development.',
    long_TH: 'ร่วมพัฒนางานในโปรเจกต์ของ Principal ด้วย React Native โดยสนับสนุนการพัฒนาฝั่ง Frontend การปรับปรุง UI และการพัฒนาฟีเจอร์ต่าง ๆ',
    links: []
  },
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
    img: 'https://i.ibb.co/x8LbFYyH/Screenshot-2568-09-20-at-16-04-32.png',
    desc_EN: 'A car e-commerce prototype built with HTML, CSS, and JavaScript, demonstrating front-end programming and interactive features',
    desc_TH: 'ต้นแบบเว็บ E-commerce ซื้อขายรถยนต์ พัฒนาด้วย HTML, CSS, และ JavaScript แสดงความสามารถด้านการเขียนโปรแกรมฝั่ง Front-end และการทำงานแบบโต้ตอบ',
    links:[ {label:'Case Study', href:'#', disabled:true}, {label:'Figma', href:'#', disabled:true} ]
  },
  p3: {
    title: 'SSO Voice Chatbot — Social Security Information Assistant',
    img: 'https://i.ibb.co/nshC9Hdd/Screenshot-2568-09-20-at-16-09-11.png',
    period: 'Senior Project · 🏆 Best Senior Project Award — 2nd Runner-Up',
    desc_EN: 'Voice chatbot that answers questions about social security benefits and services, combining Speech-to-Text, RAG, and Text-to-Speech.',
    desc_TH: 'แชทบอทเสียงสำหรับตอบคำถามเรื่องสิทธิประโยชน์และบริการประกันสังคม ผสาน Speech-to-Text, RAG และ Text-to-Speech',
    long_EN: 'Developed a voice-based chatbot for answering questions about social security benefits and services. Integrated Speech-to-Text (STT), Retrieval-Augmented Generation (RAG), and Text-to-Speech (TTS) to enable natural voice-based interaction, and implemented a knowledge retrieval pipeline to provide responses based on relevant social security information and reduce hallucinations. Won the Best Senior Project Award — 2nd Runner-Up.',
    long_TH: 'พัฒนาแชทบอทแบบสั่งงานด้วยเสียงสำหรับตอบคำถามเกี่ยวกับสิทธิประโยชน์และบริการของประกันสังคม ผสาน Speech-to-Text (STT), Retrieval-Augmented Generation (RAG) และ Text-to-Speech (TTS) เพื่อให้สนทนาด้วยเสียงได้อย่างเป็นธรรมชาติ และพัฒนาระบบดึงข้อมูลความรู้ (Knowledge Retrieval Pipeline) เพื่อให้คำตอบอ้างอิงจากข้อมูลประกันสังคมที่เกี่ยวข้องและลดการตอบผิดพลาด (Hallucination) ได้รับรางวัลโครงงานยอดเยี่ยม รองชนะเลิศอันดับ 2',
    links:[]
  }
};

// Modal logic
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPeriod = document.getElementById('modalPeriod');
const modalLinks = document.getElementById('modalLinks');

function openProject(id){
  const p = PROJECTS[id];
  if (!p) return;
  if (p.img) { modalImg.src = p.img; modalImg.hidden = false; }
  else { modalImg.removeAttribute('src'); modalImg.hidden = true; }
  modalTitle.textContent = p.title;
  const lang = (document.querySelector('html').dataset.lang || 'EN').toUpperCase();
  const th = lang==='TH';
  modalPeriod.textContent = p.period || '';
  modalDesc.textContent = th ? (p.long_TH||p.desc_TH||p.long_EN||p.desc_EN) : (p.long_EN||p.desc_EN);
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
    nav_home:'Home', nav_about:'About', nav_exp:'Experience', nav_projects:'Projects', nav_skills:'Skills', nav_contact:'Contact',
    hero_tag:'🚀 Software Developer • Web & Mobile • AI', hero_hi:'Hi, I’m', hero_name:'Phatthana Pomthong',
    hero_lead:'Computer Science graduate from Bangkok University and former Software Developer Intern at Codediva. I build web and mobile apps with Next.js, React Native, and Flutter, and integrate AI features such as RAG and image generation.',
    btn_see_projects:'See Projects', btn_see_exp:'Experience',
    currently:'Currently', cur_1:'Building a sky-blue portfolio', cur_2:'Experimenting with micro-interactions', cur_3:'Open to internships',

    about_title:'About Me',
    about_name:'Name', about_name_val:'Phatthana Pomthong',
    about_nick:'Nickname', about_nick_val:'Atom',
    about_role:'Role', about_role_val:'Software Developer',
    about_gpa:'GPA', about_gpa_val:'2.97',
    about_grad:'Graduation', about_grad_val:'Aug 2026',
    about_loc:'Location', about_loc_val:'Ayutthaya, Thailand',
    about_age:'Age', about_age_val:'22',
    about_edu:'Education', about_edu_val:'B.Sc. Computer Science, Bangkok University',

    soft:'Soft Skills',
    soft_1:'Teamwork',
    soft_2:'Fast learner',
    soft_3:'On-the-spot problem solving',
    soft_4:'English communication',
    soft_5:'Resilient & punctual',

    hard:'Hard Skills',
    hard_1:'JavaScript, TypeScript, Python, Java',
    hard_2:'React, Next.js, React Native, Flutter',
    hard_3:'HTML, CSS, Tailwind CSS',
    hard_4:'RAG, AI Integration, PostgreSQL, Vector Database',
    hard_5:'Git/GitHub, VS Code, Postman, Figma',

    interests:'Interests',
    int_1:'Artificial Intelligence & new technologies',
    int_2:'UI/UX Design',
    int_3:'Automotive & EVs',
    int_4:'Travel & content creation',

    exp_title:'Experience',
    exp1_role:'Software Developer Intern — Codediva',
    exp1_sub:'Mobile & Web Application · Asok, Bangkok',
    exp1_date:'Jan 2026 – May 2026',
    exp1_1:'Contributed to mobile and web application development using Flutter, React Native, and Next.js.',
    exp1_2:'Collaborated with the development team to implement features, improve user interfaces, and resolve technical issues across multiple projects.',
    exp1_3:'Assisted with development tasks for Principal and other client projects in a professional software development environment.',
    edu1_role:'B.Sc. Computer Science — Bangkok University',
    edu1_sub:'Rangsit, Pathum Thani · GPA 2.97',
    edu1_date:'Graduated Aug 2026',
    edu1_1:'Senior project: SSO Voice Chatbot — Best Senior Project Award, 2nd Runner-Up.',

    sg_lang:'Programming Languages', sg_fe:'Frontend & Mobile', sg_ai:'AI & Database', sg_tools:'Tools & Design',

    proj_title:'Projects', chip_web:'Application', chip_ui:'UI', chip_algo:'AI · Voice Chatbot', read_more:'Read more',
    chip_p4:'AI Web App', chip_p5:'Mobile App', chip_p6:'Client Project',
    award:'🏆 Best Senior Project Award — 2nd Runner-Up',

    skills_title:'Skills', skills_fe:'Front-End:', skills_fe_val:'HTML, CSS, JS, a11y',
    skills_uiux:'UI/UX:', skills_uiux_val:'Wireframing, Prototyping, Design systems',
    skills_tools:'Tools:', skills_tools_val:'Figma, Git/GitHub, Vite, CodeSandbox',

    contact_title:'Contact',
    label_name:'Name', label_email:'Email', label_msg:'Message',
    btn_send:'Send', elsewhere:'Elsewhere',
    footer_name:'Atomphat', footer_built:'Built with ♥'
  },
  TH: {
    title:'แฟ้มสะสมผลงานของ พัฒนะ',
    brand:'Atom',
    nav_home:'หน้าแรก', nav_about:'เกี่ยวกับ', nav_exp:'ประสบการณ์', nav_projects:'ผลงาน', nav_skills:'ทักษะ', nav_contact:'ติดต่อ',
    hero_tag:'🚀 Software Developer • Web & Mobile • AI', hero_hi:'สวัสดี ผมคือ', hero_name:'พัฒนะ ป้อมทอง',
    hero_lead:'บัณฑิตวิทยาการคอมพิวเตอร์ มหาวิทยาลัยกรุงเทพ และอดีตนักศึกษาฝึกงานตำแหน่ง Software Developer ที่ Codediva ผมพัฒนาเว็บและแอปมือถือด้วย Next.js, React Native และ Flutter พร้อมเชื่อมต่อฟีเจอร์ AI เช่น RAG และการสร้างภาพด้วย AI',
    btn_see_projects:'ดูผลงาน', btn_see_exp:'ประสบการณ์',
    currently:'ตอนนี้', cur_1:'กำลังทำพอร์ตธีมฟ้าสดใส', cur_2:'ลองไมโครอินเทอร์แอคชัน', cur_3:'เปิดรับฝึกงาน',

    about_title:'เกี่ยวกับฉัน',
    about_name:'ชื่อ', about_name_val:'พัฒนะ ป้อมทอง',
    about_nick:'ชื่อเล่น', about_nick_val:'อะตอม',
    about_role:'บทบาท', about_role_val:'นักพัฒนาซอฟต์แวร์',
    about_gpa:'เกรดเฉลี่ย', about_gpa_val:'2.97',
    about_grad:'สำเร็จการศึกษา', about_grad_val:'ส.ค. 2569',
    about_loc:'ที่อยู่', about_loc_val:'พระนครศรีอยุธยา, ไทย',
    about_age:'อายุ', about_age_val:'22',
    about_edu:'การศึกษา', about_edu_val:'วท.บ. วิทยาการคอมพิวเตอร์ มหาวิทยาลัยกรุงเทพ',

    soft:'Soft Skills',
    soft_1:'ทำงานเป็นทีมได้ดี',
    soft_2:'เรียนรู้ไว',
    soft_3:'แก้ปัญหาหน้างานได้',
    soft_4:'สื่อสารภาษาอังกฤษได้',
    soft_5:'อดทน ตรงต่อเวลา',

    hard:'Hard Skills',
    hard_1:'JavaScript, TypeScript, Python, Java',
    hard_2:'React, Next.js, React Native, Flutter',
    hard_3:'HTML, CSS, Tailwind CSS',
    hard_4:'RAG, การเชื่อมต่อ AI, PostgreSQL, Vector Database',
    hard_5:'Git/GitHub, VS Code, Postman, Figma',

    interests:'ความสนใจ',
    int_1:'ปัญญาประดิษฐ์และเทคโนโลยีใหม่ ๆ',
    int_2:'การออกแบบ UI/UX',
    int_3:'ยานยนต์และรถยนต์ไฟฟ้า (EV)',
    int_4:'การท่องเที่ยวและการสร้างคอนเทนต์',

    exp_title:'ประสบการณ์',
    exp1_role:'นักศึกษาฝึกงาน Software Developer — Codediva',
    exp1_sub:'แอปพลิเคชันมือถือและเว็บ · อโศก, กรุงเทพฯ',
    exp1_date:'ม.ค. 2569 – พ.ค. 2569',
    exp1_1:'ร่วมพัฒนาแอปพลิเคชันมือถือและเว็บแอปพลิเคชันด้วย Flutter, React Native และ Next.js',
    exp1_2:'ทำงานร่วมกับทีมพัฒนาในการสร้างฟีเจอร์ ปรับปรุงหน้าจอผู้ใช้ และแก้ไขปัญหาทางเทคนิคในหลายโปรเจกต์',
    exp1_3:'ช่วยงานพัฒนาในโปรเจกต์ของ Principal และลูกค้ารายอื่น ได้รับประสบการณ์การทำงานในสภาพแวดล้อมการพัฒนาซอฟต์แวร์แบบมืออาชีพ',
    edu1_role:'วท.บ. วิทยาการคอมพิวเตอร์ — มหาวิทยาลัยกรุงเทพ',
    edu1_sub:'รังสิต, ปทุมธานี · เกรดเฉลี่ย 2.97',
    edu1_date:'สำเร็จการศึกษา ส.ค. 2569',
    edu1_1:'โครงงานจบ: SSO Voice Chatbot — รางวัลโครงงานยอดเยี่ยม รองชนะเลิศอันดับ 2',

    sg_lang:'ภาษาโปรแกรม', sg_fe:'Frontend และ Mobile', sg_ai:'AI และฐานข้อมูล', sg_tools:'เครื่องมือและการออกแบบ',

    proj_title:'ผลงาน', chip_web:'แอปพลิเคชัน', chip_ui:'UI', chip_algo:'AI · แชทบอทเสียง', read_more:'อ่านต่อ',
    chip_p4:'เว็บแอป AI', chip_p5:'แอปมือถือ', chip_p6:'โปรเจกต์ลูกค้า',
    award:'🏆 รางวัลโครงงานยอดเยี่ยม รองชนะเลิศอันดับ 2',

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
  const dict = Object.assign({}, I18N[lang] || I18N.EN, translations[lang] || translations.EN);
  document.documentElement.setAttribute('lang', lang.toLowerCase());
  document.querySelector('html').dataset.lang = lang;
  document.querySelectorAll('[data-i18n-key]').forEach(el=>{
    const k = el.getAttribute('data-i18n-key');
    if (dict[k] !== undefined) el.textContent = dict[k];
  });

  // Update project card descriptions to current language
  document.querySelectorAll('[data-desc]').forEach(el=>{
    const p = PROJECTS[el.dataset.desc];
    if (p) el.textContent = lang==='TH' ? (p.desc_TH||p.desc_EN) : p.desc_EN;
  });
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
    window.location.href = `mailto:phatthanapomthong@gmail.com?subject=${subject}&body=${body}`;
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
