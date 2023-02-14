import galary from "../css/Galary.module.css";

export default function Galary() {
  return (
    <>
      {/* <h1 className={galary.main_title}>Simple image overlay hover effects</h1> */}

      <div className={galary.container}>
        <h3 className={galary.title}>Text fadeIn bottom</h3>
        <div className={galary.content}>
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div className={galary.content_overlay}></div>
            <img
              className={galary.content_image}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbR84138rt9CfEWb2o-2ajS35EWZ8FmE6yA&usqp=CAU"
              alt=""
            />
            <div
              className={`${galary.content_details} ${galary.fadeIn_bottom}`}
            >
              <h3 className={galary.content_title}>This is a title</h3>
              <p className={galary.content_text}>This is a short description</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
