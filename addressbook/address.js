
class Contact {
    static id = 0;
    constructor(namee, email, mobile, landline, website, address) {
        this.id = Contact.id++;
        this.namee = namee;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
    }
}


var Contacts = new Array(
    new Contact('Chandermani Arora', 'chandermani@technovert.com', '7845120215', '01234058490', 'https://www.technovert.com', "Jubilee Hills"),
    new Contact('Sashi Pagadala', 'sashi@technovert.com', '9875841236', '01234058490', 'https://www.technovert.com', "NilgiriHills"),
    new Contact('Praveen Battula', 'praveen@technovert.com', '5268497502', '01234058490', 'https://www.technovert.com', " Mumbai"),
    new Contact('Vijay Yalamanchali', 'vijay@technovert.com', '9292929292', '01234058490', 'https://www.technovert.com', "Thane")
    
);


window.onload = function(){
    var add = document.getElementById('addContact');
    
    var x = document.getElementById('sel-edit');
    x.addEventListener('click',edit);
    var display = document.getElementById('display');
    var addbtn = document.getElementById('Add');
    var addbtn2 = document.getElementById('add');
    addbtn.addEventListener('click', addItem);
    addbtn2.addEventListener('click', displayform);
    let contact = new Contact(namee,email,mobile,landline,website,address);
    var deletebtn = document.getElementById('sel-delete');
if(deletebtn!=null){
deletebtn.addEventListener('click',(e) => {  
  
document.getElementById('sel-contact').style.display='none';



});
document.getElementById('sel-delete').addEventListener('click', (e) => {
    let id1 = document.getElementById('sel-id').value;
    // console.log(id1);

    deleteContact(id1);
    
    
    
});
}
    displayincontact1(contact);
    
   
    function displayform(){
        document.getElementById('sel-contact').style.display = 'none';
        var form = document.getElementById('addContact');
        var form1 = document.getElementById('addContact2');
    form1.style.display="none";
       
document.getElementById('namee').value='';
document.getElementById('mobile').value='';
document.getElementById('landline').value='';
document.getElementById('website').value='';
document.getElementById('address').value='';
document.getElementById('email').value='';

        form.style.display="block";
        

    }

    
    
function addItem(e)
{
    e.preventDefault();
    var name = document.getElementById('namee').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var landline = document.getElementById('landline').value;
    var website = document.getElementById('website').value;
    var address = document.getElementById('address').value;


    
    if(!validation(name,email,mobile,landline,website,address))
    {
       document.getElementById('namee').value='';
       document.getElementById('email').value='';
       document.getElementById('mobile').value='';
       document.getElementById('landline').value='';
       document.getElementById('website').value='';
       document.getElementById('address').value='';

    }
    else{

    var contact = new Contact(name,email,mobile,landline,website,address);

    Contacts.push(contact);
    
    
    displayincontact2(contact);
    }

}
}
function validation(name,email,mobile,landline,website,address)
{
    var t = true;
    if(name=='' || name==null)
    {
        alert('Name cant be blank');
        t=false;
    }
    var validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email.match(validRegex)) {
  console.log('Hi');
    }
    else{
        alert('Email is not valid');
        t=false;
    }

    var phoneno = /^\d{10}$/;
    if(mobile.match(phoneno))
    {
        console.log('a');
       
    }
    else{
        alert('Mobile is not valid');
        t=false;
    }
    if(address=='' || address==null)
    {
        alert('Address cant be blank');
        t=false;
    }
   return t;
}



function displayincontact1(params)
{
    
    Contacts.forEach((contact) => {
    var div = document.createElement('div');
    var contactlist = document.getElementById('cdisplay');
    div.className='contact-card';
    div.id = contact.id;
    // console.log(div.id);
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    div2.className='contact-list-name';
    div3.className='contact-list-email';
    div4.className='contact-list-mobile';

    div2.appendChild(document.createTextNode(contact.namee));
    div3.appendChild(document.createTextNode(contact.email));
    div4.appendChild(document.createTextNode(contact.mobile));
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    contactlist.appendChild(div);
    div.addEventListener('click', () => {
        // selContact(div.id);
        displayselContact(contact);
        
    });
});

}


function displayincontact2(params)
{   
   
    var div = document.createElement('div');
    var contactlist = document.getElementById('cdisplay');
    div.className='contact-card';
    div.id = params.id--;

    // console.log(div.id);
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    div2.className='contact-list-name';
    div3.className='contact-list-email';
    div4.className='contact-list-mobile';

    div2.appendChild(document.createTextNode(params.namee));
    div3.appendChild(document.createTextNode(params.email));
    div4.appendChild(document.createTextNode(params.mobile));
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    contactlist.appendChild(div);
    console.log(Contacts);
    div.addEventListener('click', () => {
        // 
        displayselContact1(params);
        
    });


}

function deleteContact(id){

        console.log(id);
        document.getElementById('sel-contact').style.display='none';
        let contactss2 = document.getElementById(id);
    
        Contacts = Contacts.filter((contactss2) => {
            return contactss2.id != id;
        });
        
      
        
              
            parent = document.getElementById('cdisplay')
            con = document.getElementById('cdisplay').children;
            console.log(con[id]);
        
            con[id].style.display='none';
    

}
function displayselContact(params)
{
    var form = document.getElementById('addContact');
    form.style.display="none";
    var form1 = document.getElementById('addContact2');
    form1.style.display="none";
   document.getElementById('sel-contact').style.display = 'block';
   document.getElementById('sel-name').innerHTML = params.namee;
   document.getElementById('sel-email1').innerHTML = params.email;

   document.getElementById('sel-mobile1').innerHTML = params.mobile;
   document.getElementById('sel-landline1').innerHTML= params.landline;
   document.getElementById('sel-website1').innerHTML= params.website;
   document.getElementById('sel-address1').innerHTML= params.address;
   const id = document.getElementById('sel-id');
   id.value = params.id;
//    console.log(id);
   
    
   

}
function displayselContact1(params)
{


    var form = document.getElementById('addContact');
    form.style.display="none";
    var form1 = document.getElementById('addContact2');
    form1.style.display="none";
   document.getElementById('sel-contact').style.display = 'block';
   document.getElementById('sel-name').innerHTML = params.namee;
   document.getElementById('sel-email1').innerHTML = params.email;

   document.getElementById('sel-mobile1').innerHTML = params.mobile;
   document.getElementById('sel-landline1').innerHTML= params.landline;
   document.getElementById('sel-website1').innerHTML= params.website;
   document.getElementById('sel-address1').innerHTML= params.address;
   let id = document.getElementById('sel-id');
   id.value = params.id;
//    console.log(id)
   document.getElementById('sel-delete').addEventListener('click', (e) => {
    let id1 = document.getElementById('sel-id').value;
    console.log(id1);
    deleteContact(id1);
    
});



}


function editcontact(id) {



    
    // console.log('a');
    
    document.getElementById('update2').style.display='block';
    let  Name = document.getElementById('namee2');
    let Email = document.getElementById('email2');
    let Mobile = document.getElementById('mobile2');
    let Landline = document.getElementById('landline2');
    let Website = document.getElementById('website2');
    let Address = document.getElementById('address2');
    let Id = document.getElementById('addContact2');
    let SubmitBtn = document.getElementById('update2');


    


    let nameVal = '';
    let emailVal = '';
    let websiteVal = '';
    let mobileVal = '';
    let landlineVal = '';
    let addressVal = '';
    let idVal = '';
    let subButtonVal = 'Add';
    var i;
    if (id != undefined) {
        for ( i = 0; i < Contacts.length; i++) {
            
            if (Contacts[i].id == id) {
                // console.log(id);
                nameVal = Contacts[i].namee;
                emailVal = Contacts[i].email;
                websiteVal = Contacts[i].website;
                mobileVal = Contacts[i].mobile;
                landlineVal = Contacts[i].landline;
                addressVal = Contacts[i].address;
                idVal = Contacts[i].id;
                subButtonVal = 'Update';
                break;
            }
        }
    }
     
        // console.log(nameVal);
       
    Name.value = nameVal;
    Email.value = emailVal;
    Mobile.value = mobileVal;
    Landline.value = landlineVal;
    Website.value = websiteVal;
    Address.value = addressVal;
    Id.value = idVal;
    
    // console.log(Name.value);
    

        document.getElementById("update2").onclick = function() {x(id)};

    // SubmitBtn.addEventListener('click', x(id,name,email,mobile,landline,website,address));
}
    
    
    
function x(id){

    document.getElementById('addContact2').style.display = "none";

    var name = document.getElementById('namee2').value;
        var email = document.getElementById('email2').value;
        var mobile = document.getElementById('mobile2').value;
        var landline = document.getElementById('landline2').value;
        var website = document.getElementById('website2').value;
        var address = document.getElementById('address2').value;
        if(!validation(name,email,mobile,landline,website,address))
        {
            document.getElementById('namee2').value='';
           document.getElementById('email2').value='';
           document.getElementById('mobile2').value='';
           document.getElementById('landline2').value='';
           document.getElementById('website2').value='';
           document.getElementById('address2').value='';
        }
        else{
        console.log(name);
        console.log(id);
        for(var j=0;j<Contacts.length;j++)
        {
            if(Contacts[j].id==id)
            {

                console.log(id);
                console.log(Contacts)
                Contacts[j].namee = name;
                Contacts[j].email = email;
                Contacts[j].mobile = mobile;
                Contacts[j].landline = landline;
                Contacts[j].website = website;
                Contacts[j].address = address;
                break;
                
            }
        }
    //  console.log(Contacts);
     
    
    if(document.getElementById('cdisplay').children!=null)
    {
        
    var el = document.getElementById('cdisplay').children;
    var name1 = document.getElementsByClassName('contact-list-name');
    // el[id].classList;

    console.log(id);
    console.log(el[id]);
    if(el[id].children!=undefined){
   var child = el[id].children;
   console.log(child);
   child[0].innerHTML = name;
   child[1].innerHTML = email;
   child[2].innerHTML = mobile;
    }
}
}


//   
//    
   return;

   

    

    // document.getElementById('add').addEventListener('click', addItem);

   
}

function edit()
{
    
     

    
    let id1 = document.getElementById('sel-id').value;
    
    document.getElementById('sel-contact').style.display = "none";
    document.getElementById('addContact2').style.display = "block";
    // console.log(id1);
    var x = editcontact(id1);
   


}







