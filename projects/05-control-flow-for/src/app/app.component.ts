import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="container">
      <!-- This article element represents and entire listing -->
      @for(listing of carList; track carList) {
        <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title"><!-- car make and model-->{{listing.make+' '+listing.model}}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span><!-- year -->{{listing.year}}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span><!-- transmission -->{{listing.transmission}}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span><!-- miles -->{{listing.miles}}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span><!-- price -->{{listing.price}}</span>
          </p>
        </section>
      </article>
      } @empty {
        <p>No listings available</p>
      }
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Manual',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];
}
