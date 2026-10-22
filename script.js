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
let curriculumData = [];

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
                    <a class="materialDownload" href="${escapeHtml(material.url)}" target="_blank" rel="noopener">
                        Download
                    </a>
                    <a class="materialView" href="${escapeHtml(material.url)}" target="_blank" rel="noopener">
                        View
                    </a>
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

function createUnit(unit) {
    const sublevels = unit.sublevels
        ? unit.sublevels.map(createSublevel).join("")
        : `<p class="vaultLessonsLabel">Lessons</p>${unit.lessons.map(createLesson).join("")}`;

    return `
        <section class="vaultUnit">
            <button class="vaultUnitToggle" type="button" aria-expanded="false">
                <strong>${escapeHtml(unit.title)}</strong>
                <span class="vaultToggleIcon" aria-hidden="true">+</span>
            </button>
            <div class="vaultUnitLessons">
                ${sublevels}
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

function normalizeCurriculumData(data) {
    if (Array.isArray(data)) {
        return data;
    }

    if (!data || !Array.isArray(data.levels)) {
        throw new Error("Curriculum JSON must contain a levels array.");
    }

    return data.levels.map(function (level) {
        return {
            title: `Level ${level.level}`,
            description: "",
            units: (level.units || []).map(function (unit) {
                return {
                    title: `Unit ${unit.unit}`,
                    sublevels: (unit.sublevels || []).map(function (sublevel, sublevelIndex) {
                        return {
                            number: sublevel.sublevel || sublevelIndex + 1,
                            description: sublevel.description || "",
                            lessons: (sublevel.lessons || []).map(function (lesson) {
                                return {
                                    title: `Lesson ${lesson.lesson}`,
                                    description: lesson.description || "",
                                    time: lesson.estTime || "",
                                    materials: (lesson.materials || []).map(function (material) {
                                        return {
                                            title: material.title || "",
                                            url: material.url || "#",
                                            keywords: Array.isArray(material.keywords)
                                                ? material.keywords
                                                : []
                                        };
                                    })
                                };
                            })
                        };
                    })
                };
            })
        };
    });
}

function getAllMaterials(levels) {
    return levels.flatMap(function (level) {
        return level.units.flatMap(function (unit) {
            const lessons = unit.sublevels
                ? unit.sublevels.flatMap(function (sublevel) { return sublevel.lessons; })
                : unit.lessons;
            return lessons.flatMap(function (lesson) {
                return lesson.materials.map(function (material) {
                    return {
                        material: material,
                        level: level.title,
                        unit: unit.title,
                        lesson: lesson.title
                    };
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
                        <small>${escapeHtml(item.level)} / ${escapeHtml(item.unit)} / ${escapeHtml(item.lesson)}</small>
                        <p>${escapeHtml(item.material.keywords.join(", "))}</p>
                    </div>
                    <a class="materialView" href="${escapeHtml(item.material.url)}" target="_blank" rel="noopener">
                        View
                    </a>
                </article>
            `;
        }).join("")
        : `<p class="vaultSearchEmpty">No materials match that search.</p>`;
}

async function loadCurriculum() {
    try {
        const response = await fetch("data/curriculum.json");

        if (!response.ok) {
            throw new Error(`Curriculum request failed with status ${response.status}.`);
        }

        curriculumData = normalizeCurriculumData(await response.json());
        vaultLevels.innerHTML = createLevelTabs(curriculumData) + createLevelPanels(curriculumData);
    } catch (error) {
        vaultLevels.innerHTML = `
            <p class="vaultDataError">
                The curriculum could not be loaded. Check that
                <code>data/curriculum.json</code> is available.
            </p>
        `;
        console.error(error);
    }
}

if (vaultLevels) {
    loadCurriculum();

    materialSearch.addEventListener("input", function () {
        renderMaterialSearch(materialSearch.value);
    });

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

        if (unitToggle) {
            const unit = unitToggle.closest(".vaultUnit");
            const isOpen = unit.classList.toggle("vaultUnitIsOpen");
            unitToggle.setAttribute("aria-expanded", isOpen);
        }

        if (lessonToggle) {
            const lesson = lessonToggle.closest(".vaultLesson");
            const isOpen = lesson.classList.toggle("vaultLessonIsOpen");
            lessonToggle.setAttribute("aria-expanded", isOpen);
        }

        if (supportToggle) {
            const support = supportToggle.closest(".lessonSupport");
            const isOpen = support.classList.toggle("lessonSupportIsOpen");
            supportToggle.setAttribute("aria-expanded", isOpen);
        }

        const printButton = event.target.closest(".materialPrint");

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
