
import { emailErrorMessage, inputFieldErrorMessage, newConfirmPasswordErrorMessage, newPasswordErrorMessage, privacyPolicyErrorMessage, nameErrorMessage, postCodeErrorMessage, addressErrorMessage, nationalityErrorMessage,  passwordIsRequiredErrorMessage, emailIsRequiredErrorMessage,descriptionErrorMessage, titleIsRequiredErrorMessage, contactNumberErrorMessage, locationErrorMessage, countryErrorMessage } from "@/utilities/validationMsg";

  export function isNameValid(name: string) {
    if (name.trim().length === 0) {
        return { isValid: false, message: nameErrorMessage.empty };
    }
    
    if (name.length < 2) {
        return { isValid: false, message: nameErrorMessage.tooShort };
    }

    if (name.length > 50) {
        return { isValid: false, message: nameErrorMessage.tooLong };
    }

    const namePattern = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
    if (!namePattern.test(name)) {
        return { isValid: false, message: nameErrorMessage.invalidCharacters };
    }

    const words = name.split(' ');
    for (const word of words) {
        if (word.length > 0 && word[0] !== word[0].toUpperCase()) {
            return { isValid: false, message: nameErrorMessage.improperCapitalization };
        }
    }

    return { isValid: true, message: '' };
}


  export function isEmailValid(email : string) {
   
    if(email.length == 0){
      return { isValid: false, message: emailIsRequiredErrorMessage };

    }else{
    if(isValidEmail(email)){
        return { isValid: true, message: '' };
    }else{

        return { isValid: false, message: emailErrorMessage };
    }
  }
  }
  
  export function isValidEmail(email : string) {
    return /\S+@\S+\.\S+/.test(email);
  }


    export function isPasswordValid(password : string) {
      if(password.length != 0 ){
          return { isValid: true, message: '' };
  
      }else{
          return { isValid: false, message: passwordIsRequiredErrorMessage };
      }
    }

    export function isContactNumberValid(contactNumber: string) {
      if (contactNumber.trim().length === 0) {
          return { isValid: false, message: contactNumberErrorMessage.empty };
      }
      
      if (!/^\d+$/.test(contactNumber)) {
          return { isValid: false, message: contactNumberErrorMessage.invalidCharacters };
      }
  
      if (contactNumber.length < 7 || contactNumber.length > 15) {
          return { isValid: false, message: contactNumberErrorMessage.invalidLength };
      }
  
      return { isValid: true, message: '' };
  }

    export function isDescriptionValid(name : string) {
      if(name.length != 0){
          return { isValid: true, message: '' };
  
      }else{
          return { isValid: false, message: descriptionErrorMessage };
      }
    }

    export function isNewPasswordValid(password : string) {
      if(password.length == 0){
        return { isValid: false, message: passwordIsRequiredErrorMessage }; 
      }else{
      if(isValidPassword(password)){
          return { isValid: true, message: '' };
  
      }else{
          return { isValid: false, message: newPasswordErrorMessage };
      }
    }
    }
 
    export function isValidPassword(password : string) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|\W).{9,}$/.test(password);
      }
  

      export function isConfirmPasswordValid(password : string, confirmPassword : string) {
        if(confirmPassword.length == 0){
          return { isValid: false, message: passwordIsRequiredErrorMessage }; 
        }else{
          if(password === confirmPassword){
            return { isValid: true, message: '' };    
        }else{
            return { isValid: false, message: newConfirmPasswordErrorMessage };
        }
        }
        
      }


      export function isPrivacyPolicyValid(policy : string) {
        if(policy){
            return { isValid: true, message: '' };
    
        }else{
            return { isValid: false, message: privacyPolicyErrorMessage };
        }
      }


      export function isInputValid(inputValue : string) {
        if(inputValue.length != 0){
            return { isValid: true, message: '' };
    
        }else{
            return { isValid: false, message: inputFieldErrorMessage };
        }
      }



    export function isTitleValid(title : string) {
        if(title.length != 0){
            return { isValid: true, message: '' };
    
        }else{
            return { isValid: false, message: titleIsRequiredErrorMessage };
        }
      }


      export function isPostCodeValid(code : string) {
        if(code.length != 0){
            return { isValid: true, message: '' };
    
        }else{
            return { isValid: false, message: postCodeErrorMessage };
        }
      }

      export function isAddressValid(address : string) {
        if(address.length != 0){
            return { isValid: true, message: '' };
    
        }else{
            return { isValid: false, message: addressErrorMessage };
        }
      }     

      export function isNationalityValid(nationality : string) {
        if(nationality.length != 0){
            return { isValid: true, message: '' };
        }else{
            return { isValid: false, message: nationalityErrorMessage };
        }
      }

       


        export function isLocationValid(location : string) {
          if (location.length != 0) {
            return { isValid: true, message: '' };
          } else {
            return { isValid: false, message: locationErrorMessage };
          }
        }



        export function isCountryValid(country: string) { 
          if (country.length != 0) {
             return { isValid: true, message: '' }; 
            } else { 
              return { isValid: false, message: countryErrorMessage };
             } 
            }

      



  