import PageHeader from "../components/PageHeader";

const NotFound = () => {
  return (
    <div className="cards">
      <PageHeader />
      <div className="cards__not-found">
        <p>404 Page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
