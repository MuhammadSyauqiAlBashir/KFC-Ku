export default function Carousel() {
  return (
    <div className="h-screen bg-white">
      <div
        className="carousel carousel-center max-w-full p-4 space-x-4"
        style={{ marginTop: -15 }}
      >
        <div className="carousel-item w-screen">
          <img
            src="https://static.order.kfcku.com/images/content/home/carousel/lg/Web-Click-Combo.webp?v=3r29P3"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item w-screen">
          <img
            src="https://static.order.kfcku.com/images/content/home/carousel/lg/Web-Banner-Super-Duk-Duk.webp?v=3r29P3"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item w-screen">
          <img
            src="https://static.order.kfcku.com/images/content/home/carousel/lg/jagonya_original.webp?v=3r29P3"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item w-screen">
          <img
            src="https://static.order.kfcku.com/images/content/home/carousel/lg/Web-Click-Combo.webp?v=3r29P3"
            className="rounded-box"
          />
        </div>
      </div>
    </div>
  );
}
