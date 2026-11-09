(()=>{
const S=window.SITE,$=s=>document.querySelector(s),root=document.documentElement;
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
let lang=store.get('lang')||((navigator.language||'').startsWith('ar')?'ar':'en'),cat='all';
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.textContent=h;return e};
const ini=n=>n.split(' ').map(w=>w[0]).join('').slice(0,2);
function render(){
  const T=S.i18n[lang];root.lang=lang;root.dir=lang==='ar'?'rtl':'ltr';document.title=T.name+' — '+T.role;
  document.querySelectorAll('[data-i18n]').forEach(n=>n.textContent=T[n.dataset.i18n]);
  $('#h-name').textContent=T.name;$('#h-role').textContent=T.role;$('#h-bio').textContent=T.bio;$('#a-text').textContent=T.aboutText;
  $('#lang').textContent=T.other;$('#copy').textContent='© '+new Date().getFullYear()+' '+T.name+'. '+T.rights;
  const av=$('#avatar');av.textContent='';
  if(S.photo){const i=el('img');i.src=S.photo;i.alt='';i.loading='lazy';av.append(i)}else av.textContent=ini(T.name);
  $('#logo').textContent=ini(T.name);
  const m=$('#menu');m.textContent='';
  ['about','skills','projects','experience','services','contact'].forEach(k=>{const li=el('li'),a=el('a','',T[k]);a.href='#'+k;li.append(a);m.append(li)});
  $('#a-int').replaceChildren(...T.interests.map(i=>el('li','',i)));
  $('#skill-list').replaceChildren(...Object.entries(S.skills).map(([g,l])=>{const d=el('div');d.append(el('h3','',g));const u=el('ul','chips');l.forEach(x=>u.append(el('li','',x)));d.append(u);return d}));
  const cats=['all',...new Set(S.projects.map(p=>p.cat))];
  $('#filters').replaceChildren(...cats.map(c=>{const b=el('button','',T[c]||c);b.type='button';b.setAttribute('aria-pressed',c===cat);b.onclick=()=>{cat=c;render()};return b}));
  $('#grid').replaceChildren(...S.projects.filter(p=>cat==='all'||p.cat===cat).map(p=>{
    const c=el('article','card');
    if(p.image){const i=el('img','img');i.src=p.image;i.alt=p.title[lang];i.loading='lazy';c.append(i)}else c.append(el('div','img'));
    const b=el('div','body');b.append(el('h3','',p.title[lang]),el('p','',p.desc[lang]));
    const t=el('ul','chips');p.tech.forEach(x=>t.append(el('li','',x)));b.append(t);
    const r=el('div','row');[['live',p.live],['repo',p.repo]].forEach(([k,u])=>{const a=el('a','',T[k]);a.href=u;a.target='_blank';a.rel='noopener';r.append(a)});
    b.append(r);c.append(b);return c}));
  $('#timeline').replaceChildren(...S.experience.map(x=>{const li=el('li');li.append(el('small','',x.date),el('h3','',x.title[lang]+' · '+x.org[lang]),el('p','',x.desc[lang]));return li}));
  $('#svc').replaceChildren(...S.services.map(x=>{const d=el('div');d.append(el('h3','',x.title[lang]),el('p','',x.desc[lang]));return d}));
  const L=$('#links');L.replaceChildren();
  [{label:S.email,url:'mailto:'+S.email},...S.social].forEach(s=>{const li=el('li'),a=el('a','',s.label);a.href=s.url;if(!s.url.startsWith('mailto')){a.rel='noopener';a.target='_blank'}li.append(a);L.append(li)});
}
$('#lang').onclick=()=>{lang=lang==='ar'?'en':'ar';store.set('lang',lang);render()};
$('#theme').onclick=()=>{const t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;store.set('theme',t)};
$('#form').addEventListener('submit',async e=>{
  e.preventDefault();const f=e.target,T=S.i18n[lang],st=$('#status');
  if(!f.checkValidity()){f.reportValidity();return}
  st.textContent=T.sending;
  try{const r=await fetch(S.formEndpoint,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});if(!r.ok)throw 0;f.reset();st.textContent=T.ok}catch(_){st.textContent=T.err}
});
render();
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('section:not(.hero) .wrap').forEach(n=>{n.classList.add('rv');io.observe(n)});
})();
