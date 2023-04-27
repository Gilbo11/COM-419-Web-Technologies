document.getElementById("contact_form").addEventListener("submit", e=>{
    let nameinput = document.forms["contact_form"] ["textname"].value;
    let email = document.forms["contact_form"] ["Email"].value;
    let message = document.forms["contact_form"] ["message"].value;

    if(nameinput.trim() == ""){
        e.preventDefault();
        alert("Please enter a name.");
    }

    if(email.trim() == ""){
        e.preventDefault();
        alert("Please enter an Email address.");
    }

    if(message.trim() == ""){
        e.preventDefault();
        alert("Please enter a message if you wish to contact us.");
    }
});