export default class KGModel {
    #kepAdatLista = [
        { kep: "kepek/coco1.jpg", cim: "Coco 1" },
        { kep: "kepek/coco2.jpg", cim: "Coco 2" },
        { kep: "kepek/zizi1.jpg", cim: "Zizi 1" },
        { kep: "kepek/zizi2.jpg", cim: "Zizi 2" },
        
    ];

    getList() {
        return this.#kepAdatLista;
    }

}