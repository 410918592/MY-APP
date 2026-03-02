import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})

export class UserFormComponent {

  // =====================
  // FormGroup 定義
  // =====================
  userForm = new FormGroup({

    username: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true
    }),

    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    }),

    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      nonNullable: true
    })

  });

  // =====================
  // 取得 controls
  // =====================
  get controls() {
    return this.userForm.controls;
  }

  // =====================
  // 狀態示範
  // =====================
  logFormStatus() {
    console.log('===== FORM STATUS =====');

    // 🔹 value
    console.log('value:', this.userForm.value);

    // 🔹 valid / invalid
    console.log('valid:', this.userForm.valid);
    console.log('invalid:', this.userForm.invalid);

    // 🔹 dirty / pristine
    console.log('dirty:', this.userForm.dirty);
    console.log('pristine:', this.userForm.pristine);

    // 🔹 touched / untouched
    console.log('touched:', this.userForm.touched);
    console.log('untouched:', this.userForm.untouched);

    // 🔹 pending（通常用在 async validator）
    console.log('pending:', this.userForm.pending);

    // =====================
    // 單一 control 狀態
    // =====================
    console.log('username dirty:', this.controls.username.dirty);
    console.log('username touched:', this.controls.username.touched);
    console.log('username valid:', this.controls.username.valid);
  }

  submit() {
    if (this.userForm.invalid) {
      console.log('❌ 表單不合法');
      return;
    }

    console.log('✅ 送出資料', this.userForm.value);
  }
}