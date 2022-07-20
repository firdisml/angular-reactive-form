import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control : AbstractControl) : ValidationErrors | null {
        if((control.value as String).indexOf(' ') >= 0)
        {
            return { cannotContainSpace : true }
        }
        else
        {

            return null
        }
    }


    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {

        return new Promise((resolve,reject) => {

            setTimeout(() => {


                if(control.value === "daus"){
    
                    resolve({ shouldBeUnique : true }) 
        
                }
    
                else
    
                {
        
                    resolve(null)
        
                }
    
    
            }, 2000)

            
        });

    }
}