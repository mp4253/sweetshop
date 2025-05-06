function toggleMenu() {
    var menu = document.getElementById("menu_list");
    var content = document.getElementById("content");

    if (menu) {
        menu.classList.toggle("show");

        if (menu.classList.contains("show")) {
            if (content) content.classList.add("shifted");
        } else {
            if (content) content.classList.remove("shifted");
        }
    }
}

function navigate(page) {
    var menu = document.getElementById("menu_list");
    var content = document.getElementById("content");

    if (menu) menu.classList.remove("show");
    if (content) content.classList.remove("shifted");
}


$(document).ready(function(){

    $("#order_btn").click(function(event){

        event.preventDefault();

        let naming = $("#full_naming").val();
        let numbering = $("#phone_numbering").val();
        let choicing = $("#sweet_choicing").val();
        let quantiting = $("#quantities").val();
        let addressing = $("#order_addressing").val();

        if(naming === "" || numbering === "" || choicing === "selection" || quantiting === "" || addressing ===""){
            alert("Please fill all the details.");
        }
        else{

            localStorage.setItem("Full_Name", naming);
            localStorage.setItem("Mobile_Number", numbering);
            localStorage.setItem("Choose_Sweets", choicing);
            localStorage.setItem("Quantity", quantiting);
            localStorage.setItem("Addressing", addressing);

            window.location.href = "form_jquery.html";
        }
        
    });

    if(localStorage.getItem("Full_Name")) {
        $("#full_naming").val(localStorage.getItem("Full_Name"));
        $("#phone_numbering").val(localStorage.getItem("Mobile_Number"));
        $("#sweet_choicing").val(localStorage.getItem("Choose_Sweets"));
        $("#quantities").val(localStorage.getItem("Quantity"));
        $("#order_addressing").val(localStorage.getItem("Addressing"));
    }

});
