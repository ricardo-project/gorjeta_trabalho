let sectMens = document.querySelector("section") //---> Seção fixa da página!
let divAutor = sectMens.querySelector("div#me") //---> "Div" com a imagem e o nome do autor
/*ABAIXO, é adicionado um evento para que, ao carregar a página ou quando as dimensões do "browser" forem alteradas, mudar a margem da seção fixa em relação ao topo!*/
document.addEventListener("load", positSectFix())
window.addEventListener("resize", function() {
    positSectFix()
});
setTimeout(function() {
    setImgMe()
    setInterval(function() {
        setImgMe()
    }, 43650)
}, 40000)
function setImgMe() { //---> Esta função mostra, em tempos periódicos (a cada 40 segundos), o nome e uma imagem ilustrativa do autor!
    let pDiv = divAutor.querySelector("p")
    let image = divAutor.querySelector("img")
    divAutor.style.display = "flex"
    setTimeout(function() {
        divAutor.style.opacity = 1
        pDiv.style.marginTop = "-40px"
        pDiv.style.fontSize = "40px"
        image.style.width = "200px"
        image.style.height = "200px"
        image.style.transform = "rotate(0deg)"
        setTimeout(function() {
            pDiv.style.marginTop = "0px"
            pDiv.style.fontSize = "20px"
            image.style.width = "0px"
            image.style.height = "0px"
            image.style.transform = "rotate(90deg)"
            divAutor.style.opacity = 0
            setTimeout(function() {
                divAutor.style.display = "none"
                image.style.transform = "rotate(-90deg)"
            }, 800)
        }, 2800)
    }, 50)
} function positSectFix() {
    sectMens.style.marginTop = window.innerHeight + "px"
} /*O código abaixo permite que o usuário usufrua de atalhos que facilitam a limpeza dos campos numéricos de entrada!*/
let pressShift = false
let pressA = false
let pressS = false
let lastAorS //---> "False": A; "True": S
window.addEventListener("keydown", function() {
    const num = event.keyCode
    if(pressShift == false) {
        if(num == 16) {
            pressShift = true
            if(lastAorS == false && pressA == true) { //---> Tecla "A" foi a última a ser pressionada, e ainda mantém-se neste estado!
                inputs[1].value = ""
                inputs[1].focus()
            } else if(lastAorS == true && pressS == true) { //---> Tecla "S" foi a última a ser pressionada, e ainda mantém-se neste estado!
                inputs[3].value = ""
                Inputs[3].focus()
            }
        }
    } if(pressA == false) {
        if(num == 65) {
            pressA = true //---> Agora a tecla "A" está pressionada!
            lastAorS = false
            if(pressShift == true) { //---> Mas se a tecla "Shift" JÁ está pressionada, apagar o valor do campo do "inputs[1]"
                inputs[1].value = ""
                inputs[1].focus()
            }
        }
    } if(pressS == false) {
        if(num == 83) {
            pressS = true //---> Agora a tecla "S" está pressionada!
            lastAorS = true
            if(pressShift == true) { //---> Mas se a tecla "Shift" JÁ está pressionada, apagar o valor do campo do "inputs[3]"
                inputs[3].value = ""
                inputs[3].focus()
            }
        }
    }
}); window.addEventListener("keyup", function() {
    const num = event.keyCode
    if(num == 16) {
        pressShift = false //---> Agora a tecla "Shift" NÃO está pressionada!
    } else if(num == 65) {
        pressA = false //---> Agora a tecla "A" NÃO está pressionada!
    } else if(num == 83) {
        pressS = false //---> Agora a tecla "S" NÃO está pressionada!
    }
});
/*OBSERVAÇÃO. Os elementos do vetor "inputs" abaixo são os campos de entrada das seguintes variáveis, respectivamente:
    - Moeda para valor da conta
    - Valor da conta
    - Porcentagem associada a qualidade do atendimento
    - Número de pessoas
    - Moeda para valor da gorjeta!*/
let inputs = document.getElementsByClassName("entrada")
/*Vetor com as imagens ilustrativas de cada valor de entrada*/
let imagens = new Array()
    imagens[0] = ["https://www.flaticon.com/svg/static/icons/svg/1999/1999264.svg", 170, -30, 25]
    imagens[1] = ["https://image.flaticon.com/icons/png/512/988/988126.png", 130, -8, 12]
    imagens[2] = ["https://static-public.klickpages.com.br/uploads/media/file/1238273/joinha.png", 120, -20, 20]
    imagens[3] = ["https://img.icons8.com/ios/452/safety-collection-place.png", 120, -10, 85]
    imagens[4] = ["https://www.flaticon.com/svg/static/icons/svg/2534/2534407.svg", 170, -30, -10]
/*Vetor com todas as possíveis qualidades referentes ao atendimento*/
let qualidades = new Array()
    qualidades[0] = ["Excepcional (+ 30%)", "darkblue"]
    qualidades[1] = ["Bom (+ 20%)", "darkgreen"]
    qualidades[2] = ["Regular (+ 15%)", "chocolate"]
    qualidades[3] = ["Ruim (+ 10%)", "brown"]
    qualidades[4] = ["Terrível (+ 5%)", "maroon"]
/*Vetor com algumas moedas de países com línguas oficiais latinas (OBSERVAÇÃO: dólar americano é a moeda de Timor Leste, cuja língua oficial é português!)*/
let moedas = new Array()
    moedas[0] = ["Real (R$ 1,00 = US$ 0,18) (Brasil)", 50/9, "R$"]
    moedas[1] = ["Dólar americano (Padrão mundial)", 1, "US$"]
    moedas[2] = ["Euro (€ 1,00 = US$ 1,17) (Portugal)", 100/117, "€"]
    moedas[3] = ["Peso argentino ([ARS]$ 1 = US$ 0,013)", 1000/13, "$"]
    moedas[4] = ["Peso uruguaio ([UYU]$ 1 = US$ 0,023)", 1000/23, "$"]
    moedas[5] = ["Kwanza (Kz 1,00 = US$ 0,0016) (Angola)", 625, "Kz"]
    moedas[6] = ["Metical (MT 1,00 = US$ 0,078) (Moçambique)", 500/39, "MZN"]
let divGorjeta = sectMens.querySelector("div#mens") //---> 
let texts = new Array()
    texts[0] = document.querySelector("fieldset > div > b")
    texts[1] = divGorjeta.querySelector("b")
let dImpClass = document.querySelectorAll(".dImp > div")
let imgInvalid = document.querySelectorAll(".dImp > div > figure > img")
/*O vetor abaixo tem algumas condições que o dado inválido de um campo numérico pode apresentar!*/
let typeInv = new Array("Este valor NÃO é<br>um número!", "Valor inserido é inteiro negativo!", "Valor inserido negativo<br>decimal!", "Não é possível que não<br>haja alguém pra pagar!", "Valor inserido DECIMAL!")
let condInvalid = []
let setImg = new Array(2)
let setImg2 = new Array(2)
let setGorj //---> Favor, NÃO confundir esta variável com a variável "divGorjeta", referente ao elemento HTML que mostra o valor resultante da gorjeta! A variável "setGorj" receberá como valor uma função temporizadora que pode ser cancelada!
let functsImg = new Array()
for(let n = 0; n <= 4; n++) {
    let opt = document.createElement("option")
    opt.value = n
    opt.label = qualidades[n][0]
    inputs[2].appendChild(opt)
} for(let p = 0; p <= 1; p++) { /*Este laço "for" introduz as opções de moedas nas tags "select"s ("inputs[0]" e "inputs[1]")*/
    for(let q = 0; q < moedas.length; q++) {
        let opt = document.createElement("option")
        opt.value = q
        opt.label = moedas[q][0]
        inputs[4*p].appendChild(opt)
    }
} for(let h = 0; h <= 2; h++) {
    inputs[2*h].addEventListener("input", function() {
        calcularGorjeta()
    })
} inputs[2].addEventListener("change", function() { //---> Mudar a cor de fundo de acordo com a qualidade selecionada!
    this.style.background = qualidades[this.value][1]
});
/*O CÓDIGO ABAIXO IMPLEMENTA FUNÇÕES NOS CAMPOS DE ENTRADA QUE PERMITEM CALCULAR A GORJETA!!!*/

for(let g = 0; g <= 1; g++) { //---> Este laço "for" introduz nos campos numéricos ("inputs[1]" e "inputs[3]") eventos que determinam se o dado inserido neles é válido ou não. Caso for, é executado a função do cálculo (Confira mais abaixo)
    condInvalid.push(true)
    let conjDiv = dImpClass[g].getElementsByTagName("div")
    functsImg.push(new Array(function() { animatBaloon(g, conjDiv, false) }, function() { animatBaloon(g, conjDiv, true) }))
    inputs[2*g + 1].addEventListener("input", function() {
        let avaliarValor = parseFloat(this.value)
        if(isNaN(avaliarValor)) { //---> Se o valor inserido não é um número
            isValid(false, g, conjDiv, 0)
            return
        } if(g == 0) {
            let valorString = (this.value).split(".")
            if(valorString.length == 2) {
                if(valorString[1].length > 2) { //---> Reduzir o valor do preço ao múltiplo de 0,01 mais próximo, caso houver mais de dois dígitos!
                    avaliarValor = Math.round(100*avaliarValor)/100
                    this.value = avaliarValor
                }
            }
        } const addDecim = Math.ceil(avaliarValor - Math.floor(avaliarValor))
        const pot1 = potZero(avaliarValor)
        const pot2 = potZero(1 - g)
        if(avaliarValor/(Math.abs(avaliarValor) + pot1) - pot1*pot2 == -1) { //---> Se o valor inserido é um número negativo (ou zero para o campo "inputs[3]")
            isValid(false, g, conjDiv, 1 + addDecim + 2*pot1)
        } else { //---> Se o valor inserido não corresponder a nenhum dos casos anteriores (se for decimal positivo, o cálculo não será executado!)
            isValid(1 - addDecim*pot2, g, conjDiv, addDecim*pot2*4)
        }
    })
}
addOrRemoveFunc(0, true)
addOrRemoveFunc(1, true)
function calcularGorjeta() { //---> Função que efetua o cálculo da gorjeta!
    let moeda1 = moedas[inputs[0].value][1] //---> Relação da primeira moeda escolhida em relação ao dólar americano
    let valorConta = parseFloat(inputs[1].value) //---> Valor da conta baseado na primeira moeda escolhida
    let porcent = (5 - inputs[2].value + Math.floor((4 - inputs[2].value)/4))/20 //---> Porcentagem da gorjeta em relação ao valor da conta, baseado na qualidade do atendimento
    let numPessoas = parseFloat(inputs[3].value) //---> Número de pessoas para dividir a gorjeta
    let moeda2 = moedas[inputs[4].value]
    let symbMoeda = moeda2[2] //---> Símbolo da segunda moeda
    moeda2 = moeda2[1] //---> Relação da segunda moeda escolhida em relação ao dólar americano
    let gorjeta = (Math.round(100*valorConta*porcent*moeda2/(moeda1*numPessoas))/100).toFixed(2) //---> Esta fórmula determina qual será o valor da gorjeta que cada um vai pagar!
    if(gorjeta == 0) {
        texts[1].textContent = "Sem gorjeta!"
    } else {
        texts[1].textContent = symbMoeda + " " + gorjeta
    }
} function isValid(isValidBoole, g, conjDiv, numInvalid) { //---> Função que valida se os valores dos campos numéricos são válidos ou não.
    let divSymb = dImpClass[g]
    let div2 = conjDiv[0]
    let symb = divSymb.querySelector("figure > img")
    const side = 70*(1 - isValidBoole) + "px"
    divSymb.style.marginRight = 15*(1 - isValidBoole) + "px"
    symb.style.height = side
    if(isValidBoole == false) { //---> Se o valor inserido no campo NÃO é válido!
        if(condInvalid[g] == false) {
            condInvalid[g] = true //---> Se o dado antes era válido, agora NÃO é válido!
            if(condInvalid[1 - g] == false) { //---> Se o dado do outro campo JÁ era válido, logo temos agora, PELO MENOS, um dado inválido, logo desaparecer a "div" da gorjeta (Nota-se que ele NÃO acontece SEMPRE que houver, pelo menos, um dado inválido!)
                clearTimeout(setGorj)
                divGorjeta.style.opacity = 0
                setGorj = setTimeout(function() {
                    divGorjeta.style.display = "none"
                }, 400)
            } for(let a = 0; a <= 1; a++) {
                div2.appendChild(document.createElement("div"))
            } clearTimeout(setImg[g])
            addOrRemoveFunc(g, true)
        } conjDiv[2].innerHTML = typeInv[numInvalid]
    } if(isValidBoole == true) { //---> Se o valor inserido no campo É válido!
        if(condInvalid[g] == true) {
            condInvalid[g] = false //---> Se o dado do outro campo JÁ era válido, então agora temos todos os dados válidos, logo MOSTRAR a "div" da gorjeta (Nota-se que isso NÃO acontece SEMPRE que houver novos dados, desde que todos sejam válidos!)
            if(condInvalid[1 - g] == false) {
                clearTimeout(setGorj)
                divGorjeta.style.display = "flex"
                setGorj = setTimeout(function() {
                    divGorjeta.style.opacity = 1
                }, 100)
            } setImg[g] = setTimeout(function() {
                div2.innerHTML = ""
            }, 500)
            addOrRemoveFunc(g, false)
            animatBaloon(g, conjDiv, true)
        }
    } if(condInvalid[0] == false && condInvalid[1] == false) { //---> Se todos os dados são válidos, então calcular o novo valor da gorjeta!
        calcularGorjeta()
    }
} function addOrRemoveFunc(numImg, condFunc) { //---> Função que adiciona ou remove eventos relacionados às imagens de ponto de exclamação, que mostram os balões com as informações de invalidade!
    if(condFunc == false) { //---> Remove os eventos
        imgInvalid[numImg].removeEventListener("mouseenter", functsImg[numImg][0])
        imgInvalid[numImg].removeEventListener("mouseleave", functsImg[numImg][1])
    } else if(condFunc == true) { //---> Adiciona os eventos
        imgInvalid[numImg].addEventListener("mouseenter", functsImg[numImg][0])
        imgInvalid[numImg].addEventListener("mouseleave", functsImg[numImg][1])
    }
} function animatBaloon(g, conjDiv, condSet) { //---> Função que permite a animação dos balões das imagens de ponto de exclamação (Se "condSet" é falso, a função mostra o balão; Se "condSet" é verdadeiro, a função desaparece o balão!)
    clearTimeout(setImg2[g])
    if(condSet == false) { //---> Mostra o balão
        conjDiv[0].style.display = "flex"
        setImg2[g] = setTimeout(function() {
            moveBaloon(0, conjDiv)
        }, 50)
    } else if(condSet == true) { //---> Desaparece o balão
        moveBaloon(1, conjDiv)
        setImg2[g] = setTimeout(function() {
            conjDiv[0].style.display = "none"
        }, 350)
    }
} function moveBaloon(consW, conjDiv) { //---> Função que define as propriedades dos elementos que consituem os balões (são usados na função acima!)
    conjDiv[0].style.opacity = 1 - consW
    for(let w = 0; w <= 1; w++) {
        let div = conjDiv[w + 1]
        div.style.marginTop = 10*(w + 2*consW) + "px"
    }
} function potZero(exp) { //---> Retorna uma potência de base zero (útil ao determinar a validade dos dados inseridos nos campos numéricos!)
    return Math.pow(0, Math.abs(exp))
} /*O CÓDIGO ABAIXO ADICIONA UM EVENTO PARA CADA CAMPO QUE, AO PASSAR O MOUSE POR CIMA DO ELEMENTO, UMA IMAGEM REPRESENTANDO O VALOR É MOSTRADO!*/
let divs = document.getElementsByClassName("inform") //---> "Divs" que agregam os campos de entrada para adicionar os valores
for(let r = 0; r < imagens.length; r++) {
    for(j = 0; j <= Math.pow(0, Math.abs(r - 2)); j++) { //---> Este laço "for" indica quantas imagens será adicionada em cada "div". (Quase) todas as "divs" terão uma imagem (menos a terceira, que será adicionada duas!)
        let newImg = document.createElement("img") //---> Cria um elemento "img" que agregará a imagem representativa de cada valor de entrada!
        newImg.src = imagens[r][0]
        const topImg = imagens[r][3] + 15*j
        const direct = ((r + Math.floor(r/3)) % 2) + j
        function distSideNewImg(consNum) { //---> Função pra calcular a posição de cada imagem em relação ao plano das "divs"!
            const distSide = (imagens[r][2] + imagens[r][1]*consNum/2) + "px"
            newImg.style.top = (topImg + imagens[r][1]*consNum/2) + "px"
            if(direct == 0) {
                newImg.style.left = distSide
            } else if(direct == 1) {
                newImg.style.right = distSide
            }
        } distSideNewImg(1)
        inputs[r].addEventListener("mouseenter", function() { //---> Adiciona o evento que mostra a imagem para o campo de entrada
            newImg.style.height = imagens[r][1] + "px"
            distSideNewImg(0)
        }); inputs[r].addEventListener("mouseleave", function() {
            newImg.style.height = "0px"
            distSideNewImg(1)
        }); if(j == 1) {
            newImg.style.animation = "moveAngleDislike 2s infinite ease-in-out"
            newImg.style.filter = "drop-shadow(rgba(0,0,0,0.4) -3px -3px 0px)"
        } divs[r].appendChild(newImg) //---> Adiciona as imagens nas "divs"
    }
}let cnv = document.querySelector("canvas")
let ctx = cnv.getContext("2d")
/*O CÓDIGO ABAIXO CRIA UM DESENHO COM ONDAS EM UM ELEMENTO CANVAS, PRA SER USADO COMO TEXTURA DO TÍTULO DA PÁGINA E DO PREÇO DA GORJETA*/

/*OBSERVAÇÃO: este código foi diretamente copiado de OUTRO projeto de minha autoria (com pequenas alterações aqui pra funcionar NESTE programa)!*/
for(let k = 1; k <= 4; k++) { //---> Este laço "for" cria QUATRO ondas senoidas com cores que variam do cinza ao branco!
    ctx.beginPath()
    const scl = Math.round(255/(2 - k/4))
    ctx.fillStyle = "rgb(" + scl + "," + scl + "," + scl + ")"
    const kX = Math.PI*(k - 1)*k/4
    const kY = 10*(k - 1 - Math.floor(k/3))
    for(let e = 0; e <= 1920; e++) {
        const eX = Math.cos(e*Math.PI/320 + kX)
        const eY = 75 - 18*eX + kY
        ctx.lineTo(e, eY)
    } ctx.lineTo(1920, 200)
    ctx.lineTo(0, 200)
    ctx.fill()
} const URLimg = "url(" + cnv.toDataURL() + ")" //---> Cria um texto que inclui uma URL associada ao desenho ondulado do "canvas"
for(let a = 0; a <= 1; a++) { //---> Este laço "for" adiciona as imagens como textura dos textos
    texts[a].style.background = URLimg + ", rgba(255,255,255,0.15)"
    texts[a].style.webkitBackgroundClip = "text"
    texts[a].style.backgroundClip = "text"
    texts[a].style.color = "transparent"
}