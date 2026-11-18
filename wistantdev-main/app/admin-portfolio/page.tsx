import { Metadata } from 'next';
import DashboardClient from './DashboardClient';

// --- STATIC METADATA ---
export const metadata: Metadata = {
  title: "Admin Dashboard",
  alternates: {canonical: "/admin-portfolio"},
  robots: {index: false, follow: false},
};

const DashboardPage = () => {
  return <DashboardClient />;
};

export default DashboardPage;
