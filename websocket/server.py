import asyncio
from asyncio.events import get_event_loop
import websockets

PORT = 5678

print('server on port: ' + str(PORT))

async def echo(websocket, path):
    print('client connected')
    try:
        async for message in websocket:
            print('Received: ' + message)
            await websocket.send('Pong: ' + message)
    except websockets.exceptions.ConnectionClosed as e:
        print('client left')
    
start_server = websockets.serve(echo, 'localhost', PORT)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
