const testScores={
    ken:80,
    yuki:76,
    yuko:77,
    koki:40,
    saeko:81
};

for(let student of Object.keys(testScores)){
    console.log(`${student}さんは${testScores[student]}点。`);
}