DBConnector = require('./dbconnector');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = 3500;

//PREPARAR APP
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//SETEAR LA RUTA PRINCIPAL
app.use('/', router);

//CONFIGURAR RUTAS
router.route('/').get((req,res) => {
    res.status(200).json({
        estatus: 200,
        data: "API FUNCIONANDO"
    }   
    )
});

router.route('/users').get(async(req,res) => {
    result = await DBConnector.query("SELECT * FROM usuarios")
    res.json(result);
});


app.listen(3500);
//console.log(`Escuchando en el puerto: ${port}`);
