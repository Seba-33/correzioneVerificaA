export class RentModel {
    tipo : string
    descrizione : string
    tariffa : string
    valutazionemedia : string
    giorni: string

    constructor(tipo: string, descrizione: string, tariffa: string, valuatazionemdeia: string, giorni: string){
        this.tipo = tipo 
        this.descrizione = descrizione
        this.tariffa = tariffa
        this.valutazionemedia = valuatazionemdeia
        this.giorni = giorni
    }
}
