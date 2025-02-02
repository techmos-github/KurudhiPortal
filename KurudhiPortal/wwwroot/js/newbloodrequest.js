﻿$(document).ready(function () {
    $("#request-form").validate({
        rules: {
            patientname: {
                required: true,
                minlength: 4,
                maxlength:25,
            },
            admissionid: {
                required: true,
            },
            age: {
                required: true,
            },
            gender: {
                required: true,
            },
            bloodtype: {
                required: true,
            },
            bloodgroup: {
                required: true,
            },
            bloodunit: {
                required: true
            },
            medicalstatus: {
                required: true,
            },
            duedate: {
                required: true,
            },
            attendername: {
                required: true,
            },
            attendercontact: {
                required: true,
                minlength:10
            },
            hospitalname: {
                required: true,
            },
            hospitaladdress: {
                required: true,
            },
            country: {
                required: true,
            },
            state: {
                required:true,
            },
            district: {
                required: true,
            },
            location: {
                required: true,
            },
        },
        messages: {
            patientname: {
                required: "Please enter  patient name",
                minlength: "Please enter valid patient name",
                maxlength: "Please enter valid patient name",
            },
            admissionid: {
                required: "Please enter admission id",
            },
            age: {
                required: "Please enter age"
            },
            gender: {
                required: "Please select gender"
            },
            bloodtype: {
                required: "Please select the blood type",
            },
            bloodgroup: {
                required: "Please select blood group"
            },
            bloodunit: {
                required: "Please enter blood units required"
            },
            medicalstatus: {
                required: "Please select medical status"
            },
            duedate: {
                required: "Please enter due date"
            },
            attendername: {
                required: "Please enter attender name",
            },
            attendercontact: {
                required: "Please enter attender contact",
                minlength:"Please enter valid attender contact"
            },
            hospitalname: {
                required: "Plese enter hospital name"
            },
            hospitaladdress: {
                required: "Please enter hospital address"
            },
            country: {
                required: "Please select country",
            },
            state: {
                required: "Please select state",
            },
            district: {
                required: "Please select district"
            },
            location: {
                required: "Please select location"
            }
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            error.insertAfter(element);
        },
        highlight: function (element) {
            $(element).addClass('border-line');
        },
        unhighlight: function (element) {
            $(element).removeClass('border-line');
        }
    });
    $(".request-btn").click(function () {
        debugger;
        $("#request-form").validate();
        if ($("#request-form").valid()) {
            let newBloodRequest = {
                PatientName: $("#patientname").val(),
                DueDate: $("#duedate").val(),
                AdmissionId: $("#admissionid").val(),
                AttenderName: $("#attendername").val(),
                Age: $("#age").val(),
                AttenderContact: $("#attendercontact").val(),
                BloodType: $("input[type=radio]:checked").val(),
                HospitalName: $("#hospitalname").val(),
                Gender: $("#gender").val(),
                HospitalAddress: $("#hospitaladdress").val(),
                BloodGroup: $("#bloodgroup").val(),
                Country: $("#country").val(),
                BloodUnits: $("#bdunit").val(),
                Location: $("#location").val(),
                MedicalStatus: $("#medicalstatus").val(),
                State: $("#state").val(),
                District: $("#district").val(),
            }
            $.ajax({
                url: '/Request/BloodRequest',
                type: 'GET',
                data: newBloodRequest,
                success: function (data) {
                    debugger;
                    if (data.status == "success") {
                        window.location = "/Request/Index"
                    }
                },
                error: function (textStatus, errorThrown) {
                    console.log('Error in ajax call');
                }
            });
        }
    });
});