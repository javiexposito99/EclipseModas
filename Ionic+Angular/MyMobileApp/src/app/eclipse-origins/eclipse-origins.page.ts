import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonButton, IonFooter } from '@ionic/angular/standalone';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-eclipse-origins',
  templateUrl: './eclipse-origins.page.html',
  styleUrls: ['./eclipse-origins.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class EclipseOriginsPage implements OnInit {
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
