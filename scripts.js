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
    amount: -50000,
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
    amount: -20000,
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


  addTransaction (transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    console.log(tr.innerHTML);
  },

 innerHTMLTransaction (transaction){

 
   // é uma funcionalidade que vai fazer a criação do meu html.
   // para cada entrada, essa é a função que vai ser executada em algum momento.
  const html = `
  
    <td class="description">${transaction.description}</td>

    <td class="expense">${transaction.amount}</td>

    <td class="date">${transaction.date}</td>

    <td>
      <img src="./assets/minus.svg" alt="Remover transação" />
    </td>
              
  `
  return html
}


}

DOM.addTransaction(transactions[0])



