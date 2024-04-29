#include <iostream>
#include "httplib.h"

int main() {
    httplib::Server svr;

    // Define a route
    svr.Get("/", [](const httplib::Request& req, httplib::Response& res) {
        res.set_content("Hello, World!", "text/plain");
    });

    // Start the server on port 8080
    svr.listen("localhost", 8080);

    std::cout << "Server started at http://localhost:8080" << std::endl;

    return 0;
}
