import React from "react";
//import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";

// className="page-footer font-small purple pt-4 fixed-bottom"
//style={{position : 'fixed',left :'0',bottom : '0',width : '100%',height : '100px'}}
// className ="navbar fixed-bottom"
//className ="footer fixed-bottom container"
//footer navbar-fixed-bottom
//style={{position : 'absolute',bottom : '0',width : '100%',height : '2.5rem'}}
const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-dark text-white" >
          <div className="row ">
            <div className="col-md-3 py-3">
              <div className="h6">E Commerce</div>
              <hr />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Products</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                    Electronics
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                    Mobiles
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                    Car & bike
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                    Super Market
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                    Travel Cards
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Policy</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                    Return Policy
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                    Terms Of Use
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                    Security
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                    Privacy
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                    EPR Compliance
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Address</div>
              <hr />
              <address>
                <strong>Twitter, Inc.</strong>
                <br />
                1355 Market St
                <br />
                Patna 848208
                <br />
                <abbr title="Phone">P:</abbr> 7070970050
              </address>
              <div className="h6">Customer Care</div>
              <hr />
              <IconTelephone /> +1800 100 1000
              <br />
              <IconEnvelope /> info@email.com
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
