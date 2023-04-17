import React from 'react'

const slideShow = () => {
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://media.wired.com/photos/6318ecabf2203b5586fabe75/master/w_2580,c_limit/Apple-iPhone-14-Gear.jpg" alt="iPhone-14" />
    </div>
    <div class="carousel-item">
      <img src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202303310138" alt="iPhone-14" />
    </div>
    <div class="carousel-item">
      <img src="https://www.apple.com/lae/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png" class="d-block w-100" alt="iPhone-14" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default slideShow
