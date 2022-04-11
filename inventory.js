//Using JS Classes and Prototypes
class Book {
    constructor(title, Author, ISBN, numCopies) {
        this.title=title,
        this.Author=Author,
        this.ISBN = ISBN,
        this.numCopies = numCopies
    }
  }
Book.prototype.getAvailablity = function(){
 if(this.numCopies== 0){
    console.log('OUT OF STOCK');
 } else{
    console.log('IN STOCK')
 }
}

Book.prototype.sell = function(numSold =1){
    this.numCopies-=numSold;
}

Book.prototype.restock = function(numSold =5){
    this.numCopies+=numSold;
    console.log(this.numCopies)
}

let Science = new Book('Science', 'Niyam', 123, 2);
Science.restock();
Science.sell(0)
Science.getAvailablity();
