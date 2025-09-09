const togg = document.querySelector('.menu-toggle');
const header = document.querySelector('.header');

if(togg && header){
  togg.addEventListener('click', () => {
    togg.classList.toggle('open');
    header.classList.toggle('nav-open');
  });
}

        document.addEventListener('DOMContentLoaded', function () {
            if (window.Typed) {
                // التايبينغ الخاص بالـ Home
                new Typed('#typed', {
                    strings: ["IT Support Engineer", "Penetration Tester", "Red Teamer", "CTF Player", "Cybersecurity Engineer"],
                    typeSpeed: 50,
                    backSpeed: 40,
                    loop: true
                });

                // التايبينغ الخاص بالـ About
                new Typed('#typed-about', {
                    strings: ["Penetration Tester", "Security Researcher", "Red Team Enthusiast"],
                    typeSpeed: 50,
                    backSpeed: 40,
                    loop: true
                });
            }
        });

        document.addEventListener("scroll", function () {
            const bars = document.querySelectorAll(".bar, .radial-bar");
            bars.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) {
                    el.classList.add("reveal");
                }
            });
        });




