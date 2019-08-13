
function errorMessages(){


}
function messages(){
  document.get
  

}

function validateForm()
{

  var f=false;
  // for validating full name  
          var name = document.getElementById("fname").value;
          if (name == ""  ) 
          {
              document.getElementById("nameErr").innerHTML = " * Please Fill Your Full Name";
             f ++;
          }
          else{
                document.getElementById("nameErr").innerHTML = "";
                
                }

                
                
 
// for validating emailid 
          var emailid = document.getElementById("email").value;
          if (emailid == "") 
          {
            document.getElementById("emailErr").innerHTML = " * Please Fill Your Email";
            f ++;
          }
          else{
                  document.getElementById("emailErr").innerHTML = "";
                  
              }


// for validating mobile no.
          var mob = document.getElementById("mobile").value;

          if (mob == "" || mob.length != 10 || isNaN[mob]) 
          {
                document.getElementById("mobileErr").innerHTML = " * Please Fill Your Mobile No. correctly";
                f++;  
              }
            else{
                    document.getElementById("mobileErr").innerHTML = "";
                    
                   
                }        
            
// for validating D.O.B
          var dob = document.getElementById("dob").value;
          
            if(dob == "")
            {
                document.getElementById("dobErr").innerHTML = " * Please Fill Your Date of Birth";
                f ++;
              }
              else{
                      document.getElementById("dobErr").innerHTML = "";
                      
                      
                    }

// for validating Address field 1  

          var address1 = document.getElementById("addr1").value;
          if (address1 == "") 
          {

              document.getElementById("addr1Err").innerHTML = " * Please Fill Your Address field correctly";
              f ++;
          }
            else{
                    document.getElementById("addr1Err").innerHTML = "";
                    
                    
                }

// for validating city

            var city = document.getElementById("city").value;
            if ( city == "Select City")
              {
                  document.getElementById("cityErr").innerHTML = " * Please Select Your City ";
                  f ++;
              }else{
                        document.getElementById("cityErr").innerHTML = "";
                        
                        
                    }
// for validating state
            var state = document.getElementById("state").value;
            if ( state == "Select State")
              {
                    document.getElementById("stateErr").innerHTML = " * Please Select Your State ";
                    f ++;
              }else{
                      document.getElementById("stateErr").innerHTML = "";
                      
                      
                    }
// for validating country
            var country = document.getElementById("country").value;
            if ( country == "Select Country")
            {
                  document.getElementById("countryErr").innerHTML = " * Please Select Your Country ";
                  f ++;
              }else{
                      document.getElementById("countryErr").innerHTML = "";
                      
                      
                    }

// for validating Gender
            var gen = document.forms["RegForm"]["Gender"].value;
            if (gen == "")
            {
                document.getElementById("genderErr").innerHTML = " * Please Select Your Gender";
                f ++;
            }else{
                      document.getElementById("genderErr").innerHTML = "";
                     
                     
  // only to get f counter value                }
                        alert(f +" Errors");


                  if(f > 0){
                      return  f= false;
                      
                  }else  {
                    return f= true;
                  
                  }
                  
                
 
                    

}



function resetForm(){

  var reset = document.getElementsByClassName("error")
  for (var i=0;i< reset.length;i++)
  {
    reset[i].innerHTML = "";
  }

}

