function criarCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
    <div class="cartao_conteudo">
                    <h3>Futebol</h3>
                    <div class="cartao_conteudo_pergunta">
                        <P>Qual o maior time do mundo?</P>
                    </div>
                    <div class="cartao_conteudo_resposta">
                       <p>O maior time do mundo é o Real Madrid.</p>
                    </div>
                </div>
                `
    container.appendChild(cartao)
}
