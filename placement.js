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
    { title: "Level 0 · Foundations", guidance: "Start with the foundations track: script, essential vocabulary, and simple sentences.", start: "Begin at Level 0. Build comfort with the Arabic script, high-frequency words, and short nominal sentences before moving ahead.", focus: "Script, essential vocabulary, gender, demonstratives, and basic reading." },
    { title: "Level 1 · Building sentences", guidance: "Start with Level 1: everyday communication, present tense, and core sentence patterns.", start: "Begin at Level 1. Your foundation is developing; focus on building accurate everyday sentences and speaking about familiar topics.", focus: "Present-tense verbs, agreement, prepositions, questions, and daily communication." },
    { title: "Level 2 · Developing fluency", guidance: "Start with Level 2: connected sentences, past and future forms, and practical reading.", start: "Begin at Level 2. Strengthen your ability to connect ideas and understand practical texts while reviewing any weaker earlier stage.", focus: "Past and future forms, negation, connected sentences, and practical reading." },
    { title: "Level 3 · Reading with confidence", guidance: "Start with Level 3: longer texts, connectors, relative clauses, and nuanced grammar.", start: "Begin at Level 3. You are ready for longer Arabic texts and more nuanced grammar; use the earlier tracks only for targeted review.", focus: "Longer texts, connectors, relative clauses, conditionals, and advanced grammar." }
];

const placementForm = document.querySelector("#placementForm");
const placementQuestionsElement = document.querySelector("#placementQuestions");
const placementProgressText = document.querySelector("#placementProgressText");
const placementProgressBar = document.querySelector("#placementProgressBar");
const placementError = document.querySelector("#placementError");
const placementResult = document.querySelector("#placementResult");
const placementRetake = document.querySelector("#placementRetake");
const placementPrevious = document.querySelector("#placementPrevious");
const placementNext = document.querySelector("#placementNext");
const placementSubmit = document.querySelector("#placementSubmit");
const placementQuestionNavigator = document.querySelector("#placementQuestionNavigator");
const placementExport = document.querySelector("#placementExport");
let currentQuestionIndex = 0;
let latestPlacementResult = null;

function renderPlacementQuestions() {
    placementQuestionsElement.innerHTML = placementQuestions.map(function (question, index) {
        return `
            <section class="placementQuestion" role="group" aria-labelledby="placement-question-${index}">
                <div class="placementQuestionHeading" id="placement-question-${index}" role="heading" aria-level="2">
                    <span>${index + 1}</span>
                    <strong>${question.prompt}</strong>
                </div>
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
                    <label class="placementSkipOption">
                        <input type="radio" name="question-${index}" value="skip">
                        <span>I don't know / skip</span>
                    </label>
                </div>
            </section>
        `;
    }).join("");
}

function renderQuestionNavigator() {
    placementQuestionNavigator.innerHTML = placementQuestions.map(function (_, index) {
        return `
            <button class="placementQuestionJump" type="button" data-question-index="${index}">
                <span>${index + 1}</span>
                <small>Unanswered</small>
            </button>
        `;
    }).join("");
}

function isQuestionAnswered(index) {
    return Boolean(placementForm.querySelector(`input[name="question-${index}"]:checked`));
}

function updateQuestionNavigator() {
    placementQuestionNavigator.querySelectorAll(".placementQuestionJump").forEach(function (button, index) {
        const answered = isQuestionAnswered(index);
        button.classList.toggle("placementQuestionJumpActive", index === currentQuestionIndex);
        button.classList.toggle("placementQuestionJumpAnswered", answered);
        button.setAttribute("aria-current", index === currentQuestionIndex ? "step" : "false");
        button.querySelector("small").textContent = answered ? "Answered" : "Unanswered";
    });
}

function updateQuestionVisibility() {
    placementQuestionsElement.querySelectorAll(".placementQuestion").forEach(function (question, index) {
        const isCurrent = index === currentQuestionIndex;
        question.hidden = !isCurrent;
        question.setAttribute("aria-hidden", String(!isCurrent));
    });
    placementPrevious.disabled = currentQuestionIndex === 0;
    placementNext.hidden = currentQuestionIndex === placementQuestions.length - 1;
    placementSubmit.hidden = currentQuestionIndex !== placementQuestions.length - 1;
    updateQuestionNavigator();
}

function updatePlacementProgress() {
    const answered = placementQuestions.filter(function (_, index) {
        return isQuestionAnswered(index);
    }).length;
    placementProgressText.textContent = `${answered} of ${placementQuestions.length} answered`;
    placementProgressBar.style.width = `${((currentQuestionIndex + 1) / placementQuestions.length) * 100}%`;
}

function getPlacementResult() {
    const scores = placementLevels.map(function (_, level) {
        return placementQuestions.reduce(function (score, question, index) {
            if (question.level !== level) {
                return score;
            }
            const selected = placementForm.querySelector(`input[name="question-${index}"]:checked`);
            return score + (selected && selected.value !== "skip" && Number(selected.value) === question.answer ? 1 : 0);
        }, 0);
    });
    const total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    let recommendedLevel = 0;
    scores.forEach(function (score, level) {
        if (score >= 3 && scores.slice(0, level).every(function (priorScore) { return priorScore >= 3; })) {
            recommendedLevel = level;
        }
    });
    const responses = placementQuestions.map(function (question, index) {
        const selected = placementForm.querySelector(`input[name="question-${index}"]:checked`);
        const selectedValue = selected ? selected.value : "unanswered";
        return {
            question: question,
            selectedValue: selectedValue,
            correct: selectedValue !== "skip" && Number(selectedValue) === question.answer
        };
    });
    return { scores: scores, total: total, recommendedLevel: recommendedLevel, responses: responses };
}

function savePlacementResult(result) {
    localStorage.setItem("madarijPlacementResult", JSON.stringify({
        ...result,
        completedAt: new Date().toISOString()
    }));
    localStorage.removeItem("madarijPlacementDismissed");
}

function showPlacementResult(result) {
    latestPlacementResult = result;
    document.querySelector("#placementResultTitle").textContent = placementLevels[result.recommendedLevel].title;
    document.querySelector("#placementResultScore").textContent = `You answered ${result.total} of ${placementQuestions.length} correctly.`;
    document.querySelector("#placementResultStart").textContent = placementLevels[result.recommendedLevel].start;
    document.querySelector("#placementResultBreakdown").innerHTML = result.scores.map(function (score, level) {
        const stage = placementLevels[level];
        const status = score >= 3 ? "Ready to progress" : "Review before progressing";
        return `<div><strong>${score}/4</strong><span>${stage.title}</span><small>${status}</small></div>`;
    }).join("");
    document.querySelector("#placementDetailedReport").innerHTML = result.scores.map(function (score, level) {
        const stage = placementLevels[level];
        return `
            <article class="placementStageReport">
                <div>
                    <h3>${stage.title}</h3>
                    <strong>${score}/4</strong>
                </div>
                <p><b>Focus:</b> ${stage.focus}</p>
                <p>${score >= 3 ? "You demonstrated enough control to move through this stage." : "Review this stage before relying on higher-level material."}</p>
            </article>
        `;
    }).join("");
    document.querySelector("#placementResultGuidance").textContent = placementLevels[result.recommendedLevel].guidance;
    placementForm.hidden = true;
    placementResult.hidden = false;
}

function reportEscape(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function exportPlacementReport() {
    if (!latestPlacementResult) {
        return;
    }

    const result = latestPlacementResult;
    const level = placementLevels[result.recommendedLevel];
    const reportWindow = window.open("", "_blank", "width=900,height=800");

    if (!reportWindow) {
        placementError.hidden = false;
        placementError.textContent = "The report window was blocked. Allow pop-ups to export your PDF.";
        return;
    }

    const stageRows = result.scores.map(function (score, stageIndex) {
        const stage = placementLevels[stageIndex];
        return `<section class="stage"><h2>${reportEscape(stage.title)} <span>${score}/4</span></h2><p><b>Focus:</b> ${reportEscape(stage.focus)}</p><p>${score >= 3 ? "Ready to progress through this stage." : "Review this stage before progressing."}</p></section>`;
    }).join("");
    const questionRows = result.responses.map(function (response, index) {
        const answer = response.selectedValue === "skip"
            ? "I don't know / skipped"
            : response.selectedValue === "unanswered"
                ? "Unanswered"
                : response.question.options[Number(response.selectedValue)];
        const status = response.correct ? "Correct" : response.selectedValue === "skip" ? "Skipped" : "Needs review";
        return `<tr><td>${index + 1}</td><td>${reportEscape(response.question.prompt)}</td><td>${reportEscape(answer)}</td><td>${status}</td></tr>`;
    }).join("");

    reportWindow.document.write(`
        <!doctype html>
        <html><head><title>Madarij Placement Report</title>
        <style>
            body{font:15px Arial,sans-serif;line-height:1.55;color:#1b1f1e;max-width:850px;margin:0 auto;padding:40px}
            h1,h2{color:#0f4c45} h1{font-size:30px} h2{border-bottom:1px solid #d9c897;padding-bottom:8px}
            .summary{background:#f3ead4;padding:18px;border-left:5px solid #c9a24b}
            .stage{border:1px solid #d8dedb;border-radius:8px;padding:14px;margin:12px 0}
            .stage h2{border:0;margin:0}.stage h2 span{float:right;color:#c9a24b}
            table{width:100%;border-collapse:collapse;margin-top:18px} th,td{border:1px solid #d8dedb;padding:8px;text-align:left;vertical-align:top} th{background:#0f4c45;color:#fff}
            .print{background:#0f4c45;color:#fff;border:0;padding:10px 16px;border-radius:5px;font-weight:bold}
            @media print{body{padding:0}.print{display:none}}
        </style></head><body>
        <button class="print" onclick="window.print()">Save / Print as PDF</button>
        <h1>Madarij Arabic Placement Report</h1>
        <p>Completed ${new Date().toLocaleDateString()}</p>
        <div class="summary"><h2>Recommended starting point: ${reportEscape(level.title)}</h2><p>${reportEscape(level.start)}</p><p><b>Overall score:</b> ${result.total}/${placementQuestions.length}</p></div>
        <h2>Stage-by-stage report</h2>${stageRows}
        <h2>Question review</h2><table><thead><tr><th>#</th><th>Question</th><th>Response</th><th>Result</th></tr></thead><tbody>${questionRows}</tbody></table>
        </body></html>
    `);
    reportWindow.document.close();
    reportWindow.focus();
}

if (placementForm) {
    renderPlacementQuestions();
    renderQuestionNavigator();
    updateQuestionVisibility();
    updatePlacementProgress();
    placementForm.addEventListener("change", function () {
        updatePlacementProgress();
        updateQuestionNavigator();
    });
    placementExport.addEventListener("click", exportPlacementReport);
    placementQuestionNavigator.addEventListener("click", function (event) {
        const jumpButton = event.target.closest(".placementQuestionJump");
        if (!jumpButton) {
            return;
        }
        currentQuestionIndex = Number(jumpButton.dataset.questionIndex);
        placementError.hidden = true;
        updateQuestionVisibility();
        updatePlacementProgress();
        placementQuestionsElement.querySelector(".placementQuestion:not([hidden]) input").focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    placementNext.addEventListener("click", function () {
        placementError.hidden = true;
        currentQuestionIndex += 1;
        updateQuestionVisibility();
        updatePlacementProgress();
        placementQuestionsElement.querySelector(".placementQuestion:not([hidden]) input").focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    placementPrevious.addEventListener("click", function () {
        if (currentQuestionIndex === 0) {
            return;
        }
        placementError.hidden = true;
        currentQuestionIndex -= 1;
        updateQuestionVisibility();
        updatePlacementProgress();
        placementQuestionsElement.querySelector(".placementQuestion:not([hidden]) input").focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
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
        currentQuestionIndex = 0;
        updatePlacementProgress();
        updateQuestionVisibility();
        placementResult.hidden = true;
        placementForm.hidden = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
