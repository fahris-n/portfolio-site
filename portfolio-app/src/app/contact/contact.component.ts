import { Component, afterNextRender, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  protected readonly email = signal<string | null>(null);

  constructor() {
    // Built and revealed only in the browser (never during SSR/prerender)
    // so the plain address never lands in the static HTML scrapers read.
    afterNextRender(() => {
      const user = ['f', 'a', 'h', 'r', 'i', 's', 'n', 'a', 's', 's', 'i', 'e', 'f'].join('');
      const domain = ['gmail', 'com'].join('.');
      this.email.set(`${user}@${domain}`);
    });
  }
}