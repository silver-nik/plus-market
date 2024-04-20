class Converter {

    static _USD = 93;


    static convertCurrencyToRub = (sum, currency) => {

        switch(currency) {
            case 'USD':
                return Math.floor(sum * this._USD)
            case 'EURO':
                return Math.floor(sum * this._USD)
        }

    }

}

export default Converter