import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import _farsi from '../translates/fa.json';

i18next.use(initReactI18next).init(
    {
        resources: {
            fa: {
                translation: _farsi
            }
        },
        lng: 'fa',
        fallbacking: 'en',
        interpolation: {
            escapeValue: false
        }
    }
);

export default i18next;