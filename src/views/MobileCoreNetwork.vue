<template>
    <fragment>
        <c-hero-full invert-color class="illustration-section-01" />
        <c-roadmap top-divider />

        <c-generic-section>
            <div class="container-xs">
                <c-section-header :data="genericSection04Header" class="center-content" />
                <c-accordion>
                    <c-accordion-item title="Nisi porta lorem mollis aliquam ut." active>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </c-accordion-item>
                    <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </c-accordion-item>
                    <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </c-accordion-item>
                    <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </c-accordion-item>
                    <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </c-accordion-item>
                </c-accordion>
            </div>
        </c-generic-section>        

        
        <c-testimonial />
        <c-cta has-bg-color invert-color split />
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutAlternative.vue'
// import section header
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
// import sections
import CHeroFull from '@/components/sections/HeroFull02.vue'
import CGenericSection from '@/components/sections/GenericSection.vue'
import CRoadmap from '@/components/sections/Roadmap.vue'
import CTestimonial from '@/components/sections/Testimonial.vue'
import CCta from '@/components/sections/Cta.vue'
// import some required elements
import CAccordion from '@/components/elements/Accordion.vue'
import CAccordionItem from '@/components/elements/AccordionItem.vue'

export default {
  name: 'Secondary',
  components: {
    CSectionHeader,
    CHeroFull,
    CGenericSection,
    CRoadmap,
    CTestimonial,
    CCta,
    CAccordion,
    CAccordionItem
  },
  data() {
    return {
      genericSection01Header: {
        title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection02Header: {
        title: 'Input forms - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection03Header: {
        title: 'Modal - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection04Header: {
        title: 'FAQ\'s'
      },      
      demoModalActive: false
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
