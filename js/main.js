document.addEventListener("DOMContentLoaded", () => {
    let upBtn = document.querySelector(".up-button")
    let downBtn = document.querySelector(".down-button")
    let sidebar = document.querySelector(".sidebar")
    let mainSlide = document.querySelector(".main-slide")

    let slidesChildCount = mainSlide.children.length         // get count of child element
    sidebar.style.top = `-${(slidesChildCount - 1) * 100}vh` // get dynamic block position

    upBtn.addEventListener("click", () => {
        changeSlide("up")
    })
    downBtn.addEventListener("click", () => {
        changeSlide("down")
    })

    let activeSlideIDX = 0
    let container = document.querySelector(".container")

    let changeSlide = (swipeDirection) => {
        if (swipeDirection === "up") {
            activeSlideIDX++
            if (activeSlideIDX === slidesChildCount) { // if slides length is end, scroll to first slide
                activeSlideIDX = 0  // return to first slide
            }
        } else if (swipeDirection === "down") {
            activeSlideIDX--
            if (activeSlideIDX < 0) {   // if slide
                activeSlideIDX = slidesChildCount - 1 // return to last slide
            }
        }

        const height = container.clientHeight  // get height of screen

        mainSlide.style.transform = `translateY(-${activeSlideIDX * height}px)` 
        sidebar.style.transform = `translateY(${activeSlideIDX * height}px)`
    }
})