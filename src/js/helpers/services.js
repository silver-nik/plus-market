import Converter from "./converter";

class Services {

    static _limitBase = 100;
    static _urlBase = 'https://fakestoreapi.com/products';

    static getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Couldn't fetch url: ${url}, status: ${res.status}`);
        }

        return await res.json();

    }

    static getAllProducts = async (limit = this._limitBase, categoryName) => {
        const res = categoryName ?  await this.getResource(`${this._urlBase}/category/${categoryName}?limit=${limit}`) : 
                                    await this.getResource(`${this._urlBase}?limit=${limit}`)

        return res.map(this.transformProduct)

    }

    static getAllCategories = async () => {
        const res = await this.getResource(`${this._urlBase}/categories`)

        return res

    }

    static getProductsBySpecificCategory = async (categoryName, limit = this._limitBase) => {
        const res = await this.getResource(`${this._urlBase}/category/${categoryName}?limit=${limit}`)

        return res

    }

    static transformProduct = (product) => {
        return {
            
            id: product.id,
            title: product.title,
            price: product.price ? Converter.convertCurrencyToRub(product.price, 'USD') : '',
            category: product.category,
            description: product.description ? `${product.description.slice(0, 210)}...` : '',
            image: product.image

        }
    }

}

export default Services;