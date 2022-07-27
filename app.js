$(() => {



    /*=============== navbar buttons ===============*/
const $div0 = $('#div0')
const $div1 = $('#div1')
const $div2 = $('#div2')
const $div3 = $('#div3')
$('#div1').hide()
$('#div2').hide()
$('#div3').hide()
const displayAboutMe = () => {
    $div1.hide()
    $div2.hide()
    $div3.hide()
    $div0.show()
}
const displayResume = () => {
    $div2.hide()
    $div3.hide()
    $div0.hide()
    $div1.show()
}
const displayProjects = () => {
    $div3.hide()
    $div0.hide()
    $div1.hide()
    $div2.show()
}
const displayContactMe = () => {
    $div0.hide()
    $div1.hide()
    $div2.hide()
    $div3.show()
}

/*=============== Portfolio Carousel ===============*/
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







$('#about').on('click', displayAboutMe)
$('#resume').on('click', displayResume)
$('#projects').on('click', displayProjects)
$('#contact-me').on('click', displayContactMe)

})