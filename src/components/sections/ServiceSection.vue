<script setup></script>

<template>
    <section class="services section">
        <div class="container">
            <div class="services__wrapper">
                <div class="services__img">
                    <img src="/services.png" alt="services">
                </div>

                <div class="services__content">
                    <div class="services__subtitle subtitle">About Our Hotels</div>
                    <h2 class="services__title title">Services Duluxe</h2>

                    <div class="services__text">
                        Our curated list of services ensures that your stay is comfortable, convenient, and memorable. From 24-hour room service and state-of-the-art fitness centers to luxurious spas and top-rated restaurants, we have everything you need to enjoy your stay to the fullest.
                    </div>

                    <div class="services__container">
                        <div class="service">
                            <div class="service__title">
                                <img src="/service_1.png" alt="service icon">
                                <span>Infinity Pool</span>
                            </div>
                            <div class="service__text">
                                Enjoy the sensation of swimming into horiizon with our infinity pool where the water 
                            </div>
                        </div>

                        <div class="service">
                            <div class="service__title">
                                <img src="/service_2.png" alt="service icon">
                                <span>Fitness & Spa</span>
                            </div>
                            <div class="service__text">
                                Enjoy the sensation of swimming into horiizon with our infinity pool where the water 
                            </div>
                        </div>

                        <div class="service">
                            <div class="service__title">
                                <img src="/service_3.png" alt="service icon">
                                <span>Dining Restaurants</span>
                            </div>
                            <div class="service__text">
                                Enjoy the sensation of swimming into horiizon with our infinity pool where the water 
                            </div>
                        </div>

                        <div class="service">
                            <div class="service__title">
                                <img src="/service_4.png" alt="service icon">
                                <span>Meeting Room</span>
                            </div>
                            <div class="service__text">
                                Enjoy the sensation of swimming into horiizon with our infinity pool where the water 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.services {
    &__wrapper {
        display: flex;
        flex-direction: column-reverse;
        gap: 32px;
    }

    &__img {
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__text {
        font-family: Rubik;
        font-size: 16px;
        font-weight: 400;
        line-height: 18.96px;
        text-align: left;

        color: $grey;
        margin-bottom: 32px;
    }

    &__container {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }
}

.service {
    &__title {
        display: flex;
        align-items: center;
        gap: 24px;
        margin-bottom: 16px;

        span {
            font-family: Cardo;
            font-size: 20px;
            font-weight: 700;
            line-height: 27.08px;
            text-align: left;
        }
    }

    &__text {
        font-family: Rubik;
        font-size: 16px;
        font-weight: 400;
        line-height: 18.96px;
        text-align: left;

        color: $grey;
    }
}


@media (min-width: 768px) {
    .services {
        &__wrapper {
            flex-direction: row;
            align-items: center;
        }

        &__img {
            width: 50%;
        }

        &__content {
            width: 50%;
        }

        &__container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

    }
}
</style>