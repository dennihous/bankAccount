class Account {
  constructor () {
    this.amount = 0
    this.transactions = []
  }

  static dateToString (date) {
    const format = n => n > 9 ? `${n}` : `0${n}`
    return `${format(date.getDate())}/${format(date.getMonth())}/${date.getFullYear()}`
  }

  statement () {
    const header = [
      ['date', 'credit', 'debit', 'balance'].join(' || ')
    ]

    const transactionStrings = this.transactions.map(t => {
      return `${Account.dateToString(t.date)} || ${t.amount}`
    })

    return header.concat(transactionStrings).join('\n')
  }
  
  withdraw (n, date) {
    this.amount -= n
    this.transactions.unshift({
      date,
      debit: n,
      amount: this.amount
    })
  }

  deposit (n, date) {
    this.amount += n
    this.transactions.unshift({
      date,
      credit: n,
      amount: this.amount
    })
  }

  getAmount() {
    return this.amount
  }
}

module.exports = Account
