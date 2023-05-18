import "./Subscribe.css";
const Subscribe = ({ direction }) => {
  return (
    <div
      className={
        (direction === "column" ? "column" : "") + " subscribe-container"
      }
    >
      <div>
        <h1 className="text-center my-1">
          SIGN UP FOR THE WIRED DAILY NEWSLETTER
        </h1>
        <p className="text-center mb-1">
          Our biggest stories, delivered to your inbox every day.
          <a href="#"> See all newsletters.</a>
        </p>
      </div>
      <div>
        <form action="" className="d-flex justify-center align-center column">
          <div className="inputField">
            <label htmlFor="email">Your Email</label>
            <input type="email" required placeholder="E-mail Address" />
          </div>
          <button className="submit-btn" type="submit">
            SUBMIT
          </button>
        </form>
        <p>
          By signing up you agree to our User Agreement (including the class
          action waiver and arbitration provisions), our Privacy Policy & Cookie
          Statement and to receive marketing and account-related emails from
          WIRED. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
