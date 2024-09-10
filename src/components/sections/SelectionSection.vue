<script setup></script>

<template>
    <section class="selection section">
        <div class="container">
            <div class="selection__wrapper">
                <div class="selection__subtitle subtitle">Our Selection</div>
                <h2 class="selection__title title title--white">Only the Best for You</h2>

                <div class="selection__hotel">
                    <div class="selection__hotel-content">
                        <div class="selection__hotel-title">Luxor Hotel & Casino</div>
                        <div class="selection__hotel-text">Upgrade to our Premium Rooms for an enhanced experience. These spacious rooms feature a king-sized bed, elegant décor, and premium amenities. Relax in the seating area, take advantage of the in-room minibar, and enjoy the luxury of a larger bathroom with upgraded toiletries.</div>
                        <a href="#" class="selection__hotel-btn btn">Booking Now</a>
                    </div>
                    <div class="selection__hotel-img">
                        <img src="/selection.png" alt="Luxor Hotel & Casino">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.selection {
    background-color: $black;

    &__subtitle,
    &__title {
        text-align: center;
    }

    &__title {
        margin-bottom: 32px;
    }

    &__hotel {
        display: flex;
        flex-direction: column;
        background-color: $brown-light;

        &-content {
            padding: 16px 12px;
        }

        &-title {
            font-family: Cardo;
            font-size: 32px;
            font-weight: 700;
            line-height: 43.33px;
            text-align: left;

            color: $white;
            margin-bottom: 16px;
        }

        &-text {
            font-family: Rubik;
            font-size: 16px;
            font-weight: 400;
            line-height: 18.96px;
            text-align: left;

            color: $white;
            margin-bottom: 16px;
        }

        &-btn {
            background: $black;
            color: $white;
            padding: 12px 16px;
            width: 135px;

            &:hover {
                background: $white;
                color: $black;
            }
        }

        &-img {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

@media (min-width: 768px) {
    .selection {
        &__title {
            margin-bottom: 64px;
        }

        &__hotel {
            flex-direction: row;
            align-items: center;

            &-content {
                width: 60%;
                padding: 0 56px;
            }

            &-title {
                margin-bottom: 32px;
            }

            &-text {
                max-width: 500px;
                margin-bottom: 32px;
            }

            &-img {
                width: 40%;
            }
        }
    }
}
</style>