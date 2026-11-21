/* 21/11 (dona): maquete 3D real da UDA — geometria extraída do Navisworks (.nwd V96), raio-X, caminhar, simulação do processo e da energia */
(function(){ if(document.getElementById('m3css')) return; var st=document.createElement('style'); st.id='m3css'; st.textContent=".m3{position:relative;height:clamp(520px,78vh,860px);border-radius:18px;overflow:hidden;background:#0b1b2e;box-shadow:0 10px 30px rgba(14,42,74,.35);outline:none;color:#E8F0F8;font-size:13px;touch-action:none;user-select:none}\n.m3-cv{position:absolute;inset:0;width:100%;height:100%;display:block;cursor:grab}.m3-cv:active{cursor:grabbing}\n.m3-tb{position:absolute;left:12px;top:12px;right:12px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;pointer-events:none}\n.m3-tb>*{pointer-events:auto}\n.m3-seg{display:inline-flex;background:rgba(9,22,38,.78);border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:3px;backdrop-filter:blur(6px)}\n.m3-seg button,.m3-b{font:600 12.5px/1 inherit;color:#DCE7F2;background:transparent;border:0;border-radius:9px;padding:8px 11px;cursor:pointer;white-space:nowrap}\n.m3-b{background:rgba(9,22,38,.78);border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:10px 12px;backdrop-filter:blur(6px)}\n.m3-seg button[aria-pressed=true]{background:#2F7FD8;color:#fff;box-shadow:0 2px 8px rgba(47,127,216,.5)}\n.m3-b[aria-pressed=true]{background:#1F5FA8;border-color:#5FA3EE;color:#fff}\n.m3-seg button:hover,.m3-b:hover{color:#fff}.m3 button:focus-visible{outline:2px solid #FFD54A;outline-offset:2px}\n.m3-lays{position:absolute;left:12px;bottom:12px;display:flex;flex-direction:column;gap:2px;background:rgba(9,22,38,.78);border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:8px 10px;backdrop-filter:blur(6px)}\n.m3-ch{display:flex;align-items:center;gap:7px;cursor:pointer;font-size:12px;color:#CFDCEA;padding:2px 0}\n.m3-ch input{accent-color:#2F7FD8;margin:0}.m3-ch i{width:10px;height:10px;border-radius:3px;display:inline-block}\n.m3-leg{position:absolute;left:50%;bottom:12px;transform:translateX(-50%);display:flex;flex-wrap:wrap;justify-content:center;gap:4px 10px;align-items:center;max-width:52%;background:rgba(9,22,38,.7);border-radius:10px;padding:6px 10px;font-size:11.5px;color:#CFDCEA;pointer-events:none}\n.m3-leg i{width:10px;height:10px;border-radius:50%;display:inline-block;margin-right:-5px;box-shadow:0 0 6px currentColor}\n.m3-help{position:absolute;right:12px;bottom:12px;max-width:300px;text-align:right;font-size:11px;color:#9FB3C8;background:rgba(9,22,38,.6);border-radius:8px;padding:5px 8px;pointer-events:none}\n.m3-lb{position:absolute;inset:0;pointer-events:none;overflow:hidden}\n.m3-tag{position:absolute;left:0;top:0;pointer-events:auto;display:flex;gap:6px;align-items:center;background:rgba(9,22,38,.85);border:1px solid rgba(255,255,255,.22);color:#fff;border-radius:999px;padding:4px 6px 4px 10px;font:600 11.5px/1.1 inherit;cursor:pointer;white-space:nowrap;box-shadow:0 4px 12px rgba(0,0,0,.35)}\n.m3-tag::after{content:'';position:absolute;left:50%;bottom:-7px;width:1px;height:7px;background:rgba(255,255,255,.5)}\n.m3-tag i{font-style:normal;background:var(--c);border-radius:999px;padding:3px 6px;font-size:11px}\n.m3-tag:hover,.m3-tag.on{background:#1F5FA8;border-color:#FFD54A}\n.m3-info{position:absolute;right:12px;top:64px;width:270px;background:rgba(255,255,255,.97);color:#14365D;border-radius:14px;padding:12px 14px;box-shadow:0 10px 26px rgba(0,0,0,.35)}\n.m3-info h4{margin:2px 0 4px;font-size:17px}.m3-info p{margin:0 0 6px;font-size:12.5px;color:#43536A}\n.m3-k{font:700 10.5px/1.2 inherit;letter-spacing:.06em;text-transform:uppercase;opacity:.65}\n.m3-dim{font-size:11.5px;color:#64748B;margin:4px 0}\n.m3-z{display:flex;justify-content:space-between;gap:8px;align-items:center;border-left:4px solid var(--c);background:rgba(127,140,160,.12);border-radius:8px;padding:6px 8px;margin:6px 0;font-size:12px}\n.m3-z b{color:var(--c);font-size:15px}\n.m3-go{width:100%;border:0;border-radius:9px;background:#1F5FA8;color:#fff;font:600 12.5px inherit;padding:8px;cursor:pointer}\n.m3-x{position:absolute;right:8px;top:8px;border:0;background:transparent;font-size:15px;cursor:pointer;color:inherit;opacity:.6}\n.m3-cap{position:absolute;left:50%;top:64px;transform:translateX(-50%);width:min(520px,70%);background:rgba(9,22,38,.88);border:1px solid rgba(255,213,74,.5);border-radius:14px;padding:10px 14px;box-shadow:0 10px 26px rgba(0,0,0,.35)}\n.m3-cap b{font-size:15px}.m3-cap p{margin:4px 0 2px;font-size:12.5px;color:#CFDCEA}\n.m3-cap .m3-z{background:rgba(255,255,255,.08)}\n.m3-pad{position:absolute;right:12px;bottom:74px;display:grid;grid-template-columns:repeat(3,44px);gap:4px}\n.m3-pad button{height:44px;border:1px solid rgba(255,255,255,.2);border-radius:10px;background:rgba(9,22,38,.8);color:#fff;font-size:16px;touch-action:none}\n.m3-pad button:nth-child(1){grid-column:2}.m3-pad button:nth-child(2){grid-column:1;grid-row:2}.m3-pad button:nth-child(3){grid-column:2;grid-row:2}.m3-pad button:nth-child(4){grid-column:3;grid-row:2}.m3-pad button:nth-child(5){grid-column:3;grid-row:1}.m3-pad button:nth-child(6){grid-column:1;grid-row:1}\n.m3-ld{position:absolute;inset:0;display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;text-align:center;padding:20px;background:radial-gradient(circle at 50% 40%,#16365a,#0b1b2e)}\n.m3-ld[hidden],.m3-cap[hidden],.m3-info[hidden],.m3-pad[hidden]{display:none}\n.m3-ld span{color:#9FB3C8;font-size:12px;max-width:420px}\n.m3-spin{width:38px;height:38px;border-radius:50%;border:3px solid rgba(255,255,255,.15);border-top-color:#FFD54A;animation:m3s 1s linear infinite}\n@keyframes m3s{to{transform:rotate(360deg)}}\n.m3:not(.xr) .m3-leg,.m3:not(.xr) .m3-help{background:rgba(9,22,38,.78)}\n@media (max-width:700px){.m3{height:72vh}.m3-lays{display:none}.m3-leg{max-width:90%;bottom:auto;top:110px}.m3-help{display:none}.m3-info{left:12px;right:12px;width:auto;top:auto;bottom:12px}.m3-seg button,.m3-b{padding:8px 9px;font-size:12px}}\n@media (prefers-reduced-motion:reduce){.m3-spin{animation:none}}\n"; document.head.appendChild(st); var s2=document.createElement('style'); s2.textContent=".m3-sr{position:relative;flex:1 1 230px;max-width:360px;min-width:180px}\n.m3-sr input{width:100%;font:600 13px/1 inherit;color:#fff;background:rgba(9,22,38,.85);border:1px solid rgba(255,255,255,.22);border-radius:12px;padding:11px 34px 11px 12px;outline:none;backdrop-filter:blur(6px)}\n.m3-sr input::placeholder{color:#9FB3C8}.m3-sr input:focus{border-color:#FFD54A;box-shadow:0 0 0 3px rgba(255,213,74,.25)}\n.m3-sr input::-webkit-search-cancel-button{display:none}\n.m3-sc{position:absolute;right:6px;top:50%;transform:translateY(-50%);border:0;background:transparent;color:#9FB3C8;font-size:14px;cursor:pointer;padding:6px}\n.m3-sl{position:absolute;left:0;right:0;top:calc(100% + 6px);background:#fff;color:#14365D;border-radius:12px;box-shadow:0 14px 30px rgba(0,0,0,.4);max-height:360px;overflow:auto;z-index:5;padding:4px}\n.m3-sl[hidden]{display:none}\n.m3-so{display:flex;align-items:center;gap:8px;width:100%;text-align:left;border:0;background:transparent;border-radius:8px;padding:7px 8px;cursor:pointer;color:inherit;font:inherit}\n.m3-so:hover,.m3-so.on{background:#EAF2FB}.m3-so i{font-style:normal;font-size:15px}\n.m3-so span{flex:1;min-width:0;display:flex;flex-direction:column}.m3-so b{font-size:13px}.m3-so small{font-size:11px;color:#64748B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.m3-so em{font-style:normal;font-size:10.5px;font-weight:700;color:#1F5FA8;background:#EAF2FB;border-radius:999px;padding:2px 7px;white-space:nowrap}.m3-so em.no{color:#B42318;background:#FDECEC}\n.m3-sx{padding:10px;font-size:12.5px;color:#64748B}\n.m3-pin{position:absolute;left:0;top:0;pointer-events:none;background:var(--c);color:#14213D;font:800 12px/1 inherit;border-radius:8px;padding:5px 8px;white-space:nowrap;box-shadow:0 4px 14px rgba(0,0,0,.45)}\n.m3-src{border-left:4px solid var(--c);background:rgba(127,140,160,.12);border-radius:8px;padding:6px 8px;margin:6px 0;font-size:12px;line-height:1.35}\n.m3-pd{font-size:12px;color:#9A3412;background:#FFF4E5;border-radius:8px;padding:6px 8px;margin:4px 0}\n.m3-cd{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:2px 0 4px;font-size:13px}.m3-cd i{font-style:normal;color:#64748B}\n.m3-cl{display:flex;flex-direction:column;gap:3px;max-height:150px;overflow:auto}\n.m3-cl button{text-align:left;border:1px solid #E2E8F0;background:#F8FAFC;border-radius:8px;padding:5px 8px;font:600 12px inherit;color:#14365D;cursor:pointer}.m3-cl button:hover{background:#EAF2FB}\n.m3-cl small{color:#64748B;font-weight:500}\n.m3-info{max-height:calc(100% - 140px);overflow:auto}\n.m3w{display:flex;flex-direction:column;gap:10px;min-width:0}\n.m3w>.m3-tb{position:relative;left:auto;top:auto;right:auto;z-index:6;pointer-events:auto;background:#0b1b2e;border-radius:14px;padding:8px;box-shadow:0 6px 18px rgba(14,42,74,.25)}\n.m3w>.m3-tb .m3-seg,.m3w>.m3-tb .m3-b{background:rgba(255,255,255,.06)}\n.m3-sideb{margin-left:auto}\n.m3w>.m3-tb .m3-sr{flex:1 1 150px;min-width:130px}\n@media (max-width:1400px){.m3w>.m3-tb .m3-seg button,.m3w>.m3-tb .m3-b{padding-left:9px;padding-right:9px}}\n.m3{height:clamp(540px,calc(100vh - 210px),960px)}\n.m3-bot{display:flex;flex-wrap:wrap;align-items:center;gap:8px 20px;background:#0b1b2e;color:#CFDCEA;border-radius:14px;padding:9px 14px;font-size:12px;box-shadow:0 6px 18px rgba(14,42,74,.25)}\n.m3-bot .m3-lays{position:static;flex-direction:row;flex-wrap:wrap;gap:4px 14px;background:none;border:0;padding:0;backdrop-filter:none}\n.m3-bot .m3-leg{position:static;transform:none;max-width:none;background:none;padding:0;justify-content:flex-start}\n.m3-bot .m3-help{position:static;margin-left:auto;max-width:420px;background:none;padding:0}\n.m3 .m3-info{top:12px;max-height:calc(100% - 24px)}\n.m3 .m3-cap{left:12px;top:12px;transform:none;width:300px;max-height:calc(100% - 24px);overflow:auto}\n.m3 .m3-pad{bottom:12px}\n.m3 .m3-info{width:340px}\n.m3-back{display:inline-flex;align-items:center;gap:4px;border:1px solid #CFE0F3;background:#EAF2FB;color:#1F5FA8;border-radius:999px;padding:5px 10px 5px 8px;font:700 12px inherit;cursor:pointer;margin:0 0 8px}.m3-back:hover{background:#DCEAFB}\n.m3-cl{max-height:240px}\n.m3-sec{margin:12px 0 4px;padding-top:8px;border-top:1px solid #E2E8F0}\n.m3-ss{display:flex;flex-direction:column;gap:1px;margin:2px 0 6px}.m3-ss span{font-weight:700;font-size:13px}.m3-ss small{font-size:11.5px;color:#64748B}\n.m3-ccm{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 8px;border-left:4px solid var(--c);background:rgba(127,140,160,.1);border-radius:8px;padding:6px 8px;margin:4px 0}\n.m3-ccm b{color:var(--c);font-size:14px}.m3-ccm span{font-size:11.5px;color:#43536A}.m3-ccm i{font-style:normal;color:#D4A017;margin-left:auto}\n.m3-chs{display:flex;flex-wrap:wrap;gap:4px;margin:6px 0}.m3-chs span{font-size:11px;font-weight:600;background:#EEF2F7;color:#334155;border-radius:999px;padding:3px 8px}.m3-chs .m3-chd{background:#FDECEC;color:#B42318}\n.m3-obs{font-size:12px;background:#FFF8E1;border-radius:8px;padding:6px 8px;margin:4px 0}\n.m3-et{border:1px solid #E2E8F0;border-radius:9px;padding:6px 8px;margin:5px 0}\n.m3-eth{display:flex;align-items:center;gap:6px}.m3-eth i{font:800 10.5px/1 inherit;font-style:normal;border-radius:6px;padding:4px 5px}.m3-eth b{flex:1;font-size:12px;line-height:1.2}.m3-eth span{font-size:11px;color:#64748B;font-weight:700}\n.m3-et ul{list-style:none;margin:5px 0 0;padding:0;display:flex;flex-direction:column;gap:3px}\n.m3-et li{display:flex;justify-content:space-between;gap:6px;font-size:11.5px;line-height:1.25;color:#334155}.m3-et li span{min-width:0}\n.m3-et li em{flex:none;font-style:normal;font-size:10.5px;font-weight:700;color:var(--c);white-space:nowrap}.m3-et li.m3-mais{color:#64748B}\n.m3-eok{font-size:11.5px;color:#64748B;margin:3px 0}\n.m3-pre{font-size:11.5px;color:#9A3412;background:#FFF4E5;border-radius:8px;padding:6px 8px;margin:4px 0;line-height:1.35}\n.m3-mt{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-size:12.5px;margin:3px 0}.m3-mt i{width:10px;height:10px;border-radius:50%;display:inline-block}\n.m3-pa{font-size:11px;font-weight:700;color:var(--c);border:1px solid var(--c);border-radius:999px;padding:2px 7px}\n.m3-cst{display:flex;gap:4px;margin:4px 0}.m3-cst span{flex:1;text-align:center;font-size:11px;font-weight:700;border-radius:7px;padding:4px 2px;background:#EEF2F7;color:#64748B}.m3-cst .ok{background:#2E7D32;color:#fff}.m3-cst .an{background:#F2C94C;color:#3A2E00}\n.m3-pdi{border-left:3px solid #C62828;background:#FDF2F2;border-radius:7px;padding:6px 8px;margin:5px 0;font-size:11.5px}.m3-pdi p{margin:2px 0;color:#1F2937;font-size:12px}.m3-pdi small{color:#64748B}.m3-atr{color:#C62828}\n.m3-acts{display:flex;gap:6px;margin-top:10px}.m3-acts button{flex:1;border:0;border-radius:9px;background:#1F5FA8;color:#fff;font:600 12px inherit;padding:8px 6px;cursor:pointer}.m3-acts button+button{background:#EAF2FB;color:#1F5FA8}\n@media (max-width:700px){.m3 .m3-info{width:auto}}\n@media (max-width:700px){.m3{height:70vh}.m3-bot .m3-lays{display:flex}.m3 .m3-cap{left:12px;right:12px;width:auto;top:auto;bottom:12px;max-height:45%}}\n"; document.head.appendChild(s2); })();
window.__m3init=function(esc,mqCor,MQ,MQ_Z,MQ_COMO,ST,renderCmMaq,X){
var M3={X:X||{cab:function(){ return []; }}, el:null, ok:false, loading:false, err:'', mode:'proc', nav:'orb', xr:true, lay:[true,true,true,true,false,true], pick:-1, tour:null, step:-1, lastSel:null, noFly:false};
var M3_URL='maq/uda3d.b64.txt?v=1', M3_THREE='https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js';
var M3_LAYC=['#E9EEF5','#6F9CC4','#4FC3F7','#C9A24A','#9AA5B1'];
var M3_FEAT=[['T-12001','Torre atmosférica',['T-12001']],['F-12001A','Forno F-12001A',['F-12001A']],['F-12001B','Forno F-12001B',['F-12001B']],['DL','Dessalgadoras',['DL-12001A','DL-12001B','DL-12001C','DL-12001D']],
  ['V-12001','Pré-vaporizador V-12001',['V-12001']],['V-12002','Vaso de topo V-12002',['V-12002']],['T-12003','Torre T-12003',['T-12003']],['C-12001','Compressores de GLP',['C-12001A','C-12001B']],
  ['AC','Air coolers do topo',['P-12017-01','P-12017-02','P-12017-03','P-12017-04']],['P1','1ª bateria de pré-aquecimento',['P-12001','P-12002A','P-12003A','P-12003B','P-12004A','P-12004B','P-12005A','P-12005B','P-12006A','P-12006B','P-12007A','P-12007B','P-12008']],
  ['B1','Bombas de carga',['B-12001A','B-12001B']],['SE','Subestação SE-1200',[]]];
function m3Col(tag){ var t=tag||''; return /^T-/.test(t)?'#DCE6F2':/^V-/.test(t)?'#C3D3E4':/^F-|^Q-F|^SL-/.test(t)?'#E8814A':/^P-\d{5}-0\d/.test(t)?'#86CFF5':/^P-/.test(t)?'#3FB6C2':/^B-/.test(t)?'#5B8DEF':/^C-/.test(t)?'#A286EE':/^DL-/.test(t)?'#3FBF85':/^TF-/.test(t)?'#FFC94D':/^UQ-/.test(t)?'#E36FA6':/^VT-/.test(t)?'#9AD07A':'#B8C4D0'; }
function m3Html(){ return '<div class="m3w"><div class="m3-tb"><div class="m3-seg"><button type="button" data-m3m="proc">🛢 Processo</button><button type="button" data-m3m="ele">⚡ Energia</button><button type="button" data-m3m="av">📊 Avanço</button></div>'+
  '<div class="m3-seg"><button type="button" data-m3n="orb">🛰 Girar</button><button type="button" data-m3n="walk">🚶 Caminhar</button></div>'+
  '<div class="m3-sr"><input type="search" placeholder="🔎 Buscar tag ou circuito" aria-label="Buscar tag de equipamento ou circuito" autocomplete="off" spellcheck="false"><button type="button" class="m3-sc" aria-label="Limpar busca">✕</button><div class="m3-sl" hidden></div></div>'+
  '<button type="button" class="m3-b" data-m3x>👁 Raio-X</button><button type="button" class="m3-b" data-m3tour>▶ Passeio pelo processo</button><button type="button" class="m3-b" data-m3home title="Voltar à vista geral">⌂ Vista geral</button><button type="button" class="m3-b m3-sideb" data-m3side>📋 Painel de áreas</button></div>'+
  '<div class="m3" tabindex="0"><canvas class="m3-cv"></canvas><div class="m3-lb"></div>'+
  '<div class="m3-cap" hidden></div><div class="m3-info" hidden></div>'+
  '<div class="m3-pad" hidden><button type="button" data-m3k="KeyW">▲</button><button type="button" data-m3k="KeyA">◀</button><button type="button" data-m3k="KeyS">▼</button><button type="button" data-m3k="KeyD">▶</button><button type="button" data-m3k="KeyE">⤒</button><button type="button" data-m3k="KeyQ">⤓</button></div>'+
  '<div class="m3-ld"><div class="m3-spin"></div><b>Carregando a maquete 3D da UDA…</b><span>Modelo do Navisworks (rev. 96) · cerca de 2 MB</span></div></div>'+
  '<div class="m3-bot"><div class="m3-lays">'+['Equipamentos','Estruturas e civil','Tubulação','Elétrica','Instrumentação e outros','Itens da base fora do modelo'].map(function(n,i){ return '<label class="m3-ch"><input type="checkbox" data-m3l="'+i+'"><i style="background:'+(M3_LAYC[i]||'#FF4FB0')+'"></i>'+n+'</label>'; }).join('')+'</div>'+
  '<div class="m3-leg"></div><div class="m3-help"></div></div></div>'; }
function m3Q(s){ return M3.el.querySelector(s); }
function m3Attach(slot, D){ if(!slot) return; M3.D=D;
  if(!M3.el){ var w=document.createElement('div'); w.innerHTML=m3Html(); M3.el=w.firstChild; M3.st=M3.el.querySelector('.m3'); m3Bind(); }
  slot.appendChild(M3.el); m3Ui(); if(M3.ok){ m3Resize(); m3Paint(); m3Start(); if(MQ.sel!==M3.lastSel){ M3.lastSel=MQ.sel; if(!M3.noFly) m3FocusZone(MQ.sel); } M3.noFly=false; }
  else if(!M3.loading) m3Load(); }
function m3Ui(){ if(!M3.el) return; M3.el.querySelectorAll('[data-m3m]').forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.m3m===M3.mode); });
  M3.el.querySelectorAll('[data-m3n]').forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.m3n===M3.nav); });
  M3.el.querySelectorAll('[data-m3l]').forEach(function(c){ c.checked=!!M3.lay[+c.dataset.m3l]; });
  m3Q('[data-m3x]').setAttribute('aria-pressed', M3.xr); m3Q('[data-m3tour]').textContent=M3.tour?'⏸ Parar o passeio':'▶ Passeio pelo processo';
  m3Q('.m3-pad').hidden=M3.nav!=='walk'; M3.st.classList.toggle('xr', M3.xr); var sb=m3Q('[data-m3side]'), so=!!(M3.X.sideOn&&M3.X.sideOn()); sb.setAttribute('aria-pressed', so); sb.textContent=so?'📋 Fechar painel':'📋 Painel de áreas';
  m3Q('.m3-help').textContent=M3.nav==='walk'?'W A S D ou setas para andar · arraste para olhar · Shift corre · E/Q sobe e desce · clique num item para ver o que é':'Arraste para girar · botão direito ou dois dedos para mover · roda ou pinça para aproximar · clique num equipamento';
  var lg=m3Q('.m3-leg'); lg.innerHTML=M3.mode==='av'?'<i style="background:#C62828"></i>até 39%<i style="background:#E08A00"></i>40 a 69%<i style="background:#2E7D32"></i>70% ou mais<i style="background:#64748B"></i>sem área':M3.mode==='ele'?'<i style="background:#FFD54A"></i>energia saindo da SE-1200 para os motores e transformadores':'<i style="background:#8A5A2B"></i>cru<i style="background:#FF7A1A"></i>cru quente<i style="background:#4FC3F7"></i>água<i style="background:#E8F4FF"></i>vapor e gás<i style="background:#FFD54A"></i>nafta, querosene e diesel<i style="background:#7A2E1A"></i>resíduo (RAT)'; }
function m3Bind(){ var el=M3.el;
  el.querySelectorAll('[data-m3m]').forEach(function(b){ b.onclick=function(){ M3.mode=b.dataset.m3m; m3Ui(); if(M3.ok){ m3Paint(); m3Flows(); } }; });
  el.querySelectorAll('[data-m3n]').forEach(function(b){ b.onclick=function(){ m3SetNav(b.dataset.m3n); }; });
  el.querySelectorAll('[data-m3l]').forEach(function(c){ c.onchange=function(){ M3.lay[+c.dataset.m3l]=c.checked; if(M3.ok) m3Vis(); if(M3.base) M3.base.visible=!!M3.lay[5]; }; });
  m3Q('[data-m3x]').onclick=function(){ M3.xr=!M3.xr; m3Ui(); if(M3.ok) m3Mats(); };
  m3Q('[data-m3home]').onclick=function(){ m3StopTour(); M3.pick=-1; m3Info(); m3SetNav('orb'); m3Home(); };
  m3Q('[data-m3side]').onclick=function(){ if(M3.X.side) M3.X.side(); };
  m3Q('[data-m3tour]').onclick=function(){ if(M3.tour) m3StopTour(); else m3StartTour(); m3Ui(); };
  el.querySelectorAll('[data-m3k]').forEach(function(b){ var k=b.dataset.m3k; b.onpointerdown=function(e){ e.preventDefault(); M3.keys[k]=1; }; b.onpointerup=b.onpointerleave=function(){ M3.keys[k]=0; }; });
  M3.keys={}; m3SearchUi(); }
async function m3Load(){ M3.loading=true; var ld=m3Q('.m3-ld');
  try{ var T=await import(M3_THREE); M3.T=T;
    var r=await fetch(M3_URL); if(!r.ok) throw new Error('HTTP '+r.status); var tx=(await r.text()).trim(), bs=atob(tx), u=new Uint8Array(bs.length); for(var i=0;i<bs.length;i++) u[i]=bs.charCodeAt(i); var ab=u.buffer;
    if(u[0]===0x1f&&u[1]===0x8b) ab=await new Response(new Blob([ab]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
    m3Parse(ab); m3Scene(); M3.ok=true; m3LoadTags(); ld.hidden=true; M3.lastSel=MQ.sel; m3Resize(); m3Paint(); m3Flows(); m3Home(true); if(MQ.sel) m3FocusZone(MQ.sel); m3Start();
  }catch(e){ console.error(e); M3.err=String(e&&e.message||e); ld.innerHTML='<b>Não foi possível abrir a maquete 3D</b><span>'+esc(M3.err)+' · confira a conexão e recarregue a página. O esquema animado continua disponível no botão acima.</span>'; }
  M3.loading=false; }
function m3Parse(ab){ var dv=new DataView(ab), n=dv.getUint32(0,true), meta=JSON.parse(new TextDecoder().decode(new Uint8Array(ab,4,n))), base=4+n, A={};
  var C={uint16:Uint16Array,uint8:Uint8Array,uint32:Uint32Array,float32:Float32Array};
  Object.keys(meta.arr).forEach(function(k){ var x=meta.arr[k], len=x[2].reduce(function(a,b){ return a*b; },1); A[k]=new C[x[1]](ab, base+x[0], len); });
  M3.M=meta; M3.A=A; }
function m3Dq(a,i,o){ var M=M3.M; return [M.LO[0]+a[i]/65535*M.EXT[0], M.LO[1]+a[i+1]/65535*M.EXT[1], M.LO[2]+a[i+2]/65535*M.EXT[2]]; }
function m3Scene(){ var T=M3.T, M=M3.M, A=M3.A, cv=m3Q('.m3-cv');
  var R=new T.WebGLRenderer({canvas:cv, antialias:true, powerPreference:'high-performance'}); R.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)); M3.R=R;
  var S=new T.Scene(); M3.S=S; M3.cam=new T.PerspectiveCamera(50,1.6,0.3,3000);
  S.add(new T.HemisphereLight(0xdfeeff,0x1a2433,1.1)); var dl=new T.DirectionalLight(0xffffff,1.3); dl.position.set(-120,220,80); S.add(dl);
  M3.gy=14.3; // cota do piso (100,3 m) no sistema local
  var g=new T.Mesh(new T.PlaneGeometry(1400,1400), new T.MeshLambertMaterial({color:0x0f2238})); g.rotation.x=-Math.PI/2; g.position.set(140,M3.gy-0.05,-200); S.add(g); M3.ground=g;
  var gr=new T.GridHelper(600,60,0x24405f,0x152b44); gr.position.set(140,M3.gy,-200); S.add(gr); M3.grid=gr;
  M3.meshes=[]; M3.byLay=[[],[],[],[],[]];
  var box=new T.BoxGeometry(1,1,1), cyl8=new T.CylinderGeometry(1,1,1,8,1,true), cyl16=new T.CylinderGeometry(1,1,1,18,1,true);
  var m4=new T.Matrix4(), q=new T.Quaternion(), up=new T.Vector3(0,1,0), d=new T.Vector3(), p=new T.Vector3(), s=new T.Vector3();
  for(var L=0;L<5;L++){
    // caixas
    var bi=[]; for(var i=0;i<A.boxl.length;i++) if(A.boxl[i]===L) bi.push(i);
    if(bi.length){ var mb=new T.InstancedMesh(box, m3Mat(L), bi.length), ar=mb.instanceMatrix.array;
      bi.forEach(function(i,k){ var a=m3Dq(A.box,i*6), b=m3Dq(A.box,i*6+3), o=k*16; ar.fill(0,o,o+16); ar[o]=Math.max(b[0]-a[0],0.02); ar[o+5]=Math.max(b[1]-a[1],0.02); ar[o+10]=Math.max(b[2]-a[2],0.02); ar[o+12]=(a[0]+b[0])/2; ar[o+13]=(a[1]+b[1])/2; ar[o+14]=(a[2]+b[2])/2; ar[o+15]=1; });
      mb.userData={L:L, own:bi.map(function(i){ return A.boxo[i]; })}; m3Fin(mb); }
    // cilindros (equipamentos com mais segmentos)
    var ci=[]; for(i=0;i<A.cyll.length;i++) if(A.cyll[i]===L) ci.push(i);
    if(ci.length){ var mc=new T.InstancedMesh(L===0?cyl16:cyl8, m3Mat(L), ci.length);
      ci.forEach(function(i,k){ var a=m3Dq(A.cyl,i*6), b=m3Dq(A.cyl,i*6+3), r=A.cylr[i]/1000; d.set(b[0]-a[0],b[1]-a[1],b[2]-a[2]); var len=Math.max(d.length(),0.01); d.divideScalar(len); q.setFromUnitVectors(up,d); p.set((a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2); s.set(r,len,r); m4.compose(p,q,s); mc.setMatrixAt(k,m4); });
      mc.userData={L:L, own:ci.map(function(i){ return A.cylo[i]; })}; m3Fin(mc); }
    // cascos (malha única por camada)
    var hi=[]; for(i=0;i<A.hl.length;i++) if(A.hl[i]===L) hi.push(i);
    if(hi.length){ var nv=0, nt=0; hi.forEach(function(i){ var gg=A.hg[i]; nv+=A.gvo[gg+1]-A.gvo[gg]; nt+=A.gto[gg+1]-A.gto[gg]; });
      var P=new Float32Array(nv*3), I=new Uint32Array(nt*3), FO=new Uint16Array(nt), VO=new Uint16Array(nv), v0=0, t0=0;
      hi.forEach(function(i){ var gg=A.hg[i], tr=m3Dq(A.ht,i*3), bb=A.gbb.subarray(gg*6,gg*6+6), a0=A.gvo[gg], a1=A.gvo[gg+1], b0=A.gto[gg], b1=A.gto[gg+1], o=A.ho[i];
        for(var v=a0;v<a1;v++){ var w=(v0+v-a0)*3; P[w]=tr[0]+bb[0]+A.gv[v*3]/65535*bb[3]; P[w+1]=tr[1]+bb[1]+A.gv[v*3+1]/65535*bb[4]; P[w+2]=tr[2]+bb[2]+A.gv[v*3+2]/65535*bb[5]; VO[v0+v-a0]=o; }
        for(var t=b0;t<b1;t++){ var z=(t0+t-b0); I[z*3]=v0+A.gt[t*3]; I[z*3+1]=v0+A.gt[t*3+1]; I[z*3+2]=v0+A.gt[t*3+2]; FO[z]=o; }
        v0+=a1-a0; t0+=b1-b0; });
      var G=new T.BufferGeometry(); G.setAttribute('position',new T.BufferAttribute(P,3)); G.setIndex(new T.BufferAttribute(I,1)); G.computeVertexNormals(); G.setAttribute('color',new T.BufferAttribute(new Float32Array(nv*3).fill(1),3));
      var mh=new T.Mesh(G, m3Mat(L,true)); mh.userData={L:L, fo:FO, vo:VO, hull:true}; m3Fin(mh); }
  }
  // brilho dos fornos e partículas
  var tex=m3Dot(); M3.tex=tex; M3.glow=[];
  ['F-12001A','F-12001B'].forEach(function(t){ var e=M.eq[t]; if(!e) return; for(var k=-1;k<=1;k++){ var sp=new T.Sprite(new T.SpriteMaterial({map:tex, color:0xff7a1a, blending:T.AdditiveBlending, depthWrite:false, transparent:true})); sp.position.set(e.c[0]+k*5, M3.gy+3, e.c[2]); sp.scale.set(10,10,1); S.add(sp); M3.glow.push(sp); } });
  M3.pts=new T.Points(new T.BufferGeometry(), new T.PointsMaterial({size:1.6, map:tex, vertexColors:true, transparent:true, depthWrite:false, blending:T.AdditiveBlending, sizeAttenuation:true})); M3.pts.frustumCulled=false; M3.pts.renderOrder=10; S.add(M3.pts);
  M3.selBox=new T.Box3Helper(new T.Box3(), 0xffd54a); M3.selBox.visible=false; M3.selBox.renderOrder=11; S.add(M3.selBox);
  m3Vis(); m3Controls(); m3Labels();
  M3.ro=new ResizeObserver(function(){ m3Resize(); }); M3.ro.observe(M3.st); }
function m3Fin(m){ m.computeBoundingBox&&m.computeBoundingBox(); m.computeBoundingSphere&&m.computeBoundingSphere(); if(m.isInstancedMesh){ m.instanceMatrix.needsUpdate=true; m.instanceColor=new M3.T.InstancedBufferAttribute(new Float32Array(m.count*3).fill(1),3); }
  m.renderOrder=m.userData.L===0?1:2; M3.S.add(m); M3.meshes.push(m); M3.byLay[m.userData.L].push(m); }
function m3Mat(L, vc){ var T=M3.T, m=new T.MeshLambertMaterial({color:L===0?0xffffff:M3_LAYC[L], vertexColors:!!vc});
  m.userData.L=L; m.onBeforeCompile=function(sh){ sh.uniforms.uXr={value:0}; m.userData.sh=sh; sh.fragmentShader='uniform float uXr;\n'+sh.fragmentShader.replace('#include <dithering_fragment>','#include <dithering_fragment>\n#ifndef FLAT_SHADED\nfloat fr=pow(1.0-abs(normalize(vNormal).z),2.2);\nif(uXr>0.5){ gl_FragColor.a=clamp(gl_FragColor.a*(0.28+2.2*fr),0.0,1.0); gl_FragColor.rgb+=fr*0.35; }\n#endif'); m3MatX(m); };
  m3MatX(m); return m; }
function m3MatX(m){ var L=m.userData.L, xr=M3.xr, ghost=xr&&L!==0&&!(L===3&&M3.mode==='ele');
  m.transparent=ghost; m.opacity=ghost?[0.9,0.15,0.3,M3.mode==='ele'?0.5:0.2,0.18][L]:1; m.depthWrite=!ghost; m.emissive&&m.emissive.set(L===0&&xr?0x101820:0x000000);
  if(m.userData.sh) m.userData.sh.uniforms.uXr.value=ghost?1:0; m.needsUpdate=true; }
function m3Mats(){ M3.meshes.forEach(function(m){ m3MatX(m.material); }); var dark=M3.xr; M3.S.background=new M3.T.Color(dark?0x0b1b2e:0xcfe3f3); M3.S.fog=new M3.T.Fog(dark?0x0b1b2e:0xcfe3f3, 380, 1100); M3.ground.material.color.set(dark?0x0f2238:0x9fb4a0); M3.grid.visible=dark; }
function m3Vis(){ M3.meshes.forEach(function(m){ m.visible=!!M3.lay[m.userData.L]; }); }
function m3Dot(){ var c=document.createElement('canvas'); c.width=c.height=64; var x=c.getContext('2d'), g=x.createRadialGradient(32,32,0,32,32,32); g.addColorStop(0,'rgba(255,255,255,1)'); g.addColorStop(.35,'rgba(255,255,255,.75)'); g.addColorStop(1,'rgba(255,255,255,0)'); x.fillStyle=g; x.fillRect(0,0,64,64); var t=new M3.T.CanvasTexture(c); return t; }
/* cores: tipo do equipamento, avanço (SSOP) ou energia */
function m3ZoneP(z){ var Z=M3.D&&M3.D.Z&&M3.D.Z[z]; return Z?Z.p:null; }
function m3OwnCol(o){ var M=M3.M, L=M.olay[o], n=M.owners[o], z=M.ozone[o];
  if(M3.mode==='av'){ if(L!==0&&z!=='se') return null; var p=m3ZoneP(z); return p==null?'#64748B':mqCor(p); }
  if(M3.mode==='ele'){ if(/^TF-|^B-|^C-|^P-\d{5}-0\d|^VT-/.test(n)&&L===0) return '#FFD54A'; if(L===0) return '#7C8A9A'; return null; }
  return L===0?m3Col(n):null; }
function m3Paint(){ if(!M3.ok) return; var T=M3.T, c=new T.Color(), w=new T.Color(1,1,1), hl=new T.Color(1.6,1.35,0.5), selZ=MQ.sel, cache={};
  var col=function(o){ if(cache[o]!==undefined) return cache[o]; var x=m3OwnCol(o); var C=x?new T.Color(x):w.clone(); if(selZ&&M3.M.ozone[o]===selZ&&M3.mode!=='av') C.multiply(hl); if(M3.hl&&M3.hl[o]) C.setRGB(2.2,0.45,1.5); if(o===M3.pick) C.setRGB(2,1.7,0.4); cache[o]=C; return C; };
  M3.meshes.forEach(function(m){ var u=m.userData;
    if(m.isInstancedMesh){ for(var i=0;i<m.count;i++) m.setColorAt(i,col(u.own[i])); m.instanceColor.needsUpdate=true; }
    else { var ca=m.geometry.attributes.color, ar=ca.array; for(var v=0;v<u.vo.length;v++){ var C=col(u.vo[v]); ar[v*3]=C.r; ar[v*3+1]=C.g; ar[v*3+2]=C.b; } ca.needsUpdate=true; } });
  M3.meshes.forEach(function(m){ m.material.color.set(m.userData.L===0?0xffffff:(M3.mode==='ele'&&m.userData.L===3?'#FFD54A':M3_LAYC[m.userData.L])); });
  m3Mats(); m3LabelsTxt(); }
/* câmera: girar (órbita) e caminhar */
function m3Controls(){ var cv=m3Q('.m3-cv'), C=M3.ctl={th:-0.7, ph:1.05, r:340, tg:new M3.T.Vector3(140,20,-210), go:null, yaw:0, pit:-0.05, pos:new M3.T.Vector3()}, drag=null, pts={};
  var pan=function(dx,dy){ var cam=M3.cam, k=C.r*0.0016, rt=new M3.T.Vector3().setFromMatrixColumn(cam.matrix,0), fw=new M3.T.Vector3(-Math.sin(C.th),0,-Math.cos(C.th)); C.tg.addScaledVector(rt,-dx*k).addScaledVector(fw,dy*k); };
  cv.addEventListener('contextmenu',function(e){ e.preventDefault(); });
  cv.addEventListener('pointerdown',function(e){ cv.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; drag={x:e.clientX,y:e.clientY,b:e.button,s:e.shiftKey,m:0,t:Date.now()}; C.go=null; M3.st.focus({preventScroll:true}); });
  cv.addEventListener('pointermove',function(e){ var o=pts[e.pointerId]; if(!o||!drag) return; var dx=e.clientX-o.x, dy=e.clientY-o.y; o.x=e.clientX; o.y=e.clientY; drag.m+=Math.abs(dx)+Math.abs(dy);
    var ids=Object.keys(pts);
    if(ids.length===2){ var a=pts[ids[0]], b=pts[ids[1]], dd=Math.hypot(a.x-b.x,a.y-b.y); if(drag.pd){ var f=drag.pd/dd; if(M3.nav==='orb') C.r=Math.max(15,Math.min(900,C.r*f)); else m3Walk(0,(f-1)*-40); } drag.pd=dd; if(M3.nav==='orb') pan(dx/2,dy/2); return; }
    if(M3.nav==='walk'){ C.yaw-=dx*0.004; C.pit=Math.max(-1.4,Math.min(1.4,C.pit-dy*0.004)); return; }
    if(drag.b===2||drag.s) pan(dx,dy); else { C.th-=dx*0.005; C.ph=Math.max(0.12,Math.min(1.52,C.ph-dy*0.005)); } });
  var up=function(e){ delete pts[e.pointerId]; if(drag&&drag.m<6&&Date.now()-drag.t<500&&e.type==='pointerup') m3Pick(e); if(!Object.keys(pts).length) drag=null; else if(drag) drag.pd=0; };
  cv.addEventListener('pointerup',up); cv.addEventListener('pointercancel',up);
  cv.addEventListener('wheel',function(e){ e.preventDefault(); C.go=null; if(M3.nav==='walk'){ m3Walk(0,-e.deltaY*0.05); return; } C.r=Math.max(15,Math.min(900,C.r*Math.exp(e.deltaY*0.0012))); },{passive:false});
  M3.st.addEventListener('keydown',function(e){ if(/^(Key[WASDQE]|Arrow|Shift)/.test(e.code)){ M3.keys[e.code]=1; if(M3.nav==='walk') e.preventDefault(); } });
  M3.st.addEventListener('keyup',function(e){ M3.keys[e.code]=0; });
  M3.st.addEventListener('blur',function(){ M3.keys={}; }); }
function m3Walk(side,fwd,upd){ var C=M3.ctl; C.pos.x+=Math.sin(C.yaw)*-fwd+Math.cos(C.yaw)*side; C.pos.z+=Math.cos(C.yaw)*-fwd-Math.sin(C.yaw)*side; C.pos.y=Math.max(M3.gy+1.7, C.pos.y+(upd||0)); }
function m3SetNav(n){ var C=M3.ctl; M3.nav=n; m3Ui(); if(!M3.ok) return; C.go=null; m3PtSize();
  if(n==='walk'){ var cam=M3.cam; C.pos.copy(cam.position); if(C.pos.y>M3.gy+40||C.r>120){ C.pos.set(C.tg.x, M3.gy+1.7, C.tg.z+40); C.yaw=0; } else { C.yaw=C.th; } C.pit=-0.05; C.pos.y=Math.max(M3.gy+1.7,Math.min(C.pos.y,M3.gy+1.7)); }
  else { C.tg.set(M3.cam.position.x-Math.sin(C.yaw)*30, M3.gy+5, M3.cam.position.z-Math.cos(C.yaw)*30); C.r=70; C.th=C.yaw; C.ph=1.15; }
  M3.st.focus({preventScroll:true}); }
function m3Home(now){ m3Fly(new M3.T.Vector3(150,22,-228), 175, -0.62, 1.0, now); }
function m3Fly(tg,r,th,ph,now){ var C=M3.ctl; if(M3.nav==='walk') m3SetNav('orb'); var go={t0:performance.now(), d:now?1:1300, a:{tg:C.tg.clone(),r:C.r,th:C.th,ph:C.ph}, b:{tg:tg,r:r,th:th==null?C.th:th,ph:ph==null?C.ph:ph}};
  var dt=go.b.th-go.a.th; while(dt>Math.PI) { go.b.th-=2*Math.PI; dt-=2*Math.PI; } while(dt<-Math.PI){ go.b.th+=2*Math.PI; dt+=2*Math.PI; } C.go=go; }
function m3BoxOf(tags){ var M=M3.M, lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9], n=0; tags.forEach(function(t){ var e=M.eq[t]; if(!e) return; n++; for(var i=0;i<3;i++){ lo[i]=Math.min(lo[i],e.c[i]-e.s[i]/2); hi[i]=Math.max(hi[i],e.c[i]+e.s[i]/2); } }); return n?[lo,hi]:null; }
function m3ZoneTags(z){ var M=M3.M; return Object.keys(M.eq).filter(function(t){ return M.eq[t].z===z; }); }
var M3_ZF={pre1:['P-12001','P-12002A','P-12003A','P-12003B','P-12004A','P-12004B','P-12005A','P-12005B','P-12006A','P-12006B','P-12007A','P-12007B','P-12008','B-12001A','B-12001B'],dessal:['DL-12001A','DL-12001B','DL-12001C','DL-12001D'],pre2:['P-12009','P-12010A','P-12011A','P-12012A','P-12013A','P-12014A','P-12015A','V-12001'],forno:['F-12001A','F-12001B'],torre:['T-12001'],topo:['P-12017-01','P-12017-02','P-12017-03','P-12017-04','V-12002'],t3:['T-12003'],glp:['C-12001A','C-12001B'],prod:['P-12018A','P-12019A','P-12020A','P-12021A','P-12024A','P-12025A','P-12027A'],rat:['FT-12004A','FT-12004B'],quim:['UQ-12001','UQ-12002','UQ-12003']};
function m3ZoneBox(z){ if(!z) return null; var M=M3.M; if(M3_ZF[z]){ var b0=m3BoxOf(M3_ZF[z]); if(b0) return b0; } if(z==='se'||z==='bt'||z==='hvac'||z==='tic') return M.se; if(z==='aterr') return [[110,M3.gy,-370],[200,M3.gy+40,-20]]; return m3BoxOf(m3ZoneTags(z)); }
function m3FocusBox(b){ if(!b) return; var T=M3.T, c=new T.Vector3((b[0][0]+b[1][0])/2,(b[0][1]+b[1][1])/2,(b[0][2]+b[1][2])/2), s=Math.max(b[1][0]-b[0][0],b[1][1]-b[0][1],b[1][2]-b[0][2]); m3Fly(c, Math.max(35,s*1.9)*(M3.vo&&M3.W?1.15*M3.W/Math.max(300,M3.W-M3.vo):1), null, 1.05); M3.selBox.box.min.set(b[0][0],b[0][1],b[0][2]); M3.selBox.box.max.set(b[1][0],b[1][1],b[1][2]); M3.selBox.visible=true; }
function m3FocusZone(z){ if(!M3.ok) return; if(!z){ M3.selBox.visible=false; m3Paint(); return; } m3Paint(); m3FocusBox(m3ZoneBox(z)); }
/* clique: identifica o item */
function m3Pick(e){ if(!M3.ok) return; var T=M3.T, cv=m3Q('.m3-cv'), r=cv.getBoundingClientRect(), ry=new T.Raycaster(), v=new T.Vector2((e.clientX-r.left)/r.width*2-1, -(e.clientY-r.top)/r.height*2+1);
  ry.setFromCamera(v,M3.cam); if(M3.base&&M3.base.visible){ var hb=ry.intersectObject(M3.base,false); if(hb.length){ var tg=M3.base.userData.tags[hb[0].instanceId]; m3Q('.m3-sr input').value=tg; m3GoTag(tg); return; } } var L=M3.meshes.filter(function(m){ return m.visible; }), hit=ry.intersectObjects(L,false), o=-1;
  for(var i=0;i<hit.length&&o<0;i++){ var h=hit[i], u=h.object.userData; if(M3.xr&&u.L!==0&&i+1<hit.length&&hit.slice(i+1,i+6).some(function(x){ return x.object.userData.L===0; })) continue; o=h.object.isInstancedMesh?u.own[h.instanceId]:u.fo[h.faceIndex]; }
  M3.pick=o; m3Info(); m3Paint();
  if(o>=0){ var z=M3.M.ozone[o]; if(z&&MQ_Z[z]&&MQ.sel!==z){ MQ.sel=z; M3.noFly=true; M3.lastSel=z; renderCmMaq(); } } }
function m3Info(){ var box=m3Q('.m3-info'), o=M3.pick; if(o<0){ box.hidden=true; return; } var M=M3.M, n=M.owners[o], L=M.olay[o], e=L===0?M.eq[n]:null, z=M.ozone[o], p=z?m3ZoneP(z):null;
  box.innerHTML='<button type="button" class="m3-x" aria-label="Fechar">✕</button><div class="m3-k">'+esc(M.layers[L]||'')+'</div><h4>'+esc(n)+'</h4>'+(e&&(e.d||/^F-12001/.test(n))?'<p>'+esc(e.d?e.d.charAt(0)+e.d.slice(1).toLowerCase():'Forno de carga da torre')+'</p>':'')+
    (e?'<div class="m3-dim">'+e.s.map(function(x){ return x.toFixed(1).replace('.',','); }).join(' × ')+' m · cota do topo '+(e.c[1]+e.s[1]/2+86).toFixed(1).replace('.',',')+' m</div>':'')+
    (z&&MQ_Z[z]?'<div class="m3-z" style="--c:'+mqCor(p)+'"><span>'+esc(MQ_Z[z].t)+'</span><b>'+(p==null?'sem HH':p+'%')+'</b></div><button type="button" class="m3-go">Ver os SSOP desta área ›</button>':'<div class="m3-dim">Sem área de comissionamento ligada a este item.</div>');
  box.hidden=false; box.querySelector('.m3-x').onclick=function(){ M3.pick=-1; m3Info(); m3Paint(); };
  var g=box.querySelector('.m3-go'); if(g) g.onclick=function(){ if(M3.X.side&&!(M3.X.sideOn&&M3.X.sideOn())){ M3.X.side(true); return; } var s=document.querySelector('.mq-side'); if(s) s.scrollIntoView({behavior:'smooth',block:'nearest'}); }; }
/* rótulos dos equipamentos principais */
function m3Labels(){ var lb=m3Q('.m3-lb'), M=M3.M; M3.lbl=[];
  M3_FEAT.forEach(function(f){ var b=f[0]==='SE'?M.se:m3BoxOf(f[2]); if(!b) return; var z=f[0]==='SE'?'se':(M.eq[f[2][0]]||{}).z, d=document.createElement('button'); d.type='button'; d.className='m3-tag';
    d.onclick=function(){ m3StopTour(); M3.pick=-1; m3Info(); if(z&&MQ.sel!==z){ MQ.sel=z; M3.lastSel=z; renderCmMaq(); } m3FocusBox(b); };
    lb.appendChild(d); M3.lbl.push({el:d, f:f, z:z, p:new M3.T.Vector3((b[0][0]+b[1][0])/2, b[1][1]+2, (b[0][2]+b[1][2])/2)}); }); m3LabelsTxt(); }
function m3LabelsTxt(){ (M3.lbl||[]).forEach(function(l){ var p=l.z?m3ZoneP(l.z):null; l.el.innerHTML='<b>'+esc(l.f[1])+'</b>'+(p!=null?'<i style="--c:'+mqCor(p)+'">'+p+'%</i>':''); l.el.classList.toggle('on', !!l.z&&MQ.sel===l.z); l.w=0; }); }
function m3LabelsPos(){ var W=M3.W, H=M3.H, v=new M3.T.Vector3(), placed=M3.capR?[M3.capR]:[], L=(M3.lbl||[]).slice().sort(function(a,b){ return (b.el.classList.contains('on')?1:0)-(a.el.classList.contains('on')?1:0); });
  L.forEach(function(l){ v.copy(l.p).project(M3.cam); var vis=!M3.route&&v.z<1&&v.z>-1&&Math.abs(v.x)<1.05&&Math.abs(v.y)<1.05&&(M3.nav!=='walk'||M3.cam.position.distanceTo(l.p)<90), x=(v.x+1)/2*W, y=(1-v.y)/2*H;
    if(vis){ var w=l.w||(l.w=l.el.offsetWidth||140), r=[x-w/2-4,y-30,x+w/2+4,y]; vis=!placed.some(function(q){ return r[0]<q[2]&&r[2]>q[0]&&r[1]<q[3]&&r[3]>q[1]; }); if(vis) placed.push(r); }
    l.el.style.visibility=vis?'visible':'hidden'; if(vis) l.el.style.transform='translate('+x.toFixed(1)+'px,'+y.toFixed(1)+'px) translate(-50%,-100%)'; }); }
function m3PinsPos(){ var W=M3.W, H=M3.H, v=new M3.T.Vector3(); (M3.pins||[]).forEach(function(p){ v.copy(p.at).project(M3.cam); var vis=v.z<1&&v.z>-1&&Math.abs(v.x)<1.1&&Math.abs(v.y)<1.1; p.el.style.visibility=vis?'visible':'hidden'; if(vis) p.el.style.transform='translate('+((v.x+1)/2*W).toFixed(1)+'px,'+((1-v.y)/2*H).toFixed(1)+'px) translate(-50%,-100%)'; }); }
/* fluxos: processo (cru → produtos) e energia (SE-1200 → motores) */
function m3Pt(t,where){ var e=M3.M.eq[t]; if(!e) return null; var y=where==='top'?e.c[1]+e.s[1]/2:where==='bot'?e.c[1]-e.s[1]/2+1:where==='mid'?e.c[1]+e.s[1]*0.1:e.c[1]; return [e.c[0],y,e.c[2]]; }
function m3Ctr(tags){ var b=m3BoxOf(tags); return b?[(b[0][0]+b[1][0])/2,(b[0][1]+b[1][1])/2,(b[0][2]+b[1][2])/2]:null; }
function m3Route(a,b,hy){ if(!a||!b) return null; var y=hy||M3.gy+12, rx=147.5; return [a,[a[0],y,a[2]],[rx,y,a[2]],[rx,y,b[2]],[b[0],y,b[2]],b]; }
function m3Flows(){ if(!M3.ok) return; var F=[], add=function(path,col,n,sp){ if(path&&path.every(Boolean)) F.push({p:path,c:new M3.T.Color(col),n:n||40,sp:sp||14}); };
  var gy=M3.gy, P1=m3Ctr(['P-12001','P-12003A','P-12004A','P-12005A','P-12006A','P-12007A','P-12008']), P2=m3Ctr(['P-12009','P-12010A','P-12011A','P-12012A','P-12013A','P-12014A','P-12015A']), DL=m3Ctr(['DL-12001A','DL-12001B','DL-12001C','DL-12001D']), PR=m3Ctr(['P-12018A','P-12019A','P-12020A','P-12021A','P-12024A','P-12025A','P-12027A']), AC=m3Ctr(['P-12017-01','P-12017-02','P-12017-03','P-12017-04']);
  if(M3.mode==='proc'){ var B1=m3Pt('B-12001A'), lim=[147.5,gy+12,-385];
    add(m3Route(lim,B1),'#B07A3B',60); add(m3Route(B1,P1),'#9A6A35',40); add(m3Route(P1,DL),'#A0703A',50); add(m3Route(DL,P2),'#C86A2A',50);
    add(m3Route(P2,m3Pt('V-12001')),'#E0702A',40); add(m3Route(m3Pt('V-12001','bot'),m3Pt('F-12001A','bot'),gy+8),'#FF7A1A',40); add(m3Route(m3Pt('V-12001','bot'),m3Pt('F-12001B','bot'),gy+8),'#FF7A1A',40);
    add(m3Route(m3Pt('F-12001A'),m3Pt('T-12001','bot'),gy+16),'#FF4A1A',40,18); add(m3Route(m3Pt('F-12001B'),m3Pt('T-12001','bot'),gy+16),'#FF4A1A',40,18);
    var tt=m3Pt('T-12001','top'); if(tt){ add([tt,[tt[0],tt[1]+3,tt[2]],[AC[0],tt[1]+3,tt[2]],[AC[0],tt[1]+3,AC[2]],AC],'#E8F4FF',50,18); }
    add(m3Route(AC,m3Pt('V-12002')),'#D7ECFF',35); add(m3Route(m3Pt('V-12002'),m3Pt('T-12003')),'#FFE27A',30); add(m3Route(m3Pt('V-12002','top'),m3Pt('C-12001A')),'#FFFFFF',25,20);
    add(m3Route(m3Pt('T-12001','mid'),PR,gy+22),'#FFD54A',45); add(m3Route(PR,[147.5,gy+12,-385]),'#FFC23A',40);
    add(m3Route(m3Pt('T-12001','bot'),[200,gy+6,-300],gy+6),'#7A2E1A',35,9);
    add(m3Route([147.5,gy+10,-385],DL,gy+10),'#4FC3F7',35,12); }
  else if(M3.mode==='ele'){ var se=M3.M.se, s0=se?[(se[0][0]+se[1][0])/2, se[1][1]-2, (se[0][2]+se[1][2])/2]:null, E=M3.M.eq;
    Object.keys(E).filter(function(t){ return /^(TF-DL-\d+[A-D]-01|B-12001[AB]|B-12002[AB]|C-12001[AB]|P-1201[67]-0\d|P-12026-0\d|VT-F-12001A\/B-0\d|B-12102A|B-12016A)$/.test(t); }).forEach(function(t,i){ add(m3Route(s0,m3Pt(t,'top'),gy+9+(i%3)*1.2),'#FFD54A',18,26); }); }
  M3.flows=F; var N=F.reduce(function(a,f){ return a+f.n; },0), T=M3.T, pos=new Float32Array(N*3), col=new Float32Array(N*3), k=0;
  F.forEach(function(f){ var acc=[0]; for(var i=1;i<f.p.length;i++){ var a=f.p[i-1], b=f.p[i]; acc.push(acc[i-1]+Math.hypot(b[0]-a[0],b[1]-a[1],b[2]-a[2])); } f.acc=acc; f.len=acc[acc.length-1]||1; f.o=k; for(var j=0;j<f.n;j++,k++){ col[k*3]=f.c.r; col[k*3+1]=f.c.g; col[k*3+2]=f.c.b; } });
  var G=new T.BufferGeometry(); G.setAttribute('position',new T.BufferAttribute(pos,3)); G.setAttribute('color',new T.BufferAttribute(col,3)); M3.pts.geometry.dispose(); M3.pts.geometry=G; m3PtSize(); }
function m3FlowTick(t){ var F=M3.flows||[], A=M3.pts.geometry.attributes.position; if(!A) return; var ar=A.array;
  F.forEach(function(f){ for(var j=0;j<f.n;j++){ var s=((t*f.sp/1000)+j*f.len/f.n)%f.len, i=1; while(i<f.acc.length-1&&f.acc[i]<s) i++; var a=f.p[i-1], b=f.p[i], seg=f.acc[i]-f.acc[i-1]||1, u=(s-f.acc[i-1])/seg, o=(f.o+j)*3; ar[o]=a[0]+(b[0]-a[0])*u; ar[o+1]=a[1]+(b[1]-a[1])*u; ar[o+2]=a[2]+(b[2]-a[2])*u; } }); A.needsUpdate=true; }
function m3PtSize(){ if(M3.pts) M3.pts.material.size=(M3.nav==='walk'?0.35:1)*(M3.mode==='ele'?2.6:3.2); }
/* passeio guiado pelo processo */
function m3StartTour(){ if(!M3.ok) return; m3SetNav('orb'); if(M3.mode!=='proc'){ M3.mode='proc'; m3Ui(); m3Paint(); m3Flows(); } M3.step=-1; var nx=function(){ M3.step=(M3.step+1)%MQ_COMO.proc.length; m3TourStep(); }; nx(); M3.tour=setInterval(function(){ if(ST.view!=='ccmmaq'||!document.body.contains(M3.el)){ m3StopTour(); return; } nx(); }, 7000); }
function m3StopTour(){ if(M3.tour){ clearInterval(M3.tour); M3.tour=null; } var c=M3.el&&m3Q('.m3-cap'); if(c) c.hidden=true; if(M3.el){ m3Ui(); m3VO(); } }
function m3TourStep(){ var x=MQ_COMO.proc[M3.step], cap=m3Q('.m3-cap'), z=x[0]==='cru'?'pre1':x[0], p=m3ZoneP(z);
  cap.innerHTML='<div class="m3-k">Passo '+(M3.step+1)+' de '+MQ_COMO.proc.length+'</div><b>'+x[1]+' '+esc(x[2])+'</b><p>'+esc(x[3])+'</p>'+(MQ_Z[z]&&p!=null?'<div class="m3-z" style="--c:'+mqCor(p)+'"><span>'+esc(MQ_Z[z].t.split(' · ')[0])+'</span><b>'+p+'%</b></div>':''); cap.hidden=false; m3VO();
  if(x[0]==='cru'){ M3.selBox.visible=false; m3Fly(new M3.T.Vector3(147,M3.gy+10,-330),120,-0.4,1.05); return; }
  if(MQ_Z[z]){ MQ.sel=z; M3.lastSel=z; M3.noFly=true; renderCmMaq(); m3FocusBox(m3ZoneBox(z)); } }
/* laço de desenho — só roda com a aba aberta e visível */
function m3Resize(){ if(!M3.R) return; var r=M3.st.getBoundingClientRect(), W=Math.max(320,r.width|0), H=Math.max(300,r.height|0); M3.W=W; M3.H=H; M3.R.setSize(W,H,false); M3.cam.aspect=W/H; m3VO(); }
function m3VO(){ var cam=M3.cam; if(!cam) return; var c=M3.el&&m3Q('.m3-cap'), on=c&&!c.hidden&&M3.W>700, o=on?(c.offsetLeft+c.offsetWidth+12):0; M3.vo=o; M3.capR=on?[c.offsetLeft-4,c.offsetTop-4,o,c.offsetTop+c.offsetHeight+30]:null;
  if(o) cam.setViewOffset(M3.W,M3.H,-o/2,0,M3.W,M3.H); else cam.clearViewOffset(); cam.updateProjectionMatrix(); }
function m3Start(){ if(M3.run) return; M3.run=true; M3.t0=performance.now(); var last=M3.t0;
  var loop=function(now){ if(!M3.el||!document.body.contains(M3.el)||ST.view!=='ccmmaq'){ M3.run=false; return; } requestAnimationFrame(loop); if(document.hidden) return;
    var dt=Math.min(0.05,(now-last)/1000); last=now; var C=M3.ctl, cam=M3.cam, T=M3.T;
    if(C.go){ var g=C.go, k=Math.min(1,(now-g.t0)/g.d), e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2; C.tg.lerpVectors(g.a.tg,g.b.tg,e); C.r=g.a.r+(g.b.r-g.a.r)*e; C.th=g.a.th+(g.b.th-g.a.th)*e; C.ph=g.a.ph+(g.b.ph-g.a.ph)*e; if(k>=1) C.go=null; }
    if(M3.nav==='walk'){ var K=M3.keys, sp=(K.ShiftLeft||K.ShiftRight?14:4.5)*dt, f=(K.KeyW||K.ArrowUp?1:0)-(K.KeyS||K.ArrowDown?1:0), s=(K.KeyD||K.ArrowRight?1:0)-(K.KeyA||K.ArrowLeft?1:0), u=(K.KeyE?1:0)-(K.KeyQ?1:0);
      if(f||s||u) m3Walk(s*sp,f*sp,u*sp); cam.position.copy(C.pos); cam.lookAt(C.pos.x-Math.sin(C.yaw)*Math.cos(C.pit), C.pos.y+Math.sin(C.pit), C.pos.z-Math.cos(C.yaw)*Math.cos(C.pit)); }
    else { cam.position.set(C.tg.x+C.r*Math.sin(C.ph)*Math.sin(C.th), C.tg.y+C.r*Math.cos(C.ph), C.tg.z+C.r*Math.sin(C.ph)*Math.cos(C.th)); cam.lookAt(C.tg); }
    var t=now-M3.t0, solo=!!M3.route; M3.pts.visible=!solo; if(!solo) m3FlowTick(t); M3.glow.forEach(function(sp,i){ var f=0.85+0.25*Math.sin(t/90+i*1.7)+0.1*Math.sin(t/37+i); sp.scale.set(9*f,11*f,1); sp.visible=M3.mode==='proc'&&!solo; });
    if(M3.selBox.visible){ var pu=0.6+0.4*Math.sin(t/260); M3.selBox.material.color.setRGB(1,0.84*pu+0.1,0.3*pu); }
    m3RouteTick(t); (M3.pins||[]).forEach(function(p,i){ var k=1+0.25*Math.sin(t/220+i); p.ring.scale.set(k,k,k); p.ball.scale.setScalar(0.9+0.2*Math.sin(t/180+i)); });
    M3.R.render(M3.S,cam); m3LabelsPos(); m3PinsPos(); };
  requestAnimationFrame(loop); }
/* 21/11 (dona): busca de tag de equipamento e de circuito — equipamento: sinaliza e vai até ele; circuito: marca o trajeto pelas bandejas, eletrocalhas e envelopes do modelo. Itens da base que não estão no modelo foram mapeados pelas plantas baixas e entram como marcadores */
var M3_HOW={modelo:'no modelo 3D (Navisworks)', planta:'mapeado pela planta baixa', regra:'posicionado junto do equipamento acionado', sala:'pela sala da SE-1200', area:'posição aproximada pela área'};
var M3_OFF=(function(){ var o=[]; for(var dx=-2;dx<=2;dx++) for(var dy=-2;dy<=2;dy++) for(var dz=-2;dz<=2;dz++){ if(!dx&&!dy&&!dz) continue; var c=Math.sqrt(dx*dx+dy*dy+dz*dz); o.push([dx,dy,dz,c<1.5?c:c*1.3]); } return o; })();
async function m3LoadTags(){ try{ var r=await fetch('maq/uda3d_tags.json?v=2'); if(!r.ok) return; var J=await r.json(), bs=atob(J.vox), u=new Uint8Array(bs.length); for(var i=0;i<bs.length;i++) u[i]=bs.charCodeAt(i);
  J.v16=new Uint16Array(u.buffer); J.n=J.v16.length/3; var map=new Map(); for(i=0;i<J.n;i++) map.set(J.v16[i*3]+J.v16[i*3+1]*512+J.v16[i*3+2]*262144,i); J.map=map;
  J.adj={}; (J.br||[]).forEach(function(p){ (J.adj[p[0]]=J.adj[p[0]]||[]).push(p[1]); (J.adj[p[1]]=J.adj[p[1]]||[]).push(p[0]); }); M3.TG=J; m3BaseLayer(); }catch(e){ console.error('tags 3D',e); } }
function m3Norm(s){ return String(s||'').toUpperCase().replace(/\s+/g,'').trim(); }
function m3OwnersOf(t){ var M=M3.M, T=m3Norm(t), rx=new RegExp('(^|[^A-Z0-9])'+T.replace(/[.*+?^${}()|[\]\\\/]/g,'\\$&')+'($|[^A-Z0-9])'), out=[];
  M.owners.forEach(function(n,i){ var N=String(n).toUpperCase(); if(N===T||(N.indexOf(T)>=0&&rx.test(N)&&N.indexOf('DF-')<0&&N.indexOf('CF-'+T)<0)) out.push(i); });
  if(!out.length&&/\d$/.test(T)&&M3.TG&&M3.TG.t[T+'A']&&M3.TG.t[T+'B']) out=m3OwnersOf(T+'A').concat(m3OwnersOf(T+'B')); return out; }
function m3OwnBox(ids){ if(!ids.length) return null; var S={}; ids.forEach(function(i){ S[i]=1; }); var lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9], n=0, A=M3.A, M=M3.M, ext=function(a,b){ for(var k=0;k<3;k++){ lo[k]=Math.min(lo[k],a[k],b[k]); hi[k]=Math.max(hi[k],a[k],b[k]); } n++; };
  for(var i=0;i<A.boxo.length;i++) if(S[A.boxo[i]]) ext(m3Dq(A.box,i*6),m3Dq(A.box,i*6+3));
  for(i=0;i<A.cylo.length;i++) if(S[A.cylo[i]]){ var a=m3Dq(A.cyl,i*6), b=m3Dq(A.cyl,i*6+3), r=A.cylr[i]/1000; ext([a[0]-r,a[1]-r,a[2]-r],[b[0]+r,b[1]+r,b[2]+r]); }
  for(i=0;i<A.ho.length;i++) if(S[A.ho[i]]){ var g=A.hg[i], t=m3Dq(A.ht,i*3), bb=A.gbb.subarray(g*6,g*6+6); ext([t[0]+bb[0],t[1]+bb[1],t[2]+bb[2]],[t[0]+bb[0]+bb[3],t[1]+bb[1]+bb[4],t[2]+bb[2]+bb[5]]); }
  if(!n||Math.max(hi[0]-lo[0],hi[1]-lo[1],hi[2]-lo[2])>80) return null; return [lo,hi]; }
function m3EqLive(t){ var E=ST.equip||{}; for(var k in E){ if(E[k]&&E[k].tag===t) return E[k]; } return null; }
function m3TagPos(t,deep){ t=String(t||'').trim(); if(!t) return null; var G=M3.TG, M=M3.M, r=G&&G.t[t];
  if(r) return {c:[r[0],r[1],r[2]], s:[r[3],r[4],r[5]], how:G.how[r[6]], src:G.src[r[7]]};
  var e=M.eq[t]; if(e) return {c:e.c, s:e.s, how:'modelo', src:'Navisworks rev.96'};
  var b=m3OwnBox(m3OwnersOf(t)); if(b) return {c:[(b[0][0]+b[1][0])/2,(b[0][1]+b[1][1])/2,(b[0][2]+b[1][2])/2], s:[b[1][0]-b[0][0],b[1][1]-b[0][1],b[1][2]-b[0][2]], how:'modelo', src:'Navisworks rev.96'};
  var ab=['A','B'].map(function(k){ return G&&G.t[t+k]; }).filter(Boolean); if(ab.length===2){ var lo=[0,1,2].map(function(i){ return Math.min(ab[0][i]-ab[0][i+3]/2, ab[1][i]-ab[1][i+3]/2); }), hi=[0,1,2].map(function(i){ return Math.max(ab[0][i]+ab[0][i+3]/2, ab[1][i]+ab[1][i+3]/2); });
    return {c:[0,1,2].map(function(i){ return (lo[i]+hi[i])/2; }), s:[0,1,2].map(function(i){ return hi[i]-lo[i]; }), how:'modelo', src:t+'A e '+t+'B'}; }  /* 21/11 (dona): tag sem sufixo (ex.: TF-12007) = conjunto A e B */
  var L=m3EqLive(t), loc=L&&String(L.locacao||'').trim().toUpperCase(), ar=L&&String(L.area||'');
  if(G&&loc&&G.rooms[loc]) return {c:G.rooms[loc], s:[1.2,1.2,1.2], how:'sala', src:L.locacao};
  if(G&&ar&&ar!=='SE'&&G.areas[ar]) return {c:G.areas[ar], s:[3,3,3], how:'area', src:'área '+ar+' (aproximado)'};
  if(G&&ar==='SE'&&G.se) return {c:G.se, s:[3,3,3], how:'area', src:'SE-1200 (aproximado)'};
  if(!deep&&/^(CF-)?M-/.test(t)) return m3TagPos(t.replace(/^(CF-)?M-/,''),1);
  return null; }
/* camada: itens da nossa base que não estão no modelo (mapeados pela planta, pela sala ou pela área) */
function m3BaseLayer(){ var G=M3.TG, T=M3.T; if(!G||M3.base) return; var L=Object.keys(G.t).filter(function(k){ var h=G.how[G.t[k][6]]; return h==='planta'||h==='sala'||h==='area'; }); if(!L.length) return;
  var m=new T.InstancedMesh(new T.BoxGeometry(1,1,1), new T.MeshLambertMaterial({color:0xffffff, emissive:0x3a0a2a}), L.length), q=new T.Matrix4(), c=new T.Color();
  L.forEach(function(k,i){ var r=G.t[k], s=Math.max(0.8,Math.min(2,r[3])); q.makeScale(s,s,s); q.setPosition(r[0],r[1]+s/2,r[2]); m.setMatrixAt(i,q); m.setColorAt(i,c.set(G.how[r[6]]==='planta'?'#FF4FB0':'#C084FC')); });
  m.instanceMatrix.needsUpdate=true; m.computeBoundingSphere(); m.userData={L:9, tags:L}; m.renderOrder=3; M3.base=m; M3.S.add(m); m.visible=M3.lay[5]!==false; }
/* busca */
function m3Find(q){ var Q=m3Norm(q); if(Q.length<2) return []; var out=[], seen={}, add=function(o,sc){ if(seen[o.key]) return; seen[o.key]=1; o.sc=sc; out.push(o); }, score=function(s){ s=m3Norm(s); return s===Q?0:s.indexOf(Q)===0?1:s.indexOf(Q)>0?2:-1; };
  var R=[]; try{ R=M3.X.cab()||[]; }catch(e){}
  R.forEach(function(x){ var s=score(x.code); if(s>=0) add({k:'c', key:'c:'+x.code, code:x.code, x:x, sub:(x.de||'?')+' → '+(x.para||'?')}, s); });
  var E=ST.equip||{}; Object.keys(E).forEach(function(k){ var e=E[k]; if(!e||!e.tag) return; var s=score(e.tag); if(s>=0) add({k:'e', key:'e:'+e.tag, code:e.tag, sub:e.desc||'', canc:!!e.cancelado}, s+(e.cancelado?3:0)); });
  Object.keys(M3.M.eq).forEach(function(t){ var s=score(t); if(s>=0) add({k:'e', key:'e:'+t, code:t, sub:(M3.M.eq[t].d||'').toLowerCase()}, s+0.5); });
  if(M3.TG) Object.keys(M3.TG.t).forEach(function(t){ var s=score(t); if(s>=0) add({k:'e', key:'e:'+t, code:t, sub:''}, s+0.6); });
  out.sort(function(a,b){ return a.sc-b.sc||a.code.length-b.code.length||(a.code<b.code?-1:1); }); return out.slice(0,12); }
function m3SearchUi(){ var inp=m3Q('.m3-sr input'), box=m3Q('.m3-sl'), cur=[], hi=0;
  var draw=function(){ cur=m3Find(inp.value); hi=0; if(!cur.length){ box.innerHTML=inp.value.trim().length>=2?'<div class="m3-sx">Nada encontrado para “'+esc(inp.value)+'”.</div>':''; box.hidden=inp.value.trim().length<2; return; }
    box.innerHTML=cur.map(function(o,i){ var p=o.k==='e'?m3TagPos(o.code):null, how=o.k==='c'?'circuito':(p?(p.how==='modelo'?'no modelo':p.how==='planta'?'pela planta':'aproximado'):'sem posição');
      return '<button type="button" class="m3-so'+(i===hi?' on':'')+'" data-i="'+i+'"><i>'+(o.k==='c'?'⚡':'🔧')+'</i><span><b>'+esc(o.code)+'</b><small>'+esc(o.sub||'')+'</small></span><em class="'+(how==='sem posição'?'no':'')+'">'+how+'</em></button>'; }).join(''); box.hidden=false;
    box.querySelectorAll('[data-i]').forEach(function(b){ b.onmousedown=function(ev){ ev.preventDefault(); pick(cur[+b.dataset.i]); }; }); };
  var pick=function(o){ if(!o) return; box.hidden=true; inp.value=o.code; inp.blur(); if(o.k==='c') m3GoCirc(o.x); else m3GoTag(o.code); };
  inp.oninput=function(){ if(!inp.value.trim()&&(M3.route||M3.pins&&M3.pins.length)) m3ClearFind(); draw(); }; inp.onfocus=draw; inp.onblur=function(){ setTimeout(function(){ box.hidden=true; },150); };
  inp.onkeydown=function(e){ e.stopPropagation(); if(e.key==='ArrowDown'||e.key==='ArrowUp'){ e.preventDefault(); hi=(hi+(e.key==='ArrowDown'?1:-1)+cur.length)%Math.max(cur.length,1); box.querySelectorAll('.m3-so').forEach(function(b,i){ b.classList.toggle('on',i===hi); }); } else if(e.key==='Enter'){ e.preventDefault(); if(!cur.length) draw(); pick(cur[hi]); } else if(e.key==='Escape'){ inp.value=''; box.hidden=true; m3ClearFind(); } };
  m3Q('.m3-sr .m3-sc').onclick=function(){ inp.value=''; box.hidden=true; m3ClearFind(); }; }
function m3ClearFind(){ (M3.pins||[]).forEach(function(p){ M3.S.remove(p.g); if(p.el) p.el.remove(); }); M3.pins=[]; if(M3.route){ M3.route.forEach(function(o){ M3.S.remove(o); o.geometry&&o.geometry.dispose(); }); M3.route=null; } M3.rflow=null; if(M3.rpts) M3.rpts.visible=false; M3.hl=null; M3.selBox.visible=false; M3.pick=-1; m3Info(); m3Paint(); }
function m3Pin(c,col,txt){ var T=M3.T, g=new T.Group(), h=4; var beam=new T.Mesh(new T.CylinderGeometry(0.08,0.08,h,6), new T.MeshBasicMaterial({color:col, transparent:true, opacity:.85, depthTest:false}));
  beam.position.y=h/2; g.add(beam); var ball=new T.Mesh(new T.SphereGeometry(0.7,16,12), new T.MeshBasicMaterial({color:col, depthTest:false})); ball.position.y=h; g.add(ball);
  var ring=new T.Mesh(new T.RingGeometry(0.9,1.3,32), new T.MeshBasicMaterial({color:col, side:T.DoubleSide, transparent:true, opacity:.8, depthTest:false})); ring.rotation.x=-Math.PI/2; ring.position.y=0.05; g.add(ring);
  g.position.set(c[0],c[1],c[2]); g.renderOrder=20; g.traverse(function(o){ o.renderOrder=20; }); M3.S.add(g);
  var el=document.createElement('div'); el.className='m3-pin'; el.style.setProperty('--c',col); el.textContent=txt; m3Q('.m3-lb').appendChild(el);
  var p={g:g, ring:ring, ball:ball, el:el, at:new T.Vector3(c[0],c[1]+h+1,c[2])}; (M3.pins=M3.pins||[]).push(p); return p; }
function m3GoTag(t){ if(!M3.ok) return; m3ClearFind(); M3.curTag=t; m3StopTour(); if(M3.nav==='walk') m3SetNav('orb'); var p=m3TagPos(t), ids=m3OwnersOf(t);
  if(!p){ m3InfoHtml('<div class="m3-k">Equipamento</div><h4>'+esc(t)+'</h4><p>Não achei esse tag no modelo nem nas plantas cadastradas. Se você souber onde fica (planta e folha), me diga que eu mapeio.</p>'); return; }
  M3.hl={}; ids.forEach(function(i){ M3.hl[i]=1; }); m3Paint();
  var col=p.how==='modelo'?'#FFD54A':p.how==='planta'?'#FF4FB0':'#C084FC', s=Math.max(p.s[0],p.s[1],p.s[2],1.2);
  m3Pin([p.c[0],p.c[1]+p.s[1]/2,p.c[2]], col, t);
  M3.selBox.box.min.set(p.c[0]-p.s[0]/2-0.3,p.c[1]-p.s[1]/2-0.3,p.c[2]-p.s[2]/2-0.3); M3.selBox.box.max.set(p.c[0]+p.s[0]/2+0.3,p.c[1]+p.s[1]/2+0.3,p.c[2]+p.s[2]/2+0.3); M3.selBox.visible=true;
  m3Fly(new M3.T.Vector3(p.c[0],p.c[1],p.c[2]), Math.max(18,s*3.5), null, 0.95);
  var L=m3EqLive(t), d=(L&&L.desc)||((M3.M.eq[t]||{}).d)||'';
  m3InfoHtml('<div class="m3-k">Equipamento</div><h4>'+esc(t)+'</h4>'+(d?'<p>'+esc(d.charAt(0)+d.slice(1).toLowerCase())+'</p>':'')+
    '<div class="m3-src" style="--c:'+col+'">📍 '+esc(M3_HOW[p.how]||p.how)+(p.how!=='modelo'?' — '+esc(p.src):'')+'</div>'+
    (L?'<div class="m3-dim">'+[L.locacao?esc(L.locacao):'', L.area&&L.area!=='SE'?'área '+esc(L.area):''].filter(Boolean).join(' · ')+'</div>':'')+
    m3CircsOf(t)+(M3.X.cm?M3.X.cm(t,'e'):'')); }
function m3CircsOf(t){ var R=[]; try{ R=M3.X.cab()||[]; }catch(e){} var L=R.filter(function(x){ return x.de===t||x.para===t; }); if(!L.length) return '';
  return '<div class="m3-k" style="margin-top:8px">Circuitos ligados ('+L.length+')</div><div class="m3-cl">'+L.map(function(x){ return '<button type="button" data-cc="'+esc(x.code)+'">⚡ '+esc(x.code)+' <small>'+esc(x.de===t?'→ '+(x.para||'?'):'← '+(x.de||'?'))+'</small></button>'; }).join('')+'</div>'; }
function m3InfoHtml(h){ var box=m3Q('.m3-info'); box.innerHTML='<button type="button" class="m3-x" aria-label="Fechar">✕</button>'+h; box.hidden=false; box.scrollTop=0; box.querySelector('.m3-x').onclick=function(){ box.hidden=true; }; if(M3.X.bind) M3.X.bind(box);
  box.querySelectorAll('[data-cc]').forEach(function(b){ b.onclick=function(){ var R=[]; try{ R=M3.X.cab()||[]; }catch(e){} var x=R.filter(function(y){ return y.code===b.dataset.cc; })[0], bk=M3.curTag?{t:M3.curTag, sc:box.scrollTop}:null; if(x){ m3Q('.m3-sr input').value=x.code; m3GoCirc(x, bk); } }; });
  box.querySelectorAll('[data-m3back]').forEach(function(b){ b.onclick=function(){ var t=b.dataset.m3back, sc=+b.dataset.sc||0; m3Q('.m3-sr input').value=t; m3GoTag(t); box.scrollTop=sc; }; }); }
/* trajeto do circuito: A* nos voxels das bandejas, eletrocalhas, eletrodutos e envelopes elétricos */
function m3Near(p){ var G=M3.TG, v=G.v16, V=G.V, qx=p[0]/V-0.5, qy=-p[2]/V-0.5, qz=p[1]/V-0.5, b=-1, bd=1e18; for(var i=0;i<G.n;i++){ var dx=v[i*3]-qx, dy=v[i*3+1]-qy, dz=(v[i*3+2]-qz)*1.3, d=dx*dx+dy*dy+dz*dz; if(d<bd){ bd=d; b=i; } } return {i:b, d:Math.sqrt(bd)*V}; }
function m3VP(i){ var G=M3.TG, v=G.v16, V=G.V; return [(v[i*3]+0.5)*V,(v[i*3+2]+0.5)*V,-(v[i*3+1]+0.5)*V]; }
function m3AStar(a,b){ var G=M3.TG, v=G.v16, N=G.n, map=G.map, g=new Float32Array(N).fill(Infinity), came=new Int32Array(N).fill(-1), cl=new Uint8Array(N), H=[], bx=v[b*3], by=v[b*3+1], bz=v[b*3+2];
  var hf=function(i){ var dx=v[i*3]-bx, dy=v[i*3+1]-by, dz=v[i*3+2]-bz; return Math.sqrt(dx*dx+dy*dy+dz*dz); };
  var push=function(f,i){ H.push([f,i]); var k=H.length-1; while(k>0){ var p=(k-1)>>1; if(H[p][0]<=H[k][0]) break; var t=H[p]; H[p]=H[k]; H[k]=t; k=p; } };
  var pop=function(){ var top=H[0], last=H.pop(); if(H.length){ H[0]=last; var k=0; for(;;){ var l=2*k+1, r=l+1, m=k; if(l<H.length&&H[l][0]<H[m][0]) m=l; if(r<H.length&&H[r][0]<H[m][0]) m=r; if(m===k) break; var t=H[m]; H[m]=H[k]; H[k]=t; k=m; } } return top[1]; };
  g[a]=0; push(hf(a),a); var it=0;
  while(H.length&&it++<400000){ var u=pop(); if(cl[u]) continue; if(u===b) break; cl[u]=1; var ux=v[u*3], uy=v[u*3+1], uz=v[u*3+2];
    for(var k=0;k<M3_OFF.length;k++){ var o=M3_OFF[k], x=ux+o[0], y=uy+o[1], z=uz+o[2]; if(x<0||y<0||z<0) continue; var j=map.get(x+y*512+z*262144); if(j===undefined||cl[j]) continue; var ng=g[u]+o[3]; if(ng<g[j]){ g[j]=ng; came[j]=u; push(ng+hf(j),j); } }
    var A=G.adj[u]; if(A) A.forEach(function(j){ if(cl[j]) return; var dx=v[j*3]-ux, dy=v[j*3+1]-uy, dz=v[j*3+2]-uz, ng=g[u]+Math.sqrt(dx*dx+dy*dy+dz*dz)*1.5; if(ng<g[j]){ g[j]=ng; came[j]=u; push(ng+hf(j),j); } }); }
  if(a!==b&&came[b]<0) return null; var P=[b]; while(P[P.length-1]!==a) P.push(came[P[P.length-1]]); P.reverse(); return {p:P, len:g[b]*G.V}; }
function m3Rdp(P,eps){ if(P.length<3) return P; var a=P[0], b=P[P.length-1], mi=-1, md=0, ab=[b[0]-a[0],b[1]-a[1],b[2]-a[2]], L=Math.hypot(ab[0],ab[1],ab[2])||1e-6;
  for(var i=1;i<P.length-1;i++){ var ap=[P[i][0]-a[0],P[i][1]-a[1],P[i][2]-a[2]], cx=ap[1]*ab[2]-ap[2]*ab[1], cy=ap[2]*ab[0]-ap[0]*ab[2], cz=ap[0]*ab[1]-ap[1]*ab[0], d=Math.hypot(cx,cy,cz)/L; if(d>md){ md=d; mi=i; } }
  if(md<eps) return [a,b]; return m3Rdp(P.slice(0,mi+1),eps).slice(0,-1).concat(m3Rdp(P.slice(mi),eps)); }
function m3GoCirc(x, back){ if(!M3.ok) return; m3ClearFind(); M3.curTag=null; m3StopTour(); if(M3.nav==='walk') m3SetNav('orb'); var T=M3.T, pa=m3TagPos(x.de), pb=m3TagPos(x.para), o=x.o||{};
  var head=(back?'<button type="button" class="m3-back" data-m3back="'+esc(back.t)+'" data-sc="'+(back.sc|0)+'">‹ Voltar para '+esc(back.t)+'</button>':'')+'<div class="m3-k">Circuito</div><h4>'+esc(x.code)+'</h4><div class="m3-cd"><b>'+esc(x.de||'?')+'</b><i>→</i><b>'+esc(x.para||'?')+'</b></div>'+
    '<div class="m3-dim">'+[o.form?esc(o.form):'', o.tensao?esc(o.tensao)+' V':'', o.compCirc?'comprimento: '+String(o.compCirc).replace('.',',')+' m':''].filter(Boolean).join(' · ')+'</div>', cmh=M3.X.cm?M3.X.cm(x.code,'c'):'';
  if(!pa||!pb){ m3InfoHtml(head+'<p>Não consegui localizar '+(!pa&&!pb?'as duas pontas':!pa?'a origem ('+esc(x.de||'?')+')':'o destino ('+esc(x.para||'?')+')')+' no modelo nem nas plantas cadastradas.</p>'+cmh); if(pa||pb){ var q=pa||pb; m3Pin(q.c,'#FFD54A',pa?x.de:x.para); m3Fly(new T.Vector3(q.c[0],q.c[1],q.c[2]),30,null,0.95); } return; }
  var pts=[pa.c], len=0, rt=null, G=M3.TG;
  if(G){ var na=m3Near(pa.c), nb=m3Near(pb.c); if(na.d<40&&nb.d<40){ rt=m3AStar(na.i,nb.i); if(rt){ pts=pts.concat(m3Rdp(rt.p.map(m3VP),0.7)); len=rt.len+na.d+nb.d; } } }
  pts.push(pb.c); if(!rt){ var my=Math.max(pa.c[1],pb.c[1])+6; pts=[pa.c,[pa.c[0],my,pa.c[2]],[pb.c[0],my,pb.c[2]],pb.c]; len=0; }
  var cp=new T.CurvePath(); for(var i=1;i<pts.length;i++){ var A=new T.Vector3(pts[i-1][0],pts[i-1][1],pts[i-1][2]), B=new T.Vector3(pts[i][0],pts[i][1],pts[i][2]); if(A.distanceTo(B)>0.01) cp.add(new T.LineCurve3(A,B)); }
  var seg=Math.min(1200,Math.max(40,pts.length*8)), tube=new T.Mesh(new T.TubeGeometry(cp,seg,0.32,8,false), new T.MeshBasicMaterial({color:rt?0xFFD54A:0xFF8A65, depthTest:false, transparent:true, opacity:.95})),
    glow=new T.Mesh(new T.TubeGeometry(cp,seg,0.9,8,false), new T.MeshBasicMaterial({color:rt?0xFFC107:0xFF7043, transparent:true, opacity:.22, depthWrite:false, blending:T.AdditiveBlending, depthTest:false}));
  tube.renderOrder=18; glow.renderOrder=17; M3.S.add(glow); M3.S.add(tube); M3.route=[tube,glow];
  var acc=[0]; for(i=1;i<pts.length;i++) acc.push(acc[i-1]+Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1],pts[i][2]-pts[i-1][2]));
  var n=Math.min(260,Math.max(30,Math.round(acc[acc.length-1]/2.5))); M3.rflow={p:pts, acc:acc, len:acc[acc.length-1]||1, n:n};
  if(!M3.rpts){ M3.rpts=new T.Points(new T.BufferGeometry(), new T.PointsMaterial({size:2.2, map:M3.tex, color:0xFFF3B0, transparent:true, depthWrite:false, depthTest:false, blending:T.AdditiveBlending})); M3.rpts.renderOrder=19; M3.rpts.frustumCulled=false; M3.S.add(M3.rpts); }
  M3.rpts.geometry.dispose(); M3.rpts.geometry=new T.BufferGeometry(); M3.rpts.geometry.setAttribute('position',new T.BufferAttribute(new Float32Array(n*3),3)); M3.rpts.visible=true;
  m3Pin(pa.c,'#4FC3F7',x.de); m3Pin(pb.c,'#FFD54A',x.para);
  M3.hl={}; m3OwnersOf(x.de).concat(m3OwnersOf(x.para)).forEach(function(i){ M3.hl[i]=1; }); m3Paint();
  var lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9]; pts.forEach(function(p){ for(var k=0;k<3;k++){ lo[k]=Math.min(lo[k],p[k]); hi[k]=Math.max(hi[k],p[k]); } });
  var c=new T.Vector3((lo[0]+hi[0])/2,(lo[1]+hi[1])/2,(lo[2]+hi[2])/2), s=Math.max(hi[0]-lo[0],hi[2]-lo[2],hi[1]-lo[1],20); m3Fly(c, s*1.25, null, 0.9);
  var nota=rt?'Trajeto pelas bandejas, eletrocalhas, eletrodutos e envelopes do modelo.':'Não achei bandeja ligando as duas pontas; desenhei uma ligação direta só para indicar.';
  m3InfoHtml(head+'<div class="m3-src" style="--c:#FFD54A">🧵 '+esc(nota)+'</div>'+[['Origem',x.de,pa],['Destino',x.para,pb]].map(function(z){ return '<div class="m3-dim"><b>'+z[0]+':</b> '+esc(z[1])+' — '+esc(M3_HOW[z[2].how]||z[2].how)+(z[2].how!=='modelo'?' ('+esc(z[2].src)+')':'')+'</div>'; }).join('')+cmh); }
function m3RouteTick(t){ var F=M3.rflow; if(!F||!M3.rpts) return; var ar=M3.rpts.geometry.attributes.position.array;
  for(var j=0;j<F.n;j++){ var s=((t*14/1000)+j*F.len/F.n)%F.len, i=1; while(i<F.acc.length-1&&F.acc[i]<s) i++; var a=F.p[i-1], b=F.p[i], sg=(F.acc[i]-F.acc[i-1])||1, u=(s-F.acc[i-1])/sg; ar[j*3]=a[0]+(b[0]-a[0])*u; ar[j*3+1]=a[1]+(b[1]-a[1])*u; ar[j*3+2]=a[2]+(b[2]-a[2])*u; }
  M3.rpts.geometry.attributes.position.needsUpdate=true; }

return {attach:m3Attach, stop:m3StopTour, st:function(){ return {ok:M3.ok, err:M3.err, run:!!M3.run}; }};
};
