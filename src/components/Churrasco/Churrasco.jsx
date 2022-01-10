// ------------this is where any files this component needs are imported-----------
import "./style.css";
// ------------this is the function that returns this component's UI---------------
function Churrasco(props) {
  return (
    <>
      {/*----------------- #churrasco div has background photo added through CSS------------- */}
      <div id="churrasco" className="row align-items-center">
        <div className="col-8 offset-md-2 textHolder row">
          {/* churrasco Small is the element that holds the text */}
          <div className=" col-6 text-justify churrascoSmall">
            In Brazil, churrasco is the term for a barbecue which originated in
            southern Brazil. It uses a variety of meats, pork, sausage and
            chicken which may be cooked on a purpose-built "churrasqueira", a
            grill with supports for spits or skewers. Come taste the tradition
            friday nights!
          </div>
          <div className="col-6">
            {/*---------- #youTubeDiv links to Churrasco youtube video--------------------*/}
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
            {/* ------vidButton links to Churrasco Menu state through prop function------- */}
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
