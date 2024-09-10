<script setup>

</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__contact">
                    <div class="footer__logo">
                        <img src="../assets/img/logo.png" alt="logo">
                        <span>Casino Hotels</span>
                    </div>
                    
                    <div class="footer__address">
                        <img src="../assets/img/map.png" alt="Geo icon">
                        <span>Jl. Cinde Wilis Gang IV, US</span>
                    </div>

                    <div class="footer__email">
                        <img src="../assets/img/mail.png" alt="email icon">
                        <span>contact@casinohotels.com</span>
                    </div>
                </div>

                <div class="footer__nav">
                    <div class="footer__title">Helpfull Link</div>
                    <div class="footer__nav-container">
                        <router-link to="/">
                            <span class="footer__link">Home</span>
                        </router-link>   
                        <a href="#" class="footer__link">Rooms</a>    
                        <a href="#" class="footer__link">Services</a>    
                        <a href="#" class="footer__link">Hotels</a>
                    </div>    
                </div>

                <div class="footer__policy">
                    <div class="footer__title">Supports</div>
                    <div class="footer__nav-container">
                        <router-link to="/terms">
                            <span class="footer__link">Terms of Service</span>
                        </router-link>    
                        <router-link to="/privacy">
                            <span class="footer__link">Privacy Policy</span>
                        </router-link>   
                    </div>    
                </div>
            </div>
        </div>

        <div class="footer__copyright">
            ©Copyrights 2024. All rights reserved By Casino Hotel.
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.footer {
    background: $black;
    color: $grey;
    padding: 32px 0;

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        margin-bottom: 24px;
    }

    &__logo {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 22px;

        span {
            font-family: Cardo;
            font-size: 24px;
            font-weight: 700;
            line-height: 32.5px;
            text-align: left;
            
            color: $white;
        }
    }

    &__address,
    &__email {
        display: flex;
        align-items: center;
        gap: 10px;

        span {
            font-family: Rubik;
            font-size: 16px;
            font-weight: 400;
            line-height: 18.96px;
            text-align: left;
            
        }
    }

    &__address {
        margin-bottom: 22px;
    }


    &__title {
        font-family: Cardo;
        font-size: 24px;
        font-weight: 700;
        line-height: 32.5px;
        text-align: center;

        color: $white;
        margin-bottom: 20px;
    }

    &__nav-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
    }

    &__link {
        font-family: Rubik;
        font-size: 16px;
        font-weight: 500;
        line-height: 20.8px;
        text-align: center;
    }

    &__copyright {
        padding-top: 24px;
        border-top: 2px solid #CB946A4F;
        text-align: center;
        font-family: Rubik;
        font-size: 16px;
        font-weight: 400;
        line-height: 18.96px;
    }
}

@media (min-width: 768px) {
    .footer {
        &__wrapper {
            flex-direction: row;
            justify-content: space-between;
            align-items: start;
        }

        &__title {
            text-align: left;
        }

        &__nav-container {
            align-items: start;
        }
    }
}

</style>