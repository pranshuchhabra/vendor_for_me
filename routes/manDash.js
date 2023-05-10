
// const tbody = document.querySelector('#myTable tbody');

const data = [
    { VendorID: 1, Legalname: 'John', Companyname: 'Infosys', Type: 'dcfv', Category: 'dcfv', Status: 'pending', RequestedAt: 'dcf', Action: '<a href="/view"><i class="mdi mdi-eye"></i></a><i class="mdi mdi-check check-icon"></i> <i class="mdi mdi-close close-icon"></i>' },
    { VendorID: 2, Legalname: 'Doe', Companyname: 'TCS', Type: 'fvg', Category: 'cfv', Status: 'pending', RequestedAt: 'cdfv', Action: '<i class="mdi mdi-eye"></i> <i class="mdi mdi-check check-icon"></i> <i class="mdi mdi-close close-icon"></i>' },
    { VendorID: 3, Legalname: 'Smith', Companyname: 'Wipro', Type: 'cfv', Category: 'cfv', Status: 'pending', RequestedAt: 'cfv', Action: '<i class="mdi mdi-eye"></i> <i class="mdi mdi-check check-icon"></i> <i class="mdi mdi-close close-icon"></i>' }
];

const table = document.querySelector("#myTable tbody");

// const modal = document.getElementById("myModal");
// const modalTitle = document.getElementById("modal-title");
// const modalMessage = document.getElementById("modal-message");
// const closeBtn = document.querySelector(".close");


data.forEach((row) => {
    const newRow = table.insertRow();
    newRow.insertCell().textContent = row.VendorID;
    newRow.insertCell().textContent = row.Legalname;
    newRow.insertCell().textContent = row.Companyname;
    newRow.insertCell().textContent = row.Type;
    newRow.insertCell().textContent = row.Category;
    newRow.insertCell().textContent = row.Status;
    newRow.insertCell().textContent = row.RequestedAt;
    newRow.insertCell().innerHTML = row.Action;


    table.addEventListener('click', (event) => {
        if (event.target.classList.contains('check-icon')) {

            const checkModal = document.querySelector('#modal');
            const modalTitle = checkModal.querySelector('.modal-title');
            const modalBody = checkModal.querySelector('.modal-body');
            modalTitle.textContent = 'Success';
            modalBody.textContent = 'The vendor has been approved.';
            checkModal.classList.add('show');
            checkModal.style.display = 'block';
        } else if (event.target.classList.contains('close-icon')) {

            const closeModal = document.querySelector('#modal');
            const modalTitle = closeModal.querySelector('.modal-title');
            const modalBody = closeModal.querySelector('.modal-body');
            modalTitle.textContent = 'Rejected';
            modalBody.textContent = 'The vendor has been rejected.';
            closeModal.classList.add('show');
            closeModal.style.display = 'block';
        }
    });

    // const actionCell = newRow.insertCell();
    // actionCell.innerHTML = row.Action;



    //     const checkIcon = actionCell.querySelector(".check-icon");
    //     const closeIcon = actionCell.querySelector(".close-icon");

    //     checkIcon.addEventListener("click", () => {
    //         modalTitle.textContent = "Approved";
    //         modalMessage.textContent = "The vendor has been approved.";
    //         modal.style.display = "block";
    //     });

    //     closeIcon.addEventListener("click", () => {
    //         modalTitle.textContent = "Rejected";
    //         modalMessage.textContent = "The vendor has been rejected.";
    //         modal.style.display = "block";
    //     });
    // });

    // closeBtn.addEventListener("click", () => {
    //     modal.style.display = "none";
    // });

    // window.addEventListener("click", (event) => {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // });





    // const checkIcons = document.querySelectorAll(".check-icon");

    // checkIcons.forEach((icon) => {
    //     icon.addEventListener("click", () => {
    //         const modalTitle = "Approved";
    //         const modalContent = "The vendor has been approved.";
    //         const modal = new bootstrap.Modal(document.querySelector("#exampleModal"));
    //         const modalTitleElement = document.querySelector("#exampleModalLabel");
    //         const modalBodyElement = document.querySelector(".modal-body");
    //         modalTitleElement.textContent = modalTitle;
    //         modalBodyElement.innerHTML = modalContent;
    //         modal.show();
    //     });
    // });


});
