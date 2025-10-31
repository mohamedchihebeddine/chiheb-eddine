import { Component, OnInit } from '@angular/core';

declare const emailjs: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;
  sending = false;
  error = '';
  info = {
    email: 'chihebeddine.benamar@gmail.com',
    phone: '+216 95 295 196',
    location: '4070, Msaken, Sousse, Tunisie',
    linkedin: 'https://www.linkedin.com/in/mohamed-chiheb-eddine-benammar-0aa456284/',
    github: 'https://github.com/chihebbenammar96295014'
  };

  ngOnInit() {
    if (emailjs) {
      emailjs.init('PVAem8tJHzBbNH4QT');
    }
  }

  onSubmit() {
    if (!emailjs) {
      return;
    }
    this.sending = true;
    this.error = '';
    emailjs
      .send('service_j21fapq', 'template_28p5nxx', {
        name: this.contact.name,
        email: this.contact.email,
        title: this.contact.subject,
        message: this.contact.message
      })
      .then(() => {
        this.sending = false;
        this.submitted = true;
        this.contact = { name: '', email: '', subject: '', message: '' };
      })
      .catch(() => {
        this.sending = false;
        this.error = 'Une erreur est survenue. Veuillez réessayer.';
      });
  }
}
