const actualCaseSmbox1 = document.querySelectorAll('.actual-case-smbox1')
const actualCaseSmbox2 = document.querySelectorAll('.actual-case-smbox2')
const fixButtomBtn = document.querySelector('.fix-buttom-btn')

actualCaseSmbox1.forEach(el => el.addEventListener("mouseover", () => {
    const index = el.getAttribute('data-index')
    const img = document.querySelector(`.actual-case-img${index}`)
    img.src = 'images/p2/case-back.jpg'
}))

actualCaseSmbox1.forEach(el => el.addEventListener("mouseleave", () => {
    const index = el.getAttribute('data-index')
    const img = document.querySelector(`.actual-case-img${index}`)
    img.src = 'images/p2/case.jpg'
}))

actualCaseSmbox2.forEach(el => el.addEventListener("mouseover", () => {
    const index = el.getAttribute('data-index')
    const img = document.querySelector(`.actual-case-img${index}`)
    img.src = `images/p2/Component-hover-${index}.jpg`
}))

actualCaseSmbox2.forEach(el => el.addEventListener("mouseleave", () => {
    const index = el.getAttribute('data-index')
    const img = document.querySelector(`.actual-case-img${index}`)
    img.src = `images/p2/company-${index}.jpg`
}))

fixButtomBtn.addEventListener("mouseover", () => {
    fixButtomBtn.src = "images/line-people02.png"
})

fixButtomBtn.addEventListener("mouseleave", () => {
    fixButtomBtn.src = "images/line-people01.png"
})

