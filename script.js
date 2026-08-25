(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Sticky header: subtle shadow once the page has scrolled
  var siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    var updateHeaderShadow = function () {
      siteHeader.classList.toggle("scrolled", window.scrollY > 8);
    };
    updateHeaderShadow();
    window.addEventListener("scroll", updateHeaderShadow, { passive: true });
  }

  // Accessible FAQ accordion
  var triggers = document.querySelectorAll(".accordion-trigger");
  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var expanded = trigger.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));

      trigger.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (panel) {
        panel.classList.toggle("open", !expanded);
        panel.setAttribute("aria-hidden", expanded ? "true" : "false");
      }
    });
  });

  // Scroll-triggered reveal animations (respects prefers-reduced-motion)
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-anim");

    var revealEls = document.querySelectorAll(".reveal, .reveal-item, .hero-anim");
    var staggerCounts = new WeakMap();

    revealEls.forEach(function (el) {
      var parent = el.parentElement;
      var count = staggerCounts.get(parent) || 0;
      el.style.transitionDelay = Math.min(count * 70, 420) + "ms";
      staggerCounts.set(parent, count + 1);
    });

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // Contact form submission (Formspree — see TODO in index.html)
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Honeypot check
      var honeypot = form.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        return;
      }

      var formData = new FormData(form);
      var submitBtn = form.querySelector(".form-submit");

      status.textContent = "";
      status.className = "form-status";
      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = "Thanks for reaching out — I'll be in touch within one business day.";
            status.classList.add("success");
            form.reset();
          } else {
            return response.json().then(function (data) {
              var message = (data && data.errors && data.errors.length)
                ? data.errors.map(function (err) { return err.message; }).join(", ")
                : "Something went wrong. Please try again or email directly.";
              status.textContent = message;
              status.classList.add("error");
            });
          }
        })
        .catch(function () {
          status.textContent = "Something went wrong. Please try again or email directly.";
          status.classList.add("error");
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }
})();
