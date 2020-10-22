const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const bcryptjs = require('bcryptjs');

const products = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Senha: {
        type: String,
        required: true
    },
    CreateDate: { //sera inserido automaticamente por conta do Date.now que esta definido como default:
        type: Date,
        default: Date.now
    }
});

products.pre('save', async () => {//pre = acontece algo antes de salvar definitivamente
    const hash = await bcryptjs.hash(this.Senha, 10); //faz a encriptacao
    this.Senha = hash;//atrubuo a encriptacao ao atributo de products
    next();//parto para a proxima etapa, salvar!
})

products.plugin(mongoosePaginate);//coloca a paginacao no meu objeto products 

mongoose.model('Products', products); // fica salvo em toda a aplicacao, como se fosse um PlayerPrefs.set('chave', valor); no caso o valor é passado um objeto com a 'estrutura' dos dados que serao salvos no banco de dados.