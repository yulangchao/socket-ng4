import { Component, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AuthService } from './auth/auth.service';
import {Router} from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../sass/main.scss']
})
export class AppComponent {

//define variable
    private isAuthenticate: any;
    private authService: any;
    private navbutton: boolean = false;

    constructor(private router: Router, private translate: TranslateService, authService: AuthService) {
        translate.addLangs(["en", "cn"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|cn/) ? browserLang : 'en');
        this.authService = authService;
    }

    isChat(){
      return window.location.pathname === '/chat';
    }

    logout(){
      this.router.navigate(['']);
      this.authService.logout();
    }
 }
