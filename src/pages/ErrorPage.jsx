import MainNavigation from "../components/MainNavigation";
import "./StyleSheet.css";

function ErrorPage() {
  return (
    <div className="error-page-css">
      <MainNavigation />
      <main className="error-page-main">
        <h1>An error occured!!</h1>
        <p>Could not find this page.</p>
        </main>
    </div>
  );
}

export default ErrorPage;
