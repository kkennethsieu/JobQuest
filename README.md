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
