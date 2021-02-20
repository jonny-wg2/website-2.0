<template>
    <section
        style="overflow:hidden"
        class="hero section center-content"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container-sm">
            <div
                class="hero-inner section-inner pb-0"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <div class="hero-content">
                    <h1 class="mt-0 mb-12 reveal-from-top" data-reveal-delay="150">
                        A mobile core network for a modern world
                    </h1>
                    <div class="container-xs">
                        <p class="m-0 mb-32 reveal-from-top" data-reveal-delay="300">
                            Pioneering telco, with a future proof core network, to help grow your company.
                        </p>
                        <div class="reveal-from-top" data-reveal-delay="450">
                            <c-button tag="a" color="primary" href="#">
                                Learn more
                            </c-button>
                        </div>
                        
                    </div>
                </div>
                <div class="hero-figure reveal-from-bottom" data-reveal-delay="600">
                    <c-image
                        class="has-shadow"
                        :src="require('@/assets/images/hero-image.svg')"
                        alt="Hero"
                        :width="896"
                        :height="502" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CButton from '@/components/elements/Button.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CHeroFull',
  mixins: [SectionProps],
  components: {
    CButton,
    CImage
  }
}
</script>