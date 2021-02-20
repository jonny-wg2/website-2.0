<template>
    <section
        class="pricing section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="pricing-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    v-if="pricingSwitcher"
                    class="pricing-switcher center-content"
                >
                    <c-switch
                        v-model="priceChangerValue"
                        true-value="1"
                        false-value="0"
                        right-label="Billed Annually">
                        Billed Monthly
                    </c-switch>
                </div>
                <div
                    v-if="pricingSlider"
                    class="pricing-slider center-content"
                >
                    <label class="form-slider">
                        <span class="mb-16">How many users do you have?</span>
                        <input
                            type="range"
                            ref="slider"
                            v-model="priceChangerValue"
                            @input="handlePricingSlide"
                            />
                        </label>
                    <div ref="sliderValue" class="pricing-slider-value">
                        {{ getPricingData(priceInput) }}
                    </div>
                </div>     
                           
                <div
                    class="tiles-wrap has-bg-color"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-from-bottom">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price">
                                        <span class="pricing-item-price-currency h3 text-color-mid">{{ getPricingData(this.priceOutput.plan1, 0) }}</span>
                                        <span class="pricing-item-price-amount h1">{{ getPricingData(this.priceOutput.plan1, 1) }}</span>
                                        <span class="pricing-item-price-after text-sm">{{ getPricingData(this.priceOutput.plan1, 2) }}</span>
                                    </div>

                                    <div class="text-color-low text-xs mt-4 mb-4">
                                        <i>Subject to change depending on integration*</i>
                                    </div>
                                </div>

                                <div class="pricing-item-features mb-40">
                                    <div class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                                        Our platform includes
                                    </div>
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">Connectivity (HLR / HSS)</li>
                                        <li class="is-checked">Messaging (SMS / MMS)</li>
                                        <li class="is-checked">Voice (Signaling / Diameter / Volte)</li>
                                        <li class="is-checked">Voice (Lawful Intercept)</li>
                                        <li class="is-checked">Data (PGW)</li>
                                        <li class="is-checked">Data Throttling (PCRF)</li>
                                        <li class="is-checked">Telco Firewall (STP / DRA)</li>
                                        <li class="is-checked">Voicemail</li>
                                        <li class="is-checked">Real-time CDRs</li>
                                        <li class="is-checked">BYO SIMs</li>
                                        <li class="is-checked">Subscriber Management Platform</li>
                                        <li class="is-checked">Connectivity (Global Roaming)</li>
                                        <li class="is-checked">Telco-grade APIs</li>
                                        <li class="is-checked">Multi Regional</li>
                                        <li class="is-checked">24/7 Level 3 Oncall & Support</li>
                                        <li class="is-checked">Exposed system metrics</li>
                                        <li class="is-checked">Compliance grade security</li>
                                        <li class="is-checked">GDPR Certified</li>
                                        <li class="is-checked">99.99999 Uptime *</li>
                                    </ul>
                                </div>
                               
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="secondary" wide href="/contact">Schedule a demo</c-button>
                            </div>
                        </div>
                    </div>
<!--                    
                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price">
                                        <span class="pricing-item-price-currency h3 text-color-mid">{{ getPricingData(this.priceOutput.plan2, 0) }}</span>
                                        <span class="pricing-item-price-amount h1">{{ getPricingData(this.priceOutput.plan2, 1) }}</span>
                                        <span class="pricing-item-price-after text-sm">{{ getPricingData(this.priceOutput.plan2, 2) }}</span>
                                    </div>
                                    <div class="text-color-low text-xs mt-4 mb-4">
                                        Lorem ipsum is a common text
                                    </div>
                                </div>
                                <div class="pricing-item-features mb-40">
                                    <div class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                                        What’s included
                                    </div>
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li>Excepteur sint occaecat velit</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="secondary" wide href="#">Start free trial</c-button>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="400">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price">
                                        <span class="pricing-item-price-currency h3 text-color-mid">{{ getPricingData(this.priceOutput.plan3, 0) }}</span>
                                        <span class="pricing-item-price-amount h1">{{ getPricingData(this.priceOutput.plan3, 1) }}</span>
                                        <span class="pricing-item-price-after text-sm">{{ getPricingData(this.priceOutput.plan3, 2) }}</span>
                                    </div>
                                    <div class="text-color-low text-xs mt-4 mb-4">
                                        Lorem ipsum is a common text
                                    </div>
                                </div>
                                <div class="pricing-item-features mb-40">
                                    <div class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                                        What’s included
                                    </div>
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="secondary" wide href="#">Start free trial</c-button>
                            </div>
                        </div>
                    </div>
                    -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CSwitch from '@/components/elements/Switch.vue'
import CButton from '@/components/elements/Button.vue'

export default {
  name: 'CPricing',
  components: {
    CSectionHeader,
    CSwitch,
    CButton
  },
  mixins: [SectionTilesProps],
  props: {
    pricingSwitcher: {
      type: Boolean,
      default: false
    },
    pricingSlider: {
      type: Boolean,
      default: false
    }        
  },
  data() {
    return {
      sectionHeader: {
        title: 'Everything you need for customer success',
        paragraph: 'Our one stop shop that\'s simple'
      },
      priceChangerValue: "1",
      priceInput: {
        0: "50,000",
        1: "250,000",
        2: "1,000,000",
        3: "5,000,000",
        4: "10,000,000"
      },
      priceOutput: {
        plan1: {
          0: ["$", "0.25", "/m - per SIM"],
          1: ["$", "0.21", "/m - per SIM"],
          2: ["$", "0.17", "/m - per SIM"],
          3: ["$", "0.15", "/m - per SIM"],
          4: ["", "Custom Quote"],
          5: ["$", "42", "/m"],
          6: ["$", "58", "/m"],
          7: ["$", "117", "/m"],
          8: ["$", "Custom Quote", "/m"]
        },
        plan2: {
          0: ["$", "13", "/m"],
          1: ["$", "17", "/m"],
          2: ["$", "21", "/m"],
          3: ["$", "25", "/m"],
          4: ["$", "42", "/m"],
          5: ["$", "58", "/m"],
          6: ["$", "117", "/m"],
          7: ["$", "208", "/m"],
          8: ["$", "299", "/m"]
        },
        plan3: {
          0: ["$", "17", "/m"],
          1: ["$", "21", "/m"],
          2: ["$", "25", "/m"],
          3: ["$", "42", "/m"],
          4: ["$", "58", "/m"],
          5: ["$", "117", "/m"],
          6: ["$", "208", "/m"],
          7: ["$", "299", "/m"],
          8: ["$", "499", "/m"]
        }
      }
    }
  },
  methods: {    
    handlePricingSlide(e) {
      this.handleSliderValuePosition(e.target)
    },
    handleSliderValuePosition(input) {
      const multiplier = input.value / input.max
      const thumbOffset = this.thumbSize * multiplier
      const priceInputOffset = (this.thumbSize - this.$refs.sliderValue.clientWidth) / 2
      this.$refs.sliderValue.style.left = input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px'
    },
    getPricingData(values, set) {
      return set !== undefined ? values[this.priceChangerValue][set] : values[this.priceChangerValue]
    }
  },
  mounted() {
    if (this.pricingSlider) {
      this.$refs.slider.setAttribute('min', 0)
      this.$refs.slider.setAttribute('max', Object.keys(this.priceInput).length - 1)
      this.thumbSize = parseInt(window.getComputedStyle(this.$refs.sliderValue).getPropertyValue('--thumb-size'), 10)
      this.handleSliderValuePosition(this.$refs.slider)
    }        
  }
}
</script>