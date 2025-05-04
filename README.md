# 🏡 Google Drive + Google Sheets Automation for Property Video Management

This project automates the process of linking uploaded video files (e.g., `.mp4`, `.mkv`) from a specific Google Drive folder to corresponding entries in a Google Sheet using Google Apps Script.

---

## ✨ Features

- 🧠 Automatically matches uploaded files to rows in Google Sheets based on file names
- 🔗 Inserts clickable Google Drive share links in the `Video Link` column
- ⏱ Runs on a timer (every 5–15 minutes) using a time-driven trigger
- ✅ Replaces manual copy-paste workflows and eliminates dependency on Zapier
- 🛠 Fully customizable using native Google Apps Script

---

## 📁 Use Case

Perfect for real estate agents, renters, or property managers who want to:

- Track property walkthrough videos
- Link videos to specific listings
- Organize information in a clean, centralized Google Sheet

---

## 🔧 How It Works

1. A form submission or manual row entry adds property details to Google Sheets
2. The user uploads a matching video file (e.g., `3601.mp4`) to a specific Google Drive folder
3. A time-driven Apps Script runs every few minutes to:
   - Loop through Drive files
   - Match filenames against entries in the `Video File Name` column (e.g., Column M)
   - Paste the shareable link into the `Video Link` column (e.g., Column N)

---

## 🛠 Setup Instructions

### 1. Clone this repo or copy the script into your Google Sheets:
- Open `Extensions > Apps Script`
- Paste the script from [`script.gs`](script.gs)
- Update the folder ID to match your Drive folder

### 2. Set a Trigger:
- Open Apps Script
- Click the ⏰ Triggers icon
- Add a **Time-driven trigger** for `updateVideoLinks` to run every 5 or 15 minutes

### 3. Format Your Sheet:
| Column M         | Column N         |
|------------------|------------------|
| `Video File Name`| `Video Link`     |

Example:

---

## 📸 Demo Screenshot

![Screenshot](screenshot.png)

---

## 🧠 Skills Demonstrated

- Google Apps Script
- Google Drive & Sheets API integration
- Time-based triggers
- Workflow automation & optimization
- Serverless cloud scripting

---

## 💡 Optional Enhancements

- Email notifications when a video link is added
- "Status" column with ✅
- Automatic filename formatting
- UI to trigger it on-demand

---

## 🧙 About the Author

Built as a personal tool to streamline house-hunting. Now open-sourced to help anyone automate repetitive Drive-to-Sheet tasks using nothing but native Google tools.

---

## 📄 License

MIT – use, fork, and make it your own!
