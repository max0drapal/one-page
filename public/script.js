document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav a');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    });

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= (section.offsetTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    const pivaContainer = document.getElementById('piva-container');
    if (pivaContainer) {
        const piva = [
            { n: "Kocour 12°", p: "Světlý ležák, vlajková loď." },
            { n: "Kocour IPA", p: "Svrchně kvašený speciál." },
            { n: "Stout", p: "Tmavý speciál s tóny kávy." }
        ];
        pivaContainer.innerHTML = piva.map(p => `
            <div class="card">
                <h3>${p.n}</h3>
                <p>${p.p}</p>
            </div>
        `).join('');
    }

    const form = document.getElementById('registrace-form');
    if (form) {
        form.innerHTML = `
            <input type="email" placeholder="Váš e-mail" required>
            <button type="submit">Odebírat</button>
        `;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Děkujeme!');
            form.reset();
        });
    }
});
