import "../css/Logo.scss";

export default function Logo() {
  return (
    <>
      <Cocktail />
      <Title />
    </>
  );
}

function Cocktail() {
  return (
    <>
      <div id="cocktail">
        <div id="straw"></div>
        <div id="cocktailglass"></div>
        <div id="glassfoot"></div>
        <div id="cocktaildetail">
          <div></div>
          <div></div>
        </div>
        <div id="cocktailbubble">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

function Title() {
  return (
    <>
      <h1 id="title" style={{}}>
        <span>A</span>
        <span>L</span>
        <span>J</span>
        <span>U</span>
        <span>N</span>
        <span>G</span>
      </h1>
    </>
  );
}
