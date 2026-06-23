const library = {
    title : "The Alchemist",
    author : "Paulo Coelho",
    isbn : "9780062315007",
    genre : "Fiction",
    "availability status" : "Available",
    borrowBook : function(){
        console.log(this.title + " book borrowed"); 
    },
    returnBook : function(){
        this.borrowBook();
        console.log(this.title + " book returned");
    },
    displayBook : function(){
        console.log(this.title +" written by " + this.author);
        console.log("ISBN: " + this.isbn, " GENRE: ", this.genre);
        console.log("Availability Status : ", this["availability status"]); 
    }

}

console.log(library);
library.borrowBook();
library.returnBook();