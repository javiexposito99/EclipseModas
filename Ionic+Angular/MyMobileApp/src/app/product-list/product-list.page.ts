import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonThumbnail, IonListHeader, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Product, ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [IonIcon, IonListHeader, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonButtons, IonMenuButton, IonThumbnail]
})
export class ProductListPage implements OnInit {

  products: Product[] = [];

  productsService = inject(ProductsService);

  async ngOnInit() {
    const response = await this.productsService.getAll();
    this.products = response.results;
  }

}
