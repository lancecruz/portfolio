function updateActiveTabLink (event) {
    // console.log(tabLinksArray[1]);
    // tabLinksArray[1].classList.add("active-link");

    console.log(event.target);

    if (event.target === tabLinksArray[currentActiveTabLink]) {

    } else {
        tabLinksArray[currentActiveTabLink].classList.remove("active-link");
        tabContentsArray[currentActiveTabLink].classList.remove("active-tab");
        for (let i = 0; i < tabLinksArray.length; i++) {
            if (event.target === tabLinksArray[i]) {
                currentActiveTabLink = i;
                tabLinksArray[currentActiveTabLink].classList.add("active-link");
                tabContentsArray[currentActiveTabLink].classList.add("active-tab");
                break;
            }
        }
    }
}

let tabLinksArray = document.querySelectorAll('#about .tab-titles .tab-links');
let tabContentsArray = document.querySelectorAll('#about .tab-contents');
let currentActiveTabLink = 0;

tabLinksArray.forEach((item) => {
    item.addEventListener('click', updateActiveTabLink);
});