console.log('Hello world~');



//Declare the monthly salary variable!
let monthlySalary = 0



//Create readyNow function that sets up the page with all the required elements once loaded!
function readyNow() {

    //First, let's setup some page elements, starting with the header title!
    const appendH1SalaryCalculator = $(`<h1>Sevisis Amazing Salary Calculator!</h1>`);
    $('body').append(appendH1SalaryCalculator);

    //Make and append a break, and "Add employee"!
    const appendH2AddEmployee = $(`<br><h2>Add employee</h2>`)
    $('body').append(appendH2AddEmployee);

    //Make and append text boxes for "First name", "Last name", "ID", "Title", and "Annual salary"!
    const appendInputBoxes = $(`
    <input type='text' placeholder='First name' id='inputFirstName'></input>
    <input type='text' placeholder='Last name' id='inputLastName'></input>
    <input type='text' placeholder='ID' id='inputID'></input>
    <input type='text' placeholder='Title' id='inputTitle'></input>
    <input type='number' placeholder='Annual salary' id='inputAnnualSalary'></input>`);
    $('body').append(appendInputBoxes);

    //Make and append two breaks, and a "Submit" button!
    const appendSubmitButton = $(`<br><br><button id='submitButton'>Submit!</button>`);
    $('body').append(appendSubmitButton);

    //Make and append a break, and the "Employees" title for the table we're listing on!
    const appendH2Employees = $(`<h2>Employees</h2>`);
    $('body').append(appendH2Employees);

    //Make and append a break, and the table we are submitting too!
    const appendTableOfEmployees = $(`
    <table id='appendInputTableRowsUnderHere'>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
                <th>Title</th>
                <th>Annual Salary</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                
            </tr>
        </tbody>
    </table>
    `);
    $('body').append(appendTableOfEmployees);

    //Make and append a break, and then the MONTHLY salary!
    const appendMonthlySalaryOutput = $(`<h2>Total monthly: <span id='monthlySal'>$${monthlySalary}</span></h2>`);
    $('body').append(appendMonthlySalaryOutput);

    //And the whole page is setup! 



    //Now let's make the logic...

    //Capture click event on "submitButton"!
    $('#submitButton').on('click', onSubmitButton);



    //Create function that runs once the "submitButton" is clicked!
    function onSubmitButton(event) {
        //Test to see the button has indeed been clicked~
        console.log('Oi, you clicked the submit button!');

        //Get user input from "inputFirstName", and store it in a variable!
        const firstName = $('#inputFirstName').val();
        //Get user input from "inputLastName", and store it in a variable!
        const lastName = $('#inputLastName').val();
        //Get user input from "inputID", and store it in a variable!
        const iD = $('#inputID').val();
        //Get user input from "inputTitle", and store it in a variable!
        const title = $('#inputTitle').val();
        //Get user input from "inputAnnualSalary", and store it in a variable!
        const annualSalary = $('#inputAnnualSalary').val();

        //A big ol' test to make sure the inputs have been captured properly~
        console.log(`User input: ${firstName}, ${lastName}, #${iD}, ${title}, $${annualSalary}!`);

        //Create a table row <tr> with the user inputs in seperate table data parts <td>!
        const tableRowElement = $(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>#${iD}</td>
            <td>${title}</td>
            <td>$${annualSalary}</td>
            <td><button class='deleteButton'>Delete</button></td>
        </tr>
        `);

        //Append to the table body <tbody>!
        $('table#appendInputTableRowsUnderHere > tbody').append(tableRowElement);

        /*
        //Capture click event on every "deleteButton" AFTER the inputs are appended!
        $('.deleteButton').on('click', deleteRow);
        */
       $('body').on('click', '.deleteButton', deleteRow);

        //Then empty the input fields! 
        $('#inputFirstName').val('');
        $('#inputLastName').val('');
        $('#inputID').val('');
        $('#inputTitle').val('');
        $('#inputAnnualSalary').val('');

        //Now let's calculate MONTHLY SALARY with the numbers for the annual salaries!
        
    };

    //Create function that every "deleteButton" calls on!
    function deleteRow(event) {
        console.log('Oi, you clicked the delete button!')

        //Have JQuery grab the delete button that was clicked!
        let theDeleteButton = $(event.target);

        //Travel up the DOM to the row we are deleting!
        let targetRow = theDeleteButton.closest('tr');

        //Then remove it from the DOM!
        targetRow.remove();

    }

    //If monthly salary is more than $20,000, turn red!
    if (monthlySalary > 20000) {
        $('#monthlySal').css('color', 'red');
    };

} //End readyNow function!





//Once the document is ready, activate the readyNow function, and setup the page! (MUST STAY AT BOTTOM!!!)
$(document).ready(readyNow);