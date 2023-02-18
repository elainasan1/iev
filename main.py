import socketserver
import http.server

server = socketserver.TCPServer(('0.0.0.0', 5),

http.server.SimpleHTTPRequestHandler)
print('Online port 5')
server.serve_forever()
