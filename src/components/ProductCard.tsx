import { FaStar } from "react-icons/fa";

export interface ProductCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    image: string;
    rating: {
        rate: number;
        count: number;
    };

}

export default function ProductCard({
    title,
    price,
    image,
    rating
}: ProductCardProps) {
    return (
        <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg border-2 border-border">
            <div
                className="relative h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* Dark gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white">
                        <h3 className="text-l font-semibold">{title}</h3>
                        <div className="flex flex-row items-center justify-between">
                            <p className="flex text-lg">${price}</p>
                            <p className="flex text-black text-xs rounded-xl bg-white py-1 px-2 gap-1">
                                {rating.rate}<FaStar color="#ffe234" size={15} /> <span className="p-0"> | </span> {rating.count}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}