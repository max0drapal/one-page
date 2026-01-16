document.addEventListener('DOMContentLoaded', () => {
    // Dark/Light mode
    const themeToggle = document.getElementById('theme-toggle');
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });

    // AJAX Načtení piva ze JSON
    const fetchBeers = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'data.json', true);
        xhr.onload = function() {
            if (this.status === 200) {
                const beers = JSON.parse(this.responseText);
                const container = document.getElementById('piva-container');
                container.innerHTML = beers.map(beer => `
                    <div class="beer-card">
                        <img src="img/${beer.foto}" alt="${beer.nazev}">
                        <div class="card-content">
                            <h3 style="color: var(--gold)">${beer.nazev}</h3>
                            <p style="font-size: 0.9rem; margin: 10px 0;">${beer.popis}</p>
                            <div style="font-weight: bold;">${beer.cena}</div>
                        </div>
                    </div>
                `).join('');

                // Šipky slideru
                document.getElementById('next-beer').onclick = () => container.scrollLeft += 300;
                document.getElementById('prev-beer').onclick = () => container.scrollLeft -= 300;
            }
        };
        xhr.send();
    };
    fetchBeers();

    // AJAX odeslání formuláře
    const form = document.getElementById('ajax-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const status = document.getElementById('form-status');
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'backend.php?action=save_contact', true);
        xhr.onload = function() {
            const res = JSON.parse(this.responseText);
            status.innerHTML = `<p style="color: var(--gold); margin-top:10px;">${res.message}</p>`;
            if(res.status === 'success') form.reset();
        };
        xhr.send(new FormData(this));
    });
});
