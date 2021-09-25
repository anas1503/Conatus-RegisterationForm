export default function validation(data){

let errors ={};

if(!data.Name.trim()){
    errors.Name="Enter Full Name";
}

if(!data.RollNo){
    errors.RollNo="Enter UnivRollNo";
} else if (data.RollNo.length !== 13) {
    errors.RollNo = "Invalid UnivRollNo";
} else if (!/^\d+$/.test(data.RollNo)){
    errors.RollNo = "Enter Numbers Only";
}

if(!data.Branch){
    errors.Branch = "Select your Branch";
}

if(!data.Email)
{
    errors.Email = "Email required";
}
     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.Email)) {
       errors.Email = "Email address is invalid";
      }


if(!data.PhoneNo){
    errors.PhoneNo = "Enter Phone Number";
} else if(!data.PhoneNo.length !== 10){
    errors.PhoneNo = "phone Number should be of 10 digits"
}

if(!data.Skills){
    errors.Skills="Enter Skills";
}

if(!data.Residence) {
    errors.Residence = "Enter Residence";
}

return errors;

}