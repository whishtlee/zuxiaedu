



<template>
    <div>
        哈哈是短</div>
</template>












<script>
export default {
    data() {
        return {

        }
    }, created() {
        this.ajax.post('/Login/getUserInfo').then((res) => {
            var _data = res.data;
            if (!_data.status) {
                this.$Message.error(_data.msg);
            } else {
                this.$router.push('/home');
            }
        }).catch((error) => {
            this.$Message.error(error);
        });
    }
}
</script>
