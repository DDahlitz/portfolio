$(() => {

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






$('#about').on('click', displayAboutMe)
$('#resume').on('click', displayResume)
$('#projects').on('click', displayProjects)
$('#contact-me').on('click', displayContactMe)

})