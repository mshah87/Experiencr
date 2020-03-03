<template>
<div>
    <div id="modal-google" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body contain-it" uk-overflow-auto>
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="company-name">Google</h2>
           <Blog/>
        </div>
    </div>
    <div id="modal-microsoft" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body contain-it" uk-overflow-auto>
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="company-name">Microsoft</h2>
           <Blog/>
        </div>
    </div>

    <div id="modal-facebook" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body contain-it" uk-overflow-auto>
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="company-name">Facebook</h2>
           <Blog/>
        </div>
    </div>

    <div id="modal-apple" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body contain-it" uk-overflow-auto>
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="company-name">Apple</h2>
           <Blog/>
        </div>
    </div>

    <div id="modal-amazon" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body contain-it" uk-overflow-auto>
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="company-name">Amazon</h2>
           <Blog/>
        </div>
    </div>

    <div id="modal-airbnb" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body contain-it" uk-overflow-auto>
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="company-name">Airbnb</h2>
           <Blog/>
        </div>
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