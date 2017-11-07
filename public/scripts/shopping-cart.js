'use strict';

class ShoppingCart{
    constructor(options){
        this._el = options.el;
        this._items = [];
        this._template = document.querySelector('#shopping-cart-template').innerHTML;
        this._templateFunction = _.template(this._template);
        this._render();
    }


    addItem(item){
        this._items.push(item);

        this._render();
    }
    _render(){
        let html = this._templateFunction({
            title:'My shopping cart',
            items: this._items
        });
        this._el.innerHTML = html;
    }
}

