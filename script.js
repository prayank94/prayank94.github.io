/* ==========================================================
   PRAYANK GUPTA PORTFOLIO
   script.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================================
       STICKY NAVBAR EFFECT
    =========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
            header.style.background = "rgba(13,17,23,.95)";

        }
        else {

            header.style.boxShadow = "none";
            header.style.background = "rgba(13,17,23,.85)";

        }

    });





    /* ===========================================
       ACTIVE NAVIGATION LINK
    =========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });





    /* ===========================================
       FADE IN ON SCROLL
    =========================================== */

    const revealElements = document.querySelectorAll(

        ".section, .project-card, .skill-card, .about-card, .timeline-item, .contact-card"

    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";
        element.style.transition = "all .7s ease";

        observer.observe(element);

    });





    /* ===========================================
       SMOOTH SCROLL FOR NAVIGATION
    =========================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});
