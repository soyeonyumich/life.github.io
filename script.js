// Image mapping for background changes and swapping
const imageMap = {
    // Existing background changes
    "v1034_8778": "../images/v1080_1656.png", // Click to change to 돈
    "v1034_8760": "../images/v1075_18.png",   // Click to change to 소연어름
    "v1034_8769": "../images/v1075_12.png",   // Click to change to 필리핀어른

    // New image swaps
    "v1034_8775": "../images/v1080_1657.png", // Click to change to 담배
    "v1034_8763": "../images/v1080_1659.png", // Click to change to 카드
    "v1034_8781": "../images/v1080_1658.png", // Click to change to 세금
    "v873_3135": "../images/v1075_15.png",    // Click to change to 백인여자 어른
    "v1034_8766": "../images/v1075_3.png",    // Click to change to 백인남자 어른
    "v1034_8751": "../images/v1075_6.png",    // Click to change to 흑인 어른
    "v1034_8754": "../images/v1075_21.png",   // Click to change to 아랍 어른
    "v1034_8757": "../images/v1075_9.png"     // Click to change to 몽골 어른
};

// Add event listeners to specific elements
Object.keys(imageMap).forEach(className => {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.addEventListener("click", () => {
            // Change the background image of the clicked element
            element.style.backgroundImage = `url('${imageMap[className]}')`;
        });
    }
});

