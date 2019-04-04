import asyncio
import json
import logging
import websockets
import socket

HOST = socket.gethostbyname(socket.gethostname())
PORT = 8181

USERS = set() 

logging.basicConfig()

async def register(websocket):
    USERS.add(websocket)
    print("REGISTERED!")

async def unregister(websocket):
    USERS.remove(websocket)
    print("UNREGISTERED!")


async def main(websocket, path):
    await register(websocket)
    try:

        async for message in websocket:
            print(message) # HELLO WORLD
    finally:
        await unregister(websocket)


print(f"Starting on {HOST}:{PORT}")
asyncio.get_event_loop().run_until_complete(
    websockets.serve(main, HOST, PORT))

asyncio.get_event_loop().run_forever()


