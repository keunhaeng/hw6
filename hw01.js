var studentScore;
var grade;

if (studentScore >= 90 ) {
    grade = 'A';
} else if (70 <= studentScore < 90) {
    grade = 'B';
} else if (60 <= studentScore < 70) {
    grade = 'C';
} else if (50 <= studentScore < 60) {
    grade = 'D';
} else {
    grade = 'F';
};


switch (grade) {
    case 'A':
        console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
        break;
    case 'B':
        console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
        break;
    case 'C':
        console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
        break;
    case 'D':
        console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
        break;
    case 'F':
        console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
        break;       
    default:
        break;
}

var studentScore = 50