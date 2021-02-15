/* eslint-disable require-jsdoc */
import {Component} from '@angular/core';
import {ThemeService} from './theme-service/theme.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pathfinder-rulefinder';
  navLinks: any[];
  activeLinkIndex = -1;
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  constructor(private themeService: ThemeService, private router: Router) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
    this.navLinks = [
      {
        label: 'Pathfinder Spells',
        route: './',
        index: 0,
      }, {
        label: 'Pathfinder Conditions',
        route: './conditions',
        index: 1,
      }, {
        label: 'Pathfinder Feats',
        route: './feats',
        index: 2,
      },
    ];
  }

  isDarkMode: boolean;

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode ? this.themeService.updateTheme('custom-light-theme') : this.themeService.updateTheme('custom-dark-theme');
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find((tab) => tab.link === '.' + this.router.url));
    });
  }
}
