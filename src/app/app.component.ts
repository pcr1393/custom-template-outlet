import { Component } from '@angular/core';
import { Contact } from './models/app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-template-outlet';
  contacts: Contact[] = [
    {
      name: 'Prasad Rao',
      sector: 'Banking & Finance',
      sector_id: '100',
      designation: 'Software Trainee'
    },
    {
      name: 'Jitesh Nambiar',
      sector: 'Media & Entertainment',
      sector_id: '101',
      designation: 'Deputy Manager'
    },
    {
      name: 'David Beckam',
      sector: 'Banking & Finance',
      sector_id: '100',
      designation: 'Software Developer'
    },
    {
      name: 'Roger Baldwin',
      sector: 'Media & Entertainment',
      sector_id: '101',
      designation: 'Deputy Manager'
    }
  ];

}
