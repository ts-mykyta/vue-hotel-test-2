<script setup>
const props = defineProps({
    customClass: {
        type: String,
        required: false
    }
})


function toggleMenu() {
    const header = document.querySelector('.header')
    const body = document.querySelector('body')

    header.classList.toggle('header--active');
    body.classList.toggle('body--hidden')
}
</script>

<template>
    <header class="header" :class="customClass">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__logo">
                    <img src="../assets/img/logo.png" alt="logo">
                    <span>Casino Hotels</span> 
                </div>

                <div class="header__burger" @click="toggleMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="header__menu">
                    <nav>
                        <ul>
                            <li>
                                <a href="/" class="header__menu-link">Home</a>
                            </li>
                            <li>
                                <a href="#" class="header__menu-link">Rooms</a>
                            </li>
                            <li>
                                <a href="#" class="header__menu-link">Services</a>
                            </li>
                            <li>
                                <a href="#" class="header__menu-link">Hotels</a>
                            </li>
                        </ul>
                    </nav>

                    <a href="#" class="header__btn-mobile btn btn--white">Contact us</a>
                </div>

                <a href="#" class="header__btn-desk btn btn--white">Contact us</a>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.header {
    position: absolute;
    z-index: 99999;
    left: 0;
    top: 0;
    width: 100%;
    padding-top: 48px;

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
        display: flex;
        align-items: center;
        gap: 16px;

        span {
            font-family: Cardo;
            font-size: 24px;
            font-weight: 700;
            line-height: 32.5px;
            text-align: left;

            transition: $transition;
            color: $white;
        }
    }

    &__burger {
        width: 22px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        cursor: pointer;
        transition: $transition;

        &:hover {
            span {
                background-color: $brown-light;
            }
        }

        span {
            height: 2px;
            background-color: #fff;
            transition: $transition;
        }

        span:nth-child(1) {
            width: 14px;
        }

        span:nth-child(3) {
            width: 19px;
        }
    }

    &__menu {
        position: absolute;
        left: -400px;
        opacity: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 160px 0;
        background: $brown;
        transition: $transition;

        li {
            margin-bottom: 48px;
            text-align: center;
        }

        &-link {
            font-family: Poppins;
            font-size: 32px;
            font-weight: 400;
            line-height: 40px;
            text-align: center;
            color: #fff;
            -webkit-transition: $transition;
            transition: $transition;

            &:hover {
                color: $brown-light;
            }
        }
    }

    &__btn {
        &-desk {
            display: none;
        }

        &-mobile {
            max-width: 170px;
        }
    }


    /* Active */
    &--active {
        .header__logo {
            span {
                color: $white !important;
            }
        }

        .header__burger {
            span {
                background-color: $white !important;

            }
        }

        .header__burger span:nth-child(1) {
            transform: rotate(40deg) translateX(8px);
            width: 100%;
        }

        .header__burger span:nth-child(2) {
            transform: rotate(-40deg) translateX(7px);
        }

        .header__burger span:nth-child(3) {
            opacity: 0;
        }

        .header__menu {
            left: 0;
            opacity: 1;
        }
    }
}


.header.header--policy {
    .header__menu-link {
        color: $white;

        &:hover {
            color: $brown-light;
        }
    }

    .header__logo span {
        color: $brown;
    }

    .header__burger {
        span {
            background: #101010;
        }

        &:hover {
            span {
                background-color: $brown-light;
            }
        }
    }

    .header--active .header__logo,
    .header--active .header__menu-link {
        color: #fff;
    }

    .header--active .header__menu-link:hover {
        color: #ff036b;
    }
    .header--active .header__burger span {
        background: #fff;
    }
}


@media (min-width: 768px) {
    .header {
        &__burger {
            display: none;
        }

        &__menu {
            position: unset;
            z-index: 1;
            opacity: 1;
            background: inherit;
            padding: 0;
            flex-direction: row;
            height: auto;
            width: auto;

            ul {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 24px;
            }

            li {
                margin-bottom: 0;
            }

            &-link {
                font-family: Raleway;
                font-size: 18px;
                font-weight: 700;
                line-height: 21.13px;
                text-align: left;
            }

        }

        &__btn {
            &-desk {
                display: flex;
                width: auto;
            }

            &-mobile {
                display: none;
            }
        }
    }

    .header.header--policy {
        .header__menu-link {
            color: $brown;

            font-family: Cardo;
            font-size: 20px;
            font-weight: 700;
            line-height: 27.08px;
            text-align: left;
        }
    }
}







</style>
