(function () {
  "use strict";
  var ALL = window.PRACTICE_QUESTIONS || [];
  var KEY = "fa1-practice-exam-v1";
  var PARTS = { 1: "Part 1 · Cash & Receivables", 2: "Part 2 · Inventories", 3: "Part 3 · PPE & Intangibles", 4: "Part 4 · Liabilities" };
  var LETTERS = ["A", "B", "C", "D"];
  var byId = {};
  ALL.forEach(function (q) { byId[q.id] = q; });

  var state = load() || { filter: "all", order: null, answers: {}, submitted: false };

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && typeof s === "object" && s.answers) return s;
    } catch (e) {}
    return null;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  function currentQuestions() {
    var ids = state.order && state.order.length === ALL.length ? state.order : ALL.map(function (q) { return q.id; });
    return ids.map(function (id) { return byId[id]; }).filter(function (q) {
      return q && (state.filter === "all" || String(q.part) === String(state.filter));
    });
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function render() {
    var list = document.getElementById("pe-list");
    list.innerHTML = "";
    var qs = currentQuestions();
    qs.forEach(function (q, i) {
      var fs = el("fieldset", "pe-q");
      fs.id = "q" + q.id;
      var chosen = state.answers[q.id];
      var legend = el("legend", "pe-stem");
      legend.innerHTML = '<span class="pe-num">' + (i + 1) + ".</span> " + q.q;
      fs.appendChild(legend);
      var meta = el("p", "pe-meta", PARTS[q.part] + " · " + (q.kind === "calc" ? "Calculation" : "Concept"));
      fs.appendChild(meta);
      q.opts.forEach(function (o, k) {
        var lab = el("label", "pe-opt");
        var inp = document.createElement("input");
        inp.type = "radio";
        inp.name = "q" + q.id;
        inp.value = k;
        inp.checked = chosen === k;
        inp.disabled = !!state.submitted;
        inp.addEventListener("change", function () {
          state.answers[q.id] = k;
          save();
          updateProgress();
        });
        lab.appendChild(inp);
        lab.appendChild(el("span", "pe-letter", LETTERS[k]));
        lab.appendChild(el("span", "pe-text", o));
        if (state.submitted) {
          if (k === q.ans) lab.classList.add("is-correct");
          else if (chosen === k) lab.classList.add("is-wrong");
        }
        fs.appendChild(lab);
      });
      if (state.submitted) {
        var ok = chosen === q.ans;
        fs.classList.add(ok ? "q-right" : "q-wrong");
        var verdict = ok ? "Correct." : (chosen == null ? "Not answered." : "Incorrect.");
        fs.appendChild(el("div", "pe-expl", "<strong>" + verdict + " Answer: " + LETTERS[q.ans] + ".</strong> " + q.expl));
      }
      list.appendChild(fs);
    });
    document.querySelectorAll(".pe-filter").forEach(function (b) {
      var on = String(b.getAttribute("data-filter")) === String(state.filter);
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    document.getElementById("pe-submit").disabled = !!state.submitted;
    renderResults();
    updateProgress();
  }

  function updateProgress() {
    var qs = currentQuestions();
    var n = qs.filter(function (q) { return state.answers[q.id] != null; }).length;
    document.getElementById("pe-progress").textContent = n + " / " + qs.length + " answered";
  }

  function renderResults() {
    var box = document.getElementById("pe-results");
    if (!state.submitted) { box.hidden = true; box.innerHTML = ""; return; }
    var qs = currentQuestions();
    var per = {};
    var right = 0, unanswered = 0;
    qs.forEach(function (q) {
      per[q.part] = per[q.part] || { right: 0, total: 0 };
      per[q.part].total++;
      if (state.answers[q.id] == null) unanswered++;
      if (state.answers[q.id] === q.ans) { right++; per[q.part].right++; }
    });
    var pct = qs.length ? Math.round(right / qs.length * 100) : 0;
    var rows = Object.keys(per).sort().map(function (p) {
      var r = per[p];
      return "<tr><td>" + PARTS[p] + '</td><td class="num">' + r.right + " / " + r.total + '</td><td class="num">' + Math.round(r.right / r.total * 100) + "%</td></tr>";
    }).join("");
    box.innerHTML = '<p class="kicker">Your result</p><h2 id="pe-score">' + right + " / " + qs.length + " correct (" + pct + "%)</h2>" +
      (unanswered ? "<p>" + unanswered + " unanswered question" + (unanswered > 1 ? "s were" : " was") + " counted as wrong.</p>" : "") +
      '<div class="table-wrap"><table><thead><tr><th>Part</th><th class="num">Score</th><th class="num">%</th></tr></thead><tbody>' + rows + "</tbody></table></div>" +
      "<p>Correct answers are marked in green and your wrong picks in red. Each question shows its explanation below the options. Press <b>Reset</b> to try again.</p>";
    box.hidden = false;
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  document.querySelectorAll(".pe-filter").forEach(function (b) {
    b.addEventListener("click", function () {
      state.filter = b.getAttribute("data-filter");
      state.submitted = false;
      save();
      render();
    });
  });
  document.getElementById("pe-shuffle").addEventListener("click", function () {
    state.order = shuffle(ALL.map(function (q) { return q.id; }));
    save(); render();
  });
  document.getElementById("pe-unshuffle").addEventListener("click", function () {
    state.order = null;
    save(); render();
  });
  document.getElementById("pe-submit").addEventListener("click", function () {
    state.submitted = true;
    save(); render();
    document.getElementById("pe-results").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("pe-reset").addEventListener("click", function () {
    var qs = currentQuestions();
    qs.forEach(function (q) { delete state.answers[q.id]; });
    state.submitted = false;
    save(); render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  render();
})();
