export const test = ((req, res) => {
    res.send('Greetings from the test controller');
});

export const api = ((req, res) => {
    // res.send('Greetings from the status controller');
    res.json(
        {
            status: 'Ok',
            ozzy: 'here',
            malong: 'all tatooed up'
        }
    )
});

export const postMalone = ((req, res) => {
    res.send('Ozzy was here...');
})


