import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ShoppingCartService } from '../services/shopping-cart.service'
import { Prodotto } from '../shared/Prodotto';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  productIntoCart : number = 0;

  constructor(private cartService : ShoppingCartService, private messageService: MessageService) {

    // this.productIntoCart = this.cartService.getCartInstance().getTotProdotti();
    // console.log("funzione in navbar: " + this.productIntoCart);

  }

  ngOnInit(): void {
    this.messageService.recivedMessage().subscribe((d)=>{
      this.productIntoCart = d;
    })
  }

  changeToBlood() {
    let image = document.getElementById("logo") as HTMLImageElement;
    image.src = "../../assets/menu-img/logo-bianco-e-nero-sangue.png";
    // img.src = "../../assets/menu-img/logo-bianco-e-nero-sangue.png";
  }

  changeToNormal() {
    let image = document.getElementById("logo") as HTMLImageElement;
    image.src = "../../assets/menu-img/logo-bianco-e-nero.png";
    // img.src = "../../assets/menu-img/logo-bianco-e-nero-sangue.png";
  }

  //temporanea pee simulare
  addProduct(prodotto: Prodotto) {  //funzione per testarlo

    this.cartService.getCartInstance().addToCart(prodotto);

  }


}
