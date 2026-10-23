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
  var fallbackMessage = "Something went wrong. Please email Brittany@brittanydoringtherapy.com directly.";

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Honeypot check
      var honeypot = form.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        return;
      }

      status.textContent = "";
      status.className = "form-status";

      // Form endpoint not set up yet
      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        status.textContent = "The form isn't connected yet. Please email Brittany@brittanydoringtherapy.com directly.";
        status.classList.add("error");
        return;
      }

      var submitBtn = form.querySelector(".form-submit");
      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = "Thank you for reaching out. I'll respond within 48 business hours (Monday–Friday).";
            status.classList.add("success");
            form.reset();
          } else {
            status.textContent = fallbackMessage;
            status.classList.add("error");
          }
        })
        .catch(function () {
          status.textContent = fallbackMessage;
          status.classList.add("error");
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

})();
