const startButton = document.querySelector(".start-journey");

const lessonIntro = document.querySelector(".lesson-intro");

const discoveryPanel = document.querySelector("#discoveryPanel");

startButton.addEventListener("click", function() {

    lessonIntro.style.display = "none";

    discoveryPanel.style.display = "block";

});
function checkAnswer(button, isCorrect) {

    const feedback = document.querySelector("#answerFeedback");

    if (isCorrect) {
    feedback.textContent =
        "آفرین! هرچه عمق بیشتر شود، فشار شاره هم بیشتر می‌شود.";

    feedback.style.color = "#75E8D8";

    document.querySelector("#explainButton").style.display = "block";

} else {
    feedback.textContent =
        "یک بار دیگر فکر کن! با افزایش عمق، فشار چه تغییری می‌کند؟";

    feedback.style.color = "#FFD6A5";
}
}
const explainButton = document.querySelector("#explainButton");
const explanationBox = document.querySelector("#explanationBox");

explainButton.addEventListener("click", function() {
    explanationBox.style.display = "block";
});
const depthSlider = document.querySelector("#depthSlider");
const depthValue = document.querySelector("#depthValue");
const pressureSensor = document.querySelector("#pressureSensor");

const gaugePressure = document.querySelector("#gaugePressure");
const absolutePressure = document.querySelector("#absolutePressure");

const waterDensity = 1000;
const gravity = 10;
const airPressure = 101300;

depthSlider.addEventListener("input", function() {

    const depth = Number(depthSlider.value);

    // نمایش عمق
    depthValue.textContent = depth;

    // محاسبه فشار ناشی از شاره
    const gauge = waterDensity * gravity * depth;

    // محاسبه فشار مطلق
    const absolute = airPressure + gauge;

    // نمایش فشارها
    gaugePressure.textContent = gauge.toLocaleString("en-US");
    absolutePressure.textContent = absolute.toLocaleString("en-US");

    // جابه‌جایی حسگر در مخزن
    const sensorPosition = 10 + (depth / 5) * 75;

pressureSensor.style.top = sensorPosition + "%";
   
});
// MAGAZINE PAGE NAVIGATION

const magazinePages = document.querySelectorAll(".magazine-page");

const prevPageButton = document.querySelector("#prevPage");
const nextPageButton = document.querySelector("#nextPage");

const pageCounter = document.querySelector("#pageCounter");

let currentPage = 0;

function showMagazinePage(direction = "") {

    magazinePages.forEach(function(page, index) {

        page.classList.remove("active", "turn-next", "turn-prev");

        if (index === currentPage) {
            page.classList.add("active");

            if (direction === "next") {
                page.classList.add("turn-next");
            }

            if (direction === "prev") {
                page.classList.add("turn-prev");
            }
        }

    });

    pageCounter.textContent =
        String(currentPage + 1).padStart(2, "0") +
        " / " +
        String(magazinePages.length).padStart(2, "0");

    prevPageButton.disabled = currentPage === 0;
    nextPageButton.disabled =
        currentPage === magazinePages.length - 1;
}

nextPageButton.addEventListener("click", function() {

    if (currentPage < magazinePages.length - 1) {
        currentPage++;
        showMagazinePage("next");
    }

});

prevPageButton.addEventListener("click", function() {

    if (currentPage > 0) {
        currentPage--;
        showMagazinePage("prev");
    }

});

showMagazinePage();