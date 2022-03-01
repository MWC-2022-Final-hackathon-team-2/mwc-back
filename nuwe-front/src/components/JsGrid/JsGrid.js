import $ from 'jquery';
import REACT from 'react'
import swal from 'sweetalert';

async function callDataEmploee() {
    let result = []
    try {
        var dataEmployee = []
        result = await $.ajax({
            type: "GET",
            url: "http://localhost:5000/api/v1/flight",
            success: function (data) {
                console.log(data.datos)
                dataEmployee = data.datos;
                // console.log("pepe")
            }
        })
        console.log(result.datos)
        return result.datos;
    } catch (error) {
        console.error("Don't load the Data");
    }
};





async function callGrid() {
    $("#jsGrid").jsGrid({
        width: "100%",
        height: "900px",
        //todo settings JsGrid
        inserting: true,
        editing: true,
        sorting: true,
        autoload: true,
        paging: true,
        pageSize: 20,
        pageButtonCount: 5,
        confirmDeleting: false,
        //todo Load data from employees.json
        data: await callDataEmploee(),

        //todo fields to display in the table, settings and validators in the table
        fields: [{
                name: "name",
                type: "text",
                validate: {
                    validator: "required",
                    message: "Name required"
                }
            },
            {
                name: "email",
                type: "text",
                width: 220,
                validate: {
                    validator: "required",
                    message: "Email required"
                }
            },
            {
                name: "city",
                type: "text",
                validate: {
                    validator: "required",
                    message: "City"
                }
            },
            {
                name: "streetAddress",
                type: "number",
                validate: {
                    validator: "required",
                    message: "Street Adress required"
                }
            },
            {
                name: "state",
                type: "text",
                validate: {
                    validator: "required",
                    message: "State required"
                }
            },
            {
                name: "age",
                type: "number",
                width: 50,
                validate: {
                    validator: "range",
                    param: [18, 80]
                }
            },
            {
                name: "postalCode",
                type: "number",
                validate: {
                    validator: "required",
                    message: "Postal code required"
                }
            },
            {
                name: "phoneNumber",
                type: "number",
                validate: {
                    validator: "required",
                    message: "phone Number required"
                }
            },

            // todo controls settings to event listeners
            {
                type: "control",
                modeSwitchButton: true,
                editButton: true,
                rowClick: true,
                rowDoubleClick: true,

                //todo header button and function
                headerTemplate: () => {
                    return $("<button>").attr("type", "button").attr('className', "fas fa-user-plus")
                        .on("click", function () {
                            // window.location.assign(`${registerView}`)
                        });
                }
            },
        ],
        //todo event listener to update from inline table
        onItemUpdated: function (args) {
            $.ajax({
                type: "POST",
                // url: `${registerView}/data/${args.item[0]}`,
                data: args.item,
                success: function (data) {
                    swal({
                        title: "Employee Updated",
                        icon: "success",
                    });
                }
            });

        },
        onItemDeleting: function (args) {
            swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this employee",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Employee deleted!", {
                            icon: "success",
                        });
                        $.ajax({
                            type: "DELETE",
                            // url: `${data}/Delete/${args.item[0]}`,
                            success: function (data) {
                                swal({
                                    title: "Employee Deleted",
                                    icon: "success",
                                });
                            }
                        });
                    } else {
                        swal("Employee not deleted!");
                        args.cancel = true;
                        callGrid()
                    }
                });
        },

        //todo this need to be active to works double click
        rowClick: function (args) {},
        //todo event listener to redirect to employee.php with id and charge all data in the form
        rowDoubleClick: function (args) {
            // $idget = args["item"].id
            // window.location.assign(`${registerView}/checked/${$idget}`)
        },
        onItemInserting: function (args) {
            // emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            // if (!emailRegex.test(args.item.email)) {
                // args.cancel = true;
                // swal({
                    // title: "Email incorrect",
                    // icon: "warning",
                // });
            // }

            // dataEmployee.forEach(element => {
            //     if (element.email == args.item.email) {
            //         args.cancel = true;
            //         swal({
            //             title: "Email already in the database",
            //             icon: "warning",
            //         });
            //     }
            // });
        },

        //todo event listener to after validations insert the employee in employee.json
    //     onItemInserted: function (args) {
    //         route = window.location.href
    //         $.ajax({
    //             type: "POST",
    //             url: `${route}/nep`,
    //             data: args.item,
    //             success: function (data) {
    //                 swal({
    //                     title: "Employee Added",
    //                     icon: "success",
    //                 });
    //                 callGrid();
    //                 // console.log(data)
    //             }
    //         })
    //     }
    });

};

callGrid()

const JsGrid = () => {
    return (
        <div id='jsGrid'>

        </div>
        
    )
}

export default JsGrid;