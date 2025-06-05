import { resolve } from 'node:path';
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserNameValidators{
    static cannotConatinSpace(control:AbstractControl):ValidationErrors|null{
        if((control.value as string).indexOf(' ')>=0)
            return {cannotConatinSpace:true}
        return null;
    }

    static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            if(control.value=="Mosh")
                resolve({shouldBeUnique:true})
            else
                resolve(null);
        },500)
        })
    }
}