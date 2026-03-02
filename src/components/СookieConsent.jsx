import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

export function initCookieConsent() {
  CookieConsent.run({

    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom center"
      }
    },

    categories: {
      necessary: {
        readOnly: true
      }
    },

    language: {
      default: "uk",
      translations: {
        uk: {
          consentModal: {
            title: "Ми використовуємо cookies 🍪",
            description:
              "Ми використовуємо cookies для роботи сайту відповідно до GDPR.",
            acceptAllBtn: "Приймаю",
            acceptNecessaryBtn: "Відмовитись"
          }
        }
      }
    },

    onConsent: () => {
      console.log("Cookies accepted");
    }

  });
}