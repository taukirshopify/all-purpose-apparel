class CartNotification extends HTMLElement {
  constructor() {
    super();

    this.notification = document.getElementById('cart-notification');
    this.header = document.querySelector('sticky-header');
    this.onBodyClick = this.handleBodyClick.bind(this);
  this.getdata ={};
    this.notification.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
  }

  open() {
    this.notification.classList.add('animate', 'active');

    this.notification.addEventListener('transitionend', () => {
      this.notification.focus();
      trapFocus(this.notification);
    }, { once: true });

    document.body.addEventListener('click', this.onBodyClick);
    const list = document.getElementsByTagName("dl")[0];


    if(this.getdata.options_with_values[0].name === 'Color'){
        let coorvalue = this.getdata.variant_options[0];
    const myfArray = coorvalue.split("___");

    list.getElementsByClassName("product-option")[0].innerHTML = `  <div class="product-option">
    <dt>Color:</dt>
    <dd>${myfArray[0]}</dd>
  </div> `;

    }
    else if(this.getdata.options_with_values[1].name === 'Color'){
      let coorvalue = this.getdata.variant_options[1];
      const myfArray = coorvalue.split("___");
      list.getElementsByClassName("product-option")[1].innerHTML = `  <div class="product-option">
      <dt>Color:</dt>
      <dd>${myfArray[0]}</dd>
    </div> `;
    }
     else if(this.getdata.options_with_values[2].name === 'Color'){
      let coorvalue = this.getdata.variant_options[2];
      const myfArray = coorvalue.split("___");
      list.getElementsByClassName("product-option")[2].innerHTML = `  <div class="product-option">
      <dt>Color:</dt>
      <dd>${myfArray[0]}</dd>
    </div> `;
    } else{
      console.log('there is no color');
    }
  
 
  }
  exTrafunction(e){
  
    this.getdata = e;


  }
  close() {
    this.notification.classList.remove('active');
    document.body.removeEventListener('click', this.onBodyClick);

    removeTrapFocus(this.activeElement);
  }

  renderContents(parsedState) {
      this.cartItemKey = parsedState.key;
      this.getSectionsToRender().forEach((section => {
        document.getElementById(section.id).innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
      }));

      if (this.header) this.header.reveal();
      this.open();
  }

  getSectionsToRender(e) {
   
    return [
      {
        id: 'cart-notification-product',
        selector: `[id="cart-notification-product-${this.cartItemKey}"]`,
      },
      {
        id: 'cart-notification-button'
      },
      {
        id: 'cart-icon-bubble'
      }
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this.notification && !target.closest('cart-notification')) {
      const disclosure = target.closest('details-disclosure, header-menu');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-notification', CartNotification);
