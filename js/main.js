(()=>{
const S=window.SITE,$=s=>document.querySelector(s),root=document.documentElement;
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.textContent=h;return e};
const card=(t,d)=>{const x=el('div');x.append(el('h3','',t),el('p','',d));return x};
$('#h-name').textContent=S.name;$('#h-role').textContent=S.role;$('#h-bio').textContent=S.bio;$('#logo').textContent=S.name;
$('#wa').href='https://wa.me/'+S.whatsapp;
$('#copy').textContent='© '+new Date().getFullYear()+' '+S.name+'. جميع الحقوق محفوظة.';
$('#menu').replaceChildren(...[['about','من نحن'],['services','الخدمات'],['fields','التخصصات'],['journey','الرحلة'],['contact','تواصل']].map(([id,l])=>{const li=el('li'),a=el('a','',l);a.href='#'+id;li.append(a);return li}));
$('#a-text').replaceChildren(...S.about.map((p,i)=>el('p',i?'':'lead',p)));
$('#svc').replaceChildren(...S.services.map(x=>card(x.t,x.d)));
$('#skill-list').replaceChildren(...Object.entries(S.fields).map(([g,l])=>{const d=el('div');d.append(el('h3','',g));const u=el('ul','chips');l.forEach(x=>u.append(el('li','',x)));d.append(u);return d}));
$('#timeline').replaceChildren(...S.journey.map(x=>{const li=el('li');li.append(el('h3','',x.t),el('p','',x.d));return li}));
const links=[{label:'واتساب: '+S.phoneLabel,url:'https://wa.me/'+S.whatsapp},{label:S.email,url:'mailto:'+S.email},...S.social];
$('#links').replaceChildren(...links.map(s=>{const li=el('li'),a=el('a','',s.label);a.href=s.url;if(!s.url.startsWith('mailto')){a.target='_blank';a.rel='noopener'}li.append(a);return li}));
const st=$('#status');
$('#theme').onclick=()=>{const t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}};
$('#form').addEventListener('submit',async e=>{
  e.preventDefault();const f=e.target;
  if(!f.checkValidity()){f.reportValidity();return}
  st.textContent='جارٍ الإرسال…';
  try{const r=await fetch(S.formEndpoint,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});if(!r.ok)throw 0;f.reset();st.textContent='تم إرسال رسالتك. شكراً لك!'}
  catch(_){st.innerHTML='تعذّر الإرسال. راسلنا على واتساب أو البريد مباشرة.'}
});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('section:not(.hero):not(.band) .wrap').forEach(n=>{n.classList.add('rv');io.observe(n)});
})();
