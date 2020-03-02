<template>
  <vk-grid matched class="uk-child-width-1-3@s">
    <div>
      <vk-card href="#modal-container" uk-toggle padding="large" hover>
            <div class="thumb">
            <img src='../assets/msft.png' alt="Microsoft" class="company-img" />
          </div>
      </vk-card>
    </div>
    <div>
      <vk-card href="#modal-container" uk-toggle padding="large" hover>
        <div class="thumb">
          <img src='../assets/google.png' alt="Google" class="company-img" />
        </div>
      </vk-card>
    </div>

    <Modal/>

    <div>
      <vk-card href="#modal-container" uk-toggle padding="large" hover>
        <div class="thumb">
          <img src='../assets/fb.png' alt="Facebook" class="company-img-fb" />
        </div>
      </vk-card>
    </div>
    <div>
      <vk-card href="#modal-container" uk-toggle padding="large" hover>
        <div class="thumb">
          <img src='../assets/apple.png' alt="Apple" class="company-img" />
        </div>
      </vk-card>
    </div>
    <div>
      <vk-card href="#modal-container" uk-toggle padding="large" hover>
        <div class="thumb">
          <img src='../assets/amazon.png' alt="Amazon" class="company-img-amazon" />
        </div>
      </vk-card>
    </div>
    <div>
      <vk-card href="#modal-container" uk-toggle padding="large" hover>
        <div class="thumb">
          <img src='../assets/airbnb.png' alt="Airbnb" class="company-img-airbnb" />
        </div>
      </vk-card>
    </div>
  </vk-grid>
</template>

<script>
// import microsoft from '../assets/msft.png'
import Modal from './Modal'

export default {
  name: "Companies",
  components:{
    Modal,
  },
   data() {
        return {
          show1: false,
    };
  }
}
</script>

<style scoped>

/* card styling */
.company-img {
  width: 80px;
}

.company-img-fb {
  width: 170px;
  position: absolute;
  display: block;
  top: 40%;
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

.company-img-airbnb {
  width: 80px;
  position: absolute;
  display: block;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.uk-grid {
    margin-left: 30px;
    margin-right: 60px;
}

.uk-card{
  border-radius: 20px;
  cursor: pointer;
}
</style>