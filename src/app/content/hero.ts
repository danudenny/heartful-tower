import { client } from '../../utils';

export const getHero = () => {
    client
        .getEntries({
            content_type: 'hero',
            limit: 1,
        })
        .then((item) => {
            return item.items[0].fields?.image;
        });
};
