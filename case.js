const dialog=document.querySelector('#lightbox');
let lang='zh';
try{lang=localStorage.getItem('mengmeng-lang')==='en'?'en':'zh';}catch{}
function applyLanguage(value){
 lang=value;document.documentElement.lang=lang==='zh'?'zh-CN':'en';
 document.querySelectorAll('[data-zh][data-en]').forEach(el=>el.textContent=el.dataset[lang]);
 document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
 document.querySelectorAll('[data-image]').forEach(el=>el.setAttribute('aria-label',(lang==='zh'?'查看设计：':'View design: ')+el.dataset[lang==='zh'?'captionZh':'captionEn']));
 if(dialog.open)document.querySelector('#image-caption').textContent=dialog.dataset[lang==='zh'?'captionZh':'captionEn'];
 try{localStorage.setItem('mengmeng-lang',lang);}catch{}
}
document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>applyLanguage(el.dataset.lang)));
document.querySelectorAll('[data-view]').forEach(el=>el.addEventListener('click',()=>{
 document.querySelectorAll('[data-view]').forEach(button=>button.setAttribute('aria-pressed',String(button===el)));
 document.querySelectorAll('#system-gallery, #work-gallery').forEach(panel=>panel.hidden=panel.id!==el.dataset.view+'-gallery');
}));
document.querySelectorAll('[data-image]').forEach(el=>el.addEventListener('click',()=>{
 const img=document.querySelector('#full-image');img.src=el.dataset.image;img.alt=el.dataset[lang==='zh'?'captionZh':'captionEn'];
 dialog.dataset.captionZh=el.dataset.captionZh;dialog.dataset.captionEn=el.dataset.captionEn;
 document.querySelector('#image-caption').textContent=img.alt;dialog.showModal();document.body.classList.add('dialog-open');document.querySelector('.dialog-content').scrollTop=0;
}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
applyLanguage(lang);
