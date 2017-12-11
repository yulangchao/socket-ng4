import {Component} from '@angular/core';
import {RukuService} from './ruku.service';
import { AuthService } from '../auth/auth.service';
import {ItemComponent} from '../items/item.component';
// Import NgFor directive
import { ToastComponent } from '../shared/toast/toast.component';
import {Router} from '@angular/router';
// Create metadata with the `@Component` decorator
@Component({
    // HTML tag for specifying this component
    selector: 'ruku',
    templateUrl: './ruku.component.html'

})
export class RukuComponent {

  // Initialize our `rukuData.text` to an empty `string`
  p: number = 1;
  rukuData = {
    user: '',
    name: '',
    price: null,
    number: 0,
    location: '',
    date: '',
    text: ''
  };
  private shows: number = 5;
  private selected: number = 3;
  private rukus: Array<any> = [];
  private items: Array<any> = [];
  private origins: Array<any> = [];
  private array: Array<any> = [];
  private count: number = 0;
  private a = 0;
  private filter: string = '';
  private isLoading: boolean = true;
  constructor(private router: Router, public rukuService: RukuService, public authService: AuthService, public toast: ToastComponent) {
      if (authService.isAuthenticate) {
          rukuService.getAll().subscribe((res) => {
                // Populate our `ruku` array with the `response` data
                this.rukus = res;
                this.origins = res;
                for (let ruku of res){
                   this.a += ruku.price * ruku.number;
                }
                this.isLoading = false;
            });

          rukuService.getAllitem().subscribe((res) => {
                // Populate our `ruku` array with the `response` data
                this.items = res;
                // Reset `ruku` input
            });
      } else {
        router.navigate(['']);
      }
  }

  createRuku() {
    if (JSON.parse(localStorage.getItem('token')).role === "admin") {
      this.rukuData.name = this.rukuData.name.split('+')[1];
      this.rukuService.createRuku(this.rukuData)
        .subscribe((res) => {

          // Populate our `ruku` array with the `response` data
          this.rukus = res;
          this.origins = res;
          this.applyFilter();
          this.a = 0;
          for (let ruku of res){
            this.a += ruku.price * ruku.number;
          }
          // Reset `ruku` input
          this.rukuData.text = '';
          this.rukuData.name = '';
          this.rukuData.price = null;
          this.rukuData.number = 0;
          this.toast.setMessage('Stock In is added successfully.', 'success');
        });

      // this.rukuService.updateItem(this.rukuData.number)
      //   .subscribe((res) => {

      //       // Populate our `ruku` array with the `response` data
      //       this.rukus = res;
      //       // Reset `ruku` input
      //  });
    }

  }


  applyFilter(){
    this.rukus = this.origins.filter((ruku)=>{return ruku.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 });
  }

  deleteRuku(id) {
    if (JSON.parse(localStorage.getItem('token')).role === "admin") {
      this.rukuService.deleteRuku(id)
        .subscribe((res) => {
          
          // Populate our `ruku` array with the `response` data
          this.rukus = res;
          this.a = 0;
          for (let ruku of res){
            this.a += ruku.price * ruku.number;
          }
          this.origins = res;
          this.applyFilter();
          this.toast.setMessage('Stock In is deleted successfully.', 'success');
        });
    }
  }

  isadmin(){
    if(localStorage.getItem('token')){
    return (JSON.parse(localStorage.getItem('token')).role === "admin");
    }else{
      return false;
    }
  }

  updateRuku(ruku) {
    if (JSON.parse(localStorage.getItem('token')).role === "admin") {
      this.rukuData.name = this.rukuData.name.split('+')[1];
      this.rukuService.updateRuku(ruku._id,this.rukuData)
        .subscribe((res) => {
            this.origins[this.origins.indexOf(ruku)] = res;
            this.a = 0;
            for (let ruku of this.origins){
              this.a += ruku.price * ruku.number;
            }
            this.rukus = this.origins;
            this.applyFilter();
            this.toast.setMessage('Stock In is edited successfully.', 'success');
        });
    }
  }

 updateForm(ruku){
       this.rukuData.text = ruku.text;
       this.rukuData.name = this.getItemPrice(ruku.name)+'+'+ruku.name;;
       this.rukuData.price = ruku.price;
       this.rukuData.number = ruku.number;
       this.rukuData.location = ruku.location;
       this.rukuData.date = ruku.date;
       this.rukuData.user = ruku.user;
  }

 getItemPrice(name){
       for (let item of this.items){
         if (item.name == name){
           return item.price;
         }
       }
  }
}
