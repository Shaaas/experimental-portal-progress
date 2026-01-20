# 🧪 Experimental Portal (Full-Stack)

A real-time "Lab Ledger" allowing researchers to submit hypotheses and view a live feed of discoveries. 

## 🚀 The Tech Stack
- **Frontend:** HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6 Fetch API)
- **Hosting:** GitHub Pages
- **Backend:** Node.js, Express.js
- **Deployment:** Render (Web Services)

## 🛠️ Technical Challenges Solved
- **CORS Management:** Implemented Cross-Origin Resource Sharing to allow a GitHub-hosted frontend to securely communicate with a Render-hosted API.
- **Asynchronous Data Handling:** Managed API "Cold Starts" on the free tier by implementing user-friendly loading states and error handling.
- **Responsive Dashboard:** Designed a split-pane interface that maintains a fixed input area while handling a dynamic, scrollable data feed.

## 📈 Future Roadmap
- [ ] Connect to MongoDB for persistent data storage.
- [ ] Implement JWT Authentication for "Admin Mode."
- [ ] Add real-time updates using WebSockets (Socket.io).
