<template>
    <nav>
        <a class="btn-grad">
            {{ btnText }}
        </a>
        <ul>
            <li v-for="(navItem, id) in navItems" :key="id">
                <a>
                    {{ navItem.text }}
                    <span class="notification" v-if="navItem.notificationNumber">
                        {{ navItem.notificationNumber }}
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</template>         

<script setup lang="ts">
import { NavItem } from '../models/NavItem';

const bp = useBreakpoints()

const navItems: Array<NavItem> = [
    { text: 'Opis Projektu'},
    { text: 'Cele'},
    { text: 'Aktualnosci', notificationNumber: 42},
    { text: 'Komentarze'},
]

const btnText = computed<string>(() => bp.value.lSm ? 'Wspieram projekt' : 'Wspieram')
</script>

<style lang="scss" scoped>
@import 'utils/style/_colors';

nav {
    overflow: hidden;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.253);
    ul {
        padding: 1rem 1rem 1rem 7%;
        margin: 0;
        text-align: left;
        white-space: nowrap;
        li {
            display: inline;
            font-size: 16px;
            cursor: pointer;
            a {
                color: $darker-grey;
                padding: 1rem 0.5rem;
                &:hover {
                    background-color: $light-grey;
                }
            }
        
        }
    } 
    .btn-grad {
        background-image: linear-gradient(to right, $darker-blue 0%, $light-blue  50%);
        padding: 1rem 2rem;
        text-align: center;
        background-size: 200% auto;
        color: white;            
        box-shadow: 0 0 20px $shadow;
        border-radius: 2rem;
        display: block;
        white-space: nowrap;
        margin-right: 7%;
        cursor: pointer;
    }
    .notification {
        font-size: 12px;
        color: white;
        background-color: $notification;
        border-radius: 1rem;
        padding: 4px 8px;
        margin-left: 4px;
    }    
}
</style>
