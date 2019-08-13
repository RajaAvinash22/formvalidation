function validateForm()
{
   // counter initialise
      var f=false;
  // for validating full name  
          var name = document.getElementById("fname").value;
          if (name == ""  ) 
          {
              errMessage("nameErr"," * Please Fill Your Full Name");
             f ++;
          }
          else{
                errMessage("nameErr","");
                }
  
// for validating emailid 
          var emailid = document.getElementById("email").value;
          if (emailid == "") 
          {
            errMessage("emailErr"," * Please Fill Your Email");
            f ++;
          }
          else{
                  errMessage("emailErr", "");
          }

// for validating mobile no.
          var mob = document.getElementById("mobile").value;

          if (mob == "" || mob.length != 10 || isNaN[mob]) 
          {
                errMessage("mobileErr"," * Please Fill Your Mobile No. correctly");
                f++;  
              }
            else{
                    errMessage("mobileErr", "");
                }        
            
// for validating D.O.B
          var dob = document.getElementById("dob").value;
          
            if(dob == "")
            {
                errMessage("dobErr"," * Please Fill Your Date of Birth");
                f ++;
              }
              else{
                      errMessage("dobErr", "");   
                    }

// for validating Address field 1  
          var address1 = document.getElementById("addr1").value;
          if (address1 == "") 
          {
              errMessage("addr1Err"," * Please Fill Your Address field correctly");
              f ++;
          }
            else{
                    errMessage("addr1Err", ""); 
                }

// for validating city
            var city = document.getElementById("city").value;
            if ( city == "Select City")
              {
                  errMessage("cityErr"," * Please Select Your City ");
                  f ++;
              }else{
                        errMessage("cityErr","");    
                    }
  
// for validating state
            var state = document.getElementById("state").value;
            if ( state == "Select State")
              {
                    errMessage("stateErr"," * Please Select Your State ");
                    f ++;
              }else{
                      errMessage("stateErr","");
                    }
  
// for validating country
            var country = document.getElementById("country").value;
            if ( country == "Select Country")
            {
                  errMessage("countryErr"," * Please Select Your Country ");
                  f ++;
              }else{
                      errMessage("countryErr","");   
                    }

// for validating Gender
            var gen = document.forms["RegForm"]["Gender"].value;
            if (gen == "")
            {
                errMessage("genderErr"," * Please Select Your Gender");
                f ++;
            }else{
                      errMessage("genderErr","");
                 }
                     
             //Checking counter conditions
                  if(f > 0){
                      return  f= false;
                      
                  }else  {
                    return f= true;
                  
                  }             
}
 // for printing errors.
             function errMessage(id , msg)
               {
                  document.getElementById(id).innerHTML = msg;
                }

// reset button code
function resetForm()
{
  var reset = document.getElementsByClassName("error")
  for (var i=0;i< reset.length;i++)
  {
    reset[i].innerHTML = "";
  }

}
