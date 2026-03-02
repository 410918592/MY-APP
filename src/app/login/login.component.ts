import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  // 🔹 使用 inject 取得 FormBuilder
  private fb = inject(FormBuilder);

  // 🔹 建立登入表單
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  // 🔹 表單送出時執行
  onSubmit() {
    console.log('表單狀態:', this.loginForm.status);
    console.log('表單內容:', this.loginForm.value);

    if (this.loginForm.valid) {
      console.log('登入成功（目前是假登入）');
    } else {
      console.log('表單無效');
    }
  }
}