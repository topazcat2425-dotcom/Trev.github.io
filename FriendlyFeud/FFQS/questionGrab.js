const questions = {
    "1. What is the most useless major?": [
        ["Business", 40],
        ["polisci/gender studies", 32],
        ["Computer Science", 32],
        ["English", 28],
        ["Communications", 22],
        ["Art", 22],
        ["Music", 16],
        ["Professional Golf Management", 6]],
    "2. What is the only genre of music they play in hell": [
        ["Country", 66],
        ["Metal", 26],
        ["Pop", 26],
        ["Phonk", 20],
        ["Classical", 20],
        ["Christian Rock", 20],
        ["Taylor Swift", 14],
        ["The genre emo bands switch too after they change from emo", 6]
    ],
    "3. One thing you would NOT want to see when you break into a house": [
        ["NAKED GRANDMA", 66],
        ["Resident", 42],
        ["Republican Objects of Worship", 28],
        ["Pets", 24],
        ["Booby Traps", 18],
        ["Monsters", 18],
        ["Nothing", 4]
    ],
    "4. Which US president is on the twenty dollar bill?": [
        ["Andrew Jackson", 112],
        ["I don't know", 26],
        ["Alexander Hamilton", 22],
        ["Barack Obama", 16],
        ["Thomas Jefferson", 14],
        ["Benjamin Franklin", 4],
        ["Aberham Lincoln", 4]
    ],
    "5. I could not date someone who looks like ______": [
        ["A Family Member", 54],
        ["Men", 44],
        ["An Animal", 30],
        ["Myself", 20],
        ["They're From Anime", 14],
        ["They Don't Shower", 14],
        ["Trev", 14],
        ["Women", 4]
    ],
    "6. Last thing you'd want to find in your closet": [
        ["Person", 60],
        ["Skeleton", 52],
        ["Monster", 32],
        ["Trev", 24],
        ["Secret Room", 14],
        ["Lost Items", 14],
        ["Job Application", 4]
    ],
    "7. Name the profession of a person you would NOT trust to look after your pets/children": [
        ["Social Media Influencer/Gamer", 52],
        ["Criminal", 42],
        ["Politician", 42],
        ["Finance Worker", 28],
        ["Corpse Worker", 14],
        ["Unemployed", 14],
        ["Computer Scientist", 14]
    ],
    "8. When is the appropriate time to put up Christmas décor": [
        ["Start of December", 62],
        ["After Thanksgiving", 40],
        ["Early November", 24],
        ["Christmas Week", 20],
        ["Year Round", 20],
        ["Never", 20],
        ["January", 10],
        ["October 18th", 4]
    ],
    "9. Name something you would NOT want to see on a plane": [
        ["Bomb", 64],
        ["Terrorist", 44],
        ["People That Smell Bad", 30],
        ["Snakes", 24],
        ["Malfunction", 24],
        ["Children/Babies", 14]
    ],
    "10. What makes a guy look sleazy": [
        ["Bad Clothing/Stripes", 62],
        ["Bad/oily hair", 38],
        ["Acting Like An Asshole", 28],
        ["Beanies/Fedora/Glasses", 24],
        ["Facial Hair", 24],
        ["Political Merch", 24]
    ],
    "11. Fill in the blank: \"You're going straight to _____\"": [
        ["Hell", 98],
        ["Jail", 32],
        ["Brazil", 28],
        ["Your Room", 18],
        ["Ohio", 18],
        ["The Top", 4]
    ],
    "12. Name something you'd see at clown school": [
        ["Clowns", 70],
        ["Losers/Trev", 46],
        ["Clown Accessories", 42],
        ["A Bully Shoving 14 Kids Into One Locker", 28],
        ["Business Majors", 12]
    ]

}

function getKeys() {
    return (Object.keys(questions));
}

function getQByNum(num) {
    let key = getKeys()[num];
    let theQuestionArr = questions[key];

    pConn.sendMsg(theQuestionArr);
}

function getQByKey(key) {
    let theQuestionArr = questions[key];

    pConn.sendMsg(theQuestionArr);
}