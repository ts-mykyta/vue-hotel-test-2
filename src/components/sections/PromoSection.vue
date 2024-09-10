<script setup></script>

<template>
    <section class="promo section">
        <div class="container">
            <div class="promo__wrapper">
                <div class="promo__subtitle">Looking for a luxurious experience?</div>
                <h1 class="promo__title">Welcome to Casino Hotel Explorer</h1>
                <div class="promo__text">
                    Unveil the ultimate in luxury and entertainment as you embark on a journey through the world's most exquisite casino hotels. Explore opulent accommodations, thrilling gaming experiences, and unparalleled hospitality all in one place. 
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.promo {
    background: url("../../assets/img/promo_desk.png") center center / cover no-repeat;

    &__wrapper {
        min-height: 720px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__subtitle {
        padding: 3px 8px;
        background: #CB946A26;
        color: $brown-light;
        border-radius: 8px;
        margin-bottom: 16px;

        font-family: Cardo;
        font-size: 18px;
        font-weight: 700;
        line-height: 24.37px;
        text-align: left;
    }

    &__title {
        color: $white;
        margin-bottom: 16px;

        font-family: Cardo;
        font-size: 55px;
        font-weight: 700;
        line-height: 75.82px;
        text-align: center;
    }

    &__text {
        color: $white;

        font-family: Rubik;
        font-size: 16px;
        font-weight: 400;
        line-height: 18.96px;
        text-align: center;
    }


    @media (min-width: 768px) {
        .promo {
            &__subtitle {
                font-family: Cardo;
                font-size: 20px;
                font-weight: 700;
                line-height: 27.08px;
                text-align: left;
            }

            &__title {
                font-family: Cardo;
                font-size: 78px;
                font-weight: 700;
                line-height: 105.61px;
                text-align: center;

                max-width: 800px;
            }

            &__text {
                font-family: Rubik;
                font-size: 16px;
                font-weight: 400;
                line-height: 18.96px;
                text-align: center;

                max-width: 800px;
            }
        }
    }
    
}
</style>