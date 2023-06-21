"use strict";(self.webpackChunkdev_blog=self.webpackChunkdev_blog||[]).push([[7622],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,m=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},220:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},s="Backend",o={unversionedId:"live-chat-feature-clone/backend",id:"live-chat-feature-clone/backend",title:"Backend",description:"When working on a full-stack project, I prefer starting with the backend and then proceeding to the frontend. This approach minimizes the need to switch back and forth between the two and ensures smoother development. Although some backend adjustments may be necessary later, completing most of the backend work upfront allows me to focus solely on the frontend when the time comes.",source:"@site/docs/live-chat-feature-clone/backend.md",sourceDirName:"live-chat-feature-clone",slug:"/live-chat-feature-clone/backend",permalink:"/docs/live-chat-feature-clone/backend",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Initial Planning and Research",permalink:"/docs/live-chat-feature-clone/planning-and-research"},next:{title:"WebSockets",permalink:"/docs/live-chat-feature-clone/websockets"}},l={},d=[{value:"Models",id:"models",level:2},{value:"Routes",id:"routes",level:2}],h={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backend"},"Backend"),(0,r.kt)("p",null,"When working on a full-stack project, I prefer starting with the backend and then proceeding to the frontend. This approach minimizes the need to switch back and forth between the two and ensures smoother development. Although some backend adjustments may be necessary later, completing most of the backend work upfront allows me to focus solely on the frontend when the time comes."),(0,r.kt)("h2",{id:"models"},"Models"),(0,r.kt)("p",null,"To begin, let's consider the necessary database tables based on user actions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Creating a new chat thread by clicking the "Create Chat" button.'),(0,r.kt)("li",{parentName:"ol"},"Sending messages through the input box."),(0,r.kt)("li",{parentName:"ol"},"Clicking on a chat navigation button to open the respective thread."),(0,r.kt)("li",{parentName:"ol"},'"Deleting" a message by updating its content.')),(0,r.kt)("p",null,"All interactions are with either the chat threads themselves or with messages, which makes it clear that we need to include two models: ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatThread")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatMessage"),"."),(0,r.kt)("p",null,"In addition, we have a many-to-many relationship between users and chat threads (chat threads can have many users, and users can have many chat threads), so we'll need an association table that we'll call ",(0,r.kt)("inlineCode",{parentName:"p"},"user_chat_threads"),"."),(0,r.kt)("p",null,"As a quick side note, some of the code snippets in this blog post have an import statement at the top that says ",(0,r.kt)("inlineCode",{parentName:"p"},"from .db import db"),". To clear up any potential confusion, this is referring to the ",(0,r.kt)("inlineCode",{parentName:"p"},"db.py")," file, which holds the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from flask_sqlalchemy import SQLAlchemy\nimport os\nenvironment = os.getenv("FLASK_ENV")\ndb = SQLAlchemy()\n')),(0,r.kt)("p",null,"Let's begin with the ",(0,r.kt)("inlineCode",{parentName:"p"},"user_chat_threads")," table to establish the relationship between users and chat threads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from .db import db\n\nuser_chat_threads = db.Table('user_chat_threads',\n  db.Model.metadata,\n  db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),\n  db.Column('chat_thread_id', db.Integer, db.ForeignKey('chat_message_threads.id'), primary_key=True),\n)\n")),(0,r.kt)("p",null,"Next, we have the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatThread")," model to represent a chat thread between two users."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from .db import db\n\n# ...\n\nclass ChatThread(db.Model):\n    __tablename__ = \"chat_threads\"\n\n    id = db.Column(db.Integer, primary_key=True)\n    created_at = db.Column(db.DateTime, server_default.db.func.now())\n    messages = db.relationship('ChatMessage', back_populates='chat_message_thread', cascade='all, delete')\n    chat_thread_users = db.relationship('User', back_populates='chat_threads', secondary=user_chat_threads, lazy='joined')\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - Primary key for the chat thread"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"created_at")," - Timestamp indicating when the chat thread was created"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"messages")," - One-to-many relationship with the ",(0,r.kt)("inlineCode",{parentName:"li"},"ChatMessage")," model to represent the messages in the thread. ",(0,r.kt)("inlineCode",{parentName:"li"},"cascade='all, delete'")," ensures that when the chat thread is deleted, its messages get deleted, too."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chat_thread_users")," - Many-to-many relationship with the ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," model to associate the users participating in the chat thread. Note the user of the ",(0,r.kt)("inlineCode",{parentName:"li"},"secondary")," argument, which associates the ",(0,r.kt)("inlineCode",{parentName:"li"},"user_chat_threads")," table.")),(0,r.kt)("p",null,"Finally, we have the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatMessage")," model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from .db import db\n\n# ...\n\nclass ChatMessage(db.Model):\n    __tablename__ = "chat_messages"\n\n    id = db.Column(db.Integer, primary_key=True)\n    sender_id = db.Column(db.Integer, db.ForeignKey(\'users.id\', ondelete="CASCADE"), nullable=False)\n    receiver_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)\n    content = db.Column(db.String(10000), nullable=False)\n    thread_id = db.Column(db.Integer, db.ForeignKey("chat_message_threads.id"), unique=False, nullable=False)\n    read = db.Column(db.Boolean, default=False, nullable=False)\n    created_at = db.Column(db.DateTime, server_default=db.func.now())\n\n    chat_message_thread = db.relationship(\'ChatMessageThread\', back_populates="messages")\n    sender = db.relationship("User", back_populates="user_chat_messages", primaryjoin="User.id==ChatMessage.sender_id")\n    recipient = db.relationship("User", primaryjoin="User.id==ChatMessage.receiver_id")\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - Primary key for the chat message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sender_id")," - The user id for user sending the message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receiver_id")," - The user id for the user receiving the message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content")," - The contents of the message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_id")," - The id of the chat thread the message belongs to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read"),' - A boolean indicating whether or not the message has been seen, or "read", for the purposes of notifications.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"created_at")," - The timestamp of when the message was sent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chat_message_thread")," - One-to-many relationship with the ",(0,r.kt)("inlineCode",{parentName:"li"},"ChatThread")," model to represent...well, the thread that the messages belong to, I guess."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sender")," -"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"recipient")," -")),(0,r.kt)("h2",{id:"routes"},"Routes"),(0,r.kt)("p",null,"With our models designed and written, we can move on to our endpoints. We can refer to the same list of actions that we referenced in the previous section to help us figure out what endpoints we need:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Creating a new chat thread by clicking the "Create Chat" button.'),(0,r.kt)("li",{parentName:"ol"},"Sending messages through the input box."),(0,r.kt)("li",{parentName:"ol"},"Clicking on a chat navigation button to open the respective thread."),(0,r.kt)("li",{parentName:"ol"},'"Deleting" a message by updating its content.')),(0,r.kt)("p",null,"Let's start with our import statements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from flask import Blueprint, request\nfrom flask_login import login_required, current_user\nfrom app.models import db, User, ChatThread, ChatMessage\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"From ",(0,r.kt)("inlineCode",{parentName:"p"},"flask"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Blueprint")," - Used to add views to our route using the ",(0,r.kt)("inlineCode",{parentName:"li"},"route")," decorator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request")," - Contains the data that the client has sent to our app"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"From ",(0,r.kt)("inlineCode",{parentName:"p"},"flask_login"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"login_required")," - Restricts views to logged-in users"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current_user")," - Access to the logged-in user"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"From ",(0,r.kt)("inlineCode",{parentName:"p"},"app.models"),": The models that we reference within our routes (",(0,r.kt)("inlineCode",{parentName:"p"},"db"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatThread"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatMessage"),")."))),(0,r.kt)("p",null,"Following this, we need to name our route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Import statements\n\n# ...\n\nchat_thread_routes = Blueprint("chat_threads", __name__)\n')),(0,r.kt)("p",null,"Now we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"@chat_thread_routes.route")," to add our views to ",(0,r.kt)("inlineCode",{parentName:"p"},"chat_threads"),"."),(0,r.kt)("p",null,'Starting with our endpoints for chat threads, we need to be able to "GET" a user\'s threads.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@chat_thread_routes.route("")\ndef get_user_chats():\n    user = User.query.get(current_user.get_id())\n    if user is not None:\n        user_chats = user.chat_threads\n        return { "ChatThreads": [ chat.to_dict() for chat in user_chats]}\n    else:\n        return { "message": "error" }\n')),(0,r.kt)("p",null,"Here, we find the logged-in user using ",(0,r.kt)("inlineCode",{parentName:"p"},"current_user.get_id()"),", which literally gets the id of the current user, and querying our User model with it."),(0,r.kt)("p",null,"Then we say that if ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," exists (",(0,r.kt)("inlineCode",{parentName:"p"},"is not None"),"), we need to return the user's chat threads, which are held in ",(0,r.kt)("inlineCode",{parentName:"p"},"user.chat_threads"),". The return statement turns each chat thread into a dictionary (",(0,r.kt)("inlineCode",{parentName:"p"},"chat.to_dict()"),") so that we may use its properties."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," does not exist, we return a simple error message."),(0,r.kt)("p",null,"Next, it would be handy to be able to get a specific chat thread by its id, so let's write an endpoint that can do just that."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# 3. Clicking on a chat navigation button to open the respective thread.\n@chat_thread_routes.route("/<int:id>")\ndef get_user_chat(id):\n    chat = ChatThread.query.get(id)\n    if chat is not None:\n        return chat.to_dict()\n    else:\n        return {"message": "Chat not found"}\n')),(0,r.kt)("p",null,'This time, we find a specific chat thread by grabbing its id, which is stored as a parameter in the route. If a chat thread with that id exists, we return it as a dictionary, and if not, we return a "Chat not found" message.'),(0,r.kt)("p",null,"Our final chat thread-related endpoint allows us to create chat threads using ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# 1. Creating a new chat thread by clicking the "Create Chat" button.\n@chat_thread_routes.route("", methods=["POST"])\n@login_required\ndef create_thread():\n    data = request.get_json()\n    receiver = User.query.get(data.get("receiverId"))\n    sender = User.query.get(current_user.get_id())\n\n    thread = ChatMessageThread()\n    receiver.chat_threads.append(thread)\n    sender.chat_threads.append(thread)\n\n    db.session.add(thread)\n    db.session.commit()\n\n\n    return { "chatThread": thread.to_dict() }\n')),(0,r.kt)("p",null,"We are utilizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"@login_required")," decorator here, because users who aren't logged in shouldn't be able to create chat threads."),(0,r.kt)("p",null,"We are also utilizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," object - specifically, the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_json()")," method, which parses the incoming JSON request data and returns it so we may reference it."),(0,r.kt)("p",null,"For example, after setting ",(0,r.kt)("inlineCode",{parentName:"p"},"request.get_json()")," to a variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", when we write the code ",(0,r.kt)("inlineCode",{parentName:"p"},'data.get("receiverId")'),", this is literally the receiver's id, which we set to the ",(0,r.kt)("inlineCode",{parentName:"p"},"receiverId")," variable in the frontend before converting it to JSON."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'receiver = User.query.get(data.get("receiverId"))')," - We find the receiver by their user id and set it to the ",(0,r.kt)("inlineCode",{parentName:"li"},"receiver")," variable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sender = User.query.get(current_user.get_id())")," - Once again, we find the current user by using ",(0,r.kt)("inlineCode",{parentName:"li"},"current_user.get_id()"),", and we set it to the ",(0,r.kt)("inlineCode",{parentName:"li"},"sender")," variable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread = ChatThread()")," - We create our chat thread. We don't need any information inside the parentheses for this particular model."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receiver.chat_threads.append(thread)")," - Remember the ",(0,r.kt)("inlineCode",{parentName:"li"},"chat_threads")," field that we gave the ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," model earlier? We append our newly-created thread to it so that the receiving user now has that thread."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sender.chat_threads.append(thread)")," - We do the same for the sending user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"db.session.add(thread)")," - Our new thread is added to the database..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"db.session.commit()")," - and committed.")),(0,r.kt)("p",null,"We finish off this endpoint by returning a dictionary form of our chat thread."),(0,r.kt)("p",null,"We now move on to the endpoints for chat messages. Just like with chat threads, we need to be able to create a message with ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", but we'll also simultaneously add the message to its chat thread."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# 2. Sending messages through the input box.\n@chat_thread_routes.route("/<int:id>/messages", methods=["POST"])\n@login_required\ndef create_message(id):\n    data = request.get_json()\n\n    message = ChatMessage(\n        content=data.get("content"),\n        sender_id=current_user.get_id(),\n        receiver_id = data.get("receiver_id"),\n        thread_id = id\n    )\n\n    chat_thread = ChatMessageThread.query.get(id)\n    chat_thread.messages.append(message)\n\n    db.session.add(message)\n    db.session.commit()\n\n    return message.to_dict()\n')),(0,r.kt)("p",null,"We've already discussed what the ",(0,r.kt)("inlineCode",{parentName:"p"},"@login_required")," decorator and the ",(0,r.kt)("inlineCode",{parentName:"p"},"data = request.get_json()")," line do, so let's move right along."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'message = ChatMessage(\n  content=data.get("content"),\n  sender_id=current_user.get_id(),\n  receiver_id = data.get("receiver_id"),\n  thread_id = id\n)\n')),(0,r.kt)("p",null,"Here, we create our new message, passing along the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'content=data.get("content")')," - Our message's content"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sender_id=current_user.get_id()")," - We set the sender's id to the current user's id, since they will always be one in the same."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'receiver_id=data.get("receiver_id")')," - We get the receiver's id from data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_id=id")," - Our thread id comes directly from the route.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"chat_thread = ChatMessageThread.query.get(id)\nchat_thread.messages.append(message)\n\ndb.session.add(message)\ndb.session.commit()\n\nreturn message.to_dict()\n")),(0,r.kt)("p",null,"Following that, we simply find the correct chat thread by its id, append our new message to the chat thread's ",(0,r.kt)("inlineCode",{parentName:"p"},"messages")," property, add the message to the database, commit, and finally, return a dictionary version of our message."),(0,r.kt)("p",null,'We\'ve covered most of our "actions" list, but there is one more action to do: "deleting" a message.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# 4. "Deleting" a message by updating its content.\n@chat_thread_routes.route("/messages/<int:id>", methods=["PUT"])\n@login_required\ndef fake_delete_message(id):\n    message = ChatMessage.query.get(id)\n    setattr(message, "content", "[Message deleted]")\n\n    db.session.commit()\n    return message.to_dict()\n')),(0,r.kt)("p",null,"Since this is just an update, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," - and more specifically, the ",(0,r.kt)("inlineCode",{parentName:"p"},"setattr()")," method, which is a Python function that sets the value of the specified attribute; or, in other words, changes the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},'"content"')," attribute of the ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," to ",(0,r.kt)("inlineCode",{parentName:"p"},'"[Message deleted]"'),"."),(0,r.kt)("p",null,"We commit this change to the database and return our message as a dictionary."))}c.isMDXComponent=!0}}]);