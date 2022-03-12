import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
        return null;
    }

    return /^[a-zA-Z0-9\.-]{4,}@gmail\.(bg|com)$/.test(control.value) ? null : {
        invalidEmail: true
    };
}

export function  missMatch(pas: string, rePass: string) {
     
    return (f: FormGroup) => {
    //  console.log('f');
     // const p1 = f.controls[pas];
     // const p2 = f.controls[rePass];
     // if (p1 !== p2) {
     //   p2.setErrors({ notMatched: true });
     // } else {
     //   p2.setErrors(null);

     // }
    return f.controls[pas].value === f.controls[rePass].value ? f.controls[rePass].setErrors( null ) 
    : f.controls[rePass].setErrors({ notMatched: true });
   }  
  }