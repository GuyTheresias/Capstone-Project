

function showInfo()
{
    document.getElementById("question_img").hidden = true;
    document.getElementById("info").hidden = false;
}

const questionsElements = document.querySelectorAll('.questions');

function checkScroll() {
    questionsElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();
        if (elementPosition.top < window.innerHeight / 2) {
            element.classList.add('show-questions');
        } else {
            element.classList.remove('show-questions');
        }
    });
}

window.addEventListener('scroll', checkScroll);

