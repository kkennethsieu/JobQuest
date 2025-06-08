# JobQuest | Job Application Tracker

**JobQuest** is a web app designed to help job seekers efficiently track their job applications and interviews. It allows users to add, update, and manage job statuses while providing helpful insights and stats to monitor progress.

---

## Features

- **Add new job applications** with details like company name, position, application date, etc.
- **Track status updates** — from applied, interviewing, offer received, to rejected.
- **View detailed job application info** and edit entries anytime.
- **Statistics dashboard** to monitor your progress and stay motivated.
- **User authentication** to keep your data secure and private.
- Responsive UI built with React for seamless experience across devices.

---

## Technologies Used

- **Frontend:** React, React Router, React Query, Tailwind CSS
- **Backend:** Supabase (authentication and database)
- **State Management:** React Query for server state synchronization
- **Hosting:** Vercel

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- Supabase account and project setup (if you want to run your own backend)
- Clone this repository

### Installation

```bash
git clone https://github.com/kkennethsieu/jobquest.git
cd jobquest
npm install
```

### Setup Environment Variables

Create a `.env` file in the root directory with your Supabase keys:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Locally

```bash
npm run dev
```

Open your browser at `http://localhost:3000`

---
## Screenshots
![Screenshot 2025-06-08 at 1 41 27 PM](https://github.com/user-attachments/assets/d6f7cb1f-5de4-4135-bff5-6e96d1b2746c)
![Screenshot 2025-06-08 at 1 40 47 PM](https://github.com/user-attachments/assets/f96beae0-0050-42e0-8672-0e393c353a55)
![Screenshot 2025-06-08 at 1 36 55 PM](https://github.com/user-attachments/assets/efb3a135-6c08-4e4a-ba80-76c3d2707f4b)
![Screenshot 2025-06-08 at 1 36 42 PM](https://github.com/user-attachments/assets/42a7ee01-c115-4d76-8ec4-7938f26a7409)


---
## Deployment

The app is deployed on Vercel and can be accessed at:  
[https://jobquestnow.vercel.app/](https://jobquestnow.vercel.app/)

---

## Future Improvements

- Add notifications and reminders for upcoming interviews.
- Improve analytics dashboard with graphs and charts.
- Integrate resume and cover letter upload feature.
- Enable exporting data to CSV or PDF.

---

## License

This project is licensed under the MIT License.

---

## Contact

Created by Kenny Sieu  
Feel free to reach out if you want to collaborate or report issues!
