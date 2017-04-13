const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const { show } = req.query // this is the same as const show = req.query.show

        superagent
            .get('https://api.spotify.com/v1/search?q=' + show + '&type=artist&market=us&limit=20&offset=0')
            .end((err, response) => {
                if (err) {
					console.log("it is breaking")
                    res.send(err)
				}
                else{
					//console.log(response.body.artists.items[0].images[0].url)
                    res.json(response.body.artists.items)
				}
            })
    })

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}