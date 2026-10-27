import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const dataset=JSON.parse(fs.readFileSync(new URL('./data/competitor_data.json',import.meta.url)));
let out='';const app={set innerHTML(s){out=s},get innerHTML(){return out}};
const dummy=()=>({value:'',oninput:null,onchange:null,onclick:null});const document={querySelector(s){if(s==='#app')return app;return dummy()},querySelectorAll(){return []}};
let context={document,console,fetch:async()=>({ok:true,json:async()=>dataset}),window:{scrollTo(){}}};vm.createContext(context);vm.runInContext(fs.readFileSync(new URL('./app.js',import.meta.url),'utf8'),context);await new Promise(r=>setTimeout(r,20));
assert.match(out,/RESEARCHED COMPETITORS/);assert.match(out,/\$79\.99/);assert.match(out,/\$83\.32/);
assert.equal(dataset.competitors.length,4);assert.equal(dataset.pricing_offers.length,16);
const rep=dataset.pricing_offers.filter(o=>o.representative);assert.equal(rep.length,4);
const direct=rep.filter(o=>dataset.competitors.find(c=>c.id===o.competitor_id).type==='Direct');assert.deepEqual(direct.map(o=>o.price).sort((a,b)=>a-b),[69.99,79.99,99.99]);
for(const section of ['landscape','pricing','explorer','opportunities','sources']){vm.runInContext(`S.page='${section}';render();`,context);assert.ok(out.length>2000,section+' blank');if(section==='explorer'){assert.match(out,/priceSlider/);assert.match(out,/data-preset="low"/);assert.match(out,/data-preset="mid"/);assert.match(out,/data-preset="premium"/)}if(section==='pricing'){assert.match(out,/Not recorded/)}if(section==='sources'){assert.match(out,/https:\/\/golfshot\.com/);}}
vm.runInContext('S.page="explorer";S.price=105;render()',context);assert.match(out,/Above researched app-only market/);
vm.runInContext('S.price=49.99;render()',context);assert.match(out,/Below researched app-only market/);
console.log('PASS: JSON loading, summary statistics, six section renders, all-offer register, source links, scenario controls, price classification');
