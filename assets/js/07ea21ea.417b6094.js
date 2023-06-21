"use strict";(self.webpackChunkdev_blog=self.webpackChunkdev_blog||[]).push([[6956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},i="WebSockets",s={unversionedId:"live-chat-feature-clone/websockets",id:"live-chat-feature-clone/websockets",title:"WebSockets",description:"Our last backend task is to create the flask-socketio endpoints needed to turn our chat feature into a live chat feature. First, let's briefly cover what WebSockets are and why they are used for real-time communication.",source:"@site/docs/live-chat-feature-clone/websockets.md",sourceDirName:"live-chat-feature-clone",slug:"/live-chat-feature-clone/websockets",permalink:"/dev-blog/docs/live-chat-feature-clone/websockets",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Backend",permalink:"/dev-blog/docs/live-chat-feature-clone/backend"},next:{title:"Redux",permalink:"/dev-blog/docs/live-chat-feature-clone/redux"}},l={},p=[{value:"Details element example",id:"details-element-example",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"Our last backend task is to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-socketio")," endpoints needed to turn our chat feature into a live chat feature. First, let's briefly cover what WebSockets are and why they are used for real-time communication."),(0,o.kt)("p",null,"WebSockets are a communication protocol that provides communication channels over a single connection. Unlike traditional HTTP requests, which are stateless and require a new request-response cycle for every communication, WebSockets allow for continuous, bidirectional communication between the client and the server, making WebSockets ideal for implementing real-time features like chat applications."),(0,o.kt)("p",null,"To implement WebSockets in our live chat feature, we'll be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-socketio")," library, which integrates Socket.IO with Flask and provides the necessary functionality to handle real-time communication."),(0,o.kt)("p",null,"Let's start by adding required code to ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# At the top with the other import statements:\nfrom .socket import socketio\n\n# Following `db.init_app(app)`:\nsocketio.init_app(app)\n\n# At the bottom of the file:\nif __name__ == '__main__':\n    socketio.run(app)\n")),(0,o.kt)("p",null,"From the ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-socketio")," documentation:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"init_app()")," style of initialization is also supported. To start the web server simply execute your script. Note the way the web server is started. The ",(0,o.kt)("inlineCode",{parentName:"p"},"socketio.run()")," function encapsulates the start up of the web server and replaces the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.run()")," standard Flask development server start up."),(0,o.kt)("p",{parentName:"blockquote"},". . ."),(0,o.kt)("p",{parentName:"blockquote"},"The simplest deployment strategy is to start the web server by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"socketio.run(app)"),". This will look through the packages that are installed for the best available web server start the application on it. The current web server choices that are evaluated are eventlet, gevent and the Flask development server."),(0,o.kt)("p",{parentName:"blockquote"},"If eventlet or gevent are available, ",(0,o.kt)("inlineCode",{parentName:"p"},"socketio.run(app)")," starts a production-ready server using one of these frameworks. If neither of these are installed, then the Flask development web server is used, and in this case the server is not intended to be used in a production deployment.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"socketio.init_app(app)")," line initializes the SocketIO instance with our Flask app."),(0,o.kt)("p",null,"Next, we'll create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"socket.py")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/")," folder (which is the root backend folder) to handle the remaining backend code needed for WebSockets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# socket.py\n\nfrom flask_socketio import SocketIO, emit, join_room, leave_room\nfrom app.models import db, User, ChatMessage\nfrom flask_login import current_user\nfrom flask import request\n\nimport os\n\n# configure cors_allowed_origins\nif os.environ.get('FLASK_ENV') == 'production':\n    origins = [\n        'http://ribbit-app.herokuapp.com',\n        'https://ribbit-app.herokuapp.com'\n    ]\nelse:\n    origins = \"*\"\n\n# initialize your socket instance\nsocketio = SocketIO(cors_allowed_origins=origins)\n")),(0,o.kt)("p",null,"At the top of ",(0,o.kt)("inlineCode",{parentName:"p"},"socket.py"),", we import the necessary modules and initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"socketio")," instance with the appropriate CORS settings."),(0,o.kt)("p",null,"Next, we can move on to the WebSocket endpoints. We start by creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"chat_users")," variable, which is initialized as an empty list and will hold the data of users currently connected, followed by the connection and disconnection events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"chat_users = []\n\n@socketio.on(\"connect\")\ndef on_connect():\n    user = User.query.get(current_user.get_id()).username\n    user_exists = len([user for user in chatUsers if user['username'] == user])\n    if not user_exists:\n        chat_user = {}\n        chat_user['username'] = user\n        chat_user['sid'] = request.sid\n        chat_users.append(chatUser)\n\n\n@socketio.on(\"disconnect\")\ndef on_disconnect():\n    for i in range(len(chatUsers)):\n        if chat_users[i]['username'] == User.query.get(current_user.get_id()).username:\n            del chat_users[i]\n            break\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"on_connect")," event, we retrieve the username of the connected user and check if they already exist in the ",(0,o.kt)("inlineCode",{parentName:"p"},"chat_users")," list. If not, we create a new entry for the user and add it to the list."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"on_disconnect")," event, we remove the user from the ",(0,o.kt)("inlineCode",{parentName:"p"},"chat_users")," list when they disconnect."),(0,o.kt)("p",null,"Next, let's handle the messaging functionality."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# handle chat messages\n@socketio.on("chat")\ndef handle_chat(data):\n    if data[\'threadId\']:\n        room = data[\'threadId\']\n        emit("chat", data, broadcast=True, to=room)\n        emit("new_message", data, broadcast=True, to=room)\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"handle_chat")," event grabs the thread's id from the incoming JSON data, and we create a new room based on that id, making rooms and chat threads pretty much one in the same."),(0,o.kt)("p",null,"Following that are two ",(0,o.kt)("inlineCode",{parentName:"p"},"emit()")," statements. Both of these statements send the incoming data to the room and broadcasts it to that room."),(0,o.kt)("p",null,"There are two ",(0,o.kt)("inlineCode",{parentName:"p"},"emit()")," statements because we need one for sending a message and one for updating the chat nav button live."),(0,o.kt)("p",null,"Lastly, we'll implement the events to join and leave chat rooms."),(0,o.kt)("p",null,"And with that, we complete our backend code! Note that I haven't mentioned or shown things like registering our chat_thread_routes blueprint or adding our models to the ",(0,o.kt)("inlineCode",{parentName:"p"},"models/__init__.py")," file. As I mentioned in the beginning, this post assumes that you've used Flask and SQLAlchemy before. If you are using this as a guide, just don't forget to handle those details."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("h3",{id:"details-element-example"},"Details element example"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Toggle me!"),(0,o.kt)("div",null,(0,o.kt)("div",null,"This is the detailed content"),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Nested toggle! Some surprise inside..."),(0,o.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32")))))}m.isMDXComponent=!0}}]);