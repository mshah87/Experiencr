<template>
<div class="band">
  <div class="microsoft-card">
    <a href="" class="card">
      <div class="thumb">
        <img src='../assets/msft.png' alt="Microsoft" class="company-img" />
      </div>
    </a>
  </div>
  <div class="google-card">
    <a href="" class="card">
      <div class="thumb">
        <img src='../assets/google.png' alt="Google" class="company-img" />
      </div>
    </a>
  </div>
  <div class="facebook-card">
      <a href="" class="card">
      <div class="thumb">
        <img src='../assets/fb.png' alt="Facebook" class="company-img-fb" />
      </div>
    </a>
  </div>
  <div class="apple-card">
     <a href="" class="card">
      <div class="thumb">
        <img src='../assets/apple.png' alt="Apple" class="company-img-apple" />
      </div>
    </a>
  </div>
  <div class="amazon-card">
      <a href="" class="card">
      <div class="thumb">
        <img src='../assets/amazon.png' alt="Amazon" class="company-img-amazon" />
      </div>
    </a>
  </div>
  <div class="airbnb-card">
      <a href="" class="card">
      <div class="thumb">
        <img src='../assets/airbnb.png' alt="Airbnb" class="company-img" />
      </div>
    </a>
  </div>
</div>
</template>

<script>
// import microsoft from '../assets/msft.png'
// import google from 
// import apple from 
// import amazon from 
// import facebook from 

export default {
    name: "Companies"
    // data(){
    //     return {
    //         msft: microsoft
    //     }
    // }
}
</script>

<style scoped>
.band {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 25px;
}
@media (min-width: 30em) {
  .band {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 60em) {
  .band {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  background: white;
  text-decoration: none;
  border-radius: 20px;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 60%;
  position: relative;
  top: 0;
  transition: all .2s ease-in;
}
.card:hover {
  top: -6px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}
.card .thumb {
  padding-bottom: 60%;
  background-size: cover;
}

/* card styling */
.company-img {
  width: 80px;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.company-img-fb {
  width: 170px;
  position: absolute;
  display: block;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.company-img-apple {
  width: 200px;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.company-img-amazon {
  width: 100px;
  position: absolute;
  display: block;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>