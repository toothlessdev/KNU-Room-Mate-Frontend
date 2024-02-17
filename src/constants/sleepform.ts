export const wakeupTime = Array.from({ length: 10 }, (v, k) => {
    return {
        time: k + 4,
        text: `${k + 4} 시`,
    };
});

export const sleepTime = [
    ...Array.from({ length: 4 }, (v, k) => {
        return {
            time: k + 9,
            text: `${k + 9} 시`,
        };
    }),
    ...Array.from({ length: 3 }, (v, k) => {
        return {
            time: k + 1,
            text: `${k + 1} 시`,
        };
    }),
];

export const sleepHabit = ["이갈이", "코골이", "잠꼬대", "몸부림"];

export const sleepLight = ["없음", "무드등", "형광등", "스탠드"];

export const alarmHabit = ["매일함", "안함", "10분마다 하나", "하나만"];
