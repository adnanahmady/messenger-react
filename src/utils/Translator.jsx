import i18next from 'i18next';
import { Trans } from 'react-i18next';

export default function t(..._texts) {
    return _texts.map(_text => i18next.t(_text)).join(' ');
}

export { Trans }