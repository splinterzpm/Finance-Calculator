//var options = { weekday: 'short', month: 'long', day: 'numeric' };

export default class Transaction {
  id: number;
  account: Account['name'];
  category: string;
  description: string;
  date?: Date;

  constructor(id: number, account: Account['name'], category: string, description: string, date?: Date ) {
      this.id = id;
      this.account = account;
      this.category = category;
      this.description = description;
      this.date = new Date();
  }
}
