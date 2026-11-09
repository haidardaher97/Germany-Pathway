// ✏️ EDIT ME: all personal content lives here. Values marked "Placeholder" are NOT real info.
window.SITE = {
  email: "you@example.com",                            // Placeholder
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // Create a free form at formspree.io
  photo: "",                                           // e.g. "assets/profile.jpg" (empty = initials)
  social: [{label:"GitHub",url:"https://github.com/your-username"},{label:"LinkedIn",url:"https://linkedin.com/in/your-username"}],
  skills: {
    "Languages": ["JavaScript","TypeScript","Python","HTML5","CSS3"],
    "Frameworks": ["React","Vite","Node.js","Tailwind CSS"],
    "Tools": ["Git","GitHub Actions","Figma","VS Code"]
  },
  projects: [ // Placeholder projects. Add "image":"assets/p1.jpg" for a screenshot
    {cat:"web",tech:["React","Vite"],live:"#",repo:"#",image:"",title:{en:"Sample Project One",ar:"مشروع تجريبي ١"},desc:{en:"Placeholder description. Replace with your project.",ar:"وصف تجريبي. استبدله بمشروعك."}},
    {cat:"design",tech:["Figma"],live:"#",repo:"#",image:"",title:{en:"Sample Project Two",ar:"مشروع تجريبي ٢"},desc:{en:"Placeholder description. Replace with your project.",ar:"وصف تجريبي. استبدله بمشروعك."}},
    {cat:"web",tech:["JavaScript","CSS3"],live:"#",repo:"#",image:"",title:{en:"Sample Project Three",ar:"مشروع تجريبي ٣"},desc:{en:"Placeholder description. Replace with your project.",ar:"وصف تجريبي. استبدله بمشروعك."}}
  ],
  experience: [
    {date:"2023 — Now",title:{en:"Job title",ar:"المسمى الوظيفي"},org:{en:"Company name",ar:"اسم الشركة"},desc:{en:"Placeholder: what you did and achieved.",ar:"تجريبي: ما قمت به وأنجزته."}},
    {date:"2019 — 2023",title:{en:"Degree",ar:"الدرجة العلمية"},org:{en:"University name",ar:"اسم الجامعة"},desc:{en:"Placeholder: field of study.",ar:"تجريبي: مجال الدراسة."}}
  ],
  services: [
    {title:{en:"Web development",ar:"تطوير المواقع"},desc:{en:"Fast, accessible websites built to last.",ar:"مواقع سريعة وسهلة الوصول وقابلة للتطوير."}},
    {title:{en:"UI design",ar:"تصميم الواجهات"},desc:{en:"Clean interfaces that are easy to use.",ar:"واجهات واضحة وسهلة الاستخدام."}},
    {title:{en:"Consulting",ar:"استشارات تقنية"},desc:{en:"Technical advice for your next project.",ar:"إرشاد تقني لمشروعك القادم."}}
  ],
  i18n: {
    en:{name:"Your Name",role:"Your job title",bio:"Placeholder: one or two sentences about what you build and who you build it for.",about:"About",aboutText:"Placeholder: a short paragraph about your background, experience and what drives you.",interests:["Open source","Design systems","Teaching"],skills:"Skills",projects:"Projects",experience:"Experience",services:"Services",contact:"Contact",viewWork:"View my work",cv:"Download CV",contactText:"Have a project in mind? Send a message.",fName:"Name",fEmail:"Email",fMsg:"Message",send:"Send message",sending:"Sending…",ok:"Message sent. Thank you!",err:"Could not send. Please email me directly.",all:"All",skip:"Skip to content",web:"Web",design:"Design",live:"Live demo",repo:"GitHub",other:"العربية",rights:"All rights reserved."},
    ar:{name:"اسمك",role:"مسماك الوظيفي",bio:"نص تجريبي: جملة أو جملتان عمّا تبنيه ولمن تبنيه.",about:"نبذة عني",aboutText:"نص تجريبي: فقرة قصيرة عن خلفيتك وخبراتك وما يحفزك.",interests:["المصادر المفتوحة","أنظمة التصميم","التعليم"],skills:"المهارات",projects:"المشاريع",experience:"الخبرات",services:"الخدمات",contact:"تواصل معي",viewWork:"شاهد أعمالي",cv:"تحميل السيرة الذاتية",contactText:"لديك مشروع؟ أرسل لي رسالة.",fName:"الاسم",fEmail:"البريد الإلكتروني",fMsg:"الرسالة",send:"إرسال الرسالة",sending:"جارٍ الإرسال…",ok:"تم إرسال رسالتك. شكراً لك!",err:"تعذّر الإرسال. راسلني على البريد مباشرة.",all:"الكل",skip:"انتقل إلى المحتوى",web:"ويب",design:"تصميم",live:"معاينة مباشرة",repo:"GitHub",other:"English",rights:"جميع الحقوق محفوظة."}
  }
};
