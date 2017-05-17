<style>
.header {
    height: 78px;
    margin-top: 30px;
}

.header .ban-box {
    width: 1100px;
    margin: 0 auto;
    line-height: 78px;
    color: #36baff;
    font-size: 15px;
    text-align: right;
    background: url(../assets/img/logo.png)no-repeat;
}

.login-box {
    background: #EDEFF0
}

.login-box .login-box-bg {
    width: 1100px;
    margin: 0 auto;
    height: 600px;
    background: url(../assets/img/login-box.jpg) center bottom no-repeat;
}

.login-box-form {
    background: #ffffff;
    float: right;
    width: 350px;
    padding: 40px;
    margin-top: 80px;
}

.title {
    font-size: 18px;
    color: #000;
    line-height: 23px;
    height: 23px;
    margin-bottom: 23px;
}

.no_id {
    text-align: right;
    margin-top: 10px;
    margin-bottom: 10px;
}

.no_id a {
    font-size: 12px;
    color: #999999;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.qq_login {
    background-image: url(../assets/img/passport.png);
    width: 38px;
    height: 38px;
    background-size: 155px 106px;
    display: block;
    float: right;
    margin-left: 5px;
}

.wexin_login {
    background-image: url(../assets/img/passport.png);
    width: 38px;
    height: 38px;
    background-size: 155px 106px;
    display: block;
    background-position: -78px 0;
    float: right;
    margin-left: 5px;
}

.weibo_login {
    background-image: url(../assets/img/passport.png);
    width: 38px;
    height: 38px;
    background-size: 155px 106px;
    float: right;
    margin-left: 5px;
    display: block;
    background-position: -38px 0;
}

.logins span {
    line-height: 38px;
}

.footer {
    display: block;
    font-size: 12px;
    width: 1100px;
    margin: 0 auto;
    text-align: right;
    height: 63px;
    overflow: hidden;
    margin-top: 25px;
}
</style>  

<template>
    <div>
        <!-- 顶部 开始 -->
        <div class="header">
            <div class="ban-box">&nbsp;</div>
        </div>
        <div class="login-box">
            <div class="login-box-bg">
                <div class="login-box-form">
                    <!-- iView 登录 -->
                    <div class="title">欢迎登录足下课堂！</div>
                    <i-form ref="formInline" :model="formInline" :rules="ruleInline">
                        <Form-item prop="username">
                            <Input size="large" v-model="formInline.username" placeholder="用户名"></Input>
                        </Form-item>
                        <Form-item prop="password">
                            <Input size="large" v-model="formInline.password" type="password" placeholder="密码"></Input>
                        </Form-item>
                        <div class="no_id">
                            <a id="noAccount1" class="fl" href="/admin/register.html">没有账号？点击注册！</a>&nbsp; &nbsp;&nbsp;
                            <a id="noAccount" class="fr" href="/zuxia/forget.html">忘记密码？</a>
                        </div>
                        <Form-item>
                            <i-button type="success" size="large" @click.native="handleSubmit('formInline')" long>登录</i-button>
                        </Form-item>
                    </i-form>
                    <div class="logins">
                        <span>其他方式登录</span>
                        <a href="/auth/wechat" class="wexin_login"></a>
                        <a href="/auth/weibo" class="weibo_login"></a>
                        <a href="/auth/qq" class="qq_login"></a>
                    </div>
                    <!--  iView 登录 -->
                </div>
                <!--  登录盒子 -->
            </div>
        </div>
        <!-- login-box -->
        <div class="footer">
            ©2015 - 2016 noonly.com, All Rights Reserved Version : 0.5.404&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://m.noonly.com/noonlywadget.exe" style="color:red">校外版客户端下载 </a>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            formInline: {
                username: '',
                password: '',
            },
            ruleInline: {
                username: [{
                    required: true,
                    message: '请填写用户名',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请填写密码',
                    trigger: 'blur'
                }, {
                    type: 'string',
                    min: 1,
                    message: '密码长度不能小于6位',
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.ajax.post('/Login/web',this.formInline).then((res) => {
                        var _data = res.data;
                        if(!_data.status){
                            this.$Message.error(_data.msg);
                        } else {
                            this.$router.push('/home');
                        }
                    }).catch((error) => {
                        this.$Message.error(error);
                    });
                } else {
                    this.$Notice.error({
                        title: '表单验证失败哟~'
                    });
                }
            })
        },
        handleReset(val) {
            console.log(val)
        }
    }
}

</script>
