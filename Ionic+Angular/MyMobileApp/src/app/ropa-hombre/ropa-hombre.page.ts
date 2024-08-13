import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonThumbnail ,IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonIcon, IonLabel, IonItem, IonList, IonListHeader, IonFooter, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Product, ProductsService } from '../services/products.service';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-ropa-hombre',
  templateUrl: './ropa-hombre.page.html',
  styleUrls: ['./ropa-hombre.page.scss'],
  standalone: true,
  imports: [IonButton, IonFooter,  IonThumbnail ,RouterLink ,IonListHeader, IonList, IonItem, IonLabel, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonButtons]
})
export class RopaHombrePage implements OnInit {

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
