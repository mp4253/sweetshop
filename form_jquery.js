$(document).ready(function(){
    // $("#order_btn").click(function(event){
    //     event.preventDefault();
        $("#bg").fadeIn(1000);
        $("#modal").animate({
            "top":"100px",
            "justify-content":"center",
            "align-items":"center"
        },1000);

        // $("#bg").click(function(){
        //     $("#modal").animate({
        //         "top": "-800px",
                
        //     },1000);

        //     $("#bg").fadeOut(1000);
        // });

        $("#bg").click(function(e){
            e.stopPropagation();
        })

        $("#modal").click(function (e) {
            e.stopPropagation();
          });

        $("#backing").click(function(){
            window.location.href = "home.html";
        });

});


$(document).ready(function(){
    $("#cancelling_order").click(function(){
        localStorage.removeItem("Full_Name");
        localStorage.removeItem("Mobile_Number");
        localStorage.removeItem("Choose_Sweets");
        localStorage.removeItem("Quantity");
        localStorage.removeItem("Addressing");

        window.alert("Your order is cancelled.\nPlease Login again.");

        window.location.href = "index.html";
    });
});