import LightGallery from '@/components/LightGallery';
import Header from '@/components/Header';
import {getImages} from '@/lib/api';

const Page = async () => {
    const data = await getImages()
    console.log(data)
    return (
        <div className="w-full h-full">
            <Header title='Galeria' subtitle='Lorem ipsum dolor sit amet' />
            <section className="grid grid-cols-gallery auto-rows-[10px]">
                {data.files.map((item: { id: number, name: string, url: string, width: number, height: number; }, idx: any) => {
                    const widtHeightRatio = (item.height / item.width)
                    const galleryHeight = Math.ceil(250 * widtHeightRatio);
                    const photoSpans = Math.ceil(galleryHeight / 10) + 1;
                    return (
                        <LightGallery key={item.id} url={process.env.NEXT_PUBLIC_BACKEND_URL+item.url} name={item.name} data={data} item={item} idx={idx} photoSpans={photoSpans} height={item.height} width={item.width} />
                    );
                })}
            </section>
        </div>
    );
};

export default Page;