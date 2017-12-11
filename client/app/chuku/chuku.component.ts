import {Component} from '@angular/core';

import {ChukuService} from './chuku.service';
import { AuthService } from '../auth/auth.service';
import {ItemComponent} from '../items/item.component';
// Import NgFor directive
import { ToastComponent } from '../shared/toast/toast.component';
import {Router} from '@angular/router';
// Create metadata with the `@Component` decorator
@Component({
    // HTML tag for specifying this component
    selector: 'chuku',
    templateUrl: './chuku.component.html'

})
export class ChukuComponent {

  // Initialize our `chukuData.text` to an empty `string`
  p: number = 1;
  chukuData = {
    user: '',
    name: '',
    price: null,
    number: 0,
    kuaidi: '',
    date: '',
    text: ''
  };
  private shows: number = 5;
  private selected: number = 3;
  private chukus: Array<any> = [];
  private origins: Array<any> = [];
  private items: Array<any> = [];
  private array: Array<any> = [];
  private count: number = 0;
  private a = 0;
  private filter: string = '';
  private isLoading: boolean = true;
  constructor(private router: Router, public chukuService: ChukuService, public toast: ToastComponent, public authService: AuthService) {
      if (authService.isAuthenticate) {
        chukuService.getAll().subscribe((res) => {
              // Populate our `chuku` array with the `response` data
              this.chukus = res;
              this.origins = res;
              this.applyFilter();
              this.a = 0;
              for (let chuku of res){
                 this.a += chuku.price * chuku.number - ((chuku.kuaidi==="") ? 0 : parseInt(chuku.kuaidi));
              }
            this.isLoading = false;

          });

        chukuService.getAllitem().subscribe((res) => {
              // Populate our `chuku` array with the `response` data
              this.items = res;
        });

      } else {
        router.navigate(['']);
      }
  }

  applyFilter(){
    
    this.chukus = this.origins.filter((chuku)=>{return (chuku.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ) || (chuku.user.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 )});
  }

  createChuku() {
    if (JSON.parse(localStorage.getItem('token')).role === "admin") {
      this.chukuData.name = this.chukuData.name.split('+')[1];
      this.chukuService.createChuku(this.chukuData)
        .subscribe((res) => {

          // Populate our `chuku` array with the `response` data
          this.chukus = res;
          this.origins = res;
          this.a = 0;
          for (let chuku of res){
             this.a += chuku.price * chuku.number - ((chuku.kuaidi==="") ? 0 : parseInt(chuku.kuaidi));
          }
          this.applyFilter();
          this.toast.setMessage('Stock Out is added successfully.', 'success');
          this.chukuData.name = '';
          this.chukuData.price = null;
          this.chukuData.number = 0;
          this.chukuData.kuaidi = '';
        });

    }

  }

  deleteChuku(id) {
    if (JSON.parse(localStorage.getItem('token')).role === "admin") {
      this.chukuService.deleteChuku(id)
        .subscribe((res) => {

          // Populate our `chuku` array with the `response` data
          this.chukus = res;
          this.origins = res;
          this.applyFilter();
          this.a = 0;
          for (let chuku of res){
             this.a += chuku.price * chuku.number - ((chuku.kuaidi==="") ? 0 : parseInt(chuku.kuaidi));
          }
          this.toast.setMessage('Stock Out is deleted successfully.', 'success');
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

  updateChuku(chuku) {
    if (JSON.parse(localStorage.getItem('token')).role === "admin") {
      this.chukuData.name = this.chukuData.name.split('+')[1];
      this.chukuService.updateChuku(chuku._id,this.chukuData)
        .subscribe((res) => {
             this.origins[this.origins.indexOf(chuku)] = res;
             this.chukus = this.origins;
             this.a = 0;
             for (let chuku of this.origins){
                this.a += chuku.price * chuku.number - ((chuku.kuaidi==="") ? 0 : parseInt(chuku.kuaidi));
             }
             this.applyFilter();
             this.toast.setMessage('Stock Out is edited successfully.', 'success');
        });
    }
  }

   updateForm(chuku){
       this.chukuData.text = chuku.text;
       this.chukuData.name = this.getItemPrice(chuku.name)+'+'+chuku.name;
       this.chukuData.price = chuku.price;
       this.chukuData.number = chuku.number;
       this.chukuData.kuaidi = chuku.kuaidi;
       this.chukuData.date = chuku.date;
       this.chukuData.user = chuku.user;
  }

  getItemPrice(name){
       for (let item of this.items){
         if (item.name == name){
           return item.price;
         }
       }
  }

}
