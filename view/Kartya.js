export default class Kartya {
    #kepAdat = {};
    #szuloElem;

    constructor(adat, szuloElem) {
        this.#kepAdat = adat;  
        this.#szuloElem = szuloElem;
        this.kepadatKiir(); 
        this.gombKattint();
    }

    kepadatKiir() {
        const txt = `<div class="kep"> 
                        <img src="${this.#kepAdat.kep}" alt="${this.#kepAdat.cim}">
                    </div>`;
        this.#szuloElem.innerHTML += txt; 
    }

    gombKattint() {
        this.#szuloElem.addEventListener("click", () => {
            const e = new CustomEvent("kattintas", { detail: this.#kepAdat });
            window.dispatchEvent(e);
        });
    }
}