function videoType(title, category, cast, price, qty, lenght){
    this.title = title;
    this.category = category;
    this.cast = cast;
    this.price = price;
    this.price = price;
    this.qty = qty;
    this.lenght = lenght;

    this.changeQty = function(qtyToChange)
    {
        return this.qty + qtyToChange;
    }
}



var movies = [];
movies[0] = new videoType("Rogue One", "SciFi", ["Felicity Jones", "Mads Mikkelsen", "Riz Ahmed"], 28.95, 17, 133);
movies[1] = new videoType("Arrival", "SciFi", ["Amy Adams", "Jeremy Renner"], 27.95, 6, 118);


for(var i = 0; i < movies.length; i++)
{
    document.write("<div id='box'>Title: " + movies[i].title + "<br> Category: " + movies[i].category + "<br> Cast: " + movies[i].cast + "<br> Price: CA$ " + movies[i].price + "<br> Amount: " + movies[i].qty + "<br> Lenght: " + movies[i].lenght + ".<br><br><br></div>");
}

document.write("<br><hr><br>After changing quantities: <br>");

movies[0].qty = movies[0].changeQty(-5);
movies[1].qty = movies[1].changeQty(6);

for(var i = 0; i < movies.length; i++)
{
    document.write("<div id='box'>Title: " + movies[i].title + "<br> Category: " + movies[i].category + "<br> Cast: " + movies[i].cast + "<br> Price: CA$ " + movies[i].price + "<br> Amount: " + movies[i].qty + "<br> Lenght: " + movies[i].lenght + ".<br><br><br></div>");
}
