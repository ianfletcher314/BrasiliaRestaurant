import "./style.css";

function Contact() {
  return (
    <div className="contact row" id="contact">
      <div id="phone" className="col-5">
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
        <div className="map-holder">
          <h3 className="logoSmall">3212 Grand Bulivard St. Louis, MO</h3>
          {/* <h4></h4> */}
          <iframe
            title="googleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.1865676419293!2d-90.24492294883655!3d38.59857587200708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4683ad31d91%3A0x7a790fceb95709e3!2sBrasilia%20Bar%20%26%20Restaurant!5e0!3m2!1sen!2sus!4v1639177245498!5m2!1sen!2sus"
            width="550"
            height="250"
            allowfullscreen=""
            loading="lazy"
            id="googleMap"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Contact;
