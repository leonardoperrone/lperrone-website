import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projects = [{
    name: 'Project Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    city: 'City',
    country: 'Country',
    year: 2018,
    logos: ['https://cdn.iconscout.com/icon/free/png-256/arduino-226072.png', 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-128.png'],
    pictures: ['https://media.licdn.com/dms/image/C5622AQHbb8FdaUEieQ/feedshare-shrink_8192/0?e=1574294400&v=beta&t=9Tp1XF-fzQ1DPwY6Q_c1IfqRp-p8y0LP2NZFvg-aTA4', 'https://media.licdn.com/dms/image/C5622AQFSzcyXl-mIkQ/feedshare-shrink_8192/0?e=1574899200&v=beta&t=6bX1gPuT3HK5IGNEYbDDaWcCzJDn_c40-eHRTmUpXKw']
  },
    {
      name: 'Project Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. ',
      city: 'City',
      country: 'Country',
      year: 2018,
      logos: ['https://cdn.iconscout.com/icon/free/png-256/arduino-226072.png', 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-128.png'],
      pictures: ['https://media.licdn.com/dms/image/C5622AQHbb8FdaUEieQ/feedshare-shrink_8192/0?e=1574294400&v=beta&t=9Tp1XF-fzQ1DPwY6Q_c1IfqRp-p8y0LP2NZFvg-aTA4', 'https://media.licdn.com/dms/image/C5622AQFSzcyXl-mIkQ/feedshare-shrink_8192/0?e=1574899200&v=beta&t=6bX1gPuT3HK5IGNEYbDDaWcCzJDn_c40-eHRTmUpXKw']
    },
    {
      name: 'Project Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      city: 'City',
      country: 'Country',
      year: 2018,
      logos: ['https://cdn.iconscout.com/icon/free/png-256/arduino-226072.png', 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-128.png'],
      pictures: ['https://media.licdn.com/dms/image/C5622AQHbb8FdaUEieQ/feedshare-shrink_8192/0?e=1574294400&v=beta&t=9Tp1XF-fzQ1DPwY6Q_c1IfqRp-p8y0LP2NZFvg-aTA4', 'https://media.licdn.com/dms/image/C5622AQHbb8FdaUEieQ/feedshare-shrink_8192/0?e=1574294400&v=beta&t=9Tp1XF-fzQ1DPwY6Q_c1IfqRp-p8y0LP2NZFvg-aTA4']
    }
  ];

  constructor() {
  }

  public getProjects() {
    return this.projects;
  }

}
