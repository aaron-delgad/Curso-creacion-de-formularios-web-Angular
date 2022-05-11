import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { CategoryService } from 'src/app/shared/service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'form-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly categoryService: CategoryService,
              private readonly router: Router) { this.buildForm(); }

  ngOnInit(): void {  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get imageField() {
    return this.form.get('image');
  }

  save() {
    if(this.form.valid){
      this.createCategory();
    }else{
      this.form.markAllAsTouched();
    }
  }

  private createCategory() {
    this.categoryService.createCategory(this.form.value).subscribe(resp =>{
      this.router.navigate(['./admin'])
    });
  }
}
