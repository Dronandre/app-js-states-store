export default class Filter {
    constructor (query) {
        this.query = query;
    }

    async getResults (){
        try {
            const queryString = 'http://jsproject.webcademy.ru/items';
            const response = await fetch(queryString + this.query);
            let data = await response.json();

            if (!Array.isArray(data)) {
                data = [];
            } 

            this.results = data;
            return data;
            
        } catch (error) {
            alert(error);
        }        
    }
}