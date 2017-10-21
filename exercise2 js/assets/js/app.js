var butto = $("#btn");

butto.click(function (e) {
    addListItem()
})




function addListItem() {


    var first = $("#firstname").val();

    var last = $("#lastname").val();

    var mail = $("#email").val();

    var del = ' <i class="fa fa-trash" aria-hidden="true" id="delete" value="delete"></i>';

    var edit = '<i class="fa fa-pencil" aria-hidden="true" id="edit"></i>'





    if (first === "" || mail === "" || last === "" || !validateEmail() || !isNaN(first) || !isNaN(last)) {
        $("#firstname, #lastname, #email").css("border-color", "red").css("color", "black")

        if (first === "" || !isNaN(first) || last === "" || !isNaN(last)) {

            if (!isNaN(first) || first === "")

                $("#firstname").css("background-color", "red");

            else if (!isNaN(last) || last === "") {
                $("#lastname").css("background-color", "red");
            }


        }
    } else {

        $("#todo-list ,#lastname ").append('<tr><td>' + first + '</td><td>' + last + '</td><td>' + mail + '</td><td onClick="test()">' + del + '</td><td>' + edit + '</td></tr>');


        // $("#delete").click, function () {
        //     alert('test')
        //     console.log(  $(this).closest("tr"))
        //     //$(this).closest("tr").remove();
        // };



        $("#firstname, #lastname, #email").css("background-color", "white").css("border-color", "green")
    }

};


function test() {
    alert('et voila')
    
    $("#delete").remove();

}



function validateEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /*  return re.test(mail);*/


    var adress = $("#email").val()

    if (re.test(adress)) {
        return true;
    } else {

        alert('c\'est pas correct!!!!!!');

        $("#email").css("border-color", "red");
        return false;

    }
};
