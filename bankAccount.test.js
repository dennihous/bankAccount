const Account = require('./bankAccount')

test('getAmount', () => {
  const account = new Account()

  expect(account.getAmount()).toBe(0);
});

test('deposit', () => {
  const account = new Account()
  const date = new Date(2022, 4, 20)

  account.deposit(100, date)

  expect(account.getAmount()).toBe(100);
});

test('withdraw', () => {
  const account = new Account()
  const date = new Date(2022, 4, 20)

  account.withdraw(100, date)

  expect(account.getAmount()).toBe(-100);
});

test('statement', () => {
  const account = new Account()

  account.deposit(1000, new Date(2023, 1, 10))
  account.deposit(2000, new Date(2023, 1, 13))
  account.withdraw(500, new Date(2023, 1, 14))

  const statement = `
  date || credit || debit || balance
  14/01/2023 || || 500.00 || 2500.00
  13/01/2023 || 2000.00 || || 3000.00
  10/01/2023 || 1000.00 || || 1000.00
  `

  expect(account.statement()).toBe(statement.trim());
});

test('dateToString', () => {
  const date = new Date(2022, 4, 20)

  expect(Account.dateToString(date)).toBe('20/04/2022')
})