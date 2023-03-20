const timestamp = (new Date()).getTime()
const publicKey = 'd0d76a60dcc1d76a2227bc2debaca41c'
const privateKey = '92eab95f3d5ee3fc201dbf74e7d984192599f316'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const listaPersonagens = document.querySelector('#lista-personagens')

// endereço:https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}
// metodo: GET
const promise = fetch(
  `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`
)

promise.then(response => {
  response.json().then(res => {

    res.data.results.forEach((personagem, index) => {
      const html = `
        <div>
          <p>${personagem.name}</p>
          <img src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}" />
        </div>
      `
      listaPersonagens.innerHTML += html
    })
  })
}, error => {
  console.log('Erro: ' + error)
});
