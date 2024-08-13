import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent , IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonIcon, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonFooter, IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ IonContent , IonRouterLink, IonButton, IonFooter, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class HomePage implements OnInit {
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
