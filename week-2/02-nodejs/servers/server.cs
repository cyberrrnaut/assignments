using System;
using System.Net;

class Program
{
    static void Main(string[] args)
    {
        // Define the prefix for the server
        string prefix = "http://localhost:8080/";

        // Create an instance of HttpListener
        HttpListener listener = new HttpListener();

        // Add the prefix to the listener's prefixes
        listener.Prefixes.Add(prefix);

        // Start the listener
        listener.Start();

        Console.WriteLine("Server started. Listening on {0}", prefix);

        // Handle requests
        while (true)
        {
            // Wait for a request to come in
            HttpListenerContext context = listener.GetContext();

            // Get the request and response objects
            HttpListenerRequest request = context.Request;
            HttpListenerResponse response = context.Response;

            // Send a response
            string responseString = "Hello, world!";
            byte[] buffer = System.Text.Encoding.UTF8.GetBytes(responseString);

            // Set response headers
            response.ContentType = "text/plain";
            response.ContentLength64 = buffer.Length;

            // Write the response to the output stream
            response.OutputStream.Write(buffer, 0, buffer.Length);

            // Close the output stream
            response.OutputStream.Close();
        }
    }
}
