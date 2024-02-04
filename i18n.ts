import axios from 'axios';
import { getRequestConfig } from 'next-intl/server';

const translations = async (locale: any) => {
    try {
        const result = await axios.get(
            'https://admin.heartfultower.com/api/translations?populate=*'
        );

        switch (result.data.data[0].attributes) {
            case 'indonesia':
                locale = 'id';
                break;
            case 'japan':
                locale = 'jp';
                break;
            case 'english':
                locale = 'en';
                break;
            default:
                locale = locale;
        }

        return result.data.data[0].attributes;
    } catch (error) {
        console.error('Error fetching hero data:', error);
    }
};

console.log(translations('id'));

export default getRequestConfig(async ({ locale }) => ({
    // messages: (await translations(locale)).default,
    messages: (await import(`./messages/${locale}.json`)).default,
}));
