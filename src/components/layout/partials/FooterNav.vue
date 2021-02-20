<template>
    <nav class="footer-nav">
        <ul class="list-reset">
            <li>
                <router-link to="/contact/">Contact</router-link>
            </li>
            <li>
                <router-link to="/privacy/">Privacy</router-link>
            </li>
            <li>
                <router-link to="/security/">Security</router-link>
            </li>
            <li>
                <a href="https://support.wgtwo.com" target="_blank">Support</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'CFooterNav'
}
</script>
