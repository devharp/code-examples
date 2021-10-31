from flask import Flask, Response, request

app = Flask(__name__)

@app.route('/')
def home():
    return Response(open('./index.html', 'rb').read(), mimetype='text/html')

@app.route('/video', methods =['GET', 'POST'])
def video():
    if request.method == 'POST':
        open('./video.mp4', 'wb').write(request.data)
        print('data received and saved')
        return 'ok'

@app.route('/script.js')
def script():
    return Response(open('./script.js', 'rb').read(), mimetype='text/javascript')

@app.route('/style.css')
def style():
    return Response(open('./style.css', 'rb').read(), mimetype='text/css')

def main():
    app.run(host='0.0.0.0', port=8888, ssl_context='adhoc')

if __name__ == "__main__":
    main()