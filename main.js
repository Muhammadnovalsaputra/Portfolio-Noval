function toggleDetail(e){
    const target = $(e.target)

    if($(target).hasClass("active")){
        $(target).html("more info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()

    console.log ($(item).children(".about-exp-item-detail"))
}

function onFormSubmit(e){
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const massage = $("#inp_massage")
    
    if(!$(email).val()){
        alert("Email is required")
    } else if (!$(subject).val()){
        alert("subject is required")
    }else if (!$(massage).val()){
        alert("Message is required")
    }else {
        alert("form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }

}