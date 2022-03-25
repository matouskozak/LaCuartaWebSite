console.log("script loaded");

var currentTab = 1;
showTab(currentTab);

var dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


var RESERVATION_PARAMS = {
    num_adults: 4,
    num_childs: 2,
    time_lunch: false,
    time_dinner: true,
    reservation_date: new Date(),
    dinning_hall: true,
    terrace: false,
    reservation_time: "14:30",
    full_name: "John Doe",
    email: "example@example.com",
    country_code: "+46",
    phone_number: "123456789",
    comment: "test comment",
    conditions_accepted: true,
    remember_user: true,
};

console.log(RESERVATION_PARAMS["reservation_date"]);

console.log(RESERVATION_PARAMS["test"]);




/*
document.getElementById("reservas_form").addEventListener('submit', function(e) {
    e.preventDefault(); //to prevent form submission

    alert("working");
    var $myForm = $("#reservas_form");

    if ( $myForm[0].checkValidity() ) {
        nextTab(1);
        alert('sucess');
    } else {
        //Validate Form
        $myForm[0].reportValidity()
    }

    alert('click');
});
*/



function showTab(n) {
    console.log("Loading tab.." + n);

    $('#content').load(`./reservas${n}_content.html`);
}

function nextTab(n) {
    console.log(`Next tab please... ${currentTab} -> ${currentTab + n}.`);

    // if you have reached the end of the form... :
    if (currentTab >= 4) {
        alert("Form completed");
        return false;
    }

    currentTab = currentTab + n;


    showTab(currentTab);
    return true;
}

function prevTab(n) {
    console.log(`Previous tab please... ${currentTab} -> ${currentTab - n}.`);

    // if you are on first tab... :
    if (currentTab == 1) {
        alert("Cannot go to previous tab");
        return false;
    }

    currentTab = currentTab - n;

    showTab(currentTab);
    return true;

}
