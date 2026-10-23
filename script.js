(() => {
"use strict";
const $ = s => document.querySelector(s);
const NO = "No direct biblical reference";
/* name, classification, tone (r crimson, g gold, m grey), perspective note, why-it-is-discussed note, subjects [name, summary, references] */
const C = [
["Forbidden Names","LEGENDARY IDENTITY","r","Biblical text, later folklore and modern fiction treat these names very differently, and denominations do not read every figure the same way.","Names tied to temptation or opposition drew suspicion because tradition linked them with spiritual conflict. 'Forbidden' here is a design label.",[
["Lucifer","Latin for 'light-bearer' in Jerome's Vulgate of Isaiah 14:12, part of a taunt against a king of Babylon. Later tradition read it as the fall of Satan; many scholars and some denominations dispute that link.","Isaiah 14:12-15"],
["Satan","Hebrew for 'accuser' or 'adversary'. He appears as a heavenly prosecutor in Job and Zechariah and as the tempter in the Gospels.","Job 1-2; Zechariah 3; Matthew 4"],
["Lilith","'Lilit' appears once, in Isaiah 34:14, and is translated in different ways. The story of Adam's first wife comes from the medieval Alphabet of Ben Sira, not from Scripture.","Isaiah 34:14"],
["Beelzebul","A Gospel name for the ruler of demons, probably drawn from the god Baal-zebub named in 2 Kings 1.","Matthew 12:24; 2 Kings 1:2"],
["Azazel","Named in the Day of Atonement ritual of Leviticus 16. Later Jewish texts such as 1 Enoch make Azazel a fallen angel.","Leviticus 16; 1 Enoch 8"],
["Mammon","An Aramaic word for wealth, personified in Jesus's saying that no one can serve both God and mammon.","Matthew 6:24"]]],
["Forbidden Knowledge","RESTRICTED KNOWLEDGE","r","Some traditions have discouraged these subjects; others study them as history. Positions vary by denomination and era.","These subjects were treated as rival sources of guidance or hidden truth, which some teachers saw as a challenge to faith.",[
["Divination","Attempts to learn the future by signs or spirits. Deuteronomy lists it among practices of neighbouring peoples, and the Catholic Catechism (2116) rejects it.","Deuteronomy 18:10-12"],
["Necromancy","Seeking guidance from the dead. Deuteronomy forbids it, yet 1 Samuel 28 tells of Saul consulting a medium at Endor; interpreters disagree on what happened.","Deuteronomy 18:11; 1 Samuel 28"],
["Astrology","Debated since antiquity. Isaiah mocks Babylon's stargazers, Matthew's Magi follow a star, and the Catholic Catechism (2116) classes horoscopes with divination.","Isaiah 47:13; Matthew 2"],
["Alchemy","The ancient and medieval art of transforming matter, blending early chemistry with spiritual symbolism. Some clergy practised it; others condemned it as fraud.",NO],
["Gnosticism","A modern umbrella term for ancient movements stressing saving knowledge (gnosis). Early writers such as Irenaeus opposed them; how unified they were is debated.",NO]]],
["Forbidden Pleasures","FORBIDDEN PLEASURE","r","Christian teaching condemns excess and disordered desire in several ways, but communities differ on how rules apply to particular cases.","These appetites are discussed as sins or temptations in Scripture and in the later list of seven deadly sins, which Gregory the Great popularised around 590.",[
["Gluttony","One of the seven deadly sins, drawn from Evagrius Ponticus's earlier list of eight thoughts. Scripture also criticises excess in food and drink.","Proverbs 23:20-21; Philippians 3:19"],
["Drunkenness","The New Testament warns against being drunk on wine. Churches differ: some practise abstinence, others use wine in worship.","Ephesians 5:18; Proverbs 20:1"],
["Gambling","No verse names it directly. Many Protestant bodies discourage it, while the Catholic Catechism (2413) permits games of chance unless they become excessive.","1 Timothy 6:9-10"],
["Lust","Treated as disordered desire in the Sermon on the Mount, and one of the seven deadly sins in Western tradition.","Matthew 5:27-28"],
["Vanity","Ecclesiastes' refrain 'vanity' translates Hebrew hevel, 'breath', and shaped later Christian warnings about self-display.","Ecclesiastes 1:2"]]],
["Forbidden Practices","FORBIDDEN TRADITION","g","Specific passages and traditions condemn these practices; application differs among Catholic, Orthodox and Protestant communities.","Each is named in particular texts or church teaching as a violation of devotion or justice.",[
["Idolatry","Worship of images or other gods, forbidden in the opening commandments. Traditions differ over religious images; the Second Council of Nicaea (787) defended icon veneration.","Exodus 20:3-5"],
["Blasphemy","Speech that dishonours God. Leviticus sets severe penalties, and the Gospels mention an unforgivable blasphemy against the Spirit, which interpreters explain differently.","Leviticus 24:16; Mark 3:29"],
["Religious Hypocrisy","Jesus's sharpest rebukes in the Gospels target religious show without sincerity.","Matthew 23"],
["Oppression","The prophets repeatedly condemn exploiting the poor, foreigners and workers, tying justice to true worship.","Amos 5:11-24; Isaiah 1:17"],
["Vengeance","Romans urges leaving vengeance to God; just war and justice traditions debate what that allows.","Romans 12:19"]]],
["Forbidden Books","DISPUTED MANUSCRIPT","m","Canons differ among Christian traditions, and a noncanonical text is not automatically forbidden everywhere.","Texts were excluded, restricted or censored for reasons of authority, authorship or doctrine, at different times and places.",[
["The Book of Enoch","Also called 1 Enoch. Jude quotes it, and the Ethiopian Orthodox Tewahedo Church counts it as Scripture. Most other churches do not.","Jude 14-15"],
["The Gospel of Thomas","A collection of sayings attributed to Jesus, preserved in Coptic at Nag Hammadi (found 1945). Its date and relation to the canonical Gospels are debated.",NO],
["The Gospel of Judas","A Coptic text from Codex Tchacos, published in 2006. Irenaeus mentioned a Gospel of Judas around 180 and condemned it.",NO],
["The Apocalypse of Peter","A second-century text of vivid visions of judgment. The Muratorian Fragment lists it with reservations; it never became widely canonical.",NO],
["The Index of Prohibited Books","The Catholic Church's list of banned books, first issued in 1559 and abolished in 1966.",NO],
["The Muratorian Fragment","An early list of New Testament writings. Its date, traditionally the second century, is disputed.",NO]]],
["Forbidden Symbols","OCCULT HISTORY","g","Symbols change meaning across cultures and centuries; none has one fixed meaning.","Symbols gain a forbidden reputation when later movements, accusations or fiction attach new meanings to older signs.",[
["The Ouroboros","A serpent eating its tail, found in Egyptian and Greek alchemical sources as an image of cycles.",NO],
["The Pentagram","Used by the Pythagoreans and by medieval Christians (for Christ's five wounds in Sir Gawain) before its 19th-century occult uses.",NO],
["The Inverted Cross","The Cross of St. Peter, linked to the tradition that Peter was crucified head-down. Some later groups adopted it as an anti-Christian sign.",NO],
["Baphomet","A name in 14th-century accusations against the Templars, later given its famous goat-headed image by Eliphas Levi in the 1850s.",NO],
["The Eye of Providence","Used in Christian art for God's watchfulness, later adopted in secular emblems. Conspiracy readings are not supported by historians.",NO]]],
["Forbidden Desires","MORAL CONFLICT","r","Christian writers have long analysed these desires, usually pairing the warning with advice on self-control; emphases vary.","These are universal tensions between desire and conscience, told in both scripture and literature.",[
["Temptation","The Gospels tell of Jesus tempted in the wilderness; Genesis 3 tells of the serpent in Eden.","Matthew 4:1-11; Genesis 3"],
["The Hunger for Power","Jesus refuses the kingdoms offered to him, and the Faust legend dramatises the cost of grasping power.","Luke 4:5-8"],
["Jealousy","Cain and Abel is Scripture's first story of envy turning into violence.","Genesis 4"],
["Forbidden Curiosity","From the tree in Eden to Augustine's warnings about idle curiosity, Christian thought debates when asking becomes dangerous.","Genesis 2:17"],
["Pride","Proverbs links pride to downfall, and later tradition named it the root of other sins.","Proverbs 16:18"]]],
["Forbidden Figures","RELIGIOUS CONTROVERSY","g","Many figures are known through limited sources; legends should not be read as verified fact.","These people were condemned, mistrusted or silenced by religious or political authorities, or became symbols of betrayal.",[
["Judas Iscariot","The disciple who betrayed Jesus in the Gospels. Later texts and modern writers reinterpret his motives.","Matthew 26:14-16"],
["Jezebel","A Phoenician queen in 1 and 2 Kings whose name became shorthand for idolatry.","1 Kings 16-21; Revelation 2:20"],
["Simon Magus","A sorcerer in Acts who tried to buy spiritual power. Later legends embellish him heavily.","Acts 8:9-24"],
["Marcion","A second-century teacher who rejected the Hebrew Bible; the church in Rome excommunicated him around 144.",NO],
["Jan Hus","A Czech reformer burned at the Council of Constance in 1415.",NO],
["Giordano Bruno","An Italian philosopher burned in Rome in 1600. Historians debate how much was heresy and how much science.",NO],
["Galileo Galilei","Tried by the Roman Inquisition in 1633 over heliocentrism; the Catholic Church acknowledged error in 1992.",NO],
["Loki","A trickster in medieval Icelandic sources. He is a Norse mythological figure, not a Christian one.",NO]]],
["Forbidden Places","ANCIENT MYSTERY","g","Many details here mix evidence with legend; each entry marks which is which where known.","These places carry reputations for hidden texts, closed rules or contested histories.",[
["Nag Hammadi","The Egyptian site where thirteen ancient codices were found in 1945, including the Gospel of Thomas.",NO],
["Qumran","Caves near the Dead Sea where the Dead Sea Scrolls were found from 1947.",NO],
["The Vatican Apostolic Archive","Called the 'Secret Archive' until 2019; the Latin 'secretum' meant private, not hidden.",NO],
["Mount Athos","An Orthodox monastic peninsula in Greece, closed to women for centuries.",NO],
["Delphi","The Greek sanctuary of the Pythia oracle, which early Christian writers rejected.",NO]]],
["Forbidden Questions","PHILOSOPHICAL QUESTION","m","Traditions answer these differently; each entry outlines positions rather than one answer.","Hard questions can unsettle communities that rely on settled answers, so they were sometimes discouraged and sometimes celebrated.",[
["Why Does Evil Exist?","Augustine treated evil as a lack of good; Irenaeus saw suffering as part of soul-making. Traditions still debate it.","Job; Genesis 3"],
["How Was the Biblical Canon Formed?","Athanasius's 367 letter lists the 27 New Testament books, yet Catholic, Orthodox and Protestant canons still differ.",NO],
["Where Does Satan's Image Come From?","Horns and pitchforks owe more to medieval art, Dante and Milton than to the Bible.",NO],
["Why Do Denominations Disagree?","Authority, tradition and interpretation divide them, with landmarks such as the split of 1054 and the Reformation from 1517.",NO],
["Can Curiosity Conflict With Obedience?","Genesis 3 and later writers such as Augustine press the question; others argue that faith invites questioning.","Genesis 3"]]],
["Classified Fiction","CLASSIFIED FICTION","m","Fiction. No historical or religious claim is made.","Invented by this archive for atmosphere. No historical source exists for it.",[]]
];
const L = [["Historical record","Asks what surviving sources actually say, and how early they are."],["Textual history","Follows how the texts were copied, edited and disputed."],["Denominational views","Compares how Catholic, Orthodox and Protestant traditions treat the subject."],["Popular culture","Traces how art, literature and film reshaped the idea."],["Scholarly debate","Sets out where historians and theologians still disagree."],["Moral reading","Explores the ethical question it raises and how traditions answer it."]];
const ST = ["RESTRICTED ARCHIVE","CLASSIFIED","ARCHIVAL DISCOVERY","DISPUTED RECORD","SEALED FOLIO","UNDER REVIEW"];
const FA = ["Ashen","Silent","Veiled","Sunken","Gilded","Hollow","Ninth","Salted"], FN = ["Cartulary","Reliquary","Cipher","Concordance","Scriptorium","Ledger","Antiphon","Cloister"];
const FS = ["a catalogue of imaginary confessions kept by an invented order.","a sealed volume whose contents the story never reveals.","a locked room in an imaginary monastery archive.","a ledger of invented debts between invented rivals."];
const TONE = {r: "#B5121B", g: "#B89B5E", m: "#777777"};

/* IDs are positive decimal strings of any length; nothing is converted to Number */
const norm = s => { s = String(s).trim().replace(/^0+/, ""); return /^[1-9]\d*$/.test(s) ? s : null; };
const pad = id => id.padStart(6, "0");
function inc(s) { let a = s.split(""), i = a.length - 1; while (i >= 0) { if (a[i] === "9") { a[i] = "0"; i--; } else { a[i] = String(+a[i] + 1); return a.join(""); } } return "1" + a.join(""); }
function hs(id, salt) { let h = (2166136261 ^ Math.imul(salt + 1, 0x9e3779b1)) >>> 0; for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 16777619); h ^= h >>> 15; h = Math.imul(h, 2246822507); h ^= h >>> 13; return h >>> 0; }
const rel = (id, i) => String(hs(id, 20 + i) % (10 ** (3 + hs(id, 30 + i) % 5)) + 1);

const cache = new Map();
function profile(id) {
  let p = cache.get(id); if (p) return p;
  const k = hs(id, 1) % 11, c = C[k];
  let name, desc, refs, lens = null, fic = k === 10;
  if (fic) {
    name = "The " + FA[hs(id, 2) % 8] + " " + FN[hs(id, 3) % 8];
    desc = "A fictional " + name.slice(4).toLowerCase() + ": " + FS[hs(id, 4) % 4];
    refs = "None. This entry is fiction.";
  } else {
    const s = c[5][hs(id, 2) % c[5].length]; lens = L[hs(id, 3) % 6];
    name = s[0]; desc = s[1]; refs = s[2];
  }
  const x = 15 + hs(id, 5) % 70, y = 15 + hs(id, 6) % 70;
  p = { id, k, name, desc, refs, lens, fic, cls: c[1], tone: c[2], cat: c[0], status: fic ? "FICTIONAL" : ST[hs(id, 7) % 6],
    art: `--x:${x}%;--y:${y}%;--s:${40 + hs(id, 8) % 50}%;--a:${hs(id, 9) % 360}deg;--c:${c[2] === "r" ? "rgba(139,0,0,.7)" : c[2] === "g" ? "rgba(184,155,94,.35)" : "rgba(119,119,119,.3)"};--c2:${TONE[c[2]]}` };
  if (cache.size > 600) cache.clear();
  cache.set(id, p); return p;
}
const title = p => p.lens ? p.name + ": " + p.lens[0] : p.name;

function card(p) {
  const d = document.createElement("article"); d.className = "card";
  d.innerHTML = `<div class="art" style="${p.art}"></div><div class="cbody"><h3></h3><span class="pid">ID ${pad(p.id)}</span><div class="badges"><span class="badge ${p.tone}">${p.cls}</span><span class="badge s">${p.status}</span></div><p></p><button class="open" data-id="${p.id}">Open profile</button></div>`;
  d.querySelector("h3").textContent = title(p); d.querySelector("p").textContent = p.desc; return d;
}

/* ---- infinite feed: IntersectionObserver + scroll check + watchdog ---- */
const feed = $("#feed"), sentinel = $("#sentinel");
let F = { pred: () => true, next: "1", stop: false }, detailOpen = false;
function batch() {
  const frag = document.createDocumentFragment(); let added = 0, scan = 0;
  while (added < 12 && scan < 1500) {
    const p = profile(F.next); F.next = inc(F.next); scan++;
    if (F.pred(p)) { try { frag.append(card(p)); added++; } catch (e) { /* skip a failed profile */ } }
  }
  feed.append(frag);
}
function fill() { if (F.stop || detailOpen) return; let g = 0; while (g++ < 8 && sentinel.getBoundingClientRect().top < innerHeight + 1800) batch(); }
let tick = false;
addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(() => { tick = false; fill(); }); } }, { passive: true });
addEventListener("resize", fill);
if ("IntersectionObserver" in window) new IntersectionObserver(e => { if (e[0].isIntersecting) fill(); }, { rootMargin: "1800px" }).observe(sentinel);
setInterval(fill, 1200);

function setFeed(label, pred, start, key) {
  closeDetail(true); F = { pred, next: start || "1", stop: false }; sentinel.hidden = false;
  feed.innerHTML = ""; $("#feedTitle").textContent = label;
  document.querySelectorAll(".chip").forEach(b => b.classList.toggle("on", b.dataset.key === key));
  scrollTo(0, 0); fill();
}
/* ---- chips ---- */
const chips = $("#chips");
[["all", "All"], ...C.map((c, i) => ["c" + i, c[0].replace("Forbidden ", "")]), ["saved", "Saved"]].forEach(([k, t]) => {
  const b = document.createElement("button"); b.className = "chip"; b.dataset.key = k; b.textContent = t; chips.append(b);
});
chips.addEventListener("click", e => {
  const k = e.target.dataset && e.target.dataset.key; if (!k) return;
  if (k === "all") setFeed("All profiles", () => true, "1", k);
  else if (k === "saved") showSaved();
  else { const i = +k.slice(1); setFeed(C[i][0], p => p.k === i, "1", k); }
});
function freshStart() { let s = String(1 + Math.floor(Math.random() * 9)); for (let i = 0, n = 6 + Math.floor(Math.random() * 10); i < n; i++) s += Math.floor(Math.random() * 10); return s; }
$("#fresh").onclick = () => setFeed("Newly generated profiles", () => true, freshStart(), "");
$("#random").onclick = () => openProfile(freshStart());

/* ---- favorites (this browser only) ---- */
const favs = () => { try { return JSON.parse(localStorage.getItem("forbidden:favs") || "[]"); } catch (e) { return []; } };
const saveFavs = a => { try { localStorage.setItem("forbidden:favs", JSON.stringify(a)); return true; } catch (e) { return false; } };
function showSaved() {
  closeDetail(true); F = { pred: () => false, next: "1", stop: true }; sentinel.hidden = true; feed.innerHTML = "";
  $("#feedTitle").textContent = "Saved on this browser";
  document.querySelectorAll(".chip").forEach(b => b.classList.toggle("on", b.dataset.key === "saved"));
  const a = favs();
  if (!a.length) { const m = document.createElement("p"); m.className = "empty"; m.textContent = "Nothing saved yet. Open any profile and choose Save. Saved profiles live in this browser and vanish if its data is cleared."; feed.append(m); }
  a.forEach(id => feed.append(card(profile(id)))); scrollTo(0, 0);
}

/* ---- profile detail overlay (feed stays mounted underneath, so scroll position is kept) ---- */
const detail = $("#detail"); let depth = 0, inApp = false;
function openProfile(id) { id = norm(id); if (!id) return; inApp = true; location.hash = "p/" + id; }
function renderDetail(id) {
  const p = profile(id), c = C[p.k], saved = favs().includes(id);
  detail.innerHTML = `<div class="dwrap"><div class="dnav"><button class="btn" id="back">Return to feed</button><button class="btn" id="copy">Copy profile link</button><button class="btn" id="fav">${saved ? "Remove from saved" : "Save"}</button></div>
<div class="art" style="${p.art}"></div><h2></h2><span class="pid">ID ${pad(id)}</span>
<div class="badges" style="margin-top:8px"><span class="badge ${p.tone}">${p.cls}</span><span class="badge s">${p.status}</span><span class="badge m">${p.fic ? "FICTION" : p.refs.startsWith("No") ? "HISTORICAL OR TRADITIONAL RECORD" : "BIBLICAL AND TRADITION"}</span></div>
<h4>Introduction</h4><p id="d1"></p><h4>Approach of this entry</h4><p id="d2"></p><h4>Why it is discussed</h4><p id="d3"></p><h4>Christian perspectives</h4><p id="d4"></p><h4>Biblical references</h4><p id="d5"></p>
<h4>Related profiles</h4><div class="rel" id="rel"></div><h4>Related category</h4><div class="rel"><button id="catgo"></button></div>
<p style="margin-top:28px;color:var(--mu);font-size:.8rem">For curiosity and education, not religious guidance. Saved profiles stay in this browser only.</p></div>`;
  detail.querySelector("h2").textContent = title(p);
  $("#d1").textContent = p.desc;
  $("#d2").textContent = p.lens ? p.lens[0] + ": " + p.lens[1] : "A fictional entry, written for atmosphere.";
  $("#d3").textContent = c[4]; $("#d4").textContent = c[3]; $("#d5").textContent = p.refs;
  const r = $("#rel");
  for (let i = 0; i < 4; i++) { const q = profile(rel(id, i)), b = document.createElement("button"); b.dataset.id = q.id; b.append(title(q)); const s = document.createElement("small"); s.textContent = "ID " + pad(q.id) + " | " + q.cls; b.append(s); r.append(b); }
  const cg = $("#catgo"); cg.textContent = "More: " + c[0]; cg.dataset.k = p.k;
  detail.scrollTop = 0;
}
function showDetail(id) {
  if (!detailOpen) { document.body.classList.add("lock"); } detailOpen = true; detail.hidden = false;
  renderDetail(id); $("#back").focus({ preventScroll: true });
}
function closeDetail(silent) {
  if (!detailOpen) return; detailOpen = false; detail.hidden = true; document.body.classList.remove("lock");
  if (silent && location.hash) history.replaceState(null, "", location.pathname + location.search);
  fill();
}
function leave() { if (depth > 0 && inApp) { const d = depth; depth = 0; history.go(-d); } else { closeDetail(true); } }
addEventListener("hashchange", route);
function route() {
  const m = location.hash.match(/^#p\/(\d+)$/), id = m && norm(m[1]);
  if (id) { if (inApp) depth++; showDetail(id); } else closeDetail(false);
}
detail.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  if (b.id === "back") leave();
  else if (b.id === "copy") { const u = location.href; (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(() => b.textContent = "Link copied", () => prompt("Copy this link", u)); }
  else if (b.id === "fav") { const id = norm(location.hash.slice(3)), a = favs(), i = a.indexOf(id); if (i < 0) a.push(id); else a.splice(i, 1); b.textContent = saveFavs(a) ? (i < 0 ? "Remove from saved" : "Save") : "Storage unavailable"; }
  else if (b.dataset.id) { inApp = true; location.hash = "p/" + b.dataset.id; }
  else if (b.id === "catgo") { const i = +b.dataset.k; depth = 0; setFeed(C[i][0], p => p.k === i, "1", "c" + i); }
});
feed.addEventListener("click", e => { const b = e.target.closest("[data-id]"); if (b) openProfile(b.dataset.id); });

/* ---- search ---- */
const sbox = $("#search"), q = $("#q"), res = $("#results");
function openSearch() { sbox.hidden = false; document.body.classList.add("lock"); q.focus(); }
function closeSearch() { sbox.hidden = true; if (!detailOpen) document.body.classList.remove("lock"); }
function item(p, extra) { const li = document.createElement("li"), b = document.createElement("button"); b.append(title(p)); const s = document.createElement("small"); s.textContent = "ID " + pad(p.id) + " | " + p.cls + (extra ? " | " + extra : ""); b.append(s); b.onclick = () => { closeSearch(); openProfile(p.id); }; li.append(b); return li; }
function runSearch() {
  const raw = q.value.trim(); res.innerHTML = ""; if (!raw) return;
  if (/^\d+$/.test(raw)) {
    const id = norm(raw);
    if (!id) { res.innerHTML = "<li class='hint'>IDs start at 1. Enter a positive whole number.</li>"; return; }
    res.append(item(profile(id), "exact ID match")); return;
  }
  const t = raw.toLowerCase().split(/\s+/); let n = 0, seen = new Set(), id = "1";
  for (let i = 0; i < 3000 && n < 15; i++, id = inc(id)) {
    const p = profile(id), key = p.name + (p.lens ? p.lens[0] : ""); if (seen.has(key)) continue;
    const hay = (p.name + " " + p.desc + " " + p.cls + " " + p.cat + " " + p.refs).toLowerCase();
    if (t.every(w => hay.includes(w))) { seen.add(key); res.append(item(p)); n++; }
  }
  if (!n) { const li = document.createElement("li"); li.className = "hint"; li.textContent = "No match in the first 3,000 identities. Try a category such as 'books', or enter a numerical ID."; res.append(li); }
}
$("#openSearch").onclick = openSearch; $("#closeSearch").onclick = closeSearch; $("#go").onclick = runSearch;
$("#clr").onclick = () => { q.value = ""; res.innerHTML = ""; q.focus(); };
q.addEventListener("keydown", e => { if (e.key === "Enter") runSearch(); });
addEventListener("keydown", e => { if (e.key === "Escape") { if (!sbox.hidden) closeSearch(); else if (detailOpen) leave(); } });

/* ---- mystery of the day, terminal ---- */
const dt = new Date(), dayId = norm(`${dt.getFullYear()}${String(dt.getMonth() + 1).padStart(2, "0")}${String(dt.getDate()).padStart(2, "0")}`), dp = profile(dayId);
$("#day").innerHTML = "<b>Mystery of the day:</b> <a data-id='" + dayId + "' role='button' tabindex='0'></a>";
$("#day a").textContent = title(dp);
$("#day a").onclick = () => openProfile(dayId);
$("#day a").onkeydown = e => { if (e.key === "Enter") openProfile(dayId); };
const T = ["ACCESSING ARCHIVE...", "DECODING HISTORICAL RECORD...", "DISCOVERY INDEX UPDATED...", "NEW IDENTITY GENERATED..."];
if (!matchMedia("(prefers-reduced-motion:reduce)").matches) { let i = 0; setInterval(() => { if (!document.hidden) $("#term").textContent = T[++i % 4]; }, 2800); }

setFeed("All profiles", () => true, "1", "all");
route();
})();
