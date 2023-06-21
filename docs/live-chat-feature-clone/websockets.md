---
sidebar_position: 4
---

# WebSockets

Our last backend task is to create the `flask-socketio` endpoints needed to turn our chat feature into a live chat feature. First, let's briefly cover what WebSockets are and why they are used for real-time communication.

WebSockets are a communication protocol that provides communication channels over a single connection. Unlike traditional HTTP requests, which are stateless and require a new request-response cycle for every communication, WebSockets allow for continuous, bidirectional communication between the client and the server, making WebSockets ideal for implementing real-time features like chat applications.

To implement WebSockets in our live chat feature, we'll be using the `flask-socketio` library, which integrates Socket.IO with Flask and provides the necessary functionality to handle real-time communication.

Let's start by adding required code to `__init__.py`:

```python
# At the top with the other import statements:
from .socket import socketio

# Following `db.init_app(app)`:
socketio.init_app(app)

# At the bottom of the file:
if __name__ == '__main__':
    socketio.run(app)
```

From the `flask-socketio` documentation:

> The `init_app()` style of initialization is also supported. To start the web server simply execute your script. Note the way the web server is started. The `socketio.run()` function encapsulates the start up of the web server and replaces the `app.run()` standard Flask development server start up.
>
> . . .
>
> The simplest deployment strategy is to start the web server by calling `socketio.run(app)`. This will look through the packages that are installed for the best available web server start the application on it. The current web server choices that are evaluated are eventlet, gevent and the Flask development server.
>
> If eventlet or gevent are available, `socketio.run(app)` starts a production-ready server using one of these frameworks. If neither of these are installed, then the Flask development web server is used, and in this case the server is not intended to be used in a production deployment.

The `socketio.init_app(app)` line initializes the SocketIO instance with our Flask app.

Next, we'll create a new file called `socket.py` in the `app/` folder (which is the root backend folder) to handle the remaining backend code needed for WebSockets.

```python
# socket.py

from flask_socketio import SocketIO, emit, join_room, leave_room
from app.models import db, User, ChatMessage
from flask_login import current_user
from flask import request

import os

# configure cors_allowed_origins
if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://ribbit-app.herokuapp.com',
        'https://ribbit-app.herokuapp.com'
    ]
else:
    origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)
```

At the top of `socket.py`, we import the necessary modules and initialize the `socketio` instance with the appropriate CORS settings.

Next, we can move on to the WebSocket endpoints. We start by creating the `chat_users` variable, which is initialized as an empty list and will hold the data of users currently connected, followed by the connection and disconnection events:

```python
chat_users = []

@socketio.on("connect")
def on_connect():
    user = User.query.get(current_user.get_id()).username
    user_exists = len([user for user in chatUsers if user['username'] == user])
    if not user_exists:
        chat_user = {}
        chat_user['username'] = user
        chat_user['sid'] = request.sid
        chat_users.append(chatUser)


@socketio.on("disconnect")
def on_disconnect():
    for i in range(len(chatUsers)):
        if chat_users[i]['username'] == User.query.get(current_user.get_id()).username:
            del chat_users[i]
            break
```

In the `on_connect` event, we retrieve the username of the connected user and check if they already exist in the `chat_users` list. If not, we create a new entry for the user and add it to the list.

In the `on_disconnect` event, we remove the user from the `chat_users` list when they disconnect.

Next, let's handle the messaging functionality.

```python
# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    if data['threadId']:
        room = data['threadId']
        emit("chat", data, broadcast=True, to=room)
        emit("new_message", data, broadcast=True, to=room)
```

The `handle_chat` event grabs the thread's id from the incoming JSON data, and we create a new room based on that id, making rooms and chat threads pretty much one in the same.

Following that are two `emit()` statements. Both of these statements send the incoming data to the room and broadcasts it to that room.

There are two `emit()` statements because we need one for sending a message and one for updating the chat nav button live.

Lastly, we'll implement the events to join and leave chat rooms.

And with that, we complete our backend code! Note that I haven't mentioned or shown things like registering our chat_thread_routes blueprint or adding our models to the `models/__init__.py` file. As I mentioned in the beginning, this post assumes that you've used Flask and SQLAlchemy before. If you are using this as a guide, just don't forget to handle those details.

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

### Details element example

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>
