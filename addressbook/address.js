
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
    new Contact('Chandermani Arora', 'chandermani@technovert.com', '+91 7845120215', '01234058490', 'https://www.technovert.com', "Jubilee Hills"),
    new Contact('Sashi Pagadala', 'sashi@technovert.com', '+91 9875841236', '01234058490', 'https://www.technovert.com', "NilgiriHills"),
    new Contact('Praveen Battula', 'praveen@technovert.com', '+91 5268497502', '01234058490', 'https://www.technovert.com', " Mumbai"),
    new Contact('Vijay Yalamanchali', 'vijay@technovert.com', '+91 9292929292', '01234058490', 'https://www.technovert.com', "Thane")
    
);


window.onload = function(){
    var add = document.getElementById('addContact');
    
    
    var display = document.getElementById('display');
    var addbtn = document.getElementById('Add');
    var addbtn2 = document.getElementById('add');
    addbtn.addEventListener('click', addItem);
    addbtn2.addEventListener('click', displayform);
    let contact = new Contact(namee,email,mobile,landline,website,address);
    var deletebtn = document.getElementById('sel-delete');
if(deletebtn!=null){
deletebtn.addEventListener('click',(e) => {  
    deletefromlist(e.target.parentElement.parentElement);
document.getElementById('sel-contact').style.display='none';



});
}
    displayincontact1(contact);
    
   
    function displayform(){
        document.getElementById('sel-contact').style.display = 'none';
        var form = document.getElementById('addContact');
        document.getElementById('addContact2').style.display='none'

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

    Contacts.push(contact);
    
    displayincontact2(contact);

}
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
    div.id = params.id;

    // console.log(div.id);
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    div2.className='contact-list-name';
    div3.className='contact-list-email';
    div4.className='contact-list-mobile';

    div2.appendChild(document.createTextNode(params.namee.value));
    div3.appendChild(document.createTextNode(params.email.value));
    div4.appendChild(document.createTextNode(params.mobile.value));
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    contactlist.appendChild(div);
    div.addEventListener('click', () => {
        // 
        displayselContact1(params);
        
    });


}

function deleteContact(id){


        document.getElementById('sel-contact').style.display='none';
    
        Contacts = Contacts.filter((contact) => {
            return contact.id != id;
        });
        
        let contact = document.getElementById(id);
        // console.log(contact);
        if(contact!=null){        let parent = contact.parentElement;
            // console.log(parent);
        parent.removeChild(contact);
        }
    

}
function displayselContact(params)
{
    var form = document.getElementById('addContact');
    form.style.display="none";
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
    document.getElementById('sel-delete').addEventListener('click', (e) => {
    let id1 = document.getElementById('sel-id').value;
    // console.log(id1);

    deleteContact(id1);
    
    
    
});
    document.getElementById('sel-edit').addEventListener('click', (e) => {
    let id1 = document.getElementById('sel-id').value;
    document.getElementById('sel-contact').style.display = "none";
    document.getElementById('addContact2').style.display = "block";
    // console.log(id1);
    editcontact(id1);
});
   

}
function displayselContact1(params)
{


    var form = document.getElementById('addContact');
    form.style.display="none";
   document.getElementById('sel-contact').style.display = 'block';
   document.getElementById('sel-name').innerHTML = params.namee.value;
   document.getElementById('sel-email1').innerHTML = params.email.value;

   document.getElementById('sel-mobile1').innerHTML = params.mobile.value;
   document.getElementById('sel-landline1').innerHTML= params.landline.value;
   document.getElementById('sel-website1').innerHTML= params.website.value;
   document.getElementById('sel-address1').innerHTML= params.address.value;
   let id = document.getElementById('sel-id');
   id.value = params.id;
//    console.log(id)
   document.getElementById('sel-delete').addEventListener('click', (e) => {
    let id1 = document.getElementById('sel-id').value;
    // console.log(id1);
    deleteContact(id1);
    
});
// document.getElementById('sel-edit').addEventListener('click', (e) => {
//     let id1 = document.getElementById('sel-id').value;
//     // console.log(id1);
//     document.getElementById('sel-contact').style.display = "none";
//     document.getElementById('addContact2').style.display = "block";
//     editcontact(id1);
    
    
// });

}


function editcontact(id) {



    
    console.log('a');
    document.getElementById('update2').style.display='block';
    const  Name = document.getElementById('namee2');
    const Email = document.getElementById('email2');
    const Mobile = document.getElementById('mobile2');
    const Landline = document.getElementById('landline2');
    const Website = document.getElementById('website2');
    const Address = document.getElementById('address2');
    const Id = document.getElementById('addContact2');
    const SubmitBtn = document.getElementById('update2');

//  Name.onkeypress = (e) => e.key != "Enter";
//  Email.onkeypress = (e) => e.key != "Enter";
//  Mobile.onkeypress = (e) => e.key != "Enter";
//  Landline.onkeypress = (e) => e.key != "Enter";
//  Website.onkeypress = (e) => e.key != "Enter";


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
     
        // console.log(nameVal);
    Name.value = nameVal;
    Email.value = emailVal;
    Mobile.value = mobileVal;
    Landline.value = landlineVal;
    Website.value = websiteVal;
    Address.value = addressVal;
    Id.value = idVal;
    SubmitBtn.value = subButtonVal;

    

    SubmitBtn.addEventListener('click', e=> {
        
        var name = document.getElementById('namee2').value;
        var email = document.getElementById('email2').value;
        var mobile = document.getElementById('mobile2').value;
        var landline = document.getElementById('landline2').value;
        var website = document.getElementById('website2').value;
        var address = document.getElementById('address2').value;

        // console.log('a')
        for(var j=0;j<Contacts.length;j++)
        {
            if(Contacts[j].id==id)
            {

                console.log(id);
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
    var el = document.getElementById('cdisplay').children;
    var name1 = document.getElementsByClassName('contact-list-name');
    // el[id].classList;

    // console.log(id);
    var child = el[id].children;
   child[0].innerHTML = name;
   child[1].innerHTML = email;
   child[2].innerHTML = mobile;
   document.getElementById('addContact2').style.display = "none";


    });

    Contact.id--;

    // document.getElementById('add').addEventListener('click', addItem);

   
}
}






