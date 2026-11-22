// 共用渲染：頁面 <body data-page="index|flight|1..7">
const map = q => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const NUM = ["一", "二", "三", "四", "五", "六", "七"];

function nav(page) {
  const links = [["index.html", "🏠 首頁", "index"], ["flight.html", "✈️ 航班資訊", "flight"], ["thai.html", "🗣️ 實用泰語", "thai"]]
    .concat(DAYS.map((_, i) => [`day${i + 1}.html`, `第${NUM[i]}天`, String(i + 1)]));
  return `<nav class="topnav"><div class="wrap">${links
    .map(([h, t, k]) => `<a href="${h}" class="${k === page ? "on" : ""}">${t}</a>`).join("")}</div></nav>`;
}

function recCards(list) {
  return `<div class="recs">${list.map(r => `
    <div class="rec"><div class="head"><div class="em">${r.e}</div>
      <div><div class="name">${esc(r.n)}</div><div class="where">📍 ${esc(r.w)}</div></div></div>
      <p>${esc(r.p)}</p></div>`).join("")}</div>`;
}

function renderIndex() {
  return `
  <div class="hero"><div class="big-emoji">🛺</div>
    <h1>曼谷 7 天 6 夜<br>按摩・購物・美食之旅</h1>
    <p>2026/12/17（四）– 12/23（三）・中華航空 CI831 / CI832</p>
    <div class="meta"><span>🏨 住宿 Sib Kao</span><span>☀️ 12 月乾季 約 22–32°C</span><span>💱 泰銖 THB</span></div>
  </div>
  <h2>📚 行程目錄</h2>
  <div class="grid">
    <a class="navcard" href="flight.html"><div class="em">✈️</div><div class="d">去回程</div>
      <div class="t">航班資訊</div><div class="s">CI831 / CI832・住宿・出發前須知</div></a>
    <a class="navcard" href="thai.html"><div class="em">🗣️</div><div class="d">點一下就發音</div>
      <div class="t">實用泰語</div><div class="s">問價、殺價、點飲料甜度辣度</div></a>
    ${DAYS.map((d, i) => `<a class="navcard" href="day${i + 1}.html"><div class="em">${d.emoji}</div>
      <div class="d">第${NUM[i]}天・${d.date}</div><div class="t">${esc(d.title)}</div>
      <div class="s">${esc(d.summary)}</div></a>`).join("")}
  </div>
  <h2>💡 旅遊小提醒</h2>
  <div class="box"><ul>
    <li>入境前 3 天內上網填寫 <b>TDAC 泰國數位入境卡</b>。</li>
    <li>市區交通：BTS 空鐵、MRT 地鐵搭配 <b>Grab</b> 叫車最方便，避開 17:00–19:00 尖峰塞車。</li>
    <li>按摩小費約 50–100 泰銖；市集殺價可先從 7–8 折開始。</li>
    <li>寺廟、部分商場冷氣很強，隨身帶件薄外套。</li>
  </ul></div>`;
}

function renderFlight() {
  const f = (lbl, no, a, at, b, bt, date) => `
    <div class="flight"><span class="lbl">${lbl}</span><div class="no">中華航空 ${no}・${date}</div>
      <div class="row"><div><div class="tm">${at}</div><div class="city">${a}</div></div>
        <div class="plane">✈</div><div><div class="tm">${bt}</div><div class="city">${b}</div></div></div></div>`;
  return `
  <div class="hero"><div class="big-emoji">✈️</div><h1>航班資訊</h1><p>中華航空直飛・桃園 ⇄ 曼谷蘇凡納布</p></div>
  <h2>🛫 航班</h2>
  ${f("去程", "CI831", "台灣 桃園 TPE", "10:05", "曼谷 蘇凡納布 BKK", "13:05", "12/17（四）")}
  ${f("回程", "CI832", "曼谷 蘇凡納布 BKK", "14:05", "台灣 桃園 TPE", "18:40", "12/23（三）")}
  <p class="tip">泰國比台灣慢 1 小時，以上皆為當地時間。</p>
  <h2>🏨 住宿</h2>
  <div class="box"><b>Sib Kao</b>（12/17 – 12/23，共 6 晚）<br>
    <a class="maplink" href="${map(HOTEL.q)}" target="_blank" rel="noopener">📍 Google Map</a></div>
  <h2>🧳 出發前準備</h2>
  <div class="box"><ul>
    <li>護照效期需 6 個月以上；台灣護照可免簽入境泰國。</li>
    <li>入境前 3 天內填寫 TDAC 泰國數位入境卡。</li>
    <li>網路：機場購買觀光 SIM 卡或事先買 eSIM。</li>
    <li>下載 Grab、Google Maps、Bolt；BTS 可直接用信用卡感應進站。</li>
    <li>行李保留空間給伴手禮；行動電源只能放隨身行李。</li>
  </ul></div>
  <div class="box" style="margin-top:12px">📍 機場地圖：
    <a href="${map("Taoyuan International Airport Terminal 2")}" target="_blank" rel="noopener">桃園機場</a>・
    <a href="${map("Suvarnabhumi Airport")}" target="_blank" rel="noopener">蘇凡納布機場</a></div>`;
}

function renderThai() {
  return `
  <div class="hero"><div class="big-emoji">🗣️</div><h1>實用泰語</h1>
    <p>點一下卡片就會播放泰語發音，買東西、點餐都用得到。</p></div>
  <div class="voice" role="radiogroup" aria-label="發音聲音">
    <span>語尾：</span>
    <button type="button" data-g="f" role="radio">👩 女生 ค่ะ khâ</button>
    <button type="button" data-g="m" role="radio">👨 男生 ครับ khráp</button>
  </div>
  <p class="tip">泰語句尾加上 ค่ะ / ครับ 比較禮貌：女生說 ค่ะ（問句用 คะ），男生說 ครับ。</p>
  <div class="phrases">${PHRASES.map((p, i) => `
    <button type="button" class="phrase" data-id="${p.id}" data-i="${i}">
      <span class="no">${i + 1}</span>
      <span class="zh">${esc(p.zh)}</span>
      <span class="th" lang="th"></span>
      <span class="rom"></span>
      <span class="en" lang="en">${esc(p.en)}</span>
      <span class="play" aria-hidden="true">🔊</span>
    </button>`).join("")}</div>`;
}

function initThai() {
  let g = "f";
  try { g = localStorage.getItem("thaiVoice") || "f"; } catch (e) {}
  const audio = new Audio();
  const tail = p => g === "m" ? ["ครับ", "khráp"] : p.q ? ["คะ", "khá"] : ["ค่ะ", "khâ"];
  const paint = () => {
    document.querySelectorAll(".voice button").forEach(b => b.setAttribute("aria-checked", b.dataset.g === g));
    document.querySelectorAll(".phrase").forEach(el => {
      const p = PHRASES[el.dataset.i], [th, rom] = tail(p);
      el.querySelector(".th").textContent = p.th + th;
      el.querySelector(".rom").textContent = p.rom + " " + rom;
    });
  };
  document.querySelectorAll(".voice button").forEach(b => b.onclick = () => {
    g = b.dataset.g; try { localStorage.setItem("thaiVoice", g); } catch (e) {}
    paint();
  });
  document.querySelectorAll(".phrase").forEach(el => el.onclick = () => {
    document.querySelectorAll(".phrase.on").forEach(x => x.classList.remove("on"));
    el.classList.add("on");
    audio.src = `audio/${el.dataset.id}_${g}.mp3`;
    audio.play().catch(() => {
      // 音檔無法播放時改用瀏覽器內建泰語語音
      if (!("speechSynthesis" in window)) return;
      const u = new SpeechSynthesisUtterance(el.querySelector(".th").textContent);
      u.lang = "th-TH"; u.rate = .85; speechSynthesis.cancel(); speechSynthesis.speak(u);
    });
  });
  audio.onended = () => document.querySelectorAll(".phrase.on").forEach(x => x.classList.remove("on"));
  paint();
}

function legHtml(opts) {
  if (!opts) return "";
  return `<li class="leg"><div class="dot">🚏</div><div class="body">
    <div class="leg-h">怎麼去${opts.length > 1 ? `・${opts.length} 種方案` : ""}</div>
    ${opts.map((o, k) => `<details${k === 0 ? " open" : ""}>
      <summary><span class="m">${esc(o.m)}</span><span class="tt">⏱ ${esc(o.t)}</span>
        <span class="c">4 人 ${esc(o.c)}</span></summary>
      <ol class="steps">${o.s.map(x => `<li>${esc(x)}</li>`).join("")}</ol>
      ${o.n ? `<div class="note">💡 ${esc(o.n)}</div>` : ""}
    </details>`).join("")}
  </div></li>`;
}

// 當天每段都選 BTS 方案時的每人 BTS 票價合計，和一日券比較
function passHtml(i) {
  const legs = Object.values(ROUTES[i] || {}).map(o => Math.max(0, ...o.map(x => x.b || 0))).filter(Boolean);
  if (!legs.length) return "";
  const sum = legs.reduce((a, b) => a + b, 0), P = BTS_DAY_PASS;
  const head = `🎫 <b>BTS 一日券</b>：今天 ${legs.length} 段可搭 BTS，若都選 BTS，每人單程票合計約 ฿${sum}（4 人 ฿${sum * 4}）；一日券每人 ฿${P}（4 人 ฿${P * 4}）。`;
  const verdict = sum > P
    ? `<b class="buy">👉 建議今天直接買 BTS 一日券</b>，4 人可省約 ฿${(sum - P) * 4}，且不用每段排隊買票。`
    : sum >= P - 20
      ? `單程票略省 ฿${(P - sum) * 4}，但差距很小：只要多搭一趟 BTS 就換買一日券較划算。`
      : `單程票較省，不必買一日券。`;
  return `<div class="pass${sum > P ? " on" : ""}">${head}<br>${verdict}<span>一日券不含 BTS 金線、MRT、ARL；票價為參考價，以現場為準。</span></div>`;
}

function renderDay(i) {
  const d = DAYS[i];
  const prev = i === 0 ? ["flight.html", "航班資訊"] : [`day${i}.html`, `第${NUM[i - 1]}天`];
  const next = i === DAYS.length - 1 ? ["index.html", "回首頁"] : [`day${i + 2}.html`, `第${NUM[i + 1]}天`];
  return `
  <div class="hero"><div class="big-emoji">${d.emoji}</div>
    <h1>第${NUM[i]}天・${d.date}</h1><p><b>${esc(d.title)}</b></p><p>${esc(d.summary)}</p></div>
  <h2>🗓️ 行程時間表</h2>
  <p class="tip">🚏 每個景點上方列出從上一站過去的交通方案（點開看轉乘細節），費用為 <b>4 位大人合計</b>的參考價；BTS 建議買兔子卡（Rabbit）或單程票，MRT 可直接刷感應式信用卡。</p>
  ${passHtml(i)}
  <ol class="timeline">${d.stops.map(s => legHtml((ROUTES[i] || {})[s.n]) + `
    <li class="stop"><div class="dot">${s.e}</div><div class="body">
      <div class="time">${s.t}</div><div class="title">${esc(s.n)}</div>
      ${s.d ? `<p class="desc">${esc(s.d)}</p>` : ""}
      ${s.tip ? `<div class="tip">💡 ${esc(s.tip)}</div>` : ""}
      ${s.tags.length ? `<div class="tags">${s.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
      <a class="maplink" href="${map(s.q)}" target="_blank" rel="noopener">📍 Google Map</a>
    </div></li>`).join("")}
  </ol>
  <h2>🛍️ 高 CP 值購物推薦</h2>${recCards(d.shops)}
  <h2>🍜 在地特色美食</h2>${recCards(d.foods)}
  <div class="pager"><a href="${prev[0]}"><span>← 上一頁</span>${prev[1]}</a>
    <a class="next" href="${next[0]}"><span>下一頁 →</span>${next[1]}</a></div>`;
}

(function () {
  const page = document.body.dataset.page;
  const main = page === "index" ? renderIndex() : page === "flight" ? renderFlight()
    : page === "thai" ? renderThai() : renderDay(Number(page) - 1);
  document.body.innerHTML = nav(page) + `<main class="wrap">${main}</main>
    <footer>曼谷旅遊行程 2026・營業時間以現場公告為準</footer>`;
  const on = document.querySelector(".topnav a.on");
  if (on) on.scrollIntoView({ inline: "center", block: "nearest" });
  if (page === "thai") initThai();
})();
