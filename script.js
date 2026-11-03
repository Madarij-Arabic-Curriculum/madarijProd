const hamburgerButton = document.querySelector(".hamburgerButton");
const nav = document.querySelector("nav");

if (hamburgerButton && nav) {
    hamburgerButton.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("navIsOpen");
        hamburgerButton.setAttribute("aria-expanded", isOpen);
        hamburgerButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
}

const vaultScene = document.querySelector(".vaultScene");

if (vaultScene) {
    window.setTimeout(function () {
        vaultScene.classList.add("vaultIsOpen");
    }, 250);

    window.setTimeout(function () {
        vaultScene.classList.add("vaultAnimationDone");
    }, 2300);
}

const vaultLevels = document.querySelector(".vaultLevels");
const materialSearch = document.querySelector("#materialSearch");
const materialSearchStatus = document.querySelector("#materialSearchStatus");
const materialSearchResults = document.querySelector(".vaultSearchResults");
const materialSearchList = document.querySelector("#materialSearchList");
const curriculumData = [
    {
        title: "Level 0",
        description: "Build a comfortable foundation for learning.",
        units: [
            {
                title: "Unit 1: Foundations",
                tracks: [
                    {
                        title: "Arabic Book",
                        sublevels: [
                            {
                                number: 1,
                                description: "Here is a sub-level description.",
                                lessons: [
                                    {
                                        title: "Getting Started",
                                        description: "Here is a short lesson description.",
                                        time: "15 min",
                                        materials: [
                                            { title: "Welcome guide", url: "#", keywords: ["welcome", "orientation", "start"] },
                                            { title: "Starting checklist", url: "#", keywords: ["checklist", "setup", "begin"] }
                                        ]
                                    },
                                    {
                                        title: "Learning Routine",
                                        description: "Here is another short lesson description.",
                                        time: "20 min",
                                        materials: [
                                            { title: "Routine overview", url: "#", keywords: ["routine", "schedule", "study"] },
                                            { title: "Practice worksheet", url: "#", keywords: ["practice", "worksheet", "activity"] }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Another Arabic Book",
                        sublevels: [
                            {
                                number: 1,
                                description: "Practice the foundations with guided activities.",
                                lessons: [
                                    {
                                        title: "Guided Practice",
                                        description: "Work through a guided practice session.",
                                        time: "20 min",
                                        materials: [
                                            { title: "Practice guide", url: "#", keywords: ["practice", "guide", "foundations"] },
                                            { title: "Activity sheet", url: "#", keywords: ["activity", "sheet", "practice"] }
                                        ]
                                    },
                                    {
                                        title: "Practice Review",
                                        description: "Review the key ideas from this track.",
                                        time: "15 min",
                                        materials: [
                                            { title: "Review worksheet", url: "#", keywords: ["review", "worksheet", "practice"] },
                                            { title: "Progress checklist", url: "#", keywords: ["progress", "checklist", "tracking"] }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                                title: "A third Arabic book",
                                sublevels: [
                                    {
                                        number: 1,
                                        description: "Build on the Arabic foundations with another guided sequence.",
                                        lessons: [
                                            {
                                                title: "Arabic Practice",
                                                description: "Practice the next set of Arabic skills.",
                                                time: "20 min",
                                                materials: [
                                                    { title: "Arabic practice guide", url: "#", keywords: ["arabic", "practice", "guide"] },
                                                    { title: "Vocabulary activity", url: "#", keywords: ["vocabulary", "activity", "arabic"] }
                                                ]
                                            },
                                            {
                                                title: "Arabic Review",
                                                description: "Review the main ideas from this book.",
                                                time: "15 min",
                                                materials: [
                                                    { title: "Arabic review sheet", url: "#", keywords: ["arabic", "review", "sheet"] },
                                                    { title: "Progress notes", url: "#", keywords: ["progress", "notes", "review"] }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: "Maybe an intro book about Seerah",
                                sublevels: [
                                    {
                                        number: 1,
                                        description: "An introductory look at Seerah and its place in learning.",
                                        lessons: [
                                            {
                                                title: "What Is Seerah?",
                                                description: "Begin with an introduction to the study of Seerah.",
                                                time: "20 min",
                                                materials: [
                                                    { title: "Seerah introduction", url: "#", keywords: ["seerah", "introduction", "history"] },
                                                    { title: "Beginning questions", url: "#", keywords: ["seerah", "questions", "start"] }
                                                ]
                                            },
                                            {
                                                title: "Early Life Overview",
                                                description: "Explore an overview of the early life of the Prophet.",
                                                time: "25 min",
                                                materials: [
                                                    { title: "Early life notes", url: "#", keywords: ["seerah", "early life", "notes"] },
                                                    { title: "Reflection activity", url: "#", keywords: ["seerah", "reflection", "activity"] }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
    },
    {
        title: "Level 1",
        description: "Explore the first core lessons.",
        units: [
            {
                title: "Unit 1: Core Concepts",
                tracks: [
                    {
                        title: "Core Concepts Book",
                        sublevels: [
                            {
                                number: 1,
                                description: "Here is another sub-level description.",
                                lessons: [
                            {
                                title: "Core Lesson One",
                                description: "Here is a description for the first core lesson.",
                                time: "25 min",
                                materials: [
                                    { title: "Lesson notes", url: "#", keywords: ["notes", "core", "lesson"] },
                                    { title: "Vocabulary sheet", url: "#", keywords: ["vocabulary", "words", "review"] },
                                    { title: "Practice activity", url: "#", keywords: ["practice", "activity", "exercise"] }
                                ]
                            },
                            {
                                title: "Review and Reflect",
                                description: "Here is a description for a review lesson.",
                                time: "15 min",
                                materials: [
                                    { title: "Review questions", url: "#", keywords: ["review", "questions", "check"] },
                                    { title: "Reflection prompt", url: "#", keywords: ["reflection", "writing", "response"] }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Level 2",
        description: "Build on earlier ideas with new topics.",
        units: [
            {
                title: "Unit 1: Building Skills",
                tracks: [
                    {
                        title: "Building Skills Book",
                        sublevels: [
                            {
                                number: 1,
                                description: "Here is a third sub-level description.",
                                lessons: [
                            {
                                title: "Building Connections",
                                description: "Here is a description for a lesson about connections.",
                                time: "30 min",
                                materials: [
                                    { title: "Lesson notes", url: "#", keywords: ["notes", "connections", "ideas"] },
                                    { title: "Example set", url: "#", keywords: ["examples", "reference", "skills"] }
                                ]
                            },
                            {
                                title: "Guided Practice",
                                description: "Here is a description for a guided practice lesson.",
                                time: "25 min",
                                materials: [
                                    { title: "Guided activity", url: "#", keywords: ["guided", "activity", "practice"] },
                                    { title: "Progress checklist", url: "#", keywords: ["progress", "checklist", "tracking"] }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Level 3",
        description: "Bring the pathway together and prepare for what comes next.",
        units: [
            {
                title: "Unit 1: Moving Forward",
                tracks: [
                    {
                        title: "Moving Forward Book",
                        sublevels: [
                            {
                                number: 1,
                                description: "Here is a fourth sub-level description.",
                                lessons: [
                            {
                                title: "Putting It Together",
                                description: "Here is a description for bringing ideas together.",
                                time: "35 min",
                                materials: [
                                    { title: "Lesson notes", url: "#", keywords: ["notes", "application", "review"] },
                                    { title: "Application activity", url: "#", keywords: ["application", "activity", "put together"] }
                                ]
                            },
                            {
                                title: "Next Steps Review",
                                description: "Here is a description for reviewing the next steps.",
                                time: "20 min",
                                materials: [
                                    { title: "Review guide", url: "#", keywords: ["review", "guide", "next steps"] },
                                    { title: "Personal goals worksheet", url: "#", keywords: ["goals", "worksheet", "planning"] }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function createMaterialList(materials) {
    return materials.map(function (material) {
        return `
            <li class="materialItem">
                <span>${escapeHtml(material.title)}</span>
                <span class="materialActions">
                    <button class="materialDownload" type="button" data-material="${escapeHtml(material.title)}">
                        Download
                    </button>
                    <button class="materialView" type="button" data-material="${escapeHtml(material.title)}">
                        View
                    </button>
                    <button class="materialPrint" type="button" data-material="${escapeHtml(material.title)}">
                        Print
                    </button>
                </span>
            </li>
        `;
    }).join("");
}

function createLesson(lesson) {
    return `
        <div class="vaultLesson">
            <div class="vaultLessonRow">
                <button class="vaultLessonToggle" type="button" aria-expanded="false">
                    <span class="vaultLessonName">
                        <span class="vaultLessonChevron" aria-hidden="true">›</span>
                        <span class="vaultLessonText">
                            <span class="vaultLessonTitle">${escapeHtml(lesson.title)}</span>
                            <span class="vaultLessonDescription">${escapeHtml(lesson.description)}</span>
                        </span>
                    </span>
                    <span class="vaultLessonTime">${escapeHtml(lesson.time)}</span>
                </button>
                <div class="lessonSupport">
                    <button class="supportToggle" type="button" aria-expanded="false">
                        Options
                    </button>
                    <div class="supportMenu">
                        <p>All of these options are free.</p>
                        <button type="button">Book live session</button>
                        <button type="button">Request video demo</button>
                        <button type="button">Request assessment</button>
                        <button type="button">Ask a question</button>
                        <button type="button">Contact an instructor</button>
                    </div>
                </div>
            </div>
            <div class="vaultMaterials">
                <p>Materials</p>
                <ul>${createMaterialList(lesson.materials)}</ul>
            </div>
        </div>
    `;
}

function createSublevel(sublevel) {
    return `
        <section class="vaultSublevel">
            <h3>Sub-level ${sublevel.number}</h3>
            <p class="vaultSublevelDescription">${escapeHtml(sublevel.description)}</p>
            ${sublevel.lessons.map(createLesson).join("")}
        </section>
    `;
}

function createTrack(track) {
    const sublevels = track.sublevels
        ? track.sublevels.map(createSublevel).join("")
        : `<p class="vaultLessonsLabel">Lessons</p>${track.lessons.map(createLesson).join("")}`;

    return `
        <section class="vaultTrack">
            <button class="vaultTrackToggle" type="button" aria-expanded="false">
                <span>
                    <strong>${escapeHtml(track.title)}</strong>
                    <small>Track / book</small>
                </span>
                <span class="vaultToggleIcon" aria-hidden="true">+</span>
            </button>
            <div class="vaultTrackLessons">
                ${sublevels}
            </div>
        </section>
    `;
}

function createUnit(unit) {
    const tracks = unit.tracks
        ? unit.tracks.map(createTrack).join("")
        : createTrack(unit);

    return `
        <section class="vaultUnit">
            <button class="vaultUnitToggle" type="button" aria-expanded="false">
                <strong>${escapeHtml(unit.title)}</strong>
                <span class="vaultToggleIcon" aria-hidden="true">+</span>
            </button>
            <div class="vaultUnitLessons">
                <p class="vaultLessonsLabel">Tracks / books</p>
                ${tracks}
            </div>
        </section>
    `;
}

function createLevelTabs(levels) {
    return `
        <div class="vaultLevelTabs" role="tablist" aria-label="Curriculum levels">
            ${levels.map(function (level, index) {
                return `
                    <button
                        class="vaultLevelTab${index === 0 ? " vaultLevelTabActive" : ""}"
                        type="button"
                        role="tab"
                        aria-selected="${index === 0}"
                        data-level-index="${index}">
                        <strong>${escapeHtml(level.title)}</strong>
                        <small>${escapeHtml(level.description)}</small>
                    </button>
                `;
            }).join("")}
        </div>
    `;
}

function createLevelPanels(levels) {
    return `
        <div class="vaultLevelPanels">
            ${levels.map(function (level, index) {
                return `
                    <section
                        class="vaultLevelPanel${index === 0 ? " vaultLevelPanelActive" : ""}"
                        data-level-panel="${index}"
                        role="tabpanel">
                        <p class="vaultLessonsLabel">Units</p>
                        ${level.units.map(createUnit).join("")}
                    </section>
                `;
            }).join("")}
        </div>
    `;
}

function updateOpenContainers(element) {
    let container = element.closest(".vaultTrackLessons, .vaultUnitLessons");

    while (container) {
        if (container.parentElement.classList.contains("vaultTrackIsOpen")
            || container.parentElement.classList.contains("vaultUnitIsOpen")) {
            container.style.maxHeight = `${container.scrollHeight}px`;
        }

        container = container.parentElement.closest(".vaultTrackLessons, .vaultUnitLessons");
    }
}

function setExpandableState(toggle, container, isOpen) {
    toggle.setAttribute("aria-expanded", isOpen);
    container.style.maxHeight = isOpen ? `${container.scrollHeight}px` : "0px";
}

function updateAllOpenContainers() {
    document.querySelectorAll(".vaultTrackIsOpen .vaultTrackLessons, .vaultUnitIsOpen .vaultUnitLessons")
        .forEach(function (container) {
            container.style.maxHeight = "none";
            container.style.maxHeight = `${container.scrollHeight}px`;
        });
}

function getAllMaterials(levels) {
    return levels.flatMap(function (level) {
        return level.units.flatMap(function (unit) {
            const tracks = unit.tracks || [unit];
            return tracks.flatMap(function (track) {
                const lessons = track.sublevels
                    ? track.sublevels.flatMap(function (sublevel) { return sublevel.lessons; })
                    : track.lessons;
                return lessons.flatMap(function (lesson) {
                    return lesson.materials.map(function (material) {
                        return {
                            material: material,
                            level: level.title,
                            unit: unit.title,
                            track: track.title,
                            lesson: lesson.title
                        };
                    });
                });
            });
        });
    });
}

function renderMaterialSearch(query) {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = getAllMaterials(curriculumData).filter(function (item) {
        const searchableText = [
            item.material.title,
            item.material.keywords.join(" "),
            item.level,
            item.unit,
            item.track,
            item.lesson
        ].join(" ").toLowerCase();
        return searchableText.includes(normalizedQuery);
    });

    materialSearchResults.hidden = normalizedQuery.length === 0;

    if (!normalizedQuery) {
        materialSearchStatus.textContent = "";
        materialSearchList.innerHTML = "";
        return;
    }

    materialSearchStatus.textContent = `${matches.length} material${matches.length === 1 ? "" : "s"} found.`;
    materialSearchList.innerHTML = matches.length
        ? matches.map(function (item) {
            return `
                <article class="materialSearchResult">
                    <div>
                        <strong>${escapeHtml(item.material.title)}</strong>
                        <small>${escapeHtml(item.level)} / ${escapeHtml(item.unit)} / ${escapeHtml(item.track)} / ${escapeHtml(item.lesson)}</small>
                        <p>${escapeHtml(item.material.keywords.join(", "))}</p>
                    </div>
                    <button class="materialView" type="button" data-material="${escapeHtml(item.material.title)}">
                        View
                    </button>
                </article>
            `;
        }).join("")
        : `<p class="vaultSearchEmpty">No materials match that search.</p>`;
}

if (vaultLevels) {
    vaultLevels.innerHTML = createLevelTabs(curriculumData) + createLevelPanels(curriculumData);

    materialSearch.addEventListener("input", function () {
        renderMaterialSearch(materialSearch.value);
    });

    window.addEventListener("resize", updateAllOpenContainers);

    vaultLevels.addEventListener("click", function (event) {
        const levelToggle = event.target.closest(".vaultLevelTab");
        const unitToggle = event.target.closest(".vaultUnitToggle");
        const lessonToggle = event.target.closest(".vaultLessonToggle");
        const supportToggle = event.target.closest(".supportToggle");

        if (levelToggle) {
            const selectedIndex = levelToggle.dataset.levelIndex;
            vaultLevels.querySelectorAll(".vaultLevelTab").forEach(function (tab) {
                const isSelected = tab === levelToggle;
                tab.classList.toggle("vaultLevelTabActive", isSelected);
                tab.setAttribute("aria-selected", isSelected);
            });
            vaultLevels.querySelectorAll(".vaultLevelPanel").forEach(function (panel) {
                panel.classList.toggle(
                    "vaultLevelPanelActive",
                    panel.dataset.levelPanel === selectedIndex
                );
            });
        }
    });
}

const dictionarySearch = document.querySelector("#dictionarySearch");
const dictionaryWordList = document.querySelector("#dictionaryWordList");
const dictionaryEntry = document.querySelector("#dictionaryEntry");
const dictionarySearchStatus = document.querySelector("#dictionarySearchStatus");
const arabicKeyboard = document.querySelector("#arabicKeyboard");

const dictionaryWords = [
    {
        word: "Book",
        arabic: "كِتَاب",
        wordType: "Noun",
        root: "ك ت ب",
        definition: "A written or printed work made of pages, or the idea of reading and learning from one.",
        nounForms: { singular: "كِتَابٌ", dual: "كِتَابَانِ", plural: "كُتُبٌ" },
        examples: [
            { arabic: "هَذَا كِتَابٌ مُفِيدٌ لِلطَّالِبِ.", english: "This is a useful book for the student." },
            { arabic: "قَرَأْتُ كِتَابَيْنِ فِي العُطْلَةِ.", english: "I read two books during the holiday." },
            { arabic: "وَضَعْتُ الكُتُبَ عَلَى الرَّفِّ.", english: "I put the books on the shelf." }
        ],
        trend: "Common in learning, publishing, and everyday conversation.",
        connotations: "Knowledge, study, discovery, and a trusted source of ideas.",
        arabicSynonyms: [
            { word: "مُؤَلَّف", score: 96 },
            { word: "مَجْمُوعَة", score: 72 },
            { word: "مُجَلَّد", score: 84 },
            { word: "سِفْر", score: 68 },
            { word: "مَنْشُور", score: 61 }
        ],
        englishSynonyms: [
            { word: "volume", score: 95 },
            { word: "text", score: 84 },
            { word: "publication", score: 76 },
            { word: "work", score: 69 },
            { word: "tome", score: 63 }
        ]
    },
    {
        word: "Friend",
        arabic: "صَدِيق",
        wordType: "Noun",
        root: "ص د ق",
        definition: "A person with whom one shares affection, trust, and mutual support.",
        nounForms: { singular: "صَدِيقٌ", dual: "صَدِيقَانِ", plural: "أَصْدِقَاءُ" },
        examples: [
            { arabic: "صَدِيقِي يُسَاعِدُنِي فِي دِرَاسَةِ العَرَبِيَّةِ.", english: "My friend helps me study Arabic." },
            { arabic: "جَاءَ صَدِيقَانِ إِلَى البَيْتِ.", english: "Two friends came to the house." },
            { arabic: "الأَصْدِقَاءُ يَتَعَاوَنُونَ فِي العَمَلِ.", english: "Friends cooperate at work." }
        ],
        trend: "Frequent in personal stories, introductions, and social conversation.",
        connotations: "Warmth, loyalty, companionship, and belonging.",
        arabicSynonyms: [
            { word: "رَفِيق", score: 94 },
            { word: "صَاحِب", score: 90 },
            { word: "خَلِيل", score: 82 },
            { word: "زَمِيل", score: 71 },
            { word: "قَرِين", score: 65 }
        ],
        englishSynonyms: [
            { word: "companion", score: 94 },
            { word: "pal", score: 91 },
            { word: "ally", score: 78 },
            { word: "associate", score: 69 },
            { word: "acquaintance", score: 52 }
        ]
    },
    {
        word: "School",
        arabic: "مَدْرَسَة",
        wordType: "Noun",
        root: "د ر س",
        definition: "A place or community where people learn, study, and develop skills.",
        nounForms: { singular: "مَدْرَسَةٌ", dual: "مَدْرَسَتَانِ", plural: "مَدَارِسُ" },
        examples: [
            { arabic: "تَذْهَبُ لَيْلَى إِلَى المَدْرَسَةِ كُلَّ يَوْمٍ.", english: "Layla goes to school every day." },
            { arabic: "زَارَتِ المُعَلِّمَةُ مَدْرَسَتَيْنِ جَدِيدَتَيْنِ.", english: "The teacher visited two new schools." },
            { arabic: "تَفْتَحُ المَدَارِسُ أَبْوَابَهَا فِي الصَّبَاحِ.", english: "Schools open their doors in the morning." }
        ],
        trend: "Common in education, family, and community conversations.",
        connotations: "Growth, structure, curiosity, and shared learning.",
        arabicSynonyms: [
            { word: "مَعْهَد", score: 88 },
            { word: "مَدْرَس", score: 81 },
            { word: "كُلِّيَّة", score: 64 },
            { word: "جَامِعَة", score: 58 },
            { word: "مَرْكَزٌ تَعْلِيمِيٌّ", score: 55 }
        ],
        englishSynonyms: [
            { word: "academy", score: 88 },
            { word: "institute", score: 84 },
            { word: "educational center", score: 72 },
            { word: "academy", score: 67 },
            { word: "learning center", score: 63 }
        ]
    },
    {
        word: "Teach",
        arabic: "عَلَّمَ",
        wordType: "Verb",
        root: "ع ل م",
        definition: "To help someone gain knowledge or a skill through instruction.",
        verbForms: {
            baab: "بَابُ التَّفْعِيلِ",
            madi: "عَلَّمَ",
            mudari: "يُعَلِّمُ",
            masdar: "تَعْلِيم",
            faail: "مُعَلِّم",
            mafool: "مُعَلَّم",
            zarf: "لا ينطبق على هذا الفعل",
            ala: "لا ينطبق على هذا الفعل"
        },
        baabTable: [
            ["هُوَ", "عَلَّمَ", "يُعَلِّمُ"],
            ["هُمَا (م)", "عَلَّمَا", "يُعَلِّمَانِ"],
            ["هُمْ", "عَلَّمُوا", "يُعَلِّمُونَ"],
            ["هِيَ", "عَلَّمَتْ", "تُعَلِّمُ"],
            ["هُمَا (ف)", "عَلَّمَتَا", "تُعَلِّمَانِ"],
            ["هُنَّ", "عَلَّمْنَ", "يُعَلِّمْنَ"],
            ["أَنْتَ", "عَلَّمْتَ", "تُعَلِّمُ"],
            ["أَنْتُمَا", "عَلَّمْتُمَا", "تُعَلِّمَانِ"],
            ["أَنْتُمْ", "عَلَّمْتُمْ", "تُعَلِّمُونَ"],
            ["أَنْتِ", "عَلَّمْتِ", "تُعَلِّمِينَ"],
            ["أَنْتُنَّ", "عَلَّمْتُنَّ", "تُعَلِّمْنَ"],
            ["أَنَا", "عَلَّمْتُ", "أُعَلِّمُ"],
            ["نَحْنُ", "عَلَّمْنَا", "نُعَلِّمُ"],
            ["أَنْتُمَا (ف)", "عَلَّمْتُمَا", "تُعَلِّمَانِ"]
        ],
        examples: [
            { arabic: "يُعَلِّمُ الأُسْتَاذُ الطُّلَّابَ القِرَاءَةَ.", english: "The teacher teaches the students to read." },
            { arabic: "عَلَّمَتْ أُمِّي أُخْتِي الطَّبْخَ.", english: "My mother taught my sister to cook." },
            { arabic: "نُعَلِّمُ الأَطْفَالَ بِالحُبِّ وَالصَّبْرِ.", english: "We teach children with love and patience." },
            { arabic: "سَوْفَ يُعَلِّمُنَا هَذَا الدَّرْسُ مَعْنًى جَدِيدًا.", english: "This lesson will teach us a new meaning." }
        ],
        trend: "Frequent in education, mentoring, training, and family conversations.",
        connotations: "Growth, guidance, generosity, and passing knowledge forward.",
        arabicSynonyms: [
            { word: "دَرَّسَ", score: 94 },
            { word: "أَرْشَدَ", score: 78 },
            { word: "لَقَّنَ", score: 73 },
            { word: "هَذَّبَ", score: 61 },
            { word: "وَجَّهَ", score: 58 }
        ],
        englishSynonyms: [
            { word: "educate", score: 94 },
            { word: "instruct", score: 91 },
            { word: "train", score: 82 },
            { word: "coach", score: 76 },
            { word: "mentor", score: 67 }
        ]
    }
].sort(function (first, second) {
    return first.arabic.localeCompare(second.arabic, "ar");
});

function createDictionaryList(words, selectedWord) {
    return words.map(function (entry) {
        const isSelected = entry.word === selectedWord;
        return `
                    <button class="dictionaryWord${isSelected ? " dictionaryWordActive" : ""}" type="button"
                        data-dictionary-word="${escapeHtml(entry.word)}" aria-pressed="${isSelected}" lang="ar" dir="rtl">
                        <strong>${escapeHtml(entry.arabic)}</strong>
                    </button>
                `;
    }).join("");
}

const arabicKeyboardLetters = [
    "ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز",
    "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك",
    "ل", "م", "ن", "ه", "و", "ي", "ة", "ى", "ء"
];

if (arabicKeyboard) {
    arabicKeyboard.innerHTML = arabicKeyboardLetters.map(function (letter) {
        return `<button type="button" class="arabicKeyboardKey" data-arabic-letter="${letter}" lang="ar">${letter}</button>`;
    }).join("") + `<button type="button" class="arabicKeyboardSpace" data-arabic-letter=" ">مسافة</button>
        <button type="button" class="arabicKeyboardBackspace" aria-label="Delete last letter">⌫</button>`;
}

function createDictionaryListItems(items) {
    return items.map(function (item) {
        return `
            <li>
                <span class="dictionaryExampleArabic" lang="ar" dir="rtl">${escapeHtml(item.arabic)}</span>
                <span class="dictionaryExampleEnglish">${escapeHtml(item.english)}</span>
            </li>
        `;
    }).join("");
}

function createSarfDetails(entry) {
    if (entry.wordType === "Noun") {
        return `
            <section class="dictionaryCard">
                <span class="dictionaryLabel">Sarf details · Noun</span>
                <div class="dictionaryFormsGrid">
                    <div><small>Singular</small><strong lang="ar" dir="rtl">${escapeHtml(entry.nounForms.singular)}</strong></div>
                    <div><small>Dual</small><strong lang="ar" dir="rtl">${escapeHtml(entry.nounForms.dual)}</strong></div>
                </div>
            </section>
        `;
    }

    return `
        <section class="dictionaryCard">
            <span class="dictionaryLabel">Sarf details · Verb</span>
            <div class="dictionaryFormsGrid">
                <div><small>مَاضٍ</small><strong lang="ar" dir="rtl">${escapeHtml(entry.verbForms.madi)}</strong></div>
                <div><small>مُضَارِع</small><strong lang="ar" dir="rtl">${escapeHtml(entry.verbForms.mudari)}</strong></div>
                <div><small>مَصْدَر</small><strong lang="ar" dir="rtl">${escapeHtml(entry.verbForms.masdar)}</strong></div>
            </div>
        </section>
        <section class="dictionaryCard dictionaryCardWide dictionaryBaabCard">
            <span class="dictionaryLabel">Sarf details · Verb</span>
            <div class="dictionaryBaabSummary">
                <div>
                    <span class="dictionaryBaabName" lang="ar" dir="rtl">${escapeHtml(entry.verbForms.baab)}</span>
                    <p>Click to study the complete Baab conjugation table.</p>
                </div>
                <button class="dictionaryBaabToggle" type="button" aria-expanded="false">View full Baab table</button>
            </div>
            <div class="dictionaryBaabTable" hidden>
                <div class="dictionaryBaabIdentification">
                    <div><small>مَاضٍ</small><strong lang="ar" dir="rtl">${escapeHtml(entry.verbForms.madi)}</strong></div>
                    <div><small>مُضَارِع</small><strong lang="ar" dir="rtl">${escapeHtml(entry.verbForms.mudari)}</strong></div>
                    <div><small>مَصْدَر</small><strong lang="ar" dir="rtl">${escapeHtml(entry.verbForms.masdar)}</strong></div>
                </div>
                <div class="dictionaryTableScroll">
                    <table>
                        <thead>
                            <tr><th>Pronoun</th><th>مَاضٍ</th><th>مُضَارِع</th></tr>
                        </thead>
                        <tbody>
                            ${entry.baabTable.map(function (form) {
                                return `<tr><th>${escapeHtml(form[0])}</th><td lang="ar" dir="rtl">${escapeHtml(form[1])}</td><td lang="ar" dir="rtl">${escapeHtml(form[2])}</td></tr>`;
                            }).join("")}
                        </tbody>
                    </table>
                </div>
                <div class="dictionaryDerivedForms">
                    <div><small>اِسْمُ الفَاعِلِ</small><strong lang="ar" dir="rtl">${escapeHtml(entry.verbForms.faail)}</strong></div>
                    <div><small>اِسْمُ المَفْعُولِ</small><strong lang="ar" dir="rtl">${escapeHtml(entry.verbForms.mafool)}</strong></div>
                    <div><small>الظَّرْفُ</small><strong lang="ar" dir="rtl">${escapeHtml(entry.verbForms.zarf)}</strong></div>
                    <div><small>اِسْمُ الآلَةِ</small><strong lang="ar" dir="rtl">${escapeHtml(entry.verbForms.ala)}</strong></div>
                </div>
            </div>
        </section>
    `;
}

function renderDictionaryEntry(entry) {
    dictionaryEntry.innerHTML = `
                <div class="dictionaryEntryHeading">
                    <div>
                        <p class="sectionLabel">Dictionary entry</p>
                        <p class="dictionaryPronunciation">${escapeHtml(entry.wordType)}</p>
                    </div>
                    <div class="dictionaryArabic" lang="ar" dir="rtl">${escapeHtml(entry.arabic)}</div>
                </div>

                <div class="dictionaryDefinition">
                    <span class="dictionaryLabel">English translation</span>
                    <p class="dictionaryTranslation">${escapeHtml(entry.word)}</p>
                    <span class="dictionaryLabel dictionaryDefinitionLabel">Definition</span>
                    <p>${escapeHtml(entry.definition)}</p>
                </div>

                <div class="dictionaryDetailGrid">
                    <section class="dictionaryCard">
                        <span class="dictionaryLabel">Root</span>
                        <p class="dictionaryRoot" lang="ar" dir="rtl">${escapeHtml(entry.root)}</p>
                    </section>
                    ${createSarfDetails(entry)}
                    <section class="dictionaryCard dictionaryCardWide">
                        <span class="dictionaryLabel">Example sentences</span>
                        <ul>${createDictionaryListItems(entry.examples)}</ul>
                    </section>
                    <section class="dictionaryCard">
                        <span class="dictionaryLabel">Usage trends</span>
                        <p>${escapeHtml(entry.trend)}</p>
                        <div class="dictionaryTrend" aria-label="High usage trend"><span></span></div>
                    </section>
                    <section class="dictionaryCard">
                        <span class="dictionaryLabel">Usage connotations</span>
                        <p>${escapeHtml(entry.connotations)}</p>
                    </section>
                </div>

                <div class="dictionarySynonyms">
                    <section>
                        <span class="dictionaryLabel">Synonyms in Arabic</span>
                        <div class="dictionaryPills" lang="ar" dir="rtl">
                            ${entry.arabicSynonyms.map(function (item) {
                                return `
                                    <div class="dictionarySynonym">
                                        <span class="dictionarySynonymWord">${escapeHtml(item.word)}</span>
                                        <span class="dictionarySynonymScore">${item.score}%</span>
                                        <span class="dictionaryScoreBar"><span style="width: ${item.score}%"></span></span>
                                    </div>
                                `;
                            }).join("")}
                        </div>
                    </section>
                    <section>
                        <span class="dictionaryLabel">Synonyms in English</span>
                        <div class="dictionaryPills dictionaryPillsEnglish">
                            ${entry.englishSynonyms.map(function (item) {
                                return `
                                    <div class="dictionarySynonym">
                                        <span class="dictionarySynonymWord">${escapeHtml(item.word)}</span>
                                        <span class="dictionarySynonymScore">${item.score}%</span>
                                        <span class="dictionaryScoreBar"><span style="width: ${item.score}%"></span></span>
                                    </div>
                                `;
                            }).join("")}
                        </div>
                    </section>
                </div>
    `;
}

function renderDictionary(query, selectedWord) {
            const normalizedQuery = query.trim().toLowerCase();
            const normalizedArabicQuery = normalizedQuery.normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "");
            const matches = dictionaryWords.filter(function (entry) {
                return entry.arabic.normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").includes(normalizedArabicQuery);
            });
            const selectedEntry = matches.find(function (entry) {
                return entry.word === selectedWord;
            }) || matches[0] || dictionaryWords[0];

            dictionaryWordList.innerHTML = createDictionaryList(matches, selectedEntry.word);
            dictionarySearchStatus.textContent = normalizedQuery
                        ? `${matches.length} Arabic word${matches.length === 1 ? "" : "s"} found`
                        : `${dictionaryWords.length} demo words, sorted by Arabic`;
            renderDictionaryEntry(selectedEntry);
}

if (dictionarySearch && dictionaryWordList && dictionaryEntry) {
    renderDictionary("", dictionaryWords[0].word);

    dictionarySearch.addEventListener("input", function () {
        renderDictionary(dictionarySearch.value, "");
    });

    dictionarySearch.addEventListener("focus", function () {
        arabicKeyboard.hidden = false;
    });

    if (arabicKeyboard) {
        arabicKeyboard.addEventListener("mousedown", function (event) {
            event.preventDefault();
        });

        arabicKeyboard.addEventListener("click", function (event) {
            const letterButton = event.target.closest("[data-arabic-letter]");
            if (!letterButton) {
                if (event.target.closest(".arabicKeyboardBackspace")) {
                    dictionarySearch.value = dictionarySearch.value.slice(0, -1);
                } else {
                    return;
                }
            } else {
                dictionarySearch.value += letterButton.dataset.arabicLetter;
            }

            renderDictionary(dictionarySearch.value, "");
            dictionarySearch.focus();
        });
    }

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dictionaryIndex")) {
            arabicKeyboard.hidden = true;
        }
    });

    dictionaryWordList.addEventListener("click", function (event) {
        const wordButton = event.target.closest("[data-dictionary-word]");
        if (!wordButton) {
            return;
        }

        renderDictionary(dictionarySearch.value, wordButton.dataset.dictionaryWord);
    });

    dictionaryEntry.addEventListener("click", function (event) {
        const baabToggle = event.target.closest(".dictionaryBaabToggle");
        if (!baabToggle) {
            return;
        }

        const table = dictionaryEntry.querySelector(".dictionaryBaabTable");
        const isOpen = !table.hidden;
        table.hidden = isOpen;
        baabToggle.setAttribute("aria-expanded", String(!isOpen));
        baabToggle.textContent = isOpen ? "View full Baab table" : "Hide Baab table";
    });
}

if (vaultLevels) {
    vaultLevels.addEventListener("click", function (event) {
        const unitToggle = event.target.closest(".vaultUnitToggle");
        const trackToggle = event.target.closest(".vaultTrackToggle");
        const lessonToggle = event.target.closest(".vaultLessonToggle");
        const supportToggle = event.target.closest(".supportToggle");
        if (materialSearchResults) {
            materialSearchResults.addEventListener("click", function (event) {
                const viewButton = event.target.closest(".materialView");

                if (!viewButton) {
                    return;
                }

                const viewWindow = window.open("", "_blank");

                if (!viewWindow) {
                    return;
                }

                viewWindow.document.write(`
                    <title>${viewButton.dataset.material}</title>
                    <h1>${viewButton.dataset.material}</h1>
                    <p>Mock material for viewing. Replace this page with the real file later.</p>
                `);
                viewWindow.document.close();
            });
        }

        if (unitToggle) {
            const unit = unitToggle.closest(".vaultUnit");
            const isOpen = unit.classList.toggle("vaultUnitIsOpen");
            setExpandableState(unitToggle, unit.querySelector(".vaultUnitLessons"), isOpen);
        }

        if (trackToggle) {
            const track = trackToggle.closest(".vaultTrack");
            const isOpen = track.classList.toggle("vaultTrackIsOpen");
            setExpandableState(trackToggle, track.querySelector(".vaultTrackLessons"), isOpen);
            updateOpenContainers(track);
        }

        if (lessonToggle) {
            const lesson = lessonToggle.closest(".vaultLesson");
            const isOpen = lesson.classList.toggle("vaultLessonIsOpen");
            lessonToggle.setAttribute("aria-expanded", isOpen);
            updateOpenContainers(lesson);
        }

        if (supportToggle) {
            const support = supportToggle.closest(".lessonSupport");
            const isOpen = support.classList.toggle("lessonSupportIsOpen");
            supportToggle.setAttribute("aria-expanded", isOpen);
        }

        const downloadButton = event.target.closest(".materialDownload");
        const viewButton = event.target.closest(".materialView");
        const printButton = event.target.closest(".materialPrint");

        if (downloadButton) {
            const materialName = downloadButton.dataset.material;
            const file = new Blob(
                [`Mock material: ${materialName}\nReplace this with the real file later.`],
                { type: "text/plain" }
            );
            const downloadUrl = URL.createObjectURL(file);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = `${materialName}.txt`;
            link.click();
            URL.revokeObjectURL(downloadUrl);
        }

        if (viewButton) {
            const materialName = viewButton.dataset.material;
            const viewWindow = window.open("", "_blank");

            if (!viewWindow) {
                return;
            }

            viewWindow.document.write(`
                <title>${materialName}</title>
                <h1>${materialName}</h1>
                <p>Mock material for viewing. Replace this page with the real file later.</p>
            `);
            viewWindow.document.close();
        }

        if (printButton) {
            const materialName = printButton.dataset.material;
            const printWindow = window.open("", "_blank", "width=800,height=600");

            if (!printWindow) {
                return;
            }

            printWindow.document.write(`
                <title>${materialName}</title>
                <p>${materialName}</p>
                <p>Mock material for printing. Replace this page with the real PDF later.</p>
            `);
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
        }
    });

    document.addEventListener("click", function (event) {
        if (event.target.closest(".lessonSupport")) {
            return;
        }

        vaultLevels.querySelectorAll(".lessonSupportIsOpen").forEach(function (support) {
            support.classList.remove("lessonSupportIsOpen");
            support.querySelector(".supportToggle").setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
}
