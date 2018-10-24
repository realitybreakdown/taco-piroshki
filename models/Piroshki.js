const piroshkiModel = {
    data: [
        {
            name: "Mushy",
            filling: "mushroom",
            size: 8
        },
        {
            name: "Potato Suprise",
            filling: "potato",
            size: 10
        }
    ],
    addPiroshki: function(name, filling, size) {
        let newPiroshki = {
            name,
            filling,
            size
        };
        this.data.push(newPiroshki);
    },
    getAllPiroshkis: function() {
        return this.data;
    },
    getPiroshki: function(id) {
        return this.data[id];
    },
    updatePiroshki: function(id, name, filling, size) {
        let piroshki = {
            name,
            filling,
            size
        };
        this.data[id] = piroshki;
    },
    deletePiroshki: function(id) {
        if(id < this.data.length && id >=0) {
            this.data.splice(id, 1);
        }
    }
};

module.exports = piroshkiModel;

