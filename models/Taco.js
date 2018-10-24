const tacoModel = {
    data: [
        {
            name: 'Captain heart',
            protein: 'soyrizo',
            garnish: 'cheddar, lettuce, pico'
        },
        {
            name: 'Piggy',
            protein: 'tofu',
            garnish: 'chile peppers and jalapenos'
        }
    ],
    addTaco: function(name, protein, garnish) {
        let newTaco = {
            name,
            protein,
            garnish
        };
        this.data.push(newTaco);
    },
    getAllTacos: function() {
        return this.data;
    },
    getTaco: function(id) {
        return this.data[id];
    },
    updateTaco: function(id, name, protein, garnish) {
        let taco = {
            name,
            protein,
            garnish
        }
        this.data[id] = taco;
    },
    deleteTaco: function(id) {
        if(id < this.data.length && id >=0) {
            this.data.splice(id, 1);
        }
    }
};

module.exports = tacoModel;