class Contact {
  static id = 0;constructor(namee, email, mobile, landline, website, address) {
    this.id = Contact.id++;
    this.namee = namee;
    this.email = email;
    this.mobile = mobile;
    this.landline = landline;
    this.website = website;
    this.address = address;}}
var Contacts = new Array(
    new Contact('Chandermani Arora', 'chandermani@technovert.com', '7845120215', '01234058490', 'https://www.technovert.com', "Jubilee Hills"),
    new Contact('Sashi Pagadala', 'sashi@technovert.com', '9875841236', '01234058490', 'https://www.technovert.com', "NilgiriHills"),
    new Contact('Praveen Battula', 'praveen@technovert.com', '5268497502', '01234058490', 'https://www.technovert.com', " Mumbai"),
    new Contact('Vijay Yalamanchali', 'vijay@technovert.com', '9292929292', '01234058490', 'https://www.technovert.com', "Thane")    );
window.onload = function () {
  var home = document.getElementById("home");
  home.addEventListener("click", (e) => {
    document.getElementById("addContact").style.display = "none";
    document.getElementById("sel-contact").style.display = "none";});
  var x = document.getElementById("sel-edit");
  x.addEventListener("click", edit);
  var addbtn = document.getElementById("Add");
  var addbtn2 = document.getElementById("add");
  addbtn.addEventListener("click", addItem);
  addbtn2.addEventListener("click", displayform);
  let contact = new Contact(namee, email, mobile, landline, website, address);
  var deletebtn = document.getElementById("sel-delete");
  if (deletebtn != null) {
    deletebtn.addEventListener("click", (e) => {
      document.getElementById("sel-contact").style.display = "none";});
    document.getElementById("sel-delete").addEventListener("click", (e) => {
      let id1 = document.getElementById("sel-id").value;
      deleteContact(id1);});}
  displayincontact1(contact);
  function displayform() {error();
    document.getElementById("update2").style.display = "none";
    document.getElementById("Add").style.display = "block";
    document.getElementById("sel-contact").style.display = "none";
    var form = document.getElementById("addContact");
    document.getElementById('addContact').reset();
    form.style.display = "block";}
  function addItem(e) {
    e.preventDefault();
    var name = document.getElementById("namee").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var landline = document.getElementById("landline").value;
    var website = document.getElementById("website").value;
    var address = document.getElementById("address").value;
    if (validation(name, email, mobile, landline, website, address, 1)) {
        var contact = new Contact(name,email,mobile,landline,website,address);
      Contacts.push(contact);
      document.getElementById("addContact").style.display = "none";
      displayincontact2(contact);}}};
function validation(name, email, mobile, landline, website, address, x) {
    var t = true;error();
    if (name == "" || name == null) {
      document.getElementById("name_error").innerHTML ="Name cannot be left as blank";
      t = false; }
    var validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email.match(validRegex));else if (email == "" || email == null) {
      document.getElementById("email_error").innerHTML = "Email cannot be left as blank";
      t = false;} else {
      document.getElementById("email_error").innerHTML ="Please enter valid email";
      t = false;}
    var phoneno = /^\d{10}$/;
    if (mobile.match(phoneno));else if (mobile == "" || mobile == null) {
      document.getElementById("mobile_error").innerHTML ="Mobile number cannot be left as blank";
      t = false;} else {
      document.getElementById("mobile_error").innerHTML ="Please enter valid mobile number";
      t = false;}
    var landl = /^\d{10}$/;
    if (landline.match(landl));else if (landline == "" || landline == null) {
      document.getElementById("landline_error").innerHTML ="Landline cannot be left as blank";
      t = false;} else {
      document.getElementById("landline_error").innerHTML ="Please enter valid Landline number";
      t = false;}
    var web = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (website.match(web)); else if (website == "" || website == null) {
      document.getElementById("website_error").innerHTML ="Website cannot be left as blank";
      t = false;} else {
      document.getElementById("website_error").innerHTML ="Please enter valid website url";
      t = false;}
    if (address == "" || address == null) {
      document.getElementById("address_error").innerHTML ="Address cannot be left as blank";
      t = false;}return t;}
function displayincontact1(params) {
  Contacts.forEach((contact) => {
    displayContactList(contact);});}
function displayContactList(contact) {
  var div = document.createElement("div");
  var contactlist = document.getElementById("cdisplay");
  div.className = "contact-card";
  div.id = contact.id;
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");
  div2.className = "contact-list-name";
  div3.className = "contact-list-email";
  div4.className = "contact-list-mobile";
  div2.appendChild(document.createTextNode(contact.namee));
  div3.appendChild(document.createTextNode(contact.email));
  div4.appendChild(document.createTextNode(contact.mobile));
  div.appendChild(div2);
  div.appendChild(div3);
  div.appendChild(div4);
  contactlist.appendChild(div);
  div.addEventListener("click", () => {
    displayselContact1(contact);});}
function displayincontact2(contact) {
  displayContactList(contact);}
function deleteContact(id) {
  document.getElementById("sel-contact").style.display = "none";
  Contacts = Contacts.filter((contactss2) => {
    return contactss2.id != id;});
  parent = document.getElementById("cdisplay");
  con = document.getElementById("cdisplay").children;
  con[id].style.display = "none";}
function displayselContact1(params) {
  var form = document.getElementById("addContact");
  form.style.display = "none";
  document.getElementById("sel-contact").style.display = "block";
  document.getElementById("sel-name").innerHTML = params.namee;
  document.getElementById("sel-email1").innerHTML = params.email;
  document.getElementById("sel-mobile1").innerHTML = params.mobile;
  document.getElementById("sel-landline1").innerHTML = params.landline;
  document.getElementById("sel-website1").innerHTML = params.website;
  document.getElementById("sel-address1").innerHTML = params.address;
  let id = document.getElementById("sel-id");
  id.value = params.id;
  document.getElementById("sel-delete").addEventListener("click", (e) => {
    let id1 = document.getElementById("sel-id").value;
    deleteContact(id1);});}
function editcontact(contact) {
  document.getElementById("update2").style.display = "block";
  document.getElementById("Add").style.display = "none";
  let Name = document.getElementById("namee");
  let Email = document.getElementById("email");
  let Mobile = document.getElementById("mobile");
  let Landline = document.getElementById("landline");
  let Website = document.getElementById("website");
  let Address = document.getElementById("address");
  error();
  Name.value = contact.namee;
  Email.value = contact.email;
  Mobile.value = contact.mobile;
  Landline.value = contact.landline;
  Website.value = contact.website;
  Address.value = contact.address;
  document.getElementById("update2").addEventListener('click',e =>{  e.preventDefault(); x(contact)});}
function x(contact) {
  var name = document.getElementById("namee").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var landline = document.getElementById("landline").value;
  var website = document.getElementById("website").value;
  var address = document.getElementById("address").value;
  if (validation(name, email, mobile, landline, website, address, 1)) {
    document.getElementById("addContact").style.display = "none";
    contact.namee = name;
    contact.email = email;
    contact.mobile = mobile;
    contact.landline = landline;
    contact.website = website;
    contact.address = address;
    if (document.getElementById("cdisplay").children != null) {
      var el = document.getElementById("cdisplay").children;
      if (el[contact.id].children != undefined) {
        var child = el[contact.id].children;
        child[0].innerHTML = name;
        child[1].innerHTML = email;
        child[2].innerHTML = mobile; } }}}
function edit() {
  let id = document.getElementById("sel-id").value;
  for (i = 0; i < Contacts.length; i++) {
    if (Contacts[i].id == id) {
      editcontact(Contacts[i]); break; } }
  document.getElementById("sel-contact").style.display = "none";
  document.getElementById("addContact").style.display = "block";}
function error(){
  console.log('a');
  document.getElementById("name_error").innerHTML = "";
  document.getElementById("email_error").innerHTML = "";
  document.getElementById("mobile_error").innerHTML = "";
  document.getElementById("landline_error").innerHTML = "";
  document.getElementById("website_error").innerHTML = "";
  document.getElementById("address_error").innerHTML = "";
}