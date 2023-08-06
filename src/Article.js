export default function Article() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/08/Screen-Shot-2023-08-04-at-8.55.10-PM.png?w=1390&crop=1"
          alt=""
        ></img>
      </div>

      <div className="texts">
        <h2>Defense tech is becoming the next big thing for investors</h2>
        <p className="info">
          <a className="author">David Lee</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          Dan Gwak of Point72 Ventures on why defense tech is becoming the next
          big thing for investors.The deals range across four key areas: deep
          tech, fintech, enterprise and defense tech.
        </p>
      </div>
    </div>
  );
}
