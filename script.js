document.addEventListener('DOMContentLoaded', () => {

    // Pobieranie elementów reprezentujących wyniki z drzewa DOM.
    const playerEl = document.querySelector('.player');
    const scoreEl = document.querySelector('.score');

    // Funkcja, która informuje gracza o wygraniu gry. 
    function victory() {
        // Ukrycie boxa z informacją który gracz gra.
        playerEl.classList.add('opacity-0');
        // Zakończenie gry, zmiana wartości w zmiennej.
        endOfTheGame = true;
        // Wyświetlenie informacji w htmlu o tym który gracz wygrał.
        scoreEl.innerText = `Wygrał ${whichPlayer}!!! :)`;
    };

    // Funkcja odpowiedzialna za sprawdzanie zawartości elementów w tablicy.
    const checkingContent = (symbol) => {        
        for (let i = 0; i < 3; i++) {
            if ( array[0].innerText === symbol && array[1].innerText === symbol && array[2].innerText === symbol) {
                array[(i+1) - 1].classList.add('victory-color');
                victory();
            } else if ( array[3].innerText === symbol && array[4].innerText === symbol && array[5].innerText === symbol) {
                array[(i+4) - 1].classList.add('victory-color');
                victory();
            } else if ( array[6].innerText === symbol && array[7].innerText === symbol && array[8].innerText === symbol) {
                array[(i+7) - 1].classList.add('victory-color');
                victory();
            } else if ( array[0].innerText === symbol && array[3].innerText === symbol && array[6].innerText === symbol) {
                array[(i*3)].classList.add('victory-color');
                victory();
            } else if ( array[1].innerText === symbol && array[4].innerText === symbol && array[7].innerText === symbol) {
                array[(i*3) + 1].classList.add('victory-color');
                victory();
            } else if ( array[2].innerText === symbol && array[5].innerText === symbol && array[8].innerText === symbol) {
                array[(i*3) + 2].classList.add('victory-color');
                victory();
            } else if ( array[0].innerText === symbol && array[4].innerText === symbol && array[8].innerText === symbol) {
                array[(i*4)].classList.add('victory-color');
                victory();
            } else if ( array[2].innerText === symbol && array[4].innerText === symbol && array[6].innerText === symbol) {
                array[(i*2) + 2].classList.add('victory-color');
                victory();
            };        
        };         
    };    

    // Zmienna, która zawiera informacje jaki gracz gra; domyślnie - 'gracz X'.
    let whichPlayer = 'gracz X';
    // Aktualizacja informacji o aktualnym graczu.
    playerEl.innerText = `Teraz gra ${whichPlayer}`;
    // Zmienna, która określa czy skończyła się gra; domyślnie - false.
    let endOfTheGame = false;   

    // Pobieranie elementu reprezentującego wynik z drzewa DOM.
    const boardEl = document.querySelector('.board');
    // Stworzenie tablicy składającej się z elementów reprezentującego wynik z drzewa DOM.
    const array = Array.from(boardEl.querySelectorAll('.box'));

    array.forEach( (el) => { 
        el.addEventListener("click", (evt) => {
            if (endOfTheGame === false) {
                // Tura gracza X.
                if (whichPlayer === 'gracz X') {
                    // Pobranie wartości z klikniętego boxa.  
                    let content = evt.target.innerText;
                    if (content === '') {
                        // Dodanie tekstu w kliknięty box.
                        evt.target.innerText = 'x';
                        // Sprawdzenie czy cel gry się wykonał.
                        checkingContent('x');
                        // Zmiana gracza.
                        whichPlayer = 'gracz O';
                        // Aktualizacja informacji o aktualnym graczu.
                        playerEl.innerText = `Teraz gra ${whichPlayer}`;
                    };
                // Tura gracza O.        
                } else if (whichPlayer === 'gracz O') {
                    // Pobranie wartości z klikniętego boxa. 
                    let content = evt.target.innerText;
                    if (content === '') {
                        // Dodanie tekstu w kliknięty box.
                        evt.target.innerText = 'o';
                        // Sprawdzenie czy cel gry się wykonał.
                        checkingContent('o');
                        // Zmiana gracza.
                        whichPlayer = 'gracz X';
                        // Aktualizacja informacji o aktualnym graczu.
                        playerEl.innerText = `Teraz gra ${whichPlayer}`;
                    };
                };
            };
        });
    });    

    // Pobieranie elementu reprezentującego wynik z drzewa DOM.
    const buttonEl = document.querySelector('.button');
        
    // Kliknięcie w przycisk 'RESETUJ'.
    buttonEl.addEventListener('click', () => {  
        // Usunięcie informacji o wygranej.
        scoreEl.innerText = '';
        // Zmiana informacji o końcu gry na 'false'.
        endOfTheGame = false;
        // Zmiana gracza.
        whichPlayer = 'gracz X';
        // Wyświtlenie i zaktualizowanie informacji o akurualnym graczu.
        playerEl.classList.remove('opacity-0');
        playerEl.innerText = `Teraz gra ${whichPlayer}`;

        // Usunięcie zawartości boxów oraz zmiana ich koloru.
        array.forEach( (el) =>{
            el.innerText = '';
            el.classList.remove('victory-color');
        });
    });

});