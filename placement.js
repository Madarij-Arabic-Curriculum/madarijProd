const placementQuestions = [
    { level: 0, prompt: "Which word means “book”?", promptArabic: "اختر الكلمة التي تعني “book”.", options: ["قَلَم", "كِتَاب", "بَاب", "بَيْت"], answer: 1 },
    { level: 0, prompt: "Choose the correct word: ___ طالبٌ.", promptArabic: "اختر الكلمة الصحيحة: ___ طالبٌ.", options: ["هَذَا", "هَذِهِ", "هَؤُلَاءِ", "ذَلِكَ"], answer: 0 },
    { level: 0, prompt: "What is the plural of كِتَابٌ?", promptArabic: "ما جمع كلمة كِتَابٌ؟", options: ["كِتَابَانِ", "كَاتِب", "كُتُبٌ", "مَكْتَب"], answer: 2 },
    { level: 0, prompt: "Read: أَنَا مِنْ كَنَدَا. Where is the speaker from?", promptArabic: "اقرأ: أَنَا مِنْ كَنَدَا. من أين المتكلم؟", options: ["Egypt", "Canada", "Jordan", "India"], answer: 1 },
    { level: 1, prompt: "Choose the correct present-tense verb: الطالبة ___ الدرسَ.", promptArabic: "اختر الفعل المضارع الصحيح: الطالبة ___ الدرسَ.", options: ["يقرأ", "تقرأ", "قرأوا", "نقرأ"], answer: 1 },
    { level: 1, prompt: "Which sentence is grammatically correct?", promptArabic: "أي جملة صحيحة نحويًا؟", options: ["الولدُ طويلٌ.", "الولدَ طويلٌ.", "الولدُ طويلةٌ.", "الولدِ طويلٌ."], answer: 0 },
    { level: 1, prompt: "What does أَيْنَ تَسْكُنُ؟ mean?", promptArabic: "ما معنى أَيْنَ تَسْكُنُ؟", options: ["What do you study?", "Where do you live?", "When do you arrive?", "Who is your teacher?"], answer: 1 },
    { level: 1, prompt: "Complete: ذَهَبْتُ ___ السوقِ.", promptArabic: "أكمل: ذَهَبْتُ ___ السوقِ.", options: ["في", "من", "إلى", "على"], answer: 2 },
    { level: 2, prompt: "Choose the correct past-tense form: نحن ___ الطعامَ.", promptArabic: "اختر صيغة الماضي الصحيحة: نحن ___ الطعامَ.", options: ["أكلتُ", "أكلوا", "أكلنا", "يأكلون"], answer: 2 },
    { level: 2, prompt: "What is the best translation of سَأَزُورُ صَدِيقِي غَدًا؟", promptArabic: "ما أفضل ترجمة للجملة؟", options: ["I visited my friend yesterday.", "I am visiting my friend now.", "I will visit my friend tomorrow.", "My friend visits me every day."], answer: 2 },
    { level: 2, prompt: "Complete: لَمْ ___ الطالبةُ الواجبَ.", promptArabic: "أكمل: لَمْ ___ الطالبةُ الواجبَ.", options: ["تكتبْ", "كتبتْ", "تكتبُ", "يكتبْ"], answer: 0 },
    { level: 2, prompt: "Read: يذهب خالد إلى الجامعة بالحافلة كل صباح. How does Khalid go?", promptArabic: "اقرأ: يذهب خالد إلى الجامعة بالحافلة كل صباح. كيف يذهب خالد؟", options: ["By car", "On foot", "By bus", "By train"], answer: 2 },
    { level: 3, prompt: "Choose the sentence with the correct relative pronoun: هذا هو الكتاب ___ قرأتُه.", promptArabic: "اختر الجملة الصحيحة: هذا هو الكتاب ___ قرأتُه.", options: ["الذي", "التي", "الذين", "اللذان"], answer: 0 },
    { level: 3, prompt: "What does لَوْ كُنْتُ أَعْرِفُ لَأَجَبْتُ mean?", promptArabic: "ما معنى الجملة؟", options: ["If I knew, I would have answered.", "Because I knew, I answered.", "I know that I will answer.", "I asked whether he knew."], answer: 0 },
    { level: 3, prompt: "Read: مع أن الطريق كان طويلًا، وصلنا في الوقت المحدد. What happened?", promptArabic: "اقرأ: مع أن الطريق كان طويلًا، وصلنا في الوقت المحدد. ماذا حدث؟", options: ["They arrived late.", "They did not travel.", "They arrived on time despite the long road.", "They shortened the road."], answer: 2 },
    { level: 3, prompt: "Choose the best completion: درستُ العربيةَ ___ أستطيعَ قراءةَ الكتبِ القديمةِ.", promptArabic: "أكمل: درستُ العربيةَ ___ أستطيعَ قراءةَ الكتبِ القديمةِ.", options: ["لأن", "حتى", "لكن", "إذا"], answer: 1 }
];

const placementLevels = [
    { title: "Level 0 · Foundations", guidance: "Start with the foundations track: script, essential vocabulary, and simple sentences." },
    { title: "Level 1 · Building sentences", guidance: "Start with Level 1: everyday communication, present tense, and core sentence patterns." },
    { title: "Level 2 · Developing fluency", guidance: "Start with Level 2: connected sentences, past and future forms, and practical reading." },
    { title: "Level 3 · Reading with confidence", guidance: "Start with Level 3: longer texts, connectors, relative clauses, and nuanced grammar." }
];

const placementForm = document.querySelector("#placementForm");
const placementQuestionsElement = document.querySelector("#placementQuestions");
const placementProgressText = document.querySelector("#placementProgressText");
const placementProgressBar = document.querySelector("#placementProgressBar");
const placementError = document.querySelector("#placementError");
const placementResult = document.querySelector("#placementResult");
const placementRetake = document.querySelector("#placementRetake");

function renderPlacementQuestions() {
    placementQuestionsElement.innerHTML = placementQuestions.map(function (question, index) {
        return `
            <fieldset class="placementQuestion">
                <legend><span>${index + 1}</span><strong>${question.prompt}</strong></legend>
                <p lang="ar" dir="rtl">${question.promptArabic}</p>
                <div class="placementOptions">
                    ${question.options.map(function (option, optionIndex) {
                        return `
                            <label>
                                <input type="radio" name="question-${index}" value="${optionIndex}">
                                <span>${option}</span>
                            </label>
                        `;
                    }).join("")}
                </div>
            </fieldset>
        `;
    }).join("");
}

function updatePlacementProgress() {
    const answered = placementQuestions.filter(function (_, index) {
        return placementForm.querySelector(`input[name="question-${index}"]:checked`);
    }).length;
    placementProgressText.textContent = `${answered} of ${placementQuestions.length} answered`;
    placementProgressBar.style.width = `${(answered / placementQuestions.length) * 100}%`;
}

function getPlacementResult() {
    const scores = placementLevels.map(function (_, level) {
        return placementQuestions.reduce(function (score, question, index) {
            if (question.level !== level) {
                return score;
            }
            const selected = placementForm.querySelector(`input[name="question-${index}"]:checked`);
            return score + (selected && Number(selected.value) === question.answer ? 1 : 0);
        }, 0);
    });
    const total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    let recommendedLevel = 0;
    scores.forEach(function (score, level) {
        if (score >= 3 && scores.slice(0, level).every(function (priorScore) { return priorScore >= 3; })) {
            recommendedLevel = level;
        }
    });
    return { scores: scores, total: total, recommendedLevel: recommendedLevel };
}

function savePlacementResult(result) {
    localStorage.setItem("madarijPlacementResult", JSON.stringify({
        ...result,
        completedAt: new Date().toISOString()
    }));
    localStorage.removeItem("madarijPlacementDismissed");
}

function showPlacementResult(result) {
    document.querySelector("#placementResultTitle").textContent = placementLevels[result.recommendedLevel].title;
    document.querySelector("#placementResultScore").textContent = `You answered ${result.total} of ${placementQuestions.length} correctly.`;
    document.querySelector("#placementResultBreakdown").innerHTML = result.scores.map(function (score, level) {
        return `<div><strong>${score}/4</strong><span>${placementLevels[level].title}</span></div>`;
    }).join("");
    document.querySelector("#placementResultGuidance").textContent = placementLevels[result.recommendedLevel].guidance;
    placementForm.hidden = true;
    placementResult.hidden = false;
    placementResult.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (placementForm) {
    renderPlacementQuestions();
    placementForm.addEventListener("change", updatePlacementProgress);
    placementForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const unanswered = placementQuestions.findIndex(function (_, index) {
            return !placementForm.querySelector(`input[name="question-${index}"]:checked`);
        });
        if (unanswered !== -1) {
            placementError.hidden = false;
            placementError.textContent = `Please answer question ${unanswered + 1} before seeing your placement.`;
            placementForm.querySelector(`input[name="question-${unanswered}"]`).focus();
            return;
        }
        placementError.hidden = true;
        const result = getPlacementResult();
        savePlacementResult(result);
        showPlacementResult(result);
    });
    placementRetake.addEventListener("click", function () {
        placementForm.reset();
        updatePlacementProgress();
        placementResult.hidden = true;
        placementForm.hidden = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
