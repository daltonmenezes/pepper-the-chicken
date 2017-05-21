function socialScoreShare() {
    let left = (screen.width / 2) - (250 / 2);
    let top = (screen.height / 2) - (450 / 2);

    caption = 'Pepper - The Chicken';
    title = chicken.score + ' points!!!';
    description = 'I just scored ' + chicken.score + ' points on Pepper - The Chicken. Can you beat it? #pepperthechickengame';

    window = window.open('https://www.facebook.com/dialog/share?app_id=998325273610775&href=https://daltonmenezes.github.io/pepper-the-chicken/&picture=https://daltonmenezes.github.io/pepper-the-chicken/src/sprites/pepper-fb.png&title=' + title + '&caption=' + caption + '&description=' + description + '&hashtag=#pepperthechickengame', '_blank', 'width=250, height=250, top=' + top + ', left=' + left);
}
