function Book(title,author,page){
    this.title = title;
    this.author = author;
    this.page = page;
    this.toString = this.toString;
}

function toString(){
    return `${this.title} de ${this.author}, si are ${this.page} pagini.`
}

function citeste(){
    return "Acum citesc o carte"
}

export {Book, citeste};