

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


function showEthics() {
    document.getElementById('ethics_a').removeAttribute('hidden');
    document.getElementById('data_a').hidden = true;
    document.getElementById('jobs_a').hidden = true;
}

function showData() {
    document.getElementById('data_a').removeAttribute('hidden')
    document.getElementById('ethics_a').hidden = true;
    document.getElementById('jobs_a').hidden = true;
}

function showJobs()
{
    document.getElementById('jobs_a').removeAttribute('hidden')
    document.getElementById('data_a').hidden = true;
    document.getElementById('ethics_a').hidden = true;
}

function showExpertInfo(experts)
{
    console.log(experts);   
    if (experts.cataleta)
    {
        document.getElementById('cataleta').classList.add('offset-md-3');
        document.getElementById('cataleta_info').removeAttribute('hidden');
        document.getElementById('brown').hidden = true;
        document.getElementById('acemoglu').hidden = true;
        document.getElementById('restrepo').hidden = true;
        document.getElementById('show_experts').hidden = false;
    }
    if (experts.brown)
    {
        document.getElementById('brown').classList.add('offset-md-3');
        document.getElementById('brown_info').removeAttribute('hidden');
        document.getElementById('cataleta').hidden = true;
        document.getElementById('acemoglu').hidden = true;
        document.getElementById('restrepo').hidden = true;
        document.getElementById('show_experts').hidden = false;
    }
    if (experts.acemoglu)
    {
        document.getElementById('acemoglu').classList.add('offset-md-3');
        document.getElementById('acemoglu_info').removeAttribute('hidden');
        document.getElementById('cataleta').hidden = true;
        document.getElementById('brown').hidden = true;
        document.getElementById('restrepo').hidden = true;
        document.getElementById('show_experts').hidden = false;
    }
    if (experts.restrepo)
    {
        document.getElementById('restrepo').classList.add('offset-md-3');
        document.getElementById('restrepo_info').removeAttribute('hidden');
        document.getElementById('cataleta').hidden = true;
        document.getElementById('brown').hidden = true;
        document.getElementById('acemoglu').hidden = true;
        document.getElementById('show_experts').hidden = false;
    }

}

function showExperts(experts)
{
    if (cataleta) {
        document.getElementById('cataleta').classList.remove('offset-md-3');
        document.getElementById('cataleta_info').hidden = true;
        document.getElementById('brown').hidden = false;
        document.getElementById('acemoglu').hidden = false;
        document.getElementById('restrepo').hidden = false;
        document.getElementById('show_experts').hidden = true;
    }
    if (brown) {
        document.getElementById('brown').classList.remove('offset-md-3');
        document.getElementById('brown_info').hidden = true;
        document.getElementById('cataleta').hidden = false;
        document.getElementById('acemoglu').hidden = false;
        document.getElementById('restrepo').hidden = false;
        document.getElementById('show_experts').hidden = true;
    }
    if (acemoglu) {
        document.getElementById('acemoglu').classList.remove('offset-md-3');
        document.getElementById('acemoglu_info').hidden = true;
        document.getElementById('cataleta').hidden = false;
        document.getElementById('brown').hidden = false;
        document.getElementById('restrepo').hidden = false;
        document.getElementById('show_experts').hidden = true;
    }
    if (restrepo) {
        document.getElementById('restrepo').classList.remove('offset-md-3');
        document.getElementById('restrepo_info').hidden = true;
        document.getElementById('cataleta').hidden = false;
        document.getElementById('brown').hidden = false;
        document.getElementById('acemoglu').hidden = false;
        document.getElementById('show_experts').hidden = true;
    }

}