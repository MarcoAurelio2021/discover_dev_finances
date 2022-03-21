const Modal = {
  open () {
          document.querySelector('.modal-overlay')
          .classList
          .add('active')

        
  },

  close(){
    document.querySelector('.modal-overlay')
    .classList
    .remove('active')
  }
}

const transactions = [
    {
      id: 1,
    description: 'Luz', 
    amount: -50001,
    date: '30/07/2021',
    },

    {
      id: 2,
    description: 'Criação de Web site', 
    amount: 500000,
    date: '30/07/2021',
    },

    {
      id: 3,
    description: 'Internet', 
    amount: -20012,
    date: '30/07/2021',
    },

    {
      id: 4,
    description: 'App', 
    amount: 200000,
    date: '30/07/2021',
    }
]

const transaction = {
  incomes () {
    // somar as entradas
  },
  expenses () {
    // somar as saídas
  },
  total () {
    // vai pegar as entradas e subtrair com a saídas e me retorna um valor final.
  }
}

const DOM = {

  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction (transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)

   
  },

 innerHTMLTransaction (transaction){

   // é uma funcionalidade que vai fazer a criação do meu html.
   // para cada entrada, essa é a função que vai ser executada em algum momento.

  const CSSclass = transaction.amount > 0 ? "income" : "expense"

  const amount = Utils.formatCurrent(transaction.amount)

  const html = `
  
    <td class="description">${transaction.description}</td>

    <td class="${CSSclass}">${amount}</td>

    <td class="date">${transaction.date}</td>

    <td>
      <img src="./assets/minus.svg" alt="Remover transação" />
    </td>
              
  `
  return html
}
}

const Utils = {
  formatCurrent(value) {
     const signal = Number(value) < 0 ? "-" : ""
    value = String(value).replace(/\D/g, "") // REGEX
    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
    
    return signal + value
  }
}

transactions.forEach(function(transaction) {
  DOM.addTransaction(transaction)
})



