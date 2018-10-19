<template>
    <div class="uppass">
        <head_common :title='title'></head_common>
        <div class="update">
            <div class="old password">
                <p>旧密码：</p>
                <input type="text" v-model="password.oldPwd">
            </div>
            <div class="password">
                <p>新密码：</p>
                <input type="password" v-model="password.newPwd">
            </div>
            <div class="password">
                <p>确认密码：</p>
                <input type="password" v-model="beSurepwd">
            </div>
            <div class="logout">
                <button class="logout_btn" @click="this.sure">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
import { Toast } from "mint-ui";
export default {
    components: { head_common,Toast },
    data() {
        return {
            password: {
                newPwd: "",
                oldPwd: ""
            },
            beSurepwd: ""
        };
    },
    methods: {
        sure() {
            if (this.beSurepwd == this.password.newPwd) {
                this.updatepwd();
            } else {
                Toast("输入的两次新密码不同");
            }
        },
        updatepwd() {
            this.$axios
                .get("/user/updatePwd.do", this.password)
                .then(res => {
                    Toast("密码修改成功");
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    created() {
        this.title = this.$route.meta.name;
    }
};
</script>

<style lang="scss" scoped>
.logout {
    height: 47px;
    width: 100%;
}
.logout_btn {
    width: 100%;
    font-size: 16px;
    margin-top: 10px;
    height: 47px;
    background-color: #ef473a;
    border: none;
    color: #fff;
    border-radius: 3px;
}
.uppass {
    margin-top: 44px;
}
.update {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding-top: 50px;
    .password {
        p {
            margin-top: 5px;
            font-size: 18px;
            color: #7b7b7b;
        }
        input {
            width: 300px;
            height: 40px;
            border: 2px solid #ababab;
            border-radius: 5px;
            margin-top: 10px;
            outline: none;
            padding-left: 5px;
        }
    }
}
</style>
