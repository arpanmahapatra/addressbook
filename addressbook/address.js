
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
var id=4;

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
    let contact = new Contact(name,email,mobile,landline,website,address);
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
    id++;
    displayincontact2(contact);

}
}

function deletefromlist(params){

}





function displayincontact1(params)
{
    
    Contacts.forEach((contact) => {
    var div = document.createElement('div');
    var contactlist = document.getElementById('cdisplay');
    div.className='contact-card';
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


}






