import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: ` <!-- listing markup goes here -->
  <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title">{{car.make+' '+car.model}}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span><!-- year -->{{car.year}}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span><!-- transmission -->{{car.transmission}}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span><!-- miles -->{{car.miles}}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span><!-- price -->{{car.price}}</span>
          </p>

          <button class="save" (click)="saveCar()">Save</button>
        </section>
      </article>
  `,
  styles: ``,
})
export class ListingComponent {
  @Input({
    required: true,
  }) car!: Car;
  @Output() handleCarSaved = new EventEmitter<Car>();
  

  saveCar() {
    this.handleCarSaved.emit(this.car);
  }

}
