import styled from 'styled-components';

const TextLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader m-0 p-0">
        <svg viewBox="0 0 600 120" className="shape">
          <text x="50%" y="50%" textAnchor="middle">Spotify</text>
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
*{
padding:0;
margin:0;
}
  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shape {
    width: 100%;
    height: 100%;
  }

  .shape text {
    font-size: 45px;
    font-family: sans-serif;
    /*   keep transparent if you only want outline */
    fill: none;
    /* 🔹 increase this to make stroke thicker */
    stroke-width: 1px;
    /* outline color */
    stroke: rgba(30, 255, 0, 0.719);
    /*path length*/
    stroke-dasharray: 300;
    /* hidden at start*/
    stroke-dashoffset: 300;
    animation: draw 1.5s linear infinite alternate;
    letter-spacing: 5px;
  }

  @keyframes draw {
    to {
      /* reveal stroke */
      stroke-dashoffset: 0;
    }
  }`;

export default TextLoader;
