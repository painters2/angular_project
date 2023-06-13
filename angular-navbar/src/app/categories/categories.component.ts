import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


interface ICategory {
  categoryId: Number | 0,
  title: string | null,
  icon: string | null,
  type: string | null
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {

  addCategoryForm = this.formBuilder.group({
    title: null,
    icon: null,
    type: null
  });

  category: Array<ICategory> = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "food",
    //   icon: "lunch_dining",
    //   type: "income"
    // })
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "petrol",
    //   icon: "motorcycle",
    //   type: "expense"
    // })
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "recharge",
    //   icon: "gps_fixed",
    //   type: "income"
    // })
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "rent",
    //   icon: "roofing",
    //   type: "expense"
    // })
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "food",
    //   icon: "lunch_dining",
    //   type: "income"
    // })
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "tickets",
    //   icon: "airplane_ticket",
    //   type: "expense"
    // })
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "movie",
    //   icon: "movie",
    //   type: "income"
    // })
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "books",
    //   icon: "library_books",
    //   type: "expense"
    // })
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "shopping",
    //   icon: "shopping_basket",
    //   type: "income"
    // })
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "tour",
    //   icon: "tour",
    //   type: "expense"
    // })
    // this.transactions.push({
    //   categoryId: this.transactions.length + 1,
    //   title: "gifts",
    //   icon: "card_giftcard",
    //   type: "income"
    // })

  }

  onSubmit(): void {

    this.category.push({
      categoryId: this.category.length + 1,
      title: this.addCategoryForm.value.title || "",
      icon: this.addCategoryForm.value.icon || "",
      type: this.addCategoryForm.value.type || ""
    })
    console.warn('Your order has been submitted', this.addCategoryForm.value);
    this.addCategoryForm.reset();
  }

}
