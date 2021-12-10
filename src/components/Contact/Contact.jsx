import "./style.css";

function Contact() {
  return (
    <div className="contact row" id="contact">
      <div id="phone" className="col-5">
        <h2>3212 Grand Blvd</h2>
        <h3>St. Louis, MO</h3>
        <div className="hours-holder">
          <ul>
            <li>Wednesday || Tursday: 5pm - 9pm </li>
            <li>Friday || Saturday: 5pm - 10pm </li>
            <li>Sunday Brunch Buffet: 11am - 2:30pm </li>
            <li>Sunday Dinner: 5pm - 9pm </li>
          </ul>
        </div>
      </div>
      <div id="hours" className="col-6">
        hours
      </div>
    </div>
  );
}
export default Contact;
