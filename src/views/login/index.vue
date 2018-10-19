<template>
    <div class="login_bg">
        <head_common :title='title'></head_common>
        <div class="login_content">
            <div class="party_logo">
                <img src="../../images/logo.png" alt="">
            </div>
            <div class="login_form">
                <input type="text" placeholder="身份证号" v-model="msg.id_card" class="id_card frame">
                <input type="text" placeholder="密码" v-model="msg.password" class="password frame">
                <button class="login_btn" @click="login">登录</button>

            </div>
        </div>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
export default {
    components: { head_common },
    data() {
        return {
            title: "登录",
            msg: {
                id_card: "1001",
                password: "123456"
            },
            // person_info: {},
            token: ""
        };
    },
    methods: {
        login() {
            var formData = new FormData();
            formData.append("id_card", this.msg.id_card);
            formData.append("password", this.msg.password);
            this.$axios
                .post("/user/userLogin.do", formData)
                .then(res => {
                    // this.person_info = res.data.data;
                    this.$store.commit("SET_TOKEN", res.data.token);

                    if (this.$store.state.token) {
                        this.$router.push("/");
                        console.log(store.state.token);
                    } else {
                        this.$router.replace("/login");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
<style lang="scss">
.login_bg {
    width: 100%;
    height: 100%;
    margin-top: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
    background-color: #c50206;
    .login_content {
        .party_logo {
            width: 100%;
            position: relative;
            img {
                display: block;
                width: 204px;
                margin: 30px auto;
            }
        }
        .login_form {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 300px;
            height: 155px;
            margin: 0 auto;
            .frame {
                background-color: #c50206;
                border: 1px solid gold;
                height: 40px;
                border-radius: 3px;
                color: #fff;
                &::-webkit-input-placeholder {
                    color: #fff;
                    vertical-align: middle;
                    font-size: 15px;
                    text-indent: 10px;
                }
            }
            .login_btn {
                height: 40px;
                background-color: #e3574f;
                border: none;
                color: #fff;
                border-radius: 3px;
                cursor: pointer;
            }
        }
    }
}
</style>
