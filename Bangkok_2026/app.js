// 共用渲染：頁面 <body data-page="index|flight|1..7">
const map = q => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const NUM = ["一", "二", "三", "四", "五", "六", "七"];

function nav(page) {
  const links = [["index.html", "🏠 首頁", "index"], ["flight.html", "✈️ 航班資訊", "flight"]]
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

function renderDay(i) {
  const d = DAYS[i];
  const prev = i === 0 ? ["flight.html", "航班資訊"] : [`day${i}.html`, `第${NUM[i - 1]}天`];
  const next = i === DAYS.length - 1 ? ["index.html", "回首頁"] : [`day${i + 2}.html`, `第${NUM[i + 1]}天`];
  return `
  <div class="hero"><div class="big-emoji">${d.emoji}</div>
    <h1>第${NUM[i]}天・${d.date}</h1><p><b>${esc(d.title)}</b></p><p>${esc(d.summary)}</p></div>
  <h2>🗓️ 行程時間表</h2>
  <ol class="timeline">${d.stops.map(s => `
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
  const main = page === "index" ? renderIndex() : page === "flight" ? renderFlight() : renderDay(Number(page) - 1);
  document.body.innerHTML = nav(page) + `<main class="wrap">${main}</main>
    <footer>曼谷旅遊行程 2026・營業時間以現場公告為準</footer>`;
  const on = document.querySelector(".topnav a.on");
  if (on) on.scrollIntoView({ inline: "center", block: "nearest" });
})();
