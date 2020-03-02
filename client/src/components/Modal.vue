<template>
    <div id="modal-container" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body contain-it" uk-overflow-auto>
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="company-name">Google</h2>
           <Blog/>
        </div>
    </div>
</template>
    
<script>
import Blog from '../views/Blogs'

export default {
    name: 'Modal',
    components:{
        Blog
    },
    data() {
        return {};
  }
}
</script>


<style>
.uk-modal-container .uk-modal-dialog {
    border-radius: 10px;
    width: 1100px !important;
}

.uk-modal-dialog.uk-modal-body.contain-it.uk-overflow-auto{
  max-height: 600px !important;
}

</style>