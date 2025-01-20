import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent {
  @Input() title!: string;

  @Input() isRegister!: boolean;

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService
  ) {}

  onSubmit() {
    if (!this.myForm.valid) {
      console.log('invalido');
      console.log(this.myForm.errors);
      this.myForm.markAllAsTouched();
      return;
    }

    console.log('valido');
    console.log(this.myForm.value);
  }

  isValidField(field: string): boolean | null {
    return this.validatorService.isValidField(field, this.myForm);
  }
}
