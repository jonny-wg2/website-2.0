<template>
    <footer class="site-footer invert-color" :class="topOuterDivider && 'has-top-divider'">
        <div class="container">
            <div class="site-footer-inner" :class="topDivider && 'has-top-divider'">
                <div class="footer-top text-xxs">
                    <div class="footer-blocks">
                        <div class="footer-block">
                            <c-logo class="mb-16" />
                            <div class="footer-copyright">&copy; 2017-2021 WORKING GROUP TWO</div>
                        </div>
                        <div class="footer-block">
                            <div class="footer-block-title">Company</div>
                            <ul class="list-reset mb-0">
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <div class="footer-block-title">Uses cases</div>
                            <ul class="list-reset mb-0">
                                <li>
                                    <a href="#">For MVNO</a>
                                </li>
                                <li>
                                    <a href="#">For MVNE</a>
                                </li>
                                <li>
                                    <a href="#">For MNO</a>
                                </li>
                                <li>
                                    <a href="#">For IOT</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <div class="footer-block-title">Our Platform</div>
                            <ul class="list-reset mb-0 mb-0">
                                <li>
                                    <a href="https://docs.wgtwo.com">API Docs</a>
                                </li>
                                <li>
                                    <a href="#">Connectivity</a>
                                </li>
                                <li>
                                    <a href="#">Messaging</a>
                                </li>
                                <li>
                                    <a href="#">Voice</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom space-between center-content-mobile text-xxs">
                    <c-footer-nav />
                    <c-footer-social />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import CLogo from '@/components/layout/partials/Logo.vue'
import CFooterNav from '@/components/layout/partials/FooterNav.vue'
import CFooterSocial from '@/components/layout/partials/FooterSocial.vue'

export default {
  name: 'CFooter',
  components: {
    CLogo,
    CFooterNav,
    CFooterSocial
  },
  props: {
    topOuterDivider: {
      type: Boolean,
      default: false
    },      
    topDivider: {
      type: Boolean,
      default: false
    }
  }
}
</script>