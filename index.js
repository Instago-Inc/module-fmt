(function(){
  function yyyymmdd(d){
    try{ const dt=new Date(d); if (isNaN(dt.getTime())) throw 0; const y=dt.getUTCFullYear(); const m=String(dt.getUTCMonth()+1).padStart(2,'0'); const da=String(dt.getUTCDate()).padStart(2,'0'); return ''+y+m+da; }
    catch{ const dt=new Date(); const y=dt.getUTCFullYear(); const m=String(dt.getUTCMonth()+1).padStart(2,'0'); const da=String(dt.getUTCDate()).padStart(2,'0'); return ''+y+m+da; }
  }
  function fmtAmount(s){ const t=(''+(s||'')).replace(',', '.').replace(/[^0-9.]/g,''); if(!t) return '0.00'; const n=Number(t); return isFinite(n)? (Math.round(n*100)/100).toFixed(2) : t; }
  module.exports = { yyyymmdd, fmtAmount };
})();

