const http = require('http')
const port = 3000;
const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'Mert',
    },
    {
        id: 1,
        name: 'İstemi',
    },
    {
        id: 2,
        name: 'Timur',
    },
    {
        id: 3,
        name: 'Asena',
    },
    {
        id: 4,
        name: 'Tonyukuk',
    },
    {
        id: 5,
        name: 'Bumin',
    },
    {
        id: 6,
        name: 'Taspar',
    }
];

server.on('request', (req, res) => {
    const items = req.url.split('/');
    // /friends/2 => ['', 'friends', '2']

    if (items[1] === 'friends')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if(items.length === 3)
        {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]))
        }
        else
        {
            res.end(JSON.stringify(friends));
        }
    }
    else if (items[1] === 'messages')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>')
        res.write('<h3> HTTP Server </h3>')
        res.write('<li> Basic HTTP Server Example </li>')
        res.write('</ul>')
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    else
    {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
}); // 127.0.0.1 => localhost