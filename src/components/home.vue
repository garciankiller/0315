<template>
    <div>
        <div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="  carousel-item bg-cover active" 
            style="background-image: url('https://images.unsplash.com/photo-1480632563560-30f503c09195?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'); height:60vh;"
            >            
            <div class="bg-lighter carousel-caption d-none d-md-block">
              <h4>水果禮盒</h4>
              <p>凡是當日壽星，可以免費額外獲得當月熟成水果禮盒，以及專屬的好禮</p>
            </div>
          </div>
          <div class=" carousel-item bg-cover"
            style="background-image: url('https://images.unsplash.com/photo-1437750769465-301382cdf094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80'); height:60vh;"
            >
            <div class="bg-lighter carousel-caption d-none d-md-block" style="color:blue;" >
              <h4>開店優惠全館六六折</h4>
              <p>六六折代碼優惠代碼:666666</p>
            </div>
          </div>
          <div class=" carousel-item bg-cover"
            style="background-image: url('https://images.unsplash.com/photo-1535227798054-e4373ef3795a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1344&q=80'); height:60vh;"
          
            >
            <div class="bg-lighter carousel-caption d-none d-md-block" style="color:#333;">
              <h4>不含農藥</h4>
              <p>通過999項農藥殘留檢測，要您吃得安心。</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <section class="bg-secondary bg-cover section_threeintroduct">
      <div class="container-fluid">
        <div class="row text-white text-center">
          <div class="col-md-4">
            <div class="section_threeintroduct_box section_threeintroduct_box_1 p-5 bg-cover h-100">
              <div class="display-2 mb-3">
                <i class="fas fa-cloud-sun"></i>
                
              </div>

              <h3>台灣產</h3>
              <p>台灣擁有得天獨厚的地理位置及氣候條件，出產的水果一級棒</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="section_threeintroduct_box section_threeintroduct_box_2 p-5 bg-cover h-100">
              <div class="display-2 mb-3">
                <i class="far fa-lemon"></i>
              </div>
              <h3>當季水果</h3>
              <p>當季盛產水果通通都有</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="section_threeintroduct_box section_threeintroduct_box_3 p-5 bg-cover h-100">
              <div class="display-2 mb-3">
                <i class="fas fa-truck-moving"></i>
              </div>
              <h3>產地直送</h3>
              <p>24小時立即到貨，宅派到府</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>