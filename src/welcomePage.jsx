import './welcomePage.css'
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  const navigateButton = () => navigate("/dataPage");

  return (
    <div className="container">
      <div className="header">
        <h1>Early Head Start's "DRDP Tool"</h1>
      </div>

      <div className="hero">
        <div className="blob-outer">
          <div className="blob-card">
            <svg className="blob-svg" viewBox="0 0 900 700" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"  stopColor="#0bb6af" />
                  <stop offset="100%" stopColor="#089e97" />
                </linearGradient>
              </defs>

              <path fill="url(#blobGrad)" d="
                M140,330
                C 60,300 20,240 30,190
                C 45,120 130,90 230,120
                C 320,146 360,70 445,45
                C 520,24 590,60 640,115
                C 700,180 790,170 850,225
                C 900,270 900,350 860,405
                C 825,452 790,480 770,520
                C 740,580 700,640 610,660
                C 520,680 450,640 410,600
                C 365,555 330,545 270,560
                C 210,575 150,550 130,500
                C 110,450 120,380 140,330 Z" />
            </svg>

            <div className="blob-text">
              <strong>Welcome teachers!
              Here is a tool you can use to find the desired teaching strategies
              based on a child's developmental profile.</strong>
            </div>
          </div>
        </div>

        <button className="next-btn" onClick={navigateButton}>Next</button>
      </div>
    </div>
  );
}

export default WelcomePage;
