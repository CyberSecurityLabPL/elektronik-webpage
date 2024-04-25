import sizeOf from 'image-size';
import LightGallery from '@/components/LightGallery';
import Header from '@/components/Header';

const Page = () => {
    const data = [
        {
            link: '/galeria/galeria.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria1.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria2.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria3.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria4.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria5.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria6.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria1.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria2.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria3.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria4.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria5.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria6.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria1.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria2.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria3.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria4.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria5.jpg',
            name: 'książka',
        },
        {
            link: '/galeria/galeria6.jpg',
            name: 'książka',
        },
    ];

    return (
        <div className="w-full h-full">
            <Header title='Galeria' subtitle='Lorem ipsum dolor sit amet' />
            <section className="grid grid-cols-gallery auto-rows-[10px]">
                {data.map((item, idx) => {
                    const dimensions = sizeOf(`public${item.link}`)
                    //@ts-expect-error
                    const widtHeightRatio = (dimensions.height / dimensions.width)
                    const galleryHeight = Math.ceil(250 * widtHeightRatio);
                    const photoSpans = Math.ceil(galleryHeight / 10) + 1;
                    return (
                        <LightGallery key={idx+item.name} data={data} item={item} idx={idx} dimensions={dimensions} photoSpans={photoSpans} />
                    );
                })}
            </section>
        </div>
    );
};

export default Page;
