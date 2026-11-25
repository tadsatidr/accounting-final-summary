(function () {
  "use strict";
  var ALL = window.PRACTICE_QUESTIONS || [];
  var KEY = "fa1-practice-exam-v2";
  var PARTS = { 1: "Part 1 · Cash & Receivables", 2: "Part 2 · Inventories", 3: "Part 3 · PPE & Intangibles", 4: "Part 4 · Liabilities" };
  var L = ["A", "B", "C", "D"];

  var state = load();
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.answers) return s;
    } catch (e) {}
    return { filter: "all", answers: {} };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  function inSet() {
    return ALL.filter(function (q) { return state.filter === "all" || String(q.part) === String(state.filter); });
  }

  function feedback(q, li) {
    var pick = state.answers[q.id];
    var btns = li.querySelectorAll(".pe-opt");
    btns.forEach(function (b, k) {
      b.disabled = true;
      b.setAttribute("aria-pressed", k === pick ? "true" : "false");
      if (k === q.ans) b.classList.add("is-correct");
      else if (k === pick) b.classList.add("is-wrong");
      else b.classList.add("is-dim");
    });
    var ok = pick === q.ans;
    var fb = document.createElement("p");
    fb.className = "pe-fb";
    fb.innerHTML = (ok ? '<strong class="ok">Correct.</strong> ' : '<strong class="no">Not quite — the answer is ' + L[q.ans] + ".</strong> ") + q.expl;
    li.appendChild(fb);
  }

  function render() {
    var list = document.getElementById("pe-list");
    list.innerHTML = "";
    inSet().forEach(function (q, i) {
      var li = document.createElement("li");
      li.className = "pe-q";
      li.id = "q" + q.id;
      var stem = document.createElement("p");
      stem.className = "pe-stem";
      stem.innerHTML = '<span class="pe-num">' + (i + 1) + ".</span>" + q.q;
      li.appendChild(stem);
      var opts = document.createElement("div");
      opts.className = "pe-opts";
      q.opts.forEach(function (o, k) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "pe-opt";
        b.innerHTML = '<span class="pe-letter">' + L[k] + "</span><span>" + o + "</span>";
        b.addEventListener("click", function () {
          if (state.answers[q.id] != null) return;
          state.answers[q.id] = k;
          save();
          feedback(q, li);
          status();
        });
        opts.appendChild(b);
      });
      li.appendChild(opts);
      if (state.answers[q.id] != null) feedback(q, li);
      list.appendChild(li);
    });
    document.querySelectorAll(".pe-tab").forEach(function (t) {
      var on = t.getAttribute("data-filter") === String(state.filter);
      t.classList.toggle("is-on", on);
      t.setAttribute("aria-current", on ? "true" : "false");
    });
    status();
  }

  function status() {
    var qs = inSet(), done = 0, right = 0, per = {};
    qs.forEach(function (q) {
      var p = per[q.part] = per[q.part] || { r: 0, n: 0 };
      p.n++;
      if (state.answers[q.id] != null) { done++; if (state.answers[q.id] === q.ans) { right++; p.r++; } }
    });
    document.getElementById("pe-score").textContent = right + "/" + done + " correct";
    document.getElementById("pe-left").textContent = (qs.length - done) + " left";
    var sum = document.getElementById("pe-summary");
    if (qs.length && done === qs.length) {
      var items = Object.keys(per).sort().map(function (k) {
        return "<li><span>" + PARTS[k] + "</span><span>" + per[k].r + "/" + per[k].n + "</span></li>";
      }).join("");
      sum.innerHTML = "<h2>Done: " + right + "/" + qs.length + " correct (" + Math.round(right / qs.length * 100) + "%)</h2><ul>" + items + "</ul><p>Press Reset to try this set again.</p>";
      sum.hidden = false;
    } else { sum.hidden = true; sum.innerHTML = ""; }
  }

  document.querySelectorAll(".pe-tab").forEach(function (t) {
    t.addEventListener("click", function () {
      state.filter = t.getAttribute("data-filter");
      save(); render();
      window.scrollTo({ top: 0 });
    });
  });
  document.getElementById("pe-reset").addEventListener("click", function () {
    inSet().forEach(function (q) { delete state.answers[q.id]; });
    save(); render();
    window.scrollTo({ top: 0 });
  });

  render();
})();
