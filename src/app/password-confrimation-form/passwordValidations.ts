import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";
import { group } from "console";

export class passwordValidator{
    static oldPassword(control:AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            if(control.value !="1234")
                resolve({oldPassword:true})
            else
                resolve(null);
        },500)
        })
    }
    static passwordMatch(newPassword:string,confrimPassword:string):ValidatorFn{
        return (control:AbstractControl):ValidationErrors|null=>{
            const newpass = control.get(newPassword)?.value;
            const confrimpass = control.get(confrimPassword)?.value;
            if(newpass !== confrimpass)
                return {passwordMismatch : true}
            return null;
        }
    }
}