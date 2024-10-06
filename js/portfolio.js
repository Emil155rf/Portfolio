const showBtn = document.querySelector('.project-1')
const block = document.querySelector('.link-block')
const showBtn_2 = document.querySelector('.project-2')
const block_2 = document.querySelector('.link-block-2')
const showBtn_3 = document.querySelector('.project-3')
const block_3 = document.querySelector('.link-block-3')
const img = document.querySelector('.link-img-1')
const scrollToTop = document.querySelector('.back-to-top')
const scrollToContacts = document.querySelector('.header-nav-btn')

const link1 = document.querySelector('.link-1')
const link2 = document.querySelector('.link-2')
const link3 = document.querySelector('.link-3')








function show(val1, val2, val3, val4) {
    val1.addEventListener('mouseover', function () {
        val2.style.visibility = 'visible'
        val3.style.transition = '.4s'
        val4.style.transition = '.4s'
        val3.style.color = '#525151'
        val4.style.color = '#525151'

    })
    val1.addEventListener('mouseout', function () {
        val2.style.visibility = 'hidden'
        val3.style.transition = '.4s'
        val4.style.transition = '.4s'
        val3.style.color = 'rgb(190 190 190)'
        val4.style.color = 'rgb(190 190 190)'


    })


}







show(showBtn, block, link2, link3)
show(showBtn_2, block_2, link1, link3)
show(showBtn_3, block_3, link1, link2)





SmoothScroll({
    animationTime: 800,
    stepSize: 75,


    accelerationDelta: 30,
    accelerationMax: 2,

    keyboardSupport: true,
    arrowScroll: 50,

    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    touchpadSupport: true,



})



window.addEventListener('load', function () {
    document.body.classList.add('loaded')
})




function updateTime() {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    const date = now.toDateString()
    const timeString = `${hours}:${minutes}:${seconds} ${date}`
    document.getElementById('clock').innerText = timeString
}

updateTime()
setInterval(updateTime, 1000)


scrollToTop.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

})


scrollToContacts.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
    })
})




