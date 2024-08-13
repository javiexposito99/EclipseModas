import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonIcon, IonGrid, IonCol, IonRow, IonFooter, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, } from '@ionic/angular/standalone';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.page.html',
  styleUrls: ['./new-collection.page.scss'],
  standalone: true,
  imports: [IonCard, IonButton, IonFooter, IonRow, IonCol, IonGrid, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle]
})
export class NewCollectionPage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  showInput: boolean = false;
  inputText: string = '';

  constructor() { }

  ngOnInit() {
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
