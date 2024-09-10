<script setup></script>

<template>
    <section class="about section">
        <div class="container">
            <div class="about__wrapper">
                <div class="about__content">
                    <div class="about__subtitle subtitle">About us</div>
                    <h2 class="about__title title title--white">We offer top-rated casino accommodations with luxury, comfort, and thrilling gaming.</h2>
                    <div class="about__text">
                        Welcome to our premier platform dedicated to bringing you the best in casino hotel experiences. Our mission is to provide travelers with a comprehensive guide to top-rated casino hotels around the world. Join us as we explore the world of casino hotels, where luxury and excitement meet.
                    </div>

                    <div class="about__benefits">
                        <div class="about__benefit">
                            <div class="about__benefit-title">
                                <img src="../../assets/img/mission.png" alt="icon">
                                <span>Our Mission</span>
                            </div>

                            <div class="about__benefit-text">
                                Our team of professionals carefully selects the best casino hotels to ensure you have the best experience for your journey.
                            </div>
                        </div>

                        <div class="about__benefit">
                            <div class="about__benefit-title">
                                <img src="../../assets/img/values.png" alt="icon">
                                <span>Our Values</span>
                            </div>

                            <div class="about__benefit-text">
                                We meticulously curate a selection of the finest establishments, offering detailed descriptions of rooms, amenities, and gaming options.                            
                            </div>
                        </div>
                    </div>
                </div>

                <div class="about__img">
                    <img src="../../assets/img/about_img.png" alt="hotel photo">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.about {
    background: $brown;

    &__wrapper {
        display: flex;
        flex-direction: column;
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

    &__benefit {
        margin-bottom: 24px;
        &-title {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 16px;

            font-family: Cardo;
            font-size: 20px;
            font-weight: 400;
            line-height: 27.08px;
            text-align: left;

            color: $white;
        }

        &-text {
            font-family: Rubik;
            font-size: 14px;
            font-weight: 400;
            line-height: 16.59px;
            text-align: left;

            color: $grey;
        }
    }

    &__img {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}


@media (min-width: 768px) {
    .about {
        &__wrapper {
            flex-direction: row;
            align-items: center;
            gap: 24px;
        }

        &__content {
            width: 50%;
        }

        &__img {
            width: 50%;
            height: 100%;
        }
    }
}
</style>