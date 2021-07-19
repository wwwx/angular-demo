import { AbstractControl } from '@angular/forms';

export class ValidatePassword {
    static MatchPassword = (abstractControl: AbstractControl) => {
        const password = abstractControl.get('password')?.value;
        if (!password.startsWith('Nwd')) {
            return abstractControl.setErrors({
                MatchPassword: true
            });
        }
        return null;
    };
}
