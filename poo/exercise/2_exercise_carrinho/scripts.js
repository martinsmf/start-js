class Carrinho {
    constructor(itens, qtnTotal, valorTotal) {
        this.itens = itens;
        this.qtnTotal = qtnTotal;
        this.valorTotal = valorTotal;
    }

    addItem(item) {
        let contador = 0

        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd
                contador = 1
            }
        }

        if (contador == 0) {
            this.itens.push(item)
        }

        this.qtnTotal += item.qtd
        this.valorTotal += item.preco * item.qtd
    }

    removeItem(item) {
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                let obj = this.itens[itemCarrinho]
                let index = this.itens.findIndex(obj => { return obj.id == item.id })

                this.qtnTotal -= this.itens[itemCarrinho].qtd
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd
                this.itens.splice(index, 1)
            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 01,
        name: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        name: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120)

console.log(carrinho)

carrinho.addItem({ id: 01, name: "Camisa", qtd: 2, preco: 20 })

console.log(carrinho)

carrinho.addItem({ id: 03, name: "mouse", qtd: 1, preco: 150 })

console.log(carrinho)

carrinho.removeItem({ id: 01, name: "Camisa", qtd: 1, preco: 20 })

console.log(carrinho)