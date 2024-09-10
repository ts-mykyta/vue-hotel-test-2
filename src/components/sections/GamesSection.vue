<script setup>
</script>

<template>
    <section class="games section">
        <div class="container">
            <div class="games__wrapper">
                <div class="games__titles">
                    <div class="games__subtitle subtitle">Casino Games</div>
                    <h2 class="games__title title">Immerse Yourself in the Thrills of Casino Gaming</h2>
                </div>

                <div class="games__descr">
                    Dive into the exhilarating world of casino gaming with our extensive selection of games. Whether you're a fan of classic table games like roulette and blackjack or prefer the fast-paced excitement of slot machines, we have something for everyone.
                </div>
            </div>

            <div class="image__container">
                <div class="image" style="background-image: url('game_1.png');">
                    <div class="image__overlay"></div>
                    <div class="image__title">Slot Machines</div>
                    <div class="image__text">Experience the thrill of the reels with our diverse selection of slot machines. From classic three-reel slots to the latest video slots featuring exciting themes and bonus.</div>
                </div>

                <div class="image image--scale" style="background-image: url('game_2.png');">
                    <div class="image__overlay"></div>
                    <div class="image__title">Roulette</div>
                    <div class="image__text">Roulette is one of the most iconic casino games. Players bet on numbers, combinations of numbers, colors, and then the dealer spins a wheel with a ball inside.</div>
                </div>

                <div class="image" style="background-image: url('game_3.png');">
                    <div class="image__overlay"></div>
                    <div class="image__title">Blackjack</div>
                    <div class="image__text">Blackjack is one of the most popular card games in casinos. In this game, players compete against the dealer, trying to reach a hand value of 21 without exceeding it.</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.games {
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
    .games {
        &__wrapper {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        &__title {
            max-width: 570px;
        }

        &__descr {
            max-width: 500px;
        }
    }
}
</style>