<template>
    <div>
        <elheader :mtitle="mtitle"></elheader>
        <div class="blank"></div>
        <div class="main_cont">
            <form id="form_addassign">
                <textarea name="addasign" id="addassign" class="textarea_style">
                </textarea>
                <div class="btn_wrapper">
                    <div id="add" @click="isadd" class="btn_style dokay">ok</div>
                    <div id="cancel" @click="iscancel" class="btn_style dcancel">cancel</div>
                </div>
            </form>
        </div>
        <div class="success_info">add success</div>
        <div class="blank"></div>
        <elfooter :indexHtml="indexHtmlVal"></elfooter>
    </div>
</template>
<script>
import buttoncounter from '../components/buttoncounter.vue'
import elheader from '../components/elheader.vue'
import elfooter from '../components/elfooter.vue'
export default {
    data() {
        return {
            mtitle: 'add',
            indexHtmlVal:0,
            membername: "",           
            isLogin: isEmptyObject()
        }
    },
    components: {
        elheader,
        elfooter
    },
    computed: {


    },
    methods: {
        isadd: function() {
            let that = this;
            var datapost = {};
            /*alert(that.name+":"+that.pwd);*/
            datapost.context = $('textarea[name="addasign"]').val();            
            datapost.date = new Date().toLocaleDateString();
            datapost.name = that.membername;
            console.log(datapost)
            that.$http.post(api + '/addassignments', datapost).then(response => {
                /*that.$router.push(that.$route.query.redirect || '/index');*/
                // success callback
                var showInfo = function() {
                        $('.success_info').show();
                    },
                    hideInfo = function() {
                        $('.success_info').hide();
                        that.$router.push(that.$route.query.redirect || '/');
                    },
                    ishow, ihide;
                ishow = setTimeout(showInfo);
                ihide = setTimeout(hideInfo, 1500);
                
            }, response => {
                // error callback
            });
        }
    },
    mounted() {
        let that = this;
        $(function() {

            if (!that.isLogin) {
                that.$router.push(that.$route.query.redirect || '/login');
            } else {
                that.membername = lsget('uid', 1000 * 60 * 60);
                /*console.log(that.membername)*/
            }
            /*checkAndRedirect('/login', that);*/



        })
    }
}

</script>
<style>
</style>
