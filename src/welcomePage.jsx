import './welcomePage.css'
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  const navigateButton = () => navigate("/dataPage");

  return (
    <div className="container">
      <div className="header">
        <div className = "headerText">Early Head Start's Teaching Practices Tool</div>
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
                C 700,240 790,170 850,225
                C 900,270 900,350 860,405
                C 840,420 740,520 770,485
                C 720,600 660,620 610,660
                C 520,680 450,640 410,600
                C 365,555 330,545 270,560
                C 210,575 150,550 130,500
                C 110,450 120,380 140,330
                C 450,450,120,380,140,330
                Z" />
            </svg>

            <div className="blob-text">
              <p><strong>This tool, aligned to DRDP</strong><strong>2015, will allow you to select </strong>
              <strong>filters to find desired</strong> <strong>teaching strategies based on </strong>
              <strong>based on a child's</strong>
              <strong> a child's developmental profile</strong></p>
            </div>
          </div>
        </div>


      <div className="hero2">
        <div className="blob-outer2">
          <div className="blob-card2">
            <svg className="blob-svg2" viewBox="0 0 900 700" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <linearGradient id="blobGrad2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"  stopColor="#f772e3" />
                  <stop offset="100%" stopColor="#f5a1ff" />
                </linearGradient>


                <filter id="blobShadowBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>


                <path id="calloutPath" d="
                  M 90,330
                  C  60,260  150,195 255,185
                  C 360,175  470,150 550,145
                  C 640,140  730,155 800,195
                  C 860,230  870,280 840,320
                  C 800,360  720,365 715,425
                  C 720,505  840,525 790,565
                  C 730,610  645,630 575,640
                  C 500,650  445,635 405,605
                  C 365,575  330,565 270,575
                  C 205,585  155,565 125,528
                  C  98,495  100,445 126,408
                  C 150,376  110,350  90,330
                  Z" />
              </defs>


                {/* shadow layers (behind) */}
                <use href="#calloutPath" fill="#1f2630" opacity=".28"
                    transform="translate(22 16) scale(0.985)"
                    filter="url(#blobShadowBlur)" />
                <use href="#calloutPath" fill="#1f2630" opacity=".15"
                    transform="translate(10 8) scale(0.994)"
                    filter="url(#blobShadowBlur)" />

                {/* main pink blob (on top) */}
                <use href="#calloutPath" fill="url(#blobGrad2)" />

            </svg>

            <div className="blob-text2">
              <strong>Welcome Teachers!</strong>
            </div>

          </div>
        </div>
      </div>

      <div className="photo-blob">
        <svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>

            <clipPath id="bubbleClip">
              <path id="bubblePath" d="
                M 125,280
                C 170,215 340,165 540,155
                C 705,148 830,205 865,285
                C 880,320 860,360 815,395
                C 770,430 760,470 775,505
                C 735,575 600,610 490,620
                C 390,630 300,610 315,590
                C 250,573 205,548 190,520
                C 175,495 180,465 195,435
                C 210,405 185,385 160,365
                C 135,345 120,320 125,280
                Z" />
            </clipPath>


            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="9" result="b"/>
              <feOffset in="b" dx="10" dy="10" result="o"/>
              <feColorMatrix in="o" type="matrix"
                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 .25 0" result="s"/>
              <feMerge>
                <feMergeNode in="s"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <image
            href="/images/your-photo.jpg"
            width="100%" height="100%"
            preserveAspectRatio="xMidYMid slice"
            clip-path="url(#bubbleClip)"
            filter="url(#softShadow)" />
        </svg>

      </div>



  <button className="next-btn" onClick={navigateButton}>Next</button>
      </div>
    </div>


  );
}


export default WelcomePage;
