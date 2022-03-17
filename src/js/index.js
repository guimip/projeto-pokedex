/*
quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostarr o cartão correspondete ao que foi selecionado na listagem

pra isso vamos precisar trabalhas com dois elementos
1 - listagem
2 - cartão do pokemon

precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com evento de clique feito pelo usuário na listagem de pokémons

- Remover a classe aberto
- Ao clicar em um poemon da listagem pegamos o id desse poemon pra saber qual cartão mostrar
- Remover a classe ativa que marca o pokemon selecionado
- Adicionar a classe ativo no item da lista selecionado

*/

// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

//vamos precisar trabalhar com evento de clique feito pelo usuário na listagem de pokémons

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')        
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado 
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})