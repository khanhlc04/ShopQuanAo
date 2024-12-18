//viewerjs
const section2 = document.querySelector(".section-2");
const gallery = new Viewer(section2);
// end viewerjs

//Data count
const listDataCount = document.querySelectorAll("[data-count]");
if(listDataCount.length > 0){
    listDataCount.forEach(dataCount => {
        const number = parseInt(dataCount.getAttribute("data-count"));
        let count = 0;
        setInterval(() => {
            if(count < number){
                count += 5;
                dataCount.innerHTML = `${count}+`;
            }
        }, 5000/number);
    });
}
//End datacount