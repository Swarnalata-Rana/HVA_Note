// class Book{
//     constructor(title,author,copies){
//       this.title=title;
//       this.author=author;
//       this.copies=copies;
//     }
//     borrowBook(copies){
//       return copies-1
//     }
  
//     returnBook(copies){
//       return copies+1
//     }
//     info(copies){
//       console.log(copies)
//     }
//   }
//   const b1=new Book("harrypotor","XYZ",5)
//   const b2=new Book("New Human Rebulation", "Daisaku Ikeda",2)
  
//   console.log(b1.info())
//   console.log(b2.info())
// did this way in test

class Book{
    constructor(title,author,copies){
        this.title=title;
        this.author=author;
        this.copies=copies;
    }
    
    borrowBook(){
       if (this.copies>0){
           this.copies-=1
           console.log(" Borrowed successfully!")
       }
       else{
           console.log("no copies left!")
       }
    }
    
    returnBook(){
       this.copies+=1
        console.log("Book return successfully!")
      
    }
    
    info(){
        console.log(`${this.title} by ${this.author} - Copies available: ${this.copies}`)
    }
}

const book1=new Book("My life story", "Runu", 5)
const book2=new Book("My life story with you", "you&me", 2)

book1.borrowBook()
book1.borrowBook()
book1.info()

book2.borrowBook()
book2.returnBook()
book2.info()




