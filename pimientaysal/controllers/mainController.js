let platos = [ 
    {
        id: 1,
        nombre: "Carpaccio fresco",
        precio: 65.50,
        descrip: "Entrada Carpaccio de salmón con cítricos"
    },
    {
        id: 2,
        nombre: "Risotto de berenjena",
        precio: 47.00,
        descrip: "Risotto de berenjena y queso de cabra"
    },
    {
        id: 3,
        nombre: "Mousse de arroz",
        precio: 27.50,
        descrip: "Mousse de arroz con leche y aroma de azahar"
    },
    {
        id: 4,
        nombre: "Espárragos blancos",
        precio: 37.50,
        descrip: "Espárragos blancos con vinagreta de verduras y jamón ibérico"
    }
]


const mainController = {

  home: function (req, res) {
    res.render("index");
  },

  detalleMenu: function (req, res) {
    let plato = platos.find(plato => {
        return plato.id == req.params.id
    })
    res.render("detalleMenu");
  },

};

module.exports = mainController;
