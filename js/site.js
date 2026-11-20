(function () {
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll("[data-expand]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("data-expand") === "open";
      document.querySelectorAll("details.qa").forEach(function (d) {
        d.open = open;
      });
    });
  });
})();
