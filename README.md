# Real_Time_Chat
Overview:

The project aims to provide a platform where users can send and receive messages in real time. Users should be able to create chat rooms, join existing ones, and exchange messages with other users in the same room. The backend services will be hosted on Firebase, and users will authenticate with their Google accounts.



The application should have the following features:

1. Google User Authentication: Users should be able to log in and log out using their Google accounts via Firebase Authentication.

2. Chat Rooms: Users should be able to create, join, and leave chat rooms.

3. Real-Time Messaging: Messages sent by users should appear in the chat room in real time.

4. Message History: The chat application should store the history of messages for each chat room, which should be visible to users when they join the room.

5. Private Messaging: Users should be able to send private messages to other users.



Steps:

1. Set up a new Firebase project with Firestore, Authentication, and Hosting enabled.

2. Implement Google user authentication using Firebase Authentication.

3. Implement functionality for creating, joining, and leaving chat rooms. Store chat room data in Firebase Firestore.

4. Implement real-time messaging. When a message is sent, add it to the Firestore database. Listen for new messages using Firestore's real-time updates feature to push new messages to users.

5. Implement private messaging by allowing users to send messages to specific users, perhaps in a 'direct messages' collection in Firestore where each document is a conversation between two users.

6. Store the history of messages in Firestore. When a user joins a chat room, retrieve the message history from Firestore.

7. Ensure that all features are covered by appropriate unit tests.

8. Deploy the application on Firebase Hosting.



Rubric:

1. Completeness. Did the engineer implement all components of the project and carefully follow instructions?

2. Performance. How well does the project achieve its intended goal? Is the implementation efficient?

3. Documentation. How easy is the code to understand? Is code well-commented? Is there a ReadMe file with an overview of the project and instructions for deployment?


