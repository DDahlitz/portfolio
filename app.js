$(() => {
    /*==============================================================*/
    /*======================= navbar buttons =======================*/
    /*==============================================================*/

$('a').addClass('inactive')
$('a').first().removeClass('inactive').addClass('active')

const $div0 = $('#div0')
const $div1 = $('#div1')
const $div2 = $('#div2')
const $div3 = $('#div3')

$('#div1').hide()
$('#div2').hide()
$('#div3').hide()

    /*=========================================================================*/
    /*======================= navbar on hover functions =======================*/
    /*=========================================================================*/
            // syntax found on stackoverflow
            // has an issue with the jquery created classes
            // if buttin is clicked it retains values of the inactive class while becoming an active class
            //colors changed in final version, if this function is active it retains the color of previous inactive class


    // $('.inactive').hover(function(){
    //     $(this).css('color', 'black');
    //     $(this).css("background-color",  '#ddd');
    //     }, function() {
    //     $(this).css('color', '#f2f2f2');
    //     $(this).css('background-color', ' #333');
    // });

    /*=========================================================================*/
    /*======================= navbar on click functions =======================*/
    /*=========================================================================*/

const displayAboutMe = () => {
    $div1.hide()
        $('#resume').removeClass('active').addClass('inactive')
    $div2.hide()
        $('#projects').removeClass('active').addClass('inactive')
    $div3.hide()
        $('#contact-me').removeClass('active').addClass('inactive')
    $div0.show()
        $('#about').addClass('active').removeClass('inactive')
}
const displayResume = () => {
    $div2.hide()
        $('#projects').removeClass('active').addClass('inactive')
    $div3.hide()
        $('#contact-me').removeClass('active').addClass('inactive')
    $div0.hide()
        $('#about').removeClass('active').addClass('inactive')
    $div1.show()
        $('#resume').addClass('active').removeClass('inactive')
}
const displayProjects = () => {
    $div3.hide()
        $('#contact-me').removeClass('active').addClass('inactive')
    $div0.hide()
        $('#about').removeClass('active').addClass('inactive')
    $div1.hide()
        $('#resume').removeClass('active').addClass('inactive')
    $div2.show()
        $('#projects').addClass('active').removeClass('inactive')
}
const displayContactMe = () => {
    $div0.hide()
        $('#about').removeClass('active').addClass('inactive')
    $div1.hide()
        $('#resume').removeClass('active').addClass('inactive')
    $div2.hide()
        $('#projects').removeClass('active').addClass('inactive')
    $div3.show()
        $('#contact-me').addClass('active').removeClass('inactive')
}
    /*=====================================================================*/
    /*======================= resume buttons toggle =======================*/
    /*=====================================================================*/

$('#education').hide()
$('#employment').hide()
$('#interests').hide()

const displayEducation = () => {
    $('#employment').hide()
        $('#emp').css({'background-color': '#2a324b', 'color': '#c7ccdb'})
    $('#interests').hide()
        $('#int').css({'background-color': '#2a324b', 'color': '#c7ccdb'})
    $('#education').show()
        $('#ed').css({'background-color': '#c7ccdb', 'color': '#2a324b'})
}
const displayEmployment = () => {
    $('#interests').hide()
        $('#int').css({'background-color': '#2a324b', 'color': '#c7ccdb'})
    $('#education').hide()
        $('#ed').css({'background-color': '#2a324b', 'color': '#c7ccdb'})
    $('#employment').show()
        $('#emp').css({'background-color': '#c7ccdb', 'color': '#2a324b'})

}
const displayInterests = () => {
    $('#education').hide()
        $('#ed').css({'background-color': '#2a324b', 'color': '#c7ccdb'})
    $('#employment').hide()
        $('#emp').css({'background-color': '#2a324b', 'color': '#c7ccdb'})
    $('#interests').show()
        $('#int').css({'background-color': '#c7ccdb', 'color': '#2a324b'})
}

    /*==================================================================*/
    /*======================= Portfolio Carousel =======================*/
    /*==================================================================*/

$(() => {
    let currentProject = 0
    let numberofProjects = $('.carousel-projects').children().length - 1
    $('.next').on('click', () => {
        $('.carousel-projects').children().eq(currentProject).css('display', 'none')
        if(currentProject < numberofProjects) {
        currentProject++
        } else {
        currentProject = 0
        }
        $('.carousel-projects').children().eq(currentProject).css('display', 'block')
    })
    $('.previous').on('click', () => {        
        $('.carousel-projects').children().eq(currentProject).css('display', 'none')
        if(currentProject > 0) {
            currentProject--
            } else {
                currentProject = numberofProjects
            }
        $('.carousel-projects').children().eq(currentProject).css('display', 'block')
    })
});



    /*===================================================================*/
    /*======================= Submit Button Click =======================*/
    /*===================================================================*/

const btnClicked = () => {
    $('.btn').css({'box-shadow': 'inset 0 0 10px #e1e5ee'})
}

    /*==============================================================*/
    /*======================= Function Calls =======================*/
    /*==============================================================*/

// $('.navbar a').on('hover', hoverNavbar)
$('#about').on('click', displayAboutMe)
$('#resume').on('click', displayResume)
$('#projects').on('click', displayProjects)
$('#contact-me').on('click', displayContactMe)
$('#ed').on('click', displayEducation)
$('#emp').on('click', displayEmployment)
$('#int').on('click', displayInterests)
$('.btn').on('click', btnClicked)
})