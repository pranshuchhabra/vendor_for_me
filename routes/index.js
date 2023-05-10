// function formSubmit() {
//     event.preventDefault();

//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("password").value;


//     const correctemail = "paras";
//     const correctpass = "pass";

//     if (email == correctemail && pass == correctpass) {
//         console.log("login successful");
//         window.location.href = "/exeDash";
//     }
//     else {
//         console.log("invalid Credentials");
//     }




// }

function formSubmit() {

    event.preventDefault();

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    const data = { email: email, password: pass };
    // console.log(data);

    fetch('/check', {
        method: 'POST',
        headers: {
            Accept: "application/json",

            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {

                window.location.href = result.redirectUrl;
            } else {
                alert(result.message);
            }
        })
        .catch(error => {
            console.error(error);
        });
}