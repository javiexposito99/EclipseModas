import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonThumbnail ,IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonButton, IonFooter, IonLabel, IonListHeader, IonList, IonItem } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Product, ProductsService } from '../services/products.service';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-ropa-infantl',
  templateUrl: './ropa-infantl.page.html',
  styleUrls: ['./ropa-infantl.page.scss'],
  standalone: true,
  imports: [ RouterLink ,IonThumbnail ,IonItem, IonList, IonListHeader, IonLabel, IonFooter, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class RopaInfantlPage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  showInput: boolean = false;
  inputText: string = '';

  products: Product[] = [];

  productsService = inject(ProductsService);

  async ngOnInit() {
    const response = await this.productsService.getAll();
    this.products = response.results;
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }

  onBuscar() {
    this.showInput = !this.showInput;
  }

}
