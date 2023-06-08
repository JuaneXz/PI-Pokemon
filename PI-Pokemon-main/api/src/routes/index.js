const { Router } = require('express');
const { postPokemon } = require('../controllers/postPokemon')
const { getPokById } = require('../controllers/getPokById')
const { getPokByName } = require('../controllers/getPokByName')
const { getPokemons } = require('../controllers/getPokemons')
const { getTypes } = require('../controllers/getTypes')
const { getDBPok } = require('../controllers/getDBPok')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/pokemon', (req, res) =>{
    postPokemon(req, res)
})

router.get('/pokemons/:id', (req, res) =>{
    getPokById(req, res)
})

router.get('/pokemons/name/:name', getPokByName)

router.get('/pokemons', getPokemons);

router.get('/types', getTypes);

router.get('/dbpokemons', getDBPok);

module.exports = router;

