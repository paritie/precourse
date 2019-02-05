// JS goes here
/* Open */
function Navopen() {
  document.querySelector(".dropdown").style.height = "100%";
}

/* Close */
function Navclose() {
  document.querySelector(".dropdown").style.height = "0%";
}

class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      // Select all items elements from the DOM
      let tabItems = document.querySelectorAll('.service-detail');

      // Remove the class "service-detail-selected" from each element
      Array.from(tabItems).forEach( el => {
        el.classList.remove('service-detail-selected');
      });
      // Add a class named "service-detail-selected" to this element
      this.element.classList.add('service-detail-selected'); 
    }
  }

  class TabLink {
    constructor(element) {
      this.element = element;
      
      // Get the custom data attribute on the Link
      this.data = element.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.service-detail[data-tab="${this.data}"]`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => { this.select() });
    };
  
    select() {
      // Get all of the elements with the tabs class
      const links = document.querySelectorAll('.tab');
  
      // Using a loop or the forEach method remove the 'tabs-selected' class from all of the links
      Array.from(links).forEach( el => {
        el.classList.remove('tab-selected');
      });
  
      // Add a class named "tabs-selected" to this link
      this.element.classList.add('tab-selected');
      
      // Call the select method on the item associated with this link
      this.tabItem.select();
    }
  }
  
  let links = document.querySelectorAll('.tab');
  links = Array.from(links).map( (tab) => new TabLink(tab));
  links[0].select();
