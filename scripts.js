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

const Transaction = {
  all: transactions,

  add(transaction) {

    Transaction.all.push(transaction)
    console.log(Transaction.all);

  },
  incomes () {
    let income = 0;
    // pegar todas as transações
    // para cada(forEach) transação
    Transaction.all.forEach(transaction => {
      // se(If) ela for maior que zero
    if (transaction.amount > 0) {
      // somar a uma variável e retorna uma variável
    income += transaction.amount;
    }
    })
   
    return income;
  },

  expenses() {
    let expense= 0;
    // pegar todas as transações
    // para cada(forEach) transação
    Transaction.all.forEach(transaction => {
      // se(If) ela for menor que zero
    if (transaction.amount < 0) {
      // somar a uma variável e retorna uma variável
     expense += transaction.amount;

    }
  })

  return expense

  },

  total () {
    // obs: o sinal de mais está juntando com o sinal negativo do expenses, que está fazendo assim a subtração.
   return Transaction.incomes() + Transaction.expenses();
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
},

updateBalance (){
  // alteração no parte de balanço, selecionando o elemento pelo id, e inserindo o valores atraves do innerHTMl.
  document
  .getElementById('incomeDisplay')
  .innerHTML = Utils.formatCurrent(Transaction.incomes())

  document
  .getElementById('expenseDisplay')
  .innerHTML = Utils.formatCurrent(Transaction.expenses())


  document
  .getElementById('totalDisplay')
  .innerHTML = Utils.formatCurrent(Transaction.total())
  
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

DOM.updateBalance()


Transaction.add({
  id:39,
  description: 'alo',
  amount: 200,
  date: '25/03/2022'
})
