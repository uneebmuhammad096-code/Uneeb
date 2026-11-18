import {Metadata} from 'next';
import NotFoundClient from '../components/notfound/NotFoundClient';

export const metadata: Metadata = {
  title: "404 - Page Not Found | Muhammad Uneeb",
  description: "La page demandée n'a pas pu être trouvée. Veuillez vérifier l'URL ou retourner à la page d'accueil.",
};

const NotFoundPage = () => {
  return <NotFoundClient />;
};

export default NotFoundPage;
