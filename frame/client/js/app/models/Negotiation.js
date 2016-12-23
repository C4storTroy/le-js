class Negotiation {
    constructor(date, quantity, value){
        this._date = date;
        this._quantity =quantity;
        this._value = value;
    }

    //Method to calc volume
    getVolume(){
        return this._quantity * this._value;
    }

    getDate(){
        return this._date;
    }

    getQuantity(){
        return this._quantity;
    }

    getValue(){
        return this._value;
    }
}