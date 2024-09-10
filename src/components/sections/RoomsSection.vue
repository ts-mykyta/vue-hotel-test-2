<script setup>
</script>

<template>
    <section class="rooms section">
        <div class="container">
            <div class="rooms__wrapper">
                <div class="rooms__titles">
                    <div class="rooms__subtitle subtitle">Rooms Casino Hotels</div>
                    <h2 class="rooms__title title">Rooms & Suites Tailored to Your Comfort</h2>
                </div>

                <div class="rooms__descr">
                    Discover a range of luxurious accommodations designed to provide the ultimate in comfort and style.
                </div>
            </div>

            <div class="image__container">
                <div class="image" style="background-image: url('rooms_1.png');">
                    <div class="image__overlay"></div>
                    <div class="image__title">Presidential Suite</div>
                    <div class="image__text">20 m2 | Balcony | Lake View</div>
                </div>

                <div class="image image--scale" style="background-image: url('rooms_2.png');">
                    <div class="image__overlay"></div>
                    <div class="image__title">Premium Room</div>
                    <div class="image__text">20 m2 | Balcony | Lake View</div>
                </div>

                <div class="image" style="background-image: url('rooms_3.png');">
                    <div class="image__overlay"></div>
                    <div class="image__title">Deluxe Room</div>
                    <div class="image__text">20 m2 | Balcony | Lake View</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.rooms {
    &__wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;
    }

    &__descr {
        font-family: Rubik;
        font-size: 20px;
        font-weight: 400;
        line-height: 23.7px;
        text-align: left;
        color: $grey;
    }
}

@media (min-width: 768px) {
    .rooms {
        &__wrapper {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        &__title {
            max-width: 570px;
        }

        &__descr {
            max-width: 350px;
        }
    }
}
</style>