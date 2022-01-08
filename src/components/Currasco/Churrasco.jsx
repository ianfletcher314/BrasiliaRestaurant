import "./style.css";
function Churrasco(props) {
  return (
    <>
      <div id="churrasco" className="row align-items-center">
        <div className="col-8 offset-md-2 textHolder row">
          <div className=" col-6 text-justify churrascoSmall">
            In Brazil, churrasco is the term for a barbecue which originated in
            southern Brazil. It uses a variety of meats, pork, sausage and
            chicken which may be cooked on a purpose-built "churrasqueira", a
            grill with supports for spits or skewers. Come taste the tradition
            friday nights!
          </div>
          <div className="col-6">
            <iframe
              id="youTubeDiv"
              width="360"
              height="215"
              src="https://www.youtube.com/embed/dYy3jWR2OZY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div
              className="vidButton"
              onClick={() => {
                props.function("churrasco");
              }}
            >
              <div>Friday Night</div>
              <div>Churrasco Menu</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Churrasco;
