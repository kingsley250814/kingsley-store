const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const dlg=$('#dlg'), toast=$('#toast'); let tt;
function say(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('show'),3000)}
$('#yr').textContent=new Date().getFullYear();

$('#menu').addEventListener('click',e=>{
  const o=$('#links').classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded',o);
});
$$('#links a').forEach(a=>a.addEventListener('click',()=>$('#links').classList.remove('open')));

$$('[data-open]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();$('#links').classList.remove('open');dlg.showModal()}));
$('#cancel').addEventListener('click',()=>dlg.close());
const CONTACT_EMAIL='kingsley24466@gmail.com';
$('#frm').addEventListener('submit',e=>{
  e.preventDefault();
  const subject='Kingsley Store request: '+$('#t').value;
  const body='Name: '+$('#n').value+'\nEmail: '+$('#e').value+'\nProject type: '+$('#t').value+'\n\nDetails:\n'+$('#m').value;
  dlg.close();e.target.reset();
  say('Opening your email app to send the request.');
  window.location.href='mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
});
$$('[data-buy]').forEach(b=>b.addEventListener('click',()=>say(b.dataset.buy+' added to your order.')));