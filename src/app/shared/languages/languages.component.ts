import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  name: string;
  icon: string;
  level: string;
  
  nameKey: string;
  levelKey: string;
}

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languages: Language[] = [
    { name: 'Arabe', nameKey: 'languages.arabic', icon: 'fa-solid fa-globe', level: 'Natif', levelKey: 'languages.native' },
    { name: 'Français', nameKey: 'languages.french', icon: 'fa-solid fa-globe', level: 'Courant', levelKey: 'languages.fluent' },
    { name: 'Anglais', nameKey: 'languages.english', icon: 'fa-solid fa-globe', level: 'Courant', levelKey: 'languages.fluent'},
    { name: 'Espagnol', nameKey: 'languages.spanish', icon: 'fa-solid fa-globe', level: 'Débutant', levelKey: 'languages.beginner'  }
  ];
  
  constructor(private translate: TranslateService) {}
  
  ngOnInit() {
    // Mise à jour des noms et niveaux lors du changement de langue
    this.translate.onLangChange.subscribe(() => {
      this.updateLanguageNames();
    });
    
    // Initialisation des noms et niveaux
    this.updateLanguageNames();
  }
  
  private updateLanguageNames() {
    this.languages.forEach(lang => {
      this.translate.get(lang.nameKey).subscribe((res: string) => {
        lang.name = res;
      });
      this.translate.get(lang.levelKey).subscribe((res: string) => {
        lang.level = res;
      });
    });
  }
}
