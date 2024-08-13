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

const serviceItemsLeftSmbox = document.querySelectorAll(".service-items-left-smbox");
const serviceItemsRightSmboxSubTitle = document.querySelector(".service-items-right-box h6");
const serviceItemsRightSmboxTitle = document.querySelector(".service-items-right-box h2");
const serviceItemsRightSmboxContent = document.querySelector(".service-items-right-smbox p");
const serviceItemsRightSmboxImg = document.querySelector(".service-items-right-smbox img");

const data = {
    CCTV監控系統: {
        title: "CCTV監控系統",
        subTitle: "CCTV surveillance system",
        content: "在基礎的防盜監控工程中, 我們會給業主了解每支監視器的攝影範圍,最適用的攝影機型號等等,我們堅持規畫出最有效率的監視器數量來達到”用最少,無死角”的成績. 隨著A.I.的崛起，羿鈞與其夥伴在監控領域也投入了大量的成本在其中，目前嶄新的成果如下。 自動檢查人員安全,規範行為; 人員是否依循安全SOP著裝,施工; 簡單化複雜的槽車作業; 辨識非活體/動物的AI已降低誤報率; 檢測商品瑕疵，利用畫面呈現計算晶片良率; Undefined 車輛進場路線追蹤; 物品安檢掃描EX:手機,紙張等等。 監控已不是過去單純的監視而已，他現在更是業務上的輔助，即使市面上都還沒有人做，我們都有不同領域的專業合作夥伴可以一起打造量身訂做的方案， 我們其中一個夥伴是這麼說的，”萬物皆可辯，只要先訓練”，我們期待與您的合作，讓我們透過不斷學習進步的監控系統架構幫助您的事業更安全,更有效率!",
        image: "images/p3/Service-Big01.jpg"
    },
    無塵室安防建廠: {
        title: "無塵室安防建廠",
        subTitle: "Clean room security factory construction",
        content: "監視而已說的，”萬物皆可辯，只要先訓練”，我們期待與您的合作，讓我們透過不斷學習進步的監控系統架構幫助您的事業更安全,更有效率!",
        image: "images/p3/Service-Big02.jpg"
    },
    門禁管理系統: {
        title: "門禁管理系統",
        subTitle: "Access control system",
        content: "安全的第一道防線，然而長期以來卻也最容易被忽視，讓最重要的讓資產暴露在高風險環境中。台灣依舊有很多工廠的門禁系統老舊，而且一用就是十幾年，大多以卡片做為身分識別、進出門口之用，不過老系統的卡片複製、破解並不難，因此這種做法的安全等級相當低，幾近於不設防，而工廠內的設備、產品、原料是製造業者的企業命脈，在未設防的情況下，幾乎是人人可進，所以我們強烈建議，製造業者應儘速升級門禁系統。(文章引用- Digitimes/老舊門禁系統應盡速升級 避免工廠成為不設防之地) 羿鈞科技的門禁系統規劃和應用,有著多年的經驗與實務建置的案例。像是高科技廠房、公司,豪宅門禁的傳統電子刷卡, RF識別感應到指靜脈感應，以及目前最新的人臉與車牌辨識。也幫助了全台連鎖72家的知名健身房快速整合新舊系統的差勤和全新人臉辨識系統。鍵祥會是您門禁系統最優的整合解決方案的選擇，透過智慧化設計，現代門禁系統將可兼顧安全與效率!",
        image: "images/p3/Service-Big03.jpg"
    },
    智能綜合佈線系統: {
        title: "智能綜合佈線系統",
        subTitle: "Intelligent integrated wiring system",
        content: "羿鈞在台灣佈線領域已深耕三十多年，在資訊及通信系統佈線(Cabling System)的規劃、設計、建置與維運領域上可謂是業界的翹楚，我們在為客戶施工一系列結構化佈線前, 都堅持著必須以確保系統的可靠性、安全性，使用方便性及未來的擴充性為前提下來做規劃，讓業主不會在未來想要擴廠,或是新增網路點時要花額外的費用,重新佈主要網路幹纜,白白的損失時間與金錢。羿鈞堅信著按照以「結構化」的基礎來佈線,第一能夠讓網路更加穩定,第二也能夠更加的靈活來配合業主新增機台等等需求，第三能把網路突發故障率降到最低，第四能加快檢測網路真正的問題點的速率。 不管您的需求是電信通訊或資料網路需求，從電話類比語音至光纖10Gbps的數位資料傳輸; 從新增一個網路點至國家級高速運算中心搭建，羿鈞始終保持一貫的高品質,快效率和為您優先著想的服務態度。",
        image: "images/p3/Service-Big04.jpg"
    },
}

serviceItemsLeftSmbox.forEach(el => el.addEventListener("click", () => {
    serviceItemsLeftSmbox.forEach(el => el.classList.remove('active'));
    el.classList.add('active');

    serviceItemsRightSmboxSubTitle.innerText = data[el.innerText]["subTitle"]
    serviceItemsRightSmboxTitle.innerText = data[el.innerText]["title"]
    serviceItemsRightSmboxContent.innerText = data[el.innerText]["content"]
    serviceItemsRightSmboxImg.src = data[el.innerText]["image"]
}))
