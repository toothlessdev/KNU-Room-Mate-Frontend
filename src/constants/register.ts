export const university = [
    "인문대학",
    "사회과학대학",
    "자연과학대학",
    "경상대학",
    "공과대학",
    "IT대학",
    "농업생명과학대학",
    "예술대학",
    "사범대학",
    "의과대학",
    "치과대학",
    "수의과대학",
    "생활과학대학",
    "간호대학",
    "약학대학",
    "첨단기술융합대학",
    "생태환경대학",
    "과학기술대학",
    "행정학부",
    "자율전공부",
    "글로벌인재학부",
];

export const birth = Array.from({ length: 12 }, (v, k) => {
    return {
        value: k + 1995,
        text: `${k + 1995} 년생`,
    };
});

export const studentId = Array.from({ length: 12 }, (v, k) => {
    return {
        value: k + 14,
        text: `${k + 14} 학번`,
    };
});
