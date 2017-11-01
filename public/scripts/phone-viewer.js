"use strict";

class PhoneViewer extends Component{
    constructor(options){
        super(options.el);

        this._el = options.el;
        this._template = document.querySelector('#pnone-viewer-template').innerHTML;
    }

    showPhone(phoneDetails){
        this._phone = phoneDetails;
        this.show();
        this._render()
    }

    _render(){
        let templateFunction = _.template(this._template);
        let html = templateFunction({
            phone: this.phone
        });

        this._el.innerHTML = html;
    }
}