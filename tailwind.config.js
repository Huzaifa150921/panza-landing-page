/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: {
          bg: 'var(--navbar-bg-color)',
          text: 'var(--navbar-logo-textcolor)',
          accent: 'var(--navbar-logo-textchar)',
        },

        home: {
          headingprimary: 'var(--home-primary-color)',
          headingsecondary: 'var(--home-secondary-color)',
          body: 'var(--home-body-color)'
        },

        button: {
          text: 'var(--button-text-color)',
          bggreen: 'var(--button-bg-color1)',
          bgblue: 'var(--button-bg-color2)',
          border: 'var(--button-border-color)'
        },

        homecard: {
          bordereven: 'var(--homecard-even-border-color)',
          borderodd: 'var(--homecard-odd-border-color)',
          bgeven: 'var(--homecard-even-bg-color)',
          bgodd: 'var(--homecard-odd-bg-color)',
          iconeven: 'var(--homecard-even-icon-color)',
          iconodd: 'var(--homecard-odd-icon-color)',
          texteven: 'var(--homecard-even-text-color)',
          textodd: 'var(--homecard-odd-text-color)',
        },

        features: {
          line: 'var(--features-line-bg-color)',
          heading: 'var(--featurescard-headingcolor)',
          headingmain: 'var(--featurescard-headingcolor-main)',
          text: 'var(--featurescard-text-color)',
          icon: 'var(--featurescard-icon-color)',
        },

        about: {
          heading: 'var(--about-heading-Color)',
          navigation: 'var(--about-navigation-color)',
          navigationactive: 'var(--about-navigation-color-active)',
          progressborder: 'var(--aboutprogrees-border-color)',
          progresstext: 'var(--aboutprogress-text-color)',
          progress1: 'var(--aboutprogress-color1)',
          progress2: 'var(--aboutprogress-color2)',
          progress3: 'var(--aboutprogress-color3)',
          progress4: 'var(--aboutprogress-color4)',
          progress5: 'var(--aboutprogress-color5)',
        },

        work: {
          color: 'var(--work-text-color)',
          bgcolor: 'var(--work-bg-color)',
          border: 'var(--work-border-color)',
          borderactive: 'var(--work-border-color-active)',
          navtext: 'var(--work-textnav-color)',
          navtextactive: 'var(--work-textnav-color-active)',
          buttontext: 'var(--worknavbutton-textcolor)',
          buttonbg: 'var(--worknav-button-bg-color)',
          buttonicon: 'var(--worknav-button-icon-color)',
        },

        services: {
          color: 'var(--services-text-color)',
          bgcoloractive: 'var(--service-nav-button-bg-color-active)',
          bgcolor: 'var(--service-nav-button-bg-color)',
          bordercoloractive: 'var(--service-nav-button-border-color-active)',
          bordercolor: 'var(--service-nav-link-border-color)',
          textcolor: 'var(--service-text-link-button-color)',
          textcoloractive: 'var(--service-text-link-button-color-active)',
        },

        servicesSecondary: {
          heading: 'var(--servicessecondary-text-heading-color)',
          text: 'var(--servicessecondary-text-color)',
          buttonbg: 'var(--servicessecondary-button-bg-color)',
          buttontext: 'var(--servicessecondary-button-border-color)',
          buttonborder: 'var(--servicessecondary-button-text-color)',
        },

        news: {
          introtext: 'var(--news-intro-text-color)',
          tagbgactive: 'var(--newscard-tag-bg-color-active)',
          tagbg: 'var(--newscard-tag-bg-color)',
          tagtext: 'var(--newscard-tag-text-color)',
          tagheadingactive: 'var(--newscard-bottom-text-heading-color-active)',
          tagheading: 'var(--newscard-bottom-text-heading-color)',
          bottomtext: 'var(--newscard-bottom-text-color)',
          bottombg: 'var(--newscard-bottom-bg-color)',


        },
        newscard: {
          borderEven: 'var(--newssecondarycard-border-color-even)',
          borderOdd: 'var(--newssecondarycard-border-color-odd)',
          cardbgEven: 'var(--newssecondarycard-bg-color-even)',
          cardbgOdd: 'var(--newssecondarycard-bg-color-odd)',
          outerdivborederEven: 'var(--newssecondarycard-border-color-outerdiv-even)',
          outerdivborederOdd: 'var(--newssecondarycard-border-color-outerdiv-odd)',
          innerdivbgEven: 'var(--newssecondarycard-innerdiv-bg-color-even)',
          innerdivbgOdd: 'var(--newssecondarycard-innerdiv-bg-color-odd)',
          icon: 'var(--newssecondarycard-icon-color)',
          heading: 'var(--newssecondarycard-heading-color)',
          text: 'var(--newssecondarycard-text-color)'
        },

        pricing: {
          introheading: 'var(--pricing-intro-heading-color)',
          cardbg: 'var(--pricingcard-bg-color)',
          cardheading: 'var(--pricingcrad-heading-color)',
          cardheadingactive: 'var(--pricingcrad-heading-color-active)',
          cardtext: 'var(--pricingcard-price-text-color)',
          cardpricebg: 'var(--pricingcard-price-bg-color)',
          cardpricebgactive: 'var(--pricingcard-price-bg-color-active)',
          carddetailstext: 'var(--pricingcard-details-text-color)',
          cardbutton: 'var(--pricingcard-button-color)',
          cardbuttonactive: 'var(--pricingcard-button-color-active)',
          cardbuttontext: 'var(--pricingcard-button-text-color)',
          cardbannerbg: 'var(--pricingcard-banner-bg-color)',
          cardbannertext: 'var(--pricingcard-banner-text-color)',
          cardborder: 'var(--pricingcard-border-color)',
          cardshadow: 'var(--pricingcard-shadow-color)',
        },

        testmonial: {
          introheading: 'var(--testmonial-intro-heading-color)',
          quotes: 'var(--testmonial-quotes-color)',
          text: 'var(--testmonial-text-color)',
          name: 'var(--testmonial-name-color)',
          imageborder: 'var(--testmonial-imageborder-color)',
          imageshadow: 'var(--testmonial-imageshadow-color)',
          backbuttonborder: 'var(--testmonial-buttonback-border-color)',
          forwordbuttonborder: 'var(--testmonial-buttonforwrod-border-color)',
          buttonforwordbg: 'var(--testmonial-buttonforwordbg-color)',
          icon: 'var(--testmonial-button-icon-color)',
        },

        team: {
          introheading: 'var(--team-introcolor)',
          name: 'var(--team-name-color)',
          role: 'var(--team-role-color)',
          bg: 'var(--team-bg-color)',
          icon: 'var(--team-icon-color)',
          border: 'var(--team-border-color)',
          facebook: 'var(--team-fb-color)',
          X: 'var(--team-x-color)',
          skype: 'var(--team-skype-color)',
          insta: 'var(--team-insta-color)'
        },

        wordpress: {
          primaryheading: 'var(--wordpress-primary-heading-color)',
          secondaryheading: 'var(--wordpress-secondary-heading-color)',
          listext: 'var(--wordpress-list-text-color)',
          listicon: 'var(--wordpress-list-icon-color)',
          buttonborder: 'var(--wordpress-button-border-color)',
          buttonbg: 'var(--wordpress-button-bg-color)',
          buttontext: 'var(--wordpress-button-textcolor)',
        },

        contact: {
          introheading: 'var(--contact-intro-heading-color)',
          buttonbg: 'var(--contact-button-bg-color)',
          buttontext: 'var(--contact-button-text-color)',
          inputborder: 'var(--contact-border-color)',
        },

        footer: {
          bg: 'var(--footer-bg-color)',
          heading: 'var(--footer-heading-color)',
          active: 'var(--footer-active-color)',
          text: 'var(--footer-text-color)',
          date: 'var(--footer-date-color)',
          btnactivebg: 'var(--footer-button-color-active)',
          btnborderactive: 'var(--footer-button-border-color-active)',
          btntextactive: 'var(--footer-button-text-color-active)',
          btnborder: 'var(--footer-button-border-color)',
          btntext: 'var(--footer-button-text-color)',
          inputbg: 'var(--footer-input-bg-color)',
          inputbtntext: 'var(--footer-input-button-text-color)',
          inputbtnbg: 'var(--footer-input-button-bg-color)',
        },

        copyright: {
          bg: 'var(--copyright-bg-color)',
          text: 'var(--copyright-text-color)',
          textactive: 'var(--copyright-text-color-active)',
        }

      },
      backgroundImage: {
        home: 'var(--home-bg)',
        about: 'var(--about-bg)',
        service: 'var(--services-bg)',
        testmonial: 'var(--testmonial-bg)',
        wordpress: 'var(--wordpress-bg)',

      },
      galleryImage: {
        image1: 'var(--galleryimage1)',
        image2: 'var(--galleryimage2)',
        image3: 'var(--galleryimage3)',
        image4: 'var(--galleryimage4)',
        image5: 'var(--galleryimage5)',
        image6: 'var(--galleryimage6)',
        image7: 'var(--galleryimage7)',
        image8: 'var(--galleryimage8)',
        image9: 'var(--galleryimage9)',
        image10: 'var(--galleryimage10)',
        image11: 'var(--galleryimage11)',
        image12: 'var(--galleryimage12)',
      }
    },
  },
  plugins: [],
}
