const { json } = require('body-parser');
const mongoose = require('mongoose')

const Products = mongoose.model('Products') //pegando um model criado como um "PlayerPrefs.get"

module.exports = { //exportar um objeto
    async index(req, res) {
        const { page = 1 } = req.query; //query sao pra parametros get, vou setar um valor na url ?page=2, seto um valor pra pagina que eu quero ir direto(no insomnia)
        const products = await Products.paginate({}, { page, limit: 10 }); //espera recuperar todos os dados do banco de dados para assim logo depois dar o return.

        return res.json(products); //retorna na tela todos os dados em forma de json(objeto)
    },

    async show(req, res) {
        const products = await Products.findById(req.params.id); //findById busca apenas um item a partir do seu id

        return res.json(products);//retornando em formato de json para a tela do insomnia
    },

    async store(req, res) { //rota de criação de um dado no banco de dados usando o insomnina
        const product = await Products.create(req.body); //uso a funcao create do mongoose passando como parametro o body do post la do insomnia

        return res.json(product); //retornando em formato de json para a tela do insomnia
    },

    async update(req, res) {
        const products = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true }); //pegando o id + o novo conteudo do corpo(body) e dizendo com o proximo parametro (new:true) faça com que o mongoose retorne esse produto atualuzado para a variavel products e logo ja atualize.

        return res.json(products);//retornando em formato de json para a tela do insomnia
    },

    async destroy(req, res) {
        await Products.findByIdAndRemove(req.params.id); //remove o item passando o id dele

        return res.send();//retornando nenhuma mensagem
    }
}
