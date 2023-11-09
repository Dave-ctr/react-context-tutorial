import { useParams } from "react-router-dom";

const aboutData = [
  {
    slug: "about-app",
    title: "About the app",
    description:
      "This application lets us add, edit, and delete to-do items. Log in to see the app's full feature set. The app will also persist to-dos in the browser's local storage for continued use / subsequent visits.",
  },
  {
    slug: "about-developer",
    title: "About the developer",
    description:
      "Dave. The Man. Muff Said.",
  },
];

const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default SinglePage;
