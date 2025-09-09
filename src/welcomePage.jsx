import './welcomePage.css'
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  const navigateButton = () => navigate("/dataPage");

  return (
    <div className="container">
      <header className="header header--compact" role="banner">
        <h1 className="header-title">Early Head Start Learning Library</h1>
        <p className="header-subtitle">Create data-driven lesson and action plans for children’s growth</p>
      </header>


      <div className="hero">
        <div className="blob-outer">
          <div className="blob-card">
            <svg className="blob-svg" viewBox="0 0 900 700" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"  stopColor="#0bb6af" />
                  <stop offset="100%" stopColor="#089e97" />
                </linearGradient>

                {/* blur for soft shadow */}
                <filter id="blob1ShadowBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>

                {/* reuseable shape */}
                <path id="blob1Path" d="
                  M140,330
                  C 60,300 20,240 30,190
                  C 45,120 130,90 230,120
                  C 320,146 360,70 445,45
                  C 520,24 590,60 640,115
                  C 700,240 790,170 850,225 
                  C 900,270 900,350 860,405
                  C 840,420 740,520 770,485
                  C 720,600 660,620 610,647
                  C 520,680 450,640 410,600
                  C 365,555 330,545 270,560
                  C 210,575 150,550 130,500
                  C 110,450 120,380 140,330 
                  C 450,450,120,380,140,330
                  Z" />
              </defs>

              {/* hard matte (crisp offset) */}
              <use href="#blob1Path" fill="#1f2630" opacity="1" transform="translate(14 12)" />

              {/* soft shadows (two layers) */}
              <use href="#blob1Path" fill="#1f2630" opacity=".28"
                  transform="translate(24 18) scale(0.985)"
                  filter="url(#blob1ShadowBlur)" />
              <use href="#blob1Path" fill="#1f2630" opacity=".15"
                  transform="translate(12 9) scale(0.994)"
                  filter="url(#blob1ShadowBlur)" />

              {/* main blob */}
              <use href="#blob1Path" fill="url(#blobGrad)" />
            </svg>


            <div className="blob-text">
              <p><strong>Welcome teachers!</strong><strong>Here is a tool that is aligned to</strong><strong> DRDP 2015, allowing you to</strong> 
              <strong>find desired teaching</strong> <strong> strategies based on a child's</strong> 
              <strong>developmental profile.</strong></p>
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
                  M140,330
                  C 60,300 20,240 30,190
                  C 45,120 130,90 230,120
                  C 320,146 360,70 445,45
                  C 520,24 590,60 640,115
                  C 700,240 790,170 850,225 
                  C 900,270 900,350 860,405
                  C 840,420 740,520 770,485
                  C 720,600 660,620 610,647
                  C 520,680 450,640 410,600
                  C 365,555 330,545 270,560
                  C 210,575 150,550 130,500
                  C 110,450 120,380 140,330 
                  C 450,450,120,380,140,330
                  Z" />
              </defs>

              {/* hard matte (crisp offset) */}
              <use href="#calloutPath" fill="#1f2630" opacity="1"
                  transform="translate(14 12)" />

              {/* soft shadow layers (behind) */}
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
              <p><strong>Please select all filters on the</strong>
              <strong>next page to display the best</strong>
              <strong>practices for you and your</strong>
              <strong>children</strong></p>
            </div>

          </div>
        </div>
      </div>

      <div className="photo-blob">
        <svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <path id="bubblePath" d="
              M 200,400
              C 140,245 235,135 360,120
              C 460,120 420,140 520,105
              C 620,70 760,135 845,280
              C 880,370 822,455 810,470
              C 740,585 610,525 490,510
              C 370,495 295,562 310,550
              C 210,607 185,585 178,545
              C 170,505 180,465 200,435
              C 225,600 195,575 185,545
              C 175,470 185,470 200,410
              Z" />

            <clipPath id="bubbleClip">
              <use href="#bubblePath" />
            </clipPath>

         
            <filter id="softShadowR" x="-35%" y="-25%" width="170%" height="170%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="b"/>
              <feOffset in="b" dx="12" dy="10" result="o"/>
              <feColorMatrix in="o" type="matrix"
                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 .25 0" result="s"/>
              <feMerge><feMergeNode in="s"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>

           
            <filter id="softShadowL" x="-35%" y="-25%" width="170%" height="170%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="b"/>
              <feOffset in="b" dx="-12" dy="10" result="o"/>
              <feColorMatrix in="o" type="matrix"
                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 .25 0" result="s"/>
              <feMerge><feMergeNode in="s"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

    
          <use href="#bubblePath" fill="#1f2630" opacity="1"
              transform="translate(14 12)" />

       
          <use href="#bubblePath" fill="#1f2630" opacity="1"
              transform="translate(-14 12)" />

    
          <use href="#bubblePath" fill="#1f2630" opacity=".28"
              transform="translate(24 18) scale(0.985)"
              filter="url(#softShadowR)" />
          <use href="#bubblePath" fill="#1f2630" opacity=".15"
              transform="translate(10 8) scale(0.994)"
              filter="url(#softShadowR)" />

       
          <use href="#bubblePath" fill="#1f2630" opacity=".22"
              transform="translate(-24 18) scale(0.985)"
              filter="url(#softShadowL)" />
          <use href="#bubblePath" fill="#1f2630" opacity=".12"
              transform="translate(-10 8) scale(0.994)"
              filter="url(#softShadowL)" />

          <image
            href="/images/Kids.png"
            width="100%" height="85%"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#bubbleClip)" />
        </svg>

      </div>





  <button className="next-btn" onClick={navigateButton}>Next</button>
      </div>
    </div>

  
  );
}


export default WelcomePage;
