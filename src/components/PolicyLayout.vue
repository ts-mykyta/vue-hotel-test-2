<script setup>
import Header from './HeaderLayout.vue';
import Footer from './FooterLayout.vue';

const props = defineProps({
    policyName: {
        type: String,
        required: true
    }
})
</script>

<template>
    <Header customClass="header--policy" />

    <main class="main">
        <div class="container">
            <div class="privacy">
                <h2 class="privacy__subtitle">Your data, your trust</h2>
                <h1 class="privacy__title">{{ props.policyName }}</h1>
                <div class="privacy__text">Our {{ props.policyName }} outlines how we collect, use, and protect your information to ensure a secure and transparent online experience.</div>


                <div class="privacy__block">
                    <div class="privacy__block-title">Introduction</div>
                    <div class="privacy__block-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan sit amet libero vel fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Suspendisse cursus, sapien vel ultricies ullamcorper, ligula odio laoreet turpis, a fermentum felis purus id lectus.
                    </div>
                </div>

                <div class="privacy__block">
                    <div class="privacy__block-title">Personal identification information</div>
                    <div class="privacy__block-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id luctus dui. Nam facilisis justo nec odio bibendum, vitae bibendum velit blandit. Vestibulum gravida justo nec sapien consectetur, in eleifend velit cursus.
                    </div>
                </div>

                <div class="privacy__block">
                    <div class="privacy__block-title">Non-personal identification information</div>
                    <div class="privacy__block-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id luctus dui. Nam facilisis justo nec odio bibendum, vitae bibendum velit blandit. Vestibulum gravida justo nec sapien consectetur, in eleifend velit cursus.
                    </div>
                </div>

                <div class="privacy__block">
                    <div class="privacy__block-title">Payment information</div>
                    <div class="privacy__block-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod tortor vitae purus cursus, a eleifend mauris fermentum. Nunc vehicula orci ut purus cursus, ac congue est lacinia.
                    </div>
                </div>

                <div class="privacy__block">
                    <div class="privacy__block-title">How we use collected information</div>
                    <div class="privacy__block-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac luctus ligula. Aliquam tincidunt ultrices magna, vel ullamcorper odio aliquam et. Aenean vel aliquet justo.
                    </div>
                </div>

                <div class="privacy__block">
                    <div class="privacy__block-title">How we protect your information</div>
                    <div class="privacy__block-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ullam officia et fuga porro? Quaerat similique harum a. Recusandae ullam quaerat, nesciunt voluptatibus impedit tempora. Dolores nam molestias sapiente sunt.
                    </div>
                </div>

                <div class="privacy__block">
                    <div class="privacy__block-title">Sharing your personal information</div>
                    <div class="privacy__block-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam repudiandae sit in quisquam. Veniam rem saepe quisquam quod dolorum enim? Maiores amet, qui sit quidem eaque at labore tenetur consequuntur!
                    </div>
                </div>

                <div class="privacy__block">
                    <div class="privacy__block-title">Cookies</div>
                    <div class="privacy__block-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim iusto et quibusdam eaque sint maiores? Aperiam eveniet suscipit saepe possimus debitis nihil repellat fugiat distinctio accusamus nulla, earum soluta illo!
                    </div>
                </div>

                <div class="privacy__block">
                    <div class="privacy__block-title">Changes to this {{ props.policyName }}</div>
                    <div class="privacy__block-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos, earum quibusdam quam, accusamus vel tempora labore quae laudantium distinctio facere optio unde recusandae quo exercitationem deserunt omnis ab culpa.
                    </div>
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.main {
    background: $pastel;
    padding-top: 60px;
}

.privacy {
    position: relative;
    padding: 80px 0;

    &__subtitle {
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-align: center;
    }

    &__title {
        margin-bottom: 24px;
        font-family: Cardo;
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: -0.02em;
        text-align: center;

    }

    &__text {
        margin: 0 auto 65px auto;
        font-family: Rubik;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        text-align: center;
        max-width: 800px;
    }

    &__block {
        margin-bottom: 48px;
    }

    &__block-title {
        margin-bottom: 20px;
        font-family: Rubik;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
        text-align: left;
    }

    &__block-text {
        font-family: Rubik;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
    }
}
</style>