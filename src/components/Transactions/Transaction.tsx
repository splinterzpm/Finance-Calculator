//var options = { weekday: 'short', month: 'long', day: 'numeric' };

export default class Transaction {
  id: number;
  account: Account['name'];
  amount: number;
  category: string;
  description: string;

  constructor(id: number, account: Account['name'], amount: number, category: string, description: string) {
      this.id = id;
      this.account = account;
      this.amount = amount;
      this.category = category;
      this.description = description;
  }
}
