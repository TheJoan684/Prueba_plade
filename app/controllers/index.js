const GetInicio = (req,res) => {
    res.json({
        "mensaje" : "Tengo la siguientes rutas",
    });
}
//Incluyendo todos los ficheros con los controladores de la api
const { listarEmpresas } = require('./empresas');
const { agregarEmpresa } = require('./empresas');
//console.log(listarEmpresas);
module.exports = {GetInicio,
    listarEmpresas,
    agregarEmpresa
};