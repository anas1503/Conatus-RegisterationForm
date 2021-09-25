export default function validation(data){

let errors ={};

if(!data.Name.trim()){
    errors.Name="Full Name Required";
}

if(!data.RollNo){
    errors.RollNo=" RollNo Required";
} else if (!data.RollNo.length) {
    errors.RollNo = "RollNo Required";
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
    errors.PhoneNo = " Phone Number Required";
} else if(data.PhoneNo.length !== 10){
    errors.PhoneNo = "phone Number should be of 10 digits"
}

if(!data.hackerrank){
    errors.hackerrank="  Hackerrank handle Required";
}

if(!data.Skills){
    errors.Skills=" Skills Required";
}

if(!data.Residence) {
    errors.Residence = "Select your Residence  ";
}

return errors;

}