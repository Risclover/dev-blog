---
sidebar_position: 2
---

# Initial Planning and Research

Before diving into any project, it is crucial to spend time on research and planning. This stage sets the foundation for a successful implementation and ensures high-quality code. In this case, I started by thoroughly examining Reddit's live chat feature, paying attention to its functionality and user experience.

To illustrate the feature's intricacies, I created a GIF demonstrating its different aspects. Let's take a closer look and identify the key elements:

<center>

![yay](../../6ek5EavVy4.gif)

</center>

Some noteworthy observations:

- The chat window consists of two main sections: the left side containing chat navigation and a "Create Chat" button, and the right side displaying the chat thread title, messages, and an input box.
- Chat navigation buttons provide relevant information such as the other user's image, username, the last message's content, the time it was sent, and the sender (either the other user's username or "You").
- Instead of displaying emoji stickers, the last message shows a picture emoji (🖼️).
- Messages are grouped by date, with messages sent more than a day ago displaying the abbreviated date, and messages sent yesterday or today labeled as such.
- Each chat thread begins with an area containing the other user's image, username, karma count, and the number of days they have been on the site.

<center>

![](../../Screenshot%202023-06-10%20162425.png)

</center>

- When a user sends multiple messages in a row within a minute, they are grouped together, omitting redundant information.
- Hovering over a grouped message reveals the time it was sent.
- Each message has buttons that appear on hover, allowing reactions or specific actions like deleting or reporting a message.
- Deleting a message updates its content to "[message deleted]" and changes the text color to light gray.

<center>

![](../../chrome_WJ0tqnW7n0.gif)

</center>

- Clicking the "Create Chat" button opens a "New Chat" overlay where users can search and select other users to start a chat.
- The input box expands to show four lines and then allows scrolling.

<center>

![](../../chrome_Q4JwmvPWTb.gif)

</center>

- When users without any existing chat threads open the chat feature, they see a "Welcome" overlay with a "Start new chat" button that leads to the "New Chat" overlay when clicked.

<center>

![](../welcome-overlay.png)

</center>

By studying these details, we gain a comprehensive understanding of the feature and can ensure a faithful recreation.
