const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Running request...');

    // Set header content type to text/html
    res.setHeader('Content-Type', 'text/html');

    // Start writing the HTML document
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Custom Web Page</title>
            <!-- Add CSS or JS links here -->
        </head>
        <body>
            <header>
                <h1>Welcome to My Custom Web Page</h1>
            </header>
            <main>
                <section id="about">
                    <h2>About Us</h2>
                    <p>This is a custom web page created using Node.js.</p>
                </section>
                <section id="services">
                    <h2>Our Services</h2>
                    <ul>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                    </ul>
                </section>
                <footer>
                    <p>&copy; 2024 My Company</p>
                </footer>
            </main> 
        </body>
        </html>
    `);

    // End the response
    res.end();
});

// Listen on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Node.js is running on port: 3000');
});
