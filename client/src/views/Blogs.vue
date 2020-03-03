<template>
<div class = "container">
  <div class="uk-card uk-card-default uk-grid-collapse uk-margin uk-card-hover blog-card" uk-grid>
      <div>
          <div class="uk-card-body">
              <div class = "extra-info"> 
                <span class= "duration">7</span> min read | <span class= "date">March 1, 2020</span>
              </div>
              <div class = "head"> 
                <span class = "title">Getting an Internship Offer From Google</span> - <span class = "author">John Doe</span>
              </div>
              <p class = "summary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              <p>Read more </p>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Blog',

}
</script>

<style>

span.title{
  font-size: 22px;
}
span.author{
  font-size: 17px;
}
.extra-info{
  margin-bottom: 5px;
}

.blog-card{
    cursor: pointer;
}

</style>