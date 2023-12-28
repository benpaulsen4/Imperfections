import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { ErrorComponent } from "./components/error/error.component";
import { LoaderComponent } from "./components/loader/loader.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ErrorComponent, LoaderComponent]
})
export class AppComponent {
  error?: string;
  isLoading = true;

  constructor(private router: Router){
    router.events.subscribe((event) => {
      this.navigationInterceptor(event as RouterEvent)
    })
  }

  onGoHome(){
    this.router.navigate([""])
  }

  private navigationInterceptor(event: RouterEvent){
    if (event instanceof NavigationError){
      this.error = event.error.message;
      this.isLoading = false;
    } else if (event instanceof NavigationEnd){
      this.isLoading = false
    }
  }
}
