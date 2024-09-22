import Jatekter from "../view/Jatekter.js";
import KGModel from "../model/KGModel.js"; 

export default class KGController {
    constructor() {
        this.taroloElem = $(".tartalom")[0];
        this.kgModel = new KGModel();
        
        new Jatekter(this.kgModel.getList(), this.taroloElem);
        
        this.#esemenykezelo();
    }

    #esemenykezelo() {
        $(window).on("kattintas", (event) => {
            console.log(event.detail);
            new Jatekter(this.kgModel.getList(), this.taroloElem);
        });
    }
}