/* eslint-disable require-jsdoc */
import {Component, HostListener} from '@angular/core';
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
  mobileThemeIcon: string;
  constructor(private themeService: ThemeService, private router: Router) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
    if (this.isDarkMode) {
      this.mobileThemeIcon = 'light_mode';
    } else {
      this.mobileThemeIcon = 'dark_mode';
    }
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

public screenWidth: any = window.innerWidth;
public isLarge: boolean = true;

/** @function
   * @name checkWidth
   * @listens window:resize
   * @hostListener
   * @description checkWidth listens to window resize and adjusts the isLarge Boolean.
   */
@HostListener('window:resize') checkWidth() {
  //  alert('it works!');
  this.screenWidth = window.innerWidth;
  if (this.screenWidth <= 600) {
    this.isLarge = false;
  } else {
    this.isLarge = true;
  }
}

  isDarkMode: boolean;

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode ? this.themeService.updateTheme('custom-light-theme') : this.themeService.updateTheme('custom-dark-theme');
    if (this.isDarkMode) {
      this.mobileThemeIcon = 'dark_mode';
    } else {
      this.mobileThemeIcon = 'light_mode';
    }
    console.log(this.mobileThemeIcon);
  }

  ngOnInit(): void {
    if (this.screenWidth <= 600) {
      this.isLarge = false;
    } else {
      this.isLarge = true;
    }
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find((tab) => tab.link === '.' + this.router.url));
    });
  }
}
