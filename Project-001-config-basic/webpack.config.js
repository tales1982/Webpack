const path = require('path');//estou chamando a biblioteca que quero usar.

module.exports = {
    entry: './src/teste.js',//entrada do arquivo
    output: {//a saida para onde o arquivo deve ir o nome da pasta 'dist'
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'//O nome do arquivo de saida
    }
}