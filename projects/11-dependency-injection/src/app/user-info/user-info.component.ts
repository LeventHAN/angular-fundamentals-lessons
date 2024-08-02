import { Component, Input } from '@angular/core';
import { User } from '../data';

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
    <p>{{ user.id }} {{ user.email }}</p>
    <!-- add more properties to customize -->
  `,
  styles: ``,
})
export class UserInfoComponent {
  @Input({
    required: true,
  })
  user!: User;



}
