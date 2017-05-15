var Koalas, Tulips, Penguins;

function init(){

    Koalas = {
        prodId: 1002,
        supplierCode: 'S1001',
        description: 'Koalas',
        pictureName: 'Koala.jpg',
        qtyOnHand: 9,
        price: 119.95
    };
    Tulips  = {
        prodId: 1003,
        supplierCode: 'S1002',
        description: 'Tulips',
        pictureName: 'Koala.jpg',
        qtyOnHand: 9,
        price: 7.95
    };

    Penguins  = {
        prodId: 1004,
        supplierCode: 'S1003',
        description: 'Penguins',
        pictureName: 'Penguins.jpg',
        qtyOnHand: 9,
        price: 127.95
    };


}

function getPrice(obj){

    init();

    var text = this.event.target.id + ' item costs $' + window[obj].price;

    document.getElementById('display').innerHTML = text;


}


/**
 * Created by User on 2/9/2017.
 */
